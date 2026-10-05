import Link from "next/link";
import { Archive, Settings, MoreHorizontal } from "lucide-react";

const FOLDER_CLIP =
  "polygon(6% 0%, 40% 0%, 46% 6%, 46% 16%, 94% 16%, 100% 22%, 100% 94%, 94% 100%, 6% 100%, 0% 94%, 0% 6%)";

const folders = [
  {
    slug: "padel-iq",
    name: "Padel IQ",
    notes: 58,
    date: "Wed, 07 May 2025",
    time: "16:34",
  },
  {
    slug: "design-editor",
    name: "Design Editor",
    notes: 34,
    date: "Mon, 12 Feb 2024",
    time: "11:02",
  },
  {
    slug: "automation-suite",
    name: "Automation Suite",
    notes: 41,
    date: "Thu, 19 Sep 2024",
    time: "09:47",
  },
  {
    slug: "onboarding-revamp",
    name: "Onboarding",
    notes: 23,
    date: "Fri, 03 Nov 2023",
    time: "14:16",
  },
];

function FolderCard({ folder }: { folder: (typeof folders)[number] }) {
  return (
    <Link
      href={`/work/${folder.slug}`}
      className="group relative block h-full w-full"
    >
      {/* Note peeking out, revealed on hover */}
      <div
        className="absolute inset-x-[6%] top-0 flex h-[55%] -translate-y-2 flex-col justify-between rounded-xl border border-border bg-background px-[8%] py-[7%] opacity-0 shadow-(--shadow-md) transition-all duration-(--duration-default) ease-(--ease-default) group-hover:translate-y-0 group-hover:opacity-100"
        aria-hidden
      >
        <div className="flex min-w-0 items-center justify-between gap-1.5">
          <span className="min-w-0 truncate text-[9px] font-medium text-foreground sm:text-[11px] md:text-xs">
            {folder.date}
          </span>
          <span className="shrink-0 rounded-(--radius-sm) bg-surface px-1.5 py-0.5 text-[8px] font-medium text-muted-foreground sm:text-[10px] md:text-[11px]">
            {folder.time}
          </span>
        </div>
        <MoreHorizontal size={12} className="self-end text-muted-foreground" />
      </div>

      {/* Folder */}
      <div
        className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-[#7b7ff4] to-[#2f33c7] px-[8%] pt-[20%] pb-[7%] transition-transform duration-(--duration-default) ease-(--ease-default) group-hover:-translate-y-1"
        style={{ clipPath: FOLDER_CLIP }}
      >
        <div className="flex min-w-0 items-start justify-between gap-1.5">
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="truncate text-[10px] font-semibold text-white sm:text-sm md:text-base">
              {folder.name}
            </span>
            <span className="truncate text-[9px] text-white/70 sm:text-[11px] md:text-xs">
              {folder.notes} notes
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1 text-white/80 sm:gap-1.5">
            <Archive size={12} className="hidden sm:block" aria-hidden />
            <Archive size={10} className="sm:hidden" aria-hidden />
            <Settings size={12} className="hidden sm:block" aria-hidden />
            <Settings size={10} className="sm:hidden" aria-hidden />
          </div>
        </div>
      </div>
    </Link>
  );
}

/** Project folders rendered inside the hero illustration's monitor screen. */
export function ScreenFolders() {
  return (
    <div
      className="absolute box-border grid grid-cols-2 grid-rows-2 gap-[5%] p-[4%]"
      style={{
        left: "20.9%",
        top: "20.3%",
        width: "57.2%",
        height: "34.1%",
      }}
    >
      {folders.map((folder) => (
        <FolderCard key={folder.slug} folder={folder} />
      ))}
    </div>
  );
}
