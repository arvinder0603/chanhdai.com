import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";
import { motion } from "framer-motion";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <motion.div
      className="screen-line-after flex border-x border-edge"
      whileHover={{ scale: 1.01 }} // subtle lift on hover
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      {/* Avatar */}
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Background Pattern */}
        <motion.div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
          animate={{ opacity: [0.8, 1, 0.8] }} // subtle pulse
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </motion.div>

        {/* Header */}
        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold relative group">
            <motion.span
              className="transition-colors duration-500 ease-in-out"
              
            >
              {USER.displayName}
            </motion.span>
            &nbsp;
            <SimpleTooltip content="Verified">
              <motion.div
                className="size-[0.6em] translate-y-px text-info select-none"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <VerifiedIcon />
              </motion.div>
            </SimpleTooltip>
          </h1>

          {/* Flip Sentences */}
          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <FlipSentences sentences={USER.flipSentences} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
