import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "react-wheel-picker",
    title: "Excel Bill Generator",
    period: {
      start: "05.2025",
    },
    link: "https://bil-sep245.netlify.app/",
    skills: ["Open Source", "React", "Excel"],
    description: `iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.
- Built an automated invoice system with drag-and-drop Excel file processing, reducing manual invoice creation time by
 80%.
- Developed PDF/image generation and download functionality using HTML5 Canvas API and html-to-image, enabling
 users to dynamically update invoice data and download professional, print-ready receipts.



`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "pink-hived",
    title: "Pink Hives",
    period: {
      start: "03.2024",
    },
    link: "https://pink-hives.vercel.app/",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Clerk.js"],
    description: `Pink Hives is a platform for users to book rooms and have a good time.
- Engineered a full-featured booking platform using Next.js, React.js, Tailwind CSS, and Redux, enabling seamless user
 interactions and real-time updates.

-   Integrated advanced authentication with Clerk, implementing role-based access control and secure user session
 management for multiple user types.


`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  
];
