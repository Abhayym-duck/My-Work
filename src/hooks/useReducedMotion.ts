import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Thin re-export so app code has a single, project-owned import path
 * (`@/hooks/useReducedMotion`) rather than depending on framer-motion directly.
 */
export const useReducedMotion = useFramerReducedMotion;
