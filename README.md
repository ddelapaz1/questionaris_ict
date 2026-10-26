# Qüestionaris ICT

Qüestionaris d'autoavaluació del **mòdul 0237 – ICT en habitatges i edificis** (EE10), convertits des de bancs de preguntes de Moodle.

- Retroacció immediata amb l'explicació de cada resposta i, si n'hi ha, per què l'opció triada no és correcta.
- Nota final sobre 10 en acabar: +1 per encert, −0,25 per error (com al Moodle) i puntuació proporcional a les preguntes d'aparellar.
- Preguntes i opcions barrejades a cada intent.

Web: https://ddelapaz1.github.io/questionaris_ict/

## Afegir un qüestionari nou

1. Exporta les preguntes de Moodle en format XML i desa-les a `moodle/`.
2. Escriu les explicacions a `moodle/<nom>.explicacions.json`: una llista en l'ordre de l'XML amb, per a cada pregunta, un text o bé `{"explicacio": "...", "opcions": [null, "per què no...", ...]}` amb una justificació per opció en l'ordre de l'XML (`null` per a la correcta).
3. Genera les dades:

   ```bash
   python3 tools/moodle2quiz.py moodle/<nom>.xml data/<id>.js --id <id> --title "Títol" --explicacions moodle/<nom>.explicacions.json
   ```

4. Copia la carpeta `t1-1-normativa/` amb el nom `<id>/`, canvia-hi el títol i el `data/<id>.js`, i afegeix-ne l'enllaç a `index.html`.

Tipus de pregunta suportats: opció múltiple (resposta única), aparellament i arrossegar sobre imatge (`ddimageortext`, que es converteix en un aparellament amb les caselles numerades sobre la imatge). Les imatges de l'enunciat es desen a `img/<id>/`.
