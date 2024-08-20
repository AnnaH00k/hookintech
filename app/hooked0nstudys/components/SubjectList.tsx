'use client';
import React, { useState } from "react";
import { Trash, Pencil, FileText } from "@phosphor-icons/react";
import { Gear } from "@phosphor-icons/react/dist/ssr";

interface Subject {
  id: number;
  name: string;
  examType: string[];
  note?: number;
  passed?: boolean;
}

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface SubjectTasks {
  [subjectId: number]: Task[];
}

interface Props {
  subjects: Subject[];
  setSelectedSubject: React.Dispatch<React.SetStateAction<Subject | null>>;
  selectedSubject: Subject | null;
  setSubjects: React.Dispatch<React.SetStateAction<Subject[]>>;
  subjectTasks: SubjectTasks;
  setSubjectTasks: React.Dispatch<React.SetStateAction<SubjectTasks>>;
}

const SubjectList: React.FC<Props> = ({
  subjects,
  setSelectedSubject,
  selectedSubject,
  setSubjects,
  subjectTasks,
  setSubjectTasks,
}) => {
  const [settingsSubjectId, setSettingsSubjectId] = useState<number | null>(null);

  const handleNoteChange = (subjectId: number, note: number) => {
    const updatedSubjects = subjects.map(subject =>
      subject.id === subjectId ? { ...subject, note } : subject
    );
    setSubjects(updatedSubjects);
  };

  const handlePassedChange = (subjectId: number, passed: boolean) => {
    const updatedSubjects = subjects.map(subject =>
      subject.id === subjectId ? { ...subject, passed } : subject
    );
    setSubjects(updatedSubjects);
  };

  const handleDeleteSubject = (subjectId: number) => {
    const updatedSubjects = subjects.filter(subject => subject.id !== subjectId);
    const updatedSubjectTasks = { ...subjectTasks };
    delete updatedSubjectTasks[subjectId];

    setSubjects(updatedSubjects);
    setSubjectTasks(updatedSubjectTasks);

    if (selectedSubject && selectedSubject.id === subjectId) {
      setSelectedSubject(null);
    }
  };

  const toggleSettings = (subjectId: number) => {
    setSettingsSubjectId(settingsSubjectId === subjectId ? null : subjectId);
  };

  


  // Sorting subjects to move passed subjects to the bottom
  const sortedSubjects = [...subjects].sort((a, b) => {
    if (a.passed === b.passed) return 0;
    return a.passed ? 1 : -1;
  });

  return (
    <section className="max-w-3xl w-[95vw] p-4 bg-[#303830] rounded-lg shadow-lg">
      <h2 className="text-[#cdcfcd] text-lg font-bold">Courses</h2>
      {sortedSubjects.length === 0 && <p className="text-[#cdcfcd] text-sm">No courses added yet</p>}
      <ul className="mt-4 space-y-2">
        {sortedSubjects.map(subject => (
          <li
            key={subject.id}
            className={`flex items-center justify-between p-2 rounded transition-colors duration-300 ${subject.passed ? 'bg-gray-700 text-gray-400' : 'bg-green-900 text-white'}`}
          >
            <button
              onClick={() => setSelectedSubject(subject)}
              className="flex items-center gap-2 w-full"
            >
              <span>{subject.name}</span>
              {subject.examType.includes("regular") && <Pencil size={20} />}
              {subject.examType.includes("written") && <FileText size={20} />}
            </button>

            {settingsSubjectId === subject.id && (
              <div className="flex bg-[#303830] p-2 text-center rounded-lg items-center justify-center">
                <label>
                  Note:
                  <input
                    type="number"
                    className="bg-[#697a69] mx-2 text-[#303830] w-12 rounded"
                    value={subject.note || ""}
                    disabled={subject.passed}
                    onChange={(e) => handleNoteChange(subject.id, parseFloat(e.target.value))}
                  />
                </label>
                <label>
                  Passed
                  <input
                    type="checkbox"
                    className="bg-[#697a69] mx-2 text-[#303830] rounded"
                    checked={subject.passed || false}
                    onChange={(e) => handlePassedChange(subject.id, e.target.checked)}
                  />
                </label>
              </div>
            )}
            <button
              className="text-[#cdcfcd] hover:scale-[120%] font-bold py-1 px-2 rounded"
              onClick={() => toggleSettings(subject.id)}
            >
              <Gear size={20} />
            </button>
            <button
              className="text-[#cdcfcd] hover:scale-[120%] font-bold py-1 px-2 rounded"
              onClick={() => handleDeleteSubject(subject.id)}
            >
              <Trash size={20} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SubjectList;
