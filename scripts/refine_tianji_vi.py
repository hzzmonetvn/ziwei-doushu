#!/usr/bin/env python3
"""Review machine-generated Thiên Kỷ translations using aligned Chinese originals.

Unlike global find/replace, each correction is gated on the *same record's*
Chinese source. This prevents replacing unrelated Vietnamese prose.
The original source fields are immutable. The report is auditable.
Run after translate_tianji_vi.py. Does not require internet or dependencies.

  python3 scripts/refine_tianji_vi.py
  python3 scripts/refine_tianji_vi.py --check
"""
from __future__ import annotations

import argparse
from collections import Counter
import html
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs" / "tianji-ziwei"
SOURCE = DOCS / "entries.jsonl"
BILINGUAL = DOCS / "entries.vi.jsonl"
REPORT = DOCS / "refinement-report.vi.json"
PARTS = {
    3: "2上", 5: "3上", 7: "4上", 9: "5上", 11: "6上",
    13: "7上", 15: "8上", 17: "9上", 19: "10上",
    21: "11上", 23: "12上", 25: "13上", 27: "14上",
    29: "15上", 37: "19上_补充1", 48: "24下_补充2",
}
# (Chinese evidence, machine translation error, accurate Hán–Việt form)
# Only correct high-confidence *specialist terminology*, not entire sentences.
RULES: tuple[tuple[str, str, str, str], ...] = (
    ("贪狼", r"\b(?:con\s+)?sói\s+tham\s+lam\b", "Tham Lang", "Tham Lang"),
    ("贪狼", r"\b(?:sao\s+)?sói\s+tham\b", "Tham Lang", "Tham Lang"),
    ("廉贞", r"\bliêm\s+chính\b", "Liêm Trinh", "Liêm Trinh"),
    ("七杀", r"\bbảy\s+sát\s+thủ\b", "Thất Sát", "Thất Sát"),
    ("七杀", r"\bbảy\s+sát\b", "Thất Sát", "Thất Sát"),
    ("福德", r"\bford\b", "Phúc Đức", "Phúc Đức"),
    ("福德", r"\bfude\b", "Phúc Đức", "Phúc Đức"),
    ("四化", r"\b(?:tứ|bốn|4)\s+(?:sự\s+)?hiện\s+đại\s+hóa\b", "Tứ Hóa", "Tứ Hóa"),
    ("四化", r"\b(?:tứ|bốn|4)\s+thay\s+đổi\b", "Tứ Hóa", "Tứ Hóa"),
    ("四化", r"\bhiện\s+đại\s+hóa\b", "Tứ Hóa", "Tứ Hóa"),
    ("紫微", r"\b(?:zi\s*wei|ziwei|tử\s+vi\s+tím)\b", "Tử Vi", "Tử Vi"),
    ("田宅", r"\b(?:thiên\s+trại|tianzhai|thiên\s+trang)\b", "Điền Trạch", "Điền Trạch"),
    ("命宫", r"\bmệnh\s+cung\b", "cung Mệnh", "cung Mệnh"),
    ("大限", r"\b(?:giới\s+hạn\s+lớn|giới\s+hạn\s+vĩ\s+đại)\b", "Đại hạn", "Đại hạn"),
    ("贪狼", r"\bgreedy\s+wolf\b", "Tham Lang", "Tham Lang"),
    ("贪狼", r"\b(?-i:Tham Lam)\b", "Tham Lang", "Tham Lang"),
    ("廉贞", r"\blian\s*zhen(?:xing)?\b", "Liêm Trinh", "Liêm Trinh"),
    ("廉贞", r"\b(?-i:Chính Trực)\b", "Liêm Trinh", "Liêm Trinh"),
    ("七杀", r"\bseven\s+kills?\b", "Thất Sát", "Thất Sát"),
    ("七杀", r"\bbảy\s+lần\s+giết\s+chết\b", "Thất Sát", "Thất Sát"),
    ("破军", r"\bpo\s*jun(?:xing)?\b", "Phá Quân", "Phá Quân"),
    ("紫微", r"\bzi\s*wei\s*xing\b", "Tử Vi", "Tử Vi"),
    ("天机", r"\btian\s*ji(?:xing)?\b", "Thiên Cơ", "Thiên Cơ"),
    ("太阳", r"\btai\s*yang(?:xing)?\b", "Thái Dương", "Thái Dương"),
    ("太阴", r"\btai\s*yin(?:xing)?\b", "Thái Âm", "Thái Âm"),
    ("天府", r"\btian\s*fu(?:xing)?\b", "Thiên Phủ", "Thiên Phủ"),
    ("天府", r"\bthiên\s+phúc\b", "Thiên Phủ", "Thiên Phủ"),
    ("天同", r"\btian\s*tong(?:xing)?\b", "Thiên Đồng", "Thiên Đồng"),
    ("天梁", r"\btian\s*liang(?:xing)?\b", "Thiên Lương", "Thiên Lương"),
    ("天相", r"\btian\s*xiang(?:xing)?\b", "Thiên Tướng", "Thiên Tướng"),
    ("巨门", r"\bju\s*men(?:xing)?\b", "Cự Môn", "Cự Môn"),
    ("武曲", r"\bwu\s*qu(?:xing)?\b", "Vũ Khúc", "Vũ Khúc"),
    ("文昌", r"\bwen\s*chang(?:xing)?\b", "Văn Xương", "Văn Xương"),
    ("文曲", r"\bwen\s*qu(?:xing)?\b", "Văn Khúc", "Văn Khúc"),
    ("天魁", r"\btian\s*kui(?:xing)?\b", "Thiên Khôi", "Thiên Khôi"),
    ("天钺", r"\btian\s*yue(?:xing)?\b", "Thiên Việt", "Thiên Việt"),
    ("左辅", r"\bzuo\s*fu(?:xing)?\b", "Tả Phụ", "Tả Phụ"),
    ("右弼", r"\byou\s*bi(?:xing)?\b", "Hữu Bật", "Hữu Bật"),
    ("禄存", r"\blu\s*cun(?:xing)?\b", "Lộc Tồn", "Lộc Tồn"),
    ("北斗", r"\bbei\s*dou\b", "Bắc Đẩu", "Bắc Đẩu"),
    ("南斗", r"\bnan\s*dou\b", "Nam Đẩu", "Nam Đẩu"),
    ("福德宫", r"\b(?:fortune|phúc\s+đức)\s+palace\b", "cung Phúc Đức", "Cung Phúc Đức"),
    ("福德宫", r"\bcung\s+may\s+mắn\b", "cung Phúc Đức", "Cung Phúc Đức"),
    ("命宫", r"\bcung\s+sự\s+sống\b", "cung Mệnh", "Cung Mệnh"),
    ("身宫", r"\bbody\s+palace\b", "cung Thân", "Cung Thân"),
    ("财帛", r"\btiền\s+lụa\b", "Tài Bạch", "Tài Bạch"),
    ("官禄", r"\blương\s+chính\s+thức\b", "Quan Lộc", "Quan Lộc"),
    ("迁移宫", r"\bdi\s+cư\b", "Thiên Di", "Thiên Di"),
    ("庙旺", r"\bđền\s+thờ\s+và\s+sự\s+thịnh\s+vượng\b", "Miếu Vượng", "Miếu Vượng"),
    ("坐庙", r"\bngồi\s+trong\s+đền\s+thờ\b", "tọa Miếu", "tọa Miếu"),
    ("宫", r"\bcung\s+điện\b", "cung", "Cung"),
)
COMPILED = [(zh, re.compile(pattern, flags=re.I), replacement, label)
            for zh, pattern, replacement, label in RULES]
