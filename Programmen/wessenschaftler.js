//.json subject file
var searchListArray = [
  {
    id: 1,
    subject: "Physiker",
    name: "Heinrich Rudolf Hertz",
    date: "1857-1894",
    text: "Heinrich Rudolf Hertz war ein deutscher Physiker. Er gilt insbesondere aufgrund seiner Arbeiten zum experimentellen Nachweis elektromagnetischer Wellen als einer der bedeutendsten Physiker des 19. Jahrhunderts.",
  },
  {
    id: 2,
    subject: "Mathematiker, Physiker, Literat, christlicher Philosoph",
    name: "Blaise Pascale",
    date: "1623-1662",
    text: "Blaise Pascal war ein französischer Mathematiker, Physiker, Literat und christlicher Philosoph. Neben seinen vielen anderen Arbeiten in vielen Bereichen, ist im Bereich der Physik vor allem seine Arbeit über den Luftdruck und den hydrostatischen Druck hervorzuheben. Dieser Arbeit verdankt Blaise Pascal, dass die S.I.-Einheit des Drucks nach ihm benannt wurde",
  },
  {
    id: 3,
    subject: "Astronom, Mathematiker, Physiker",
    name: "Anders Celsius",
    date: "1701-1744",
    text: "Anders Celsius war ein schwedischer Astronom, Mathematiker und Physiker. Celsius war der Erste, der die Helligkeit von Sternen messtechnisch untersuchte; auch fand er heraus, dass Polarlichter das Magnetfeld der Erde stören.Nach ihm ist die Temperatureinteilung Grad Celsius benannt. Sie wurde von ihm 1742 eingeführt und sollte als universelle Skala weltweit genutzt werden. Im Gegensatz zur heute verwendeten Celsius-Skala legte er den Siedepunkt von Wasser mit 0° und den Gefrierpunkt mit 100° fest. Erst später wurden die Fixpunkte der Skala vertauscht.",
  },
  {
    id: 4,
    subject: "Physiker, Erfinder",
    name: "Daniel Gabriel Fahrenheit",
    date: "1686-1736",
    text: "Daniel Gabriel Fahrenheit  war ein Physiker und Erfinder von Messinstrumenten. Fahrenheit entwickelte präzise Thermometer und begründete hiermit die Thermometrie. Er erfand somit das Quecksilberthermometer (dieses gab es bereits vorher, aber nur durch seine Kalibrierung und seine Herstellungsverfahren wurde es auch allgemein anwendbar).",
  },
  {
    id: 5,
    subject: "Physiker",
    name: "William Thomson, 1. Baron Kelvin",
    date: "1824-1907",
    text: "William Thomson, 1. Baron Kelvin, meist als Lord Kelvin  bezeichnet, war ein in Irland geborener britischer Physiker. Er war Professor für theoretische Physik in Glasgow und forschte hierbei hauptsächlich auf den Gebieten der Elektrizitätslehre und der Thermodynamik. Ein Ergebnis war bereits 1848 eine Arbeit zur Thermodynamik auf Basis der Carnot'schen Wärmetheorie, in der er unter anderem die nach ihm benannte absolute Kelvin-Skala einführte. Deren Einheit ”Kelvin” ist in ihrer heutigen Form die seit 1968 gesetzlich festgelegte S.I.-Einheit der Temperatur.",
  },
  {
    id: 6,
    subject: "Physiker",
    name: "Guillaume Amontons",
    date: "1663-1705",
    text: "Guillaume Amontons war ein französischer Physiker. Er ist bekannt für seine Arbeiten zu Reibung und Temperaturmessung.",
  },
  {
    id: 7,
    subject: "Physiker",
    name: "Sir Isaac Newton",
    date: "1642/1643-1727",
    text: "ie Einheit der Kraft ist nach dem berühmten und wichtigen englischen Physiker Sir ISAAC NEWTON benannt. Er ist der Verfasser der Philosophie Naturalist Principia Mathematica, in denen er mit seinem Gravitationsgesetz die universelle Gravitation und die Bewegungsgesetze beschrieb und damit den Grundstein für die klassische Mechanik legte.",
  },
  {
    id: 8,
    subject: "Physiker, Mathematiker, Erfinder",
    name: "Robert Hooke",
    date: "1635-1703",
    text: "Robert Hooke war ein englischer Physiker, Mathematiker und Erfinder. Er ist der Entdecker der Zellen in Pflanzen. Hooke's Verdienst besteht darin, die Theorie der Elastizität richtig formuliert zu haben. 1678 entdeckte er das ”Hooke'sche Gesetz”. Es ist eines der Fundamentalgesetze der Festkörpermechanik.",
  },
  {
    id: 9,
    subject: "Bierbrauer",
    name: "James Prescott Joule",
    date: "1818-1889",
    text: "Die Einheit der Arbeit ist nach James Prescott Joule benannt. Er untersuchte die Natur der Wärme und entdeckte ihren Zusammenhang zur mechanischen Arbeit. Dies führte zu dem Energieerhaltungssatz und dem ersten Satz der Thermodynamik. Außerdem geht das Gesetz der Wärmeleistung in einem elektrischen Stromkreis auf ihn zurück.",
  },
  {
    id: 10,
    subject: "Erfinder, Ingenieur",
    name: "James Watt",
    date: "1736-1819",
    text: "Die Einheit der Leistung ist nach von James Watt benannt. Er war ein schottischer Erfinder und Ingenieur. Seine einflussreichste Erfindung war die Verbesserung des Wirkungsgrades von Dampfmaschinen. Diese Weiterentwicklung spielte eine wichtige Rolle in der industriellen Revolution des 19. Jahrhunderts.",
  },
  {
    id: 11,
    subject: "Offizier, Ingenieur, Physiker",
    name: "Charles-Austin de Coulomb",
    date: "1736-1806",
    text: "Die Einheit der elektrischen Ladung ist benannt nach Charles-Austin de Coulomb. De Coulomb war ein französischer Offizier, Ingenieur und Physiker. Er hat im Bereich der Elektrizität und des Magnetismus gearbeitet, sich aber auch mit Problemen der Mechanik beschäftigt (Torsion, Festkörperreibung).",
  },
  {
    id: 12,
    subject: "Physiker, Mathematiker",
    name: "André-Marie Ampère",
    date: "1775-1836",
    text: "André-Marie Ampère war ein französischer Physiker und Mathematiker. Ampère erklärte den Begriff der elektrischen Spannung und des elektrischen Stroms und setzte die Stromrichtung fest. Neben der Begründung der Elektrodynamik erfand Ampère das Prinzip der elektrischen Telegrafie.",
  },
  {
    id: 13,
    subject: "Physiker",
    name: "Alessandro Giuseppe Antonio Anastasio Graf von Volta",
    date: "1745-1827",
    text: "Alessandro Giuseppe Antonio Anastasio Graf von Volta war ein italienischer Physiker. Er erfand die Batterie und gilt als einer der Begründer der Elektrizitätslehre.",
  },
  {
    id: 14,
    subject: "Physiker, Mathematiker",
    name: "Georg Simon Ohm",
    date: "1789-1854",
    text: "Georg Simon Ohm war ein deutscher Physiker und Mathematiker. Er arbeitete hauptsächlich im Gebiet der Elektrizitätslehre, wo er unter anderem das nach ihm benannte Ohm'sche Gesetz entdeckte.",
  },
  {
    id: 15,
    subject: "Physiker",
    name: "Albert Einstein",
    date: "1879-1955",
    text: "Albert Einstein war ein schweizerisch-US-amerikanischer theoretischer Physiker deutscher Herkunft. Er gilt als einer der bedeutendsten Physiker der Wissenschaftsgeschichte und weltweit als einer der bekanntesten Wissenschaftler der Neuzeit. Einsteins Hauptwerk, die Relativitätstheorie, machte ihn weltberühmt. Im Jahr 1905 erschien seine Arbeit mit dem Titel Zur Elektrodynamik bewegter Körper, deren Inhalt heute als Spezielle Relativitätstheorie bezeichnet wird. 1915 publizierte er die Allgemeine Relativitätstheorie.",
  },
  {
    id: 16,
    subject: "Mathematiker, Physiker",
    name: "Christian Andreas Doppler",
    date: "1803-1853",
    text: "Christian Andreas Doppler war ein österreichischer Mathematiker und Physiker. Er ist durch den nach ihm benannten Doppler-Effekt und die Dopplertemperatur bekannt geworden.",
  },
  {
    id: 17,
    subject: "Physikerin, Chemikerin",
    name: "Marie Skłodowska Curie",
    date: "1867-1934",
    text: "Marie Skłodowska Curie war eine Physikerin und Chemikerin polnischer Herkunft, die in Frankreich lebte und wirkte. Sie untersuchte die 1896 von Henri Becquerel beobachtete Strahlung von Uranverbindungen und prägte für diese das Wort „radioaktiv“. Im Rahmen ihrer Forschungen, für die ihr 1903 ein anteiliger Nobelpreis für Physik und 1911 der Nobelpreis für Chemie zugesprochen wurde, entdeckte sie gemeinsam mit ihrem Ehemann Pierre Curie die chemischen Elemente Polonium und Radium.",
  },
  {
    id: 18,
    subject: "französischer Philosoph, Mathematiker, Naturwissenschaftler",
    name: "René Descartes",
    date: "",
    text: "René Descartes war ein französischer Philosoph, Mathematiker und Naturwissenschaftler.",
  },
  {
    id: 19,
    subject: "griechischer Philosoph, Mathematiker",
    name: "Pythagoras von Samos",
    date: "570BC-495BC",
    text: "Pythagoras von Samos war ein antiker griechischer Philosoph, Mathematiker und Gründer einer einflussreichen religiös-philosophischen Bewegung. Als Vierzigjähriger verließ er seine griechische Heimat und wanderte nach Süditalien aus. Dort gründete er eine Schule und betätigte sich auch politisch. Trotz intensiver Bemühungen der Forschung gehört er noch heute zu den rätselhaftesten Persönlichkeiten der Antike.",
  },
  {
    id: 20,
    subject: "Physiker",
    name: "Stephen William Hawking",
    date: "1942-2018",
    text: "Stephen William Hawking, CH, CBE, FRS war ein britischer theoretischer Physiker und Astrophysiker. Von 1979 bis 2009 war er Inhaber des renommierten Lucasischen Lehrstuhls für Mathematik an der Universität Cambridge. Stephen Hawking lieferte bedeutende Arbeiten zur Kosmologie, zur allgemeinen Relativitätstheorie und zu Schwarzen Löchern.",
  },
  {
    id: 21,
    subject: "Mathematiker",
    name: "David Hilbert",
    date: "1862-1943",
    text: "David Hilbert war ein deutscher Mathematiker und Hochschullehrer. Er gilt als einer der bedeutendsten Mathematiker der Neuzeit.",
  },
  {
    id: 22,
    subject: "Mathematiker",
    name: "Euklid von Alexandria",
    date: "323-285BC",
    text: "Euklid von Alexandria war ein griechischer Mathematiker, der wahrscheinlich im 3. Jahrhundert v. Chr. in Alexandria gelebt hat.",
  },
  {
    id: 23,
    subject:
      "Mathematiker, Statistiker, Astronom, Geodät, Elektrotechniker, Physiker",
    name: "Johann Carl Friedrich Gauß",
    date: "1777-1855",
    text: "Johann Carl Friedrich Gauß war ein deutscher Mathematiker, Statistiker, Astronom, Geodät, Elektrotechniker und Physiker.",
  },
  {
    id: 24,
    subject: "Mathematikerin",
    name: "Sofja Wassiljewna Kowalewskaja",
    date: "1850-1891",
    text: "Sofja Wassiljewna Kowalewskaja  war eine russische Mathematikerin. ",
  },
  {
    id: 25,
    subject: " Mathematiker, Philosoph, Logiker",
    name: "Kurt Friedrich Gödel",
    date: "1906-1978",
    text: "Kurt Friedrich Gödel war ein österreichischer und später US-amerikanischer Mathematiker, Philosoph und einer der bedeutendsten Logiker des 20. Jahrhunderts. Er leistete maßgebliche Beiträge zur Prädikatenlogik, zu den Beziehungen der intuitionistischen Logik sowohl zur klassischen Logik als auch zur Modallogik sowie zur Relativitätstheorie in der Physik.",
  },
  {
    id: 26,
    subject: "Physiker",
    name: "Julius Robert Oppenheimer",
    date: "1904-1967",
    text: "Julius Robert Oppenheimer war ein amerikanischer theoretischer Physiker. Oppenheimer wurde durch das Manhattan-Projekt bekannt.",
  },
  {
    id: 27,
    subject: "Physiker",
    name: "Niels Henrik David Bohr",
    date: "1855-1962",
    text: "Niels Henrik David Bohr war ein dänischer Physiker. Im Jahr 1913 stellte er das Bohrsche Atommodell auf. Er erhielt 1921 die Hughes-Medaille der Royal Society und den Nobelpreis für Physik im Jahr 1922 „für seine Verdienste um die Erforschung der Struktur der Atome und der von ihnen ausgehenden Strahlung“.",
  },
  {
    id: 28,
    subject: "Physiker",
    name: "Ernest Rutherford, 1. Baron Rutherford of Nelson",
    date: "1871-1937",
    text: "Ernest Rutherford, 1. Baron Rutherford of Nelson, war ein neuseeländischer Physiker. Rutherford gilt als einer der bedeutendsten Experimentalphysiker.",
  },
  {
    id: 29,
    subject: "Physiker",
    name: "Louis-Victor Pierre Raymond de Broglie",
    date: "1892-1987",
    text: "Louis-Victor Pierre Raymond de Broglie war ein französischer Physiker. Er gehörte zur französischen Adelsfamilie de Broglie und war der jüngere Bruder des Experimentalphysikers Maurice de Broglie. De Broglie gilt als einer der bedeutendsten Physiker des 20. Jahrhunderts. Für seine Entdeckung der Wellennatur des Elektrons in seiner Dissertation Recherches sur la théorie des quanta und der daraus resultierenden Theorie der Materiewellen erhielt er 1929 den Nobelpreis für Physik.",
  },
  {
    id: 30,
    subject: "Physiker",
    name: "Antoine Henri Becquerel",
    date: "1852-1908",
    text: "Antoine Henri Becquerel war ein französischer Physiker. Er entdeckte 1896 die Radioaktivität und erhielt 1903 gemeinsam mit Marie und Pierre Curie den Nobelpreis für Physik. Sein Vater war Alexandre Edmond Becquerel, der Entdecker des photoelektrischen Effekts.",
  },
  {
    id: 31,
    subject: "Mathematiker",
    name: "Georg Friedrich Bernhard Riemann",
    date: "1826-1866",
    text: "Georg Friedrich Bernhard Riemann war ein deutscher Mathematiker, der trotz seines relativ kurzen Lebens auf vielen Gebieten der Analysis, Differentialgeometrie, mathematischen Physik und der analytischen Zahlentheorie bahnbrechend wirkte. Er gilt als einer der bedeutendsten Mathematiker.",
  },
  {
    id: 32,
    subject: "Mathematiker",
    name: "Srinivasa Ramanujan",
    date: "1887-1920",
    text: "Srinivasa Ramanujan, FRS war ein indischer Mathematiker. Er eignete sich seine mathematischen Kenntnisse autodidaktisch aus Fachliteratur an und besaß eine außerordentliche Begabung dafür, analytische und zahlentheoretische Probleme intuitiv zu lösen, meist ohne zunächst einen Lösungsweg oder Beweise angeben zu können.",
  },
  {
    id: 33,
    subject: "Mathematiker, Physiker, Astronom, Geograph, Logiker, Ingenieur",
    name: "Leonhard Euler",
    date: "1707-1783",
    text: "Leonhard Euler war ein Schweizer Mathematiker, Physiker, Astronom, Geograph, Logiker und Ingenieur.",
  },
  {
    id: 34,
    subject: "Physiker",
    name: "Johannes Diderik van der Waals",
    date: "1837-1923",
    text: "Johannes Diderik van der Waals war ein niederländischer Physiker. 1910 erhielt er den Nobelpreis für Physik.",
  },
  {
    id: 35,
    subject: "Elektroingenieur",
    name: "Nikola Tesla",
    date: "1856-1943",
    text: "Nikola Tesla war ein Erfinder und Elektroingenieur. Sein Lebenswerk ist geprägt durch zahlreiche Neuerungen auf dem Gebiet der Elektrotechnik, insbesondere der elektrischen Energietechnik, wie die Entwicklung des heute als Zweiphasenwechselstrom bezeichneten Systems zur elektrischen Energieübertragung. Tesla erhielt in 26 Ländern über 280 Patente, davon 112 in den USA.",
  },
  {
    id: 36,
    subject: "Astronom, Mathematiker, Physiker",
    name: "Christiaan Huygens",
    date: "1629-1695",
    text: "Christiaan Huygens, auch Christianus Hugenius, war ein niederländischer Astronom, Mathematiker und Physiker. Huygens gilt, obwohl er sich niemals der noch zu seinen Lebzeiten entwickelten Infinitesimalrechnung bediente, als einer der führenden Mathematiker und Physiker des 17. Jahrhunderts. Er ist der Begründer der Wellentheorie des Lichts, formulierte in seinen Untersuchungen zum elastischen Stoß ein Relativitätsprinzip und konstruierte die ersten Pendeluhren.",
  },
  {
    id: 37,
    subject: "Logiker, Mathematiker, Kryptoanalytiker, Informatiker",
    name: "Alan Mathison Turing",
    date: "1912-1954",
    text: "Alan Mathison Turing OBE, FRS war ein britischer Logiker, Mathematiker, Kryptoanalytiker und Informatiker. Er gilt heute als einer der einflussreichsten Theoretiker der frühen Computerentwicklung und Informatik. Turing schuf einen großen Teil der theoretischen Grundlagen für die moderne Informations- und Computertechnologie. Als richtungsweisend erwiesen sich auch seine Beiträge zur theoretischen Biologie.",
  },
  {
    id: 38,
    subject: "Arzt, Mathematiker, Astronom",
    name: "Ghiyath ad-Din Dschamschid bin Masʿud bin Muhammad al-Kaschi",
    date: "1380-1429",
    text: "Ghiyath ad-Din Dschamschid bin Masʿud bin Muhammad al-Kaschi war ein persischer Arzt, Mathematiker und Astronom des Hochmittelalters.",
  },
  {
    id: 39,
    subject: "Physiker, Wissenschaftstheoretiker",
    name: "Erwin Rudolf Josef Alexander Schrödinger",
    date: "1887-1961",
    text: "Erwin Rudolf Josef Alexander Schrödinger war ein österreichischer Physiker und Wissenschaftstheoretiker. Er gilt als einer der Begründer der Quantenmechanik und erhielt 1933 den Nobelpreis für Physik, geteilt mit Paul Dirac, für die Entdeckung neuer produktiver Formen der Atomtheorie.",
  },
  {
    id: 40,
    subject: "Physiker",
    name: "Werner Karl Heisenberg",
    date: "1901-1976",
    text: "Werner Karl Heisenberg war ein deutscher Physiker, der als Begründer der Quantenmechanik gilt und zu den bedeutendsten Physikern des 20. Jahrhunderts zählt.",
  },
  {
    id: 41,
    subject: "Naturforscher",
    name: "Michael Faraday",
    date: "1791-1867",
    text: "Michael Faraday war ein englischer Naturforscher, der als einer der bedeutendsten Experimentalphysiker gilt. Faradays Entdeckungen der „elektromagnetischen Rotation“ und der elektromagnetischen Induktion legten den Grundstein zur Herausbildung der Elektroindustrie. Seine anschaulichen Deutungen des magnetooptischen Effekts und des Diamagnetismus mittels Kraftlinien und Feldern führten zur Entwicklung der Theorie des Elektromagnetismus.",
  },
  {
    id: 42,
    subject: "Erfinder, Elektroingenieur, Industrieller",
    name: "Ernst Werner Siemens",
    date: "1816-1892",
    text: "Ernst Werner Siemens, ab 1888 von Siemens war ein deutscher Erfinder, Elektroingenieur und Industrieller. Er entdeckte das dynamoelektrische Prinzip, auch elektrodynamisches Prinzip genannt, und gilt als Begründer der modernen Elektrotechnik, speziell der elektrischen Energietechnik.",
  },
  {
    id: 43,
    subject: "Physiker",
    name: "Heinrich Friedrich Emil Lenz",
    date: "1804-1865",
    text: "Heinrich Friedrich Emil Lenz war ein deutsch-baltischer Physiker, welcher als einer der Ersten die Zusammenhänge zwischen Magnetfeldern und elektrischen Feldern erkannte. So legte er mit der Lenz'schen Regel die Grundlage für die Wirbelstrombremse. Die Lenz'sche Regel hat in der Elektrizitätslehre einen hohen Stellenwert.",
  },
  {
    id: 44,
    subject: "Physiker, Chemiker",
    name: "Lorenzo Romano Amedeo Carlo Avogadro, Conte di Quaregna e Cerreto",
    date: "1776-1856",
    text: "Lorenzo Romano Amedeo Carlo Avogadro, Conte di Quaregna e Cerreto war ein italienischer Physiker und Chemiker.",
  },
  {
    id: 45,
    subject: "Physiker, Philosoph",
    name: "Ludwig Eduard Boltzmann",
    date: "1844-1906",
    text: "Ludwig Eduard Boltzmann war ein österreichischer Physiker und Philosoph. Er lehrte an den Universitäten von Wien, Graz, München und Leipzig. Seine bedeutendsten Leistungen liegen im Bereich der Thermodynamik und der statistischen Mechanik, wo er sich vor allem mit der Frage beschäftigte, wie die reversiblen mikroskopischen Bewegungen von Teilchen zu irreversiblen makroskopischen Prozessen führen können.",
  },
  {
    id: 46,
    subject: "Chemiker",
    name: "Dmitri Iwanowitsch Mendelejew",
    date: "1834-1907",
    text: "Dmitri Iwanowitsch Mendelejew war ein russischer Chemiker. Er erarbeitete, unabhängig von Lothar Meyer, ein System der chemischen Elemente, die er periodische Gesetzmäßigkeit nannte. Sie ermöglichte eine tabellarische Anordnung, heute Periodensystem oder Periodisches System der Elemente (PSE) genannt, sowie die Vorhersage von drei neuen Elementen.  ",
  },
  {
    id: 47,
    subject:
      "Mathematiker, theoretischer Physiker, theoretischer Astronom, Philosoph",
    name: "Jules Henri Poincaré",
    date: "1854-1912",
    text: "Jules Henri Poincaré war ein bedeutender französischer Mathematiker, theoretischer Physiker, theoretischer Astronom und Philosoph. Er galt in seiner Wirkungszeit ab 1880 bis zu seinem Tod und auch danach als einer der bedeutendsten Mathematiker, worin ihm zu seiner Zeit nur in Deutschland David Hilbert Konkurrenz machte, und zusätzlich noch als führender theoretischer Physiker und Astronom.",
  },
  {
    id: 48,
    subject: "Physiker",
    name: "Max Karl Ernst Ludwig Planck",
    date: "1858-1947",
    text: "Max Karl Ernst Ludwig Planck war ein deutscher Physiker auf dem Gebiet der theoretischen Physik. Er gilt als Begründer der Quantenphysik. Für die Entdeckung einer später nach ihm benannten Konstanten in einer physikalischen Grundgleichung, des Planckschen Wirkungsquantums, erhielt er 1919 den Nobelpreis für Physik des Jahres 1918.Nach dem Studium in München und Berlin folgte Planck 1885 zunächst einem Ruf nach Kiel, 1889 wechselte er nach Berlin.",
  },
  {
    id: 49,
    subject: "Physiker, Mathematiker",
    name: "Evangelista Torricelli",
    date: "1608-1647",
    text: "Evangelista Torricelli war ein italienischer Physiker und Mathematiker. Er übertrug 1640 die Galileischen Fallgesetze auf ausströmende Flüssigkeiten, wurde 1642 in Florenz der Nachfolger von Galileo Galilei als Hofmathematiker und trug maßgeblich zur Entwicklung der Infinitesimalrechnung bei. Torricelli entwickelte 1644 das Quecksilberbarometer, an dessen oberem Ende er ein künstliches Vakuum erzeugte. Torricellis Experiment fachte die im Europa des 17.",
  },
  {
    id: 50,
    subject: "Mathematikerin, Gesellschaftsdame",
    name: "Augusta Ada King-Noel, Countess of Lovelace",
    date: "1815-1852",
    text: "Augusta Ada King-Noel, Countess of Lovelace, allgemein als Ada Lovelace bzw. Lady Lovelace bekannt, war eine britische Mathematikerin und Gesellschaftsdame. Sie war die Tochter des Dichters Lord Byron. Sie gilt als erste Person, die Computerprogramme erstellte.",
  },
  //   { id: 0,subject: "",name: "",date: "",text: "",},
];
const searchInput = document.querySelector("[data-search]");
//search cards on keyInput
searchInput.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  for (var i = 0; i < searchListArray.length; i++) {
    var user = searchListArray[i];
    var isVisible;

    if (
      !user.subject.toLowerCase().includes(value) &&
      !user.name.toLowerCase().includes(value)
    ) {
      var tempId = user.id;
      isVisible = true;

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

    var h6 = clone.querySelectorAll("h6");
    h6[0].innerHTML = user.subject;

    var h5 = clone.querySelectorAll("h5");
    var name = user.name;
    h5[0].setAttribute("h5", name);
    h5[0].innerHTML = user.name;

    var p = clone.querySelectorAll("p");
    var text = user.text;
    p[0].setAttribute("p", text);
    p[0].innerHTML = user.text;

    var div = clone.querySelectorAll("div");
    var n = user.id;
    div[0].setAttribute("id", n);

    template.parentNode.appendChild(clone);
    //console.table(user);
  }
}
generateCards();
