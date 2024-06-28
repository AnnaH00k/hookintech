"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Check, Clock, Notebook, Pencil, FileText, Trash } from "@phosphor-icons/react";
import { Play } from "@phosphor-icons/react/dist/ssr/Play";
import { ArrowCounterClockwise, Stop } from "@phosphor-icons/react/dist/ssr";


interface Subject {
  id: number;
  name: string;
  examType: string[];
  examDate?: string;
}

interface SubjectTasks {
  [subjectId: number]: { id: number; task: string; completed: boolean }[];
}

export default function Hooked0nStudys() {
  const [showSubjects, setShowSubjects] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const [subjects, setSubjects] = useState<Subject[]>(() => {
    const savedSubjects = Cookies.get("subjects");
    return savedSubjects ? JSON.parse(savedSubjects) : [];
  });
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [subjectTasks, setSubjectTasks] = useState<SubjectTasks>(() => {
    const savedTasks = Cookies.get("subjectTasks");
    return savedTasks ? JSON.parse(savedTasks) : {};
  });

  const [pomodoroSettings, setPomodoroSettings] = useState({
    work: 50,
    shortBreak: 10,
    longBreak: 20,
  });
  const [timer, setTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(pomodoroSettings.work * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [currentSession, setCurrentSession] = useState<"work" | "shortBreak" | "longBreak">("work");

  useEffect(() => {
    Cookies.set("subjects", JSON.stringify(subjects), { expires: 7 });
  }, [subjects]);

  useEffect(() => {
    Cookies.set("subjectTasks", JSON.stringify(subjectTasks), { expires: 7 });
  }, [subjectTasks]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timeLeft === 0) {
      switch (currentSession) {
        case "work":
          // Transition to short break
          setCurrentSession("shortBreak");
          setTimeLeft(pomodoroSettings.shortBreak * 60);
          setIsRunning(true); // Start short break immediately
          break;
        case "shortBreak":
          setCurrentSession("work");
          setTimeLeft(pomodoroSettings.work * 60);
          setIsRunning(true); // Start work immediately
          break;
        case "longBreak":
          setCurrentSession("work");
          setTimeLeft(pomodoroSettings.work * 60);
          setIsRunning(true); // Start work immediately
          break;
        default:
          setIsRunning(false);
      }
    }
  }, [isRunning, timeLeft, currentSession, pomodoroSettings]);
  

  const toggleSubjects = () => {
    setShowSubjects(!showSubjects);
  };
  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };

  const handleSubjectSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const courseName = formData.get("courseName") as string;
    const examType = formData.getAll("examType") as string[];
    const examDate = formData.get("examDate") as string;
    
    if (courseName && examType.length > 0) {
      const newSubject: Subject = {
        id: subjects.length + 1,
        name: courseName,
        examType,
        examDate,
      };
      setSubjects([...subjects, newSubject]);
      setSubjectTasks({ ...subjectTasks, [newSubject.id]: [] });
      e.currentTarget.reset();
    }
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task = (e.currentTarget.elements as any).task.value;
    if (task && selectedSubject) {
      setSubjectTasks({
        ...subjectTasks,
        [selectedSubject.id]: [
          ...subjectTasks[selectedSubject.id],
          { id: subjectTasks[selectedSubject.id].length + 1, task, completed: false }
        ]
      });
      e.currentTarget.reset();
    }
  };

  const handleTaskToggle = (subjectId: number, taskId: number) => {
    const updatedTasks = subjectTasks[subjectId].map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setSubjectTasks({ ...subjectTasks, [subjectId]: updatedTasks });
  };

  const handleDeleteTask = (subjectId: number, taskId: number) => {
    const updatedTasks = subjectTasks[subjectId].filter(task => task.id !== taskId);
    setSubjectTasks({ ...subjectTasks, [subjectId]: updatedTasks });
  };

  const handleDeleteSubject = (subjectId: number) => {
    const updatedSubjects = subjects.filter(subject => subject.id !== subjectId);
    const updatedSubjectTasks = { ...subjectTasks };
    delete updatedSubjectTasks[subjectId];

    setSubjects(updatedSubjects);
    setSubjectTasks(updatedSubjectTasks);

    if (selectedSubject && selectedSubject.id === subjectId) {
      setSelectedSubject(null);
    }
  };

  const handlePomodoroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPomodoroSettings({ ...pomodoroSettings, [name]: Number(value) });
  };

  const handleStartTimer = () => {
    setIsRunning(true);
  };

  const handleStopTimer = () => {
    setIsRunning(false);
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setTimeLeft(pomodoroSettings[currentSession] * 60);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const calculateDaysLeft = (examDate: string | undefined) => {
    if (!examDate) return "No date set";
    const examDateObj = new Date(examDate);
    const currentDate = new Date();
    const timeDiff = examDateObj.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft > 0 ? `${daysLeft} days left` : "Exam date passed";
  };

  return (
    <main className="flex flex-col items-center min-h-screen gap-4 py-20 bg-[#cdcfcd] text-[#cdcfcd] w-full">
      {selectedSubject && (
        <section className="max-w-3xl w-[95vw] p-4 bg-[#303830] rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Tasks for {selectedSubject.name}</h2>
          <p className="mb-4">{calculateDaysLeft(selectedSubject.examDate)}</p>
          <form onSubmit={handleAddTask} className="flex mb-4">
            <input
              type="text"
              name="task"
              placeholder="Add new task"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Add Task
            </button>
          </form>
          <ul className="space-y-2">
            {subjectTasks[selectedSubject.id]?.map(task => (
              <li key={task.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    className={`mr-2 p-2 rounded-full flex items-center justify-center ${task.completed ? "bg-green-500 text-white" : "bg-[#cdcfcd]"}`}
                    style={{ width: "30px", height: "30px" }}
                    onClick={() => handleTaskToggle(selectedSubject.id, task.id)}
                  >
                    {task.completed && <Check size={20} />}
                  </button>
                  <p className={task.completed ? "line-through" : ""}>{task.task}</p>
                </div>
                <button
                  className="hover:scale-[120%] text-[#cdcfcd] font-bold py-1 px-2 rounded"
                  onClick={() => handleDeleteTask(selectedSubject.id, task.id)}
                >
                  <Trash size={20} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="max-w-3xl w-[95vw]">
        <button
          onClick={toggleSubjects}
          className={`sm:text-lg m-2 text-md text-white text-center rounded-lg px-3 py-1 ${showSubjects ? 'bg-green-900' : 'bg-[#303830]'}`}
        >
          <Notebook size={32} weight="light" />
        </button>
        <button
          onClick={toggleTimer}
          className={`sm:text-lg m-2 text-md text-white text-center rounded-lg px-3 py-1 ${showTimer ? 'bg-green-900' : 'bg-[#303830]'}`}
        >
          <Clock size={32} weight="light" />
        </button>
      </section>

      {showSubjects && (
        <section className={`max-w-3xl w-[95vw] p-4 bg-[#303830] rounded-lg shadow-lg transition-all duration-500 ease-in-out transform ${showSubjects ? 'opacity-100' : 'opacity-0'}`}>
          <form className="flex flex-col items-center justify-center" onSubmit={handleSubjectSubmit}>
            <div className="flex sm:flex-row flex-col items-center justify-center">
              <div className="sm:m-4 w-[50vw] min-w-[300px] max-w-[500px]">
                <label htmlFor="courseName" className="block text-[#cdcfcd] text-sm font-bold mb-2">
                  Course Name:
                </label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter the course name"
                />
              </div>
              <div className="m-4">
                <label htmlFor="courseType" className="block text-[#cdcfcd] text-sm font-bold mb-2">
                  Exam Type:
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="regularExam"
                    name="examType"
                    value="regular"
                    className="mr-2 leading-tight"
                  />
                  <label htmlFor="regularExam" className="text-[#cdcfcd] text-sm">
                    Regular Exam
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="writtenExam"
                    name="examType"
                    value="written"
                    className="mr-2 leading-tight"
                  />
                  <label htmlFor="writtenExam" className="text-[#cdcfcd] text-sm">
                    Submission
                  </label>
                </div>
              </div>
              </div>
              <div className="m-4">
                <label htmlFor="examDate" className="block text-[#cdcfcd] text-sm font-bold mb-2">
                  Exam Date:
                </label>
                <input
                  type="date"
                  id="examDate"
                  name="examDate"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
          <ul className="mt-4 space-y-2">
            {subjects.map(subject => (
              <li key={subject.id} className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedSubject(subject)}
                  className="flex items-center gap-2 bg-green-900 p-2 rounded text-white w-full"
                >
                  <span>{subject.name}</span>
                  {subject.examType.includes("regular") && <Pencil size={20} />}
                  {subject.examType.includes("written") && <FileText size={20} />}
                </button>
                <button
                  className=" text-[#cdcfcd] hover:scale-[120%] font-bold py-1 px-2 rounded"
                  onClick={() => handleDeleteSubject(subject.id)}
                >
                  <Trash size={20} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

{showTimer && (
      <section className="max-w-3xl w-[95vw] p-4 bg-[#303830] rounded-lg shadow-lg ">
        <h2 className="text-xl font-bold mb-4">Pomodoro Timer</h2>
        <div className="flex flex-col items-center mb-4">
          
          {isRunning ? (
            <p className="text-lg font-bold mb-2">Currently in {currentSession} session</p>
          ) : (
          <div className="flex gap-2 mb-4">
            <label className="block text-[#cdcfcd] text-sm font-bold">
              Work:
              <input
                type="number"
                name="work"
                value={pomodoroSettings.work}
                onChange={handlePomodoroChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#cdcfcd] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label className="block text-[#cdcfcd] text-sm font-bold">
              Short Break:
              <input
                type="number"
                name="shortBreak"
                value={pomodoroSettings.shortBreak}
                onChange={handlePomodoroChange}
                className="shadow appearance-none border rounded w-full bg-[#cdcfcd] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            <label className="block text-[#cdcfcd] text-sm font-bold">
              Long Break:
              <input
                type="number"
                name="longBreak"
                value={pomodoroSettings.longBreak}
                onChange={handlePomodoroChange}
                className="shadow appearance-none border rounded bg-[#cdcfcd] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
 )}


          <div className="text-4xl font-bold mb-4">{formatTime(timeLeft)}</div>
          <div className="flex gap-2">
            <button
              onClick={handleStartTimer}
              className={`bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline `}
            >
             <Play size={24} />
            </button>
            <button
              onClick={handleStopTimer}
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
            <Stop size={24} />
            </button>
            <button
              onClick={handleResetTimer}
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
            <ArrowCounterClockwise size={24} />
            </button>
          </div>
        </div>
      </section>
    )}
    </main>
  );
}