SOURCE_FIELDS = ("quote", "h2", "h3", "note")
VI_FIELDS = ("quote_vi", "h2_vi", "h3_vi", "note_vi")


def read_jsonl(path: Path) -> list[dict]:
    return [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines()
            if line.strip()]


def apply_rules(source: str, translation: str, counts: Counter) -> str:
    if not source or not translation:
        return translation
    updated = translation
    for evidence, pattern, replacement, label in COMPILED:
        if evidence not in source:
            continue
        updated, number = pattern.subn(replacement, updated)
        if number:
            counts[label] += number
    # Avoid accidental duplicate terminology from previously mistranslated spans.
    updated = re.sub(r"\bTứ\s+Tứ\s+Hóa\b", "Tứ Hóa", updated)
    updated = re.sub(r"\bcung\s+cung\b", "cung", updated, flags=re.I)
    return updated


def verify_sources(old: list[dict], translated: list[dict]) -> None:
    if len(old) != 1848 or len(translated) != 1848:
        raise ValueError(f"Expected 1,848 records; found {len(old)} / {len(translated)}")
    for i, (source, dest) in enumerate(zip(old, translated), start=1):
        for key in source:
            if source[key] != dest.get(key):
                raise ValueError(f"Original source modified in record {i}, key={key}")
        if not dest.get("quote_vi") or dest["quote_vi"] == source["quote"]:
            raise ValueError(f"Record {i} does not have a distinct Vietnamese quote")


