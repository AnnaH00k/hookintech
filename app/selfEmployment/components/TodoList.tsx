"use client";

import { useState } from "react";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { TodoItem } from "../types";

interface TodoListProps {
  items: TodoItem[];
  onAddItem: (item: TodoItem) => void;
  onToggleComplete: (id: string) => void;
  onDeleteItem: (id: string) => void;
}

export function TodoList({ 
  items, 
  onAddItem, 
  onToggleComplete, 
  onDeleteItem 
}: TodoListProps) {
  const [showForm, setShowForm] = useState(false);
  const [newTodo, setNewTodo] = useState<Partial<TodoItem>>({
    priority: "medium",
    completed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.task) return;

    onAddItem({
      id: Date.now().toString(),
      task: newTodo.task || "",
      priority: newTodo.priority || "medium",
      completed: false,
      deadline: newTodo.deadline,
    });

    setNewTodo({
      priority: "medium",
      completed: false,
    });
    setShowForm(false);
  };

  return (
    <section className="bg-[#151C14] p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Important Tasks</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-[#2A3828] px-4 py-2 rounded hover:bg-[#3A4838]"
        >
          {showForm ? "Cancel" : "Add Task"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 bg-[#1A2310] p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="md:col-span-2">
              <label className="block mb-2">Task</label>
              <input
                type="text"
                value={newTodo.task || ""}
                onChange={(e) => setNewTodo(prev => ({ ...prev, task: e.target.value }))}
                className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0]"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Priority</label>
              <select
                value={newTodo.priority}
                onChange={(e) => setNewTodo(prev => ({ 
                  ...prev, 
                  priority: e.target.value as "high" | "medium" | "low" 
                }))}
                className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0]"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Deadline (optional)</label>
              <input
                type="date"
                value={newTodo.deadline || ""}
                onChange={(e) => setNewTodo(prev => ({ ...prev, deadline: e.target.value }))}
                className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#2A3828] px-4 py-2 rounded hover:bg-[#3A4838] w-full"
          >
            Add Task
          </button>
        </form>
      )}

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-[#1A2310] p-4 rounded-lg"
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => onToggleComplete(item.id)}
              className="w-5 h-5"
            />
            <span className={item.completed ? "line-through" : ""}>
              {item.task}
            </span>
            {item.deadline && (
              <span className="text-sm">Due: {item.deadline}</span>
            )}
            <div
              className={`px-2 py-1 rounded text-sm
              ${
                item.priority === "high"
                  ? "bg-red-900"
                  : item.priority === "medium"
                  ? "bg-yellow-900"
                  : "bg-green-900"
              }`}
            >
              {item.priority}
            </div>
            <button
              onClick={() => onDeleteItem(item.id)}
              className="ml-auto hover:text-red-500"
            >
              <Trash size={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
} 