"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "./variants";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  /** Delay in seconds, useful for manual stagger without a parent container */
  delay?: number;
  /** Fraction of the element that must be visible before it animates in */
  amount?: number;
  as?: "div" | "section" | "li";
}

/**
 * Scroll-triggered reveal wrapper. Animates once when the element enters
 * the viewport. Automatically renders motionless when the user prefers
 * reduced motion (handled globally in globals.css + framer-motion defaults).
 */
export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  amount = 0.3,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
