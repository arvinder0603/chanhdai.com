import React from "react";
import { motion } from "framer-motion";

import { EXPERIENCES } from "../../data/experiences";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  return (
    <Panel id="experience" className="relative overflow-hidden">
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      {/* Subtle animated background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="pr-2 pl-4 relative z-10">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  );
}