'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-col items-center justify-center sm:py-20 pb-[10vh] bg-[#0A1109] min-h-[90vh] w-full">
        <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold mb-10">
          UG Gründung in NRW: Schritt-für-Schritt-Anleitung
        </h1>

        <div className="max-w-5xl w-[90vw] grid grid-cols-1 md:grid-cols-2 gap-8 text-[#A0A2A0]">
          {/* Abschnitt 1 */}
          <div className="p-6 bg-[#1C2A1E] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#D4E157]">1. Vorbereitung</h2>
            <p>
              <strong>Firmennamen wählen:</strong> Prüfen Sie, ob der gewünschte Name noch verfügbar ist (
              <a
                href="https://www.handelsregister.de"
                target="_blank"
                className="text-blue-500"
              >
                Handelsregister
              </a>
              ). Definieren Sie Ihre Geschäftsidee und den Zweck der UG.
            </p>
          </div>

          {/* Abschnitt 2 */}
          <div className="p-6 bg-[#1C2A1E] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#D4E157]">2. Kapitalbedarf</h2>
            <p>
              Die UG benötigt mindestens <strong>1 Euro Stammkapital</strong>. Empfohlen wird ein höherer Betrag
              (300–1.000 Euro), um Gründungskosten und erste Betriebskosten zu decken.
            </p>
          </div>

          {/* Abschnitt 3 */}
          <div className="p-6 bg-[#1C2A1E] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#D4E157]">3. Gesellschaftsvertrag</h2>
            <p>
              Erstellen Sie einen Gesellschaftsvertrag mit:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Firmensitz (z. B. NRW)</li>
              <li>Gesellschaftszweck</li>
              <li>Stammkapital und Gesellschafteranteilen</li>
            </ul>
            <p>
              Tipp: Verwenden Sie ein <strong>Musterprotokoll</strong>, um Kosten zu sparen.
            </p>
          </div>

          {/* Abschnitt 4 */}
          <div className="p-6 bg-[#1C2A1E] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#D4E157]">4. Notartermin</h2>
            <p>
              Lassen Sie die Gründung beim Notar beurkunden. Bringen Sie mit:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Gesellschaftsvertrag/Musterprotokoll</li>
              <li>Personalausweise der Gesellschafter</li>
              <li>Einzahlungsnachweis des Stammkapitals</li>
            </ul>
          </div>

          {/* Abschnitt 5 */}
          <div className="p-6 bg-[#1C2A1E] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#D4E157]">5. Handelsregister</h2>
            <p>
              Der Notar meldet die UG beim Handelsregister an. Nach Eintragung erhalten Sie eine{" "}
              <strong>HR-Nummer</strong>.
            </p>
          </div>

          {/* Abschnitt 6 */}
          <div className="p-6 bg-[#1C2A1E] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#D4E157]">6. Steuerliche Anmeldung</h2>
            <p>
              Melden Sie die UG beim Finanzamt an:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Steuernummer beantragen</li>
              <li>Falls notwendig: Umsatzsteuer-ID anfordern</li>
            </ul>
          </div>

          {/* Abschnitt 7 */}
          <div className="p-6 bg-[#1C2A1E] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#D4E157]">7. Geschäftskonto eröffnen</h2>
            <p>
              Eröffnen Sie ein Firmenkonto und bringen Sie folgende Unterlagen mit:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Handelsregisterauszug</li>
              <li>Notariell beglaubigte Unterlagen</li>
              <li>Identitätsnachweise der Geschäftsführer</li>
            </ul>
          </div>

          {/* Abschnitt 8 */}
          <div className="p-6 bg-[#1C2A1E] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#D4E157]">8. Gewerbeanmeldung</h2>
            <p>
              Melden Sie die UG beim zuständigen Gewerbeamt in NRW an. Sie benötigen:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Handelsregisterauszug</li>
              <li>Gesellschaftsvertrag</li>
              <li>Personalausweis</li>
            </ul>
          </div>

          {/* Abschnitt 9 */}
          <div className="p-6 bg-[#1C2A1E] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#D4E157]">9. Pflichten der UG</h2>
            <p>
              Beachten Sie die gesetzlichen Vorgaben:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Rücklagenpflicht:</strong> 25 % des Jahresüberschusses müssen zurückgelegt werden, bis das
                Stammkapital 25.000 Euro erreicht (optional: Umwandlung in eine GmbH).
              </li>
              <li>
                <strong>Buchhaltung:</strong> Führen Sie ordnungsgemäße Bücher und erstellen Sie Jahresabschlüsse.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
