'use client';

import { useState, useEffect } from "react";

export default function Home() {
  // Initialisierung des Notizen-Zustands
  const [notes, setNotes] = useState<{ [key: string]: string }>({});
  
  // Liste der Fragen
  const questions = [
    "Wie viel kostet die steuerberatung bei ihnen mit all meinen Fragen (Kostenmodell Privat & UG oder nur UG)?",
    "Muss ich persönlich Steuern zahlen?",
    "Ist es schlauer mich weiterhin von den Steuern meiner Eltern absetzen zu lassen?",
    "Kann es passieren das ich rückwirkend steuern zahlen muss? Habe ich was falsch gemacht?",
    "Was passiert, wenn ich meine Steuern nicht rechtzeitig zahle?",
    "Steuerfreibetrag und einnahmen über App verkäufe die ich nie irgendwo angegeben habe?",
    "Wie erfolgt die Steuererklärung? (Tipps zum selber machen)",

    "Welche steuerlichen Vorteile kann eine UG bieten?",
    "Wie hoch sind die Gründungskosten einer UG?",
    "Wie muss die UG eine Steuererklärung abgeben?",
    "Lohnt sich das Gründen wenn ich erstmal nur verluste mache?",
    "Kann ich mir als Geschäftsführer einer UG ein Gehalt zahlen?",
    "Wie sieht das steuerlich aus wenn man jemanden anstellt?",
    "Wie sieht es steuerlich aus wenn ich Rechnungen ins In & Ausland stelle?",
    "Welche Steuererleichterungen gibt es für Unternehmer?",
    "Welche Unterlagen muss ich für die Steuererklärung bereithalten?",
    "Kann ich die UG auch neben studium und job ohne probleme gründen?",
    "Wie sieht es steuerlich aus wenn ich sachen für die UG kaufe? (Domain, Server, Software, Hardware)",
    "Kann ich als privatperson sachen an die UG verkaufen bei der ich Geschäftsführer bin?",
  ];

  // Laden der Notizen aus dem Local Storage beim Initialisieren
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Speichern der Notizen im Local Storage
  const saveNotesToLocalStorage = (newNotes: { [key: string]: string }) => {
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  // Funktion zum Aktualisieren der Notizen
  const handleNoteChange = (questionKey: string, newNote: string) => {
    const updatedNotes = { ...notes, [questionKey]: newNote };
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);  // Speichern nach jeder Änderung
  };

  // Hochladen einer JSON-Datei und Notizen aus dieser Datei extrahieren
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const fileContent = reader.result as string;
          const parsedNotes = JSON.parse(fileContent);
          
          // Sicherstellen, dass die Struktur der Datei korrekt ist
          if (parsedNotes && typeof parsedNotes === 'object') {
            setNotes(parsedNotes);
            saveNotesToLocalStorage(parsedNotes);  // Speichern im Local Storage
          } else {
            alert("Die Datei enthält ungültige Notizen-Daten.");
          }
        } catch (error) {
          alert("Fehler beim Laden der Datei. Bitte stellen Sie sicher, dass es sich um eine gültige JSON-Datei handelt.");
        }
      };
      reader.readAsText(file);
    }
  };

  // Export der Notizen als JSON-Datei
  const exportNotesAsFile = () => {
    const blob = new Blob([JSON.stringify(notes, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "steuerberatung_notizen.json";
    link.click();
  };

  return (
    <div className="w-full">
      <main className="flex flex-col items-center justify-center sm:py-20 pb-[10vh] bg-[#0A1109] min-h-[90vh] w-full">
        <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold">
          Steuerberatung Fragen
        </h1>

        <div className="w-[90vw] sm:w-[70vw] mt-6 text-[#A0A2A0]">
          {/* Dynamische Darstellung der Fragen */}
          {questions.map((question, index) => {
            const questionKey = `question_${index}`;
            return (
              <div key={questionKey} className="my-4">
                <p className="font-semibold">{question}</p>
                <textarea
                  className="w-full p-2 mt-2 rounded bg-lighterBackground text-text"
                  rows={4}
                  value={notes[questionKey] || ""}
                  onChange={(e) =>
                    handleNoteChange(questionKey, e.target.value)
                  }
                  placeholder="Notizen hier eingeben..."
                />
              </div>
            );
          })}

          {/* Buttons für Export und Upload */}
          <div className="mt-6 flex gap-4">
            <button
              className="bg-green-800 text-text p-2 rounded"
              onClick={exportNotesAsFile}
            >
              Notizen als Datei exportieren
            </button>

            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="p-2 bg-green-800 text-text rounded"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
