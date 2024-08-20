"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import SubjectForm from "./components/SubjectForm";
import SubjectList from "./components/SubjectList";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import PomodoroTimer from "./components/PomodoroTimer";
import { ArrowCircleLeft, ArrowCircleRight, Clock, CloudArrowDown, ColumnsPlusRight, Download, FileArrowUp, Notebook, Trash } from "@phosphor-icons/react/dist/ssr";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Subject {
  id: number;
  name: string;
  examType: string[];
  examDate?: string;
  note?: number;
  passed?: boolean;
  passedNoNote?: boolean; // Add this to track subjects passed without a note
}

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface SubjectTasks {
  [subjectId: number]: Task[];
}

const MainLayout: React.FC = () => {
  const [showSubjects, setShowSubjects] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>(() => {
    const savedSubjects = Cookies.get("subjects");
    return savedSubjects ? JSON.parse(savedSubjects) : [];
  });
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState<number>(0);
  const [showSubjectAddition, setShowSubjectAddition] = useState(false);
  const [subjectTasks, setSubjectTasks] = useState<SubjectTasks>(() => {
    const savedTasks = Cookies.get("subjectTasks");
    return savedTasks ? JSON.parse(savedTasks) : {};
  });

  useEffect(() => {
    Cookies.set("subjects", JSON.stringify(subjects), { expires: 365 });
  }, [subjects]);

  useEffect(() => {
    Cookies.set("subjectTasks", JSON.stringify(subjectTasks), { expires: 365 });
  }, [subjectTasks]);

  const toggleSubjects = () => setShowSubjects(!showSubjects);
  const toggleSubjectAddition = () => setShowSubjectAddition(!showSubjectAddition);
  const toggleTimer = () => setShowTimer(!showTimer);

  const handleSubjectChange = (index: number) => {
    setSelectedSubject(subjects[index]);
    setSelectedSubjectIndex(index);
  };

  const countdownToExamDate = (examDate: string): string => {
    if (!examDate) return "No exam date set";

    const today = new Date();
    const examDateTime = new Date(examDate);
    const timeDiff = examDateTime.getTime() - today.getTime();

    if (timeDiff <= 0) return "Exam date has passed";

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d ${hours}h ${minutes}m until exam`;
  };

  const clearCookies = () => {
    Cookies.remove("subjects");
    Cookies.remove("subjectTasks");
    setSubjects([]);
    setSubjectTasks({});
    setSelectedSubject(null);
    setSelectedSubjectIndex(0);
  };

  const backupData = () => {
    const data = { subjects, subjectTasks };
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const funnyFileNames = ["Hooked0nStudys_StudyBuddyBackup.json", /*...more names...*/];
    const randomFileName = funnyFileNames[Math.floor(Math.random() * funnyFileNames.length)];
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = randomFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const restoreData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          if (data.subjects && data.subjectTasks) {
            setSubjects(data.subjects);
            setSubjectTasks(data.subjectTasks);
          } else {
            alert("Invalid backup file.");
          }
        } catch (error) {
          alert("Error reading backup file.");
        }
      };
      reader.readAsText(file);
    }
  };

  const calculateStatistics = () => {
    const totalSubjects = subjects.length;

    // Filter subjects based on completion and passed status
    const finishedSubjects = subjects.filter(subject => {
      const tasks = subjectTasks[subject.id] || [];
      return (subject.passed || subject.passedNoNote) || (tasks.length > 0 && tasks.every(task => task.completed));
    }).length;

    const openSubjects = totalSubjects - finishedSubjects;

    return { totalSubjects, openSubjects, finishedSubjects };
  };

  const { totalSubjects, openSubjects, finishedSubjects } = calculateStatistics();

  const chartData = {
    datasets: [
      {
        data: [openSubjects, finishedSubjects],
        backgroundColor: ["#303830", "#4CAF50"],
        borderWidth: 0,
        label:`Open: ${openSubjects} | Completed: ${finishedSubjects}`,
      },
    ],
  };

  const calculateAverageNote = () => {
    const validNotes = subjects.filter(subject => subject.note !== undefined && subject.passed && !subject.passedNoNote);
    if (validNotes.length === 0) return null;

    const total = validNotes.reduce((sum, subject) => sum + (subject.note || 0), 0);
    return total / validNotes.length;
  };

  const averageNote = calculateAverageNote();

  return (
    <main className="flex flex-col items-center min-h-screen gap-4 py-10 sm:py-20 bg-background text-text w-full">
      <h1 className="text-2xl text-text font-bold text-center">
        {!selectedSubject ? "Welcome to Hooked0nStudys" : selectedSubject.name}
      </h1>

      {/* Statistics and Pie Chart */}
      <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl gap-4">
        <div className="flex flex-col items-center p-4 bg-green-700 text-white rounded-lg shadow-md ">
          <p>{`Open: ${openSubjects} | Completed: ${finishedSubjects}`}</p>
        </div>
        <div className="w-[20vh]">
          <Pie data={chartData} />
        </div>
        <div className="flex items-center justify-center p-4 bg-green-700 text-white rounded-lg shadow-md">
          {averageNote !== null ? (
            <p>{`Average Note: ${averageNote.toFixed(2)}`}</p>
          ) : (
            <p>No notes available for calculation</p>
          )}
        </div>
      </div>

      {selectedSubject && (
        <section className="max-w-4xl w-full p-4 bg-[#303830] rounded-lg shadow-lg mt-4">
          <div className="flex items-center justify-center">
            <button
              onClick={() => handleSubjectChange(selectedSubjectIndex > 0 ? selectedSubjectIndex - 1 : subjects.length - 1)}
              className="bg-[#303830] text-[#cdcfcd] rounded-lg px-4 py-1"
            >
              <ArrowCircleLeft size={32} />
            </button>
            <div className="flex flex-col items-center mx-4">
              <h2 className="text-lg text-center font-bold">{selectedSubject.name}</h2>
              <div>{countdownToExamDate(selectedSubject.examDate || "")}</div>
            </div>
            <button
              onClick={() => handleSubjectChange(selectedSubjectIndex < subjects.length - 1 ? selectedSubjectIndex + 1 : 0)}
              className="bg-[#303830] text-[#cdcfcd] rounded-lg px-4 py-1"
            >
              <ArrowCircleRight size={32} />
            </button>
          </div>
          <TaskForm selectedSubject={selectedSubject} subjectTasks={subjectTasks} setSubjectTasks={setSubjectTasks} />
          <TaskList selectedSubject={selectedSubject} subjectTasks={subjectTasks} setSubjectTasks={setSubjectTasks} />
        </section>
      )}

      <section className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-4">
        <div className="flex items-center justify-center flex-wrap gap-2">
          <button
            onClick={toggleSubjects}
            className={`text-md text-white text-center rounded-lg px-3 py-2 ${showSubjects ? "bg-green-900" : "bg-[#303830]"}`}
          >
            <Notebook size={32} weight="light" />
            <p>Subjects</p>
          </button>
          <button
            onClick={toggleSubjectAddition}
            className={`text-md text-white text-center rounded-lg px-3 py-2 ${showSubjectAddition ? "bg-green-900" : "bg-[#303830]"}`}
          >
            <ColumnsPlusRight size={32} weight="light" /> 
            <p>Add subject</p>
          </button>
          <button
            onClick={toggleTimer}
            className={`text-md text-white text-center rounded-lg px-3 py-2 ${showTimer ? "bg-green-900" : "bg-[#303830]"}`}
          >
            <Clock size={32} weight="light" />
            <p>Pomodoro</p>
          </button>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2 m-4 sm:fixed bottom-4 right-4">
          <button
            onClick={clearCookies}
            className="flex flex-row items-center justify-center text-md text-rose-200 text-center bg-red-900 rounded-lg px-3 py-2"
          >
            <Trash size={32} weight="light" /> All 
          </button>
          <button
            onClick={backupData}
            className="text-md text-white text-center bg-blue-900 rounded-lg px-3 py-2"
          >
            <Download size={32} />
          </button>
          <label className="text-md text-white text-center bg-blue-900 rounded-lg px-3 py-2 cursor-pointer">
            <FileArrowUp size={32} />
            <input
              type="file"
              accept=".json"
              onChange={restoreData}
              className="hidden"
            />
          </label>
        </div>
      </section>

      {showSubjects && (
        <SubjectList
          subjects={subjects}
          setSelectedSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
          setSubjects={setSubjects}
          subjectTasks={subjectTasks}
          setSubjectTasks={setSubjectTasks}
        />
      )}

      {showSubjectAddition && (
        <SubjectForm
          subjects={subjects}
          setSubjects={setSubjects}
          subjectTasks={subjectTasks}
          setSubjectTasks={setSubjectTasks}
        />
      )}

      {showTimer && <PomodoroTimer />}
    </main>
  );
};

export default MainLayout;
