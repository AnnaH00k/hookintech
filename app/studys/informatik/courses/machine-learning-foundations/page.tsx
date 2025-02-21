"use client";

import { CourseLayout } from "../../../components/CourseLayout";
import { TopicSection } from "../../../components/TopicSection";
import { CourseTopic } from "../../../types/course";

const COURSE_TOPICS: CourseTopic[] = [
  {
    title: "Mathematical Foundations",
    description: "Essential mathematical concepts for machine learning",
    learningObjectives: [
      "Master linear algebra basics",
      "Understand probability theory",
      "Work with statistics",
      "Apply calculus concepts",
      "Implement optimization methods",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Mathematics for ML",
        url: "https://ocw.mit.edu/courses/18-657-mathematics-of-machine-learning-fall-2015/",
        description: "MIT's ML math course",
      },
      {
        type: "Video Series",
        platform: "3Blue1Brown",
        title: "Neural Networks",
        url: "https://www.3blue1brown.com/topics/neural-networks",
        description: "Visual math explanations",
      },
      {
        type: "Book",
        platform: "Cambridge",
        title: "Mathematics for ML",
        url: "https://mml-book.github.io/",
        description: "Comprehensive ML math",
      },
      {
        type: "Interactive Platform",
        platform: "Khan Academy",
        title: "Linear Algebra",
        url: "https://www.khanacademy.org/math/linear-algebra",
        description: "Interactive math practice",
      },
      {
        type: "Documentation",
        platform: "NumPy",
        title: "Scientific Computing",
        url: "https://numpy.org/doc/stable/user/absolute_beginners.html",
        description: "Math computation tools",
      },
      {
        type: "Tutorial Series",
        platform: "Stanford",
        title: "CS229 Math",
        url: "https://cs229.stanford.edu/section/cs229-prob.pdf",
        description: "ML math review",
      },
      {
        type: "Course Materials",
        platform: "Cornell",
        title: "ML Theory",
        url: "https://www.cs.cornell.edu/courses/cs4780/2018fa/",
        description: "Theoretical foundations",
      },
      {
        type: "Practice Platform",
        platform: "Brilliant",
        title: "ML Mathematics",
        url: "https://brilliant.org/courses/machine-learning/",
        description: "Interactive problems",
      },
      {
        type: "Video Course",
        platform: "Coursera",
        title: "Mathematics for ML",
        url: "https://www.coursera.org/specializations/mathematics-machine-learning",
        description: "Imperial College London",
      },
      {
        type: "Interactive Tool",
        platform: "GeoGebra",
        title: "Math Visualizations",
        url: "https://www.geogebra.org/",
        description: "Visual math tools",
      },
    ],
    practicalApplications: [
      {
        field: "Data Analysis",
        description: "Statistical methods",
        example: "Implementing PCA",
      },
      {
        field: "Model Development",
        description: "Mathematical optimization",
        example: "Gradient descent implementation",
      },
      {
        field: "Feature Engineering",
        description: "Data transformation",
        example: "Vector space transformations",
      },
    ],
    problems: [
      "Implement matrix operations",
      "Apply statistical methods",
      "Create optimization algorithms",
      "Solve calculus problems",
    ],
  },
  {
    title: "Supervised Learning",
    description: "Fundamental supervised learning algorithms and concepts",
    learningObjectives: [
      "Understand regression models",
      "Master classification methods",
      "Work with neural networks",
      "Apply validation techniques",
      "Implement learning algorithms",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "CS229",
        url: "https://cs229.stanford.edu/",
        description: "Stanford's ML course",
      },
      {
        type: "Book",
        platform: "ESL",
        title: "Elements of Statistical Learning",
        url: "https://web.stanford.edu/~hastie/ElemStatLearn/",
        description: "Classic ML text",
      },
      {
        type: "Video Course",
        platform: "fast.ai",
        title: "Practical Deep Learning",
        url: "https://course.fast.ai/",
        description: "Applied ML course",
      },
      {
        type: "Documentation",
        platform: "scikit-learn",
        title: "ML in Python",
        url: "https://scikit-learn.org/stable/tutorial/",
        description: "ML library docs",
      },
      {
        type: "Interactive Platform",
        platform: "Google",
        title: "ML Crash Course",
        url: "https://developers.google.com/machine-learning/crash-course",
        description: "Interactive ML learning",
      },
      {
        type: "Tutorial Series",
        platform: "TensorFlow",
        title: "Neural Networks",
        url: "https://www.tensorflow.org/tutorials",
        description: "Deep learning tutorials",
      },
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "CS189",
        url: "https://www.eecs189.org/",
        description: "ML fundamentals",
      },
      {
        type: "Practice Platform",
        platform: "Kaggle",
        title: "ML Competitions",
        url: "https://www.kaggle.com/competitions",
        description: "Real-world problems",
      },
      {
        type: "Video Series",
        platform: "DeepMind",
        title: "Deep Learning",
        url: "https://deepmind.com/learning-resources",
        description: "Advanced ML concepts",
      },
      {
        type: "Documentation",
        platform: "PyTorch",
        title: "Deep Learning",
        url: "https://pytorch.org/tutorials/",
        description: "Neural network framework",
      },
    ],
    practicalApplications: [
      {
        field: "Computer Vision",
        description: "Image processing",
        example: "Building image classifiers",
      },
      {
        field: "Natural Language",
        description: "Text processing",
        example: "Implementing sentiment analysis",
      },
      {
        field: "Predictive Analytics",
        description: "Data prediction",
        example: "Creating forecasting models",
      },
    ],
    problems: [
      "Implement linear regression",
      "Create neural networks",
      "Build classification models",
      "Design validation methods",
    ],
  },
  {
    title: "Unsupervised Learning",
    description: "Pattern discovery and dimensionality reduction techniques",
    learningObjectives: [
      "Master clustering algorithms",
      "Understand dimensionality reduction",
      "Work with autoencoders",
      "Apply generative models",
      "Implement feature learning",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "MIT",
        title: "Deep Learning",
        url: "http://introtodeeplearning.com/",
        description: "MIT's deep learning",
      },
      {
        type: "Documentation",
        platform: "OpenAI",
        title: "Generative Models",
        url: "https://openai.com/research/",
        description: "Advanced ML research",
      },
      {
        type: "Video Series",
        platform: "Stanford",
        title: "CS231n",
        url: "http://cs231n.stanford.edu/",
        description: "Computer vision course",
      },
      {
        type: "Book",
        platform: "O'Reilly",
        title: "Hands-On ML",
        url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
        description: "Practical ML guide",
      },
      {
        type: "Tutorial Series",
        platform: "Keras",
        title: "Deep Learning",
        url: "https://keras.io/examples/",
        description: "Neural network examples",
      },
      {
        type: "Course Materials",
        platform: "CMU",
        title: "Deep Learning",
        url: "https://deeplearning.cs.cmu.edu/",
        description: "CMU's advanced course",
      },
      {
        type: "Interactive Platform",
        platform: "Weights & Biases",
        title: "ML Experiments",
        url: "https://wandb.ai/site",
        description: "ML experiment tracking",
      },
      {
        type: "Documentation",
        platform: "JAX",
        title: "Neural Networks",
        url: "https://jax.readthedocs.io/",
        description: "Advanced ML framework",
      },
      {
        type: "Video Course",
        platform: "NYU",
        title: "Deep Learning",
        url: "https://atcold.github.io/pytorch-Deep-Learning/",
        description: "NYU's deep learning",
      },
      {
        type: "Practice Platform",
        platform: "PapersWithCode",
        title: "ML Benchmarks",
        url: "https://paperswithcode.com/",
        description: "State-of-the-art ML",
      },
    ],
    practicalApplications: [
      {
        field: "Data Mining",
        description: "Pattern discovery",
        example: "Implementing clustering",
      },
      {
        field: "Anomaly Detection",
        description: "Outlier identification",
        example: "Building detection systems",
      },
      {
        field: "Generative AI",
        description: "Content generation",
        example: "Creating generative models",
      },
    ],
    problems: [
      "Implement clustering algorithms",
      "Create autoencoders",
      "Build generative models",
      "Design feature extractors",
    ],
  },
];

export default function CoursePage() {
  return (
    <CourseLayout title="Machine Learning Foundations" ects={8} semester={3}>
      {COURSE_TOPICS.map((topic) => (
        <TopicSection key={topic.title} topic={topic} />
      ))}
    </CourseLayout>
  );
} 