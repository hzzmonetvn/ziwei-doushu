#!/usr/bin/env python3
"""Generate Sino-Vietnamese display labels for Chinese location names.

* Original administrative names in lib/ziwei/cities.ts NEVER change.
* Longitudes and stored form values NEVER change.
* Preferred Vietnamese exonyms are maintained in china-locations-vi.ts.
* Remaining Chinese names get provisional character-level readings from
  Unicode Unihan kVietnamese with simplified/traditional variant support.
* This is transcription, not a translation of administrative status.
* Requires Internet only when generating. The web app remains offline-first.

Data source: Unicode Unihan, version 17.0.0 (Unicode Data Files License).
https://www.unicode.org/terms_of_use.html
"""
from __future__ import annotations
import argparse
from collections import Counter
from io import BytesIO
import json
from pathlib import Path
import re
import unicodedata
from urllib.request import Request, urlopen
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "lib" / "ziwei" / "cities.ts"
DEST = ROOT / "lib" / "i18n" / "china-locations-vi.ts"
REPORT = ROOT / "lib" / "i18n" / "china-locations-coverage.vi.json"
UNIHAN_URL = "https://www.unicode.org/Public/17.0.0/ucd/Unihan.zip"
HAN = re.compile(r"[\u3400-\u9fff]")
PROVINCES = re.compile(r"^\s{4}name: '([^']+)',", flags=re.M)
CITY_NAMES = re.compile(r"\{\s*name: '([^']+)',\s*longitude:", flags=re.M)
OVERRIDES = {
    "抚远（中国最东）": "Phủ Viễn (phía đông theo danh mục nguồn)",
    "塔什库尔干（中国最西）": "Tháp Thập Khố Nhĩ Can (phía tây theo danh mục nguồn)",
    "三沙（中国最南）": "Tam Sa (theo danh mục nguồn)",
}


def labels_from_ts(content: str) -> dict[str, str]:
    m = re.search(r"export const VI_LOCATION_NAMES: Record<string, string> = (\{[\s\S]*?\});", content)
    if not m:
        raise ValueError("Cannot locate VI_LOCATION_NAMES dictionary")
    data = json.loads(m.group(1))
    if not isinstance(data, dict):
        raise ValueError("Location mapping must be an object")
    return data


def retrieve_unihan() -> tuple[dict[str, str], dict[str, str]]:
    req = Request(UNIHAN_URL, headers={"User-Agent": "AcademicLocalization/1.0"})
    with urlopen(req, timeout=120) as response:
        zipped = response.read()
    with ZipFile(BytesIO(zipped)) as archive:
        readings_file = archive.read("Unihan_Readings.txt").decode("utf-8")
        variants_file = archive.read("Unihan_Variants.txt").decode("utf-8")
    readings: dict[str, str] = {}
    variants: dict[str, str] = {}
    for line in readings_file.splitlines():
        if line.startswith("#"):
            continue
        parts = line.split("\t")
        if len(parts) != 3 or parts[1] != "kVietnamese":
            continue
        point = int(parts[0].removeprefix("U+"), 16)
        readings[chr(point)] = unicodedata.normalize("NFC", parts[2].split()[0].lower())
    for line in variants_file.splitlines():
        if line.startswith("#"):
            continue
        parts = line.split("\t")
        if len(parts) != 3 or parts[1] != "kTraditionalVariant":
            continue
        other = re.search(r"U\+([0-9A-F]+)", parts[2])
        if other:
            variants[chr(int(parts[0][2:], 16))] = chr(int(other.group(1), 16))
    return readings, variants


def convert_one(name: str, readings: dict[str, str],
                variants: dict[str, str]) -> tuple[str, list[str]]:
    result: list[str] = []
    unknown: list[str] = []
    for char in name:
        if not HAN.fullmatch(char):
            if char in "（）":
                result.append("(" if char == "（" else ")")
            else:
                result.append(char)
            continue
        variant = variants.get(char)
        reading = readings.get(char) or (readings.get(variant) if variant else None)
        if reading:
            result.append(reading)
        else:
            result.append(char)
            unknown.append(char)
    label = re.sub(r"\s+", " ", " ".join(result)).strip()
    label = label.replace(" ( ", " (").replace(" )", ")")
    if label:
        label = label[0].upper() + label[1:]
    return label, unknown


def main(check_only: bool) -> None:
    src = SOURCE.read_text(encoding="utf-8")
    names = list(dict.fromkeys(PROVINCES.findall(src) + CITY_NAMES.findall(src)))
    if len(PROVINCES.findall(src)) != 34 or len(CITY_NAMES.findall(src)) < 480:
        raise ValueError("Original province/city dataset structure unexpectedly changed")
    existing = DEST.read_text(encoding="utf-8")
    labels = labels_from_ts(existing)
    if check_only:
        missing = [x for x in names if not labels.get(x)]
        if missing:
            raise ValueError("Location display labels missing: " + repr(missing[:20]))
        print(f"Location label coverage: {len(names)}/{len(names)} keys")
        return
    readings, variants = retrieve_unihan()
    unknowns: Counter[str] = Counter()
    auto_count = 0
    for name in names:
        if labels.get(name):
            continue
        if name in OVERRIDES:
            labels[name] = OVERRIDES[name]
            continue
        label, unknown = convert_one(name, readings, variants)
        # Preserve original for checking if some uncommon Chinese reading is missing;
        # never invent a Vietnamese pronunciation for unsupported characters.
        if unknown:
            unknowns.update(unknown)
        labels[name] = label or name
        auto_count += 1
    for name, label in OVERRIDES.items():
        if name in names:
            labels[name] = label
    # Regenerate the mapping deterministically, keep callable API stable.
    header = (
        "/**\n"
        " * Địa danh Hán–Việt cho bộ chọn địa điểm Trung Quốc. Khóa là tên nguồn.\n"
        " * Âm Hán–Việt chưa phải địa danh chính thức, đặc biệt với tên dân tộc thiểu số.\n"
        " * Dữ liệu chữ Hán: Unicode Unihan 17.0.0, kVietnamese (Unicode Data Files License).\n"
        " * https://www.unicode.org/terms_of_use.html\n"
        " * Các tên thành phố thông dụng được ưu tiên theo cách viết tiếng Việt.\n"
        " */\n"
    )
    output = (
        header + "export const VI_LOCATION_NAMES: Record<string, string> = "
        + json.dumps(labels, ensure_ascii=False, indent=2) + ";\n\n"
        + "export function locationNameVi(name: string): string {\n"
        + "  return VI_LOCATION_NAMES[name] ?? name;\n}\n"
    )
    DEST.write_text(output, encoding="utf-8")
    unconverted = [x for x in names if HAN.search(labels[x])]
    report = {
        "source": "lib/ziwei/cities.ts",
        "provinces": len(PROVINCES.findall(src)),
        "cities": len(CITY_NAMES.findall(src)),
        "unique_location_keys": len(names),
        "mapped_labels": len(names),
        "newly_transcribed": auto_count,
        "still_contains_han": len(unconverted),
        "unconverted_examples": unconverted[:60],
        "unknown_characters": dict(unknowns.most_common(40)),
        "method": "Manual Vietnamese exonyms + Unicode Unihan kVietnamese character readings",
        "accuracy": "Names may require local editorial review; underlying longitude/source is unchanged",
    }
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    main(args.check)
