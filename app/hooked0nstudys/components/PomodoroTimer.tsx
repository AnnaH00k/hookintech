'use client';
import { ArrowCounterClockwise, Play, Stop } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";
import Draggable from 'react-draggable';

const PomodoroTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Default pomodoro time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [currentSession, setCurrentSession] = useState("Work");
  const [pomodoroSettings, setPomodoroSettings] = useState({
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [isSessionEnded, setIsSessionEnded] = useState(false); // For blinking effect
  const [showTimer, setShowTimer] = useState(true); // To control visibility of the timer
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
      setIsSessionEnded(false); // Reset blinking effect if restarting
      timerIdRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerIdRef.current!);
            setIsRunning(false);
            setIsSessionEnded(true); // Trigger blinking effect
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
    setIsSessionEnded(false);
    setTimeLeft(pomodoroSettings.work * 60);
    setCurrentSession("Work");
  };

  const handleContinue = () => {
    switchSession();
    setIsSessionEnded(false); // Stop blinking after continuing
    handleStartTimer(); // Automatically start the next session
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
      <style jsx>{`
        .blinking {
          animation: blinker 1s linear infinite;
        }
        @keyframes blinker {
          50% { background-color: #425C42; } /* Gold color */
        }
      `}</style>
      {showTimer && (
        <Draggable >
          <section
            className={`fixed self-center top-[12vh] p-4 bg-lighterBackground max-w-sm rounded-lg shadow-sm shadow-text resize overflow-auto ${
              isSessionEnded ? 'blinking' : ''
            }`}
          >
            <div className="cursor-move">
              {!isRunning && (
                <h2 className="text-xl font-bold mb-4">Pomodoro Timer</h2>
              )}
              
              <div className="flex flex-col items-center mb-4">
                {isRunning ? (
                  <p className="text-lg font-bold mb-2">Currently in {currentSession} session</p>
                ) : isSessionEnded ? (
                  <button
                    onClick={handleContinue}
                    className="bg-yellow-700 hover:bg-yellow-600 text-white mb-2 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  >
                    Continue to {currentSession === "Work" ? "Short Break" : currentSession === "Short Break" ? "Long Break" : "Work"}
                  </button>
                ) : (
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="block text-text text-sm font-bold">
                      Work:
                      <input
                        type="number"
                        name="work"
                        value={pomodoroSettings.work}
                        onChange={handlePomodoroChange}
                        className="shadow appearance-none rounded w-full py-2 px-3 bg-text text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                    <div className="flex gap-2">
                      <label className="block text-text text-sm font-bold">
                        Short Break:
                        <input
                          type="number"
                          name="shortBreak"
                          value={pomodoroSettings.shortBreak}
                          onChange={handlePomodoroChange}
                          className="shadow appearance-none rounded w-full bg-text py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </label>
                      <label className="block text-[#cdcfcd] text-sm font-bold">
                        Long Break:
                        <input
                          type="number"
                          name="longBreak"
                          value={pomodoroSettings.longBreak}
                          onChange={handlePomodoroChange}
                          className="shadow appearance-none rounded bg-text w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </label>
                    </div>
                  </div>
                )}

                <div className="text-4xl font-bold mb-4">{formatTime(timeLeft)}</div>

                {/* Conditionally render the three green buttons only when not in blinking mode */}
                {!isSessionEnded && (
                  <div className="flex gap-2">
                    <button
                      onClick={handleStartTimer}
                      className="bg-greeny hover:bg-green-900 text-text font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    >
                      <Play size={24} />
                    </button>
                    <button
                      onClick={handleStopTimer}
                      className="bg-greeny hover:bg-green-900 text-text font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    >
                      <Stop size={24} />
                    </button>
                    <button
                      onClick={handleResetTimer}
                      className="bg-greeny hover:bg-green-900 text-text font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    >
                      <ArrowCounterClockwise size={24} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </Draggable>
      )}
    </>
  );
};

export default PomodoroTimer;
