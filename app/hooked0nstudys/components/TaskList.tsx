'use client';


import React from "react";
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";

interface TaskListProps {
  selectedSubject: Subject;
  subjectTasks: SubjectTasks;
  setSubjectTasks: React.Dispatch<React.SetStateAction<SubjectTasks>>;
}

const TaskList: React.FC<TaskListProps> = ({ selectedSubject, subjectTasks, setSubjectTasks }) => {
  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = subjectTasks[selectedSubject.id].filter(task => task.id !== taskId);
    setSubjectTasks({ ...subjectTasks, [selectedSubject.id]: updatedTasks });
  };

 const handleToggleTaskCompletion = (taskId: number) => {
  const updatedTasks = subjectTasks[selectedSubject.id].map(task => {
    if (task.id === taskId) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setSubjectTasks({
    ...subjectTasks,
    [selectedSubject.id]: updatedTasks,
  });
};


  return (
    <ul className="mt-4 space-y-2">
      {subjectTasks[selectedSubject.id].map(task => (
        <li key={task.id} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={() => handleToggleTaskCompletion(task.id)} className={`text-${task.completed ? 'greeny' : 'gray-600'}`}>
              {task.completed ? <CheckCircle size={32}  color="#7C9838" /> : <Circle size={32}/>}
            </button>
            <span className={`text-text ${task.completed ? 'line-through text-greeny' : ''}`}>{task.name}</span>
          </div>
          <button className="text-text hover:scale-[120%] font-bold py-1 px-2 rounded" onClick={() => handleDeleteTask(task.id)}>
            <Trash size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
