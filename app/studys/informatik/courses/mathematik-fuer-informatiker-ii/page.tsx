"use client";

import { CourseLayout } from "../../../components/CourseLayout";
import { TopicSection } from "../../../components/TopicSection";
import { CourseTopic } from "../../../types/course";

const COURSE_TOPICS: CourseTopic[] = [
  {
    title: "Probability Theory",
    description: "Foundations of probability and statistical analysis",
    learningObjectives: [
      "Understand probability concepts",
      "Master random variables",
      "Work with probability distributions",
      "Apply statistical inference",
      "Analyze expected values and variance",
    ],
    resources: [
      {
        type: "Video Course",
        platform: "MIT OCW",
        title: "Probability and Statistics",
        url: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/",
        description: "MIT's probability course",
      },
      {
        type: "Interactive Platform",
        platform: "Khan Academy",
        title: "Statistics & Probability",
        url: "https://www.khanacademy.org/math/statistics-probability",
        description: "Interactive probability lessons",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Probability Theory",
        url: "https://web.stanford.edu/class/cs109/",
        description: "Stanford's probability course",
      },
      {
        type: "Video Series",
        platform: "Harvard",
        title: "Statistics 110",
        url: "https://projects.iq.harvard.edu/stat110/home",
        description: "Harvard's probability course",
      },
      {
        type: "Interactive Tool",
        platform: "Seeing Theory",
        title: "Visual Probability",
        url: "https://seeing-theory.brown.edu/",
        description: "Interactive probability visualizations",
      },
      {
        type: "Course Materials",
        platform: "ETH Zürich",
        title: "Probability Theory",
        url: "https://stat.ethz.ch/lectures/",
        description: "ETH's probability materials",
      },
      {
        type: "Practice Platform",
        platform: "Brilliant",
        title: "Probability",
        url: "https://brilliant.org/courses/probability/",
        description: "Interactive probability problems",
      },
      {
        type: "Book",
        platform: "OpenStax",
        title: "Probability & Statistics",
        url: "https://openstax.org/details/books/introductory-statistics",
        description: "Free probability textbook",
      },
      {
        type: "Tutorial Series",
        platform: "StatQuest",
        title: "Statistics Fundamentals",
        url: "https://www.youtube.com/c/joshstarmer",
        description: "Visual statistics explanations",
      },
      {
        type: "Interactive Simulations",
        platform: "GeoGebra",
        title: "Probability Tools",
        url: "https://www.geogebra.org/probability",
        description: "Probability visualization tools",
      },
    ],
    practicalApplications: [
      {
        field: "Data Science",
        description: "Statistical analysis of datasets",
        example: "Analyzing user behavior patterns",
      },
      {
        field: "Machine Learning",
        description: "Probabilistic models",
        example: "Building recommendation systems",
      },
      {
        field: "Network Security",
        description: "Risk assessment",
        example: "Analyzing security breach probabilities",
      },
    ],
    problems: [
      "Calculate probability distributions",
      "Analyze random variables",
      "Apply Bayes' theorem",
      "Compute confidence intervals",
    ],
  },
  {
    title: "Numerical Methods",
    description: "Computational techniques for mathematical problems",
    learningObjectives: [
      "Master numerical integration",
      "Understand error analysis",
      "Implement numerical algorithms",
      "Solve differential equations",
      "Apply optimization methods",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Numerical Methods",
        url: "https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/",
        description: "MIT's numerical methods course",
      },
      {
        type: "Interactive Platform",
        platform: "SciPy",
        title: "Scientific Computing",
        url: "https://scipy-lectures.org/",
        description: "Python numerical methods",
      },
      {
        type: "Video Series",
        platform: "NPTEL",
        title: "Numerical Analysis",
        url: "https://nptel.ac.in/courses/111/105/111105035/",
        description: "Comprehensive numerical methods",
      },
      {
        type: "Documentation",
        platform: "NumPy",
        title: "NumPy Documentation",
        url: "https://numpy.org/doc/stable/",
        description: "Numerical computing library",
      },
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Scientific Computing",
        url: "https://web.stanford.edu/class/cme001/",
        description: "Stanford's numerical methods",
      },
      {
        type: "Interactive Tool",
        platform: "Wolfram Alpha",
        title: "Computational Tools",
        url: "https://www.wolframalpha.com/examples/mathematics",
        description: "Online computational platform",
      },
      {
        type: "Book",
        platform: "Berkeley",
        title: "Numerical Recipes",
        url: "http://numerical.recipes/",
        description: "Classic numerical methods text",
      },
      {
        type: "Tutorial Series",
        platform: "3Blue1Brown",
        title: "Numerical Methods",
        url: "https://www.3blue1brown.com/",
        description: "Visual mathematics explanations",
      },
      {
        type: "Practice Platform",
        platform: "Project Euler",
        title: "Numerical Problems",
        url: "https://projecteuler.net/",
        description: "Mathematical programming problems",
      },
      {
        type: "Course Materials",
        platform: "ETH Zürich",
        title: "Numerical Analysis",
        url: "https://math.ethz.ch/education/bachelor/lectures/hs2019/math/numa1.html",
        description: "ETH's numerical analysis course",
      },
    ],
    practicalApplications: [
      {
        field: "Scientific Computing",
        description: "Solving complex equations",
        example: "Simulating physical systems",
      },
      {
        field: "Financial Analysis",
        description: "Numerical optimization",
        example: "Portfolio optimization algorithms",
      },
      {
        field: "Computer Graphics",
        description: "Numerical algorithms",
        example: "3D rendering calculations",
      },
    ],
    problems: [
      "Implement numerical integration methods",
      "Solve systems of linear equations",
      "Create optimization algorithms",
      "Develop differential equation solvers",
    ],
  },
  {
    title: "Statistics for Computer Science",
    description: "Statistical methods and their applications in computing",
    learningObjectives: [
      "Apply statistical testing",
      "Understand data analysis",
      "Master regression methods",
      "Work with sampling techniques",
      "Implement statistical algorithms",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "Harvard",
        title: "CS109: Data Science",
        url: "https://cs109.github.io/2015/",
        description: "Harvard's data science course",
      },
      {
        type: "Interactive Platform",
        platform: "DataCamp",
        title: "Statistics in Python",
        url: "https://www.datacamp.com/courses/statistical-thinking-in-python-part-1",
        description: "Interactive statistics practice",
      },
      {
        type: "Video Series",
        platform: "Stanford",
        title: "Statistical Learning",
        url: "https://online.stanford.edu/courses/sohs-ystatslearning-statistical-learning",
        description: "Stanford's statistics course",
      },
      {
        type: "Documentation",
        platform: "SciPy Stats",
        title: "Statistics Package",
        url: "https://docs.scipy.org/doc/scipy/reference/stats.html",
        description: "Statistical computing tools",
      },
      {
        type: "Tutorial Series",
        platform: "Towards Data Science",
        title: "Statistics for CS",
        url: "https://towardsdatascience.com/",
        description: "Applied statistics tutorials",
      },
      {
        type: "Book",
        platform: "Think Stats",
        title: "Think Stats",
        url: "https://greenteapress.com/wp/think-stats-2e/",
        description: "Statistics for programmers",
      },
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Statistics for Applications",
        url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/",
        description: "MIT's applied statistics",
      },
      {
        type: "Interactive Tool",
        platform: "R Studio",
        title: "Statistical Computing",
        url: "https://www.rstudio.com/",
        description: "R programming for statistics",
      },
      {
        type: "Practice Platform",
        platform: "Kaggle",
        title: "Statistical Analysis",
        url: "https://www.kaggle.com/learn/intro-to-statistics",
        description: "Real-world statistics practice",
      },
      {
        type: "Video Course",
        platform: "edX",
        title: "Statistics and R",
        url: "https://www.edx.org/course/statistics-and-r",
        description: "HarvardX statistics course",
      },
    ],
    practicalApplications: [
      {
        field: "Machine Learning",
        description: "Statistical learning models",
        example: "Building predictive models",
      },
      {
        field: "A/B Testing",
        description: "Statistical hypothesis testing",
        example: "Website conversion optimization",
      },
      {
        field: "Data Analysis",
        description: "Statistical inference",
        example: "User behavior analysis",
      },
    ],
    problems: [
      "Implement hypothesis tests",
      "Create regression models",
      "Analyze large datasets",
      "Build sampling algorithms",
    ],
  },
];

export default function CoursePage() {
  return (
    <CourseLayout title="Mathematik für Informatiker II" ects={8} semester={2}>
      {COURSE_TOPICS.map((topic) => (
        <TopicSection key={topic.title} topic={topic} />
      ))}
    </CourseLayout>
  );
} 