// Generat amb tools/moodle2quiz.py — no editar a mà.
window.QUIZ = {
 "id": "t1-1-normativa",
 "title": "1.1 Definició de les ICT i normativa",
 "questions": [
  {
   "type": "matching",
   "text": "Relaciona cada document de la ICT amb la seva descripció.",
   "explanation": "Cada document correspon a una fase: el projecte tècnic defineix la ICT abans de construir-la; l'acta de replanteig es fa a l'inici de l'obra; el butlletí d'instal·lació el signa l'empresa instal·ladora en acabar; el protocol de proves recull les mesures de la instal·lació executada; el certificat de fi d'obra el signa el director d'obra; i el manual d'usuari s'adreça als propietaris. La descripció sobrant (amidaments, unitats d'obra i cost) és el pressupost, que és una part del projecte tècnic, no un document independent.",
   "pairs": [
    [
     "Projecte tècnic",
     "Defineix els serveis, les xarxes i les característiques tècniques de la ICT."
    ],
    [
     "Acta de replanteig",
     "A l'inici de l'obra, confirma la validesa del projecte o n'indica les actualitzacions."
    ],
    [
     "Butlletí d'instal·lació",
     "L'empresa instal·ladora acredita que la instal·lació s'ajusta al projecte."
    ],
    [
     "Protocol de proves",
     "Recull les comprovacions i les mesures fetes a la instal·lació executada."
    ],
    [
     "Certificat de fi d'obra",
     "El director d'obra acredita que la instal·lació s'ajusta al projecte."
    ],
    [
     "Manual d'usuari",
     "Descriu els serveis de la ICT i les recomanacions d'ús i manteniment."
    ]
   ],
   "distractors": [
    "Recull els amidaments, les unitats d'obra i el cost de la instal·lació."
   ]
  },
  {
   "type": "matching",
   "text": "Relaciona cada part del projecte tècnic d'una ICT amb el seu contingut.",
   "explanation": "El projecte tècnic té quatre parts: la memòria (què es fa i per què: descripció de l'edifici, serveis, dimensionament i càlculs), els plànols (on va cada cosa: canalitzacions, recintes i esquemes), el plec de condicions (com ha de ser: materials, equips, muntatge i normativa) i el pressupost (quant costa: amidaments, unitats d'obra i preus). Les mesures de la instal·lació acabada no formen part del projecte: pertanyen al protocol de proves.",
   "pairs": [
    [
     "Memòria",
     "Descripció de l'edifici, serveis previstos, dimensionament de les xarxes i càlculs."
    ],
    [
     "Plànols",
     "Situació de l'edifici, traçat de canalitzacions, ubicació de recintes i esquemes."
    ],
    [
     "Plec de condicions",
     "Característiques dels materials i equips, condicions de muntatge i requisits normatius."
    ],
    [
     "Pressupost",
     "Amidaments, unitats d'obra i preus."
    ]
   ],
   "distractors": [
    "Resultats de les mesures de senyal i d'atenuació de la instal·lació acabada."
   ]
  },
  {
   "type": "multichoice",
   "text": "A quins espais d'un edifici permet accedir als serveis de telecomunicacions la ICT?",
   "explanation": "La ICT porta els serveis de telecomunicacions des del punt d'entrada a l'edifici fins a tots els espais: habitatges, locals comercials i oficines, i també les zones comunes. Les opcions que exclouen algun d'aquests espais són incorrectes.",
   "options": [
    "Als habitatges, als locals i a les zones comunes de l'edifici.",
    "Als habitatges, però mai als locals comercials ni a les zones comunes.",
    "A les zones comunes, però no a l'interior dels habitatges ni dels locals.",
    "Als locals comercials, però no als habitatges ni a les zones comunes.",
    "Als habitatges i als locals, però mai a les zones comunes de l'edifici."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "El reglament ICT2 s'aplica a...?",
   "explanation": "L'àmbit d'aplicació són els edificis, d'ús residencial o no, acollits al règim de propietat horitzontal (i també els arrendats per més d'un any, llevat dels d'un sol habitatge). No depèn del nombre d'habitatges ni de PAU, i les cases unifamiliars d'un sol habitatge en queden excloses.",
   "options": [
    "A tots els edificis d'ús residencial o no, que estiguin acollits al règim de propietat horitzontal.",
    "A tots els edificis de nova construcció, incloses les cases unifamiliars aïllades i adossades.",
    "Només als edificis d'ús residencial de més de 20 habitatges, siguin de nova construcció o existents.",
    "Només als edificis d'ús no residencial, com oficines, locals comercials i naus industrials.",
    "A qualsevol edifici que tingui més de tres punts d'accés d'usuari (PAU), sigui quin sigui el règim."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quin avantatge té que les canalitzacions, els recintes i les infraestructures de la ICT siguin compartits?",
   "explanation": "Compartir canalitzacions, recintes i xarxes evita que cada operador hagi de fer les seves pròpies obres i instal·lacions, i redueix el cablejat duplicat a l'edifici. No dona dret a cobrar lloguers, no obliga a un únic operador, no elimina el projecte i no afecta les quotes que paguen els usuaris.",
   "options": [
    "Es redueixen les obres i s'eviten duplicacions d'instal·lacions a l'edifici.",
    "Cada operador pot cobrar un lloguer a la comunitat per l'ús de les canalitzacions.",
    "Es garanteix que tots els habitatges contractin els serveis del mateix operador.",
    "Es pot prescindir del projecte tècnic, perquè la instal·lació ja és comuna.",
    "Els usuaris deixen de pagar quotes als operadors pels serveis contractats."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Es construeix un edifici de 8 habitatges que pertany a un únic propietari i que es llogarà amb contractes de 3 anys. Ha de disposar d'ICT?",
   "explanation": "La normativa (RDL 1/1998) inclou, a més dels edificis en propietat horitzontal, els edificis que, totalment o parcialment, s'arrenden per més d'un any, excepte si tenen un sol habitatge. Un edifici de 8 habitatges llogats amb contractes de 3 anys, per tant, ha de tenir ICT encara que tingui un únic propietari.",
   "options": [
    "Sí, perquè els edificis arrendats per més d'un any amb més d'un habitatge hi estan obligats.",
    "No, perquè l'edifici no està acollit al règim de propietat horitzontal.",
    "No, perquè els edificis de lloguer queden fora de l'àmbit de la normativa ICT.",
    "Només si algun dels inquilins ho demana per escrit a la propietat.",
    "Només si l'edifici és d'ús no residencial, com ara un bloc d'oficines."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "De quin any és la primera normativa que va regular les infraestructures comunes de telecomunicacions als edificis?",
   "explanation": "El Reial decret llei 1/1998, de 27 de febrer, sobre infraestructures comunes als edificis per a l'accés als serveis de telecomunicació, és la primera norma. Després van venir els reglaments que la desenvolupen: RD 279/1999, RD 401/2003 (ICT1) i RD 346/2011 (ICT2, el vigent).",
   "options": [
    "1998",
    "1987",
    "1999",
    "2003",
    "2011"
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "En quin cas NO és aplicable la normativa ICT2?",
   "explanation": "Un habitatge unifamiliar amb un únic habitatge no està en règim de propietat horitzontal ni té espais compartits, per això queda fora de l'àmbit de la ICT. Totes les altres opcions (propietat horitzontal, lloguer per més d'un any, obra nova residencial i rehabilitació integral) sí que hi estan obligades.",
   "options": [
    "Edificis unifamiliars amb un únic habitatge.",
    "Edificis acollits al règim de propietat horitzontal.",
    "Edificis en règim de lloguer per més d'un any.",
    "Edificis residencials de nova construcció.",
    "Rehabilitació integral d'un edifici de pisos en propietat horitzontal."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "On s'integra la documentació de la ICT que la propietat ha de rebre, conservar i transmetre?",
   "explanation": "La documentació de la ICT (projecte, butlletí, protocol de proves, manual d'usuari...) s'incorpora al Llibre de l'edifici, que la propietat ha de conservar i lliurar als nous propietaris. Així es garanteix que sempre se sàpiga com és la instal·lació per mantenir-la o ampliar-la.",
   "options": [
    "Al Llibre de l'edifici.",
    "Al Registre de la Propietat.",
    "A l'expedient municipal de la llicència d'obres.",
    "A l'arxiu de l'empresa instal·ladora.",
    "Al contracte amb l'operador de telecomunicacions."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Abans de començar les obres d'una ICT, amb quina finalitat es fa la consulta als operadors?",
   "explanation": "Abans de començar l'obra es consulta els operadors perquè indiquin si tenen intenció de donar servei a l'edifici i des d'on hi arribaran. Amb aquesta informació es concreten les xarxes que s'instal·laran i la ubicació de l'arqueta d'entrada. L'operador no redacta el projecte, no fa les proves ni tramita la llicència d'obres.",
   "options": [
    "Per concretar les xarxes que s'instal·laran i la ubicació de l'arqueta d'entrada.",
    "Per demanar a l'operador que redacti i signi el projecte tècnic de la ICT.",
    "Per acordar el preu de les quotes mensuals que pagarà cada propietari.",
    "Per encarregar a l'operador el protocol de proves de la instal·lació.",
    "Per obtenir, a través de l'operador, la llicència municipal d'obres."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Per què el reglament ICT2 ha tingut diverses modificacions des que es va aprovar?",
   "explanation": "El RD 346/2011 s'ha modificat per adaptar-lo a l'evolució tecnològica i, sobretot, als canvis en l'ús de l'espectre radioelèctric: el primer i el segon dividend digital van alliberar bandes de freqüència que abans feia servir la televisió (per a la telefonia mòbil), i la ICT s'hi ha hagut d'adaptar. És una norma estatal, no autonòmica, i no té cap obligació de renovació periòdica.",
   "options": [
    "Per adaptar la ICT als canvis tecnològics i a la nova distribució de freqüències.",
    "Perquè cada comunitat autònoma ha d'aprovar-ne la seva pròpia versió.",
    "Perquè la llei obliga a renovar la normativa ICT cada cinc anys.",
    "Per reduir progressivament els serveis inclosos a la ICT fins a eliminar-la.",
    "Per traspassar als operadors la responsabilitat de projectar la ICT dels edificis."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quin d'aquests és un dels motius pels quals les ICT són necessàries en un edifici?",
   "explanation": "La ICT es dissenya amb capacitat de reserva (tubs i espais lliures als recintes i registres) perquè l'edifici pugui incorporar noves tecnologies i operadors sense obres importants. Precisament evita que cada habitatge posi la seva antena, no té res a veure amb l'enllumenat i no substitueix les xarxes dels operadors ni n'elimina el manteniment.",
   "options": [
    "Preparar l'edifici per a futures tecnologies, facilitant-ne ampliacions o adaptacions.",
    "Permetre que cada habitatge instal·li la seva pròpia antena a la coberta de l'edifici.",
    "Reduir el consum elèctric de les zones comunes gràcies a un enllumenat més eficient.",
    "Substituir les xarxes dels operadors per una xarxa pública gestionada per l'ajuntament.",
    "Eliminar la necessitat de mantenir les instal·lacions de telecomunicacions de l'edifici."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Per quins mitjans de transmissió es proporciona el servei de banda ampla en una ICT?",
   "explanation": "L'ICT2 preveu tres xarxes de cables per al servei de banda ampla: fibra òptica, cable coaxial i parell trenat. El PLC (línia elèctrica), el Wi-Fi, el satèl·lit i les microones no són mitjans de la ICT.",
   "options": [
    "Fibra òptica, cable coaxial i parell trenat.",
    "Fibra òptica, cable coaxial i línia elèctrica (PLC).",
    "Parell trenat, cable coaxial i enllaç de ràdio Wi-Fi.",
    "Fibra òptica, parell trenat i enllaç per satèl·lit.",
    "Cable coaxial, parell trenat i enllaç de microones."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quan s'elabora l'acta de replanteig d'una ICT i amb quina finalitat?",
   "explanation": "L'acta de replanteig es fa i se signa a l'inici de l'obra: el projectista i la propietat comproven que el projecte continua sent vàlid (per exemple, després de tornar a consultar els operadors) o hi indiquen les actualitzacions necessàries. L'acreditació final correspon al butlletí i al certificat de fi d'obra, i les mesures, al protocol de proves.",
   "options": [
    "A l'inici de l'obra, per confirmar la validesa del projecte o indicar-ne les actualitzacions.",
    "En acabar l'obra, per acreditar que la instal·lació executada s'ajusta al projecte tècnic.",
    "Abans de redactar el projecte, per triar l'empresa instal·ladora que executarà la ICT.",
    "Després de les proves, per recollir les mesures de senyal obtingudes a cada presa.",
    "Quan es ven un habitatge, per transmetre la documentació de la ICT al nou propietari."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Què defineix el projecte tècnic d'una ICT?",
   "explanation": "El projecte tècnic és el document que defineix la ICT: quins serveis tindrà, quines xarxes i elements, com es dimensionen i quines característiques tècniques han de complir. Les altres opcions descriuen el protocol de proves, el manual d'usuari, l'acta de replanteig i el butlletí d'instal·lació.",
   "options": [
    "Els serveis, les xarxes, els elements i les característiques tècniques de la ICT.",
    "Els resultats de les mesures fetes un cop acabada la instal·lació de la ICT.",
    "Les recomanacions d'ús i de manteniment adreçades als propietaris dels habitatges.",
    "La confirmació de la validesa del projecte i la consulta als operadors a l'inici de l'obra.",
    "L'acreditació, per part de l'empresa instal·ladora, que la instal·lació s'ajusta al projecte."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quina documentació tècnica cal elaborar segons la normativa ICT2?",
   "explanation": "La normativa ICT2 estableix una seqüència documental completa: projecte tècnic (abans de l'obra), acta de replanteig (a l'inici), butlletí d'instal·lació i protocol de proves (en acabar) i manual d'usuari per als propietaris; quan hi ha direcció d'obra, també el certificat de fi d'obra. Cap d'aquests documents és opcional ni es pot substituir per una factura.",
   "options": [
    "Projecte tècnic, acta de replanteig, butlletí d'instal·lació, protocol de proves i manual d'usuari.",
    "Només el projecte tècnic, ja que la resta de documents són opcionals i depenen del promotor.",
    "El butlletí d'instal·lació i el certificat de fi d'obra, tots dos signats per l'empresa instal·ladora.",
    "El projecte tècnic i un estudi bàsic de seguretat i salut independent, obligatori en tota ICT.",
    "Cap document reglamentari: n'hi ha prou amb la factura de l'instal·lador i la garantia dels equips."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Què és el certificat de final d'obra en una ICT?",
   "explanation": "El certificat de fi d'obra l'emet el director d'obra i acredita que la instal·lació executada s'ajusta al projecte tècnic. No el signa l'empresa instal·ladora (ella signa el butlletí, que no queda substituït), i no és el protocol de proves, ni el manual d'usuari, ni el pressupost.",
   "options": [
    "Document que emet el director d'obra per acreditar que la instal·lació s'ajusta al projecte.",
    "Document que emet sempre l'empresa instal·ladora i que substitueix el butlletí d'instal·lació.",
    "Document que recull les mesures de senyal i d'atenuació obtingudes en la instal·lació acabada.",
    "Document que descriu els serveis de la ICT i les recomanacions d'ús adreçades als propietaris.",
    "Document que detalla els amidaments, les unitats d'obra i el cost total de la instal·lació."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Què és la banda ampla en el context d'una ICT?",
   "explanation": "A la ICT, la banda ampla és el servei d'accés a Internet d'alta velocitat, que arriba a cada habitatge a través de les xarxes de fibra òptica, cable coaxial i parell trenat. La telefonia bàsica, la radiodifusió terrestre i per satèl·lit són serveis diferents, i la cobertura mòbil no forma part de la ICT.",
   "options": [
    "L'accés a Internet d'alta velocitat per fibra òptica, cable coaxial o parell trenat.",
    "El servei de telefonia bàsica que arriba a cada habitatge per parells de coure.",
    "La distribució dels senyals de televisió digital terrestre i de ràdio FM a l'edifici.",
    "La recepció de la televisió per satèl·lit mitjançant una antena parabòlica comuna.",
    "La cobertura de telefonia mòbil a l'interior de l'edifici mitjançant repetidors."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Què és la memòria tècnica en el context d'una ICT?",
   "explanation": "La memòria és la part del projecte que explica i justifica la instal·lació: descriu l'edifici, els serveis previstos, el dimensionament de les xarxes i els càlculs. Les característiques dels materials són al plec de condicions, el traçat al plànols i els preus al pressupost.",
   "options": [
    "Part del projecte que descriu l'edifici, els serveis previstos i el dimensionament de les xarxes.",
    "Part del projecte que recull les característiques dels materials i les condicions de muntatge.",
    "Part del projecte que mostra el traçat de les canalitzacions i la ubicació dels recintes.",
    "Part del projecte que recull els amidaments, les unitats d'obra i els preus de la instal·lació.",
    "Document independent del projecte que redacta l'empresa instal·ladora en acabar l'obra."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Les infraestructures comunes de telecomunicacions són...?",
   "explanation": "Una ICT és el conjunt d'equips, cables i mitjans tècnics que porten els serveis de telecomunicacions (ràdio i televisió, telefonia i banda ampla) des de l'entrada de l'edifici fins a cada usuari. Seguretat, electricitat i climatització són altres instal·lacions de l'edifici, i la ICT és comuna, no una xarxa privada de cada operador.",
   "options": [
    "El conjunt d'equips, cables i mitjans tècnics que transporten els serveis de comunicacions dins dels edificis.",
    "El conjunt d'equips de control d'accés, videovigilància i alarmes que protegeixen les zones comunes de l'edifici.",
    "El conjunt de quadres, línies i mecanismes que distribueixen l'energia elèctrica i l'enllumenat a l'edifici.",
    "El conjunt d'equips i conductes que garanteixen la calefacció, la ventilació i la climatització de l'edifici.",
    "La xarxa privada que cada operador instal·la per separat fins a l'habitatge de cadascun dels seus clients."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quina adaptació de la ICT va introduir el RD 391/2019, conegut com a segon dividend digital?",
   "explanation": "El RD 391/2019 aprova el pla per alliberar la banda de 700 MHz (segon dividend digital), que passa a la telefonia mòbil 5G. La televisió digital terrestre queda limitada a la banda de 470–694 MHz, i la ICT s'adapta a aquest nou repartiment de freqüències (canals 21 a 48). La fibra òptica ja era a l'ICT2 des del 2011.",
   "options": [
    "L'adaptació de la banda de freqüències que utilitza la televisió digital terrestre.",
    "L'anul·lació de fragments relacionats amb el projecte tècnic i la seva verificació.",
    "L'emissió de la TDT amb el sistema DVB-T2 i la modulació 256-QAM per a UHD.",
    "L'actualització dels requisits de fibra òptica i de reacció al foc dels cables.",
    "La incorporació per primera vegada de la fibra òptica a la xarxa de la ICT."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Qui emet el butlletí d'instal·lació de telecomunicacions d'una ICT?",
   "explanation": "El butlletí d'instal·lació l'emet l'empresa instal·ladora de telecomunicacions habilitada que ha executat l'obra, i amb ell declara que la instal·lació s'ajusta al projecte. El projectista signa el projecte, el director d'obra el certificat de fi d'obra, i ni els operadors ni l'Administració emeten el butlletí.",
   "options": [
    "L'empresa instal·ladora habilitada que ha executat la instal·lació.",
    "El professional que ha redactat i signat el projecte tècnic de la ICT.",
    "El director d'obra, però només en els edificis de més de 20 habitatges.",
    "L'operador de telecomunicacions que primer dona servei a l'edifici.",
    "L'Administració competent, després d'inspeccionar la instal·lació acabada."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Qui és responsable de dissenyar i signar el projecte tècnic d'una ICT?",
   "explanation": "El projecte tècnic l'ha de redactar i signar un tècnic competent en telecomunicacions: enginyer o enginyer tècnic de telecomunicació, o titulat de grau o màster que tingui aquestes competències. L'empresa instal·ladora l'executa, però no el pot signar, i el promotor i l'arquitecte (si no tenen la titulació) tampoc.",
   "options": [
    "Un enginyer, enginyer tècnic o titulat de grau o màster amb competències en la matèria.",
    "L'empresa instal·ladora de telecomunicacions habilitada que executarà la instal·lació.",
    "El promotor de l'obra o el president de la comunitat de propietaris de l'edifici.",
    "L'arquitecte que redacta el projecte d'edificació, sigui quina sigui la seva formació.",
    "Un tècnic del ministeri competent en telecomunicacions, que l'ha de visar obligatòriament."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Segons la normativa ICT, qui és responsable del manteniment de les instal·lacions?",
   "explanation": "Un cop acabada, la ICT és una instal·lació comuna de l'edifici, i el seu manteniment correspon a la propietat o a la comunitat de propietaris, que el pot encarregar a una empresa instal·ladora habilitada. Ni l'instal·lador original, ni el director d'obra, ni els operadors, ni l'ajuntament en són responsables.",
   "options": [
    "La propietat o la comunitat de propietaris de l'edifici.",
    "L'empresa instal·ladora que va executar la ICT, durant tota la vida útil.",
    "El director d'obra que va signar el certificat de fi d'obra de la ICT.",
    "L'operador de telecomunicacions amb més clients a l'edifici.",
    "L'ajuntament del municipi on es troba l'edifici."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quin avantatge aporta la ICT pel que fa als operadors de telecomunicacions?",
   "explanation": "Com que la ICT ja proporciona canalitzacions i espais per a tots, qualsevol operador pot arribar als habitatges sense fer obres pròpies. Això facilita que n'hi hagi més d'un a l'edifici i afavoreix la competència, que beneficia els usuaris. La ICT la paga el promotor, i no fixa tarifes ni quotes.",
   "options": [
    "Facilita l'entrada de diferents operadors a l'edifici i afavoreix la competència entre ells.",
    "Obliga els operadors a assumir tot el cost de construcció de la ICT de l'edifici.",
    "Permet als operadors cobrar una quota de manteniment a la comunitat de propietaris.",
    "Obliga cada operador a construir la seva pròpia canalització fins a cada habitatge.",
    "Fixa les tarifes màximes que els operadors poden aplicar als veïns de l'edifici."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quin d'aquests elements d'un edifici NO forma part de la ICT?",
   "explanation": "El quadre general de protecció és part de la instal·lació elèctrica de baixa tensió (regulada pel REBT), no de la ICT. Les canalitzacions, els recintes de telecomunicacions, les antenes comunes de radiodifusió i la xarxa de fibra òptica sí que són elements de la ICT.",
   "options": [
    "El quadre general de protecció de la instal·lació elèctrica.",
    "Les canalitzacions per on passen els cables de telecomunicacions.",
    "Els recintes de telecomunicacions on s'ubiquen els equips.",
    "Les antenes comunes de recepció de ràdio i televisió terrestre.",
    "La xarxa de cables de fibra òptica que arriba fins als habitatges."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quin és l'objectiu principal de la normativa ICT2?",
   "explanation": "L'objectiu de la normativa ICT2 és garantir que tots els usuaris de l'edifici puguin accedir als serveis de telecomunicacions d'una manera ordenada, compartida i amb qualitat, amb llibertat per triar operador. Va en contra d'antenes individuals i exclusivitats, no prohibeix el satèl·lit, i les instal·lacions elèctriques les regula el REBT.",
   "options": [
    "Garantir a tots els usuaris un accés ordenat, compartit i de qualitat als serveis de telecomunicacions.",
    "Obligar cada habitatge a disposar de la seva pròpia antena i de la seva pròpia connexió amb l'operador.",
    "Garantir que un únic operador de telecomunicacions doni servei en exclusiva a tots els habitatges.",
    "Prohibir la recepció de televisió per satèl·lit i limitar la distribució de senyals a la TDT.",
    "Regular la instal·lació elèctrica de baixa tensió i l'enllumenat de les zones comunes de l'edifici."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quin paper fa la ICT entre les xarxes dels operadors i els usuaris de l'edifici?",
   "explanation": "La ICT és el nexe entre les xarxes d'alimentació dels operadors (que arriben a l'arqueta d'entrada i al recinte de telecomunicacions) i cada usuari, a través de les xarxes de distribució, dispersió i interior. No substitueix les xarxes dels operadors, no és d'un únic operador i permet accedir a tots els serveis alhora.",
   "options": [
    "Actua com a infraestructura comuna que connecta les xarxes dels operadors amb cada usuari.",
    "Substitueix les xarxes dels operadors, de manera que els usuaris no en necessiten cap.",
    "Fa de xarxa privada d'un únic operador, que la construeix i la gestiona en exclusiva.",
    "Serveix només per connectar entre ells els habitatges, sense accés a xarxes externes.",
    "Limita l'accés de cada usuari a un únic servei: o televisió, o telefonia, o banda ampla."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quin reial decret aprova el reglament vigent de les infraestructures comunes de telecomunicacions?",
   "explanation": "El reglament vigent (ICT2) l'aprova el Reial decret 346/2011, d'11 de març, desenvolupat per l'Ordre ITC/1644/2011. El RD 401/2003 era el reglament anterior (ICT1), el RD 279/1999 el primer reglament, el RD 842/2002 és el REBT i el RD 1627/1997 regula la seguretat i salut a les obres.",
   "options": [
    "Reial decret 346/2011, d'11 de març.",
    "Reial decret 401/2003, de 4 d'abril.",
    "Reial decret 279/1999, de 22 de febrer.",
    "Reial decret 842/2002, de 2 d'agost.",
    "Reial decret 1627/1997, de 24 d'octubre."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quin servei NO està inclòs en una ICT segons la normativa vigent?",
   "explanation": "La ICT inclou la radiodifusió sonora i la televisió (terrestre i per satèl·lit), la telefonia disponible al públic i la banda ampla (fibra òptica, coaxial i parell trenat). La telefonia mòbil 5G arriba per ràdio des de les estacions base dels operadors, no a través de la ICT.",
   "options": [
    "Telefonia mòbil 5G.",
    "Telefonia bàsica per parells de coure.",
    "Televisió digital terrestre (TDT).",
    "Connexió de banda ampla per fibra òptica.",
    "Televisió per satèl·lit."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quin servei proporciona la xarxa CATV en una ICT?",
   "explanation": "CATV (Community Antenna Television, televisió per cable) és la xarxa de cable coaxial (normalment híbrida fibra-coaxial) dels operadors de cable, que ofereix televisió, accés a Internet i telefonia. La distribució de TDT i ràdio i la del satèl·lit corresponen a la infraestructura de radiodifusió de la ICT.",
   "options": [
    "Televisió, accés a Internet i telefonia a través d'una xarxa de cable coaxial.",
    "Distribució dels senyals de TDT i ràdio captats per les antenes de la terrassa.",
    "Recepció de televisió per satèl·lit mitjançant una antena parabòlica comuna.",
    "Telefonia bàsica per parells de coure, sense accés a Internet ni televisió.",
    "Cobertura de telefonia mòbil 4G i 5G a l'interior de l'edifici."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quin tipus de document és el protocol de proves en una ICT?",
   "explanation": "El protocol de proves és el document on l'empresa instal·ladora recull les comprovacions i les mesures (nivells de senyal, atenuacions, continuïtat...) fetes a la instal·lació acabada, per demostrar que compleix el projecte i la normativa. Les altres opcions descriuen el projecte tècnic, l'acta de replanteig, el manual d'usuari i el pressupost.",
   "options": [
    "Document que recull les comprovacions i les mesures fetes a la instal·lació un cop executada.",
    "Document que defineix els serveis, les xarxes i les característiques tècniques de la ICT.",
    "Document que confirma la validesa del projecte i recull la consulta feta als operadors.",
    "Document que descriu els serveis de la ICT i les recomanacions d'ús per als propietaris.",
    "Document que recull els amidaments, les unitats d'obra i el cost total de la instal·lació."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quina és la finalitat de la documentació d'una ICT?",
   "explanation": "La documentació de la ICT serveix per definir la instal·lació (projecte), acreditar que s'ha executat correctament (butlletí, protocol de proves, certificat de fi d'obra) i facilitar-ne l'ús i el manteniment (manual d'usuari i Llibre de l'edifici). No té res a veure amb tarifes, impostos, exclusivitats d'operadors ni garanties de fabricants.",
   "options": [
    "Definir la instal·lació, acreditar-ne l'execució i facilitar-ne l'ús i el manteniment.",
    "Fixar les tarifes que els operadors poden cobrar a cadascun dels usuaris de l'edifici.",
    "Justificar davant l'ajuntament l'import de l'impost de construccions i obres.",
    "Determinar quin operador donarà servei en exclusiva als habitatges de l'edifici.",
    "Substituir la garantia i la documentació tècnica dels fabricants dels equips."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quina és una de les novetats principals del reglament ICT2?",
   "explanation": "L'ICT2 (2011) va incorporar la fibra òptica fins a l'habitatge i les xarxes d'accés de nova generació (amb parell trenat de categoria 6 i cable coaxial) per a la banda ampla, i també va introduir el concepte de llar digital. No va prohibir el satèl·lit, no va substituir la TDT, no inclou el 5G i va mantenir el projecte i el protocol de proves.",
   "options": [
    "La incorporació de la fibra òptica i de les xarxes d'accés de nova generació.",
    "La prohibició de les instal·lacions comunes de recepció de televisió per satèl·lit.",
    "La substitució de la TDT per la televisió per cable com a servei obligatori.",
    "La implantació de la telefonia mòbil 5G com a servei mínim a l'edifici.",
    "L'eliminació del projecte tècnic i del protocol de proves en els edificis nous."
   ],
   "correct": 0,
   "penalty": 0.25
  },
  {
   "type": "multichoice",
   "text": "Quins senyals de ràdio i televisió permet rebre i distribuir la ICT d'un edifici?",
   "explanation": "La infraestructura de radiodifusió de la ICT capta i distribueix els senyals de ràdio i televisió terrestres i també preveu la recepció i distribució dels de satèl·lit, amb antenes comunes. Així s'evita que cada habitatge hagi d'instal·lar les seves antenes a la coberta.",
   "options": [
    "Els senyals de ràdio i televisió terrestre i també els de satèl·lit.",
    "Només els terrestres; el satèl·lit sempre requereix antenes individuals.",
    "Només els de satèl·lit; la televisió terrestre arriba per la xarxa de fibra.",
    "Cap: la ràdio i la televisió queden fora de la ICT i depenen de cada habitatge.",
    "Només la ràdio FM; la televisió es rep sempre per Internet de banda ampla."
   ],
   "correct": 0,
   "penalty": 0.25
  }
 ]
};
