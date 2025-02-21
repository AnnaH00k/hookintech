"use client";

import { CourseLayout } from "../../../components/CourseLayout";
import { TopicSection } from "../../../components/TopicSection";
import { CourseTopic } from "../../../types/course";

const COURSE_TOPICS: CourseTopic[] = [
  {
    title: "Operating Systems Fundamentals",
    description: "Core concepts of operating system design and implementation",
    learningObjectives: [
      "Understand process management",
      "Master memory management",
      "Work with file systems",
      "Analyze scheduling algorithms",
      "Implement system calls",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Operating Systems",
        url: "https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/",
        description: "MIT's OS engineering",
      },
      {
        type: "Book",
        platform: "OSTEP",
        title: "Operating Systems: Three Easy Pieces",
        url: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
        description: "Free OS textbook",
      },
      {
        type: "Video Course",
        platform: "Berkeley",
        title: "CS162",
        url: "https://cs162.org/",
        description: "Berkeley's OS course",
      },
      {
        type: "Documentation",
        platform: "Linux",
        title: "Kernel Documentation",
        url: "https://www.kernel.org/doc/html/latest/",
        description: "Linux kernel docs",
      },
      {
        type: "Interactive Platform",
        platform: "OS Dev",
        title: "OS Development",
        url: "https://wiki.osdev.org/Main_Page",
        description: "OS development wiki",
      },
      {
        type: "Tutorial Series",
        platform: "Stanford",
        title: "PintOS",
        url: "https://web.stanford.edu/class/cs140/projects/pintos/pintos.html",
        description: "Educational OS implementation",
      },
      {
        type: "Course Materials",
        platform: "ETH Zürich",
        title: "Systems Programming",
        url: "https://systems.ethz.ch/education/courses.html",
        description: "ETH's systems course",
      },
      {
        type: "Video Series",
        platform: "CMU",
        title: "Operating Systems",
        url: "https://www.cs.cmu.edu/~15213/",
        description: "CMU's systems course",
      },
      {
        type: "Practice Platform",
        platform: "Xv6",
        title: "Unix V6",
        url: "https://pdos.csail.mit.edu/6.828/2020/xv6.html",
        description: "Educational Unix implementation",
      },
      {
        type: "Documentation",
        platform: "POSIX",
        title: "System Interfaces",
        url: "https://pubs.opengroup.org/onlinepubs/9699919799/",
        description: "POSIX standard documentation",
      },
    ],
    practicalApplications: [
      {
        field: "System Administration",
        description: "Managing operating systems",
        example: "Process and memory management",
      },
      {
        field: "Device Drivers",
        description: "Hardware interaction",
        example: "Writing basic device drivers",
      },
      {
        field: "System Performance",
        description: "Performance optimization",
        example: "Implementing scheduling algorithms",
      },
    ],
    problems: [
      "Implement process scheduler",
      "Create memory manager",
      "Design file system",
      "Write system calls",
    ],
  },
  {
    title: "Low-Level Programming",
    description: "Programming close to the hardware level",
    learningObjectives: [
      "Master assembly language",
      "Understand computer architecture",
      "Work with memory directly",
      "Implement low-level optimizations",
      "Handle hardware interfaces",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Computer Systems",
        url: "https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/",
        description: "MIT's systems course",
      },
      {
        type: "Book",
        platform: "CS:APP",
        title: "Computer Systems: A Programmer's Perspective",
        url: "http://csapp.cs.cmu.edu/",
        description: "Systems programming book",
      },
      {
        type: "Video Series",
        platform: "NASM",
        title: "Assembly Tutorial",
        url: "https://cs.lmu.edu/~ray/notes/nasmtutorial/",
        description: "x86 assembly guide",
      },
      {
        type: "Documentation",
        platform: "GCC",
        title: "Compiler Collection",
        url: "https://gcc.gnu.org/onlinedocs/",
        description: "GCC documentation",
      },
      {
        type: "Interactive Platform",
        platform: "Compiler Explorer",
        title: "Godbolt",
        url: "https://godbolt.org/",
        description: "Assembly output explorer",
      },
      {
        type: "Tutorial Series",
        platform: "x86 Assembly",
        title: "Guide",
        url: "https://www.cs.virginia.edu/~evans/cs216/guides/x86.html",
        description: "x86 assembly programming",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Machine Structures",
        url: "https://web.stanford.edu/class/cs107/",
        description: "Stanford's systems course",
      },
      {
        type: "Practice Platform",
        platform: "CTF Time",
        title: "Binary Exploitation",
        url: "https://ctftime.org/",
        description: "Systems security challenges",
      },
      {
        type: "Documentation",
        platform: "Intel",
        title: "Architecture Manuals",
        url: "https://software.intel.com/content/www/us/en/develop/articles/intel-sdm.html",
        description: "Intel architecture docs",
      },
      {
        type: "Video Course",
        platform: "Harvard",
        title: "Lower-level Programming",
        url: "https://cs50.harvard.edu/x/2023/weeks/4/",
        description: "CS50's systems week",
      },
    ],
    practicalApplications: [
      {
        field: "Performance Optimization",
        description: "Low-level optimization",
        example: "Assembly optimization techniques",
      },
      {
        field: "Embedded Systems",
        description: "Hardware programming",
        example: "Writing embedded software",
      },
      {
        field: "Systems Software",
        description: "Core software development",
        example: "Implementing device drivers",
      },
    ],
    problems: [
      "Write assembly programs",
      "Optimize memory usage",
      "Implement hardware interfaces",
      "Create efficient algorithms",
    ],
  },
  {
    title: "Concurrent Programming",
    description: "Managing multiple execution threads and processes",
    learningObjectives: [
      "Master thread management",
      "Understand synchronization",
      "Work with parallel algorithms",
      "Handle race conditions",
      "Implement concurrent patterns",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Multicore Programming",
        url: "https://ocw.mit.edu/courses/6-189-multicore-programming-primer-january-iap-2007/",
        description: "MIT's concurrency course",
      },
      {
        type: "Book",
        platform: "Manning",
        title: "C++ Concurrency in Action",
        url: "https://www.manning.com/books/c-plus-plus-concurrency-in-action",
        description: "Concurrency programming guide",
      },
      {
        type: "Video Series",
        platform: "Coursera",
        title: "Parallel Programming",
        url: "https://www.coursera.org/learn/parallel-programming-in-java",
        description: "Java concurrency course",
      },
      {
        type: "Documentation",
        platform: "POSIX Threads",
        title: "Pthreads Guide",
        url: "https://computing.llnl.gov/tutorials/pthreads/",
        description: "Threading programming guide",
      },
      {
        type: "Tutorial Series",
        platform: "GeeksforGeeks",
        title: "Concurrency",
        url: "https://www.geeksforgeeks.org/concurrent-programming-in-c/",
        description: "Concurrency tutorials",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Parallel Computing",
        url: "https://web.stanford.edu/class/cs149/",
        description: "Stanford's parallel course",
      },
      {
        type: "Interactive Platform",
        platform: "Rust",
        title: "Fearless Concurrency",
        url: "https://doc.rust-lang.org/book/ch16-00-concurrency.html",
        description: "Rust concurrency guide",
      },
      {
        type: "Video Course",
        platform: "Berkeley",
        title: "Parallel Computing",
        url: "https://sites.google.com/lbl.gov/cs267-spr2021",
        description: "Berkeley's parallel course",
      },
      {
        type: "Documentation",
        platform: "OpenMP",
        title: "API Specification",
        url: "https://www.openmp.org/specifications/",
        description: "Parallel programming API",
      },
      {
        type: "Practice Platform",
        platform: "Exercism",
        title: "Concurrency Track",
        url: "https://exercism.io/tracks/go/exercises/parallel-letter-frequency",
        description: "Concurrent programming exercises",
      },
    ],
    practicalApplications: [
      {
        field: "High-Performance Computing",
        description: "Parallel processing",
        example: "Implementing parallel algorithms",
      },
      {
        field: "Server Programming",
        description: "Concurrent servers",
        example: "Building multi-threaded servers",
      },
      {
        field: "Real-time Systems",
        description: "Concurrent operations",
        example: "Managing concurrent resources",
      },
    ],
    problems: [
      "Implement thread pool",
      "Create concurrent data structures",
      "Handle synchronization issues",
      "Design parallel algorithms",
    ],
  },
];

export default function CoursePage() {
  return (
    <CourseLayout title="Systemprogrammierung" ects={6} semester={2}>
      {COURSE_TOPICS.map((topic) => (
        <TopicSection key={topic.title} topic={topic} />
      ))}
    </CourseLayout>
  );
} 