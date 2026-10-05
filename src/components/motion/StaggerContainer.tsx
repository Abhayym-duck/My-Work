"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer } from "./variants";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

/**
 * Wraps a list of Reveal (or other motion) children so they animate in
 * sequence rather than all at once. Children should use variants that
 * define their own "hidden"/"visible" states (e.g. fadeUp).
 */
export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(stagger, delayChildren)}
    >
      {children}
    </motion.div>
  );
}
