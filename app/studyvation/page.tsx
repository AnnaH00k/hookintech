export default function Studyvation() {
  return (
    <main className="flex flex-col items-center min-h-screen justify-center sm:p-20 sm:mt-0 py-5 text-[#A0A2A0] bg-[#070b0b] w-full">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-white mb-10">
          {"Studyvation - Die Lern-App für Auszubildende"}
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          {"Deine umfassende Plattform für alle Ausbildungsberufe in Deutschland. Unterstützt Auszubildende und Ausbilder mit Lernmaterialien, Gamification und Motivationsinhalten."}
        </p>
      </section>

      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl text-white font-semibold">
          {"1. Zielgruppe"}
        </h2>
        <ul className="list-disc text-left mt-4 ml-6 text-gray-300">
          <li>{"Auszubildende in Deutschland."}</li>
          <li>
            {"Ausbilder/ Berufsschulen die Lernfortschritte überwachen und Lernmaterialien bereitstellen."}
          </li>
          <li>{"Arbeitgeber auf der Suche nach Auszubildenden."}</li>
        </ul>
      </section>

      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-12">
          {"2. App Funktionen"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative flex justify-center p-2">
            <div className="hover:scale-150 hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
              <img src="/images/berufsberatung.svg" alt="Verwaltungstools" className="rounded-lg shadow-2xl max-w-xs" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-white font-semibold mb-4">
              {"Berufsausbildungs Einführung"}
            </h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>{"Übersicht aller Ausbildungsberufe in Deutschland."}</li>
              <li>{"Berufsauswahl-Test zur Eignungsprüfung und Gehaltsübersicht."}</li>
              <li>{"Lehrpläne, Lernvideos und Fachbücher für jeden Beruf."}</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative flex justify-center p-2">
            <div className="hover:scale-150 hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
              <img src="/images/lernmaterialien.svg" alt="Verwaltungstools" className="rounded-lg shadow-2xl max-w-xs" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-white font-semibold mb-4">
              {"Lernmaterialien"}
            </h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>{"Vorgefertigte Multiple-Choice-Tests, Karteikarten und offene Fragen für Prüfungen."}</li>
              <li>
                {"Personalisierte Karteikarten: Auszubildende können eigene Karteikarten erstellen, teilen und mit anderen austauschen."}
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative flex justify-center p-2">
            <div className="hover:scale-150 hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
              <img src="/images/daten.svg" alt="Verwaltungstools" className="rounded-lg shadow-2xl max-w-xs" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-white font-semibold mb-4">
              {"Daten"}
            </h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>{"Offline und Online Speicherung: Inhalte können lokal gespeichert oder online gesichert werden, je nach Präferenz der Nutzer."}</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative flex justify-center p-2">
            <div className="hover:scale-[120%] hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
              <img src="/images/motivation.svg" alt="Verwaltungstools" className="rounded-lg shadow-2xl max-w-xs" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-white font-semibold mb-4">
              {"Motivation"}
            </h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>{"Gamification: Abzeichen, Lern-Streaks und Wettkämpfe zwischen Auszubildenden."}</li>
              <li>{"Motivierende Erfahrungsberichte und Geschichten."}</li>
              <li>{"Automatische Erinnerungen und Lernfortschrittsverfolgung."}</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative flex justify-center p-2">
            <div className="hover:scale-[120%] hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
              <img src="/images/fragenDiskussionen.svg" alt="Verwaltungstools" className="rounded-lg shadow-2xl max-w-xs" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-white font-semibold mb-4">
              {"Fragen"}
            </h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>
                {"Diskussionen zu Lerninhalten: Nutzer können Diskussionen zu Karteikarten und Tests führen, wobei Ausbilderantworten hervorgehoben werden."}
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative flex justify-center p-2">
            <div className="hover:scale-150 hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
              <img src="/images/ausbildungsWerkzeuge.svg" alt="Verwaltungstools" className="rounded-lg shadow-2xl max-w-xs" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl text-white font-semibold mb-4">
              {"Allgemeine Ausbildungswerkzeuge"}
            </h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>
                {"Tools zur digitalen Verwaltung von Berichtsheften, Dienstplänen, Unterweisungen, Urlaubstagen und Prüfungsergebnissen."}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl text-white font-semibold">
          {"3. Monetarisierungsmodell"}
        </h2>
        <p className="mt-4 text-gray-300">
          {"Studyvation nutzt ein Freemium-Modell mit einer kostenlosen Basisversion und einer Premium-Version für einmalige Zahlungen."}
        </p>
        <ul className="list-disc text-left mt-4 ml-6 text-gray-300">
          <li>{"Kostenlose Basisversion mit Werbung und einfachen Funktionen."}</li>
          <li>{"Einmalzahlung von 20 Euro (15 Euro bei Gruppenlizenzen)."}</li>
          <li>{"Option zur lokalen Datenspeicherung oder kostenpflichtige Onlinespeicherung."}</li>
        </ul>
      </section>

      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl text-white font-semibold">
          {"4. Rechtliches"}
        </h2>
        <p className="mt-4 text-gray-300">
          {"Sicherung des Namens \"Studyvation\", Datenschutzkonformität (DSGVO), Gründung als UG und Prüfung der rechtlichen Rahmenbedingungen."}
        </p>
      </section>
    </main>
  );
}
