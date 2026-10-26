"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import s from "./ZoomableImage.module.css";

type Props = { src: string; alt: string; width: number; height: number; sizes?: string; preload?: boolean };

export function ZoomableImage(props: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const moved = useRef(false);
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const changeZoom = (amount: number) => setZoom(value => Math.min(4, Math.max(1, value + amount)));

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  const close = () => dialog.current?.close();
  return <>
    <button className={s.trigger} type="button" aria-label={`Enlarge image: ${props.alt}`} onClick={() => {
      setZoom(1);
      setOpen(true);
      dialog.current?.showModal();
      if (viewport.current) viewport.current.scrollTo(0, 0);
    }}>
      <Image {...props} />
    </button>
    <dialog ref={dialog} className={s.dialog} aria-label="Image viewer" onClose={() => setOpen(false)}>
      {open && <>
        <div className={s.toolbar}>
          <button type="button" aria-label="Zoom out" disabled={zoom === 1} onClick={() => changeZoom(-0.5)}>−</button>
          <button type="button" aria-label="Reset zoom" onClick={() => { setZoom(1); viewport.current?.scrollTo(0, 0); }}>{Math.round(zoom * 100)}%</button>
          <button type="button" aria-label="Zoom in" disabled={zoom === 4} onClick={() => changeZoom(0.5)}>+</button>
          <button type="button" aria-label="Close image viewer" onClick={close}>✕</button>
        </div>
        <div ref={viewport} className={s.viewport} onClick={event => { if (event.target === event.currentTarget && !moved.current) close(); }}
          onPointerDown={event => {
            moved.current = false;
            if (zoom <= 1 || event.button !== 0 || event.target === event.currentTarget) return;
            const el = event.currentTarget;
            drag.current = { x: event.clientX, y: event.clientY, left: el.scrollLeft, top: el.scrollTop };
            el.setPointerCapture(event.pointerId);
          }}
          onPointerMove={event => {
            if (!drag.current) return;
            if (Math.abs(event.clientX - drag.current.x) + Math.abs(event.clientY - drag.current.y) > 4) moved.current = true;
            event.currentTarget.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
            event.currentTarget.scrollTop = drag.current.top - (event.clientY - drag.current.y);
          }}
          onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }}>
          <div className={s.image} style={{ width: `calc(min(90vw, ${80 * props.width / props.height}dvh) * ${zoom})`, cursor: zoom > 1 ? "grab" : "zoom-in" }}>
            <Image src={props.src} alt={props.alt} width={props.width} height={props.height} sizes="100vw" unoptimized draggable={false}
              onDoubleClick={() => setZoom(value => value === 1 ? 2 : 1)} />
          </div>
        </div>
      </>}
    </dialog>
  </>;
}
