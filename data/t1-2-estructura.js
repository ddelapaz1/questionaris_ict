// Generat amb tools/moodle2quiz.py — no editar a mà.
window.QUIZ = {
 "id": "t1-2-estructura",
 "title": "1.2 Estructura i elements de les ICT",
 "questions": [
  {
   "type": "matching",
   "text": "Assigna els texts de les zones a cada color segons correspongui.",
   "explanation": "Una ICT es divideix en tres zones segons a qui pertanyen els elements. La zona exterior (blau) és fora de l'edifici: arquetes, punt d'entrada general i canalització externa, responsabilitat de les operadores. La zona comunitària (rosa) és la part comuna de l'edifici: RITI, RITS, canalització principal i registres secundaris. La zona privada (verd) és l'interior de cada habitatge o local: registre de terminació de xarxa, PAU i preses d'usuari.",
   "image": "../img/t1-2-estructura/edifici-zones.png",
   "pairs": [
    [
     "Casella 1",
     "Zona exterior"
    ],
    [
     "Casella 2",
     "Zona comunitària"
    ],
    [
     "Casella 3",
     "Zona privada"
    ]
   ],
   "markers": [
    [
     84.3,
     41.36
    ],
    [
     84.3,
     48.69
    ],
    [
     84.3,
     56.02
    ]
   ],
   "distractors": []
  },
  {
   "type": "multichoice",
   "text": "Quina és la canalització principal en una ICT?",
   "explanation": "La canalització principal és el muntant vertical de l'edifici: uneix el RITI i el RITS i, pel camí, passa pels registres secundaris de cada planta. Hi va la xarxa de distribució.",
   "options": [
    "La que connecta el RITI amb el RITS, passant pels registres secundaris.",
    "La que connecta el punt d'entrada general de l'edifici amb el RITI.",
    "La que va dels registres secundaris fins als registres de terminació de xarxa de cada habitatge.",
    "La que va del registre de terminació de xarxa fins a les preses d'usuari.",
    "La que uneix els elements de captació de la coberta amb el RITS."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Aquest tram, del punt d'entrada general al RITI, és la canalització d'enllaç inferior.",
    "Dels registres secundaris als registres de terminació de xarxa hi va la canalització secundària.",
    "Del registre de terminació de xarxa a les preses hi va la canalització interior d'usuari.",
    "De la coberta (elements de captació) al RITS hi va la canalització d'enllaç superior."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin recorregut fan les canalitzacions d'enllaç en una ICT?",
   "explanation": "La canalització d'enllaç porta la xarxa d'alimentació fins als recintes: la inferior va del punt d'entrada general fins al RITI (telefonia i banda ampla) i la superior baixa de la coberta fins al RITS (ràdio i televisió).",
   "options": [
    "Del punt d'entrada general fins al RITI (inferior) i des de la coberta fins al RITS (superior).",
    "Del RITI fins al RITS, passant pels registres secundaris de cada planta.",
    "Dels registres secundaris fins als registres de terminació de xarxa de cada habitatge.",
    "De l'arqueta d'entrada fins al RITS (inferior) i des de la coberta fins al RITI (superior).",
    "Del registre de terminació de xarxa fins a les preses d'usuari de cada estança de l'habitatge."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Del RITI al RITS passant pels registres secundaris és la canalització principal.",
    "Dels registres secundaris als registres de terminació de xarxa és la canalització secundària.",
    "Té els recintes intercanviats: l'enllaç inferior acaba al RITI (part baixa) i el superior al RITS (part alta).",
    "Del registre de terminació de xarxa a les preses és la canalització interior d'usuari."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és la canalització interior d'usuari en una ICT?",
   "explanation": "La canalització interior d'usuari és dins de l'habitatge: va del registre de terminació de xarxa (on hi ha els PAU) fins als registres de presa de cada estança.",
   "options": [
    "La que va del registre de terminació de xarxa fins a les preses d'usuari de l'habitatge.",
    "La que va dels registres secundaris fins al registre de terminació de xarxa de cada habitatge.",
    "La que connecta el RITI i el RITS.",
    "La que porta els cables de les operadores des de l'arqueta d'entrada fins al RITI.",
    "La que uneix les antenes de la coberta amb els equips del RITS."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Dels registres secundaris al registre de terminació de xarxa és la canalització secundària, a la zona comunitària.",
    "La que connecta el RITI i el RITS és la canalització principal.",
    "De l'arqueta d'entrada al RITI hi ha la canalització externa i la d'enllaç inferior, no la interior d'usuari.",
    "De les antenes al RITS hi va la canalització d'enllaç superior."
   ]
  },
  {
   "type": "multichoice",
   "text": "En quin recinte de les ICT trobem els repartidors de les operadores dels serveis de telecomunicacions?",
   "explanation": "Les xarxes d'alimentació de les operadores de telefonia, fibra i cable entren per la part baixa de l'edifici i acaben al RITI, on hi ha els seus repartidors i el punt d'interconnexió amb la xarxa de l'edifici.",
   "options": [
    "En el RITI (recinte d'infraestructures de telecomunicacions inferior).",
    "En el RITS (recinte d'infraestructures de telecomunicacions superior).",
    "En el RS (registre secundari).",
    "En el RTR (registre de terminació de xarxa).",
    "En el registre d'enllaç inferior, al punt d'entrada general de l'edifici."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El RITS és a la part alta i allotja els equips de ràdio i televisió terrestre i per satèl·lit, no els repartidors de les operadores.",
    "Al registre secundari hi ha el punt de distribució de cada planta, no l'entrada de les operadores.",
    "El registre de terminació de xarxa és a l'habitatge i hi ha els PAU de l'usuari.",
    "El registre d'enllaç és el punt per on entren els cables a l'edifici, però els repartidors de les operadores no hi són: són al RITI."
   ]
  },
  {
   "type": "multichoice",
   "text": "En quina part de l'edifici s'acostuma a trobar el RITI?",
   "explanation": "El RITI recull els serveis que arriben del carrer per la canalització d'enllaç inferior; per això se situa a la planta baixa o al soterrani, a prop del punt d'entrada general.",
   "options": [
    "A la planta baixa o al soterrani, ja que hi arriben els cables que venen del carrer.",
    "A la coberta, a prop de les antenes, per reduir la longitud dels cables de captació.",
    "A una planta intermèdia, per igualar les distàncies cap a les plantes superiors i inferiors.",
    "A l'exterior de l'edifici, al costat de l'accés principal.",
    "A l'última planta, ja que hi arriben els senyals de radiodifusió de les antenes."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "A prop de les antenes hi ha el RITS, no el RITI.",
    "El RITI no es col·loca per igualar distàncies: és on arriben els cables del carrer, a la part baixa.",
    "El RITI és un recinte de l'interior de l'edifici (zona comunitària), no un element exterior.",
    "Els senyals de les antenes arriben al RITS, situat a la part superior."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina xarxa connecta el registre de terminació de xarxa amb les preses d'usuari?",
   "explanation": "La xarxa interior d'usuari comença al PAU, dins del registre de terminació de xarxa, i acaba a les bases d'accés terminal (preses) de cada estança de l'habitatge.",
   "options": [
    "La xarxa interior d'usuari.",
    "La xarxa de dispersió.",
    "La xarxa de distribució.",
    "La xarxa d'alimentació.",
    "La xarxa exterior de les operadores."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La xarxa de dispersió va dels registres secundaris fins als PAU; acaba on comença la interior d'usuari.",
    "La xarxa de distribució va dels recintes (RITI/RITS) fins als registres secundaris de cada planta.",
    "La xarxa d'alimentació porta els serveis de les operadores fins als recintes RITI i RITS.",
    "Les xarxes de les operadores són fora de l'edifici; no arriben fins a les preses de l'habitatge."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina xarxa s'encarrega de distribuir els serveis de telecomunicacions per la canalització principal?",
   "explanation": "La xarxa de distribució porta els senyals des del RITI o el RITS fins als punts de distribució de cada planta, i ho fa per la canalització principal.",
   "options": [
    "La xarxa de distribució.",
    "La xarxa d'alimentació.",
    "La xarxa interior d'usuari.",
    "La xarxa de dispersió.",
    "La xarxa exterior de les operadores."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La xarxa d'alimentació arriba fins als recintes per la canalització externa i la d'enllaç, no per la principal.",
    "La xarxa interior d'usuari va per la canalització interior de l'habitatge.",
    "La xarxa de dispersió va per la canalització secundària, des dels registres secundaris fins als habitatges.",
    "Les xarxes de les operadores són fora de l'edifici i no fan servir la canalització principal."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina xarxa s'encarrega de distribuir els serveis de telecomunicacions des dels registres secundaris fins als registres de terminació de xarxa?",
   "explanation": "La xarxa de dispersió connecta els punts de distribució de cada planta (registres secundaris) amb els PAU dels habitatges, que són als registres de terminació de xarxa. Va per la canalització secundària.",
   "options": [
    "La xarxa de dispersió.",
    "La xarxa d'alimentació.",
    "La xarxa de distribució.",
    "La xarxa interior d'usuari.",
    "La xarxa exterior de les operadores."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La xarxa d'alimentació acaba al RITI o al RITS; no arriba als registres secundaris.",
    "La xarxa de distribució arriba fins als registres secundaris; a partir d'allà comença la de dispersió.",
    "La xarxa interior d'usuari comença al registre de terminació de xarxa i va cap a les preses, dins de l'habitatge.",
    "Les xarxes de les operadores són fora de l'edifici."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quins elements de la ICT es troben a la zona exterior?",
   "explanation": "La zona exterior és la part de la ICT que queda fora de l'edifici: l'arqueta d'entrada i la canalització externa, que porta els cables de les operadores fins al punt d'entrada general.",
   "options": [
    "L'arqueta d'entrada i la canalització externa.",
    "El RITI i la canalització d'enllaç inferior.",
    "Els registres secundaris i la canalització principal.",
    "Els registres de terminació de xarxa i la canalització interior d'usuari.",
    "El RITS i la canalització d'enllaç superior."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El RITI i la canalització d'enllaç ja són dins de l'edifici: pertanyen a la zona comunitària.",
    "Els registres secundaris i la canalització principal són a la zona comunitària.",
    "El registre de terminació de xarxa i la canalització interior d'usuari són a la zona privada.",
    "El RITS i la canalització d'enllaç superior pertanyen a la zona comunitària."
   ]
  },
  {
   "type": "multichoice",
   "text": "En la xarxa de parells trenats, quina altra opció hi ha per a fer la distribució dels cables si no es fa en estrella?",
   "explanation": "La xarxa de parells trenats sempre es distribueix en estrella: cada habitatge té el seu cable des del RITI fins al registre de terminació de xarxa, sense cap element actiu ni de segregació als registres secundaris.",
   "options": [
    "Cap, en la xarxa de parells trenats sempre es farà la distribució en estrella.",
    "Es pot fer la distribució en arbre-branca, posant un switch a cada registre secundari.",
    "Es pot fer la distribució amb fibra òptica, amb caixes de segregació als registres secundaris.",
    "Es pot fer la distribució en anell, encadenant els registres secundaris de cada planta.",
    "Es pot fer la distribució en bus, amb patch panels als registres secundaris."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "No s'hi posen switchs als registres secundaris: la xarxa de parells trenats no té topologia en arbre-branca.",
    "La fibra òptica és una xarxa diferent; no és una manera alternativa de distribuir els parells trenats.",
    "La topologia en anell no s'utilitza en la xarxa de parells trenats d'una ICT.",
    "Els patch panels de parells trenats són al RITI, no als registres secundaris, i la topologia en bus no s'utilitza."
   ]
  },
  {
   "type": "multichoice",
   "text": "En cas de fer la distribució en estrella amb la fibra òptica, quins elements hi trobarem als registres secundaris?",
   "explanation": "En la distribució en estrella de fibra òptica, cada habitatge rep un cable propi de dues fibres que va sense interrupcions del RITI al registre de terminació de xarxa. Per això els registres secundaris només fan de pas.",
   "options": [
    "Cap element: els cables de dues fibres passen directes del RITI als registres de terminació de xarxa.",
    "Caixes de segregació de fibra òptica, per connectar la xarxa de distribució amb la de dispersió fins als registres de terminació de xarxa.",
    "Repartidors de telefonia de tipus Krone, de 5 o 10 parells.",
    "Un switch a cada registre secundari, per connectar les xarxes de distribució i dispersió.",
    "La fibra òptica no es pot distribuir en estrella en una ICT segons la normativa actual."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Les caixes de segregació són pròpies de la distribució en arbre-branca, no de l'estrella.",
    "Els repartidors Krone són de parells telefònics, no de fibra òptica.",
    "La xarxa de fibra de la ICT és passiva: no porta switchs als registres secundaris.",
    "La normativa sí que permet distribuir la fibra en estrella."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què són aquests elements de la imatge?",
   "explanation": "Són regletes repartidores de parells de telefonia (tipus Krone): blocs on es connecten els parells de coure amb una eina d'inserció.",
   "image": "../img/t1-2-estructura/1.png",
   "options": [
    "Repartidors de parells de telefonia.",
    "Patch panels de parells trenats.",
    "Caixes de segregació de fibra òptica.",
    "Derivadors de banda ampla coaxial (CATV).",
    "Multiplexors passius de telefonia."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Un patch panel de parells trenats té connectors RJ45 femella, no regletes.",
    "Una caixa de segregació de fibra és una caixa tancada amb safates d'empalmament i adaptadors òptics.",
    "Els derivadors coaxials tenen connectors F roscats, no regletes.",
    "Un multiplexor passiu és una caixa petita amb preses RJ45 que és al registre de terminació de xarxa."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin és l'element de la imatge i en quin punt el podem trobar a la instal·lació?",
   "explanation": "És un derivador de banda ampla coaxial (CATV): deixa passar el senyal cap avall i n'extreu una part cap als habitatges de la planta. Es col·loca als registres secundaris.",
   "image": "../img/t1-2-estructura/derivador.png",
   "options": [
    "És un derivador de banda ampla coaxial (CATV), i el podem trobar en els registres secundaris.",
    "És un PAU de banda ampla coaxial (CATV), i el podem trobar en els registres de terminació de xarxa dels habitatges.",
    "És un repartidor de parells trenats, i el podem trobar als registres secundaris.",
    "És un PAU de fibra òptica, i el podem trobar als registres de terminació de xarxa dels habitatges.",
    "És un derivador de telefonia, i el podem trobar al RITI."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El PAU coaxial és al registre de terminació de xarxa i no té sortides de derivació cap a altres habitatges.",
    "Els elements de parells trenats tenen connectors RJ45, no connectors F coaxials.",
    "Els elements de fibra òptica tenen adaptadors òptics (SC/APC), no connectors F coaxials.",
    "La telefonia no fa servir derivadors coaxials."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin és l'element de la imatge, on el podem trobar i quina funció té?",
   "explanation": "És un multiplexor passiu: és al registre de terminació de xarxa i reparteix una línia telefònica cap a diverses preses RJ45 de l'habitatge.",
   "image": "../img/t1-2-estructura/mux1.png",
   "options": [
    "Un multiplexor passiu; és al registre de terminació de xarxa i reparteix una línia telefònica cap a diverses preses.",
    "Un switch; és al registre secundari i serveix per tenir més preses ethernet a partir d'una sola entrada.",
    "Un router; és al registre de terminació de xarxa i gestiona el tràfic entre l'habitatge i internet.",
    "Un ONT; és al registre de terminació de xarxa i converteix la línia telefònica que arriba de l'operadora en senyal per cable coaxial.",
    "Una presa d'usuari de telefonia; és a la xarxa interior d'usuari i s'hi connecten els telèfons fixos."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Un switch és un equip actiu (porta alimentació) i a la ICT no se n'instal·la cap al registre secundari.",
    "El router és un equip actiu de l'operadora, no un element passiu que reparteix la línia telefònica.",
    "L'ONT converteix el senyal òptic de la fibra en ethernet, no la línia telefònica en coaxial.",
    "Una presa d'usuari és un sol punt de connexió de la paret, no un repartidor amb diverses sortides."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina funció té un patch panel òptic com el de la imatge?",
   "explanation": "El patch panel òptic del RITI fa de punt d'interconnexió: d'una banda hi arriben les fibres de les operadores i de l'altra comença la xarxa de fibra de l'edifici cap als habitatges.",
   "image": "../img/t1-2-estructura/patch.png",
   "options": [
    "Fa de punt d'interconnexió entre la fibra de les operadores i la xarxa de l'edifici.",
    "Connecta directament amb els PAU dels habitatges, però només s'instal·la si la distribució és en estrella.",
    "Amplifica el senyal òptic abans de distribuir-lo per la xarxa de dispersió de l'edifici.",
    "Fa de punt de segregació de les fibres cap a cada planta, i per això s'instal·la als registres secundaris.",
    "És un punt de comprovació d'avaries situat a l'entrada de cada habitatge, local o oficina."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El patch panel és al RITI i hi és sempre, sigui quina sigui la topologia de distribució.",
    "És un element passiu: connecta fibres, però no amplifica el senyal.",
    "La segregació de fibres als registres secundaris la fan les caixes de segregació, no el patch panel.",
    "A l'entrada de cada habitatge hi ha el PAU, no un patch panel."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin tipus de connector recomana la normativa fer servir per a la xarxa de fibra òptica?",
   "explanation": "La normativa ICT recomana connectors SC/APC per a la fibra òptica: format SC (quadrat, d'encaix) i poliment APC (en angle), que s'identifica pel color verd.",
   "image": "../img/t1-2-estructura/verd.png",
   "options": [
    "SC/APC",
    "LC/PC",
    "ST/APC",
    "ST/PC",
    "LC/APC"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "LC és un connector més petit que la normativa no fa servir, i el poliment PC (de color blau) no és el recomanat.",
    "El connector ST és de tipus baioneta i no és el que fixa la normativa ICT.",
    "Ni el format ST ni el poliment PC són els que recomana la normativa.",
    "El poliment APC és correcte, però el format recomanat és SC, no LC."
   ]
  },
  {
   "type": "multichoice",
   "text": "En quins casos s'haurà d'instal·lar un patch panel coaxial al RITI per al servei CATV?",
   "explanation": "El patch panel coaxial al RITI només cal quan la xarxa CATV es distribueix en estrella (un cable per habitatge), cosa que es pot fer en edificis de fins a 20 PAU. En edificis més grans es fa en arbre-branca amb derivadors.",
   "image": "../img/t1-2-estructura/coax.png",
   "options": [
    "Només si la distribució és en estrella, cosa que pot fer-se en edificis de fins a 20 PAU.",
    "Només si la distribució és en estrella, cosa que pot fer-se en edificis de més de 20 PAU.",
    "No està permès instal·lar un patch panel coaxial al RITI mai, s'ha d'instal·lar al RITS.",
    "Només es pot instal·lar si la distribució és en arbre-branca, cosa que està permesa en edificis de fins a 20 PAU.",
    "Només es pot instal·lar si la distribució és en arbre-branca, cosa que està permesa en edificis de més de 20 PAU."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La distribució en estrella es fa en edificis petits, de fins a 20 PAU, no de més de 20.",
    "Està permès: en distribució en estrella, el patch panel coaxial és precisament al RITI.",
    "En arbre-branca no cal patch panel coaxial: el senyal es reparteix amb derivadors a cada planta.",
    "En arbre-branca no cal patch panel coaxial, i aquesta topologia és la dels edificis de més de 20 PAU."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és aquest element, i on el podem trobar en una ICT?",
   "explanation": "És un patch panel de parells trenats (connectors RJ45). Es troba al RITI, on cada port correspon al cable que va en estrella fins a un habitatge.",
   "image": "../img/t1-2-estructura/pt.png",
   "options": [
    "És un patch panel de parells trenats, i el podem trobar en el RITI.",
    "És un patch panel de parells trenats, i el podem trobar en els registres secundaris.",
    "És un patch panel de fibra òptica, i el podem trobar en el RITI.",
    "És un patch panel de banda ampla coaxial, i el podem trobar en el RITI.",
    "És un patch panel de fibra òptica, i el podem trobar en els registres secundaris."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Els parells trenats es distribueixen en estrella des del RITI; als registres secundaris no hi ha patch panels.",
    "Un patch panel de fibra òptica té adaptadors òptics (SC/APC), no connectors RJ45.",
    "Un patch panel coaxial té connectors F, no RJ45.",
    "Té connectors RJ45, de manera que no és de fibra; a més, aquest element no és als registres secundaris."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és aquest element, i on el podem trobar en una ICT?",
   "explanation": "És una caixa de segregació de fibra òptica: s'instal·la als registres secundaris quan la fibra es distribueix en arbre-branca, i separa les fibres que van cap a cada habitatge de la planta.",
   "image": "../img/t1-2-estructura/cs.png",
   "options": [
    "És una caixa de segregació de fibra òptica, i la podem trobar en els registres secundaris.",
    "És una caixa de segregació de fibra òptica, i la podem trobar en els registres de terminació de xarxa.",
    "És una caixa de segregació de fibra òptica, i la podem trobar en el RITI.",
    "És una caixa de distribució de parells telefònics, i la podem trobar en els registres secundaris.",
    "És una caixa de distribució de parells telefònics, i la podem trobar en el RITI."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Al registre de terminació de xarxa hi ha el PAU òptic, no una caixa de segregació.",
    "Al RITI hi ha el patch panel òptic i les caixes terminals de les operadores, no les caixes de segregació.",
    "Té safates d'empalmament i adaptadors de fibra; no és un element de parells telefònics.",
    "No és de parells telefònics, i al RITI hi ha els repartidors, no aquest element."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina funció té l'ONT en la instal·lació?",
   "explanation": "L'ONT (terminal de xarxa òptica) és a l'habitatge i converteix el senyal òptic de la fibra en senyal elèctric ethernet per al router i els equips.",
   "options": [
    "Convertir els senyals òptics de la fibra en senyals elèctrics (ethernet).",
    "Repartir les fibres que arriben del RITI entre els diferents habitatges de la planta.",
    "Amplificar el senyal òptic perquè arribi amb prou potència a totes les preses de l'habitatge.",
    "Convertir el senyal de televisió per cable (CATV) en senyal òptic.",
    "Connectar diverses preses de telefonia a una sola línia de veu de l'operadora."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Les fibres es reparteixen entre habitatges al RITI o als registres secundaris; l'ONT ja és a l'habitatge.",
    "L'ONT no amplifica el senyal òptic: el converteix en senyal elèctric.",
    "La televisió per cable va per coaxial; l'ONT treballa amb el senyal de la fibra.",
    "Repartir una línia de veu entre diverses preses ho fa el multiplexor passiu, no l'ONT."
   ]
  },
  {
   "type": "multichoice",
   "text": "Per a quin servei es fan servir les preses RJ11 femella en una ICT segons la normativa vigent?",
   "explanation": "En la ICT vigent, les preses de parells trenats són RJ45 i serveixen tant per a telefonia com per a dades. Les preses RJ11 eren de la normativa antiga i ja no s'hi fan servir.",
   "options": [
    "Les preses RJ11 no es fan servir a una ICT en normativa vigent.",
    "Són preses per a connectar-hi els terminals telefònics.",
    "Són preses per al servei de televisió per cable (CATV).",
    "Són preses per connexions de dades a alta velocitat (router, ordinador, etc).",
    "Són preses per a connectar-hi un ONT o un router de fibra òptica."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Els telèfons es connecten a preses RJ45, que també accepten la clavilla RJ11 del telèfon.",
    "La televisió per cable fa servir preses coaxials, no preses RJ.",
    "Les dades fan servir preses RJ45, no RJ11.",
    "L'ONT es connecta a la fibra amb un connector òptic, i el router a preses RJ45."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin tipus de presa d'usuari és aquesta, i per a què serveix?",
   "explanation": "És una presa RJ45 femella doble. Cada connector pot donar veu o dades, segons a quin equip estigui connectat el seu cable al registre de terminació de xarxa.",
   "image": "../img/t1-2-estructura/presa.png",
   "options": [
    "És una presa RJ45 femella doble; cada connector pot ser de veu (telefonia) o de dades (LAN).",
    "És una presa d'usuari de telefonia doble, per connectar-hi fins a dos telèfons.",
    "És una presa RJ45 femella doble, exclusiva per a dades: per a la telefonia cal fer servir preses RJ11.",
    "És una presa d'usuari de fibra, per connectar-hi dispositius de xarxa local (LAN).",
    "És una presa d'usuari doble per a televisió per cable (CATV)."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "No és exclusiva de telefonia: cada RJ45 pot ser de veu o de dades.",
    "Les preses RJ45 també serveixen per a veu; les RJ11 ja no es fan servir a la ICT.",
    "Una presa de fibra té adaptadors òptics, no connectors RJ45.",
    "Les preses de televisió són coaxials, no RJ45."
   ]
  },
  {
   "type": "multichoice",
   "text": "Tenim aquesta presa d'usuari en un dormitori. Com podem saber si és de veu o de dades?",
   "explanation": "Totes les preses RJ45 són iguals. El que decideix el servei és on es connecta el seu cable al registre de terminació de xarxa: al multiplexor passiu dona veu (telefonia) i al router dona dades.",
   "image": "../img/t1-2-estructura/rj.png",
   "options": [
    "Dependrà de si en el registre de terminació de xarxa el cable que va a aquesta presa està connectat al multiplexor passiu (veu) o al router (dades).",
    "Dependrà de si en el registre de terminació de xarxa el cable que va a aquesta presa està connectat al multiplexor passiu (dades) o al router (veu).",
    "Dependrà de si en el registre de terminació de xarxa el cable que va a aquesta presa està connectat al switch (veu) o al router (dades).",
    "Dependrà de si en el registre de terminació de xarxa el cable que va a aquesta presa està connectat al switch (dades) o al router (veu).",
    "Si es tracta d'un dormitori, per normativa ha de ser una presa de veu (telefònica)."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Està al revés: el multiplexor passiu reparteix la línia de veu i el router dona les dades.",
    "Al registre de terminació de xarxa la veu no surt d'un switch, sinó del multiplexor passiu.",
    "Al registre de terminació de xarxa la veu no surt d'un switch, i el router dona dades, no veu.",
    "La normativa no fixa el servei de cada presa segons l'estança: depèn de la connexió al registre de terminació de xarxa."
   ]
  },
  {
   "type": "multichoice",
   "text": "Les caixes terminals òptiques (CTO) són un element que trobem en el RITI, i són...",
   "explanation": "Les caixes terminals òptiques (CTO) del RITI són de les operadores: hi acaben les seves fibres, que després s'interconnecten amb la xarxa de fibra de l'edifici.",
   "options": [
    "Caixes distribuïdores de fibres òptiques de les operadores de telecomunicacions.",
    "Repartidors de fibres òptiques de la instal·lació comunitària de l'edifici, que connecten amb els registres secundaris.",
    "Caixes de connexions de parells telefònics.",
    "Caixes de connexions de banda ampla coaxial.",
    "Caixes de connexions de cables de parells trenats."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Els repartidors de fibra de l'edifici són el patch panel òptic de la ICT, no la CTO de l'operadora.",
    "La CTO és un element de fibra òptica, no de parells telefònics.",
    "La CTO és un element de fibra òptica, no coaxial.",
    "La CTO és un element de fibra òptica, no de parells trenats."
   ]
  },
  {
   "type": "multichoice",
   "text": "El Pere té al seu pis una presa RJ45 femella simple on hi té connectat un telèfon fix, però com que va sempre amb el mòbil està pensant a canviar aquesta presa per una de xarxa local, per connectar-hi el portàtil per cable, ja que li han dit que anirà més ràpida la connexió a internet. Quins canvis ha de fer?",
   "explanation": "La presa no s'ha de canviar: les preses RJ45 serveixen per a veu i per a dades. N'hi ha prou de passar el seu cable, al registre de terminació de xarxa, del multiplexor passiu (veu) a una sortida LAN del router (dades).",
   "options": [
    "Al registre de terminació de xarxa, passar el cable d'aquesta presa del multiplexor passiu a una sortida LAN del router.",
    "Canviar la presa d'usuari per una de fibra, per poder tenir connexió ràpida a internet al portàtil.",
    "Res: és millor que continuï fent servir el wifi, que va més ràpid que el cable ethernet.",
    "Canviar la presa RJ45 simple per una de doble, perquè les preses simples de l'habitatge només serveixen per a telefonia fixa.",
    "Demanar a l'operadora que porti una línia de dades nova fins a aquella presa des del RITI."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "No cal fibra fins a la presa: n'hi ha prou de connectar-la al router per tenir dades.",
    "Normalment una connexió per cable és més estable i ràpida que el wifi.",
    "Les preses RJ45 simples també poden donar dades; el servei depèn de la connexió al registre de terminació de xarxa.",
    "No cal cap línia nova: la línia de dades ja arriba al router, dins del registre de terminació de xarxa."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és un RITM?",
   "explanation": "El RITM és un recinte modular prefabricat que pot substituir els recintes construïts a l'obra. Pot ser inferior (RITMI), superior (RITMS) o únic (RITMU).",
   "options": [
    "Un recinte prefabricat que pot substituir els recintes construïts a l'obra.",
    "Un recinte addicional obligatori a les plantes intermèdies dels edificis alts.",
    "El recinte on s'instal·len els equips de les operadores mòbils a la coberta.",
    "Un registre secundari de grans dimensions que agrupa diverses plantes.",
    "El recinte que acumula les funcions del RITI i del RITS en cases unifamiliars."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "No existeix cap recinte obligatori a les plantes intermèdies; a cada planta hi ha registres secundaris.",
    "Els equips de les operadores mòbils no formen part dels recintes de la ICT.",
    "El RITM és un recinte, no un registre secundari.",
    "El recinte que acumula les funcions del RITI i del RITS és el RITU (recinte únic)."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina és la funció principal del RITS?",
   "explanation": "El RITS és a la part alta de l'edifici i allotja els equips de capçalera per a la ràdio i la televisió terrestre i per satèl·lit. També reserva espai per a serveis futurs.",
   "options": [
    "Allotjar els equips per als serveis de ràdio i televisió terrestre i per satèl·lit.",
    "Allotjar els repartidors de les operadores de telefonia i de fibra òptica de l'edifici.",
    "Fer de punt d'entrada general dels cables que arriben del carrer.",
    "Allotjar els PAU de tots els habitatges de l'edifici.",
    "Substituir el RITI en els edificis de més de 10 PAU o de més de tres plantes."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Els repartidors de les operadores de telefonia i fibra són al RITI.",
    "El punt d'entrada general és a la part baixa, on arriben els cables del carrer.",
    "Els PAU són dins de cada habitatge, al registre de terminació de xarxa.",
    "El RITS no substitueix el RITI: tots dos tenen funcions diferents. El recinte únic és el RITU."
   ]
  },
  {
   "type": "multichoice",
   "text": "On s'instal·la el registre d'enllaç d'una ICT?",
   "explanation": "El registre d'enllaç s'instal·la al punt d'entrada general de l'immoble: és per on entren a l'edifici les xarxes d'alimentació de les operadores, des de la canalització externa.",
   "options": [
    "Al punt d'entrada general, per on entren a l'edifici les xarxes de les operadores.",
    "Al RITI, on conté els equips de les operadores i els punts d'interconnexió amb la distribució.",
    "A cada planta, on uneix la canalització principal amb les secundàries.",
    "A l'interior de l'habitatge, on conté els PAU de cada servei.",
    "Als canvis de direcció de les canalitzacions, per facilitar l'estesa de cables."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El registre que és al RITI amb els equips de les operadores és el registre principal.",
    "El registre que uneix la canalització principal amb les secundàries a cada planta és el registre secundari.",
    "El registre que hi ha a l'habitatge amb els PAU és el registre de terminació de xarxa.",
    "Els registres que es posen als canvis de direcció són els registres de pas."
   ]
  },
  {
   "type": "multichoice",
   "text": "Per a què serveixen els registres de pas?",
   "explanation": "Els registres de pas són caixes intermèdies que faciliten l'estesa dels cables quan la canalització canvia de direcció o quan el tram és massa llarg.",
   "options": [
    "Per facilitar l'estesa de cables quan hi ha canvis de direcció o trams molt llargs.",
    "Per allotjar els punts de distribució de cada planta de l'edifici.",
    "Per separar la xarxa comunitària de la xarxa interior de l'usuari.",
    "Per allotjar les bases d'accés terminal (BAT) a les estances de l'habitatge.",
    "Per deixar passar els cables de les operadores des de l'arqueta d'entrada fins al RITI i el RITS."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Els punts de distribució de cada planta són als registres secundaris.",
    "El límit entre la xarxa comunitària i la interior d'usuari és el PAU, al registre de terminació de xarxa.",
    "Les BAT s'allotgen als registres de presa.",
    "Els cables de les operadores entren per la canalització externa i la d'enllaç; no són registres de pas."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què s'allotja en els registres de presa?",
   "explanation": "Els registres de presa són les caixes encastades a la paret de cada estança on es munten les bases d'accés terminal (BAT), on l'usuari connecta els seus equips.",
   "options": [
    "Les bases d'accés terminal (BAT), on l'usuari connecta els seus equips.",
    "Els punts d'accés a l'usuari (PAU) de cada servei de telecomunicacions.",
    "Els punts de distribució de cada planta.",
    "Els amplificadors de línia de la xarxa interior d'usuari.",
    "Els derivadors que reparteixen el senyal cap a cada estança."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Els PAU són al registre de terminació de xarxa, no als registres de presa.",
    "Els punts de distribució són als registres secundaris de cada planta.",
    "Els registres de presa no allotgen amplificadors.",
    "Els derivadors són a la zona comunitària (registres secundaris), no als registres de presa."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és el punt d'interconnexió i on es troba?",
   "explanation": "El punt d'interconnexió és on s'uneixen les xarxes d'alimentació de les operadores amb la xarxa de distribució de l'edifici. És al RITI.",
   "options": [
    "La unió entre les xarxes d'alimentació de les operadores i la xarxa de distribució; és al RITI.",
    "La unió entre la xarxa de distribució i la de dispersió; és als registres secundaris.",
    "La unió entre la xarxa de dispersió i la interior d'usuari; és al registre de terminació de xarxa.",
    "La unió entre els elements de captació i la xarxa de distribució; és a la coberta.",
    "La unió entre la canalització externa i la d'enllaç; és a l'arqueta d'entrada."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La unió entre la xarxa de distribució i la de dispersió és el punt de distribució, als registres secundaris.",
    "La unió entre la xarxa de dispersió i la interior d'usuari és el PAU, al registre de terminació de xarxa.",
    "Els elements de captació formen part de la xarxa d'alimentació, que acaba al RITS; el punt d'interconnexió és al RITI.",
    "A l'arqueta d'entrada no hi ha cap punt d'interconnexió de xarxes."
   ]
  },
  {
   "type": "multichoice",
   "text": "On es troba normalment el punt de distribució d'una ICT?",
   "explanation": "El punt de distribució connecta la xarxa de distribució amb la de dispersió i es troba als registres secundaris de cada planta.",
   "options": [
    "Als registres secundaris de cada planta.",
    "Al RITI, al costat dels repartidors de les operadores.",
    "Al registre de terminació de xarxa de cada habitatge.",
    "Al RITS, a la sortida de l'amplificador de capçalera.",
    "A l'arqueta d'entrada, davant de l'edifici."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Al RITI hi ha el punt d'interconnexió, no el de distribució.",
    "Al registre de terminació de xarxa hi ha el PAU.",
    "El RITS és la capçalera de ràdio i televisió, no el punt de distribució de cada planta.",
    "L'arqueta d'entrada és a la zona exterior; no hi ha cap punt de distribució."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin element marca el límit entre la xarxa de dispersió i la xarxa interior d'usuari?",
   "explanation": "El PAU (punt d'accés a l'usuari) és on acaba la xarxa de dispersió i comença la xarxa interior d'usuari. També marca el límit de responsabilitats entre la part comunitària i la privada.",
   "options": [
    "El punt d'accés a l'usuari (PAU).",
    "El punt de distribució (PD).",
    "El punt d'interconnexió (PI).",
    "La base d'accés terminal (BAT).",
    "El registre secundari (RS)."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El punt de distribució separa la xarxa de distribució de la de dispersió, una etapa abans.",
    "El punt d'interconnexió és la unió de les xarxes de les operadores amb la de distribució, al RITI.",
    "La BAT és el final de la xarxa interior d'usuari, on es connecten els equips.",
    "El registre secundari allotja el punt de distribució, a cada planta."
   ]
  },
  {
   "type": "multichoice",
   "text": "Qui és responsable dels elements de la zona comunitària d'una ICT?",
   "explanation": "La zona comunitària és d'ús comú per a tots els veïns (recintes, canalitzacions principals i secundàries, antenes), i per això en té la responsabilitat la comunitat de propietaris.",
   "options": [
    "La comunitat de propietaris.",
    "Les operadores de serveis de telecomunicacions.",
    "El propietari de cada habitatge.",
    "L'ajuntament del municipi.",
    "L'empresa instal·ladora, durant tota la vida de l'edifici."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Les operadores són responsables de la zona exterior.",
    "El propietari de cada habitatge és responsable de la zona privada.",
    "L'ajuntament no és responsable de cap zona de la ICT d'un edifici.",
    "L'empresa instal·ladora construeix la ICT, però no en té la responsabilitat durant tota la vida de l'edifici."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quins serveis passen per la canalització d'enllaç superior?",
   "explanation": "La canalització d'enllaç superior va de la coberta al RITS i hi passen els cables dels serveis de radiodifusió: ràdio i televisió terrestre i per satèl·lit.",
   "options": [
    "Els de radiodifusió: ràdio i televisió terrestre i per satèl·lit.",
    "Els de telefonia i banda ampla per fibra òptica.",
    "Els de televisió per cable (CATV) de les operadores.",
    "Tots els serveis, ja que és l'única entrada de cables a l'edifici.",
    "Només els cables de terra i de protecció contra llamps de les antenes."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La telefonia i la fibra entren per la canalització d'enllaç inferior, cap al RITI.",
    "La televisió per cable de les operadores entra per l'enllaç inferior, cap al RITI.",
    "Hi ha dues entrades: la inferior (operadores, cap al RITI) i la superior (radiodifusió, cap al RITS).",
    "És una canalització de telecomunicacions; hi passen els cables de ràdio i televisió, no només els de terra."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina configuració té la canalització interior d'usuari?",
   "explanation": "La canalització interior d'usuari té una configuració en estrella: un tub independent per a cada registre de presa, des del registre de terminació de xarxa.",
   "options": [
    "En estrella: un tub independent des del RTR fins a cada registre de presa.",
    "En arbre-branca: un tub que passa successivament per tots els registres de presa.",
    "En anell: un tub que surt del RTR, passa per totes les preses i hi torna.",
    "En bus: un únic tub principal amb petites derivacions a cada estança.",
    "No té cap configuració definida: depèn del criteri de l'instal·lador."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En arbre-branca, un problema en un tram afectaria totes les preses que hi ha darrere; la normativa demana estrella.",
    "La configuració en anell no s'utilitza a la canalització interior d'usuari.",
    "No és un únic tub amb derivacions: cada presa té el seu tub propi.",
    "La configuració està definida per la normativa: és en estrella."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina xarxa inclou les antenes i la canalització d'enllaç superior fins al RITS?",
   "explanation": "Segons els apunts, la xarxa d'alimentació porta els senyals des de l'origen fins a l'edifici. A la part alta inclou les antenes i la canalització d'enllaç superior fins al RITS; a la part baixa, la canalització exterior i la d'enllaç inferior fins al RITI.",
   "options": [
    "La xarxa d'alimentació.",
    "La xarxa de distribució.",
    "La xarxa de dispersió.",
    "La xarxa interior d'usuari.",
    "Cap: les antenes són un element independent de les xarxes de la ICT."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La xarxa de distribució comença als recintes (RITI/RITS) i baixa per la canalització principal.",
    "La xarxa de dispersió va dels registres secundaris als habitatges.",
    "La xarxa interior d'usuari és dins de l'habitatge.",
    "Les antenes formen part de la xarxa d'alimentació per als serveis de ràdio i televisió."
   ]
  },
  {
   "type": "multichoice",
   "text": "On s'instal·la l'amplificador de capçalera?",
   "explanation": "L'amplificador de capçalera és al RITS, on es processen i s'amplifiquen els senyals de ràdio i televisió abans de distribuir-los a tot l'edifici.",
   "options": [
    "Al RITS.",
    "Al pal de l'antena.",
    "Al RITI.",
    "Als registres secundaris.",
    "Al registre de terminació de xarxa."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Al pal de l'antena hi va l'amplificador de pal, que és un element diferent.",
    "El RITI és per als serveis de les operadores; la capçalera de ràdio i televisió és al RITS.",
    "Als registres secundaris hi ha derivadors, no la capçalera.",
    "Al registre de terminació de xarxa hi ha els PAU, no la capçalera."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina diferència hi ha entre un repartidor i un derivador?",
   "explanation": "El repartidor divideix el senyal en parts iguals entre totes les sortides. El derivador n'extreu només una part cap a una planta o habitatge i deixa passar la resta cap als derivadors següents.",
   "options": [
    "El repartidor divideix el senyal en parts iguals; el derivador n'extreu una part i deixa passar la resta.",
    "El derivador divideix el senyal en parts iguals; el repartidor n'extreu una part i deixa passar la resta.",
    "El repartidor amplifica el senyal; el derivador l'atenua per adaptar-lo al nivell de cada planta.",
    "El repartidor s'utilitza per als parells telefònics i el derivador per a la fibra òptica.",
    "Cap: són dos noms diferents per al mateix element."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Està al revés: qui divideix en parts iguals és el repartidor, i qui extreu una part és el derivador.",
    "Cap dels dos amplifica el senyal: tots dos són passius i l'atenuen.",
    "Tots dos són elements de la xarxa coaxial (ràdio, televisió i CATV), no de parells ni de fibra.",
    "Tenen funcions diferents: un reparteix a parts iguals i l'altre deriva una part del senyal."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina funció té un mesclador en una instal·lació de ràdio i televisió?",
   "explanation": "El mesclador combina senyals de diferents orígens (TDT, satèl·lit, FM) en un sol cable perquè es puguin distribuir junts per l'edifici.",
   "options": [
    "Combinar senyals de diferents orígens (TDT, satèl·lit, FM) en un sol cable.",
    "Dividir el senyal en parts iguals cap a les diferents línies de distribució.",
    "Convertir senyals de vídeo i àudio en canals de radiofreqüència.",
    "Augmentar el nivell del senyal perquè arribi amb prou potència a totes les preses.",
    "Filtrar i equalitzar els senyals rebuts per les antenes."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Dividir el senyal en parts iguals és la funció del repartidor.",
    "Convertir vídeo i àudio en canals de radiofreqüència és la funció del modulador.",
    "Augmentar el nivell del senyal és la funció de l'amplificador.",
    "Filtrar i equalitzar els senyals és la funció del processador de senyal."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin tipus d'antena es fa servir per rebre la ràdio digital?",
   "explanation": "La ràdio digital es rep amb una antena DAB (Digital Audio Broadcasting).",
   "options": [
    "Antena DAB.",
    "Antena UHF.",
    "Antena FM.",
    "Antena parabòlica.",
    "Antena LTE (4G/5G)."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "L'antena UHF es fa servir per a la televisió digital terrestre (TDT).",
    "L'antena FM rep la ràdio analògica en freqüència modulada.",
    "L'antena parabòlica rep els senyals de satèl·lit.",
    "LTE és telefonia mòbil i no forma part de la captació de ràdio i televisió de la ICT."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és l'element de la imatge i a quina zona de la ICT pertany?",
   "explanation": "És l'arqueta d'entrada, una tapa al carrer davant de l'edifici (fixa't en la inscripció «ICT»). Pertany a la zona exterior: d'aquí surt la canalització externa cap al punt d'entrada general.",
   "image": "../img/t1-2-estructura/arqueta.jpg",
   "options": [
    "És l'arqueta d'entrada i pertany a la zona exterior.",
    "És l'arqueta d'entrada i pertany a la zona comunitària.",
    "És el registre d'enllaç i pertany a la zona comunitària.",
    "És el registre secundari de la planta baixa i pertany a la zona comunitària.",
    "És el punt d'entrada general i pertany a la zona privada."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "És l'arqueta d'entrada, però és fora de l'edifici: pertany a la zona exterior, no a la comunitària.",
    "El registre d'enllaç és a la façana o dins de l'edifici, al punt d'entrada general; no és una tapa a la vorera.",
    "Els registres secundaris són dins de l'edifici, a cada planta.",
    "El punt d'entrada general no és a la zona privada, i aquest element és l'arqueta d'entrada."
   ]
  },
  {
   "type": "multichoice",
   "text": "Aquesta foto és d'un RITI. Quins elements hi podem identificar?",
   "explanation": "A dalt hi ha un patch panel coaxial (CATV) amb connectors F; a l'esquerra, un patch panel RJ45 de parells trenats; i a la dreta, una caixa terminal òptica (CTO) de fibra, amb els adaptadors verds SC/APC.",
   "image": "../img/t1-2-estructura/riti_cto_pp.jpg",
   "options": [
    "Un patch panel coaxial (CATV), un patch panel RJ45 i una caixa terminal òptica (CTO).",
    "Un repartidor de parells telefònics, un patch panel RJ45 i una caixa de segregació de fibra.",
    "Un patch panel coaxial (CATV), un switch ethernet i un PAU de fibra òptica.",
    "Un amplificador de capçalera, un patch panel RJ45 i una caixa terminal òptica (CTO).",
    "Tres patch panels RJ45 i un repartidor de fibra òptica de la instal·lació comunitària."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Els repartidors de parells telefònics són regletes, no connectors RJ45 o F; i la caixa de la dreta és una CTO, no una caixa de segregació.",
    "No hi ha cap switch (equip actiu); els PAU no són al RITI, sinó a l'habitatge.",
    "L'amplificador de capçalera és al RITS; el panell de dalt té connectors F d'un patch panel coaxial.",
    "Només un dels panells és RJ45: el de dalt és coaxial (connectors F). La caixa de la dreta és una CTO de l'operadora."
   ]
  },
  {
   "type": "multichoice",
   "text": "Els senyals que arriben a aquesta presa d'usuari, des de quin recinte es distribueixen?",
   "explanation": "És una BAT de ràdio i televisió terrestre (TV/R) i de satèl·lit (SAT). Aquests serveis es capten a la coberta i es processen a la capçalera del RITS, que els distribueix cap als habitatges.",
   "image": "../img/t1-2-estructura/bat_tv.jpg",
   "options": [
    "Des del RITS, on hi ha els equips de capçalera de ràdio i televisió.",
    "Des del RITI, on hi ha els repartidors de les operadores.",
    "Des del registre secundari de la planta, on hi ha l'amplificador de capçalera.",
    "Des del registre d'enllaç, on arriben els senyals del carrer.",
    "Directament des de l'antena, sense passar per cap recinte."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Al RITI arriben els serveis de les operadores (telefonia, fibra, cable), no la ràdio i la televisió de les antenes.",
    "L'amplificador de capçalera és al RITS; al registre secundari només hi ha la derivació cap als habitatges.",
    "Pel registre d'enllaç entren els serveis de les operadores, no els de les antenes.",
    "El senyal de l'antena es processa i s'amplifica a la capçalera del RITS abans d'arribar a les preses."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin element de la ICT és el de la imatge?",
   "explanation": "És una presa d'usuari òptica (BAT de fibra): una presa de paret amb adaptadors SC/APC (verds) i l'avís de radiació làser.",
   "image": "../img/t1-2-estructura/presa_optica.jpg",
   "options": [
    "Una presa d'usuari òptica (BAT de fibra).",
    "Un PAU de fibra òptica.",
    "Una presa RJ45 doble de dades.",
    "Una caixa terminal òptica (CTO).",
    "Una presa d'usuari de televisió per satèl·lit."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El PAU òptic és al registre de terminació de xarxa, no és una presa de paret d'una estança.",
    "Una presa RJ45 té connectors de coure; aquests són adaptadors òptics.",
    "La CTO és una caixa de l'operadora que és al RITI, no un mecanisme de paret.",
    "Les preses de televisió són coaxials, no òptiques."
   ]
  },
  {
   "type": "multichoice",
   "text": "On es troba aquest conjunt d'equips?",
   "explanation": "És un registre de terminació de xarxa (RTR): l'armari de l'habitatge on hi ha els PAU (fibra, coaxial i parells), el router, l'ONT i una presa de corrent per alimentar-los.",
   "image": "../img/t1-2-estructura/rtr.jpg",
   "options": [
    "Al registre de terminació de xarxa (RTR).",
    "Al RITI, al costat dels repartidors de les operadores.",
    "Al RITS de l'edifici.",
    "En un registre secundari, a la sortida de la canalització principal.",
    "En un registre de presa d'una estança."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El RITI és un recinte comunitari amb repartidors i patch panels de tot l'edifici, no un armari d'un habitatge amb router.",
    "El RITS té els equips de capçalera de ràdio i televisió, no un router ni un ONT.",
    "Un registre secundari no té equips actius ni presa de corrent; hi ha derivadors i caixes de segregació.",
    "Un registre de presa és una caixa petita encastada amb una sola presa d'usuari."
   ]
  }
 ]
};
