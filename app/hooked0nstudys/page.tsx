"use client";

import { useState, useEffect } from "react";
import { Check } from "@phosphor-icons/react";

export default function Hooked0nStudys() {
  // Zustand für die Liste der To-Dos mit Initialwerten
  const [todos, setTodos] = useState([
    { id: 1, task: "Überblick über alle 20 Lerzettel verschaffen", completed: false, time: "13:00 - 13:30" },
    { id: 2, task: "Priorisierung der Themen nach Schwierigkeit und Bedeutung für die Klausur", completed: false, time: "13:30 - 14:30" },
    { id: 3, task: "Konzentration auf grundlegende Konzepte (Einführung in Matritzen, Lineare Gleichungssysteme)", completed: false, time: "14:30 - 15:30" },
    { id: 4, task: "Vertiefung in fortgeschrittene Themen (Invertieren von Matritzen, Bäume)", completed: false, time: "16:00 - 17:00" },
    { id: 5, task: "Bearbeitung der online Tests, um das Verständnis zu überprüfen", completed: false, time: "17:00 - 18:00" },
    { id: 6, task: "Anschauen der relevanten Videos zur Vertiefung (aus der Videogalerie)", completed: false, time: "18:00 - 19:00" },
    { id: 7, task: "Durchgehen der Folien und Notizen machen", completed: false, time: "19:30 - 20:30" },
    { id: 8, task: "Anhören der Podcasts, um Konzepte zu festigen", completed: false, time: "20:30 - 21:30" },
    { id: 9, task: "Bearbeiten der Musterklausuren unter Prüfungsbedingungen", completed: false, time: "21:30 - 22:30" },
    { id: 10, task: "Zusammenfassung der wichtigsten Punkte aus den Tests und Klausuren", completed: false, time: "22:30 - 23:00" },
    { id: 11, task: "Früh ins Bett gehen, um ausreichend Schlaf zu bekommen", completed: false, time: "23:00" },
  ]);

  // Zustand für den Countdown
  const [timeRemaining, setTimeRemaining] = useState("");
  // Zustand für Schlafenszeit und Vorbereitungszeit
  const [sleepTime, setSleepTime] = useState(8); // in Stunden
  const [prepTime, setPrepTime] = useState(1); // in Stunden

  // Zustand für den Anzeige-Text
  const [timeText, setTimeText] = useState("Zeit bis zur Klausur");

  useEffect(() => {
    const targetDate = new Date("2024-06-22T10:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeRemaining("Die Klausur hat begonnen!");
      } else {
        const totalHours = timeDifference / (1000 * 60 * 60);
        const availableHours = totalHours - sleepTime - prepTime;

        const hours = Math.floor((availableHours % 24));
        const minutes = Math.floor((availableHours * 60) % 60);
        const seconds = Math.floor((availableHours * 3600) % 60);

        setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sleepTime, prepTime]);

  useEffect(() => {
    if (sleepTime > 0 || prepTime > 0) {
      setTimeText("Noch verfügbare Lernzeit");
    } else {
      setTimeText("Zeit bis zur Klausur");
    }
  }, [sleepTime, prepTime]);

  // Funktion zum Aktualisieren des To-Do-Status
  const handleToggle = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <main className="flex flex-col items-center min-h-screen gap-4 py-20 bg-[#cdcfcd] text-white w-full">
      <div className="max-w-3xl w-[95vw] p-4 bg-[#303830] rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Mathe-Klausurvorbereitung</h1>
        <div className="mb-4 text-start text-lg font-semibold text-green-500">
          {timeText}: {timeRemaining}
        </div>
      
        <ul className="space-y-2 ">
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center ">
              <div className="w-[15%] text-start mr-4">
                <p className="text-sm text-[#cdcfcd]">{todo.time}</p>
              </div>
              <button
                className={`mr-2 p-2 rounded-full flex items-center justify-center hyphens-auto ${
                  todo.completed ? "bg-green-500 text-white" : "bg-gray-300"
                }`}
                style={{ width: "30px", height: "30px" }} // Hier die Größe anpassen
                onClick={() => handleToggle(todo.id)}
              >
                {todo.completed && <Check size={20} />} {/* Größe des abgehakten Symbols anpassen */}
              </button>
              <p className={todo.completed ? "line-through w-[85%] " : "w-[85%]"}>{todo.task}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-3xl w-[95vw] p-4 bg-[#303830] rounded-lg shadow-lg">
        <div className="mb-4 text-start text-lg font-semibold text-[#cdcfcd]">
          <label htmlFor="sleepTime">Schlafenszeit (Stunden): </label>
          <input
            type="number"
            id="sleepTime"
            value={sleepTime}
            onChange={(e) => setSleepTime(Number(e.target.value))}
            className="ml-2 p-1 text-[#303830] bg-[#cdcfcd]"
          />
        </div>
        <div className="mb-4 text-start text-lg font-semibold text-[#cdcfcd]">
          <label htmlFor="prepTime">Zeit für Weg und Vorbereitung (Stunden): </label>
          <input
            type="number"
            id="prepTime"
            value={prepTime}
            onChange={(e) => setPrepTime(Number(e.target.value))}
            className="ml-2 p-1 text-[#303830] bg-[#cdcfcd]"
          />
        </div>
      </div>
    </main>
  );
}
