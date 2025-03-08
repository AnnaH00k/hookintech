"use client";

import { CourseLayout } from "../../components/CourseLayout";
import { TopicSection } from "../../components/TopicSection";
import { CourseTopic } from "../../types/course";

const COURSE_TOPICS: CourseTopic[] = [
  {
    title: "Database Fundamentals",
    description: "Core concepts of database systems and relational models",
    learningObjectives: [
      "Understand relational models",
      "Master SQL fundamentals",
      "Work with database design",
      "Apply normalization principles",
      "Implement data integrity",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "Database Systems",
        url: "https://cs145-fa19.github.io/",
        description: "Stanford's DB course",
      },
      {
        type: "Interactive Platform",
        platform: "SQLZoo",
        title: "SQL Tutorial",
        url: "https://sqlzoo.net/",
        description: "Interactive SQL practice",
      },
      {
        type: "Video Course",
        platform: "MIT OCW",
        title: "Database Systems",
        url: "https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/",
        description: "MIT's database course",
      },
      {
        type: "Documentation",
        platform: "PostgreSQL",
        title: "PostgreSQL Docs",
        url: "https://www.postgresql.org/docs/",
        description: "PostgreSQL manual",
      },
      {
        type: "Tutorial Series",
        platform: "Mode Analytics",
        title: "SQL Tutorial",
        url: "https://mode.com/sql-tutorial/",
        description: "Comprehensive SQL guide",
      },
      {
        type: "Book",
        platform: "O'Reilly",
        title: "Database Design",
        url: "https://www.oreilly.com/library/view/database-design-and/9781449328306/",
        description: "Database concepts",
      },
      {
        type: "Practice Platform",
        platform: "HackerRank",
        title: "SQL Practice",
        url: "https://www.hackerrank.com/domains/sql",
        description: "SQL challenges",
      },
      {
        type: "Course Materials",
        platform: "CMU",
        title: "Database Systems",
        url: "https://15445.courses.cs.cmu.edu/",
        description: "CMU's database course",
      },
      {
        type: "Video Series",
        platform: "Berkeley",
        title: "CS186",
        url: "https://cs186berkeley.net/",
        description: "Berkeley's DB course",
      },
      {
        type: "Documentation",
        platform: "MySQL",
        title: "MySQL Manual",
        url: "https://dev.mysql.com/doc/",
        description: "MySQL documentation",
      },
    ],
    practicalApplications: [
      {
        field: "Data Management",
        description: "Database administration",
        example: "Setting up production databases",
      },
      {
        field: "Application Development",
        description: "Backend integration",
        example: "Building data-driven applications",
      },
      {
        field: "Data Analysis",
        description: "Data querying",
        example: "Complex SQL reporting",
      },
    ],
    problems: [
      "Design database schema",
      "Write complex SQL queries",
      "Implement data normalization",
      "Create database indexes",
    ],
  },
  {
    title: "Advanced Database Concepts",
    description: "Advanced topics in database management and optimization",
    learningObjectives: [
      "Master query optimization",
      "Understand transaction management",
      "Work with distributed databases",
      "Apply indexing strategies",
      "Implement concurrency control",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "MIT OCW",
        title: "Advanced Database Systems",
        url: "https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/",
        description: "MIT's advanced DB course",
      },
      {
        type: "Documentation",
        platform: "Oracle",
        title: "Performance Tuning",
        url: "https://docs.oracle.com/en/database/oracle/oracle-database/19/tgdba/",
        description: "Database optimization guide",
      },
      {
        type: "Video Series",
        platform: "CMU",
        title: "Advanced Databases",
        url: "https://15721.courses.cs.cmu.edu/",
        description: "CMU's advanced course",
      },
      {
        type: "Book",
        platform: "Morgan Kaufmann",
        title: "Transaction Processing",
        url: "https://www.elsevier.com/books/transaction-processing/gray/978-1-55860-190-1",
        description: "Classic transaction text",
      },
      {
        type: "Tutorial Series",
        platform: "Use The Index, Luke",
        title: "SQL Indexing",
        url: "https://use-the-index-luke.com/",
        description: "SQL indexing guide",
      },
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "Distributed Data",
        url: "https://cs286berkeley.net/",
        description: "Distributed databases",
      },
      {
        type: "Documentation",
        platform: "MongoDB",
        title: "Performance Guide",
        url: "https://docs.mongodb.com/manual/administration/analyzing-mongodb-performance/",
        description: "MongoDB optimization",
      },
      {
        type: "Video Course",
        platform: "Stanford",
        title: "Database Tuning",
        url: "https://web.stanford.edu/class/cs245/",
        description: "Performance optimization",
      },
      {
        type: "Practice Platform",
        platform: "LeetCode",
        title: "Database Problems",
        url: "https://leetcode.com/problemset/database/",
        description: "Advanced SQL challenges",
      },
      {
        type: "Interactive Tool",
        platform: "PGTune",
        title: "PostgreSQL Tuning",
        url: "https://pgtune.leopard.in.ua/",
        description: "Database configuration",
      },
    ],
    practicalApplications: [
      {
        field: "Performance Optimization",
        description: "Query tuning",
        example: "Optimizing complex queries",
      },
      {
        field: "Distributed Systems",
        description: "Scaling databases",
        example: "Implementing sharding",
      },
      {
        field: "Transaction Processing",
        description: "ACID compliance",
        example: "Implementing transaction managers",
      },
    ],
    problems: [
      "Optimize query performance",
      "Implement transaction handling",
      "Design distributed systems",
      "Create indexing strategies",
    ],
  },
  {
    title: "Modern Database Systems",
    description: "Contemporary database technologies and paradigms",
    learningObjectives: [
      "Understand NoSQL databases",
      "Master data warehousing",
      "Work with cloud databases",
      "Apply big data concepts",
      "Implement data lakes",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "Harvard",
        title: "Big Data Systems",
        url: "https://cs265.seas.harvard.edu/",
        description: "Modern data systems",
      },
      {
        type: "Documentation",
        platform: "AWS",
        title: "Cloud Databases",
        url: "https://aws.amazon.com/products/databases/",
        description: "AWS database services",
      },
      {
        type: "Video Series",
        platform: "MongoDB University",
        title: "NoSQL Fundamentals",
        url: "https://university.mongodb.com/",
        description: "NoSQL database course",
      },
      {
        type: "Book",
        platform: "O'Reilly",
        title: "Data Warehousing",
        url: "https://www.oreilly.com/library/view/the-data-warehouse/9781118530801/",
        description: "Warehouse architecture",
      },
      {
        type: "Tutorial Series",
        platform: "Cassandra",
        title: "NoSQL Design",
        url: "https://cassandra.apache.org/doc/latest/",
        description: "Distributed NoSQL",
      },
      {
        type: "Course Materials",
        platform: "Coursera",
        title: "Big Data",
        url: "https://www.coursera.org/specializations/big-data",
        description: "Big data processing",
      },
      {
        type: "Documentation",
        platform: "Google Cloud",
        title: "Cloud Spanner",
        url: "https://cloud.google.com/spanner/docs",
        description: "Distributed SQL",
      },
      {
        type: "Interactive Platform",
        platform: "Neo4j",
        title: "Graph Databases",
        url: "https://neo4j.com/graphacademy/",
        description: "Graph DB tutorials",
      },
      {
        type: "Video Course",
        platform: "DataStax",
        title: "NoSQL Architecture",
        url: "https://www.datastax.com/learn",
        description: "NoSQL design patterns",
      },
      {
        type: "Practice Platform",
        platform: "Snowflake",
        title: "Data Warehouse",
        url: "https://docs.snowflake.com/",
        description: "Modern warehousing",
      },
    ],
    practicalApplications: [
      {
        field: "Cloud Architecture",
        description: "Cloud-native databases",
        example: "Implementing cloud scaling",
      },
      {
        field: "Big Data Processing",
        description: "Large-scale data",
        example: "Building data pipelines",
      },
      {
        field: "NoSQL Solutions",
        description: "Non-relational data",
        example: "Document store implementation",
      },
    ],
    problems: [
      "Design NoSQL databases",
      "Implement data warehouses",
      "Create cloud solutions",
      "Build big data systems",
    ],
  },
];

export default function CoursePage() {
  return (
    <CourseLayout title="Datenbanksysteme" ects={6} semester={3}>
      {COURSE_TOPICS.map((topic) => (
        <TopicSection key={topic.title} topic={topic} />
      ))}
    </CourseLayout>
  );
}
