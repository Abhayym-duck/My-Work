import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWrapperProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Consistent wrapper around next/image with a neutral placeholder frame.
 * Requires meaningful `alt` text — never pass an empty string except for
 * genuinely decorative images.
 */
export function ImageWrapper({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ImageWrapperProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-(--radius-lg) bg-surface",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
