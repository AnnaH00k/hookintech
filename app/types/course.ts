export type CourseResource = {
  type: string;
  platform: string;
  title: string;
  url: string;
  description: string;
};

export type CoursePracticalApplication = {
  field: string;
  description: string;
  example: string;
};

export type CourseTopic = {
  title: string;
  description: string;
  learningObjectives: string[];
  resources: CourseResource[];
  practicalApplications: CoursePracticalApplication[];
  problems: string[];
};

export interface Semester {
  semester: number;
  courses: Course[];
  isComplete?: boolean;
} 