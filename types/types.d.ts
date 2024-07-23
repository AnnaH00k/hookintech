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

  interface Window {
    dataLayer: any[]; // or a more specific type if available
    gtag: (...args: any[]) => void;
  }
  
  declare var gtag: (...args: any[]) => void;
