import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack" className="relative overflow-hidden">
      <PanelHeader className="relative z-10">
        <PanelTitle className="flex items-center gap-2">
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              rotateX: [0, 15, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Layers className="w-5 h-5" />
          </motion.div>
          Stack
        </PanelTitle>
      </PanelHeader>

      {/* 3D floating background particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border border-blue-500/30 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              z: [0, 50, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)",
            "radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 60%)",
            "radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 60%)",
            "radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75",
          "relative z-10"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech, index) => {
            return (
              <motion.li 
                key={tech.key} 
                className="flex"
                initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ 
                  scale: 1.15,
                  rotateY: 15,
                  rotateX: 10,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <SimpleTooltip content={tech.title}>
                  <motion.a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                    className="relative block"
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* 3D Shadow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-md"
                      style={{ 
                        transform: "translateZ(-10px)",
                        transformStyle: "preserve-3d",
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    <motion.div
                      className="relative"
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {tech.theme ? (
                        <>
                          <Image
                            src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`}
                            alt={`${tech.title} light icon`}
                            width={32}
                            height={32}
                            className="hidden [html.light_&]:block"
                            unoptimized
                          />
                          <Image
                            src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-dark.svg`}
                            alt={`${tech.title} dark icon`}
                            width={32}
                            height={32}
                            className="hidden [html.dark_&]:block"
                            unoptimized
                          />
                        </>
                      ) : (
                        <Image
                          src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`}
                          alt={`${tech.title} icon`}
                          width={32}
                          height={32}
                          unoptimized
                        />
                      )}
                    </motion.div>
                    <span className="sr-only">{tech.title}</span>
                  </motion.a>
                </SimpleTooltip>
              </motion.li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}