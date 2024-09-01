'use client';

import React, { useState } from "react";

interface Subject {
  id: number;
  name: string;
  examType: string[];
  note?: number;
  passed?: boolean;
  examDate?: string; // Added to match the form's fields
}

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface SubjectTasks {
  [subjectId: number]: Task[];
}

interface SubjectFormProps {
  subjects: Subject[];
  setSubjects: React.Dispatch<React.SetStateAction<Subject[]>>;
  subjectTasks: SubjectTasks;
  setSubjectTasks: React.Dispatch<React.SetStateAction<SubjectTasks>>;
}

const SubjectForm: React.FC<SubjectFormProps> = ({ subjects, setSubjects, subjectTasks, setSubjectTasks }) => {
  const [selectedExamType, setSelectedExamType] = useState<string | null>(null);

  const handleSubjectSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const courseName = formData.get("courseName") as string;
    const examDate = formData.get("examDate") as string;

    if (courseName && selectedExamType) {
      const newSubject: Subject = {
        id: subjects.length + 1,
        name: courseName,
        examType: [selectedExamType],
        examDate,
      };
      setSubjects([...subjects, newSubject]);
      setSubjectTasks({ ...subjectTasks, [newSubject.id]: [] });
      e.currentTarget.reset();
      setSelectedExamType(null); // Reset the selected exam type
    }
  };

  const handleExamTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedExamType(e.target.value);
  };

  return (
    <section className="max-w-3xl w-[95vw] p-4 bg-lighterBackground rounded-lg shadow-lg">
      <form className="flex flex-col items-center justify-center" onSubmit={handleSubjectSubmit}>
        <div className="flex sm:flex-row flex-col items-center justify-center">
          <div className="sm:m-4 w-[50vw] min-w-[300px] max-w-[500px]">
            <label htmlFor="courseName" className="block text-[#cdcfcd] text-sm font-bold mb-2">
              Course Name:
            </label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the course name"
            />
          </div>
          <div className="m-4">
            <label htmlFor="examType" className="block text-[#cdcfcd] text-sm font-bold mb-2">
              Exam Type:
            </label>
            <div className="flex flex-col">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="regularExam"
                  name="examType"
                  value="exam"
                  checked={selectedExamType === "exam"}
                  onChange={handleExamTypeChange}
                  className="mr-2 leading-tight"
                />
                Regular Exam
              </label>
              <label className="flex items-center mt-2">
                <input
                  type="radio"
                  id="writtenExam"
                  name="examType"
                  value="written"
                  checked={selectedExamType === "written"}
                  onChange={handleExamTypeChange}
                  className="mr-2 leading-tight"
                />
                Submission
              </label>
            </div>
          </div>
        </div>
        <div className="m-4">
          <label htmlFor="examDate" className="block text-[#cdcfcd] text-sm font-bold mb-2">
            Exam Date:
          </label>
          <input
            type="date"
            id="examDate"
            name="examDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-greeny hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubjectForm;
