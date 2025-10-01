"use client";

import { motion } from "framer-motion";
import { USER } from "@/features/profile/data/user";

export function NameLoadingAnimation() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl font-bold"
      >
        {USER.displayName}
      </motion.h1>
      <p className="text-muted-foreground">@{USER.username}</p>
    </div>
  );
}
