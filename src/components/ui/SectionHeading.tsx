import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Heading level for correct document outline — default h2 for section titles */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-medium tracking-(--tracking-wide) text-muted uppercase">
          {eyebrow}
        </span>
      ) : null}
      <Tag className="text-3xl font-semibold tracking-(--tracking-tight) text-foreground text-balance">
        {title}
      </Tag>
      {description ? (
        <p className="max-w-(--container-content) text-base text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
