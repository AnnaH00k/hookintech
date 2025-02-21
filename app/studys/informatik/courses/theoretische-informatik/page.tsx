"use client";

import { CourseLayout } from "../../../components/CourseLayout";
import { TopicSection } from "../../../components/TopicSection";
import { CourseTopic } from "../../../types/course";

const COURSE_TOPICS: CourseTopic[] = [
  {
    title: "Automata Theory",
    description: "Study of abstract machines and computation",
    learningObjectives: [
      "Understand finite automata",
      "Master regular expressions",
      "Work with pushdown automata",
      "Analyze Turing machines",
      "Apply formal language theory",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Automata Theory",
        url: "https://web.stanford.edu/class/cs154/",
        description: "Stanford's automata course",
      },
      {
        type: "Interactive Platform",
        platform: "JFLAP",
        title: "Automata Simulator",
        url: "https://www.jflap.org/",
        description: "Visual automata construction",
      },
      {
        type: "Video Course",
        platform: "MIT OCW",
        title: "Theory of Computation",
        url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/",
        description: "MIT's computation theory",
      },
      {
        type: "Book",
        platform: "Sipser",
        title: "Introduction to Theory of Computation",
        url: "https://www.cengage.com/c/introduction-to-the-theory-of-computation-3e-sipser/9781133187790/",
        description: "Classic theoretical CS text",
      },
      {
        type: "Tutorial Series",
        platform: "GeeksforGeeks",
        title: "Automata Theory",
        url: "https://www.geeksforgeeks.org/automata-theory-introduction/",
        description: "Comprehensive tutorials",
      },
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "CS Theory",
        url: "https://people.eecs.berkeley.edu/~luca/cs172/",
        description: "Berkeley's theory course",
      },
      {
        type: "Interactive Tool",
        platform: "AutomataSim",
        title: "Automata Visualization",
        url: "https://automatonsimulator.com/",
        description: "Online automata simulator",
      },
      {
        type: "Video Series",
        platform: "Coursera",
        title: "Automata Theory",
        url: "https://www.coursera.org/learn/automata",
        description: "Stanford's online course",
      },
      {
        type: "Practice Platform",
        platform: "Brilliant",
        title: "Computer Science Foundations",
        url: "https://brilliant.org/courses/computer-science-fundamentals/",
        description: "Interactive CS theory",
      },
      {
        type: "Documentation",
        platform: "TUM",
        title: "Theoretical CS",
        url: "https://www.in.tum.de/en/i07/teaching/winter-semester-202223/theoretical-computer-science/",
        description: "TUM's theory materials",
      },
    ],
    practicalApplications: [
      {
        field: "Compiler Design",
        description: "Lexical analysis and parsing",
        example: "Building a simple compiler",
      },
      {
        field: "Pattern Matching",
        description: "Text processing algorithms",
        example: "Implementing regex engine",
      },
      {
        field: "Protocol Verification",
        description: "System verification",
        example: "Verifying network protocols",
      },
    ],
    problems: [
      "Design finite automata",
      "Convert NFAs to DFAs",
      "Create regular expressions",
      "Implement pushdown automata",
    ],
  },
  {
    title: "Computability Theory",
    description: "Understanding what can and cannot be computed",
    learningObjectives: [
      "Study decidability concepts",
      "Analyze computational complexity",
      "Understand P vs NP",
      "Master reduction techniques",
      "Work with NP-completeness",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "MIT",
        title: "Complexity Theory",
        url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/",
        description: "MIT's complexity course",
      },
      {
        type: "Video Series",
        platform: "Coursera",
        title: "Computational Complexity",
        url: "https://www.coursera.org/learn/computational-complexity",
        description: "Advanced complexity topics",
      },
      {
        type: "Book",
        platform: "Arora & Barak",
        title: "Computational Complexity",
        url: "https://theory.cs.princeton.edu/complexity/",
        description: "Modern complexity theory",
      },
      {
        type: "Tutorial Series",
        platform: "CS Theory",
        title: "Complexity Classes",
        url: "https://complexityzoo.net/Complexity_Zoo",
        description: "Complexity class catalog",
      },
      {
        type: "Course Materials",
        platform: "Princeton",
        title: "Theory of Computing",
        url: "https://www.cs.princeton.edu/courses/archive/fall21/cos521/",
        description: "Princeton's theory course",
      },
      {
        type: "Interactive Platform",
        platform: "Complexity Explorer",
        title: "P vs NP",
        url: "https://complexityexplorer.org/",
        description: "Interactive complexity learning",
      },
      {
        type: "Video Course",
        platform: "Harvard",
        title: "Computational Complexity",
        url: "https://www.seas.harvard.edu/courses/cs121",
        description: "Harvard's complexity course",
      },
      {
        type: "Documentation",
        platform: "ETH Zürich",
        title: "Theoretical CS",
        url: "https://www.ethz.ch/content/specialinterest/infk/theoretical-computer-science/en.html",
        description: "ETH's theory resources",
      },
      {
        type: "Practice Platform",
        platform: "CodeChef",
        title: "Hard Problems",
        url: "https://www.codechef.com/",
        description: "NP-hard problem practice",
      },
      {
        type: "Tutorial Series",
        platform: "Reduction Rules",
        title: "NP-Completeness",
        url: "https://www.cs.umd.edu/class/fall2019/cmsc451/Reductions.pdf",
        description: "Reduction techniques",
      },
    ],
    practicalApplications: [
      {
        field: "Algorithm Design",
        description: "Complexity analysis",
        example: "Optimizing algorithmic solutions",
      },
      {
        field: "Cryptography",
        description: "Security proofs",
        example: "Analyzing encryption schemes",
      },
      {
        field: "Optimization",
        description: "NP-hard problems",
        example: "Solving traveling salesman",
      },
    ],
    problems: [
      "Prove NP-completeness",
      "Design reduction proofs",
      "Analyze algorithm complexity",
      "Solve decidability problems",
    ],
  },
  {
    title: "Formal Languages",
    description: "Study of mathematically defined languages",
    learningObjectives: [
      "Master Chomsky hierarchy",
      "Understand context-free grammars",
      "Work with parsing techniques",
      "Apply pumping lemmas",
      "Analyze language properties",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "CMU",
        title: "Formal Languages",
        url: "https://www.cs.cmu.edu/~rwh/courses/ppl/",
        description: "CMU's language theory",
      },
      {
        type: "Interactive Tool",
        platform: "CFGtoolbox",
        title: "Grammar Tools",
        url: "http://mdaines.github.io/grammophone/",
        description: "Grammar analysis tools",
      },
      {
        type: "Video Series",
        platform: "NPTEL",
        title: "Formal Languages",
        url: "https://nptel.ac.in/courses/106/103/106103070/",
        description: "Comprehensive language theory",
      },
      {
        type: "Book",
        platform: "Hopcroft & Ullman",
        title: "Formal Languages",
        url: "https://www.pearson.com/en-us/subject-catalog/p/introduction-to-automata-theory-languages-and-computation/P200000003546",
        description: "Classic language theory text",
      },
      {
        type: "Tutorial Series",
        platform: "GeeksforGeeks",
        title: "Formal Languages",
        url: "https://www.geeksforgeeks.org/formal-languages-and-automata-theory-introduction/",
        description: "Language theory tutorials",
      },
      {
        type: "Course Materials",
        platform: "Oxford",
        title: "Formal Languages",
        url: "https://www.cs.ox.ac.uk/teaching/courses/2020-2021/formal/",
        description: "Oxford's language theory",
      },
      {
        type: "Interactive Platform",
        platform: "Grammar Checker",
        title: "CFG Analysis",
        url: "https://cyberzhg.github.io/toolbox/",
        description: "Grammar analysis tools",
      },
      {
        type: "Documentation",
        platform: "TU Wien",
        title: "Formal Methods",
        url: "https://www.complang.tuwien.ac.at/anton/formal-methods.html",
        description: "Formal methods resources",
      },
      {
        type: "Practice Platform",
        platform: "Exercism",
        title: "Parser Exercises",
        url: "https://exercism.org/tracks/python/exercises/parse-binary",
        description: "Parsing practice problems",
      },
      {
        type: "Video Course",
        platform: "UC Davis",
        title: "Formal Languages",
        url: "https://www.cs.ucdavis.edu/~rogaway/classes/120/spring14/",
        description: "UC Davis language theory",
      },
    ],
    practicalApplications: [
      {
        field: "Compiler Construction",
        description: "Grammar implementation",
        example: "Building a parser generator",
      },
      {
        field: "Natural Language Processing",
        description: "Language modeling",
        example: "Implementing context-free parsers",
      },
      {
        field: "Protocol Design",
        description: "Formal specifications",
        example: "Defining communication protocols",
      },
    ],
    problems: [
      "Design context-free grammars",
      "Apply pumping lemma proofs",
      "Create language parsers",
      "Analyze grammar properties",
    ],
  },
];

export default function CoursePage() {
  return (
    <CourseLayout title="Theoretische Informatik" ects={6} semester={2}>
      {COURSE_TOPICS.map((topic) => (
        <TopicSection key={topic.title} topic={topic} />
      ))}
    </CourseLayout>
  );
} 