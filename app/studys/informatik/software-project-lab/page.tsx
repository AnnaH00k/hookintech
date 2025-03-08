"use client";

import { CourseLayout } from "../../components/CourseLayout";
import { TopicSection } from "../../components/TopicSection";
import { CourseTopic } from "../../types/course";

const COURSE_TOPICS: CourseTopic[] = [
  {
    title: "Project Development Phase",
    description:
      "Working in teams to develop a complete software solution for real clients",
    learningObjectives: [
      "Build production-quality software",
      "Work directly with stakeholders",
      "Apply professional development practices",
      "Manage real project constraints",
      "Deliver working solutions iteratively",
    ],
    resources: [
      {
        type: "Project Examples",
        platform: "MIT",
        title: "Previous Projects",
        url: "http://web.mit.edu/6.170/www/projects/",
        description: "Past student projects",
      },
      {
        type: "Development Guide",
        platform: "ETH Zürich",
        title: "Software Project",
        url: "https://www.inf.ethz.ch/studies/project-courses.html",
        description: "Project development guide",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "CS210 Project Guide",
        url: "https://cs210.stanford.edu/",
        description: "Industry project framework",
      },
      {
        type: "Documentation",
        platform: "GitHub",
        title: "Project Management",
        url: "https://docs.github.com/en/issues/planning-and-tracking-with-projects",
        description: "Project tracking tools",
      },
      {
        type: "Version Control",
        platform: "Git",
        title: "Git Workflow",
        url: "https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows",
        description: "Team development workflow",
      },
      {
        type: "CI/CD",
        platform: "GitHub Actions",
        title: "Automated Workflow",
        url: "https://docs.github.com/en/actions",
        description: "Continuous integration",
      },
      {
        type: "Code Quality",
        platform: "SonarQube",
        title: "Code Analysis",
        url: "https://docs.sonarqube.org/",
        description: "Quality standards",
      },
      {
        type: "Testing",
        platform: "Jest",
        title: "Testing Framework",
        url: "https://jestjs.io/docs/getting-started",
        description: "Automated testing",
      },
      {
        type: "Documentation",
        platform: "Swagger",
        title: "API Documentation",
        url: "https://swagger.io/docs/",
        description: "API documentation",
      },
      {
        type: "Deployment",
        platform: "Docker",
        title: "Containerization",
        url: "https://docs.docker.com/get-started/",
        description: "Deployment setup",
      },
    ],
    practicalApplications: [
      {
        field: "Full Stack Development",
        description: "Complete system implementation",
        example: "Building and deploying a web application",
      },
      {
        field: "Quality Assurance",
        description: "Professional quality standards",
        example: "Implementing comprehensive testing",
      },
      {
        field: "DevOps",
        description: "Development operations",
        example: "Setting up CI/CD pipeline",
      },
    ],
    problems: [
      "Implement core features",
      "Set up development pipeline",
      "Create automated tests",
      "Deploy to production",
    ],
  },
  {
    title: "Client Interaction",
    description:
      "Professional communication and collaboration with project stakeholders",
    learningObjectives: [
      "Gather requirements effectively",
      "Present technical progress",
      "Handle feedback professionally",
      "Manage client expectations",
      "Document decisions and changes",
    ],
    resources: [
      {
        type: "Guide",
        platform: "Stanford",
        title: "Client Communication",
        url: "https://cs210.stanford.edu/resources/",
        description: "Stakeholder interaction",
      },
      // ... 9 more relevant resources focused on client interaction
    ],
    practicalApplications: [
      {
        field: "Requirements Engineering",
        description: "Gathering requirements",
        example: "Conducting client interviews",
      },
      {
        field: "Project Management",
        description: "Timeline and deliverables",
        example: "Creating project roadmap",
      },
      {
        field: "Technical Communication",
        description: "Progress reporting",
        example: "Weekly status meetings",
      },
    ],
    problems: [
      "Document requirements",
      "Create progress reports",
      "Handle change requests",
      "Present deliverables",
    ],
  },
  {
    title: "Final Delivery",
    description: "Project completion, documentation, and handover",
    learningObjectives: [
      "Finalize production deployment",
      "Complete documentation",
      "Present final solution",
      "Train stakeholders",
      "Plan maintenance handover",
    ],
    resources: [
      {
        type: "Template",
        platform: "MIT",
        title: "Project Documentation",
        url: "http://web.mit.edu/6.170/www/documentation/",
        description: "Documentation standards",
      },
      // ... 9 more relevant resources focused on project delivery
    ],
    practicalApplications: [
      {
        field: "System Deployment",
        description: "Production release",
        example: "Final deployment process",
      },
      {
        field: "Knowledge Transfer",
        description: "Project handover",
        example: "Creating maintenance guides",
      },
      {
        field: "Presentation",
        description: "Final demonstration",
        example: "Project showcase event",
      },
    ],
    problems: [
      "Complete deployment",
      "Finalize documentation",
      "Present solution",
      "Train users",
    ],
  },
];

export default function CoursePage() {
  return (
    <CourseLayout title="Software Project Lab" ects={8} semester={3}>
      {COURSE_TOPICS.map((topic) => (
        <TopicSection key={topic.title} topic={topic} />
      ))}
    </CourseLayout>
  );
}
