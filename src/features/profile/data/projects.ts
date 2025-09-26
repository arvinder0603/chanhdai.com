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
];
