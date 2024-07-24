'use client';
import { ArrowCounterClockwise, Play, Stop } from "@phosphor-icons/react/dist/ssr";
import React, { useState, useEffect, useRef } from "react";


const PomodoroTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Default pomodoro time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [currentSession, setCurrentSession] = useState("Work");
  const [pomodoroSettings, setPomodoroSettings] = useState({
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [showTimer, setShowTimer] = useState(true);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handlePomodoroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPomodoroSettings({
      ...pomodoroSettings,
      [name]: Number(value),
    });
  };

  const handleStartTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerIdRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerIdRef.current!);
            setIsRunning(false);
            switchSession();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const handleStopTimer = () => {
    if (isRunning) {
      clearInterval(timerIdRef.current!);
      setIsRunning(false);
    }
  };

  const handleResetTimer = () => {
    clearInterval(timerIdRef.current!);
    setIsRunning(false);
    setTimeLeft(pomodoroSettings.work * 60);
    setCurrentSession("Work");
  };

  const switchSession = () => {
    if (currentSession === "Work") {
      setCurrentSession("Short Break");
      setTimeLeft(pomodoroSettings.shortBreak * 60);
    } else if (currentSession === "Short Break") {
      setCurrentSession("Long Break");
      setTimeLeft(pomodoroSettings.longBreak * 60);
    } else {
      setCurrentSession("Work");
      setTimeLeft(pomodoroSettings.work * 60);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timerIdRef.current!);
    };
  }, []);

  return (
    <>
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
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
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
    </>
  );
};

export default PomodoroTimer;
