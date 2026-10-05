import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerSizeProp = "content" | "narrow" | "default" | "wide" | "full";
type ContainerSize = ContainerSizeProp;

const sizeClasses: Record<ContainerSize, string> = {
  content: "max-w-(--container-content)",
  narrow: "max-w-(--container-narrow)",
  default: "max-w-(--container-default)",
  wide: "max-w-(--container-wide)",
  full: "max-w-none",
};

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: ElementType;
}

/**
 * Horizontally centers and constrains content width. `size` maps to the
 * container-width design tokens defined in globals.css.
 */
export function Container({
  children,
  size = "default",
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
