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
  passedNoNote?: boolean; 
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
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState<number>(0);
  const [showSubjectAddition, setShowSubjectAddition] = useState(false);


  const [subjects, setSubjects] = useState<Subject[]>(() => {
    const savedSubjects = Cookies.get("subjects");
    return savedSubjects ? JSON.parse(savedSubjects) : [];
  });
  
  const [subjectTasks, setSubjectTasks] = useState<SubjectTasks>(() => {
    const savedTasks = Cookies.get("subjectTasks");
    return savedTasks ? JSON.parse(savedTasks) : {};
  });
  
  const [studysEnd, setStudysEnd] = useState<string>(() => {
    const savedStudysEnd = Cookies.get("studysEnd");
    return savedStudysEnd ? JSON.parse(savedStudysEnd) : "";
  });
  
  
  useEffect(() => {
    console.log("Reading cookies on mount:");
    console.log("Subjects:", Cookies.get("subjects"));
    console.log("SubjectTasks:", Cookies.get("subjectTasks"));
    console.log("StudysEnd:", Cookies.get("studysEnd"));
  
    const savedSubjects = Cookies.get("subjects");
    const savedTasks = Cookies.get("subjectTasks");
    const savedStudysEnd = Cookies.get("studysEnd");
  
    if (savedSubjects) setSubjects(JSON.parse(savedSubjects));
    if (savedTasks) setSubjectTasks(JSON.parse(savedTasks));
    if (savedStudysEnd) setStudysEnd(JSON.parse(savedStudysEnd));
  }, []);
  

  useEffect(() => {
    Cookies.set("subjects", JSON.stringify(subjects), { expires: 365 });
  }, [subjects]);

  useEffect(() => {
    Cookies.set("subjectTasks", JSON.stringify(subjectTasks), { expires: 365 });
  }, [subjectTasks]);

  useEffect(() => {
    Cookies.set("studysEnd", JSON.stringify(studysEnd), { expires: 365 });
  }, [studysEnd]);







  
  


  

  const toggleSubjects = () => setShowSubjects(!showSubjects);
  const toggleSubjectAddition = () => setShowSubjectAddition(!showSubjectAddition);
  const toggleTimer = () => setShowTimer(!showTimer);

  const handleSubjectChange = (index: number) => {
    // Find the next non-passed subject index when moving forward
    const findNextNonPassedIndex = (startIndex: number, direction: 1 | -1) => {
      let nextIndex = startIndex;
      const step = direction === 1 ? 1 : -1;
      
      do {
        nextIndex = (nextIndex + step + subjects.length) % subjects.length;
      } while (subjects[nextIndex].passed && nextIndex !== startIndex);
      
      return nextIndex;
    };
  
    // Find the next non-passed subject index based on the direction
    const nextIndex = findNextNonPassedIndex(index, 1);
    const prevIndex = findNextNonPassedIndex(index, -1);
  
    if (nextIndex !== index) {
      setSelectedSubject(subjects[nextIndex]);
      setSelectedSubjectIndex(nextIndex);
    } else {
      // Optionally handle case where no non-passed subjects are available
      alert("No more non-passed subjects available.");
    }
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
    Cookies.remove("studysEnd");
    setSubjects([]);
    setSubjectTasks({});
    setStudysEnd("");
    setSelectedSubject(null);
    setSelectedSubjectIndex(0);
  };

  const backupData = () => {
    const data = { 
      subjects, 
      subjectTasks, 
      studysEnd 
    };
    const dataStr = JSON.stringify(data, null, 2);
    const funnyFileNames = [
      "Hooked0nStudys_StudyBuddyBackup.json",
      "Hooked0nStudys_ProcrastinationStation.json",
      "Hooked0nStudys_BrainBingeBackup.json",
      "Hooked0nStudys_StressLessJson.json",
      "Hooked0nStudys_HomeworkHero.json",
      "Hooked0nStudys_CaffeineCraze.json",
      "Hooked0nStudys_QuizWhizBackup.json",
      "Hooked0nStudys_NotesNook.json",
      "Hooked0nStudys_PencilPanic.json",
      "Hooked0nStudys_AcademicAbyss.json",
      "Hooked0nStudys_BrainBurst.json",
      "Hooked0nStudys_StudySnack.json",
      "Hooked0nStudys_HomeworkHoard.json",
      "Hooked0nStudys_ScholarSquad.json",
      "Hooked0nStudys_NapTimeNotes.json",
      "Hooked0nStudys_StressSnooze.json",
      "Hooked0nStudys_BookwormWonders.json",
      "Hooked0nStudys_FocusFrenzy.json",
      "Hooked0onStudys_SmartSnack.json",
      "Hooked0nStudys_GigaStudy.json",
      "Hooked0nStudys_SleepDeprived.json",
      "Hooked0nStudys_PaperPanic.json",
      "Hooked0nStudys_TeaTimeBackup.json",
      "Hooked0nStudys_SnoozeButton.json",
      "Hooked0nStudys_StudySpree.json",
      "Hooked0nStudys_CramSession.json",
      "Hooked0nStudys_DreamChaser.json",
      "Hooked0nStudys_MidnightMirth.json",
      "Hooked0nStudys_StudySnooze.json",
      "Hooked0nStudys_TiredTales.json",
      "Hooked0onStudys_FuelForFocus.json",
      "Hooked0nStudys_SleepyScholar.json",
      "Hooked0nStudys_PaperTrail.json",
      "Hooked0nStudys_BookBinge.json",
      "Hooked0nStudys_FunWithFiles.json",
      "Hooked0nStudys_BrainyBackup.json",
      "Hooked0nStudys_SmartStart.json",
      "Hooked0nStudys_PowerUp.json",
      "Hooked0nStudys_StudySaga.json",
      "Hooked0nStudys_DeadlineDash.json",
      "Hooked0nStudys_NoteNest.json",
      "Hooked0nStudys_FocusFuel.json"
    ];
    
    const randomFileName = funnyFileNames[Math.floor(Math.random() * funnyFileNames.length)];
    const blob = new Blob([dataStr], { type: "application/json" });
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
          clearCookies(); // Clear existing cookies before setting new data
          const result = e.target?.result;
          if (typeof result === 'string') {
            const data = JSON.parse(result);
            
            if (data.subjects && data.subjectTasks) {
              console.log("Restoring data:", data); // Log data being restored
              
              setSubjects(data.subjects || []);
              setSubjectTasks(data.subjectTasks || {});
              setStudysEnd(data.studysEnd || ""); // Default to empty string if undefined
              
              // Set cookies
            Cookies.set("subjects", JSON.stringify(data.subjects || []), { expires: 365 });
            Cookies.set("subjectTasks", JSON.stringify(data.subjectTasks || {}), { expires: 365 });
            Cookies.set("studysEnd", JSON.stringify(data.studysEnd || ""), { expires: 365 });
          } else {
            alert("Invalid backup file. Missing required data.");
          }
        } else {
          alert("Error reading backup file. File content is not a string.");
        }
      } catch (error) {
        console.error("Error reading or parsing backup file:", error);
        alert("Error reading backup file.");
      }
    };
      
      reader.onerror = () => {
        alert("Error reading file.");
      };
      
      reader.readAsText(file);
    } else {
      alert("No file selected.");
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

  const calculateMinSubjectTime = (): string => {
    if (subjects.length === 0) return "No subjects available";
  
    const today = new Date();
    const bachelorSubjects = subjects.filter(subject => subject.name.toLowerCase().includes("bachelor"));
    const nonPassedSubjects = subjects.filter(subject => !subject.passed && !subject.passedNoNote);
  
    let minDate = new Date(today);
  
    // Add 6 months for bachelor subjects
    if (bachelorSubjects.length > 0) {
      minDate.setMonth(minDate.getMonth() + 6);
    }
  
    // Add 7 days for each non-passed subject
    if (nonPassedSubjects.length > 0) {
      minDate.setDate(minDate.getDate() + 7 * nonPassedSubjects.length);
    }
  
    // Format date
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return `${minDate.toLocaleDateString(undefined, options)}`;
  };
  

  const calculateMaxSubjectTime = (): string => {
    if (subjects.length === 0 || !studysEnd) return "No subjects available or study end date not set";
  
    const today = new Date();
    const studyEndDate = new Date(studysEnd);
    
    // Calculate the total available time in milliseconds
    const totalAvailableTime = studyEndDate.getTime() - today.getTime();
  
    // Filter subjects based on bachelor and non-passed status
    const bachelorSubjects = subjects.filter(subject => subject.name.toLowerCase().includes("bachelor"));
    const nonPassedSubjects = subjects.filter(subject => !subject.passed && !subject.passedNoNote);
  
    // Calculate time allocated to bachelor subjects
    const bachelorTimeAllocation = bachelorSubjects.length * 6 * 30 * 24 * 60 * 60 * 1000; // 6 months per bachelor subject
  
    // Calculate remaining time after allocating time for bachelor subjects
    const remainingTime = totalAvailableTime - bachelorTimeAllocation;
  
    // Calculate average time per non-passed subject
    let averageTimePerSubject = "No non-passed subjects available";
    if (nonPassedSubjects.length > 0) {
      const averageTimeMs = remainingTime / nonPassedSubjects.length;
      const averageTimeDays = averageTimeMs / (1000 * 60 * 60 * 24); // Convert milliseconds to days
      averageTimePerSubject = `${averageTimeDays.toFixed(2)} days`;
    }
  
    return averageTimePerSubject;
  };
  
  const averageMinSubjectTime = calculateMinSubjectTime();
  const averageMaxSubjectTime = calculateMaxSubjectTime();

  return (
    <main className="flex flex-col items-center min-h-screen gap-4 py-10 sm:py-20 bg-background text-text w-full">
      <h1 className="text-2xl text-text font-bold text-center">
        { "Welcome to Hooked0nStudys" }
      </h1>
      <a className="flex rounded-full p-2 bg-green-900 shadow-md shadow-text" href="/hooked0nstudys/firebaseTest">Log in</a>

      {/* Statistics and Pie Chart */}
      <div className="flex flex-col md:flex-col justify-around items-center w-full max-w-4xl gap-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

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


      <div className="flex flex-col text-center items-center justify-center gap-4">
          <div>
            <p  className="block text-[#cdcfcd] text-sm font-bold mb-2">
              Studys End:
            </p>
            <input
              className="border-1 ml-2 bg-[#303830] border-gray-300 rounded-lg p-2"
              type="date"
              id="studysEnd"
              name="studysEnd"
              value={studysEnd}
              onChange={(e) => setStudysEnd(e.target.value)}
              />
          </div>

            <div className="flex flex-row gap-4">

                <div className="flex flex-col">
                <p className="block text-[#cdcfcd] text-sm font-bold mb-2">Quickest date to fisish:</p>
                <div className="flex items-center justify-center gap-4 p-4 bg-[#303830] text-white rounded-lg shadow-md">
                  <p> {averageMinSubjectTime}</p>
                </div>
                </div>

                <div className="flex flex-col">
                <p className="block text-[#cdcfcd] text-sm font-bold mb-2">Average time per subject:</p>
                <div className="flex items-center justify-center gap-4 p-4 bg-[#303830] text-white rounded-lg shadow-md">
                <p> {averageMaxSubjectTime}</p>
                </div>
                </div>
            </div>

          </div>
      </div>

      {selectedSubject && (
        <section className="max-w-4xl w-full p-4 bg-[#303830] rounded-lg shadow-lg mt-4">
          <div className="flex w-full items-center justify-between">
          <button
            onClick={() => handleSubjectChange(selectedSubjectIndex)}
            className="bg-[#303830] text-[#cdcfcd] rounded-lg px-4 py-1"
          >
            <ArrowCircleLeft size={32} />
          </button>
            <div className="flex flex-col items-center mx-4">
              <h2 className="text-lg text-center font-bold">{selectedSubject.name}</h2>
              <div>{countdownToExamDate(selectedSubject.examDate || "")}</div>
            </div>
            <button
              onClick={() => handleSubjectChange(selectedSubjectIndex)}
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
