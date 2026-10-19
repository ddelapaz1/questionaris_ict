# Qüestionaris ICT

Qüestionaris d'autoavaluació del **mòdul 0237 – ICT en habitatges i edificis** (EE10), convertits des de bancs de preguntes de Moodle.

- Retroacció immediata amb l'explicació de cada resposta.
- Nota final sobre 10 en acabar: +1 per encert, −0,25 per error (com al Moodle) i puntuació proporcional a les preguntes d'aparellar.
- Preguntes i opcions barrejades a cada intent.

Web: https://ddelapaz1.github.io/questionaris_ict/

## Afegir un qüestionari nou

1. Exporta les preguntes de Moodle en format XML i desa-les a `moodle/`.
2. Escriu les explicacions a `moodle/<nom>.explicacions.json` (una llista de textos, en l'ordre de l'XML).
3. Genera les dades:

   ```bash
   python3 tools/moodle2quiz.py moodle/<nom>.xml data/<id>.js --id <id> --title "Títol" --explicacions moodle/<nom>.explicacions.json
   ```

4. Copia la carpeta `t1-1-normativa/` amb el nom `<id>/`, canvia-hi el títol i el `data/<id>.js`, i afegeix-ne l'enllaç a `index.html`.

Tipus de pregunta suportats: opció múltiple (resposta única) i aparellament.
