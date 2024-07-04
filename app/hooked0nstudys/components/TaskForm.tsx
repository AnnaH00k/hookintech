import React from "react";

interface TaskFormProps {
  selectedSubject: Subject;
  subjectTasks: SubjectTasks;
  setSubjectTasks: React.Dispatch<React.SetStateAction<SubjectTasks>>;
}

const TaskForm: React.FC<TaskFormProps> = ({ selectedSubject, subjectTasks, setSubjectTasks }) => {
  const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const taskName = formData.get("taskName") as string;
    
    if (taskName) {
      const newTask: Task = {
        id: subjectTasks[selectedSubject.id].length + 1,
        name: taskName,
        completed: false,
      };

      const updatedTasks = [...subjectTasks[selectedSubject.id], newTask];
      setSubjectTasks({ ...subjectTasks, [selectedSubject.id]: updatedTasks });
      e.currentTarget.reset();
    }
  };

  return (
    <form className="flex items-end justify-center" onSubmit={handleTaskSubmit}>
      <div className="m-2 flex flex-col">
        <label htmlFor="taskName" className="block text-[#cdcfcd] text-sm font-bold mb-2">
          Add New Task:
        </label>
        <input type="text" id="taskName" name="taskName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter task name" />
      </div>
      <div className="m-2 flex  justify-between">
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
