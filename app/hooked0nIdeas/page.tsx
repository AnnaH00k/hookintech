export default function Hooked0nIdeas() {
  const ideas = [
    {
      name: "FABapp",
      description: "Lern-App für Auszubildende in Bäderbetrieben",
      target: "Auszubildende in Bäderbetrieben",
    },
    {
      name: "Azubee",
      description: "Plattform zum Teilen von Lernmaterialien, AusbildungsHelfer",
      target: "Ausbilder und Auszubildende aller Berufe",
    },
    {
      name: "Challengor",
      description: "App zum Erstellen und Teilen von Challenges",
      target: "Allgemein",
    },
    {
      name: "SipSave",
      description: "Wein-App zum Speichern, Teilen und Finden von Weinen",
      target: "Weinliebhaber",
    },
    {
      name: "Hookbook",
      description: "Schreib-App mit Statistik, Zielsetzung, Recherche-Organisation, To-Do-Liste und KI-Optimierung",
      target: "Autoren",
    },
    {
      name: "DesignatedDesigns",
      description: "Webseite mit Designvorlagen für CSS Frameworks",
      target: "Webdesigner",
    },
    {
      name: "SphereMarketer",
      description: "Marketing-Automatisierungstool für Social Media Plattformen",
      target: "Social Media Manager und Marketer",
    },
    {
      name: "MediMemo/ DocDiary",
      description: "Pflege-App für Arztberichte, Pläne, Termine und mehr",
      target: "Pflegekräfte und Angehörige",
    },
    {
      name: "Persönlicher Bot",
      description: "Individuell entwickelter Chatbot und KI-Modell",
      target: "Benutzerdefiniert",
    },
    {
      name: "VR/AR Mind Mapper",
      description: "Interaktive Lernumgebung mit VR/AR und Mind Mapping per Handtracking",
      target: "Schüler und Studenten",
    },
    {
      name: "Hooked0nStudys",
      description: "Webseite und App für effektives Lernen mit Studienorganisation, Statistiken und virtuellen Lernräumen",
      target: "Online-Studierende",
    },
    {
      name: "Zukunftsblick",
      description: "Sachbuch/ geschichte über Politik, Motivation und Vertrauen in Wissenschaft und Logik",
      target: "Allgemein",
    },
    {
      name: "Superhelden-Serie",
      description: "Animationsserie über eine intelligente Superheldin",
      target: "Allgemein (mit Fokus auf junge Mädchen)",
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen justify-center p-20 text-[#A0A2A0] bg-[#070b0b] w-full">
      <h1 className="text-5xl font-bold mt-[5vh] mb-10">Meine Ideen</h1>
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2 border border-[#303830]">App Name</th>
            <th className="px-4 py-2 border border-[#303830]">Beschreibung</th>
            <th className="px-4 py-2 border border-[#303830]">Zielgruppe</th>
          </tr>
        </thead>
        <tbody>
          {ideas.map((idea, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-[#303830]">{idea.name}</td>
              <td className="px-4 py-2 border border-[#303830]">{idea.description}</td>
              <td className="px-4 py-2 border border-[#303830]">{idea.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
