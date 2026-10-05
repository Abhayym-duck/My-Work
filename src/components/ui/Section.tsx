import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerSizeProp } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: ContainerSizeProp;
  /** Set false to render raw children without the built-in Container wrapper */
  contained?: boolean;
  spacing?: "default" | "sm" | "none";
  as?: ElementType;
  id?: string;
}

const spacingClasses = {
  default: "py-(--spacing-section-y)",
  sm: "py-(--spacing-section-y-sm)",
  none: "",
};

/**
 * Standard vertical rhythm wrapper for page sections. Compose with
 * Container internally so most sections only need <Section>...</Section>.
 */
export function Section({
  children,
  className,
  containerSize = "default",
  contained = true,
  spacing = "default",
  as: Tag = "section",
  id,
}: SectionProps) {
  return (
    <Tag id={id} className={cn(spacingClasses[spacing], className)}>
      {contained ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </Tag>
  );
}
