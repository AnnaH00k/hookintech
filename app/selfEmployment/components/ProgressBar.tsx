"use client";

interface ProgressBarProps {
  current: number;
  goal: number;
}

export function ProgressBar({ current, goal }: ProgressBarProps) {
  const percentage = Math.min(100, (current / goal) * 100);
  const remaining = Math.max(0, goal - current);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <p className="text-xl">
          Gesamtvermögen: €
          {current.toLocaleString("de-DE", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-xl">
          Goal: €{goal.toLocaleString("de-DE", { minimumFractionDigits: 2 })}
        </p>
      </div>
      <div className="w-full h-4 bg-[#1A2310] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-right mt-1 text-sm">
        Progress: {percentage.toFixed(1)}%
      </p>
      <p className="text-right text-sm text-gray-400">
        Remaining: €
        {remaining.toLocaleString("de-DE", { minimumFractionDigits: 2 })}
      </p>
    </div>
  );
} 