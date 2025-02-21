import { CourseLayout } from "../../../components/CourseLayout";
import { TopicSection } from "../../../components/TopicSection";
import { CourseTopic } from "../../../types/course";

const COURSE_TOPICS: CourseTopic[] = [
  {
    title: "Programming Fundamentals",
    description: "Core concepts of programming using Python and Java",
    learningObjectives: [
      "Understand variables and data types",
      "Master control structures and loops",
      "Work with functions and methods",
      "Learn object-oriented programming basics",
      "Practice code organization and style",
    ],
    resources: [
      {
        type: "Video Course",
        platform: "MIT OCW",
        title: "Introduction to Programming in Python",
        url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
        description: "MIT's foundational Python course",
      },
      {
        type: "Interactive Platform",
        platform: "Codecademy",
        title: "Learn Python",
        url: "https://www.codecademy.com/learn/learn-python-3",
        description: "Interactive Python tutorials",
      },
      {
        type: "Java Course",
        platform: "Stanford",
        title: "Programming Methodology",
        url: "https://see.stanford.edu/Course/CS106A",
        description: "Stanford's intro to Java programming",
      },
      {
        type: "Practice Platform",
        platform: "CodingBat",
        title: "Python/Java Practice",
        url: "https://codingbat.com/",
        description: "Programming exercises in Python and Java",
      },
      {
        type: "Interactive Book",
        platform: "Think Python",
        title: "Think Python 2e",
        url: "https://greenteapress.com/wp/think-python-2e/",
        description: "Comprehensive Python textbook",
      },
      {
        type: "Video Series",
        platform: "Helsinki MOOC",
        title: "Java Programming",
        url: "https://java-programming.mooc.fi/",
        description: "University of Helsinki's Java course",
      },
      {
        type: "Interactive IDE",
        platform: "Replit",
        title: "Python/Java Environment",
        url: "https://replit.com/",
        description: "Online coding environment",
      },
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "CS61A",
        url: "https://cs61a.org/",
        description: "Berkeley's programming fundamentals",
      },
      {
        type: "Tutorial Series",
        platform: "Real Python",
        title: "Python Basics",
        url: "https://realpython.com/learning-paths/python3-introduction/",
        description: "Practical Python tutorials",
      },
      {
        type: "Documentation",
        platform: "Python.org",
        title: "Python Tutorial",
        url: "https://docs.python.org/3/tutorial/",
        description: "Official Python documentation",
      },
    ],
    practicalApplications: [
      {
        field: "Automation",
        description: "Writing scripts for task automation",
        example: "File processing and data extraction scripts",
      },
      {
        field: "Data Analysis",
        description: "Processing and analyzing data",
        example: "Data visualization with Python libraries",
      },
      {
        field: "Web Development",
        description: "Building web applications",
        example: "Creating simple web servers and APIs",
      },
    ],
    problems: [
      "Implement basic algorithms in Python and Java",
      "Create object-oriented programs",
      "Build command-line applications",
      "Develop simple GUI programs",
    ],
  },
  {
    title: "Object-Oriented Programming",
    description:
      "Understanding and implementing OOP principles in Python and Java",
    learningObjectives: [
      "Master classes and objects",
      "Understand inheritance and polymorphism",
      "Implement encapsulation and abstraction",
      "Work with interfaces and abstract classes",
      "Apply design patterns",
    ],
    resources: [
      {
        type: "Video Course",
        platform: "MIT OCW",
        title: "OOP in Java",
        url: "https://ocw.mit.edu/courses/6-148-introduction-to-programming-in-java-january-iap-2019/",
        description: "MIT's Java OOP course",
      },
      {
        type: "Interactive Course",
        platform: "Coursera",
        title: "Python OOP",
        url: "https://www.coursera.org/learn/python-object-oriented-programming",
        description: "University of Michigan's OOP course",
      },
      {
        type: "Documentation",
        platform: "Oracle",
        title: "Java Tutorials",
        url: "https://docs.oracle.com/javase/tutorial/java/concepts/",
        description: "Official Java OOP documentation",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "CS108",
        url: "https://web.stanford.edu/class/archive/cs/cs108/cs108.1092/",
        description: "Stanford's advanced Java programming",
      },
      {
        type: "Video Series",
        platform: "ETH Zürich",
        title: "Object-Oriented Programming",
        url: "https://www.pm.inf.ethz.ch/education/courses/EOOP.html",
        description: "ETH's OOP principles course",
      },
      {
        type: "Practice Platform",
        platform: "Exercism",
        title: "OOP Track",
        url: "https://exercism.org/tracks/python/concepts/classes",
        description: "OOP programming exercises",
      },
      {
        type: "Book",
        platform: "O'Reilly",
        title: "Head First Design Patterns",
        url: "https://www.oreilly.com/library/view/head-first-design/0596007124/",
        description: "Design patterns and OOP principles",
      },
      {
        type: "Tutorial Series",
        platform: "Real Python",
        title: "OOP in Python",
        url: "https://realpython.com/python3-object-oriented-programming/",
        description: "Comprehensive OOP tutorials",
      },
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "CS61B",
        url: "https://sp21.datastructur.es/",
        description: "Berkeley's Java programming course",
      },
      {
        type: "Interactive IDE",
        platform: "BlueJ",
        title: "Java Learning Environment",
        url: "https://www.bluej.org/",
        description: "Visual Java OOP environment",
      },
    ],
    practicalApplications: [
      {
        field: "Software Architecture",
        description: "Designing modular applications",
        example: "Building a library management system",
      },
      {
        field: "Game Development",
        description: "Creating game objects and behaviors",
        example: "Implementing game character classes",
      },
      {
        field: "GUI Applications",
        description: "Building user interfaces",
        example: "Desktop application development",
      },
    ],
    problems: [
      "Design and implement a class hierarchy",
      "Create a simple game using OOP principles",
      "Build a GUI application with multiple classes",
      "Implement common design patterns",
    ],
  },
  {
    title: "Data Structures Implementation",
    description:
      "Building and using fundamental data structures in Python and Java",
    learningObjectives: [
      "Implement basic data structures",
      "Understand memory management",
      "Compare data structure performance",
      "Choose appropriate data structures",
      "Work with built-in collections",
    ],
    resources: [
      {
        type: "Video Course",
        platform: "MIT OCW",
        title: "Data Structures",
        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
        description: "MIT's data structures course",
      },
      {
        type: "Interactive Platform",
        platform: "VisuAlgo",
        title: "Data Structure Visualization",
        url: "https://visualgo.net/en",
        description: "Interactive data structure animations",
      },
      {
        type: "Course Materials",
        platform: "Princeton",
        title: "Algorithms & Data Structures",
        url: "https://algs4.cs.princeton.edu/home/",
        description: "Princeton's implementation course",
      },
      {
        type: "Practice Platform",
        platform: "HackerRank",
        title: "Data Structures",
        url: "https://www.hackerrank.com/domains/data-structures",
        description: "Implementation challenges",
      },
      {
        type: "Documentation",
        platform: "Python",
        title: "Collections Module",
        url: "https://docs.python.org/3/library/collections.html",
        description: "Python's built-in data structures",
      },
      {
        type: "Tutorial Series",
        platform: "GeeksforGeeks",
        title: "Data Structures",
        url: "https://www.geeksforgeeks.org/data-structures/",
        description: "Comprehensive implementation guides",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "CS166",
        url: "http://web.stanford.edu/class/cs166/",
        description: "Advanced data structures",
      },
      {
        type: "Interactive Book",
        platform: "Open DSA",
        title: "Data Structures & Algorithms",
        url: "https://opendsa-server.cs.vt.edu/",
        description: "Interactive textbook with visualizations",
      },
      {
        type: "Video Series",
        platform: "UC Berkeley",
        title: "Data Structures",
        url: "https://sp21.datastructur.es/",
        description: "Berkeley's implementation course",
      },
      {
        type: "Practice Problems",
        platform: "LeetCode",
        title: "Data Structure Track",
        url: "https://leetcode.com/study-plan/data-structure/",
        description: "Structured practice problems",
      },
    ],
    practicalApplications: [
      {
        field: "Database Design",
        description: "Implementing efficient storage structures",
        example: "Custom index implementation",
      },
      {
        field: "Memory Management",
        description: "Optimizing memory usage",
        example: "Implementing caching systems",
      },
      {
        field: "Algorithm Development",
        description: "Creating efficient solutions",
        example: "Graph representation implementation",
      },
    ],
    problems: [
      "Implement a custom ArrayList/Vector",
      "Create a balanced binary search tree",
      "Build a hash table with collision handling",
      "Develop a priority queue implementation",
    ],
  },
  {
    title: "Error Handling and Testing",
    description: "Writing robust and reliable code with proper testing",
    learningObjectives: [
      "Implement exception handling",
      "Write unit tests",
      "Perform integration testing",
      "Use debugging techniques",
      "Practice test-driven development",
    ],
    resources: [
      {
        type: "Documentation",
        platform: "Python",
        title: "unittest Framework",
        url: "https://docs.python.org/3/library/unittest.html",
        description: "Python's testing framework docs",
      },
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Software Testing",
        url: "https://ocw.mit.edu/courses/6-170-software-studio-spring-2013/pages/assignments/",
        description: "MIT's testing methodologies",
      },
      {
        type: "Tutorial Series",
        platform: "Real Python",
        title: "Python Testing",
        url: "https://realpython.com/python-testing/",
        description: "Comprehensive testing guide",
      },
      {
        type: "Documentation",
        platform: "JUnit",
        title: "JUnit 5",
        url: "https://junit.org/junit5/docs/current/user-guide/",
        description: "Java testing framework",
      },
      {
        type: "Course",
        platform: "Coursera",
        title: "Software Testing",
        url: "https://www.coursera.org/learn/software-testing",
        description: "University of Minnesota's course",
      },
      {
        type: "Practice Platform",
        platform: "Exercism",
        title: "Testing Exercises",
        url: "https://exercism.org/tracks/python/concepts/testing",
        description: "Test-driven development practice",
      },
      {
        type: "Video Series",
        platform: "TestDriven.io",
        title: "Testing Python",
        url: "https://testdriven.io/blog/",
        description: "Modern testing practices",
      },
      {
        type: "Documentation",
        platform: "PyTest",
        title: "PyTest Docs",
        url: "https://docs.pytest.org/",
        description: "Popular Python testing framework",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Testing Practices",
        url: "https://web.stanford.edu/class/cs144/testing.html",
        description: "Stanford's testing guidelines",
      },
      {
        type: "Interactive Course",
        platform: "Codecademy",
        title: "Learn Testing",
        url: "https://www.codecademy.com/learn/learn-testing-for-web-development",
        description: "Interactive testing tutorials",
      },
    ],
    practicalApplications: [
      {
        field: "Quality Assurance",
        description: "Ensuring code reliability",
        example: "Automated test suite implementation",
      },
      {
        field: "Debugging",
        description: "Finding and fixing bugs",
        example: "Using debugger tools and logging",
      },
      {
        field: "Continuous Integration",
        description: "Automated testing pipelines",
        example: "Setting up GitHub Actions for testing",
      },
    ],
    problems: [
      "Write comprehensive unit tests",
      "Implement error handling for a web API",
      "Create a test suite with mocking",
      "Debug and fix common code issues",
    ],
  },
  {
    title: "Project Development",
    description:
      "Building complete applications using modern development practices",
    learningObjectives: [
      "Plan and structure projects",
      "Use version control (Git)",
      "Implement agile methodologies",
      "Write clean, maintainable code",
      "Work with development tools",
    ],
    resources: [
      {
        type: "Course",
        platform: "GitHub",
        title: "Git & GitHub Fundamentals",
        url: "https://skills.github.com/",
        description: "Version control basics",
      },
      {
        type: "Documentation",
        platform: "Python",
        title: "Project Structure",
        url: "https://docs.python-guide.org/writing/structure/",
        description: "Python project organization",
      },
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Software Construction",
        url: "https://ocw.mit.edu/courses/6-005-software-construction-spring-2016/",
        description: "MIT's software development course",
      },
      {
        type: "Tutorial Series",
        platform: "Real Python",
        title: "Application Development",
        url: "https://realpython.com/tutorials/projects/",
        description: "Building real-world applications",
      },
      {
        type: "Documentation",
        platform: "Maven",
        title: "Java Project Management",
        url: "https://maven.apache.org/guides/getting-started/",
        description: "Java build and dependency management",
      },
      {
        type: "Course",
        platform: "Coursera",
        title: "Software Development",
        url: "https://www.coursera.org/learn/agile-software-development",
        description: "Agile development practices",
      },
      {
        type: "Interactive Platform",
        platform: "VS Code",
        title: "Development Environment",
        url: "https://code.visualstudio.com/docs/python/python-tutorial",
        description: "IDE setup and usage",
      },
      {
        type: "Documentation",
        platform: "Clean Code",
        title: "Clean Code Principles",
        url: "https://www.oreilly.com/library/view/clean-code-a/9780136083238/",
        description: "Writing maintainable code",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Software Engineering",
        url: "https://web.stanford.edu/class/cs242/",
        description: "Stanford's development practices",
      },
      {
        type: "Platform",
        platform: "Docker",
        title: "Development Environments",
        url: "https://docs.docker.com/get-started/",
        description: "Containerized development",
      },
    ],
    practicalApplications: [
      {
        field: "Software Development",
        description: "Building production applications",
        example: "Full-stack web application development",
      },
      {
        field: "Team Collaboration",
        description: "Working with version control",
        example: "Managing GitHub workflows",
      },
      {
        field: "DevOps",
        description: "Development operations",
        example: "Setting up CI/CD pipelines",
      },
    ],
    problems: [
      "Create a multi-module project",
      "Implement Git workflow for team development",
      "Set up automated build processes",
      "Develop a complete web application",
    ],
  },
];

export default function CoursePage() {
  return (
    <CourseLayout
      title="Einführung in die Programmierung"
      ects={8}
      semester={1}
    >
      {COURSE_TOPICS.map((topic) => (
        <TopicSection key={topic.title} topic={topic} />
      ))}
    </CourseLayout>
  );
}
