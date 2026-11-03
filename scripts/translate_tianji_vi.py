#!/usr/bin/env python3
"""Translate the public Tian Ji Zi Wei quote corpus into Vietnamese.

Original Chinese sources remain untouched. This script writes a parallel
machine-translated Vietnamese JSONL dataset and 16 readable Markdown chapters.

Usage:
    python3 scripts/translate_tianji_vi.py
    python3 scripts/translate_tianji_vi.py --check

The Google Translate GTX endpoint used here is public and unofficial: it may
change or be rate-limited without warning. Translation requires network access.
Do not confuse the result with a professionally verified classical translation.
"""
from __future__ import annotations

import argparse
import collections
import hashlib
import html
import json
import os
import pathlib
import random
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs" / "tianji-ziwei"
SOURCE = DOCS / "entries.jsonl"
TARGET = DOCS / "entries.vi.jsonl"
CHAPTERS = DOCS / "vi"
REPORT = DOCS / "translation-report.vi.json"
HAN = re.compile(r"[\u3400-\u9fff]")
MARKER = re.compile(r"\n\s*<<<VITRAN(\d{5})>>>\s*\n")
QUOTE = re.compile(r"「([^」]+)」")
CHINESE_BOOKS = {
    "2上": 3, "3上": 5, "4上": 7, "5上": 9,
    "6上": 11, "7上": 13, "8上": 15, "9上": 17,
    "10上": 19, "11上": 21, "12上": 23, "13上": 25,
    "14上": 27, "15上": 29, "19上_补充1": 37,
    "24下_补充2": 48,
}
CHINESE_TERMS = {
    "紫微斗数": "Tử Vi Đẩu Số",
    "紫微": "Tử Vi",
    "天机": "Thiên Cơ",
    "太阳": "Thái Dương",
    "武曲": "Vũ Khúc",
    "天同": "Thiên Đồng",
    "廉贞": "Liêm Trinh",
    "天府": "Thiên Phủ",
    "太阴": "Thái Âm",
    "贪狼": "Tham Lang",
    "巨门": "Cự Môn",
    "天相": "Thiên Tướng",
    "天梁": "Thiên Lương",
    "七杀": "Thất Sát",
    "破军": "Phá Quân",
    "财帛宫": "cung Tài Bạch",
    "命宫": "cung Mệnh",
    "身宫": "cung Thân",
    "夫妻宫": "cung Phu Thê",
    "疾厄宫": "cung Tật Ách",
    "田宅宫": "cung Điền Trạch",
    "父母宫": "cung Phụ Mẫu",
    "兄弟宫": "cung Huynh Đệ",
    "官禄宫": "cung Quan Lộc",
    "福德宫": "cung Phúc Đức",
    "迁移宫": "cung Thiên Di",
    "子女宫": "cung Tử Tức",
    "交友宫": "cung Nô Bộc",
    "化禄": "Hóa Lộc",
    "化权": "Hóa Quyền",
    "化科": "Hóa Khoa",
    "化忌": "Hóa Kỵ",
    "禄存": "Lộc Tồn",
    "左辅": "Tả Phụ",
    "右弼": "Hữu Bật",
    "天魁": "Thiên Khôi",
    "天钺": "Thiên Việt",
    "文昌": "Văn Xương",
    "文曲": "Văn Khúc",
    "擎羊": "Kình Dương",
    "陀罗": "Đà La",
    "火星": "Hỏa Tinh",
    "铃星": "Linh Tinh",
    "地空": "Địa Không",
    "地劫": "Địa Kiếp",
    "倪海厦": "Nghê Hải Hạ",
    "天纪": "Thiên Kỷ",
    "三方四正": "Tam phương tứ chính",
    "大限": "Đại hạn",
    "流年": "Lưu niên",
    "五行": "Ngũ hành",
    "六亲": "Lục thân",
}
TERM_RE = re.compile("|".join(re.escape(k) for k in sorted(CHINESE_TERMS, key=len, reverse=True)))


def term_fix(text: str) -> str:
    """Convert any *remaining* source technical terms, not translated prose."""
    return TERM_RE.sub(lambda m: CHINESE_TERMS[m.group(0)], text)


