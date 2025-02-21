"use client";

import { ArrowLeft, Book, Clock, Video, Calculator, Brain, LightbulbFilament, Function } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const COURSE_TOPICS = [
  {
    title: "Linear Algebra",
    description: "Foundation of vector spaces, matrices, and linear transformations",
    learningObjectives: [
      "Understand vector spaces and subspaces",
      "Master matrix operations and their applications",
      "Apply linear transformations in computer graphics",
      "Solve systems of linear equations",
      "Understand basis and dimension",
      "Work with eigenvalues and eigenvectors",
    ],
    resources: [
      {
        type: "Video Series",
        platform: "3Blue1Brown",
        title: "Essence of Linear Algebra",
        url: "https://www.3blue1brown.com/topics/linear-algebra",
        description: "Visual understanding of core concepts",
      },
      {
        type: "Complete Course",
        platform: "MIT OCW",
        title: "Linear Algebra (Gilbert Strang)",
        url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
        description: "MIT's comprehensive linear algebra course",
      },
      {
        type: "Interactive Practice",
        platform: "Khan Academy",
        title: "Linear Algebra Course",
        url: "https://www.khanacademy.org/math/linear-algebra",
        description: "Interactive exercises and video explanations",
      },
      {
        type: "Lecture Notes",
        platform: "Harvard",
        title: "Math 21b: Linear Algebra",
        url: "https://people.math.harvard.edu/~knill/teaching/math21b2018/",
        description: "Harvard's detailed course materials",
      },
      {
        type: "Video Lectures",
        platform: "Stanford",
        title: "Stanford Linear Algebra",
        url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMz-WbFQtNUsUElIh2cPmN9",
        description: "Stanford's linear algebra lecture series",
      },
      {
        type: "Interactive Tools",
        platform: "GeoGebra",
        title: "Linear Algebra Visualizations",
        url: "https://www.geogebra.org/m/X7qvjvE9",
        description: "Interactive visualizations of linear transformations",
      },
      {
        type: "Practice Problems",
        platform: "MIT OCW",
        title: "Linear Algebra Problem Sets",
        url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/assignments/",
        description: "MIT's problem sets with solutions",
      },
      {
        type: "Online Textbook",
        platform: "Upenn",
        title: "Interactive Linear Algebra",
        url: "https://textbooks.math.gatech.edu/ila/",
        description: "Free interactive textbook with examples",
      },
      {
        type: "Applications",
        platform: "Cornell",
        title: "Applications of Linear Algebra",
        url: "https://pi.math.cornell.edu/~andreim/math2310/",
        description: "Real-world applications and examples",
      },
      {
        type: "Computational Tools",
        platform: "Python",
        title: "Linear Algebra with Python",
        url: "https://numpy.org/doc/stable/reference/routines.linalg.html",
        description: "Implementing linear algebra in programming",
      },
    ],
    practicalApplications: [
      {
        field: "Computer Graphics",
        description: "3D transformations and animations",
        example: "Game engines use matrices for object positioning",
      },
      {
        field: "Machine Learning",
        description: "Data transformations and neural networks",
        example: "Neural network layers use matrix operations",
      },
    ],
    problems: [
      "Solve systems of linear equations using Gaussian elimination",
      "Find eigenvalues and eigenvectors of transformation matrices",
      "Apply matrix operations to transform 3D objects",
    ],
  },
  {
    title: "Complex Numbers",
    description: "Understanding and working with complex numbers and their applications",
    learningObjectives: [
      "Master complex number operations",
      "Understand geometric interpretation",
      "Apply complex numbers in signal processing",
      "Work with polar form and exponentials",
    ],
    resources: [
      {
        type: "Video Series",
        platform: "3Blue1Brown",
        title: "Complex Analysis",
        url: "https://www.3blue1brown.com/topics/complex-analysis",
        description: "Visual understanding of complex numbers",
      },
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Complex Variables",
        url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/",
        description: "MIT's complete complex analysis course",
      },
      {
        type: "Interactive Tools",
        platform: "GeoGebra",
        title: "Complex Number Visualizer",
        url: "https://www.geogebra.org/m/nUjjwuHG",
        description: "Interactive complex number operations",
      },
      {
        type: "Practice",
        platform: "Khan Academy",
        title: "Complex Numbers Course",
        url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:complex",
        description: "Comprehensive practice with solutions",
      },
      {
        type: "Video Lectures",
        platform: "NPTEL",
        title: "Complex Analysis",
        url: "https://nptel.ac.in/courses/111106084",
        description: "Full course with applications",
      },
      {
        type: "Applications",
        platform: "Stanford",
        title: "EE Systems",
        url: "https://web.stanford.edu/~boyd/ee102/",
        description: "Complex numbers in electrical engineering",
      },
      {
        type: "Programming",
        platform: "Python",
        title: "SciPy Complex",
        url: "https://docs.scipy.org/doc/numpy/reference/routines.complex.html",
        description: "Complex number computations in Python",
      },
      {
        type: "Course Notes",
        platform: "Cambridge",
        title: "Complex Methods",
        url: "https://www.damtp.cam.ac.uk/user/reh10/lectures/nst-mmii-chapter1.pdf",
        description: "Detailed complex analysis notes",
      },
      {
        type: "Interactive Book",
        platform: "Complex Analysis",
        title: "Visual Complex Analysis",
        url: "https://complex-analysis.com/",
        description: "Interactive textbook with visualizations",
      },
      {
        type: "Problem Sets",
        platform: "Harvard",
        title: "Complex Analysis Problems",
        url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/13/html/home/pset.html",
        description: "Advanced problem sets with solutions",
      },
    ],
    practicalApplications: [
      {
        field: "Signal Processing",
        description: "Fourier transforms and signal analysis",
        example: "Audio processing in digital systems",
      },
      {
        field: "Control Systems",
        description: "System stability analysis",
        example: "Robotics control systems",
      },
    ],
    problems: [
      "Perform complex number arithmetic",
      "Convert between polar and rectangular forms",
      "Solve equations with complex numbers",
    ],
  },
  {
    title: "Mathematical Logic",
    description: "Foundations of mathematical reasoning and proof techniques",
    learningObjectives: [
      "Understand propositional and predicate logic",
      "Master different proof techniques",
      "Apply logical reasoning to problem-solving",
      "Work with quantifiers and logical operators",
    ],
    resources: [
      {
        type: "Course",
        platform: "Stanford",
        title: "Introduction to Logic",
        url: "https://www.coursera.org/learn/logic-introduction",
        description: "Stanford's foundational logic course",
      },
      {
        type: "Video Series",
        platform: "MIT OCW",
        title: "Mathematics for Computer Science",
        url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/video_galleries/video-lectures/",
        description: "Logic and proof techniques lectures",
      },
      {
        type: "Interactive Course",
        platform: "CMU",
        title: "Logic & Proofs",
        url: "https://leanprover.github.io/logic_and_proof/",
        description: "Interactive theorem proving course",
      },
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "Mathematical Logic",
        url: "https://math.berkeley.edu/~scanlon/math125/",
        description: "Advanced logic course materials",
      },
      {
        type: "Practice Platform",
        platform: "Metamath",
        title: "Interactive Proof Explorer",
        url: "http://us.metamath.org/",
        description: "Database of formal mathematical proofs",
      },
      {
        type: "Online Book",
        platform: "OpenLogicProject",
        title: "Open Logic Text",
        url: "https://openlogicproject.org/",
        description: "Comprehensive logic textbook",
      },
      {
        type: "Programming",
        platform: "Coq",
        title: "Software Foundations",
        url: "https://softwarefoundations.cis.upenn.edu/",
        description: "Logic in programming",
      },
      {
        type: "Course Notes",
        platform: "Oxford",
        title: "Logic and Proof",
        url: "https://www.cs.ox.ac.uk/teaching/materials21-22/logic/",
        description: "Oxford's logic course materials",
      },
      {
        type: "Interactive Tools",
        platform: "Stanford",
        title: "Natural Deduction",
        url: "https://stanford.edu/class/archive/cs/cs103/cs103.1164/tools/truth-table-tool/",
        description: "Truth table generator and checker",
      },
      {
        type: "Video Series",
        platform: "NPTEL",
        title: "Mathematical Logic",
        url: "https://nptel.ac.in/courses/106/106/106106184/",
        description: "Comprehensive logic video course",
      },
    ],
    practicalApplications: [
      {
        field: "Program Verification",
        description: "Proving program correctness",
        example: "Formal verification of critical systems",
      },
      {
        field: "Database Theory",
        description: "Query optimization and validation",
        example: "SQL query logical analysis",
      },
    ],
    problems: [
      "Construct truth tables",
      "Write formal proofs",
      "Analyze logical statements",
    ],
  },
  {
    title: "Number Theory",
    description: "Properties of integers, prime numbers, and modular arithmetic",
    learningObjectives: [
      "Understand divisibility and prime numbers",
      "Master modular arithmetic",
      "Apply number theory to cryptography",
      "Work with congruences",
    ],
    resources: [
      {
        type: "Course",
        platform: "MIT OCW",
        title: "Number Theory I",
        url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/",
        description: "Introduction to number theory concepts",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Elementary Number Theory",
        url: "https://stanford.edu/class/cs109/",
        description: "Stanford's number theory course materials",
      },
      {
        type: "Video Series",
        platform: "3Blue1Brown",
        title: "Number Theory",
        url: "https://www.3blue1brown.com/topics/number-theory",
        description: "Visual explanations of number theory",
      },
      {
        type: "Interactive Course",
        platform: "Khan Academy",
        title: "Number Theory Foundations",
        url: "https://www.khanacademy.org/math/math-for-fun-and-glory/number-theory",
        description: "Practice with fundamental concepts",
      },
      {
        type: "Programming",
        platform: "SageMath",
        title: "Computational Number Theory",
        url: "https://doc.sagemath.org/html/en/thematic_tutorials/number_theory.html",
        description: "Number theory computations",
      },
      {
        type: "Course Notes",
        platform: "Cambridge",
        title: "Number Theory Notes",
        url: "https://www.dpmms.cam.ac.uk/~paf1/nt.html",
        description: "Advanced number theory materials",
      },
      {
        type: "Practice Problems",
        platform: "Project Euler",
        title: "Number Theory Problems",
        url: "https://projecteuler.net/archives",
        description: "Programming challenges in number theory",
      },
      {
        type: "Online Book",
        platform: "UC Berkeley",
        title: "Elementary Number Theory",
        url: "https://math.berkeley.edu/~ribet/books/ant.pdf",
        description: "Comprehensive number theory textbook",
      },
      {
        type: "Interactive Tools",
        platform: "Wolfram",
        title: "Number Theory Tools",
        url: "https://www.wolframalpha.com/examples/mathematics/number-theory",
        description: "Interactive number theory computations",
      },
      {
        type: "Video Course",
        platform: "NPTEL",
        title: "Number Theory and Cryptography",
        url: "https://nptel.ac.in/courses/106/103/106103262/",
        description: "Applications in cryptography",
      },
    ],
    practicalApplications: [
      {
        field: "Cryptography",
        description: "Public key encryption systems",
        example: "RSA algorithm implementation",
      },
      {
        field: "Hash Functions",
        description: "Data integrity verification",
        example: "Blockchain technology",
      },
    ],
    problems: [
      "Find GCD using Euclidean algorithm",
      "Solve linear congruences",
      "Work with prime factorizations",
    ],
  },
  {
    title: "Discrete Mathematics",
    description: "Logic, proofs, sets, relations, and combinatorics",
    learningObjectives: [
      "Master mathematical proof techniques",
      "Understand set theory and operations",
      "Apply combinatorial principles",
      "Work with relations and functions",
    ],
    resources: [
      {
        type: "Course",
        platform: "MIT OpenCourseWare",
        title: "Mathematics for Computer Science",
        url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/",
        description: "Comprehensive discrete math course",
      },
      {
        type: "Course Materials",
        platform: "Princeton",
        title: "Discrete Mathematics",
        url: "https://www.cs.princeton.edu/courses/archive/fall20/cos340/",
        description: "Princeton's course materials and assignments",
      },
      {
        type: "Lecture Notes",
        platform: "ETH Zürich",
        title: "Discrete Mathematics",
        url: "https://www.cadmo.ethz.ch/education/lectures/HS19/DM/",
        description: "ETH's discrete mathematics lecture notes",
      },
      {
        type: "Video Series",
        platform: "3Blue1Brown",
        title: "Discrete Math Visualized",
        url: "https://www.3blue1brown.com/topics/discrete-math",
        description: "Visual explanations of key concepts",
      },
      {
        type: "Interactive Course",
        platform: "CMU",
        title: "Discrete Mathematics",
        url: "https://www.cs.cmu.edu/~15251/",
        description: "CMU's comprehensive course",
      },
      {
        type: "Practice Platform",
        platform: "DIMACS",
        title: "Discrete Math Problems",
        url: "http://dimacs.rutgers.edu/archive/VSP/problems.html",
        description: "Advanced problem sets",
      },
      {
        type: "Online Book",
        platform: "UC San Diego",
        title: "Discrete Mathematics",
        url: "https://cseweb.ucsd.edu/~gill/BWLectSite/",
        description: "Free comprehensive textbook",
      },
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "CS70",
        url: "https://www.eecs70.org/",
        description: "Berkeley's discrete math and probability",
      },
      {
        type: "Interactive Tools",
        platform: "NIST",
        title: "Digital Library of Math Functions",
        url: "https://dlmf.nist.gov/",
        description: "Reference for special functions",
      },
      {
        type: "Video Course",
        platform: "IIT",
        title: "Discrete Structures",
        url: "https://nptel.ac.in/courses/106/103/106103073/",
        description: "Complete video course",
      },
    ],
    practicalApplications: [
      {
        field: "Algorithm Analysis",
        description: "Proving algorithm correctness",
        example: "Using induction to verify recursive algorithms",
      },
      {
        field: "Cryptography",
        description: "Number theory for encryption",
        example: "RSA encryption using modular arithmetic",
      },
    ],
    problems: [
      "Prove statements using mathematical induction",
      "Solve counting problems using combinatorics",
      "Apply set operations to solve problems",
    ],
  },
  {
    title: "Calculus Foundations",
    description: "Limits, derivatives, and integrals with CS applications",
    learningObjectives: [
      "Understand limits and continuity",
      "Master differentiation rules",
      "Apply integration techniques",
      "Solve optimization problems",
    ],
    resources: [
      {
        type: "Video Series",
        platform: "MIT OpenCourseWare",
        title: "Single Variable Calculus",
        url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/",
        description: "Complete calculus course with examples",
      },
      {
        type: "Course Materials",
        platform: "Harvard",
        title: "Calculus at Harvard",
        url: "https://people.math.harvard.edu/~knill/teaching/math1a2020/",
        description: "Harvard's calculus course materials and exercises",
      },
      {
        type: "Interactive Course",
        platform: "Stanford",
        title: "Introduction to Calculus",
        url: "https://stanford.edu/class/math19/",
        description: "Stanford's interactive calculus materials",
      },
      {
        type: "Video Series",
        platform: "3Blue1Brown",
        title: "Essence of Calculus",
        url: "https://www.3blue1brown.com/topics/calculus",
        description: "Visual calculus explanations",
      },
      {
        type: "Practice Platform",
        platform: "Paul's Online Notes",
        title: "Calculus Notes",
        url: "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx",
        description: "Comprehensive notes and practice",
      },
      {
        type: "Interactive Tools",
        platform: "GeoGebra",
        title: "Calculus Applets",
        url: "https://www.geogebra.org/t/calculus",
        description: "Interactive calculus visualizations",
      },
      {
        type: "Course Materials",
        platform: "CalTech",
        title: "Calculus",
        url: "http://www.math.caltech.edu/~2018-19/1term/ma001a/",
        description: "CalTech's calculus materials",
      },
      {
        type: "Programming",
        platform: "Python",
        title: "SymPy Calculus",
        url: "https://docs.sympy.org/latest/tutorials/intro-tutorial/calculus.html",
        description: "Symbolic mathematics in Python",
      },
      {
        type: "Problem Sets",
        platform: "MIT OCW",
        title: "Calculus Problems",
        url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/assignments/",
        description: "MIT's problem sets with solutions",
      },
      {
        type: "Interactive Course",
        platform: "NPTEL",
        title: "Calculus of One Variable",
        url: "https://nptel.ac.in/courses/111/106/111106143/",
        description: "Complete calculus course",
      },
    ],
    practicalApplications: [
      {
        field: "Optimization",
        description: "Finding optimal solutions",
        example: "Gradient descent in machine learning",
      },
      {
        field: "Computer Graphics",
        description: "Smooth animations and curves",
        example: "Bezier curves in graphics software",
      },
    ],
    problems: [
      "Find limits of complex functions",
      "Solve optimization problems using derivatives",
      "Calculate areas using integration",
    ],
  },
] as const;

