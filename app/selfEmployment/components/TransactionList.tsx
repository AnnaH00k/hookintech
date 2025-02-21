"use client";

import { useState, useEffect } from "react";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { FinancialEntry } from "../types";

interface TransactionListProps {
  transactions: FinancialEntry[];
  onDelete: (index: number) => void;
}

export function TransactionList({ transactions, onDelete }: TransactionListProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="mb-6">Loading...</div>;
  }

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
      <div className="space-y-2">
        {transactions.slice().reverse().map((entry, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#1A2310] p-3 rounded group"
          >
            <div>
              <p className="font-semibold">{entry.description}</p>
              <p className="text-sm">
                {new Date(entry.date).toLocaleDateString("de-DE")}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`font-bold ${
                  entry.type === "income" ? "text-green-500" : "text-red-500"
                }`}
              >
                {entry.type === "income" ? "+" : "-"}€
                {entry.amount.toLocaleString("de-DE", {
                  minimumFractionDigits: 2,
                })}
              </div>
              <button
                onClick={() => onDelete(transactions.length - 1 - index)}
                className="opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
              >
                <Trash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 