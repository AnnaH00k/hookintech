"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartDataPoint } from "../types";

interface FinancialChartProps {
  data: ChartDataPoint[];
}

export function FinancialChart({ data }: FinancialChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-[300px] w-full" />;
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) => new Date(date).toLocaleDateString("de-DE")}
          />
          <YAxis />
          <Tooltip
            formatter={(value: number) =>
              `€${value.toLocaleString("de-DE", { minimumFractionDigits: 2 })}`
            }
            labelFormatter={(label) => new Date(label).toLocaleDateString("de-DE")}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#4ade80"
            name="Gesamtvermögen"
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            name="Ausgaben"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 