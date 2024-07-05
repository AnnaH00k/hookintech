import { Trash, Pencil, FileText } from "@phosphor-icons/react";

interface SubjectListProps {
  subjects: Subject[];
  selectedSubject: Subject | null;
  setSelectedSubject: (subject: Subject | null) => void;
  setSubjects: (subjects: Subject[]) => void;
  subjectTasks: SubjectTasks;
  setSubjectTasks: (tasks: SubjectTasks) => void;
}

export default function SubjectList({
  subjects,
  selectedSubject,
  setSelectedSubject,
  setSubjects,
  subjectTasks,
  setSubjectTasks,
}: SubjectListProps) {
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

  return (
    <section className="max-w-3xl w-[95vw] p-4 bg-[#303830] rounded-lg shadow-lg">
        <h2 className="text-[#cdcfcd] text-lg font-bold">Courses</h2>
        {subjects.length === 0 && <p className="text-[#cdcfcd] text-sm">No courses added yet</p>}
      <ul className="mt-4 space-y-2">
        {subjects.map(subject => (
          <li key={subject.id} className="flex items-center justify-between">
            <button
              onClick={() => setSelectedSubject(subject)}
              className="flex items-center gap-2 bg-green-900 p-2 rounded text-white w-full"
            >
              <span>{subject.name}</span>
              {subject.examType.includes("regular") && <Pencil size={20} />}
              {subject.examType.includes("written") && <FileText size={20} />}
            </button>
            <button
              className=" text-[#cdcfcd] hover:scale-[120%] font-bold py-1 px-2 rounded"
              onClick={() => handleDeleteSubject(subject.id)}
            >
              <Trash size={20} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
