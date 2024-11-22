'use client';

import Link from "next/link";
import { useState } from "react";
import { ListChecks } from "@phosphor-icons/react/dist/ssr";
import DailyToDoList from "../hooked0nstudys/components/DailyToDoList";

export default function Home() {

  const [showDailyToDoList, setShowDailyToDoList] = useState(false);
  const toggleDailyToDoList = () => setShowDailyToDoList(!showDailyToDoList);

  const [showAllTasks, setShowAllTasks] = useState(false); // State to toggle between showing all tasks or just first three

  const tasks = [
    { text: "Steuerberatungs Termin", href: "../ugGruendung/zuErledigendeAufgaben/SteuerberatungsTermin" },
    { text: "Unternehmens Struktur", href: "../ugGruendung/zuErledigendeAufgaben/UnternehmensStruktur" },
    { text: "Über Konto Konditionen bei unterschiedlichen Banken informieren", href: "../ugGruendung/zuErledigendeAufgaben/BankKonditionen" },
    { text: "Geschäftsidee und Gründungskonzept festlegen", href: "../ugGruendung/zuErledigendeAufgaben/IdeeUndKonzept" },
    { text: "Firmenname wählen und prüfen lassen (Verfügbarkeit prüfen)", href: "/task/2" },
    { text: "Höhe des Stammkapitals festlegen (mindestens 1 Euro)", href: "/task/3" },
    { text: "Gesellschaftsvertrag erstellen (entweder eigenes Dokument oder Musterprotokoll)", href: "/task/4" },
    { text: "Notartermin für die Beglaubigung des Gesellschaftsvertrags vereinbaren", href: "/task/5" },
    { text: "Notar zahlt den Gesellschaftsvertrag beim Handelsregister ein", href: "/task/6" },
    { text: "Geschäftskonto auf den Namen der UG (in Gründung) eröffnen", href: "/task/7" },
    { text: "Stammkapital auf das Konto einzahlen und Einzahlung bestätigen lassen", href: "/task/8" },
    { text: "Notar reicht die Anmeldung zur Handelsregistereintragung ein", href: "/task/9" },
    { text: "Auf die Eintragung ins Handelsregister warten", href: "/task/10" },
    { text: "Steuerliche Erfassung beim Finanzamt durchführen (Fragebogen zur steuerlichen Erfassung ausfüllen)", href: "/task/11" },
    { text: "Gewerbeanmeldung beim Gewerbeamt durchführen (falls nötig)", href: "/task/12" },
    { text: "Mitgliedschaft bei der zuständigen IHK/HWK (wird automatisch durch die Anmeldung der UG aktiviert)", href: "/task/13" },
    { text: "Geschäftsadresse festlegen (Büro, Homeoffice oder virtuelle Adresse)", href: "/task/14" },
    { text: "Betriebshaftpflichtversicherung und ggf. weitere Versicherungen abschließen", href: "/task/15" },
    { text: "Buchhaltung organisieren (selbst übernehmen oder Steuerberater beauftragen)", href: "/task/16" },
    { text: "Rechnungs- und Zahlungsmanagement aufbauen", href: "/task/17" },
    { text: "Konten erstellen und verifizieren (Instagram, Linkedin, YouTube, Ticktock, Email (different contact options), Apple & Google Developer", href: "/task/18" },
    { text: "Mitarbeiter einstellen (wie geht das?)", href: "/task/21" },
    { text: "Rechnungen stellen (wie geht das?)", href: "/task/19" },
    { text: "Weitere rechtliche Aspekte prüfen (z.B. Datenschutz, Impressum, AGB)", href: "/task/22" },
    { text: "Finanzplanung und Budgetierung durchführen", href: "/task/24" },
    { text: "Mögliche Umwandlung in eine GmbH ?", href: "/task/32" },
  ];

  return (
    <div className="w-full">
      <main className="flex flex-col items-center justify-start sm:py-20 pb-[10vh] bg-[#0A1109] min-h-[90vh] w-full">
        <div className="flex flex-col justify-center h-auto items-center w-full mt-[5vh]">
          <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold">
            {"Gründung einer UG"}
          </h1>
          <div className="flex flex-col justify-center h-auto items-center w-full mt-8">
            <button
              onClick={toggleDailyToDoList}
              className={`text-md text-center rounded-lg px-3 py-2 ${showDailyToDoList ? "bg-greeny text-background" : "bg-lighterBackground text-text"}`}
            >
              <ListChecks size={32} weight="light" />
            </button>
          </div>

          <div className="flex flex-col w-[90vw] sm:w-full items-center my-8 gap-2">
            <h2 className="text-2xl text-center w-[90vw] text-[#A0A2A0] font-bold">
              {"Zu erledigende Aufgaben"}
            </h2>

            {/* To-Do Links hier - Erste drei Aufgaben */}
            <div className="flex flex-col sm:grid sm:grid-cols-2  items-center justify-center my-1 gap-2">
              {tasks.slice(0, 4).map((task, index) => (
                <Link
                  key={index}
                  href={task.href}
                  className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:scale-105 p-4"
                >
                  <h2 className="text-lg text-[#A0A2A0] font-bold">
                    {task.text}
                  </h2>
                </Link>
              ))}
            </div>

            {/* Button to toggle showing all tasks */}
            {showAllTasks ? (
              <>
                <div className="flex flex-col sm:grid sm:grid-cols-2  items-center justify-center my-1 gap-2">
                  {tasks.slice(4).map((task, index) => (
                    <Link
                      key={index + 4} // Offset the index to prevent key duplication
                      href={task.href}
                      className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:scale-105 p-4"
                    >
                      <h2 className="text-lg text-[#A0A2A0] font-bold">
                        {task.text}
                      </h2>
                    </Link>
                  ))}
                </div>
                <button
                  onClick={() => setShowAllTasks(false)} // Reset to show first three tasks only
                  className="bg-lighterBackground text-text rounded-lg py-2 px-4 mt-4"
                >
                  Nur die ersten 4 Aufgaben anzeigen
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAllTasks(true)} // Show all tasks
                className="bg-lighterBackground text-text rounded-lg py-2 px-4 mt-4"
              >
                Alle Aufgaben anzeigen
              </button>
            )}
          </div>

          <div className="flex flex-col w-[90vw] items-center my-8 gap-2">
            <h2 className="text-2xl text-center w-[90vw] text-[#A0A2A0] font-bold">
              {"Business Ideen"}
            </h2>
            <Link href="/studyvation" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:scale-105 p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold">
                Optimierte FABapp - Studyvation
              </h2>
            </Link>
          </div>
        </div>


        {showDailyToDoList && <DailyToDoList page="ugGruendung" />}
      </main>
    </div>
  );
}
