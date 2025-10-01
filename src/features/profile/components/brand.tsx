import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { Panel, PanelHeader, PanelTitle } from "./panel";

// Add your certifications data here
const CERTIFICATIONS = [
  {
    id: 0,
    title: "Software Engineering by The Hong Kong University of Science and Technology",
    issuer: "Intellectual Property Office of Viet Nam",
    date: "2025-08-18",
    image: "/certifications/aws.png",
    link: "https://coursera.org/share/042573af1d42de5e9723edc0456d95b1",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 1,
    title: "Introduction To HTML, CSS, & JavaScript",
    issuer: "IBM",
    date: "2024",
    image: "/certifications/aws.png",
    link: "https://coursera.org/share/29b4ae9ad5512f24b36934a11f59c173",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 2,
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    date: "2023",
    image: "/certifications/react.png",
    link: "https://coursera.org/share/57b9a92891c1ad24e825295eb2cdfe39",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Building Generative AI-Powered Applications with Python",
    issuer: "IBM",
    date: "2023",
    image: "/certifications/react.png",
    link: "https://coursera.org/share/cfa121273b6d93b00e6806942c5c1fc0",
    color: "from-green-500 to-green-600",
  },
];

export function Brand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Panel id="certifications" className="relative overflow-hidden">
      <PanelHeader>
        <PanelTitle className="flex items-center gap-2">
          <Award className="w-5 h-5" />
          Certifications
        </PanelTitle>
      </PanelHeader>

      {/* Subtle background animation */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 relative z-10">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={
              isInView
                ? { opacity: 1, rotateY: 0 }
                : { opacity: 0, rotateY: -90 }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.03, y: -5 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative bg-white dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Gradient accent */}
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cert.color}`} />

            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {cert.date}
                  </p>
                </div>

                {/* Icon or Image */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                  >
                    <Award className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
                  </motion.div>
                </div>
              </div>

              {/* Link indicator */}
              <div className="flex items-center gap-1 mt-3 text-xs text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                View Certificate
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            {/* Hover glow effect */}
            <motion.div
              className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${cert.color} transition-opacity pointer-events-none`}
            />
          </motion.a>
        ))}
      </div>
    </Panel>
  );
}