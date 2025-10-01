import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "wyzardai",
    companyName: "Wyzard.ai",
    companyLogo:
      "https://wyzard.ai/wp-content/themes/twentytwentyone/assets/images/w-logo.svg",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Software Engineer",
        employmentPeriod: {
          start: "01.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Engineered high-performance enterprise dashboards using React.js and TypeScript, serving thousands of daily active
users with enterprise-grade reliability.
- Architected reusable Web SDK using Create React App foundation, enabling multiple ISV partners to integrate chatbot
functionality with dramatically reduced implementation time
- Implemented advanced performance optimizations including code splitting, tree shaking, and text compression, achieving
significant bundle size reductions and improved Core Web Vitals scores
-  Integrated Google Analytics 4 with React GA4, creating conversion funnels that increased user engagement tracking
accuracy by 45% and provided actionable insights for product decisions.
- Built scalable component architecture using modern React patterns (hooks, custom hooks, compound components)
reducing code duplication by 35%.
- Collaborated with UX/UI designers to implement pixel-perfect, responsive interfaces achieving 95%
design-to-development fidelity.
`,
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Rollup",
          "Redux",
          "Agile",
          "Teamwork",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },

  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Chitkara University — Punjab, India",
        employmentPeriod: {
          start: "06.2021",
          end: "2025",
        },
        icon: "education",
        description: `- Pursuing a Bachelor of Technology in Computer Science and Engineering with a specialization in Data Science.
- Current CGPA: 9.22/10 (Top 5% of the class).
- Relevant Coursework: Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks,
  Object-Oriented Programming, Web Development, Machine Learning, Artificial Intelligence, Big Data Analytics.
- Actively participating in coding competitions and hackathons to enhance problem-solving skills and practical knowledge.
- Member of the university's coding club, contributing to organizing workshops and coding events for peers.
`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },

      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Army Public School — Ambala Cantt, India",
        employmentPeriod: {
          start: "08.2009",
          end: "09.2021",
        },
        icon: "education",
        description: "",
        skills: [],
      },
    ],
  },
];