def gtx(source: str) -> str:
    query = urllib.parse.urlencode({
        "client": "gtx", "sl": "zh-CN", "tl": "vi", "dt": "t", "q": source
    })
    url = "https://translate.googleapis.com/translate_a/single?" + query
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; PublicAcademicCorpus/1.0)",
            "Accept": "application/json",
        },
    )
    with urllib.request.urlopen(request, timeout=45) as res:
        data = json.load(res)
    if not data or not data[0]:
        raise ValueError("Translation endpoint returned no segments")
    return "".join(fragment[0] or "" for fragment in data[0])


def translate_one(text: str) -> str:
    if not HAN.search(text):
        return text
    error = None
    for attempt in range(7):
        try:
            result = gtx(text).strip()
            if len(result) < 2 or result == text:
                raise ValueError("No substantive translation")
            result = term_fix(result)
            if len(HAN.findall(result)) > max(2, len(result) // 12):
                raise ValueError("Large Chinese residue in translated text")
            return result
        except (urllib.error.URLError, OSError, ValueError, IndexError,
                KeyError, TimeoutError, json.JSONDecodeError) as exc:
            error = exc
            time.sleep(min(2 ** attempt, 25) + random.uniform(0.1, 0.9))
    raise RuntimeError(f"Cannot translate {text[:55]!r}: {error}")


def translate_batch(items: list[tuple[int, str]]) -> dict[int, str]:
    """Try a compact numbered batch; fall back to sentence-level safely."""
    if len(items) == 1:
        key, source = items[0]
        return {key: translate_one(source)}
    payload = "\n".join(f"<<<VITRAN{key:05d}>>>\n{text}" for key, text in items)
    try:
        translated = gtx(payload)
        parts = re.split(r"<<<VITRAN(\d{5})>>>", translated)
        parsed: dict[int, str] = {}
        for i in range(1, len(parts), 2):
            parsed[int(parts[i])] = term_fix(parts[i + 1].strip())
        if (set(parsed) != {k for k, _ in items}
            or any(not v or len(v) < 2 for v in parsed.values())
            or any(len(HAN.findall(v)) > max(2, len(v) // 12) for v in parsed.values())):
            raise ValueError("Batch boundaries or completeness uncertain")
        return parsed
    except Exception as exc:
        print(f"[vi] Batch of {len(items)} fell back to individual lines: {exc}", flush=True)
        return {key: translate_one(text) for key, text in items}


def chunks(values: list[tuple[int, str]], max_items: int = 8, max_chars: int = 2100):
    batch: list[tuple[int, str]] = []
    chars = 0
    for item in values:
        size = len(item[1]) + 23
        if batch and (len(batch) >= max_items or chars + size > max_chars):
            yield batch
            batch, chars = [], 0
        batch.append(item)
        chars += size
    if batch:
        yield batch


def get_cached() -> dict[str, str]:
    if not TARGET.exists():
        return {}
    cache: dict[str, str] = {}
    for line in TARGET.read_text(encoding="utf-8").splitlines():
        try:
            row = json.loads(line)
            if row.get("quote_vi") and row.get("quote"):
                key = hashlib.sha256(row["quote"].encode()).hexdigest()
                cache[key] = row["quote_vi"]
        except (ValueError, KeyError):
            pass
    return cache


def get_cached_taxonomy() -> dict[str, str]:
    """Preserve manually/refinement-edited taxonomy from the bilingual corpus."""
    cache: dict[str, str] = {}
    if TARGET.exists():
        for line in TARGET.read_text(encoding="utf-8").splitlines():
            if not line.strip():
                continue
            try:
                item = json.loads(line)
                for field in ("h2", "h3", "note"):
                    original, translated = item.get(field), item.get(field + "_vi")
                    if original and translated:
                        cache[original] = translated
            except (ValueError, KeyError):
                continue
    return cache


def get_cached_headings(stem: str, original_lines: list[str]) -> dict[str, str]:
    """Reuse generated chapter headings to avoid retranslating on each run."""
    path = CHAPTERS / (stem + ".md")
    if not path.exists():
        return {}
    heading_re = re.compile(r"^##\\s*§\\d+\\s+[0-9:]+\\s+(.*)$")
    old = [m.group(1) for line in original_lines if (m := heading_re.match(line))]
    new = [m.group(1) for line in path.read_text(encoding="utf-8").splitlines()
           if (m := heading_re.match(line))]
    return dict(zip(old, new)) if len(old) == len(new) else {}


def translate_corpus() -> None:
    original = [json.loads(line) for line in SOURCE.read_text(encoding="utf-8").splitlines() if line.strip()]
    if len(original) != 1848:
        raise RuntimeError(f"Source must contain 1,848 records, got {len(original)}")

    cache = get_cached()
    unique_quotes = list(dict.fromkeys(row["quote"] for row in original))
    pending = [(i, quote) for i, quote in enumerate(unique_quotes)
               if hashlib.sha256(quote.encode()).hexdigest() not in cache]
    print(f"[vi] {len(original)} records, {len(unique_quotes)} unique quotes, {len(pending)} to translate", flush=True)

    updated = 0
    for batch in chunks(pending):
        out = translate_batch(batch)
        for i, quote_vi in out.items():
            key = hashlib.sha256(unique_quotes[i].encode()).hexdigest()
            cache[key] = quote_vi
            updated += 1
        if updated % 80 < len(batch):
            print(f"[vi] Translated {updated}/{len(pending)} new quotes", flush=True)
        time.sleep(0.12)

    # Taxonomy and editorial notes are translated separately and deduplicated.
    taxonomy: list[str] = list(dict.fromkeys(
        str(row.get(field) or "") for row in original for field in ("h2", "h3", "note")
        if row.get(field)
    ))
    tax_vi: dict[str, str] = get_cached_taxonomy()
    for i, text in enumerate(taxonomy):
        if text not in tax_vi:
            tax_vi[text] = translate_one(text)
        if i % 50 == 0:
            print(f"[vi] Taxonomy {i + 1}/{len(taxonomy)}", flush=True)

    translated: list[dict] = []
    for row in original:
        vi = cache[hashlib.sha256(row["quote"].encode()).hexdigest()]
        new_row = dict(row)
        new_row["quote_vi"] = vi
        for field in ("h2", "h3", "note"):
            new_row[field + "_vi"] = tax_vi.get(row.get(field) or "", "")
        new_row["translation_status"] = "machine-translated; professional review pending"
        translated.append(new_row)

    if any(not row["quote_vi"].strip() for row in translated):
        raise RuntimeError("Missing translated quote; refusing partial output")

    # First write to a temporary file and only swap after full validation.
    tmp = TARGET.with_suffix(".tmp")
    tmp.write_text("\n".join(json.dumps(row, ensure_ascii=False) for row in translated) + "\n", encoding="utf-8")
    os.replace(tmp, TARGET)

    records_by_part: dict[int, dict[str, collections.deque]] = collections.defaultdict(
        lambda: collections.defaultdict(collections.deque))
    for row in translated:
        records_by_part[row["part"]][row["t_hms"]].append(row)

    CHAPTERS.mkdir(exist_ok=True, parents=True)
    produced: dict[str, int] = {}
    for stem, part in CHINESE_BOOKS.items():
        original_path = DOCS / (stem + ".md")
        if not original_path.exists():
            raise RuntimeError(f"Expected chapter missing: {original_path}")
        original_lines = original_path.read_text(encoding="utf-8").splitlines()
        heading_cache = get_cached_headings(stem, original_lines)
        out_lines: list[str] = [
            f"# Thiên Kỷ · Tập {stem.replace('上',' thượng').replace('下',' hạ').replace('_补充1',' (bổ sung 1)').replace('_补充2',' (bổ sung 2)')}",
            "",
            "> Bản dịch máy Trung–Việt để đọc và tra cứu, chưa được hiệu đính toàn văn.",
            "> Nguyên văn Hán tự và liên kết video giữ bên dưới từng đoạn.",
            "> Chỉ phục vụ nghiên cứu, không dùng các nhận định mệnh lý hoặc y học làm căn cứ quyết định.",
            "",
        ]
        count = 0
        for line in original_lines[1:]:
            if line.startswith("- [") and "「" in line and "」" in line:
                m = re.search(r"^\-\s+\[([0-9:]+)\]", line)
                if not m:
                    raise RuntimeError(f"Unrecognized timestamp: {line[:60]}")
                key = m.group(1)
                if not records_by_part[part][key]:
                    raise RuntimeError(f"No JSONL record for part={part} time={key}")
                row = records_by_part[part][key].popleft()
                assert row["quote"] in line, f"Source mismatch for {stem} {key}"
                vi = row["quote_vi"]
                # Keep original markdown timestamps, citation link and notes.
                changed = line.replace("「" + row["quote"] + "」", html.escape(vi), 1)
                if "<sub>" in changed:
                    changed = re.sub(r"<sub>.*?</sub>",
                        "<sub>" + html.escape(" · ".join(
                            x for x in (row["h2_vi"], row["h3_vi"]) if x)) + "</sub>",
                        changed)
                out_lines.append(changed)
                out_lines.append("")
                out_lines.append("  <details><summary>Nguyên văn Hán tự (mở để đối chiếu)</summary>")
                out_lines.append("")
                out_lines.append("  > 「" + html.escape(row["quote"]) + "」")
                out_lines.append("")
                out_lines.append("  </details>")
                out_lines.append("")
                count += 1
            elif line.startswith("## "):
                match = re.match(r"^(##\s*§\d+\s+[0-9:]+\s+)(.*)$", line)
                if match:
                    out_lines.append(match.group(1) + heading_cache.get(match.group(2), translate_one(match.group(2)) if match.group(2) not in heading_cache else heading_cache[match.group(2)]))
                else:
                    out_lines.append(line)
            elif not line.strip():
                out_lines.append(line)
            elif line.startswith("倪海厦"):
                out_lines.append(f"Nghê Hải Hạ, Thiên Kỷ, bản ghi tập {stem.replace('上', ' thượng').replace('下', ' hạ').replace('_补充1', ' (bổ sung 1)').replace('_补充2', ' (bổ sung 2)')}; đối chiếu liên kết video trong các mục bên dưới.")
            else:
                out_lines.append(line)
        if count != sum(1 for x in translated if x["part"] == part):
            raise RuntimeError(f"Chapter count mismatch {stem}: {count}")
        produced[stem] = count
        (CHAPTERS / (stem + ".md")).write_text("\n".join(out_lines).rstrip() + "\n", encoding="utf-8")

    final = {
        "source": "docs/tianji-ziwei/entries.jsonl",
        "source_records": len(original),
        "translated_records": len(translated),
        "unique_quotes": len(unique_quotes),
        "chapters": produced,
        "translator": "unofficial Google Translate GTX (machine translation)",
        "quality": "Machine-translated and not reviewed by a Tử Vi / Chinese language expert",
        "original_preserved": True,
        "license": "CC BY-NC-SA 4.0",
    }
    REPORT.write_text(json.dumps(final, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print("[vi] COMPLETED:", json.dumps(final, ensure_ascii=False), flush=True)


def check() -> None:
    if not TARGET.exists():
        raise RuntimeError("Missing translation file. Run the translator first.")
    rows = [json.loads(l) for l in TARGET.read_text(encoding="utf-8").splitlines() if l.strip()]
    originals = [json.loads(l) for l in SOURCE.read_text(encoding="utf-8").splitlines() if l.strip()]
    if len(rows) != len(originals) != 1848:
        raise RuntimeError("Count mismatch")
    if len(rows) != 1848:
        raise RuntimeError("Expected exactly 1848 translated entries")
    for i, (a, b) in enumerate(zip(originals, rows)):
        for key in ("quote", "book", "part", "t_hms"):
            if a[key] != b[key]:
                raise RuntimeError(f"Original content changed in record {i}: {key}")
        vi = b.get("quote_vi", "")
        if not vi or vi == a["quote"]:
            raise RuntimeError(f"Missing actual translation at record {i}")
    counts = collections.Counter(row["part"] for row in rows)
    for stem, part in CHINESE_BOOKS.items():
        p = CHAPTERS / (stem + ".md")
        if not p.exists():
            raise RuntimeError(f"Missing chapter translation: {stem}")
        if p.read_text(encoding="utf-8").count("<summary>Nguyên văn Hán tự") != counts[part]:
            raise RuntimeError(f"Chapter line count mismatch: {stem}")
    print(f"[vi] Verified {len(rows)} translated public teaching quotes, 16 chapters")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if args.check:
        check()
    else:
        translate_corpus()
        check()
