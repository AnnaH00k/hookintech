'use client';

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-col items-center justify-center sm:py-20 pb-[10vh] bg-[#0A1109] min-h-[90vh] w-full">
        <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold">
          Unternehmens Struktur
        </h1>
        <div className="text-[#A0A2A0] mt-8 w-[90vw] sm:w-[60vw] text-left">
          <h2 className="text-2xl font-semibold">1. Ein-Personen-UG</h2>
          <p className="mt-2">
            Als Inhaber und alleiniger Mitarbeiter dieser UG übernehmen Sie sämtliche Aufgaben, die in einer klassischen Unternehmensstruktur auf verschiedene Rollen und Abteilungen verteilt werden. 
            Dieses Modell bietet Flexibilität, verlangt jedoch von Ihnen, sich ein breites Spektrum an Fähigkeiten anzueignen, um alle Geschäftsbereiche erfolgreich abzudecken.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Organigramm</h2>
          <p className="mt-2">
            <pre className="bg-[#1C1C1C] p-4 rounded-md overflow-auto">
{`            Ein-Personen-Geschäftsführung (Strategie und operative Tätigkeiten)
                     |
     ----------------------------------------------------------------
    |                        |                         |             
Vertrieb & Marketing    Finanzen & Controlling     IT & Organisation
 - Kundenakquise         - Budgetplanung           - Infrastruktur
 - Werbung               - Steuerplanung           - Datenmanagement
 - Branding              - Kostenkontrolle         - Sicherheitssysteme
                     |
    ---------------------------------------------------------------
   |                              |
Produktion/Dienstleistung       Entwicklungsabteilung
 - Produktentwicklung           - Requirements Engineering
 - Qualitätssicherung           - UI/UX-Design
                                 - Softwareentwicklung (Frontend/Backend)
                                 - Testing und QA
                                 - Release-Management und Wartung
`}
            </pre>
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Abteilungen und erforderliche Kenntnisse</h2>
          <div className="mt-2">
            <h3 className="text-xl font-semibold">A. Vertrieb und Marketing</h3>
            <p className="ml-4">
              <strong>Aufgaben:</strong><br />
              - Entwicklung und Umsetzung von Marketingstrategien.<br />
              - Kundenakquise, Kundenbetreuung und Marktanalyse.<br />
              - Pflege der Marke und Management von Social-Media-Kanälen.<br /><br />
              <strong>Benötigte Kenntnisse:</strong><br />
              - Grundlagen des Marketings und Online-Werbung (z. B. Google Ads, SEO).<br />
              - Social-Media-Management (z. B. Instagram, LinkedIn).<br />
              - Kommunikation und Verkaufstechniken.
            </p>

            <h3 className="text-xl font-semibold mt-4">B. Finanzen und Controlling</h3>
            <p className="ml-4">
              <strong>Aufgaben:</strong><br />
              - Erstellung und Überwachung des Budgets.<br />
              - Rechnungsstellung und Buchhaltung.<br />
              - Analyse von Einnahmen und Ausgaben sowie Steuerplanung.<br /><br />
              <strong>Benötigte Kenntnisse:</strong><br />
              - Grundlagen der Buchhaltung und Steuerrecht (DATEV, Lexware o. Ä.).<br />
              - Excel/Google Sheets für Finanzanalysen.<br />
              - Umgang mit Tools wie Steuerberatungssoftware oder Banking-Apps.
            </p>

            <h3 className="text-xl font-semibold mt-4">C. Produktion/Dienstleistung</h3>
            <p className="ml-4">
              <strong>Aufgaben:</strong><br />
              - Umsetzung der Kernaufgaben des Geschäftsmodells, z. B. Dienstleistungen 
              oder Produktentwicklung.<br />
              - Qualitätssicherung, um die Kundenzufriedenheit sicherzustellen.<br /><br />
              <strong>Benötigte Kenntnisse:</strong><br />
              - Spezifisches Fachwissen zu Ihrem Geschäftsmodell.<br />
              - Techniken der Qualitätssicherung und Prozessoptimierung.
            </p>

            <h3 className="text-xl font-semibold mt-4">D. Personalwesen (zukünftig)</h3>
            <p className="ml-4">
              <strong>Aufgaben:</strong><br />
              - Einstellung und Entwicklung von Mitarbeitern.<br />
              - Organisation von Schulungen, Verwaltung von Verträgen und Gehältern.<br /><br />
              <strong>Benötigte Kenntnisse:</strong><br />
              - Grundlagen des Arbeitsrechts.<br />
              - Fähigkeiten in Mitarbeiterführung und Teamaufbau.<br />
              - Planung und Durchführung von Onboarding-Prozessen.
            </p>

            <h3 className="text-xl font-semibold mt-4">E. IT und Organisation</h3>
            <p className="ml-4">
              <strong>Aufgaben:</strong><br />
              - Sicherstellung der IT-Infrastruktur (Hardware, Software, Netzwerke).<br />
              - Datenmanagement und Digitalisierung von Prozessen.<br />
              - Implementierung und Pflege von Sicherheitssystemen.<br /><br />
              <strong>Benötigte Kenntnisse:</strong><br />
              - Grundlegendes IT-Wissen (Netzwerke, Cloud-Services).<br />
              - Umgang mit Projektmanagement-Software (z. B. Trello, Notion).<br />
              - Datensicherheit und IT-Wartung.
            </p>

            <h3 className="text-xl font-semibold mt-4">F. Entwicklungsabteilung</h3>
            <p className="ml-4">
              <strong>Aufgaben und benötigte Kenntnisse:</strong><br />
              <strong>1. Requirements Engineering</strong><br />
              - Aufgaben: Anforderungen erheben und dokumentieren.<br />
              - Kenntnisse: Grundlagen der Business-Analyse und UML-Diagramme.<br /><br />
              
              <strong>2. UI/UX-Design</strong><br />
              - Aufgaben: Gestaltung der Benutzeroberfläche.<br />
              - Kenntnisse: Tools wie Figma, Adobe XD und Grundprinzipien der Benutzerfreundlichkeit.<br /><br />
              
              <strong>3. Softwareentwicklung</strong><br />
              - Aufgaben: Frontend und Backend-Programmierung.<br />
              - Kenntnisse: Programmiersprachen wie JavaScript, Python, SQL.<br /><br />
              
              <strong>4. Testing und QA</strong><br />
              - Aufgaben: Fehler finden und beheben.<br />
              - Kenntnisse: Test-Frameworks wie Jest oder Selenium.<br /><br />
              
              <strong>5. Release-Management</strong><br />
              - Aufgaben: Veröffentlichung und Wartung.<br />
              - Kenntnisse: Versionskontrolle (Git), CI/CD-Tools (z. B. GitHub Actions).
            </p>

          </div>
        </div>
      </main>
    </div>
  );
}
