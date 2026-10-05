"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { pageTransition } from "./variants";

/**
 * Wraps route content with a subtle enter animation. Kept simple (no
 * AnimatePresence/exit choreography across routes) since App Router
 * unmounts/remounts segments in a way that doesn't pair cleanly with
 * cross-route exit transitions without extra plumbing — revisit once
 * final navigation/layout direction is set.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageTransition}>
      {children}
    </motion.div>
  );
}
