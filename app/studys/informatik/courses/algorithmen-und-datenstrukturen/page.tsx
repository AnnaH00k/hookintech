"use client";

import {
  ArrowLeft,
  Book,
  Clock,
  Video,
  Calculator,
  Brain,
  LightbulbFilament,
  Function,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const COURSE_TOPICS = [
  {
    title: "Basic Data Structures",
    description: "Fundamental data structures and their implementations",
    learningObjectives: [
      "Understand arrays and linked lists",
      "Master stack and queue implementations",
      "Work with trees and graphs",
      "Implement hash tables",
      "Analyze space and time complexity",
    ],
    resources: [
      {
        type: "Video Series",
        platform: "MIT OCW",
        title: "Introduction to Algorithms",
        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
        description: "MIT's comprehensive algorithms course",
      },
      {
        type: "Interactive Course",
        platform: "Stanford",
        title: "Algorithms Specialization",
        url: "https://www.coursera.org/specializations/algorithms",
        description: "Stanford's algorithm course series",
      },
      {
        type: "Practice Platform",
        platform: "LeetCode",
        title: "Data Structure Learning",
        url: "https://leetcode.com/explore/learn/",
        description: "Interactive coding challenges",
      },
      {
        type: "Visualization",
        platform: "VisuAlgo",
        title: "Data Structure Visualizations",
        url: "https://visualgo.net/",
        description: "Interactive algorithm animations",
      },
      {
        type: "Course Materials",
        platform: "Princeton",
        title: "Algorithms, Part I",
        url: "https://algs4.cs.princeton.edu/home/",
        description: "Princeton's algorithm course materials",
      },
      {
        type: "Interactive Book",
        platform: "Open DSA",
        title: "Data Structures & Algorithms",
        url: "https://opendsa-server.cs.vt.edu/",
        description: "Interactive textbook with visualizations",
      },
      {
        type: "Programming",
        platform: "GitHub",
        title: "TheAlgorithms/Python",
        url: "https://github.com/TheAlgorithms/Python",
        description: "Algorithm implementations in Python",
      },
      {
        type: "Practice Problems",
        platform: "HackerRank",
        title: "Data Structures",
        url: "https://www.hackerrank.com/domains/data-structures",
        description: "Practice implementing data structures",
      },
      {
        type: "Video Course",
        platform: "ETH Zürich",
        title: "Algorithms and Data Structures",
        url: "https://www.cadmo.ethz.ch/education/lectures/HS21/DA/index.html",
        description: "ETH's algorithm course materials",
      },
      {
        type: "Interactive Tools",
        platform: "USFCA",
        title: "Data Structure Visualizations",
        url: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
        description: "Interactive algorithm visualizations",
      },
    ],
    practicalApplications: [
      {
        field: "Database Systems",
        description: "Efficient data organization and retrieval",
        example: "B-trees in database indexing",
      },
      {
        field: "Operating Systems",
        description: "Memory management and scheduling",
        example: "Process scheduling queues",
      },
    ],
    problems: [
      "Implement a balanced binary search tree",
      "Design a hash table with collision handling",
      "Create a priority queue using heaps",
    ],
  },
  {
    title: "Algorithm Analysis & Complexity",
    description: "Understanding and analyzing algorithm efficiency",
    learningObjectives: [
      "Master Big O notation",
      "Analyze time and space complexity",
      "Compare algorithm efficiency",
      "Understand NP-completeness",
      "Identify algorithmic bottlenecks",
    ],
    resources: [
      {
        type: "Video Series",
        platform: "MIT OCW",
        title: "Analysis of Algorithms",
        url: "https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/",
        description: "Advanced algorithm analysis",
      },
      {
        type: "Interactive Course",
        platform: "Stanford",
        title: "Complexity Theory",
        url: "https://www.coursera.org/learn/computational-complexity",
        description: "Deep dive into complexity theory",
      },
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "CS170",
        url: "https://cs170.org/",
        description: "Efficient algorithms and intractable problems",
      },
      {
        type: "Video Lectures",
        platform: "Harvard",
        title: "Advanced Algorithms",
        url: "https://www.youtube.com/playlist?list=PL2SOU6wwxB0uP4rJgf5ayhHWgw7akUWSf",
        description: "Harvard's advanced algorithms course",
      },
      {
        type: "Interactive Tool",
        platform: "Toptal",
        title: "Big-O Cheat Sheet",
        url: "https://www.bigocheatsheet.com/",
        description: "Visual complexity comparisons",
      },
      {
        type: "Practice Platform",
        platform: "CodeSignal",
        title: "Algorithm Complexity",
        url: "https://codesignal.com/",
        description: "Practice with complexity analysis",
      },
      {
        type: "Course Notes",
        platform: "CMU",
        title: "Algorithm Analysis",
        url: "https://www.cs.cmu.edu/~15451/",
        description: "CMU's algorithm analysis materials",
      },
      {
        type: "Book",
        platform: "CLRS",
        title: "Introduction to Algorithms",
        url: "https://mitpress.mit.edu/books/introduction-algorithms-fourth-edition",
        description: "Comprehensive algorithm textbook",
      },
      {
        type: "Interactive Demos",
        platform: "Algorithm Visualizer",
        title: "Algorithm Complexity",
        url: "https://algorithm-visualizer.org/",
        description: "Visualize algorithm performance",
      },
      {
        type: "Course Materials",
        platform: "ETH Zürich",
        title: "Complexity Theory",
        url: "https://www.ethz.ch/content/specialinterest/infk/theoretical-computer-science/en/research/complexity.html",
        description: "Advanced complexity theory",
      },
    ],
    practicalApplications: [
      {
        field: "System Design",
        description: "Optimizing large-scale systems",
        example: "Choosing efficient data structures for high-load services",
      },
      {
        field: "Performance Engineering",
        description: "Identifying and resolving bottlenecks",
        example: "Optimizing database query performance",
      },
      {
        field: "Resource Planning",
        description: "Estimating computational requirements",
        example: "Cloud infrastructure scaling decisions",
      },
    ],
    problems: [
      "Analyze time complexity of recursive algorithms",
      "Compare different solutions for the same problem",
      "Identify complexity classes of algorithms",
      "Optimize algorithms for better performance",
    ],
  },
  {
    title: "Sorting & Searching Algorithms",
    description: "Fundamental algorithms for organizing and finding data",
    learningObjectives: [
      "Master common sorting algorithms",
      "Understand searching techniques",
      "Analyze algorithm efficiency",
      "Implement optimal solutions",
      "Choose appropriate algorithms for different scenarios",
    ],
    resources: [
      {
        type: "Video Series",
        platform: "MIT OCW",
        title: "Sorting and Searching",
        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-6-avl-trees-avl-sort/",
        description: "Comprehensive sorting algorithms",
      },
      {
        type: "Interactive Visualizations",
        platform: "USF",
        title: "Sorting Algorithms",
        url: "https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html",
        description: "Visual comparison of sorting algorithms",
      },
      {
        type: "Practice Platform",
        platform: "AlgoExpert",
        title: "Sorting Problems",
        url: "https://www.algoexpert.io/questions?category=Sorting",
        description: "Practice sorting implementations",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Sorting Algorithms",
        url: "https://stanford.edu/class/archive/cs/cs161/cs161.1168/",
        description: "Stanford's sorting algorithm analysis",
      },
      {
        type: "Interactive Tutorial",
        platform: "Visualgo",
        title: "Sorting Visualizer",
        url: "https://visualgo.net/en/sorting",
        description: "Interactive sorting demonstrations",
      },
      {
        type: "Video Course",
        platform: "Princeton",
        title: "Mergesort & Quicksort",
        url: "https://www.coursera.org/learn/algorithms-part1/home/week/3",
        description: "Deep dive into efficient sorting",
      },
      {
        type: "Practice Problems",
        platform: "LeetCode",
        title: "Binary Search Problems",
        url: "https://leetcode.com/tag/binary-search/",
        description: "Search algorithm practice",
      },
      {
        type: "Course Notes",
        platform: "Berkeley",
        title: "Sorting & Searching",
        url: "https://cs61b.bencuan.me/sorting/",
        description: "Berkeley's algorithm materials",
      },
      {
        type: "Interactive Book",
        platform: "UIUC",
        title: "Searching Algorithms",
        url: "https://jeffe.cs.illinois.edu/teaching/algorithms/",
        description: "Comprehensive algorithm textbook",
      },
      {
        type: "Implementation Guide",
        platform: "GeeksforGeeks",
        title: "Sorting Implementations",
        url: "https://www.geeksforgeeks.org/sorting-algorithms/",
        description: "Detailed implementation guides",
      },
    ],
    practicalApplications: [
      {
        field: "Database Systems",
        description: "Efficient data retrieval",
        example: "Implementing database indexing",
      },
      {
        field: "File Systems",
        description: "Organizing and searching files",
        example: "File name sorting in directories",
      },
      {
        field: "Data Analytics",
        description: "Processing large datasets",
        example: "Sorting and searching big data",
      },
    ],
    problems: [
      "Implement QuickSort with different pivot strategies",
      "Create an efficient binary search implementation",
      "Optimize sorting for nearly sorted data",
      "Implement hybrid sorting algorithms",
    ],
  },
  {
    title: "Graph Algorithms",
    description: "Algorithms for processing and analyzing graph structures",
    learningObjectives: [
      "Understand graph representations",
      "Master graph traversal algorithms",
      "Implement shortest path algorithms",
      "Work with minimum spanning trees",
      "Analyze graph connectivity",
    ],
    resources: [
      {
        type: "Video Series",
        platform: "MIT OCW",
        title: "Graph Algorithms",
        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-13-breadth-first-search-bfs/",
        description: "MIT's graph algorithm course",
      },
      {
        type: "Interactive Tool",
        platform: "Visualgo",
        title: "Graph Visualization",
        url: "https://visualgo.net/en/graphds",
        description: "Interactive graph algorithm demos",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Graph Theory",
        url: "https://web.stanford.edu/class/cs161/",
        description: "Stanford's graph algorithm course",
      },
      {
        type: "Practice Platform",
        platform: "LeetCode",
        title: "Graph Problems",
        url: "https://leetcode.com/tag/graph/",
        description: "Graph algorithm practice",
      },
      {
        type: "Video Course",
        platform: "Coursera",
        title: "Graph Algorithms",
        url: "https://www.coursera.org/learn/algorithms-on-graphs",
        description: "UCSD's graph algorithm course",
      },
      {
        type: "Interactive Book",
        platform: "Algorithm Visualizer",
        title: "Graph Algorithms",
        url: "https://algorithm-visualizer.org/graph-search/breadth-first-search",
        description: "Visual graph algorithm guide",
      },
      {
        type: "Course Notes",
        platform: "Princeton",
        title: "Graph Algorithms",
        url: "https://algs4.cs.princeton.edu/40graphs/",
        description: "Princeton's algorithm materials",
      },
      {
        type: "Implementation Guide",
        platform: "GeeksforGeeks",
        title: "Graph Algorithms",
        url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
        description: "Complete implementation guide",
      },
      {
        type: "Research Papers",
        platform: "ArXiv",
        title: "Graph Theory",
        url: "https://arxiv.org/list/cs.DS/recent",
        description: "Latest graph algorithm research",
      },
      {
        type: "Practice Problems",
        platform: "CSES",
        title: "Graph Problems",
        url: "https://cses.fi/problemset/list/",
        description: "Advanced graph problem set",
      },
    ],
    practicalApplications: [
      {
        field: "Social Networks",
        description: "Analyzing relationships and connections",
        example: "Friend recommendation systems",
      },
      {
        field: "Transportation",
        description: "Route planning and optimization",
        example: "GPS navigation systems",
      },
      {
        field: "Computer Networks",
        description: "Network routing protocols",
        example: "Internet packet routing",
      },
    ],
    problems: [
      "Implement Dijkstra's shortest path algorithm",
      "Create a minimum spanning tree using Kruskal's algorithm",
      "Detect cycles in directed and undirected graphs",
      "Find strongly connected components",
    ],
  },
  {
    title: "Algorithm Design Techniques",
    description: "Fundamental approaches to solving algorithmic problems",
    learningObjectives: [
      "Master divide-and-conquer strategies",
      "Understand dynamic programming",
      "Apply greedy algorithms",
      "Implement backtracking solutions",
      "Use branch and bound techniques",
    ],
    resources: [
      {
        type: "Video Series",
        platform: "MIT OCW",
        title: "Advanced Algorithms",
        url: "https://ocw.mit.edu/courses/6-854j-advanced-algorithms-fall-2008/",
        description: "Advanced algorithm design techniques",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Algorithm Design",
        url: "https://web.stanford.edu/class/cs161/",
        description: "Stanford's algorithm design course",
      },
      {
        type: "Interactive Platform",
        platform: "Coursera",
        title: "Algorithmic Toolbox",
        url: "https://www.coursera.org/learn/algorithmic-toolbox",
        description: "UCSD's algorithm design course",
      },
      {
        type: "Practice Problems",
        platform: "Codeforces",
        title: "Dynamic Programming",
        url: "https://codeforces.com/blog/entry/67679",
        description: "Advanced DP problem collection",
      },
      {
        type: "Video Course",
        platform: "ETH Zürich",
        title: "Algorithm Design",
        url: "https://www.cadmo.ethz.ch/education/lectures/HS21/DA/index.html",
        description: "ETH's algorithm design course",
      },
      {
        type: "Book",
        platform: "Kleinberg & Tardos",
        title: "Algorithm Design",
        url: "https://www.cs.princeton.edu/~wayne/kleinberg-tardos/",
        description: "Classic algorithm design textbook",
      },
      {
        type: "Interactive Tutorials",
        platform: "VisuAlgo",
        title: "Algorithm Design",
        url: "https://visualgo.net/en",
        description: "Visualize algorithm techniques",
      },
      {
        type: "Course Notes",
        platform: "CMU",
        title: "Advanced Algorithms",
        url: "https://www.cs.cmu.edu/~15850/",
        description: "CMU's algorithm design materials",
      },
      {
        type: "Practice Platform",
        platform: "AtCoder",
        title: "Educational DP Contest",
        url: "https://atcoder.jp/contests/dp",
        description: "Dynamic programming practice",
      },
      {
        type: "Implementation Guide",
        platform: "CP-Algorithms",
        title: "Algorithm Techniques",
        url: "https://cp-algorithms.com/",
        description: "Comprehensive algorithm guide",
      },
    ],
    practicalApplications: [
      {
        field: "Optimization Problems",
        description: "Resource allocation and scheduling",
        example: "Job scheduling in cloud computing",
      },
      {
        field: "Game Development",
        description: "Path finding and AI strategies",
        example: "NPC behavior algorithms",
      },
      {
        field: "Financial Systems",
        description: "Trading and portfolio optimization",
        example: "Automated trading strategies",
      },
    ],
    problems: [
      "Solve knapsack problem using dynamic programming",
      "Implement traveling salesman using branch and bound",
      "Create solutions using divide-and-conquer",
      "Design efficient greedy algorithms",
    ],
  },
  // Would you like me to continue with Algorithm Design Techniques?
];

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
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-2">
          Learning Objectives
        </h3>
        <ul className="list-disc list-inside text-[#A0A2A0]/80 space-y-1">
          {topic.learningObjectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-3">
          Learning Resources
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {topic.resources.map((resource) => (
            <Link
              key={resource.url}
              href={resource.url}
              target="_blank"
              className="block p-4 border border-[#2A3828]/30 rounded-lg hover:bg-[#1A2310] transition-colors duration-200 cursor-pointer"
            >
              <h4 className="text-[#A0A2A0] font-bold text-sm">
                {resource.title}
              </h4>
              <p className="text-[#A0A2A0]/80 text-xs mt-1">
                {resource.description}
              </p>
              <p className="text-[#A0A2A0]/60 text-xs mt-1">
                {resource.platform}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-3">
          Practical Applications
        </h3>
        <div className="space-y-4">
          {topic.practicalApplications.map((app) => (
            <div
              key={app.field}
              className="border-t border-[#2A3828]/30 pt-3 first:border-0 first:pt-0"
            >
              <h4 className="text-[#A0A2A0] font-bold">{app.field}</h4>
              <p className="text-[#A0A2A0]/80 text-sm mt-1">
                {app.description}
              </p>
              <p className="text-[#A0A2A0]/60 text-sm mt-1 italic">
                Example: {app.example}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Problems */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-2">
          Practice Problems
        </h3>
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
            Algorithmen und Datenstrukturen
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
              <span>Semester 2</span>
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
