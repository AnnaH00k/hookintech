export default function Ideas() {
    const ideas = [
    
      {
        name: "Studyvation/ Hooked0nStudys",
        description: "Plattform zum Teilen von Lernmaterialien, AusbildungsHelfer, Studiumsbegleiter (Fortsetzung der FabApp), Webseite und App für effektives Lernen mit Studienorganisation, Statistiken und virtuellen Lernräumen",
        target: "Lernende aller Altersgruppen",
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
        name: "VR/AR Mind Mapper",
        description: "Interaktive Lernumgebung mit VR/AR und Mind Mapping per Handtracking",
        target: "Schüler und Studenten",
      },
    
      {
        name: "Zukunftsblick",
        description: "Sachbuch/ geschichte über Politik, Motivation und Vertrauen in Wissenschaft und Logik",
        target: "Allgemein",
      },
      {
        name: "Strong female Animation Series",
        description: "Animationsserie über intelligente Frauen",
        target: "Allgemein (mit Fokus auf junge Mädchen)",
      },
      {
        name: "Video: 100h of making games",
        description: "How to make games from normal to vr games",
        target: "developers and people interested in making games",
      },
      {
        name: "Video: 100h of making music",
        description: "How to make music that you really like and how to sell it",
        target: "People interested in making money & music",
      },
      {
        name: "Videos on development ",
        description: "How to add a backend to your website, Website & App in one with Nextjs ",
        target: "developers",
      },
     
    ];
  
    return (
      <main className="flex flex-col items-center min-h-screen justify-center sm:p-20  sm:mt-0 py-5 text-[#A0A2A0] bg-[#070b0b] w-full">
        <h1 className="sm:text-5xl text-xl font-bold mt-[5vh] mb-10">Meine Ideen</h1>
        <table className="text-xs sm:text-lg w-[90vw] max-w-5xl">
          <thead>
            <tr>
              <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">App Name</th>
              <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">Beschreibung</th>
              <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">Zielgruppe</th>
            </tr>
          </thead>
          <tbody>
            {ideas.map((idea, index) => (
              <tr key={index}>
                <td className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">{idea.name}</td>
                <td className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">{idea.description}</td>
                <td className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">{idea.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
  