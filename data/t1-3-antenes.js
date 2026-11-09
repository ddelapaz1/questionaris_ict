// Generat amb tools/moodle2quiz.py — no editar a mà.
window.QUIZ = {
 "id": "t1-3-antenes",
 "title": "1.3 Antenes",
 "questions": [
  {
   "type": "multichoice",
   "text": "Una antena és un dispositiu que...",
   "explanation": "En recepció capta l'energia de l'ona i la transfereix al cable.",
   "options": [
    "transforma les ones guiades per una línia en ones que es propaguen per l'espai, i a l'inrevés",
    "amplifica el senyal rebut i el filtra abans d'enviar-lo pel coaxial cap a la capçalera de l'edifici",
    "converteix el senyal analògic en digital perquè el puguin descodificar els receptors de cada habitatge",
    "genera el senyal de radiofreqüència que després s'envia per la línia de transmissió",
    "adapta la impedància del cable coaxial a la del receptor de televisió de cada habitatge de l'edifici"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Una antena passiva no amplifica; el filtratge es fa a la capçalera.",
    "Aquesta funció no és de l'antena.",
    "En una ICT les antenes només reben; no generen senyal.",
    "L'adaptació d'impedàncies la fa el balun, no és la funció de l'antena."
   ]
  },
  {
   "type": "multichoice",
   "text": "En una ICT, com funcionen les antenes del sistema de radiodifusió?",
   "explanation": "No han d'enviar cap senyal en sentit ascendent.",
   "options": [
    "Només com a antenes receptores",
    "Com a emissores i receptores alhora",
    "Només com a emissores cap als repetidors terrestres",
    "Com a receptores, però també envien el canal de retorn de la TDT interactiva",
    "Com a repetidores del senyal per als edificis veïns"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "No emeten cap senyal.",
    "Al contrari: només reben.",
    "No hi ha cap senyal en sentit ascendent.",
    "Les antenes d'una ICT només donen servei al propi edifici."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què passa quan una antena treballa fora de la seva banda de freqüències?",
   "explanation": "L'antena està optimitzada per a una banda concreta.",
   "options": [
    "Empitjora l'adaptació d'impedàncies i baixa el guany",
    "Augmenta el guany perquè capta més canals alhora",
    "Només canvia la polarització del senyal rebut",
    "L'antena passa a comportar-se com una antena omnidireccional",
    "Millora la relació F/B, però es redueix l'angle d'obertura"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Fora de la seva banda el rendiment disminueix.",
    "El que empitjora és el rendiment.",
    "El diagrama no es transforma així.",
    "No; el que empitjora és el rendiment global."
   ]
  },
  {
   "type": "multichoice",
   "text": "El guany d'una antena mesura...",
   "explanation": "S'expressa en dBi o en dBd.",
   "options": [
    "la concentració de l'energia en una direcció respecte d'una antena de referència",
    "la potència elèctrica que l'antena afegeix al senyal gràcies als seus directors",
    "el nombre de canals que l'antena pot rebre alhora",
    "les pèrdues del cable coaxial entre l'antena i l'equip de capçalera de l'edifici",
    "la diferència entre el senyal captat per davant i el captat per darrere"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Una antena passiva no afegeix energia.",
    "No té relació amb el guany.",
    "Això són pèrdues de la xarxa.",
    "Això és la relació davant/darrere (F/B)."
   ]
  },
  {
   "type": "multichoice",
   "text": "Una antena passiva té un guany de 14 dBi. Què vol dir?",
   "explanation": "L'antena no afegeix energia.",
   "options": [
    "Que concentra la recepció en una direcció a costa de les altres",
    "Que amplifica electrònicament el senyal rebut 14 dB abans d'enviar-lo al cable",
    "Que afegeix 14 dB d'energia al senyal gràcies al balun que porta incorporat",
    "Que necessita telealimentació pel cable coaxial per poder donar aquest guany",
    "Que té 14 dB menys pèrdues que el cable"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Una antena passiva no amplifica.",
    "El balun adapta impedàncies; no afegeix energia.",
    "Això seria una antena activa.",
    "El guany no es compara amb el cable."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina relació hi ha entre el guany en dBi i el guany en dBd?",
   "explanation": "El dipol λ/2 té 2,15 dB de guany respecte de l'antena isòtropa.",
   "options": [
    "dBi = dBd + 2,15",
    "dBd = dBi + 2,15",
    "dBi = dBd × 2,15",
    "dBi = dBd − 3",
    "Són la mateixa unitat amb un altre nom"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Al revés: el valor en dBi sempre és més gran.",
    "Els decibels se sumen, no es multipliquen.",
    "La diferència és de 2,15 dB i el valor en dBi és més gran.",
    "Tenen antenes de referència diferents."
   ]
  },
  {
   "type": "multichoice",
   "text": "Una antena molt directiva...",
   "explanation": "Rep molt bé en una direcció i molt menys en les altres.",
   "options": [
    "té un feix principal estret",
    "reparteix l'energia per igual en totes direccions",
    "té menys guany que una antena omnidireccional",
    "no s'ha d'orientar cap a l'emissor",
    "té un angle d'obertura molt ample"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això descriu una antena omnidireccional.",
    "Com més directiva, més guany en la direcció principal.",
    "Com més directiva, més precisa ha de ser l'orientació.",
    "Una antena directiva té una obertura estreta."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quan augmenta la directivitat d'una antena, què passa?",
   "explanation": "Cal trobar un equilibri entre guany i amplada del feix.",
   "options": [
    "Augmenta el guany i el diagrama es fa més estret",
    "Augmenta el guany i el diagrama es fa més ample",
    "Disminueix el guany i el diagrama es fa més estret",
    "L'antena capta millor des de totes les direccions",
    "L'antena consumeix més energia"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El diagrama es fa més estret.",
    "El guany augmenta en la direcció principal.",
    "Al contrari: afavoreix una direcció.",
    "Una antena passiva no consumeix energia."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és l'angle d'obertura (a −3 dB) d'una antena?",
   "explanation": "Un angle petit dona més selectivitat.",
   "options": [
    "L'amplada del lòbul principal",
    "L'angle d'inclinació de l'antena respecte de l'horitzó",
    "L'angle entre el reflector i el primer director",
    "L'angle que separa dos centres emissors",
    "L'angle de gir necessari per canviar la polarització"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això seria l'elevació.",
    "No és un paràmetre de radiació.",
    "És una característica de l'antena.",
    "Per canviar de polarització es gira 90°, però no és l'obertura."
   ]
  },
  {
   "type": "multichoice",
   "text": "Si una antena té un angle d'obertura petit...",
   "explanation": "Un angle petit dona més selectivitat.",
   "options": [
    "és més selectiva, però cal orientar-la amb més precisió",
    "capta emissors de moltes direccions sense haver de reorientar-la",
    "té menys guany que una antena equivalent amb una obertura àmplia",
    "ja no cal ajustar-ne la polarització",
    "té una amplada de banda més gran"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això passa amb una obertura àmplia.",
    "Normalment una obertura petita va associada a més guany.",
    "La polarització s'ha d'ajustar sempre.",
    "L'obertura no determina l'amplada de banda."
   ]
  },
  {
   "type": "multichoice",
   "text": "Una relació davant/darrere (F/B) alta indica que l'antena...",
   "explanation": "Rebutja millor els ecos i les interferències posteriors.",
   "options": [
    "rebutja millor els senyals que arriben per darrere",
    "té una amplada de banda molt gran en tota la UHF",
    "capta igual per davant que per darrere",
    "és omnidireccional en el pla horitzontal",
    "té una impedància ben adaptada als 75 Ω del coaxial"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La F/B compara davant i darrere, no freqüències.",
    "Això seria una F/B propera a 0 dB.",
    "Una antena omnidireccional té una F/B baixa.",
    "La F/B no té relació amb la impedància."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què passa si la polarització de l'antena no coincideix amb la del senyal?",
   "explanation": "L'antena s'ha de col·locar d'acord amb la polarització (H o V).",
   "options": [
    "Hi ha pèrdues importants de senyal",
    "El guany de l'antena es duplica",
    "Només afecta les emissores de FM",
    "No té cap efecte si l'antena és de bona qualitat",
    "Canvia la freqüència intermèdia del senyal"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "No.",
    "Afecta tots els serveis.",
    "La desadaptació de polarització sempre provoca pèrdues.",
    "La polarització no modifica la freqüència."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina impedància ha de presentar una antena per connectar-la als coaxials d'una ICT?",
   "explanation": "Així s'eviten desadaptacions i ones estacionàries.",
   "options": [
    "75 Ω",
    "50 Ω",
    "300 Ω",
    "600 Ω",
    "150 Ω"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "És habitual en altres sistemes, no en els coaxials de les ICT.",
    "És la impedància aproximada del dipol plegat, que s'adapta amb un balun.",
    "No.",
    "No."
   ]
  },
  {
   "type": "multichoice",
   "text": "Una antena activa és la que...",
   "explanation": "En les ICT, però, l'amplificació es fa habitualment a la capçalera.",
   "options": [
    "incorpora un amplificador telealimentat pel coaxial",
    "té més directors que una Yagi convencional",
    "pot transmetre i rebre senyal alhora",
    "està connectada a la presa de terra de l'edifici",
    "s'orienta automàticament cap a l'emissor amb un motor"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Continuaria sent una antena passiva.",
    "No és el significat d'antena activa.",
    "Totes les antenes i màstils s'han de connectar a terra.",
    "No és el significat d'antena activa."
   ]
  },
  {
   "type": "matching",
   "text": "Relaciona cada paràmetre amb la seva descripció.",
   "explanation": "El guany i l'angle d'obertura descriuen com l'antena concentra la recepció; la relació F/B compara el que capta per davant i per darrere; la impedància ha de coincidir amb els 75 Ω del coaxial, i la polarització (H o V), amb la del senyal.",
   "pairs": [
    [
     "Guany",
     "Concentració de la recepció respecte d'una antena de referència"
    ],
    [
     "Angle d'obertura",
     "Amplada del lòbul principal"
    ],
    [
     "Relació F/B",
     "Diferència entre el que es capta per davant i per darrere"
    ],
    [
     "Impedància",
     "Ha de ser de 75 Ω per evitar ones estacionàries"
    ],
    [
     "Polarització",
     "Orientació H o V que ha de coincidir amb la del senyal"
    ]
   ],
   "distractors": []
  },
  {
   "type": "matching",
   "text": "Relaciona cada servei amb la seva banda de freqüències.",
   "explanation": "La FM és a la banda II de VHF; la DAB/DAB+, a la banda III de VHF; la TDT, a les bandes IV i V d'UHF (fins al canal 48 des del segon dividend digital), i la TV per satèl·lit, a la banda Ku.",
   "pairs": [
    [
     "Ràdio FM",
     "87,5 – 108 MHz (banda II, VHF)"
    ],
    [
     "Ràdio digital DAB/DAB+",
     "174 – 240 MHz (banda III, VHF)"
    ],
    [
     "TDT",
     "470 – 694 MHz (bandes IV i V, UHF)"
    ],
    [
     "TV per satèl·lit",
     "10,7 – 12,75 GHz (banda Ku)"
    ]
   ],
   "distractors": []
  },
  {
   "type": "multichoice",
   "text": "Des del segon dividend digital (2020), fins a quin canal ocupa la TDT a Espanya?",
   "explanation": "La banda de 694 a 790 MHz es va assignar al 5G.",
   "options": [
    "Fins al canal 48 (694 MHz)",
    "Fins al canal 60 (790 MHz)",
    "Fins al canal 69 (862 MHz)",
    "Fins al canal 21 (474 MHz)",
    "Fins al canal 36 (594 MHz)"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Era el límit abans del segon dividend digital.",
    "Era el límit abans del primer dividend digital.",
    "El canal 21 és el primer de la banda, no l'últim.",
    "No."
   ]
  },
  {
   "type": "multichoice",
   "text": "Per què moltes antenes de TDT porten un filtre LTE/5G integrat?",
   "explanation": "Aquesta banda es va assignar a la telefonia mòbil.",
   "options": [
    "Per evitar que els senyals de mòbil (694 – 790 MHz) saturin els amplificadors",
    "Per poder rebre els canals de TDT a través de la xarxa de telefonia mòbil",
    "Per augmentar el guany de l'antena a la part alta de la banda UHF, on hi ha més pèrdues",
    "Perquè la normativa prohibeix rebre canals de TDT per sota dels 470 MHz a les ICT",
    "Per adaptar la impedància del dipol de 300 Ω als 75 Ω del coaxial i evitar ones estacionàries"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El filtre rebutja els senyals mòbils.",
    "Un filtre no augmenta el guany.",
    "No és la funció del filtre.",
    "Això ho fa el balun."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin és l'únic element d'una antena Yagi-Uda connectat al cable coaxial?",
   "explanation": "El reflector i els directors són elements passius.",
   "options": [
    "El dipol",
    "El reflector",
    "El director més llarg",
    "El boom",
    "El primer i l'últim director"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "És un element passiu.",
    "Els directors són elements passius.",
    "És el suport mecànic dels elements.",
    "Els directors són elements passius."
   ]
  },
  {
   "type": "multichoice",
   "text": "El reflector d'una antena Yagi...",
   "explanation": "Funciona per l'acoblament amb el dipol.",
   "options": [
    "és darrere del dipol, una mica més llarg, i redueix la captació posterior",
    "és davant del dipol, més curt, i concentra la recepció cap a l'emissor",
    "és l'element connectat al cable i té uns 300 Ω d'impedància",
    "serveix sobretot per ampliar la banda de treball de l'antena",
    "és el suport metàl·lic on es munten tots els elements de l'antena, des del dipol fins als directors"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això descriu un director.",
    "L'element connectat és el dipol.",
    "La seva funció principal és reduir la captació posterior.",
    "Això és el boom."
   ]
  },
  {
   "type": "multichoice",
   "text": "Els directors d'una antena Yagi...",
   "explanation": "Els corrents induïts tornen a radiar i reforcen el senyal frontal.",
   "options": [
    "són davant del dipol, cada cop més curts, i concentren la recepció",
    "són darrere del dipol, més llargs, i rebutgen el senyal posterior",
    "estan connectats a la línia alternant la fase, com en una logoperiòdica",
    "no influeixen en el diagrama perquè no estan connectats al cable",
    "serveixen per adaptar la impedància del dipol"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això descriu el reflector.",
    "Els directors són elements passius.",
    "Sí que hi influeixen, per acoblament.",
    "Això ho fa el balun."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què passa si s'afegeixen directors a una antena Yagi?",
   "explanation": "A més, l'antena és més llarga.",
   "options": [
    "Més guany i directivitat, però menys amplada de banda",
    "Més guany i també més amplada de banda de treball a la UHF",
    "Menys guany, però més directivitat i un lòbul principal més estret",
    "L'antena passa a ser omnidireccional",
    "Només canvia la impedància del dipol, però el diagrama de radiació es manté igual"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "L'amplada de banda es redueix.",
    "El guany augmenta amb la directivitat.",
    "Al contrari: és més directiva.",
    "El diagrama es fa més estret."
   ]
  },
  {
   "type": "multichoice",
   "text": "Com s'orienta una antena Yagi?",
   "explanation": "El reflector queda a la part posterior.",
   "options": [
    "Amb els directors apuntant cap a l'emissor",
    "Amb el reflector apuntant cap a l'emissor",
    "Perpendicular a la direcció de l'emissor",
    "No cal orientar-la perquè és omnidireccional",
    "Apuntant cap al satèl·lit"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El reflector va a la part posterior.",
    "L'eix de l'antena apunta cap a l'emissor.",
    "És una antena directiva.",
    "La Yagi capta senyals terrestres."
   ]
  },
  {
   "type": "multichoice",
   "text": "Com es rep un senyal amb polarització vertical amb una antena Yagi?",
   "explanation": "Els elements han de quedar verticals.",
   "options": [
    "Girant l'antena 90°",
    "Afegint-hi més directors",
    "Girant-la 180° perquè el reflector quedi davant",
    "Canviant el cable coaxial per un de 50 Ω",
    "Activant el filtre LTE/5G"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Els directors no canvien la polarització.",
    "Això empitjoraria la recepció.",
    "La impedància no té relació amb la polarització.",
    "El filtre no canvia la polarització."
   ]
  },
  {
   "type": "multichoice",
   "text": "El dipol plegat d'una Yagi té una impedància d'uns 300 Ω. Com s'adapta als 75 Ω del coaxial?",
   "explanation": "És un adaptador d'impedàncies.",
   "options": [
    "Amb un balun",
    "Amb un amplificador de màstil",
    "Allargant el cable coaxial",
    "Amb el filtre LTE/5G",
    "Amb un reflector més llarg"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "L'amplificador no fa l'adaptació d'impedàncies.",
    "La longitud del cable no adapta la impedància.",
    "El filtre rebutja freqüències, però no adapta impedàncies.",
    "El reflector no fa l'adaptació d'impedàncies."
   ]
  },
  {
   "type": "multichoice",
   "text": "En una antena logoperiòdica, quins dipols treballen principalment a cada freqüència?",
   "explanation": "La zona activa es desplaça al llarg de l'antena.",
   "options": [
    "Els que fan aproximadament λ/2 a aquella freqüència",
    "Sempre el dipol més llarg, sigui quina sigui la freqüència del senyal",
    "Sempre el dipol més curt de l'antena",
    "Tots els dipols per igual, a qualsevol freqüència de la banda",
    "Només el dipol connectat al coaxial"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El llarg treballa a les freqüències baixes.",
    "El curt treballa a les freqüències altes.",
    "Treballa principalment el grup de dipols ressonants.",
    "Tots els dipols estan connectats a la línia."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin és l'avantatge principal d'una antena logoperiòdica?",
   "explanation": "Pot cobrir tota la UHF, o VHF i UHF alhora.",
   "options": [
    "Gran amplada de banda, amb guany i impedància força constants",
    "Més guany que una Yagi de la mateixa longitud optimitzada per a la banda",
    "És omnidireccional i no cal orientar-la cap al centre emissor de TDT",
    "No cal connectar-la a la presa de terra",
    "Té una obertura de pocs graus, com una parabòlica"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Té menys guany que una Yagi optimitzada.",
    "És una antena directiva.",
    "Totes les antenes s'han de connectar a terra.",
    "Té una directivitat mitjana."
   ]
  },
  {
   "type": "multichoice",
   "text": "Com s'alimenten els dipols d'una antena logoperiòdica?",
   "explanation": "És l'alimentació transposada o creuada.",
   "options": [
    "Tots connectats a la línia, alternant la fase",
    "Només el dipol central; la resta fan de reflector i directors, com en una Yagi",
    "Només el dipol més llarg, que fa de reflector",
    "Cada dipol té el seu propi cable coaxial fins a la capçalera",
    "Cap: el senyal es capta per inducció en el boom"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "No s'ha d'interpretar com una Yagi.",
    "Tots els dipols estan connectats.",
    "Tots comparteixen la línia d'alimentació.",
    "Tots els dipols estan connectats a la línia."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina característica correspon a una antena de panell?",
   "explanation": "Gràcies a la pantalla reflectora.",
   "options": [
    "Bona relació F/B i obertura horitzontal més àmplia que una Yagi",
    "És omnidireccional en el pla horitzontal",
    "Té un angle d'obertura de pocs graus, com una parabòlica de satèl·lit",
    "Està formada per dipols de longitud i separació creixents segons un factor τ",
    "Només té un dipol, sense reflector"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això correspon al dipol circular.",
    "Això correspon a la parabòlica.",
    "Això correspon a la logoperiòdica.",
    "Té una agrupació de dipols davant d'una pantalla reflectora."
   ]
  },
  {
   "type": "multichoice",
   "text": "Per què el dipol circular és l'antena de FM més habitual en les ICT?",
   "explanation": "Capta emissores de diferents direccions sense orientar-lo.",
   "options": [
    "Perquè és aproximadament omnidireccional en el pla horitzontal",
    "Perquè té el guany més alt de totes les antenes de FM del mercat",
    "Perquè treballa a la banda III de VHF",
    "Perquè només rep emissores amb polarització vertical, que és la més habitual",
    "Perquè té una relació F/B molt elevada"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Té poc guany; si cal guany, s'usa una Yagi FM.",
    "La FM és a la banda II.",
    "No és el motiu.",
    "Una antena omnidireccional té una F/B baixa."
   ]
  },
  {
   "type": "multichoice",
   "text": "Com és el diagrama de recepció d'un dipol recte?",
   "explanation": "Rep millor perpendicularment als braços.",
   "options": [
    "Bidireccional",
    "Omnidireccional en totes les direccions de l'espai",
    "Molt directiu, amb un feix de pocs graus",
    "Rep millor en la direcció dels braços",
    "Unidireccional, només per davant"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Té mínims en la direcció dels braços.",
    "Això correspon a la parabòlica.",
    "En la direcció dels braços hi ha un mínim.",
    "Rep per les dues cares."
   ]
  },
  {
   "type": "multichoice",
   "text": "A Europa, la ràdio digital DAB/DAB+ s'emet majoritàriament amb polarització...",
   "explanation": "Per això l'antena s'instal·la amb els elements verticals.",
   "options": [
    "vertical",
    "horitzontal",
    "circular",
    "mixta",
    "el·líptica"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "És majoritàriament vertical.",
    "No.",
    "La polarització mixta pot aparèixer en FM.",
    "No."
   ]
  },
  {
   "type": "multichoice",
   "text": "Un poble és a 40 km del centre emissor de TDT, el senyal és feble i tots els canals arriben d'una sola direcció. Quina antena és més adequada?",
   "explanation": "El guany i la selectivitat són prioritaris.",
   "options": [
    "Una Yagi d'alt guany",
    "Una antena de panell",
    "Un dipol circular",
    "Una logoperiòdica de VHF i UHF",
    "Un dipol recte"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "És més adequada amb senyal fort o diverses direccions properes.",
    "És una antena per a FM.",
    "Té menys guany que una Yagi optimitzada per a la banda.",
    "No és una antena per a la TDT."
   ]
  },
  {
   "type": "multichoice",
   "text": "Un edifici és a prop del centre emissor, hi ha reflexions i dos repetidors en direccions properes. Quina antena és més adequada?",
   "explanation": "Té una obertura àmplia i una bona relació F/B.",
   "options": [
    "Una antena de panell",
    "Una Yagi de molts elements",
    "Una antena parabòlica",
    "Un dipol recte",
    "Un dipol circular de FM"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La seva obertura estreta obligaria a triar un sol repetidor.",
    "És per a la recepció per satèl·lit.",
    "No és una antena per a la TDT.",
    "És una antena per a FM."
   ]
  },
  {
   "type": "multichoice",
   "text": "Es volen captar senyals de VHF i d'UHF que arriben de la mateixa direcció amb una sola antena. Quina és la més adequada?",
   "explanation": "Té una amplada de banda molt àmplia.",
   "options": [
    "Una logoperiòdica",
    "Una Yagi d'UHF",
    "Un dipol circular",
    "Una parabòlica offset",
    "Una antena de panell d'UHF"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Només cobreix la UHF.",
    "És una antena per a FM.",
    "És per a la recepció per satèl·lit.",
    "Només cobreix la UHF."
   ]
  },
  {
   "type": "matching",
   "text": "Relaciona cada antena amb el seu punt fort.",
   "explanation": "La Yagi destaca pel guany i la selectivitat; la logoperiòdica, per l'amplada de banda; el panell, per la relació F/B i l'obertura àmplia; el dipol circular rep de totes les direccions, i la parabòlica té el guany més elevat (30 – 40 dBi).",
   "pairs": [
    [
     "Yagi",
     "Guany elevat i bona selectivitat"
    ],
    [
     "Logoperiòdica",
     "Comportament uniforme en una banda molt àmplia"
    ],
    [
     "Panell",
     "Bona relació F/B i obertura àmplia"
    ],
    [
     "Dipol circular",
     "Rep emissores de totes les direccions"
    ],
    [
     "Parabòlica",
     "Guany molt elevat (30 – 40 dBi)"
    ]
   ],
   "distractors": []
  },
  {
   "type": "multichoice",
   "text": "A quina altura aproximada sobre l'equador es troben els satèl·lits geoestacionaris?",
   "explanation": "Per això ocupen una posició aparentment fixa en el cel.",
   "options": [
    "Uns 36.000 km",
    "Uns 800 km",
    "Uns 3.600 km",
    "Uns 360.000 km",
    "Uns 20.000 km"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "És l'altura típica d'una òrbita baixa.",
    "No.",
    "És aproximadament la distància a la Lluna.",
    "És l'altura aproximada dels satèl·lits de GPS."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quins són els satèl·lits més habituals des de la península i la seva posició orbital?",
   "explanation": "Són els més habituals des de la península.",
   "options": [
    "Hispasat (30° O) i Astra (19,2° E)",
    "Hispasat (19,2° E) i Astra (30° O)",
    "Hispasat (30° E) i Astra (19,2° O)",
    "Hispasat (13° E) i Astra (28,2° E)",
    "Hispasat (19,2° O) i Astra (30° E)"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Les posicions estan intercanviades.",
    "Hispasat és a l'oest i Astra a l'est.",
    "No són les posicions d'aquests satèl·lits.",
    "No són les posicions d'aquests satèl·lits."
   ]
  },
  {
   "type": "matching",
   "text": "Relaciona cada part del sistema de recepció per satèl·lit amb la seva funció.",
   "explanation": "El reflector concentra les ones al focus, on l'alimentador (botzina) capta l'energia. L'LNB l'amplifica amb poc soroll i la converteix a FI (950 – 2150 MHz). En els equips domèstics, alimentador i LNB formen una sola unitat: l'LNBF.",
   "pairs": [
    [
     "Reflector parabòlic",
     "Recull les ones i les concentra en el focus"
    ],
    [
     "Alimentador (feedhorn)",
     "Botzina situada al focus que capta l'energia concentrada"
    ],
    [
     "LNB",
     "Amplifica amb poc soroll i converteix el senyal a FI"
    ],
    [
     "LNBF",
     "Alimentador i LNB en una sola unitat"
    ]
   ],
   "distractors": []
  },
  {
   "type": "multichoice",
   "text": "Per què l'LNB converteix el senyal a una freqüència intermèdia de 950 – 2150 MHz?",
   "explanation": "A la FI el senyal es pot transportar pel coaxial.",
   "options": [
    "Perquè a uns 11 GHz les pèrdues del coaxial serien enormes",
    "Perquè els televisors i els receptors domèstics només admeten senyals de la banda UHF",
    "Per poder canviar la polarització del senyal que arriba del satèl·lit",
    "Per augmentar el guany del reflector parabòlic i reduir el soroll del senyal",
    "Perquè la normativa obliga a distribuir per sota d'1 GHz"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "No és el motiu.",
    "La polarització se selecciona amb la tensió.",
    "El guany del reflector no depèn de la FI.",
    "No és el motiu."
   ]
  },
  {
   "type": "multichoice",
   "text": "Un receptor alimenta l'LNB universal amb 18 V pel coaxial. Quina polarització selecciona?",
   "explanation": "13 V → vertical; 18 V → horitzontal.",
   "options": [
    "Horitzontal",
    "Vertical",
    "Cap: la tensió selecciona la banda alta",
    "Cap: la tensió selecciona la banda baixa",
    "Circular"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La vertical se selecciona amb 13 V.",
    "La banda se selecciona amb el to de 22 kHz.",
    "La banda se selecciona amb el to de 22 kHz.",
    "L'LNB universal treballa amb polarització H i V."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què selecciona el to de 22 kHz en un LNB universal?",
   "explanation": "Sense to → banda baixa (OL de 9,75 GHz).",
   "options": [
    "La banda alta (OL de 10,6 GHz)",
    "La banda baixa (OL de 9,75 GHz)",
    "La polarització vertical",
    "La polarització horitzontal",
    "L'alimentació de l'LNB a 13 V"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La banda baixa és sense to.",
    "La polarització se selecciona amb la tensió.",
    "La polarització se selecciona amb la tensió.",
    "La tensió i el to són senyals independents."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin tipus d'LNB s'utilitza amb multicommutadors en instal·lacions col·lectives com les ICT?",
   "explanation": "Té 4 sortides fixes (VL, VH, HL, HH).",
   "options": [
    "Quattro",
    "Single",
    "Twin",
    "Octo",
    "Quad"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Només té una sortida per a un receptor.",
    "Té 2 sortides independents per a 2 receptors.",
    "Té 8 sortides independents per a receptors, no sortides fixes.",
    "Té 4 sortides independents per a receptors, no sortides fixes per banda i polarització."
   ]
  },
  {
   "type": "matching",
   "text": "Relaciona cada tipus d'LNB amb la seva característica.",
   "explanation": "El single i el twin donen sortides independents per a receptors; el Quattro té quatre sortides fixes (VL, VH, HL, HH) per als multicommutadors de les ICT, i l'SCR/dCSS dona servei a diversos receptors per un sol cable.",
   "pairs": [
    [
     "Single",
     "Una sortida per a un receptor"
    ],
    [
     "Twin",
     "Dues sortides independents"
    ],
    [
     "Quattro",
     "Quatre sortides fixes (VL, VH, HL, HH)"
    ],
    [
     "SCR / dCSS (Unicable)",
     "Diversos receptors per un sol cable"
    ]
   ],
   "distractors": []
  },
  {
   "type": "multichoice",
   "text": "Per què una parabòlica offset sembla més vertical del que indica l'elevació real?",
   "explanation": "El reflector és un tall lateral del paraboloide.",
   "options": [
    "Perquè el focus està desplaçat i té un angle d'offset de 20° a 25°",
    "Perquè l'LNB està situat al centre, just davant del reflector parabòlic",
    "Perquè utilitza un subreflector, com les Cassegrain",
    "Perquè s'orienta cap a un satèl·lit més baix que Hispasat",
    "Perquè l'elevació es mesura sempre des de la vertical i no des de l'horitzó"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això correspon a la parabòlica de focus primari.",
    "Això correspon a les Cassegrain i Gregorianes.",
    "És una característica del disseny offset.",
    "L'elevació és l'angle sobre l'horitzó."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina afirmació correspon a una parabòlica de focus primari (centrada)?",
   "explanation": "L'LNB està davant del reflector.",
   "options": [
    "L'LNB és al centre, fa una mica d'ombra i s'usa en diàmetres grans",
    "L'LNB no fa ombra a la superfície útil del reflector",
    "Utilitza un subreflector, com les antenes de les estacions professionals",
    "És la més habitual en les instal·lacions domèstiques",
    "Té diversos focus per poder rebre diversos satèl·lits alhora amb un sol reflector"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això correspon a l'offset.",
    "Això correspon a les Cassegrain i Gregorianes.",
    "La més habitual és l'offset.",
    "Això correspon a l'antena tòrica."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quins paràmetres cal ajustar per orientar una antena parabòlica?",
   "explanation": "L'ajust fi es fa amb el mesurador de camp.",
   "options": [
    "Azimut, elevació i polarització (skew)",
    "Azimut, elevació i freqüència intermèdia",
    "Elevació, impedància i guany de l'LNB",
    "Només l'azimut i la tensió d'alimentació de l'LNB",
    "Azimut, angle d'offset i diàmetre del reflector"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La FI no és un paràmetre d'orientació.",
    "No són paràmetres d'orientació.",
    "Cal també l'elevació i la polarització.",
    "L'offset i el diàmetre són característiques de l'antena."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és l'azimut d'una antena parabòlica?",
   "explanation": "Es complementa amb l'elevació i la polarització.",
   "options": [
    "L'angle horitzontal respecte del nord",
    "L'angle vertical sobre l'horitzó",
    "El gir de l'LNB sobre el seu eix",
    "L'angle d'offset del reflector",
    "L'angle respecte de l'equador"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és l'elevació.",
    "Això és la polarització (skew).",
    "No.",
    "No."
   ]
  },
  {
   "type": "multichoice",
   "text": "Amb el mesurador de camp, l'ajust fi de la parabòlica es fa buscant...",
   "explanation": "No n'hi ha prou amb el màxim nivell.",
   "options": [
    "la màxima qualitat del senyal (MER/BER)",
    "només el màxim nivell de senyal",
    "la mínima tensió d'alimentació de l'LNB",
    "el mínim nivell de soroll del cable coaxial",
    "la màxima freqüència intermèdia"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El nivell sol no garanteix una bona recepció.",
    "No té relació amb l'orientació.",
    "No és el criteri d'ajust.",
    "La FI depèn del senyal i de l'OL, no de l'orientació."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què passa si s'augmenta el diàmetre de la parabòlica?",
   "explanation": "El guany augmenta amb el diàmetre.",
   "options": [
    "Més guany, feix més estret i cal més precisió",
    "Més guany, feix més ample i cal menys precisió",
    "Menys guany, però l'orientació és més fàcil",
    "El guany no varia, només millora la relació F/B de l'antena",
    "Més guany, però augmenta la FI de sortida de l'LNB"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El feix es fa més estret.",
    "El guany augmenta.",
    "El guany augmenta amb el diàmetre.",
    "La FI no depèn del diàmetre."
   ]
  },
  {
   "type": "multichoice",
   "text": "Com es poden rebre diversos satèl·lits amb una sola antena?",
   "explanation": "El multifocus porta diversos LNB; la tòrica té diversos focus.",
   "options": [
    "Amb un suport multifocus o amb una antena tòrica",
    "Amb un LNB Quattro i un multicommutador",
    "Girant la polarització (skew) de l'LNB",
    "Alimentant l'LNB a 18 V",
    "Activant el to de 22 kHz"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El Quattro dona les 4 combinacions d'un sol satèl·lit.",
    "El skew alinea la polarització, no canvia de satèl·lit.",
    "La tensió selecciona la polarització.",
    "El to selecciona la banda."
   ]
  },
  {
   "type": "calculated",
   "text": "Una antena té un guany de {g} dBd. Quin és el seu guany en dBi?",
   "explanation": "dBi = dBd + 2,15 = {g} + 2,15 = {=round({g}+2.15,2)} dBi.",
   "formula": "{g}+2.15",
   "tolerance": 0.05,
   "relative": false,
   "decimals": 2,
   "vars": [
    {
     "name": "g",
     "min": 5.0,
     "max": 15.0,
     "decimals": 1
    }
   ],
   "unit": "dBi"
  },
  {
   "type": "calculated",
   "text": "Un fabricant indica que la seva antena té un guany de {g} dBi. Quin és el guany en dBd?",
   "explanation": "dBd = dBi − 2,15 = {g} − 2,15 = {=round({g}-2.15,2)} dBd.",
   "formula": "{g}-2.15",
   "tolerance": 0.05,
   "relative": false,
   "decimals": 2,
   "vars": [
    {
     "name": "g",
     "min": 7.0,
     "max": 17.0,
     "decimals": 1
    }
   ],
   "unit": "dBd"
  },
  {
   "type": "calculated",
   "text": "Un senyal de {f} GHz es rep a la banda baixa d'un LNB universal (OL = 9,75 GHz). Quina és la freqüència intermèdia de sortida en MHz?",
   "explanation": "FI = f(senyal) − f(OL) = {f} − 9,75 = {=round({f}-9.75,2)} GHz = {=round(({f}-9.75)*1000,0)} MHz.",
   "formula": "({f}-9.75)*1000",
   "tolerance": 1.0,
   "relative": false,
   "decimals": 0,
   "vars": [
    {
     "name": "f",
     "min": 10.7,
     "max": 11.7,
     "decimals": 2
    }
   ],
   "unit": "MHz"
  },
  {
   "type": "calculated",
   "text": "Un senyal de {f} GHz es rep a la banda alta d'un LNB universal (OL = 10,6 GHz). Quina és la freqüència intermèdia de sortida en MHz?",
   "explanation": "FI = f(senyal) − f(OL) = {f} − 10,6 = {=round({f}-10.6,2)} GHz = {=round(({f}-10.6)*1000,0)} MHz.",
   "formula": "({f}-10.6)*1000",
   "tolerance": 1.0,
   "relative": false,
   "decimals": 0,
   "vars": [
    {
     "name": "f",
     "min": 11.7,
     "max": 12.75,
     "decimals": 2
    }
   ],
   "unit": "MHz"
  },
  {
   "type": "calculated",
   "text": "El mesurador de camp mostra un transponedor a una FI de {fi} MHz. L'LNB treballa a la banda baixa (OL = 9,75 GHz). Quina és la freqüència del senyal del satèl·lit en GHz? (Fes servir 3 decimals.)",
   "explanation": "f(senyal) = FI + f(OL) = {fi}/1000 + 9,75 = {=round(9.75+{fi}/1000,3)} GHz.",
   "formula": "9.75+{fi}/1000",
   "tolerance": 0.005,
   "relative": false,
   "decimals": 3,
   "vars": [
    {
     "name": "fi",
     "min": 950.0,
     "max": 1950.0,
     "decimals": 0
    }
   ],
   "unit": "GHz"
  },
  {
   "type": "calculated",
   "text": "El mesurador de camp mostra un transponedor a una FI de {fi} MHz. L'LNB treballa a la banda alta (OL = 10,6 GHz). Quina és la freqüència del senyal del satèl·lit en GHz? (Fes servir 3 decimals.)",
   "explanation": "f(senyal) = FI + f(OL) = {fi}/1000 + 10,6 = {=round(10.6+{fi}/1000,3)} GHz.",
   "formula": "10.6+{fi}/1000",
   "tolerance": 0.005,
   "relative": false,
   "decimals": 3,
   "vars": [
    {
     "name": "fi",
     "min": 1100.0,
     "max": 2150.0,
     "decimals": 0
    }
   ],
   "unit": "GHz"
  }
 ]
};
