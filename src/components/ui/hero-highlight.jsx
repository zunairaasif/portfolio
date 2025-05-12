"use client";
import { cn } from "@app/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import {
  useMotionValue,
  motion,
  useMotionTemplate,
  useAnimation,
  useInView,
} from "motion/react";

export const Highlight = ({ children, className }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { threshold: 0.3, once: false });

  useEffect(() => {
    if (isInView) {
      controls.start({
        backgroundSize: "100% 100%",
        transition: {
          duration: 2,
          ease: "linear",
          delay: 0.5,
        },
      });
    } else {
      controls.set({ backgroundSize: "0% 100%" }); // Reset animation
    }
  }, [isInView, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ backgroundSize: "0% 100%" }}
      animate={controls}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 pb-1 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
