import Link from "next/link";
import type { CSSProperties } from "react";

const folders = [
  { slug: "redfox-courier", name: "RedFox Courier", role: "Logistics", color: "#ff8a3d" },
  {
    slug: "design-editor",
    name: "Design Editor",
    role: "Design Tools",
    color: "#9d8cff",
  },
  {
    slug: "automation-suite",
    name: "Automation Suite",
    role: "Product Design",
    color: "#4fd8a0",
  },
  {
    slug: "onboarding-revamp",
    name: "Onboarding",
    role: "UX Research",
    color: "#ff5c7a",
  },
];

// Stepped (pixel-style) folder outline: tab + body as ONE connected path.
// Drawn in a 100x100 box and stretched, so strokes use non-scaling-stroke.
const FOLDER_OUTLINE =
  "M0,17 L0,6 L2,6 L2,0 L22,0 L22,6 L27,6 L27,17 L100,17 L100,100 L0,100 Z";

// Solid-filled tab block sitting on the body's top edge.
const TAB_FILL = "M2,6 L2,2 L22,2 L22,6 L27,6 L27,17 L2,17 Z";

function PixelArrow() {
  return (
    <svg
      viewBox="0 0 9 9"
      className="crt-arrow h-[3.4cqw] w-[3.4cqw] shrink-0"
      shapeRendering="crispEdges"
      fill="currentColor"
      aria-hidden
    >
      <rect x="0" y="4" width="8" height="1" />
      <rect x="5" y="1" width="1" height="1" />
      <rect x="6" y="2" width="1" height="1" />
      <rect x="7" y="3" width="1" height="1" />
      <rect x="7" y="5" width="1" height="1" />
      <rect x="6" y="6" width="1" height="1" />
      <rect x="5" y="7" width="1" height="1" />
    </svg>
  );
}

function FolderItem({ folder }: { folder: (typeof folders)[number] }) {
  return (
    <Link
      href={`/work/${folder.slug}`}
      className="crt-item group relative block h-full min-h-0 w-full"
      style={{ "--accent": folder.color } as CSSProperties}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="crt-glow absolute inset-0 h-full w-full overflow-visible"
        aria-hidden
      >
        <path d={TAB_FILL} className="crt-tab" />
        <path
          d={FOLDER_OUTLINE}
          className="crt-border"
          strokeWidth="3.5"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
        {/* thin inner border */}
        <rect
          x="2"
          y="21"
          width="96"
          height="76"
          fill="none"
          className="crt-inner"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="absolute inset-x-[4%] bottom-[5%] top-[21%] flex items-center justify-between gap-[1.5cqw] px-[4%]">
        <div className="min-w-0 text-left">
          <p className="truncate text-[3.3cqw] font-bold leading-tight tracking-tight">
            {folder.name}
            <span className="crt-cursor ml-[0.4cqw] inline-block h-[2.4cqw] w-[1.3cqw] translate-y-[0.3cqw] bg-current align-baseline" />
          </p>
          <p className="mt-[0.4cqw] truncate text-[2cqw] leading-tight opacity-85">
            {folder.role}
          </p>
        </div>
        <PixelArrow />
      </div>
    </Link>
  );
}

/** Project menu rendered as native UI inside the hero monitor's CRT screen. */
export function ScreenFolders() {
  return (
    <div
      className="crt-screen @container absolute box-border flex flex-col overflow-hidden px-[3.6%] pb-[3.2%] pt-[2.6%]"
      style={{
        left: "20.9%",
        top: "20.3%",
        width: "57.2%",
        height: "34.1%",
        borderRadius: "1.5%",
        containerType: "inline-size",
      }}
    >
      <div className="flex items-baseline justify-between border-b-2 border-[#ff8a3d]/40 pb-[0.9cqw] text-[1.6cqw] font-semibold leading-none tracking-[0.12em] text-[#ff8a3d]/85">
        <span>PROJECTS/</span>
        <span>04 ITEMS</span>
      </div>

      <div className="mt-[3cqw] grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-x-[6cqw] gap-y-[5cqw]">
        {folders.map((folder) => (
          <FolderItem key={folder.slug} folder={folder} />
        ))}
      </div>

      <div className="crt-roll" aria-hidden />
      <div className="crt-overlay" aria-hidden />
      <div className="crt-noise" aria-hidden />
    </div>
  );
}
