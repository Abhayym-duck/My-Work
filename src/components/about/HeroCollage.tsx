import { siteConfig } from "@/data/site";

type Sticker = {
  emoji: string;
  className: string;
  rotate?: number;
  size?: "sm" | "md" | "lg";
};

const stickers: Sticker[] = [
  { emoji: "🖼️", className: "left-[3%] top-[4%]", rotate: -4, size: "lg" },
  { emoji: "🪔", className: "left-[2%] top-[38%]", rotate: -3, size: "lg" },
  { emoji: "🎧", className: "left-[19%] top-[36%]", rotate: 5, size: "md" },
  { emoji: "💿", className: "left-[29%] top-[30%]", rotate: -6, size: "lg" },
  { emoji: "🪴", className: "left-[16%] top-[76%]", rotate: -3, size: "md" },
  { emoji: "📗", className: "left-[54%] top-[6%]", rotate: -3, size: "lg" },
  { emoji: "☕️", className: "left-[65%] top-[8%]", rotate: 4, size: "md" },
  { emoji: "🥐", className: "left-[71%] top-[10%]", rotate: -8, size: "sm" },
  { emoji: "🎨", className: "left-[85%] top-[16%]", rotate: -6, size: "md" },
  { emoji: "🖥️", className: "left-[64%] top-[36%]", rotate: 3, size: "lg" },
  { emoji: "📮", className: "left-[52%] top-[58%]", rotate: -6, size: "md" },
  { emoji: "📸", className: "left-[81%] top-[58%]", rotate: 4, size: "md" },
  { emoji: "📔", className: "left-[85%] top-[80%]", rotate: 4, size: "md" },
];

const notes = [
  {
    text: "Review at 2pm",
    className: "left-[36%] top-[77%] -rotate-3 bg-[#f6b28d]",
  },
  {
    text: "To Do:\nSlicing\nStyle Guide\nPrototypes",
    className: "left-[35%] top-[86%] rotate-2 bg-[#bcd7ea]",
  },
];

const stickerSize: Record<NonNullable<Sticker["size"]>, string> = {
  sm: "h-14 w-14 text-2xl sm:h-20 sm:w-20 sm:text-4xl",
  md: "h-16 w-20 text-3xl sm:h-24 sm:w-28 sm:text-5xl",
  lg: "h-20 w-24 text-4xl sm:h-28 sm:w-36 sm:text-6xl",
};

export function HeroCollage() {
  return (
    <section className="relative overflow-hidden bg-[#efe9de]">
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:56px_56px]"
      />

      <div className="relative mx-auto aspect-[16/8] w-full max-w-(--container-wide) min-h-[440px] sm:min-h-[520px]">
        {stickers.map((s, i) => (
          <div
            key={i}
            className={`absolute ${s.className} ${stickerSize[s.size ?? "md"]} flex items-center justify-center rounded-xl border border-black/5 bg-white shadow-lg`}
            style={{ transform: `rotate(${s.rotate ?? 0}deg)` }}
          >
            <span>{s.emoji}</span>
          </div>
        ))}

        {notes.map((n, i) => (
          <div
            key={i}
            className={`absolute ${n.className} w-24 rounded-sm p-2.5 text-[11px] leading-snug font-medium whitespace-pre-line text-neutral-800 shadow-md sm:w-28 sm:text-xs`}
          >
            {n.text}
          </div>
        ))}

        {/* Headline copy, laid out over the grid like collage captions */}
        <p className="absolute left-[19%] top-[13%] w-[190px] text-xl font-semibold tracking-tight text-neutral-900 sm:w-[240px] sm:text-3xl">
          The world is full of
        </p>

        <p className="absolute left-[54%] top-[26%] w-[190px] text-xl font-semibold tracking-tight text-neutral-900 sm:w-[260px] sm:text-3xl">
          unfinished ideas
        </p>

        <p className="absolute left-[19%] top-[57%] w-[220px] text-xl font-semibold tracking-tight text-neutral-900 sm:w-[280px] sm:text-3xl">
          &amp; frustrating experiences
        </p>

        <div className="absolute left-[62%] top-[68%] w-[220px] sm:w-[280px]">
          <p className="mb-1 text-sm italic text-neutral-600 sm:text-base">
            I design the path
          </p>
          <p className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            that make them seamless
          </p>
        </div>

        <p className="absolute bottom-[3%] left-[3%] text-xs text-neutral-500 sm:text-sm">
          {siteConfig.email}
        </p>
      </div>
    </section>
  );
}
