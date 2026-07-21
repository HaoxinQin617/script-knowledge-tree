#!/usr/bin/env python3
"""Validate Chinese spoken-script duration claims from a JSON array."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

UNITS_PER_MINUTE = 220
MIN_RATIO = 0.85
MAX_RATIO = 1.15


def effective_units(text: str) -> int:
    cjk = re.findall(r"[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]", text)
    latin_or_number = re.findall(r"[A-Za-z]+(?:[-'][A-Za-z]+)*|\d+(?:\.\d+)?", text)
    return len(cjk) + len(latin_or_number)


def validate_item(item: dict) -> dict:
    title = str(item.get("title", "")).strip()
    text = str(item.get("text", "")).strip()
    source = str(item.get("source", "")).strip()
    minutes = float(item.get("minutes", 0))
    if not title or not text or minutes <= 0:
        raise ValueError("each item requires title, positive minutes, and text")
    units = effective_units(text)
    target = minutes * UNITS_PER_MINUTE
    minimum = round(target * MIN_RATIO)
    maximum = round(target * MAX_RATIO)
    status = "PASS" if minimum <= units <= maximum else "SHORT" if units < minimum else "LONG"
    return {
        "title": title,
        "minutes": minutes,
        "units": units,
        "estimated_minutes": round(units / UNITS_PER_MINUTE, 2),
        "range": f"{minimum}-{maximum}",
        "status": status,
        "source": source or "MISSING",
    }


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: check_spoken_length.py <scripts.json>", file=sys.stderr)
        return 2
    try:
        data = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
        if not isinstance(data, list) or not data:
            raise ValueError("input must be a non-empty JSON array")
        results = [validate_item(item) for item in data]
    except (OSError, json.JSONDecodeError, ValueError, TypeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2

    print("title\tclaimed\tunits\testimated\trange\tstatus\tsource")
    for row in results:
        print(
            f"{row['title']}\t{row['minutes']:g}m\t{row['units']}\t"
            f"{row['estimated_minutes']:.2f}m\t{row['range']}\t"
            f"{row['status']}\t{row['source']}"
        )
    return 0 if all(row["status"] == "PASS" and row["source"] != "MISSING" for row in results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
