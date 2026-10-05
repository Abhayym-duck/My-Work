export function TagRibbon({
  items,
  rotate = -2,
}: {
  items: string[];
  rotate?: number;
}) {
  const line = items.join("   •   ");

  return (
    <div className="overflow-hidden bg-background py-10">
      <div
        className="whitespace-nowrap border-y border-border bg-[#efe9de] py-4 text-lg font-medium tracking-tight text-neutral-800"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <span className="mx-4">{line}</span>
        <span className="mx-4">{line}</span>
      </div>
    </div>
  );
}
