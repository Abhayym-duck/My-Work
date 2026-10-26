"use client";

import { useRef, useState } from "react";

export function AboutVideo({ src, title }: { src: string; title: string }) {
  const player = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-[min(75svh,720px)] min-h-[420px] overflow-hidden rounded-[1.5rem] bg-black shadow-(--shadow-md) sm:aspect-video sm:h-auto sm:min-h-0">
      <video
        ref={player}
        controls
        playsInline
        preload="metadata"
        poster="/videos/about-me-poster.jpg"
        aria-label={title}
        onError={() => setFailed(true)}
        onLoadedData={() => setFailed(false)}
        className="h-full w-full object-cover sm:object-contain"
      >
        <source src={src} type="video/mp4" />
        <a href={src}>Open the introduction video</a>
      </video>
      {failed && (
        <div role="alert" className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/85 px-6 text-center text-sm text-white">
          <p>The video couldn’t load. Try again or open it directly.</p>
          <button type="button" className="rounded-full bg-white px-5 py-2 text-black" onClick={() => { setFailed(false); player.current?.load(); }}>
            Retry video
          </button>
          <a href={src} className="underline">Open video</a>
        </div>
      )}
    </div>
  );
}
