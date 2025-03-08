"use client";

import { CourseLayout } from "../../components/CourseLayout";
import { TopicSection } from "../../components/TopicSection";
import { CourseTopic } from "../../types/course";

const COURSE_TOPICS: CourseTopic[] = [
  {
    title: "Network Fundamentals",
    description: "Core concepts of computer networking and protocols",
    learningObjectives: [
      "Understand OSI model",
      "Master TCP/IP protocols",
      "Work with network layers",
      "Apply routing concepts",
      "Implement basic protocols",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "CS144",
        url: "https://cs144.github.io/",
        description: "Stanford's networking course",
      },
      {
        type: "Book",
        platform: "Kurose & Ross",
        title: "Computer Networking",
        url: "https://gaia.cs.umass.edu/kurose_ross/index.php",
        description: "Comprehensive networking text",
      },
      {
        type: "Video Course",
        platform: "MIT OCW",
        title: "Computer Networks",
        url: "https://ocw.mit.edu/courses/6-829-computer-networks-fall-2002/",
        description: "MIT's networking course",
      },
      {
        type: "Interactive Platform",
        platform: "Cisco",
        title: "Networking Academy",
        url: "https://www.netacad.com/",
        description: "Hands-on networking",
      },
      {
        type: "Documentation",
        platform: "IETF",
        title: "RFC Archive",
        url: "https://www.ietf.org/standards/rfcs/",
        description: "Protocol standards",
      },
      {
        type: "Tutorial Series",
        platform: "NetworkLessons",
        title: "Networking Basics",
        url: "https://networklessons.com/",
        description: "Practical networking guides",
      },
      {
        type: "Practice Platform",
        platform: "GNS3",
        title: "Network Simulator",
        url: "https://gns3.com/",
        description: "Network simulation tool",
      },
      {
        type: "Video Series",
        platform: "Coursera",
        title: "Computer Networks",
        url: "https://www.coursera.org/learn/computer-networking",
        description: "Google's networking course",
      },
      {
        type: "Course Materials",
        platform: "Berkeley",
        title: "CS168",
        url: "https://cs168.io/",
        description: "Berkeley's networking",
      },
      {
        type: "Interactive Tool",
        platform: "Wireshark",
        title: "Protocol Analysis",
        url: "https://www.wireshark.org/docs/",
        description: "Network protocol analyzer",
      },
    ],
    practicalApplications: [
      {
        field: "Network Administration",
        description: "Network management",
        example: "Configuring network devices",
      },
      {
        field: "Protocol Design",
        description: "Communication protocols",
        example: "Implementing TCP/IP stack",
      },
      {
        field: "Network Security",
        description: "Secure communication",
        example: "Setting up firewalls",
      },
    ],
    problems: [
      "Design network topology",
      "Implement basic protocols",
      "Configure routing tables",
      "Analyze network traffic",
    ],
  },
  {
    title: "Network Security",
    description: "Security principles and practices in networking",
    learningObjectives: [
      "Understand cryptography",
      "Master security protocols",
      "Work with authentication",
      "Apply encryption methods",
      "Implement secure channels",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "CMU",
        title: "Network Security",
        url: "https://www.cylab.cmu.edu/education/courses.html",
        description: "CMU's security course",
      },
      {
        type: "Documentation",
        platform: "NIST",
        title: "Security Guidelines",
        url: "https://www.nist.gov/cyberframework",
        description: "Security standards",
      },
      {
        type: "Video Series",
        platform: "Udacity",
        title: "Network Security",
        url: "https://www.udacity.com/course/network-security--ud199",
        description: "Security fundamentals",
      },
      {
        type: "Book",
        platform: "O'Reilly",
        title: "Practical Cryptography",
        url: "https://www.oreilly.com/library/view/practical-cryptography-in/9781492039259/",
        description: "Applied cryptography",
      },
      {
        type: "Tutorial Series",
        platform: "PortSwigger",
        title: "Web Security",
        url: "https://portswigger.net/web-security",
        description: "Web security academy",
      },
      {
        type: "Practice Platform",
        platform: "HackTheBox",
        title: "Security Labs",
        url: "https://www.hackthebox.eu/",
        description: "Practical security",
      },
      {
        type: "Course Materials",
        platform: "ETH Zürich",
        title: "Network Security",
        url: "https://netsec.ethz.ch/courses/",
        description: "ETH's security course",
      },
      {
        type: "Interactive Tool",
        platform: "Metasploit",
        title: "Security Testing",
        url: "https://www.metasploit.com/",
        description: "Security framework",
      },
      {
        type: "Documentation",
        platform: "OpenSSL",
        title: "Crypto Library",
        url: "https://www.openssl.org/docs/",
        description: "Cryptography tools",
      },
      {
        type: "Video Course",
        platform: "SANS",
        title: "Security Essentials",
        url: "https://www.sans.org/security-resources/",
        description: "Professional security",
      },
    ],
    practicalApplications: [
      {
        field: "Security Analysis",
        description: "Vulnerability assessment",
        example: "Performing security audits",
      },
      {
        field: "Cryptography",
        description: "Secure communication",
        example: "Implementing SSL/TLS",
      },
      {
        field: "Access Control",
        description: "Authentication systems",
        example: "Building auth services",
      },
    ],
    problems: [
      "Implement encryption",
      "Design secure protocols",
      "Create authentication systems",
      "Analyze security threats",
    ],
  },
  {
    title: "Modern Networking",
    description: "Contemporary networking technologies and paradigms",
    learningObjectives: [
      "Understand SDN",
      "Master cloud networking",
      "Work with virtualization",
      "Apply container networking",
      "Implement microservices",
    ],
    resources: [
      {
        type: "Course Materials",
        platform: "Stanford",
        title: "SDN",
        url: "https://cs244.github.io/",
        description: "Software-defined networking",
      },
      {
        type: "Documentation",
        platform: "AWS",
        title: "Cloud Networking",
        url: "https://docs.aws.amazon.com/vpc/",
        description: "AWS networking",
      },
      {
        type: "Video Series",
        platform: "Linux Foundation",
        title: "Container Networking",
        url: "https://www.cni.dev/",
        description: "Container network interface",
      },
      {
        type: "Book",
        platform: "O'Reilly",
        title: "Cloud Native",
        url: "https://www.oreilly.com/library/view/cloud-native-infrastructure/9781491984291/",
        description: "Modern infrastructure",
      },
      {
        type: "Tutorial Series",
        platform: "Kubernetes",
        title: "Network Policies",
        url: "https://kubernetes.io/docs/concepts/services-networking/",
        description: "Container orchestration",
      },
      {
        type: "Course Materials",
        platform: "Google Cloud",
        title: "Cloud Networking",
        url: "https://cloud.google.com/training/networking",
        description: "GCP networking",
      },
      {
        type: "Interactive Platform",
        platform: "Docker",
        title: "Container Networks",
        url: "https://docs.docker.com/network/",
        description: "Docker networking",
      },
      {
        type: "Documentation",
        platform: "Istio",
        title: "Service Mesh",
        url: "https://istio.io/latest/docs/",
        description: "Microservice networking",
      },
      {
        type: "Video Course",
        platform: "Microsoft",
        title: "Azure Networking",
        url: "https://docs.microsoft.com/learn/azure/",
        description: "Cloud infrastructure",
      },
      {
        type: "Practice Platform",
        platform: "Katacoda",
        title: "Interactive Learning",
        url: "https://www.katacoda.com/courses/kubernetes/networking-intro",
        description: "Hands-on networking",
      },
    ],
    practicalApplications: [
      {
        field: "Cloud Infrastructure",
        description: "Cloud networking",
        example: "Designing cloud architecture",
      },
      {
        field: "Container Orchestration",
        description: "Container networking",
        example: "Kubernetes networking setup",
      },
      {
        field: "Service Mesh",
        description: "Microservice communication",
        example: "Implementing service mesh",
      },
    ],
    problems: [
      "Design cloud networks",
      "Implement container networking",
      "Create service mesh",
      "Configure SDN",
    ],
  },
];

export default function CoursePage() {
  return (
    <CourseLayout title="Computer Networks" ects={6} semester={3}>
      {COURSE_TOPICS.map((topic) => (
        <TopicSection key={topic.title} topic={topic} />
      ))}
    </CourseLayout>
  );
}
