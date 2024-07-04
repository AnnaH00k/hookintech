interface Subject {
    id: number;
    name: string;
    examType: string[];
    examDate: string;
  }
  
  interface Task {
    id: number;
    name: string;
    completed: boolean;
  }
  
  interface SubjectTasks {
    [subjectId: number]: Task[];
  }
  