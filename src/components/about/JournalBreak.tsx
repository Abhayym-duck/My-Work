export function JournalBreak() {
  return (
    <section className="bg-[#efe9de] py-20">
      <div className="mx-auto flex max-w-(--container-default) justify-center px-6">
        <div className="relative flex aspect-3/4 w-56 flex-col items-center justify-center rounded-lg bg-[#264d3f] p-6 shadow-xl sm:w-72">
          <span className="font-serif text-lg italic text-[#e8dcc0]">
            Journal
          </span>
          <span className="mt-6 text-6xl">📸</span>
          <span className="absolute bottom-6 h-1 w-16 rounded-full bg-[#e8dcc0]/40" />
        </div>
      </div>
    </section>
  );
}
