#!/usr/bin/env python3
"""Converteix un banc de preguntes de Moodle (XML) en un fitxer de dades per al qüestionari web.

Ús:
  python3 tools/moodle2quiz.py moodle/preguntes.xml data/id.js \
      --id t1-1 --title "Títol" [--explicacions moodle/preguntes.explicacions.json]

Tipus suportats: multichoice (resposta única) i matching.
Les explicacions són una llista JSON amb un text per pregunta, en el mateix ordre que l'XML.
Si no se'n dona cap, s'aprofita la retroacció general de Moodle (si n'hi ha).
"""
import argparse
import html
import json
import re
import xml.etree.ElementTree as ET


def clean(text):
    text = text or ""
    text = re.sub(r"</p>\s*<p>", "\n", text)
    text = re.sub(r"<br\s*/?>", "\n", text)
    text = re.sub(r"<[^>]+>", "", text)
    return html.unescape(text).strip()


def parse(path):
    questions = []
    for q in ET.parse(path).getroot().findall("question"):
        kind = q.get("type")
        if kind == "category":
            continue
        item = {
            "type": kind,
            "text": clean(q.findtext("questiontext/text")),
            "explanation": clean(q.findtext("generalfeedback/text")),
        }
        if kind == "multichoice":
            if q.findtext("single") != "true":
                raise SystemExit(f"Pregunta de resposta múltiple no suportada: {item['text']}")
            answers = q.findall("answer")
            item["options"] = [clean(a.findtext("text")) for a in answers]
            item["correct"] = next(i for i, a in enumerate(answers) if float(a.get("fraction")) == 100)
            # penalització de Moodle per resposta errònia (p. ex. -25 %)
            item["penalty"] = -min(float(a.get("fraction")) for a in answers) / 100
        elif kind == "matching":
            subs = q.findall("subquestion")
            item["pairs"] = [[clean(s.findtext("text")), clean(s.findtext("answer/text"))]
                             for s in subs if clean(s.findtext("text"))]
            item["distractors"] = [clean(s.findtext("answer/text"))
                                   for s in subs if not clean(s.findtext("text"))]
        else:
            raise SystemExit(f"Tipus de pregunta no suportat: {kind}")
        questions.append(item)
    return questions


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("xml")
    ap.add_argument("out")
    ap.add_argument("--id", required=True)
    ap.add_argument("--title", required=True)
    ap.add_argument("--explicacions")
    args = ap.parse_args()

    questions = parse(args.xml)
    if args.explicacions:
        with open(args.explicacions, encoding="utf-8") as f:
            explanations = json.load(f)
        if len(explanations) != len(questions):
            raise SystemExit(f"{len(explanations)} explicacions per a {len(questions)} preguntes")
        for q, e in zip(questions, explanations):
            q["explanation"] = e

    quiz = {"id": args.id, "title": args.title, "questions": questions}
    with open(args.out, "w", encoding="utf-8") as f:
        f.write("// Generat amb tools/moodle2quiz.py — no editar a mà.\n")
        f.write("window.QUIZ = " + json.dumps(quiz, ensure_ascii=False, indent=1) + ";\n")
    print(f"{len(questions)} preguntes → {args.out}")


if __name__ == "__main__":
    main()
