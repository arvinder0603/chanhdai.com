import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/features/profile/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

// Floating code symbols
const codeSymbols = ['<', '>', '{', '}', '/', '*', '=', '+'];
const floatingElements = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 3,
  size: Math.random() * 12 + 10,
}));

export function About() {
  return (
    <Panel id="about" className="relative overflow-hidden">
      <PanelHeader className="relative z-10">
        <PanelTitle className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Code2 className="w-5 h-5" />
          </motion.div>
          About
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-4 h-4 text-purple-500" />
          </motion.div>
        </PanelTitle>
      </PanelHeader>

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating code symbols */}
      <div className="absolute inset-0 opacity-10">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute font-mono font-bold text-blue-500"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {element.symbol}
          </motion.div>
        ))}
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-purple-500"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <PanelContent className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Prose>
            <Markdown>{USER.about}</Markdown>
          </Prose>
        </motion.div>
      </PanelContent>

      {/* Corner accent elements */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />
    </Panel>
  );
}