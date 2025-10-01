import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";
import { motion } from "framer-motion";

import { USER } from "@/features/profile/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.03 },
};

// Generate random particles
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  initialX: Math.random() * 100,
  initialY: Math.random() * 100,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 5,
}));

export function Overview() {
  return (
    <Panel className="relative overflow-hidden">
      <h2 className="sr-only">Overview</h2>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 opacity-20">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <PanelContent className="space-y-2 relative z-10">
        {USER.jobs.map((job, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={itemVariants}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <JobItem title={job.title} company={job.company} website={job.website} />
          </motion.div>
        ))}

        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={itemVariants}
          transition={{ duration: 0.3 }}
        >
          <IntroItem icon={MapPinIcon} content={USER.address} />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={itemVariants}
          transition={{ duration: 0.3 }}
        >
          <PhoneItem phoneNumber={USER.phoneNumber} />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={itemVariants}
          transition={{ duration: 0.3 }}
        >
          <EmailItem email={USER.email} />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={itemVariants}
          transition={{ duration: 0.3 }}
        >
          <IntroItem icon={GlobeIcon} content={urlToName(USER.website)} href={USER.website} />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={itemVariants}
          transition={{ duration: 0.3 }}
        >
          <IntroItem
            icon={USER.gender === "male" ? MarsIcon : VenusIcon}
            content={USER.pronouns}
          />
        </motion.div>
      </PanelContent>
    </Panel>
  );
}