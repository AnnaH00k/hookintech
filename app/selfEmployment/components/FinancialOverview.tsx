"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Plus, Minus, Trash } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { FinancialEntry, ChartDataPoint } from "../types";
import { formatCurrency } from "../utils/formatters";
import { ProgressBar } from "./ProgressBar";
import { TransactionForm } from "./TransactionForm";
import { TransactionList } from "./TransactionList";
import { FinancialChart } from "./FinancialChart";

interface FinancialOverviewProps {
  financialData: FinancialEntry[];
  moneyGoal: number;
  onAddTransaction: (entry: FinancialEntry) => void;
  onDeleteTransaction: (index: number) => void;
}

export function FinancialOverview({ 
  financialData, 
  moneyGoal, 
  onAddTransaction, 
  onDeleteTransaction 
}: FinancialOverviewProps) {
  const [showForm, setShowForm] = useState(false);
  const [newEntry, setNewEntry] = useState<Partial<FinancialEntry>>({
    date: new Date().toISOString().split("T")[0],
    amount: 0,
    description: "",
    type: "income",
  });

  const totalBalance = financialData.reduce((acc, entry) => 
    entry.type === "income" ? acc + entry.amount : acc - entry.amount, 0);

  const chartData: ChartDataPoint[] = financialData
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .reduce((acc: ChartDataPoint[], entry) => {
      const lastBalance = acc.length > 0 ? acc[acc.length - 1].balance : 0;
      const change = entry.type === "income" ? entry.amount : -entry.amount;

      return [...acc, {
        date: entry.date,
        balance: lastBalance + change,
        ...(entry.type === "expense" ? { expense: entry.amount } : {}),
      }];
    }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.amount || !newEntry.description) return;

    onAddTransaction({
      date: newEntry.date || new Date().toISOString().split("T")[0],
      amount: Number(newEntry.amount),
      description: newEntry.description || "",
      type: newEntry.type || "income",
    });

    setNewEntry({
      date: new Date().toISOString().split("T")[0],
      amount: 0,
      description: "",
      type: "income",
    });
    setShowForm(false);
  };

  return (
    <section className="mb-12 bg-[#151C14] p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Financial Overview</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-[#2A3828] px-4 py-2 rounded hover:bg-[#3A4838]"
        >
          {showForm ? "Cancel" : "Add Transaction"}
        </button>
      </div>

      <ProgressBar 
        current={totalBalance} 
        goal={moneyGoal} 
      />

      {showForm && (
        <TransactionForm 
          entry={newEntry}
          onChange={setNewEntry}
          onSubmit={handleSubmit}
        />
      )}

      <TransactionList 
        transactions={financialData}
        onDelete={onDeleteTransaction}
      />

      <FinancialChart data={chartData} />
    </section>
  );
} 