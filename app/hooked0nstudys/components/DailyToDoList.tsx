'use client';
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { TrashSimple, CheckCircle, Circle } from '@phosphor-icons/react/dist/ssr';

interface ToDoListProps {
  page: string; // Unique identifier for the page
}

const ToDoList: React.FC<ToDoListProps> = ({ page }) => {
  const LOCAL_STORAGE_KEY = `todoList_${page}`;
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(`Loading todos for page ${page}:`, savedTodos);
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
        } else {
          console.error(`Invalid todos format in localStorage for page ${page}:`, parsedTodos);
        }
      } catch (error) {
        console.error(`Error parsing todos from localStorage for page ${page}:`, error);
      }
    }
  }, [LOCAL_STORAGE_KEY, page]);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      console.log(`Saving todos for page ${page}:`, todos);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    } else {
      console.log(`Clearing todos for page ${page} from localStorage`);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [todos, LOCAL_STORAGE_KEY, page]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo.trim(), completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleTodo = (index: number) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <Draggable>
      <section className="fixed self-center top-[12vh] p-4 bg-lighterBackground max-w-sm rounded-lg shadow-sm shadow-text resize overflow-auto">
        <div className="cursor-move">
          <h2 className="text-xl font-bold mb-4 text-text">To-Do List</h2>
          <ul className="w-full">
            {todos.map((todo, index) => (
              <li
                key={index}
                className={`flex items-center justify-between p-2 rounded mb-2 ${
                  todo.completed ? 'bg-greeny text-background border border-background line-through ' : 'bg-background text-text'
                }`}
              >
                <span
                  onClick={() => handleToggleTodo(index)}
                  className="mr-2 cursor-pointer"
                >
                  {todo.completed ? (
                    <CheckCircle size={20} className="text-background" />
                  ) : (
                    <Circle size={20} className="text-greeny" />
                  )}
                </span>
                <span className="flex-1">{todo.text}</span>
                <button
                  onClick={() => handleRemoveTodo(index)}
                  className="hover:text-red-500 text-text py-1 px-2 ml-2"
                >
                  <TrashSimple size={16} />
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task"
            className="shadow appearance-none rounded w-full py-2 px-3 bg-text text-secondary mb-2 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={handleAddTodo}
            className="bg-greeny hover:bg-green-900 text-background font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-4"
          >
            Add Task
          </button>
        </div>
      </section>
    </Draggable>
  );
};

export default ToDoList;
