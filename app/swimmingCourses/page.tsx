import Image from "next/image";

const SwimmingCoursesPage = () => {
  const courses = [
    {
      title: "Einzelstunde",
      description:
        "Flexibler Einzelunterricht für individuelle Bedürfnisse. Ideal für intensive Betreuung oder spezifische Technikanpassungen.",
      price: "45€",
      duration: "45 Minuten",
      maxParticipants: "Einzelunterricht",
    },
    {
      title: "Wassergewöhnung & Seepferdchen",
      description:
        "Behutsame erste Schritte im Wasser für die Kleinsten. Spielerisches Lernen der Grundlagen in vertrauensvoller Atmosphäre.",
      price: "35€ pro Einheit",
      duration: "8 Einheiten à 45 Minuten (280€)",
      maxParticipants: "Einzelunterricht",
    },
    {
      title: "Bronze, Silber & Gold",
      description:
        "Intensive Vorbereitung auf die Schwimmabzeichen. Perfekte Technik und Ausdauer für die erfolgreiche Prüfung.",
      price: "40€ pro Einheit",
      duration: "10 Einheiten à 45 Minuten (400€)",
      maxParticipants: "Max. 2 Teilnehmer (35€/Person)",
    },
    {
      title: "Erwachsenenkurs",
      description:
        "Individuell angepasster Schwimmunterricht für Anfänger und Fortgeschrittene in entspannter Atmosphäre.",
      price: "45€ pro Einheit",
      duration: "8 Einheiten à 45 Minuten (360€)",
      maxParticipants: "Einzelunterricht",
    },
  ];

  return (
    <main className="min-h-screen  text-slate-800 dark:text-slate-100 select-none">
      <div className="relative">
        <div className="bg-cyan-500/5 dark:bg-blue-400/5 absolute inset-0"></div>
        <div className="container mx-auto p-8 max-w-6xl relative">
          <section className=" bg-gradient-to-b from-[#3592d0] to-[#01192f] text-center mb-16   backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Schwimmkurse in Aachen
            </h1>
            <p className="text-2xl mb-8 text-white">
              Individueller Schwimmunterricht für Ihren Erfolg im Wasser
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-[#3592d0]">
              Kursangebote
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className=" rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-[#3592d0] "
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[#bddff5]">
                    {course.title}
                  </h3>
                  <p className="mb-6 text-lg text-white">
                    {course.description}
                  </p>
                  <div className="space-y-3 text-lg text-slate-300">
                    <p className="flex items-center">
                      <span className=" mr-2">🕒</span> {course.duration}
                    </p>
                    <p className="flex items-center">
                      <span className=" mr-2">👥</span> {course.maxParticipants}
                    </p>
                    <p className="text-2xl font-bold text-[#bddff5] mt-4">
                      {course.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-[#3592d0]">
              Wichtige Informationen
            </h2>
            <div className="bg-white/90 dark:bg-slate-900/90 p-8 rounded-xl shadow-xl backdrop-blur-sm">
              <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-3">
                    📍
                  </span>{" "}
                  Kurse in Aachen
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-3">
                    🎫
                  </span>{" "}
                  Eintrittskosten für das Schwimmbad sind separat
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-3">
                    💳
                  </span>{" "}
                  Bezahlung per PayPal
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-3">
                    📝
                  </span>{" "}
                  Flexible Terminvereinbarung
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-3">
                    👤
                  </span>{" "}
                  Persönliche Betreuung garantiert
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-[#3592d0]">
              Über mich
            </h2>
            <div className="bg-white/90 dark:bg-slate-900/90 p-8 rounded-xl shadow-xl backdrop-blur-sm">
              <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                Mit über 15 Jahren Schwimmerfahrung und einer abgeschlossenen
                Ausbildung als Fachangestellte für Bäderbetriebe biete ich
                professionellen und persönlichen Schwimmunterricht an.
              </p>
              <ul className="list-none space-y-4 text-lg text-slate-700 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    🌊
                  </span>{" "}
                  Schwimmerfahrung seit dem Alter von 2,5 Jahren
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    🏊‍♀️
                  </span>{" "}
                  7 Jahre aktiv im Schwimmverein
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    📜
                  </span>{" "}
                  Ausgebildete Fachangestellte für Bäderbetriebe (Abschluss
                  2021)
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    🏅
                  </span>{" "}
                  Spezialisierung auf Schwimmabzeichen-Kurse
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-2">
                    💪
                  </span>{" "}
                  Erfahrung in Wassergymnastik und Aquajogging
                </li>
              </ul>
            </div>
          </section>

          <section className="text-center bg-white/90 dark:bg-slate-900/90 rounded-xl p-8 shadow-xl backdrop-blur-sm">
            <h2 className="text-3xl font-semibold mb-6 text-[#3592d0]">
              Kontakt
            </h2>
            <p className="text-xl mb-6 text-slate-700 dark:text-slate-300">
              Interesse an einem persönlichen Schwimmkurs?
            </p>
            <button className="bg-[#3592d0] text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors shadow-lg hover:shadow-xl">
              Jetzt anfragen
            </button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SwimmingCoursesPage;
