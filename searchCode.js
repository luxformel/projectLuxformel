//.json subject file
var searchListArray = [
  {
    id: 1000,
    link: "Chemie/redoxreaktionen.html",
    subject: "Chemie",
    topic: "Redoxreaktionen",
    keyWords: ["oxidationszahl", "oz", "clonbrif", "aufstellen", "lösung"],
  },
  {
    id: 1001,
    link: "Chemie/redoxtabelle.html",
    subject: "Chemie",
    topic: "Redoxtabelle",
    keyWords: ["Standartpotenziale"],
  },
  {
    id: 1002,
    link: "Chemie/dhWerte.html",
    subject: "Chemie",
    topic: "DH-Werte",
    keyWords: [
      "molare",
      "standard",
      "bildungsenthalpien",
      "schmelz",
      "verdampfungsenthalpien",
      "sepzifische",
      "verbrennungswärmen",
      "verbrennungswarmen",
      "verbrennungswaermen",
      "dhwerte",
      "entropien",
    ],
  },
  {
    id: 1003,
    link: "Chemie/molareStandardBildungsenthalpien.html",
    subject: "Chemie",
    topic: "Molare Standard Bildungsenthalpien",
    keyWords: ["molare", "standard", "bildungsenthalpien", "dhwerte"],
  },
  {
    id: 1004,
    link: "Chemie/molareStandardUndVerdampfungsenthalpien.html",
    subject: "Chemie",
    topic: "Molare Standard - und Verdampfungsenthalpien",
    keyWords: [
      "molare",
      "standard",
      "bildungsenthalpien",
      "verdampfungsenthalpien",
      "dhwerte",
    ],
  },
  {
    id: 1005,
    link: "Chemie/spezifischeVerbrennungswaerme.html",
    subject: "Chemie",
    topic: "Spezifische Verbrennungswärmen",
    keyWords: [
      "sepzifische",
      "verbrennungswärmen",
      "verbrennungswarmen",
      "verbrennungswaermen",
      "dhwerte",
    ],
  },
  {
    id: 1006,
    link: "Chemie/molareStandardEntropien.html",
    subject: "Chemie",
    topic: "Molare Standard Entropien",
    keyWords: ["standard", "dhwerte", "entropien"],
  },
  {
    id: 1007,
    link: "Chemie/molareStandard-Bildungsenthalpien.html",
    subject: "Chemie",
    topic: "Molare Standard Bildungsenthalpien",
    keyWords: ["molare", "standard", "bildungsenthalpien", "dhwerte"],
  },
  {
    id: 1008,
    link: "Chemie/gehaltsangaben.html",
    subject: "Chemie",
    topic: "Gehaltsangaben",
    keyWords: [
      "stoffmenge",
      "avogadro",
      "stoffmengenkonzentration",
      "massenkonzentration",
      "massenanteil",
      "verdünnung",
      "verduennung",
      "verdunnung",
    ],
  },
  {
    id: 1009,
    link: "Chemie/periodensystemDerElemente.html",
    subject: "Chemie",
    topic: "Periodensystem der Elemente",
    keyWords: ["pse"],
  },
  {
    id: 1010,
    link: "Chemie/elementeUndNamen.html",
    subject: "Chemie",
    topic: "Elemente und Namen",
    keyWords: [""],
  },
  {
    id: 1011,
    link: "Chemie/chemischesGleichgewicht.html",
    subject: "Chemie",
    topic: "Chemisches Gleichgewicht",
    keyWords: [
      "hinreaktion",
      "rückreaktion",
      "ruckreaktion",
      "guldberg",
      "waage",
      "gleichgewichtskonstante",
      "reaktionsquotient",
      "zwang",
    ],
  },
  {
    id: 1012,
    link: "Chemie/saeureUndBasen.html",
    subject: "Chemie",
    topic: "Säure und Basen",
    keyWords: [
      "ph",
      "poh",
      "ampholyte",
      "korrespondierende",
      "autoprotolyse des wassers",
      "ionenprodukt des wassers",
      "starke säure",
      "schwache säure",
      "starke base",
      "schwache einprotonige säure",
      "dissoziation",
      "protonendonatoren",
      "protonenakzeptoren",
      "brønsted",
      "brönsted",
      "bronsted",
    ],
  },
  {
    id: 1013,
    link: "Chemie/organischeChemie.html",
    subject: "Chemie",
    topic: "Organische Chemie",
    keyWords: [
      "homologe reihe",
      "kohlenwasserstoffe",
      "summenformel",
      "halbstrukturformel",
      "skellettformel",
      "konstitutionsformel",
      "isomerie",
      "iupac",
      "viskosität",
      "löslichkeit",
      "siedepunkte",
      "zwischenmolekulare kräfte",
      "alkan",
      "alkyl",
    ],
  },
  {
    id: 2000,
    link: "Divers/alphabet.html",
    subject: "Divers",
    topic: "Alphabet",
    keyWords: [
      "alpha",
      "beta",
      "gamma",
      "delta",
      "epsilon",
      "zeta",
      "theta",
      "iota",
      "kappa",
      "lambda",
      "mu",
      "nu",
      "xi",
      "omicron",
      "pi",
      "rho",
      "sigma",
      "tau",
      "upsilon",
      "phi",
      "chi",
      "psi",
      "omega",
    ],
  },
  {
    id: 2001,
    link: "Divers/exotischeUmwandlungen.html",
    subject: "Divers",
    topic: "Exotische Umwandlungen",
    keyWords: [
      "exotische",
      "angstrom",
      "bar",
      "elektonenvolt",
      "atomare masseneinheit",
    ],
  },
  {
    id: 2002,
    link: "Divers/naturkonstanten.html",
    subject: "Divers",
    topic: "Naturkonstanten",
    keyWords: [
      "lichtgeschwindigkeit",
      "avogadro",
      "konstante",
      "gravitationskonstante",
      "na",
    ],
  },
  {
    id: 2003,
    link: "Divers/praefixe.html",
    subject: "Divers",
    topic: "Präfixe",
    keyWords: ["milli", "kilo", "mikro", "piko", "zahlwort"],
  },
  {
    id: 2004,
    link: "Divers/theoriePraktikum.html",
    subject: "Divers",
    topic: "Praktikum Theorie",
    keyWords: [
      "relativer",
      "fehler",
      "abweichung",
      "messung",
      "standardabweichung",
      "mittelwert",
      "absoluter",
      "messungsmittelwert",
    ],
  },
  {
    id: 2005,
    link: "Divers/siBasisgrossen.html",
    subject: "Divers",
    topic: "S.I. - Basisgrö&beta;en",
    keyWords: [
      "si",
      "basisgrössen",
      "basisgrossen",
      "basisgrößen",
      "basisgroßen",
    ],
  },
  {
    id: 2006,
    link: "Divers/luftdichte.html",
    subject: "Divers",
    topic: "Luftdichte Tabelle",
    keyWords: [""],
  },
  {
    id: 2007,
    link: "Divers/spezifischeWaermekapazitaet.html",
    subject: "Divers",
    topic: "Spezifische Wärmekapazität Tabelle",
    keyWords: [""],
  },
  {
    id: 2008,
    link: "Divers/wasserdichte.html",
    subject: "Divers",
    topic: "Wasserdichte Tabelle",
    keyWords: [""],
  },
  {
    id: 2009,
    link: "Divers/tonintervalle.html",
    subject: "Divers",
    topic: "Tonintervalle",
    keyWords: [
      "halbton",
      "halbtonintervalle",
      "frequenzverhältnis",
      "frequenzverhaltnis",
      "frequenzverhaeltnis",
      "prime",
      "kleine sekunde",
      "große sekunde",
      "kleine terz",
      "große terz",
      "quarte",
      "quinte",
      "kleine sexte",
      "große sexte",
      "kleine septime",
      "große septime",
      "oktave",
    ],
  },
  {
    id: 2010,
    link: "Divers/index.html",
    subject: "Divers",
    topic: "Toleranzstreifen der Widerstände",
    keyWords: ["toleranzringe"],
  },
  {
    id: 3000,
    link: "Elektrotechnik/induktionsgesetzHerleitung.html",
    subject: "Elektrotechnik",
    topic: "Induktionsgesetz Herleitung",
    keyWords: [
      "induktion",
      "induziert",
      "leiterschleife",
      "flussänderung",
      "Windungen",
    ],
  },
  {
    id: 3001,
    link: "Elektrotechnik/kondensator.html",
    subject: "Elektrotechnik",
    topic: "Kondesator",
    keyWords: [
      "farad",
      "kapazität",
      "kapazitat",
      "kapazitaet",
      "e0",
      "elektrische feldkonstante",
      "elektrisches feld",
      "plattenkondensator",
      "luftkondensator",
      "dielektrizitätskonstante",
      "dielektrizitatskonstante",
      "dielektrizitaetskonstante",
      "tau",
    ],
  },
  {
    id: 3002,
    link: "Elektrotechnik/magnetischeFeld.html",
    subject: "Elektrotechnik",
    topic: "Magnetismus",
    keyWords: ["magnet", "magnetischer fluss", "flussdichte"],
  },
  {
    id: 3003,
    link: "Elektrotechnik/transformator.html",
    subject: "Elektrotechnik",
    topic: "Transformator",
    keyWords: ["eisenkern", "ü", "sekundarspule", "primärspule", "windungen"],
  },
  {
    id: 3004,
    link: "Elektrotechnik/elektrischeFeld.html",
    subject: "Elektrotechnik",
    topic: "Elektisches Feld",
    keyWords: [
      "Coulomb",
      "dielektrizitätskonstante",
      "dielektrizitatskonstante",
      "dielektrizitaetskonstante",
      "feldstärke",
      "feldstarke",
      "feldstaerke",
      "ladungen",
      "homogenes feld",
      "inhomogenes feld",
      "influenz",
      "elementarladungen",
      "ladungsmenge",
      "dielektrikum",
      "polaristation",
    ],
  },
  {
    id: 3005,
    link: "Elektrotechnik/wechselstromtechnik.html",
    subject: "Elektrotechnik",
    topic: "Wechselstromtechnik",
    keyWords: [
      "50Hz",
      "effektivwert",
      "wirksamerwert",
      "scheitelfaktor",
      "augenblickswert",
      "momentanwert",
      "scheitelwert",
      "amplitude",
      "periodendauer",
      "wirksamer wert",
    ],
  },
  {
    id: 3006,
    link: "Elektrotechnik/basisformeln.html",
    subject: "Elektrotechnik",
    topic: "Basisformeln",
    keyWords: [
      "P=U*I",
      "P=U^2/R",
      "P=R*I^2",
      "U=R*I",
      "U=P/I",
      "U=sqrt(P*R)",
      "R=U/I",
      "R=P/I^2",
      "P=U^2/P",
      "I=U/R",
      "I=P/U",
      "I=sqrt(P/R)",
      "leistung",
      "spannung",
      "stromstärke",
      "stromstaerke",
      "stromstarke",
      "widerstand",
    ],
  },
  {
    id: 3007,
    link: "Elektrotechnik/ohmschesGesetz.html",
    subject: "Elektrotechnik",
    topic: "Ohmsche Gesetz",
    keyWords: ["widerstand", "Leitwert"],
  },
  {
    id: 3008,
    link: "Elektrotechnik/widerstandImWechselstromkreis.html",
    subject: "Elektrotechnik",
    topic: "Widerstand im Wechselstromkreis",
    keyWords: ["wirkleistung", "wirkwiderstand"],
  },
  {
    id: 3009,
    link: "Elektrotechnik/kondensatorImWechselstromkreis.html",
    subject: "Elektrotechnik",
    topic: "Kondsator im Wechselstromkreis",
    keyWords: ["Blindwiderstand", "var", "Blindleitwert", "Blindleistung"],
  },
  {
    id: 3010,
    link: "Elektrotechnik/rlParallelschaltung.html",
    subject: "Elektrotechnik",
    topic: "RL - Parallelschaltung",
    keyWords: [""],
  },
  {
    id: 3011,
    link: "Elektrotechnik/rcReihenschaltung.html",
    subject: "Elektrotechnik",
    topic: "RC - Reihenschaltung",
    keyWords: [""],
  },
  {
    id: 3012,
    link: "Elektrotechnik/rcParallelschaltung.html",
    subject: "Elektrotechnik",
    topic: "RC - Parallelschaltung",
    keyWords: [""],
  },
  {
    id: 3013,
    link: "Elektrotechnik/rlcReihenschaltung.html",
    subject: "Elektrotechnik",
    topic: "RLC - Reihenschaltung",
    keyWords: [""],
  },
  {
    id: 3014,
    link: "Elektrotechnik/rlcParallelschaltung.html",
    subject: "Elektrotechnik",
    topic: "RLC - Parallelschaltung",
    keyWords: [""],
  },
  {
    id: 3015,
    link: "Elektrotechnik/filterschaltungen.html",
    subject: "Elektrotechnik",
    topic: "Filterschaltungen",
    keyWords: ["hochpass", "tiefpass", "grenzfrequenz"],
  },
  {
    id: 4000,
    link: "Mathe/tableauDesFonctionsDerivees.html",
    subject: "Mathe",
    topic: "Tableau des fonctions dérivées",
    keyWords: ["f(x)", "constante", "dx", "tangente", "tableau", "derivation"],
  },
  {
    id: 4001,
    link: "Mathe/limites.html",
    subject: "Mathe",
    topic: "Limites",
    keyWords: [
      "asyptote",
      "horizontale",
      "verticale",
      "oblique",
      "terme du plus haut degree",
      "minoration",
      "majoration",
      "comparaison",
      "gendarmes",
      "cauchy",
      "fonction rationelle",
      "sandwich",
    ],
  },
  {
    id: 4002,
    link: "Mathe/probabilites.html",
    subject: "Mathe",
    topic: "Probabilités",
    keyWords: [
      "arangement",
      "repetition",
      "permutation",
      "combinaison",
      "factorielle",
    ],
  },
  {
    id: 4003,
    link: "Mathe/trigonometrie.html",
    subject: "Mathe",
    topic: "Trigonometrie",
    keyWords: ["sin", "cos", "tan", "valeurs remarquables", "triangle", "cot"],
  },
  {
    id: 4004,
    link: "Mathe/nombresComplexes.html",
    subject: "Mathe",
    topic: "Nombres Complexes",
    keyWords: [
      "z=a+bi",
      "cardan",
      "formule de cardan",
      "imaginaire pur",
      "forme algebrique",
      "forme algébrique",
      "forme trigonometrique",
      "forme trigonométrique",
      "forme polaire",
      "forme exponentielle",
      "i2=1",
      "i^2=1",
      "arg",
      "argumengt",
      "module",
      "conjuge",
      "conjugé",
      "polaire",
      "exponentielle",
      "euler",
      "polynômes trigonométrique",
      "polynomes trigonometrique",
      "linearisation",
      "linéarisation",
      "moivre",
    ],
  },
  {
    id: 4005,
    link: "Mathe/puissancesEtReglesDePriorite.html",
    subject: "Mathe",
    topic: "Puissances et règles de priorité",
    keyWords: [
      "puissances et regles de priorite",
      "puissances",
      "exposant",
      "base",
      "a^n",
      "cube",
      "carre",
      "carré",
      "notation scientifique",
      "pemdas",
      "a^2",
      "a^3",
    ],
  },
  {
    id: 4006,
    link: "Mathe/elementsdArithmetique.html",
    subject: "Mathe",
    topic: "Eléments d'arithmétique",
    keyWords: [
      "elements d'arithmetique",
      "elements d arithmetique",
      "entier naturel",
      "nombre pair",
      "nombre impair",
      "caractères de divisibilité",
      "caracteres de divisibilite",
      "factorisation première",
      "factorisation premiere",
      "nombres premiers",
      "crible d'Eratosthène",
      "crible d'Eratosthene",
      "crible d Eratosthène",
      "crible d Eratosthene",
      "théorème fondamental de l'arithmétique",
      "theoreme fondamental de l'arithmetique",
      "théorème fondamental de l arithmétique",
      "theoreme fondamental de l arithmetique",
      "Div(a)",
      "Diva,",
    ],
  },
  {
    id: 4007,
    link: "Mathe/collectionDesFormulesTrigonometriques.html",
    subject: "Mathe",
    topic: "Collection des Formules de Trigonomètrie",
    keyWords: ["sin", "cos", "tan", "cot", "sicocosi", "cocosisi"],
  },
  {
    id: 4008,
    link: "Mathe/collectionDesFormulesGeometrique.html",
    subject: "Mathe",
    topic: "Collection des Formules des figures de géométrie",
    keyWords: [
      "cube",
      "rectangle",
      "triangle",
      "losange",
      "disque",
      "cylindre",
      "cone de revolution",
      "cône de révolution",
      "sphere",
      "sphère",
      "perimetre",
      "périmètre",
      "aire",
      "volume",
    ],
  },
  {
    id: 4009,
    link: "Mathe/conditionsMathematiques.html",
    subject: "Mathe",
    topic: "Conditions Mathématiques utiles",
    keyWords: [
      "droites parallèles",
      "droites paralleles",
      "points alignés",
      "points alignes",
      "parallélogramme",
      "parallelogramme",
      "losange",
      "triangle isocèle",
      "triangle isocele",
      "triangle équilatérale",
      "triangle equilaterale",
      "triangle rectangle",
      "carré",
      "carre",
      "médiatrice",
      "mediatrice",
      "cercle",
    ],
  },
  {
    id: 4010,
    link: "Mathe/derivation.html",
    subject: "Mathe",
    topic: "Dérivation",
    keyWords: ["tangente", "derivation"],
  },
  {
    id: 4011,
    link: "Mathe/continuite.html",
    subject: "Mathe",
    topic: "Continuité",
    keyWords: [
      "valeurs intermédiaires",
      "valeurs intermediaires",
      "continuite",
    ],
  },
  {
    id: 4012,
    link: "Mathe/fonctionExponentielle.html",
    subject: "Mathe",
    topic: "Fonction exponentielle",
    keyWords: ["exp", "euler", "neper", "néper", "e^x"],
  },
  {
    id: 4013,
    link: "Mathe/ensemblesDesNombres.html",
    subject: "Mathe",
    topic: "Ensembles des nombres",
    keyWords: [
      "entiers naturels",
      "entiers relatifs",
      "décimaux",
      "decimaux",
      "rationnels",
      "réels",
      "reels",
      "complexes",
      "quaternions",
      "octonions",
      "sédénions",
      "sedénions",
      "sédenions",
      "sedenions",
      "pathions",
      "chingongs",
      "routons",
      "vaudrons",
      "diagramme de venn",
    ],
  },
  {
    id: 4014,
    link: "Mathe/trigonometrieDansUnCercle.html",
    subject: "Mathe",
    topic: "Trigonomètrie dans un cercle",
    keyWords: ["radian", "quadrants"],
  },
  {
    id: 4015,
    link: "Mathe/vecteursDansLePlan.html",
    subject: "Mathe",
    topic: "Vecteurs dans le plan",
    keyWords: ["vecteur", "nul", "translation"],
  },
  {
    id: 4016,
    link: "Mathe/geometrieDanslespace.html",
    subject: "Mathe",
    topic: "Géométrie dans l'espace",
    keyWords: [
      "vecteur",
      "nul",
      "translation",
      "chasles",
      "coplanaires",
      "centre de gravite",
      "centre de gravité",
      "parallélisme",
      "parallelisme",
      "repère",
    ],
  },
  {
    id: 4017,
    link: "Mathe/ln.html",
    subject: "Mathe",
    topic: "Fonction logarithme népérien",
    keyWords: ["fonction réciproque", "fonction reciproque"],
  },
  {
    id: 4018,
    link: "Mathe/theoremeDeThales.html",
    subject: "Mathe",
    topic: "Théorème de Thalès",
    keyWords: [""],
  },
  {
    id: 4019,
    link: "Mathe/theoremeDePythagore.html",
    subject: "Mathe",
    topic: "Théorème de Pythagore",
    keyWords: [""],
  },
  {
    id: 4020,
    link: "Mathe/trigonometrieDansUnTriangleRectalge.html",
    subject: "Mathe",
    topic: "Trigonomètrie dans un triangle rectangle",
    keyWords: [""],
  },
  {
    id: 4021,
    link: "Mathe/integration.html",
    subject: "Mathe",
    topic: "Intégration",
    keyWords: ["primitives", "primitive"],
  },
  {
    id: 5000,
    link: "Physik/arbeitEnergieLeistung.html",
    subject: "Physik",
    topic: "Arbeit, Energie und Leistung",
    keyWords: [
      "watt",
      "energie",
      "wirkungsgrad",
      "lageenergie",
      "kinetischeenergie",
      "newton meter",
      "joule",
    ],
  },
  {
    id: 5001,
    link: "Physik/gasGesetze.html",
    subject: "Physik",
    topic: "Gasgesetze",
    keyWords: [
      "boyle mariotte",
      "gay lussac",
      "ideale gase",
      "amotons",
      "gaskonstante",
      "boltzmannkonstante",
    ],
  },
  {
    id: 5002,
    link: "Physik/gravitation.html",
    subject: "Physik",
    topic: "Gravitation",
    keyWords: [
      "gravitationskonstante",
      "kepler",
      "satellit",
      "G",
      "umlaufzeit",
    ],
  },
  {
    id: 5003,
    link: "Physik/impuls.html",
    subject: "Physik",
    topic: "Impuls",
    keyWords: [
      "stoss",
      "zentraler elastischer stoß",
      "zentraler unelastischer stoß",
      "impulserhaltung",
      "p=mv",
      "Stoßvorgänge Definitionen",
    ],
  },
  {
    id: 5004,
    link: "Physik/kinematik.html",
    subject: "Physik",
    topic: "Kinematik",
    keyWords: [
      "ggb",
      "gbb",
      "zeitabschnitten",
      "wegabschnitten",
      "geschwindigkeit",
      "weg",
      "zeit",
      "bewegung",
      "momentangeschwindigkeit",
      "beschleunigung",
      "verzogerung",
      "verzögerung",
      "verzoegerung",
      "durchschnittsgeschwindigkeit",
    ],
  },
  {
    id: 5005,
    link: "Physik/reibung.html",
    subject: "Physik",
    topic: "Reibung",
    keyWords: ["selbsthemmung", "haftreibung", "gleitreibung", "arctan"],
  },
  {
    id: 5006,
    link: "Physik/schwingungen.html",
    subject: "Physik",
    topic: "Schwingungen",
    keyWords: [
      "elongation",
      "auslenkung",
      "amplitude",
      "harmonische schwingung",
      "phase",
      "phasenwinkel",
      "kreisfrequenz",
      "fadenpendel",
      "federpendel",
    ],
  },
  {
    id: 5007,
    link: "Physik/formelsammlungWuerfe.html",
    subject: "Physik",
    topic: "Formelsammlung Würfe",
    keyWords: [
      "senkrechter wurf",
      "wurfparabel",
      "bahngeschwindigkeit",
      "steigzeit",
      "waagerechter wurf",
      "schräger wurf",
    ],
  },
  {
    id: 5008,
    link: "Physik/strahlenoptik.html",
    subject: "Physik",
    topic: "Strahlenoptik",
    keyWords: [
      "reflektion",
      "diffus",
      "lichtstrahl",
      "reell",
      "virtuell",
      "lot",
      "brechungsindex",
      "brechungsgesetz",
      "snellius",
      "fermat",
      "totalreflektion",
      "grenzwinkel",
      "prisma",
      "planparallele",
      "planparallele platte",
      "prismenwinkel",
      "brechender winel",
      "minimalablenkung",
      "fraunhoferformel",
      "linsen",
      "sammellinse",
      "konvexlinse",
      "zerstreuungslinse",
      "konvexlinse",
      "bikonvexlinse",
      "plankonvexlinse",
      "konkavkonvexlinse",
      "konkavlinse",
      "bikonkavlinse",
      "plankonkavlinse",
      "konvexkonkavlinse",
    ],
  },
  {
    id: 5009,
    link: "Physik/formelsammlungStrahlenoptik.html",
    subject: "Physik",
    topic: "Formelsammlung Strahlenoptik",
    keyWords: [
      "einfallswinkel",
      "reflexionswinkel",
      "brechzahl",
      "brechungsgesetz",
      "reflexionswinkel",
      "ablenkung",
      "brechungswinkel",
      "eintrittswinkel",
      "brechenderwinkel",
      "linsen",
      "abbildungsmassstab",
      "abbildungsmaßstab",
      "abbildungsgleichung",
      "gegenstandsgrösse",
      "gegenstandsgroesse",
      "gegenstandsgrosse",
      "gegenstandsgröße",
      "gegenstandsgroeße",
      "gegenstandsgroße",
      "bildweite",
      "brennweite",
      "gegenstandsweite",
      "bildgrösse",
      "bildgröße",
    ],
  },
  {
    id: 5010,
    link: "Physik/kreisbewegungen.html",
    subject: "Physik",
    topic: "Kreisbewegungen",
    keyWords: [
      "winkelgeschwindigkeit",
      "drehfrequenz",
      "bahngeschwindigkeit",
      "periodendauer",
      "umlaufzeit",
      "umdrehungsfrequenz",
      "drehzahl",
      "zentripetalkraft",
      "hertz",
    ],
  },
  {
    id: 5011,
    link: "Physik/wellenoptik.html",
    subject: "Physik",
    topic: "Wellenoptik",
    keyWords: [""],
  },
  {
    id: 5012,
    link: "Physik/grundlagenMechanik.html",
    subject: "Physik",
    topic: "Grundlagen Mechanik",
    keyWords: [""],
  },
  {
    id: 5013,
    link: "Physik/relativitaetstheorie.html",
    subject: "Physik",
    topic: "Relativitätstheorie",
    keyWords: [
      "zeitdilatation",
      "inertialsysteme",
      "relativistische kinematik",
      "längenkontraktion",
      "relativistischer faktor",
      "grundprinzipien",
      "Relativgeschwindigkeit",
      "ruhender Beobachter",
      "bewegter Beobachter",
    ],
  },
  {
    id: 5014,
    link: "Physik/formelsammlungRelativitaet.html",
    subject: "Physik",
    topic: "Formelsammlung Relativitätstheorie",
    keyWords: [""],
  },
  {
    id: 5015,
    link: "Physik/formelsammlungWellenoptik.html",
    subject: "Physik",
    topic: "Formelsammlung Wellenoptik",
    keyWords: [""],
  },
  {
    id: 5016,
    link: "Physik/radioaktivitaet.html",
    subject: "Physik",
    topic: "Radioaktivität",
    keyWords: [
      "nukleonen",
      "neutronen",
      "protonen",
      "elektronen",
      "nuklid",
      "isotope",
      "strahlung",
      "aktivität",
      "betastrahlung",
      "alphastrahlung",
      "gammastrahlung",
      "antimaterie",
      "zerfall",
      "halbwertszeit",
      "antineutrino",
      "neutrino",
    ],
  },
  {
    id: 5017,
    link: "Physik/formelsammlungRadioaktivitaet.html",
    subject: "Physik",
    topic: "Formelsammlung Radioaktivität",
    keyWords: [
      "nukleonen",
      "neutronen",
      "protonen",
      "elektronen",
      "nuklid",
      "isotope",
      "strahlung",
      "aktivität",
      "betastrahlung",
      "alphastrahlung",
      "gammastrahlung",
      "antimaterie",
      "zerfall",
      "halbwertszeit",
      "antineutrino",
      "neutrino",
    ],
  },
  {
    id: 6000,
    link: "Technologie/werkstoffeigenschaften.html",
    subject: "Technologie",
    topic: "Werkstoffeigenschaften",
    keyWords: [
      "stoffe",
      "werkstoffe",
      "eisen",
      "streckgrenze",
      "zuggrenze",
      "zugspannung",
      "dehngrenze",
      "dehnung",
      "bruchdehnungslänge",
      "bruchdehnung",
      "sicherheitszahl",
    ],
  },
  {
    id: 6001,
    link: "Technologie/zahnradtriebe.html",
    subject: "Technologie",
    topic: "Zahnradtriebe",
    keyWords: [
      "zahnezahl",
      "zähnezahl",
      "zaehnezahl",
      "teilkreisdurchmesser",
      "drehzahl",
      "zahnrad",
      "modul",
      "teilung",
      "zahnhöhe",
      "zahnhohe",
      "zahnhoehe",
      "kopfkreisdurchmesser",
      "aussendurchmesser",
      "achsenabstand",
      "kopfspiel",
      "kopfhöhe",
      "kopfhohe",
      "kopfhoehe",
      "fusskreisdurchmesser",
      "zahnbreite",
      "übersetzungsverhältnis",
      "ueberdsetzungsverhaeltnis",
      "ubersetzungsverhaltnis",
    ],
  },
  {
    id: 6002,
    link: "Technologie/kreisprozesse.html",
    subject: "Technologie",
    topic: "Kreisprozesse",
    keyWords: [
      "linksgänige kreisprozesse",
      "linksganige kreisprozesse",
      "linksgaenige kreisprozesse",
      "rechtsgänige kreisprozesse",
      "rechtsganige kreisprozesse",
      "rechtsgaenige kreisprozesse",
      "kompressionskurve",
      "expansionskurve",
      "wärmekraftmaschinen",
      "warmekraftmaschinen",
      "waermekraftmaschinen",
      "nutzarbeit",
      "wärmepumpenprozess",
      "waermepumpenprozess",
      "warmepumpenprozess",
      "Leistungszahl",
      "wärmekraftprozess",
      "waermekraftprozess",
      "warmekraftprozess",
    ],
  },
  {
    id: 6003,
    link: "Technologie/festigkeitslehre.html",
    subject: "Technologie",
    topic: "Festigkeitslehre",
    keyWords: [
      "Zug",
      "abschereung",
      "zugspannung",
      "normalspannung",
      "torsion",
      "gefärdeter querschnitt",
      "zugversuch",
      "biegung",
    ],
  },
  {
    id: 7000,
    link: "Informatik/javaBasics.html",
    subject: "Informatik",
    topic: "Java Basics",
    keyWords: [
      "math random",
      "request focus",
      "set value",
      "text field",
      "equals",
      "set enabled",
      "set visible",
      "set text",
    ],
  },
  {
    id: 7001,
    link: "Informatik/javaArrayLists.html",
    subject: "Informatik",
    topic: "Java Array Lists",
    keyWords: ["jlist", "sort", "import"],
  },
  {
    id: 7002,
    link: "Informatik/htmlBasics.html",
    subject: "Informatik",
    topic: "HTML Basics",
    keyWords: [""],
  },
  {
    id: 7003,
    link: "Informatik/htmlBasics.html",
    subject: "Informatik",
    topic: "CSS Basics",
    keyWords: [""],
  },
];
const searchInput = document.querySelector("[data-search]");
//search cards on keyInput
searchInput.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  //console.log(value);
  for (var i = 0; i < searchListArray.length; i++) {
    var user = searchListArray[i];
    var isVisible;
    var keyW = searchListArray[i].keyWords;
    //console.log(keyW);

    var containsKeyWord = 0;
    //searches keywords if any are matching input var containsKeyWord would be > 0
    for (let index = 0; index < keyW.length; index++) {
      if (keyW[index].toLowerCase().includes(value)) {
        containsKeyWord++;
      }
    }

    if (
      !user.subject.toLowerCase().includes(value) &&
      !user.topic.toLowerCase().includes(value) &&
      containsKeyWord <= 0
    ) {
      var tempId = user.id;
      isVisible = true;
      //document.getElementById("tempId").parentNode.style.display = "none";
      //document.getElementById("tempId").style.display = "none";
      //console.log(tempId);
      //console.log(document.getElementById(tempId));
      //document.getElementById(tempId).toggleAttribute("hide");
      document
        .getElementById(tempId)
        .classList.toggle("isNotVisible", isVisible);
    } else {
      var tempId = user.id;
      isVisible = false;
      document
        .getElementById(tempId)
        .classList.toggle("isNotVisible", isVisible);
    }
  }
});

//generates templates
function generateCards() {
  var template = document.querySelector("#card");
  for (var i = 0; i < searchListArray.length; i++) {
    var user = searchListArray[i];
    var clone = template.content.cloneNode(true);

    var h5 = clone.querySelectorAll("h5");
    h5[0].innerHTML = user.subject;

    var a = clone.querySelectorAll("a");
    var link = user.link;
    a[0].setAttribute("href", link);
    a[0].innerHTML = user.topic;

    var div = clone.querySelectorAll("div");
    var n = user.id;
    div[0].setAttribute("id", n);

    //h6[0].innerHTML = user.id;
    //console.log(user.id);

    template.parentNode.appendChild(clone);
    //console.table(user);
  }
}
generateCards();
