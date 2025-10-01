"use client";

import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

import { About } from "@/features/profile/components/about";
import { Awards } from "@/features/profile/components/awards";
import { Blog } from "@/features/profile/components/blog";
import { Brand } from "@/features/profile/components/brand";
import { Certifications } from "@/features/profile/components/certifications";
import { Experiences } from "@/features/profile/components/experiences";
import { Overview } from "@/features/profile/components/overview";
import { ProfileCover } from "@/features/profile/components/profile-cover";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import NameWritingAnimation from "@/components/ui/NameWritingAnimation";



// Shutter Animation Component
function ShutterReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={{ clipPath: "inset(0% 0 0 0)" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }}
      className="w-full"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Page() {
  const [showContent, setShowContent] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side before starting animations
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNameComplete = () => {
    setShowContent(true);
  };

  // Show content immediately on server to prevent hydration issues
  if (!isClient) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <div className="mx-auto md:max-w-3xl">
          <div className="space-y-0">

            <ProfileCover />
            <ProfileHeader />
            <Separator />
            <Overview />
            <Separator />
            <SocialLinks />
            <Separator />
            <About />
            <Separator />
            <TeckStack />
            <Separator />
            <Experiences />
            <Separator />
            <Projects />
            <Separator />
            <Brand />
            <Separator />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
    
      <AnimatePresence mode="wait">
        {!showContent ? (
          <NameWritingAnimation key="name-writing" onComplete={handleNameComplete} />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto md:max-w-3xl"
          >
            <ShutterReveal>
              <div className="space-y-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  <ProfileCover />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  <ProfileHeader />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                  <Separator />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                >
                  <Overview />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                >
                  <Separator />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                >
                  <SocialLinks />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
                >
                  <Separator />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
                >
                  <About />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
                >
                  <Separator />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.6, ease: "easeOut" }}
                >
                  <TeckStack />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }}
                >
                  <Separator />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 3.0, ease: "easeOut" }}
                >
                  <Experiences />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
                >
                  <Separator />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.4, ease: "easeOut" }}
                >
                  <Projects />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 3.6, ease: "easeOut" }}
                >
                  <Separator />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 3.8, ease: "easeOut" }}
                >
                  <Brand />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 4.0, ease: "easeOut" }}
                >
                  <Separator />
                </motion.div>
              </div>
            </ShutterReveal>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
