"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onComplete: () => void;
}

const USER = {
  displayName: "Arvinder Singh",
  username: "arvinder_dev",
};

// Fake terminal lines (simulating complex queries/logs)
const fakeLogs = [
  `> Initializing portfolio...`,
  `> Loading modules: react, nextjs, framer-motion`,
  `> Running query: SELECT * FROM developers WHERE username = '${USER.username}'`,
  `> Status: 200 OK - user found`,
  `> Rendering profile...`,
];

export default function NameWritingAnimation({ onComplete }: Props) {
  const [displayText, setDisplayText] = useState("");
  const [logIndex, setLogIndex] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const fullName = USER.displayName;
  const typingSpeed = 100; // ms per character
  const logDelay = 800; // ms between fake log lines

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Add fake logs sequentially
  useEffect(() => {
    if (!isClient) return;
    if (logIndex < fakeLogs.length) {
      const timeout = setTimeout(() => {
        setLogs((prev) => [...prev, fakeLogs[logIndex]]);
        setLogIndex((prev) => prev + 1);
      }, logDelay);
      return () => clearTimeout(timeout);
    }
  }, [logIndex, isClient]);

  // Type the name after logs finish
  useEffect(() => {
    if (!isClient || logIndex < fakeLogs.length) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowCursor(false);
          setTimeout(() => {
            onComplete();
          }, 1200);
        }, 500);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [fullName, logIndex, onComplete, isClient]);

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-gray-200 font-mono">
        <h1 className="text-4xl">{fullName}</h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-[700px] rounded-lg shadow-2xl border border-gray-700 overflow-hidden relative">
        {/* Terminal header */}
        <div className="flex items-center px-4 py-2 bg-zinc-900 border-b border-gray-700">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <p className="ml-4 text-xs text-zinc-400">dev@portfolio: ~</p>
        </div>

        {/* Terminal body */}
        <div className="p-6 bg-black font-mono text-sm space-y-2 relative">
          {/* Fake logs */}
          {logs.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="whitespace-pre-wrap"
            >
              <span className="text-blue-400">{line.startsWith(">") ? "$" : ""}</span>{" "}
              <span className="text-gray-300">{line}</span>
            </motion.p>
          ))}

          {/* Typing name */}
          {logIndex >= fakeLogs.length && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-cyan-400 tracking-wide mt-4"
            >
              {"> "} {displayText}
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 text-cyan-500"
                >
                  █
                </motion.span>
              )}
            </motion.h1>
          )}

          {/* Username appears after name */}
          {displayText === fullName && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 text-purple-400"
            >
              @{USER.username}
            </motion.p>
          )}
        </div>

        {/* Subtle scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_2px] pointer-events-none" />
      </div>
    </div>
  );
}
