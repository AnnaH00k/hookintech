"use client";

import { CourseLayout } from "../../../components/CourseLayout";
import { TopicSection } from "../../../components/TopicSection";
import { CourseTopic } from "../../../types/course";

const COURSE_TOPICS: CourseTopic[] = [
  {
    title: "Software Development Lifecycle",
    description: "Understanding the complete process of software development",
    learningObjectives: [
      "Master agile methodologies",
      "Understand requirements engineering",
      "Apply project management principles",
      "Work with development processes",
      "Practice software planning",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Software Engineering",
        url: "https://ocw.mit.edu/courses/6-031-software-construction-spring-2016/",
        description: "MIT's software engineering",
      },
      {
        type: "Interactive Platform",
        platform: "Atlassian",
        title: "Agile Practices",
        url: "https://www.atlassian.com/agile",
        description: "Agile development guide",
      },
      {
        type: "Video Course",
        platform: "Coursera",
        title: "Software Processes",
        url: "https://www.coursera.org/learn/software-processes",
        description: "Software process management",
      },
      {
        type: "Documentation",
        platform: "Scrum.org",
        title: "Scrum Guide",
        url: "https://www.scrum.org/resources/scrum-guide",
        description: "Official Scrum framework",
      },
      {
        type: "Book",
        platform: "Clean Code",
        title: "Clean Code",
        url: "https://www.oreilly.com/library/view/clean-code-a/9780136083238/",
        description: "Software craftsmanship guide",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Software Engineering",
        url: "https://web.stanford.edu/class/cs242/",
        description: "Stanford's SE course",
      },
      {
        type: "Tutorial Series",
        platform: "Martin Fowler",
        title: "Software Design",
        url: "https://martinfowler.com/articles/",
        description: "Expert software insights",
      },
      {
        type: "Practice Platform",
        platform: "GitHub",
        title: "Project Management",
        url: "https://docs.github.com/en/issues",
        description: "Project tracking tools",
      },
      {
        type: "Video Series",
        platform: "ThoughtWorks",
        title: "Tech Radar",
        url: "https://www.thoughtworks.com/radar",
        description: "Technology assessment",
      },
      {
        type: "Documentation",
        platform: "Google",
        title: "Engineering Practices",
        url: "https://google.github.io/eng-practices/",
        description: "Google's development guide",
      },
    ],
    practicalApplications: [
      {
        field: "Project Management",
        description: "Managing software projects",
        example: "Implementing Scrum framework",
      },
      {
        field: "Process Improvement",
        description: "Optimizing development",
        example: "Continuous integration setup",
      },
      {
        field: "Quality Assurance",
        description: "Ensuring software quality",
        example: "Code review processes",
      },
    ],
    problems: [
      "Design development process",
      "Create project timeline",
      "Implement agile practices",
      "Manage team workflow",
    ],
  },
  {
    title: "Software Architecture",
    description: "Designing robust and scalable software systems",
    learningObjectives: [
      "Understand design patterns",
      "Master system architecture",
      "Apply SOLID principles",
      "Work with microservices",
      "Practice clean architecture",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "Carnegie Mellon",
        title: "Software Architecture",
        url: "https://www.sei.cmu.edu/education-outreach/courses/",
        description: "CMU's architecture course",
      },
      {
        type: "Book",
        platform: "GoF",
        title: "Design Patterns",
        url: "https://www.oreilly.com/library/view/design-patterns-elements/0201633612/",
        description: "Classic patterns book",
      },
      {
        type: "Video Series",
        platform: "Pluralsight",
        title: "Clean Architecture",
        url: "https://www.pluralsight.com/courses/clean-architecture-patterns-practices-principles",
        description: "Architecture principles",
      },
      {
        type: "Documentation",
        platform: "Microsoft",
        title: "Architecture Guide",
        url: "https://docs.microsoft.com/en-us/azure/architecture/",
        description: "Cloud architecture patterns",
      },
      {
        type: "Tutorial Series",
        platform: "RefactoringGuru",
        title: "Design Patterns",
        url: "https://refactoring.guru/design-patterns",
        description: "Pattern explanations",
      },
      {
        type: "Course Materials",
        platform: "ETH Zürich",
        title: "Software Architecture",
        url: "https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/",
        description: "ETH's architecture course",
      },
      {
        type: "Interactive Platform",
        platform: "Katacoda",
        title: "Microservices",
        url: "https://www.katacoda.com/courses/microservices",
        description: "Hands-on architecture",
      },
      {
        type: "Video Course",
        platform: "Udacity",
        title: "Software Architecture",
        url: "https://www.udacity.com/course/software-architecture-design--ud821",
        description: "Architecture & design",
      },
      {
        type: "Documentation",
        platform: "AWS",
        title: "Architecture Center",
        url: "https://aws.amazon.com/architecture/",
        description: "Cloud architecture",
      },
      {
        type: "Practice Platform",
        platform: "Exercism",
        title: "Refactoring",
        url: "https://exercism.io/tracks/csharp/exercises/refactoring",
        description: "Code improvement tasks",
      },
    ],
    practicalApplications: [
      {
        field: "System Design",
        description: "Architectural planning",
        example: "Designing scalable systems",
      },
      {
        field: "Code Organization",
        description: "Structure improvement",
        example: "Implementing design patterns",
      },
      {
        field: "Microservices",
        description: "Service architecture",
        example: "Building distributed systems",
      },
    ],
    problems: [
      "Design system architecture",
      "Implement design patterns",
      "Create microservices",
      "Apply SOLID principles",
    ],
  },
  {
    title: "Software Quality",
    description: "Ensuring reliability and maintainability of software",
    learningObjectives: [
      "Master testing strategies",
      "Understand code quality",
      "Apply refactoring techniques",
      "Work with quality metrics",
      "Practice code reviews",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "Software Testing",
        url: "https://inst.eecs.berkeley.edu/~cs169/",
        description: "Berkeley's testing course",
      },
      {
        type: "Interactive Platform",
        platform: "SonarQube",
        title: "Code Quality",
        url: "https://www.sonarqube.org/features/clean-code/",
        description: "Quality management",
      },
      {
        type: "Video Series",
        platform: "TestDriven",
        title: "TDD Course",
        url: "https://testdriven.io/courses/",
        description: "Test-driven development",
      },
      {
        type: "Documentation",
        platform: "JUnit",
        title: "Testing Framework",
        url: "https://junit.org/junit5/docs/current/user-guide/",
        description: "Java testing guide",
      },
      {
        type: "Book",
        platform: "Refactoring",
        title: "Refactoring",
        url: "https://refactoring.com/",
        description: "Code improvement guide",
      },
      {
        type: "Tutorial Series",
        platform: "CodeScene",
        title: "Code Health",
        url: "https://codescene.com/blog/",
        description: "Code quality insights",
      },
      {
        type: "Practice Platform",
        platform: "Codewars",
        title: "Code Challenges",
        url: "https://www.codewars.com/",
        description: "Programming practice",
      },
      {
        type: "Course Materials",
        platform: "TU München",
        title: "Software Quality",
        url: "https://www.in.tum.de/en/",
        description: "TUM's quality course",
      },
      {
        type: "Video Course",
        platform: "PluralSight",
        title: "Code Reviews",
        url: "https://www.pluralsight.com/courses/code-reviews-best-practices",
        description: "Review practices",
      },
      {
        type: "Documentation",
        platform: "Cypress",
        title: "Testing Tools",
        url: "https://docs.cypress.io/",
        description: "Modern testing framework",
      },
    ],
    practicalApplications: [
      {
        field: "Quality Assurance",
        description: "Testing implementation",
        example: "Creating test suites",
      },
      {
        field: "Code Maintenance",
        description: "Code improvement",
        example: "Refactoring legacy code",
      },
      {
        field: "Process Improvement",
        description: "Quality processes",
        example: "Implementing code reviews",
      },
    ],
    problems: [
      "Implement testing strategy",
      "Improve code quality",
      "Create review process",
      "Measure quality metrics",
    ],
  },
];

export default function CoursePage() {
  return (
    <CourseLayout title="Softwaretechnik" ects={6} semester={2}>
      {COURSE_TOPICS.map((topic) => (
        <TopicSection key={topic.title} topic={topic} />
      ))}
    </CourseLayout>
  );
} 