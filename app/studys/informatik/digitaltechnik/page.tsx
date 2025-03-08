"use client";

import { CourseLayout } from "../../components/CourseLayout";
import { TopicSection } from "../../components/TopicSection";
import { CourseTopic } from "../../types/course";

const COURSE_TOPICS: CourseTopic[] = [
  {
    title: "Digital Logic Fundamentals",
    description: "Basic concepts of digital systems and boolean algebra",
    learningObjectives: [
      "Understand number systems and binary arithmetic",
      "Master boolean algebra and logic gates",
      "Work with truth tables and Karnaugh maps",
      "Analyze combinational logic circuits",
      "Design basic digital systems",
    ],
    resources: [
      {
        type: "Video Course",
        platform: "MIT OCW",
        title: "Digital Systems",
        url: "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/",
        description: "MIT's digital systems course",
      },
      {
        type: "Interactive Platform",
        platform: "Digital",
        title: "Digital Logic Simulator",
        url: "https://github.com/hneemann/Digital",
        description: "Digital circuit simulator",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Digital Design",
        url: "https://web.stanford.edu/class/ee108a/",
        description: "Stanford's digital design course",
      },
      {
        type: "Tutorial Series",
        platform: "All About Circuits",
        title: "Digital Logic",
        url: "https://www.allaboutcircuits.com/textbook/digital/",
        description: "Comprehensive digital logic guide",
      },
      {
        type: "Interactive Tool",
        platform: "CircuitVerse",
        title: "Digital Circuit Simulator",
        url: "https://circuitverse.org/",
        description: "Online circuit simulation",
      },
      {
        type: "Video Series",
        platform: "nandgame",
        title: "Nand Game",
        url: "https://nandgame.com/",
        description: "Interactive digital logic learning",
      },
      {
        type: "Course Materials",
        platform: "TU Berlin",
        title: "Digital Design",
        url: "https://www.tu-berlin.de/?id=168751",
        description: "TU Berlin's digital systems course",
      },
      {
        type: "Interactive Tool",
        platform: "HDLBits",
        title: "Verilog Practice",
        url: "https://hdlbits.01xz.net/",
        description: "Hardware description practice",
      },
      {
        type: "Documentation",
        platform: "Intel",
        title: "FPGA Resources",
        url: "https://www.intel.com/content/www/us/en/programmable/support/training/overview.html",
        description: "FPGA development resources",
      },
      {
        type: "Practice Platform",
        platform: "TinkerCAD",
        title: "Circuit Design",
        url: "https://www.tinkercad.com/learn/circuits",
        description: "Basic circuit simulation",
      },
    ],
    practicalApplications: [
      {
        field: "Computer Architecture",
        description: "Designing digital components",
        example: "Building an ALU (Arithmetic Logic Unit)",
      },
      {
        field: "Hardware Design",
        description: "Creating digital circuits",
        example: "Implementing a basic processor",
      },
      {
        field: "FPGA Development",
        description: "Programming hardware",
        example: "Custom digital circuit implementation",
      },
    ],
    problems: [
      "Design a 4-bit adder circuit",
      "Implement a basic state machine",
      "Create a simple memory unit",
      "Build a basic counter circuit",
    ],
  },
  {
    title: "Computer Architecture Basics",
    description: "Understanding fundamental computer organization and design",
    learningObjectives: [
      "Learn CPU components and operation",
      "Understand memory hierarchy",
      "Study instruction set architecture",
      "Analyze pipelining concepts",
      "Master basic assembly programming",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "Computer Architecture",
        url: "https://inst.eecs.berkeley.edu/~cs61c/",
        description: "Berkeley's computer architecture course",
      },
      {
        type: "Simulator",
        platform: "MARS",
        title: "MIPS Assembler",
        url: "http://courses.missouristate.edu/kenvollmar/mars/",
        description: "MIPS assembly simulator",
      },
      {
        type: "Book",
        platform: "Patterson & Hennessy",
        title: "Computer Organization",
        url: "https://www.elsevier.com/books/computer-organization-and-design-mips-edition/patterson/978-0-12-407726-3",
        description: "Standard computer architecture text",
      },
      {
        type: "Interactive Tool",
        platform: "Logisim",
        title: "CPU Design",
        url: "http://www.cburch.com/logisim/",
        description: "Digital logic simulator",
      },
      {
        type: "Video Series",
        platform: "ETH Zürich",
        title: "Digital Design",
        url: "https://www.systems.ethz.ch/node/334",
        description: "ETH's digital design course",
      },
      {
        type: "Interactive Course",
        platform: "Carnegie Mellon",
        title: "Computer Architecture",
        url: "http://www.cs.cmu.edu/~213/",
        description: "CMU's architecture course",
      },
      {
        type: "Video Series",
        platform: "TU München",
        title: "Computer Architecture",
        url: "https://www.in.tum.de/caps/lehre/",
        description: "TUM's architecture lectures",
      },
      {
        type: "Practice Platform",
        platform: "Compiler Explorer",
        title: "Assembly Explorer",
        url: "https://godbolt.org/",
        description: "Assembly code visualization",
      },
      {
        type: "Documentation",
        platform: "ARM",
        title: "Architecture Resources",
        url: "https://developer.arm.com/documentation/",
        description: "ARM architecture documentation",
      },
      {
        type: "Tutorial Series",
        platform: "RISC-V",
        title: "RISC-V Learning",
        url: "https://riscv.org/learn/",
        description: "Open ISA learning resources",
      },
    ],
    practicalApplications: [
      {
        field: "Processor Design",
        description: "Understanding CPU architecture",
        example: "Implementing a RISC processor",
      },
      {
        field: "Memory Systems",
        description: "Working with memory hierarchies",
        example: "Cache implementation and optimization",
      },
      {
        field: "System Integration",
        description: "Connecting hardware components",
        example: "Building a complete computer system",
      },
    ],
    problems: [
      "Design a simple RISC processor",
      "Implement cache memory system",
      "Create an instruction pipeline",
      "Build a basic I/O interface",
    ],
  },
];

export default function CoursePage() {
  return (
    <CourseLayout title="Digitaltechnik" ects={6} semester={1}>
      {COURSE_TOPICS.map((topic) => (
        <TopicSection key={topic.title} topic={topic} />
      ))}
    </CourseLayout>
  );
} 