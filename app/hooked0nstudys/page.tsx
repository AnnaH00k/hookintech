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
    Cookies.set("subjects", JSON.stringify(subjects), { expires: 365 });
  }, [subjects]);

  useEffect(() => {
    Cookies.set("subjectTasks", JSON.stringify(subjectTasks), { expires: 365 });
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

  const backupData = () => {
    const data = {
      subjects,
      subjectTasks,
    };
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
  
    // Generate a random funny file name
  // Array of 40 funny file names
  const funnyFileNames = [
    "Hooked0nStudys_StudyBuddyBackup.json",
    "Hooked0nStudys_TodoOrNotTodo.json",
    "Hooked0nStudys_ExamPanicPack.json",
    "Hooked0nStudys_HomeworkHoard.json",
    "Hooked0nStudys_NotesNonsense.json",
    "Hooked0nStudys_TaskTamer.json",
    "Hooked0nStudys_ProcrastinationProof.json",
    "Hooked0nStudys_SaveMyGrades.json",
    "Hooked0nStudys_BrainDumpBackup.json",
    "Hooked0nStudys_StudySavior.json",
    "Hooked0nStudys_CramSessionCache.json",
    "Hooked0nStudys_AssignmentArchive.json",
    "Hooked0nStudys_AcedItBackup.json",
    "Hooked0nStudys_StudyStash.json",
    "Hooked0nStudys_TestTamer.json",
    "Hooked0nStudys_AcademicArmory.json",
    "Hooked0nStudys_HomeworkHoarder.json",
    "Hooked0nStudys_GradeSaver.json",
    "Hooked0nStudys_TaskTrackerBackup.json",
    "Hooked0nStudys_SyllabusStash.json",
    "Hooked0nStudys_LectureLifeline.json",
    "Hooked0nStudys_TestTsunami.json",
    "Hooked0nStudys_DeadlineDodge.json",
    "Hooked0nStudys_MindMapBackup.json",
    "Hooked0nStudys_StudySurvivalKit.json",
    "Hooked0nStudys_AssignmentAssistant.json",
    "Hooked0nStudys_StudySanitySaver.json",
    "Hooked0nStudys_NoteNinja.json",
    "Hooked0nStudys_TaskTerminator.json",
    "Hooked0nStudys_CramCompanion.json",
    "Hooked0nStudys_ExamEscapePlan.json",
    "Hooked0nStudys_HomeworkHero.json",
    "Hooked0nStudys_TaskTitan.json",
    "Hooked0nStudys_StudySuperhero.json",
    "Hooked0nStudys_AcademicAegis.json",
    "Hooked0nStudys_QuizQuest.json",
    "Hooked0nStudys_StudyShield.json",
    "Hooked0nStudys_AssignmentAegis.json",
    "Hooked0nStudys_GradeGuard.json",
    "Hooked0nStudys_BrainBoostBackup.json"
  ];

  
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

  return (
    <main className="flex flex-col items-center min-h-screen gap-4 py-20 bg-background text-text w-full">
      {!selectedSubject && (
        <h1 className="text-2xl text-text font-bold">Welcome to Hooked0nStudys</h1>
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
        <button
          onClick={backupData}
          className="sm:text-lg m-2 text-md text-white text-center bg-blue-900 rounded-lg px-3 py-1"
        >
          Backup Data
        </button>
        <label className="sm:text-lg m-2 text-md text-white text-center bg-blue-900 rounded-lg px-3 py-1 cursor-pointer">
          Restore Data
          <input type="file" accept=".json" onChange={restoreData} className="hidden" />
        </label>
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