def update_markdown(stem: str, part: int, old_rows: list[dict], new_rows: list[dict],
                    counts: Counter, check_only: bool) -> None:
    path = DOCS / "vi" / (stem + ".md")
    original = DOCS / (stem + ".md")
    if not path.is_file() or not original.is_file():
        raise FileNotFoundError(f"Missing original or translated chapter: {stem}")
    lines = path.read_text(encoding="utf-8").splitlines(keepends=True)
    source_lines = original.read_text(encoding="utf-8").splitlines()
    source_headings = [line for line in source_lines if line.startswith("## §")]
    i = 0
    k = 0
    for index, line in enumerate(lines):
        if line.startswith("## §") and k < len(source_headings):
            src = source_headings[k]
            k += 1
            prev = line.rstrip("\n")
            # Preserve the § number and video timestamp, only refine the title.
            match_src = re.match(r"## §\d+\s+\S+\s+(.*)", src)
            match_dst = re.match(r"(## §\d+\s+\S+\s+)(.*)", prev)
            if match_src and match_dst:
                new_title = apply_rules(match_src.group(1), match_dst.group(2), counts)
                line = match_dst.group(1) + new_title + "\n"
                lines[index] = line
        elif line.startswith("- [") and "<sub>" in line:
            if i >= len(new_rows):
                raise ValueError(f"Unexpected extra quote in {path}")
            row_old = old_rows[i]
            row_new = new_rows[i]
            i += 1
            if row_old["quote"] != row_new["quote"]:
                raise ValueError(f"Source differs in {stem} record {i}")
            original_vi = html.escape(row_old["quote_vi"])
            refined_vi = html.escape(row_new["quote_vi"])
            if original_vi not in line:
                raise ValueError(f"Cannot safely locate original Vietnamese quote at {stem} #{i}")
            line = line.replace(original_vi, refined_vi, 1)
            old_tags = " · ".join(row_old.get(key + "_vi") or "" for key in ("h2", "h3")
                                  if row_old.get(key + "_vi"))
            new_tags = " · ".join(row_new.get(key + "_vi") or "" for key in ("h2", "h3")
                                  if row_new.get(key + "_vi"))
            if old_tags != new_tags and old_tags:
                old_tag = "<sub>" + html.escape(old_tags) + "</sub>"
                new_tag = "<sub>" + html.escape(new_tags) + "</sub>"
                if old_tag not in line:
                    raise ValueError(f"Cannot safely locate taxonomy at {stem} #{i}")
                line = line.replace(old_tag, new_tag, 1)
            lines[index] = line
    if i != len(new_rows):
        raise ValueError(f"Chapter {stem} only contains {i}/{len(new_rows)} excerpts")
    if k != len(source_headings):
        raise ValueError(f"Chapter {stem} headings mismatch")
    count_han_sources = sum(line.count("<summary>Nguyên văn Hán tự") for line in lines)
    if count_han_sources != i:
        raise ValueError(f"Original text hidden blocks mismatch at {stem}: {count_han_sources}")
    if not check_only:
        readable = stem.replace("上", " thượng").replace("下", " hạ")
        readable = readable.replace("_补充1", " (bổ sung 1)").replace("_补充2", " (bổ sung 2)")
        text = "".join(lines).replace(f"bản ghi tập {stem};", f"bản ghi tập {readable};")
        path.write_text(text, encoding="utf-8")


def run(check_only: bool) -> None:
    source = read_jsonl(SOURCE)
    old_rows = read_jsonl(BILINGUAL)
    verify_sources(source, old_rows)
    revised = [dict(row) for row in old_rows]
    counts: Counter[str] = Counter()
    changed_rows = 0
    for row in revised:
        original = next(x for x in source if x["part"] == row["part"] and
                        x["t_hms"] == row["t_hms"] and x["quote"] == row["quote"])
        changed = False
        for orig, vi in zip(SOURCE_FIELDS, VI_FIELDS):
            prev = row.get(vi, "")
            fixed = apply_rules(str(original.get(orig) or ""), str(prev), counts)
            if fixed != prev:
                row[vi] = fixed
                changed = True
        if changed:
            changed_rows += 1
    for part, stem in PARTS.items():
        olds = [row for row in old_rows if row["part"] == part]
        news = [row for row in revised if row["part"] == part]
        update_markdown(stem, part, olds, news, counts, check_only)
    if check_only and counts:
        raise ValueError("Unapplied glossary corrections remain: " + str(dict(counts)))
    if not check_only:
        BILINGUAL.write_text(
            "\n".join(json.dumps(row, ensure_ascii=False) for row in revised) + "\n",
            encoding="utf-8"
        )
        previous: dict = json.loads(REPORT.read_text(encoding="utf-8")) if REPORT.exists() else {}
        rounds = list(previous.get("refinement_rounds", []))
        if not rounds and previous.get("quote_records_modified", 0):
            rounds.append({
                "phase": "Legacy terminology correction",
                "quote_records_modified": previous["quote_records_modified"],
                "terminology_replacements": previous.get("terminology_replacements", {}),
            })
        if changed_rows or counts:
            rounds.append({
                "phase": "Aligned glossary correction",
                "quote_records_modified": changed_rows,
                "terminology_replacements": dict(sorted(counts.items())),
            })
        totals: Counter = Counter()
        for record in rounds:
            totals.update(record.get("terminology_replacements", {}))
        REPORT.write_text(json.dumps({
            "method": "Aligned Chinese-source-gated glossary corrections",
            "source_records": len(source), "chapter_count": len(PARTS),
            "refinement_rounds": rounds,
            "record_edit_events": sum(r.get("quote_records_modified", 0) for r in rounds),
            "terminology_replacements_all_rounds": dict(sorted(totals.items())),
            "original_source_modified": False,
            "quality": "Machine translated; specialist human review still required",
        }, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    verify_sources(source, revised)
    print(f"Verified {len(revised)} translated records and 16 bilingual chapters; "
          f"{changed_rows} records improved; terminology replacements={dict(counts)}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="Validate translated corpus without writing")
    args = parser.parse_args()
    run(check_only=args.check)
