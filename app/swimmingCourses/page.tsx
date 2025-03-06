import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Schwimmkurse in Aachen | Persönlicher Schwimmunterricht",
  description:
    "Individueller Schwimmunterricht in Aachen für alle Altersgruppen. Von Wassergewöhnung über Seepferdchen bis hin zu Bronze, Silber & Gold. Auch Erwachsenenkurse und Wasserfitness.",
  openGraph: {
    title: "Schwimmkurse in Aachen | Persönlicher Schwimmunterricht",
    description:
      "Individueller Schwimmunterricht in Aachen für alle Altersgruppen. Von Wassergewöhnung über Seepferdchen bis hin zu Bronze, Silber & Gold. Auch Erwachsenenkurse und Wasserfitness.",
    images: [
      {
        url: "/hooked0ntech/swimage.png", // Ersetzen Sie dies mit dem Pfad zu Ihrem gewünschten Vorschaubild
        width: 600,
        height: 600,
        alt: "Schwimmkurse in Aachen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schwimmkurse in Aachen | Persönlicher Schwimmunterricht",
    description:
      "Individueller Schwimmunterricht in Aachen für alle Altersgruppen. Von Wassergewöhnung über Seepferdchen bis hin zu Bronze, Silber & Gold. Auch Erwachsenenkurse und Wasserfitness.",
    images: ["/hooked0ntech/swimage.png"], // Gleiches Bild wie oben
  },
};

const SwimmingCoursesPage = () => {
  const courses = [
    {
      title: "Einzelstunde Erwachsene",
      description:
        "Du bist Erwachsen und möchtest das Schwimmen lernen, deine Technik verbessern oder neue Schwimmstile erkunden? Gemeinsam bekommen wir das hin.",
      price: "20€ + eigener Schwimmbad Eintritt",
      duration: "45 Minuten, Anzahl der Einheiten wird individuell festgelegt.",
      maxParticipants: "Einzelunterricht",
    },
    {
      title: "Wasserfitness",
      description:
        "Du hast Probleme mit den Gelenken und möchtest trotzdem deine Ausdauer, Kraft und Beweglichkeit verbessern? Das ist kein Problem im Wasser können wir problematische Belastungspunkte umgehen und langsam an einer Verbesserung arbeiten. ",
      price: "20€ + Eintritt",
      duration: "45 Minuten, Anzahl der Einheiten wird individuell festgelegt.",
      maxParticipants: "Einzelunterricht",
    },
    {
      title: "Wassergewöhnung",
      description:
        "Dein Kind hat noch wenig Erfahrung im Wasser oder vielleicht sogar noch Angst davor? Spielerisch wird das Kind dem Wasser näher gebracht. Ziel ist es das sich in Schulterhohem Wasser frei bewegen zu können und auch ohne Schwimmbrille zu tauchen.",
      price: "20€ pro Einheit + Eintritt",
      duration: "8 Einheiten à 45 Minuten (160€)",
      maxParticipants: "Einzelunterricht",
    },
    {
      title: "Seepferdchen",
      description:
        "Das Kind hat die Wassergewöhnung hinter sich und traut sich mit dem gesamten Kopf unter zu tauchen, dann kann es nun ans schwimmen gehen. Ziel ist das erreichen des Seepferdchen Abzeichens.",
      price: "20€ pro Einheit + Eintritt",
      duration: "8 Einheiten à 45 Minuten (160€)",
      maxParticipants: "Einzelunterricht",
    },
    {
      title: "Bronze, Silber & Gold",
      description:
        "Intensive Vorbereitung auf die Schwimmabzeichen. Perfekte Technik und Ausdauer für die erfolgreiche Prüfung.",
      price: "20€ pro Einheit",
      duration: "10 Einheiten à 45 Minuten (200€)",
      maxParticipants: "Max. 2 Teilnehmer (15€/Person)",
    },
    {
      title: "Trainingsbuddy",
      description:
        "Schreib mich einfach an und wir erstellen dein personalisiertes Trainingsprogramm. Ich erstelle dir einen Trainingsplan, der dich deine Ziele erreichen lässt. Und komme auch zur Motivation mit trainieren stehe gerne auch für Motivierende Schwimm sprints oder ausdauer Ziele zur Verfügung wenn ich mithalten kann.",
      price: "20€ ",
      duration: " 60 Minuten",
      maxParticipants: "Einzelstunde",
    },
  ];

  return (
    <main className="min-h-screen  text-slate-800 dark:text-slate-100 select-none">
      <div className="relative">
        <div className="bg-cyan-500/5 dark:bg-blue-400/5 absolute inset-0"></div>
        <div className="container mx-auto p-8 max-w-6xl relative">
          <section className="bg-gradient-to-b from-[#3592d0] to-[#01192f] text-center mb-16 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Schwimmkurse in Aachen
            </h1>
            <p className="text-xl mb-4 text-white">
              Zusammen was<span className="text-white/10">s</span>erreichen
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className=" rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-[#3592d0] "
                >
                  <h3 className="text-xl font-semibold mb-4 text-[#bddff5]">
                    {course.title}
                  </h3>
                  <p className="mb-6 text-md text-white">
                    {course.description}
                  </p>
                  <div className="space-y-3 text-md text-slate-300">
                    <p className="flex items-center">
                      <span className=" mr-2">🕒</span> {course.duration}
                    </p>
                    <p className="flex items-center">
                      <span className=" mr-2">👥</span> {course.maxParticipants}
                    </p>
                    <p className="text-xl font-bold text-[#bddff5] mt-4">
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
                  Eigene Eintrittskosten für das Schwimmbad werden separat
                  gezahlt
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-600 dark:text-cyan-400 mr-3">
                    💳
                  </span>{" "}
                  Bezahlung per PayPal Freunde oder Bar
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
                Mit über 20 Jahren Schwimmerfahrung und einer abgeschlossenen
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
                  7 Jahre aktiv im Schwimmverein mit Wettkampf Erfahrung
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
              Interesse an einem persönlichen Schwimmkurs? <br /> Schreib mich
              einfach an.
            </p>
            <a
              href="mailto:annaschwimmt@gmail.com"
              className="inline-block bg-[#3592d0] text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors shadow-lg hover:shadow-xl"
            >
              annaschwimmt@gmail.com
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SwimmingCoursesPage;
