import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  id: string;
  title: string;
  brief?: string[];
  className?: string;
}

/** Marks where a visual goes, and what it should show. Swap for a real image later. */
export function ImagePlaceholder({
  id,
  title,
  brief,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-[var(--cs-border)] bg-[#fafafa] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-[var(--cs-border)] bg-white px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex aspect-16/9 flex-col items-center justify-center gap-3 px-6 text-center">
        <ImageIcon
          className="h-8 w-8 text-[var(--cs-muted)]/60"
          strokeWidth={1.5}
          aria-hidden
        />
        <p className="text-xs font-semibold tracking-wide text-[var(--cs-accent)] uppercase">
          {id}
        </p>
        <p className="text-base font-medium text-[var(--cs-fg)]">{title}</p>
        {brief && brief.length > 0 && (
          <ul className="hidden max-w-xl flex-col gap-1 text-xs text-[var(--cs-muted)] sm:flex">
            {brief.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </figure>
  );
}
