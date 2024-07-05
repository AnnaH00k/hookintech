"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import SubjectForm from "./components/SubjectForm";
import SubjectList from "./components/SubjectList";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import PomodoroTimer from "./components/PomodoroTimer";
import { ArrowCircleLeft, ArrowCircleRight, Clock, ColumnsPlusRight, Notebook } from "@phosphor-icons/react/dist/ssr";

interface Subject {
  id: number;
  name: string;
  examType: string[];
  examDate: string;
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
    Cookies.set("subjects", JSON.stringify(subjects), { expires: 7 });
  }, [subjects]);

  useEffect(() => {
    Cookies.set("subjectTasks", JSON.stringify(subjectTasks), { expires: 7 });
  }, [subjectTasks]);

  const toggleSubjects = () => {
    setShowSubjects(!showSubjects);
  };

  const toggleSubjectAddition = () => {
    setShowSubjectAddition(!showSubjectAddition);
  };

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };

  const handleSubjectChange = (index: number) => {
    setSelectedSubject(subjects[index]);
    setSelectedSubjectIndex(index);
  };

  const countdownToExamDate = (examDate: string): string => {
    if (!examDate) {
      return "No exam date set";
    }

    const today = new Date();
    const examDateTime = new Date(examDate);
    const timeDiff = examDateTime.getTime() - today.getTime();

    if (timeDiff <= 0) {
      return "Exam date has passed";
    }

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

  return (
    <main className="flex flex-col items-center min-h-screen gap-4 py-20 bg-[#cdcfcd] text-[#cdcfcd] w-full">
      {!selectedSubject && (
        <h1 className="text-2xl text-[#303830] font-bold">Welcome to Hooked0nStudys</h1>
      )}

      {selectedSubject && (
        <section className="max-w-3xl w-[95vw] p-4 bg-[#303830] rounded-lg shadow-lg">
          <div className="flex flex-row w-full items-center justify-center">
            <button
              onClick={() => handleSubjectChange(selectedSubjectIndex > 0 ? selectedSubjectIndex - 1 : subjects.length - 1)}
              className="bg-[#303830] text-[#cdcfcd] rounded-lg px-4 py-1"
            >
              <ArrowCircleLeft size={32} />
            </button>
            <div className="flex flex-col items-center justify-center mb-4">
              <h2 className="text-lg text-center font-bold">{selectedSubject.name}</h2>
              <div>{countdownToExamDate(selectedSubject.examDate)}</div>
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

      <section className="max-w-3xl flex items-center justify-center w-[95vw]">
        <button
          onClick={toggleSubjects}
          className={`sm:text-lg m-2 text-md text-white text-center rounded-lg px-3 py-1 ${showSubjects ? "bg-green-900" : "bg-[#303830]"}`}
        >
          <Notebook size={32} weight="light" />
        </button>
        <button
          onClick={toggleSubjectAddition}
          className={`sm:text-lg m-2 text-md text-white text-center rounded-lg px-3 py-1 ${showSubjectAddition ? "bg-green-900" : "bg-[#303830]"}`}
        >
          <ColumnsPlusRight size={32} weight="light" />
        </button>
        <button
          onClick={toggleTimer}
          className={`sm:text-lg m-2 text-md text-white text-center rounded-lg px-3 py-1 ${showTimer ? "bg-green-900" : "bg-[#303830]"}`}
        >
          <Clock size={32} weight="light" />
        </button>
        <button
          onClick={clearCookies}
          className="sm:text-lg m-2 text-md text-rose-200 text-center bg-red-900 rounded-lg px-3 py-1"
        >
          Clear All Data
        </button>
      </section>

      {showSubjects && (
        <SubjectList
          subjects={subjects || []} // Ensure subjects is an array
          setSelectedSubject={setSelectedSubject}
          selectedSubject={selectedSubject}
          setSubjects={setSubjects}
          subjectTasks={subjectTasks}
          setSubjectTasks={setSubjectTasks}
        />
      )}
      {showSubjectAddition && (
        <SubjectForm
          subjects={subjects || []} // Ensure subjects is an array
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
