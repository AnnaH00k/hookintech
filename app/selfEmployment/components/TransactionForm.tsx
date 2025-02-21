"use client";

import { Plus, Minus } from "@phosphor-icons/react/dist/ssr";
import { FinancialEntry } from "../types";

interface TransactionFormProps {
  entry: Partial<FinancialEntry>;
  onChange: (entry: Partial<FinancialEntry>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function TransactionForm({ entry, onChange, onSubmit }: TransactionFormProps) {
  return (
    <form onSubmit={onSubmit} className="mb-6 bg-[#1A2310] p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2">Date</label>
          <input
            type="date"
            value={entry.date}
            onChange={(e) => onChange({ ...entry, date: e.target.value })}
            className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0]"
          />
        </div>
        <div>
          <label className="block mb-2">Amount (€)</label>
          <input
            type="number"
            step="0.01"
            value={entry.amount}
            onChange={(e) => onChange({ ...entry, amount: parseFloat(e.target.value) })}
            className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0]"
          />
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <input
            type="text"
            value={entry.description}
            onChange={(e) => onChange({ ...entry, description: e.target.value })}
            className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0]"
          />
        </div>
        <div>
          <label className="block mb-2">Type</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={entry.type === "income"}
                onChange={() => onChange({ ...entry, type: "income" })}
                className="form-radio"
              />
              <Plus size={20} className="text-green-500" /> Income
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={entry.type === "expense"}
                onChange={() => onChange({ ...entry, type: "expense" })}
                className="form-radio"
              />
              <Minus size={20} className="text-red-500" /> Expense
            </label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#2A3828] px-4 py-2 rounded hover:bg-[#3A4838] w-full"
      >
        Add Transaction
      </button>
    </form>
  );
} 