const TopicSection = ({ topic }: { topic: (typeof COURSE_TOPICS)[0] }) => (
  <section className="bg-[#151C14] border border-[#2A3828]/30 rounded-lg p-8 mb-8 cursor-default">
    <div className="flex items-center gap-3 mb-6">
      <Function size={24} className="text-[#A0A2A0]" />
      <h2 className="text-2xl text-[#A0A2A0] font-bold">{topic.title}</h2>
    </div>

    <div className="space-y-8 cursor-default">
      {/* Overview */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-2">Overview</h3>
        <p className="text-[#A0A2A0]/80">{topic.description}</p>
      </div>

      {/* Learning Objectives */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-2">Learning Objectives</h3>
        <ul className="list-disc list-inside text-[#A0A2A0]/80 space-y-1">
          {topic.learningObjectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-3">Learning Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {topic.resources.map((resource) => (
            <Link
              key={resource.url}
              href={resource.url}
              target="_blank"
              className="block p-4 border border-[#2A3828]/30 rounded-lg hover:bg-[#1A2310] transition-colors duration-200 cursor-pointer"
            >
              <h4 className="text-[#A0A2A0] font-bold text-sm">{resource.title}</h4>
              <p className="text-[#A0A2A0]/80 text-xs mt-1">{resource.description}</p>
              <p className="text-[#A0A2A0]/60 text-xs mt-1">{resource.platform}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-3">Practical Applications</h3>
        <div className="space-y-4">
          {topic.practicalApplications.map((app) => (
            <div key={app.field} className="border-t border-[#2A3828]/30 pt-3 first:border-0 first:pt-0">
              <h4 className="text-[#A0A2A0] font-bold">{app.field}</h4>
              <p className="text-[#A0A2A0]/80 text-sm mt-1">{app.description}</p>
              <p className="text-[#A0A2A0]/60 text-sm mt-1 italic">Example: {app.example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Problems */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-2">Practice Problems</h3>
        <ul className="list-disc list-inside text-[#A0A2A0]/80 space-y-1">
          {topic.problems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default function CoursePage() {
  return (
    <div className="w-full relative overflow-hidden">
      <main className="flex flex-col items-center justify-start min-h-screen bg-[#0A1109]/90 py-8 px-4">
        <header className="w-full max-w-7xl flex items-center justify-between mb-12">
          <Link
            href="/studys/informatik"
            className="text-lg text-[#A0A2A0] hover:scale-110 transition-transform p-4 flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft size={24} />
            <span>Back to Informatik</span>
          </Link>
          <h1 className="text-4xl text-center text-[#A0A2A0] font-bold">
            Mathematik für Informatiker I
          </h1>
          <div className="w-[88px]" />
        </header>

        <div className="w-full max-w-4xl">
          <div className="flex gap-6 mb-8">
            <div className="flex items-center gap-2 text-[#A0A2A0]/80">
              <Clock size={20} />
              <span>8 ECTS</span>
            </div>
            <div className="flex items-center gap-2 text-[#A0A2A0]/80">
              <Book size={20} />
              <span>Semester 1</span>
            </div>
          </div>

          {COURSE_TOPICS.map((topic) => (
            <TopicSection key={topic.title} topic={topic} />
          ))}
        </div>
      </main>
    </div>
  );
} 