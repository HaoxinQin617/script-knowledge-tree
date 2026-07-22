"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ExampleVisualPage } from "./example-visual-data";

export function ExampleGallery({ title, pages }: { title: string; pages: ExampleVisualPage[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<number | null>(null);

  const move = useCallback((delta: number) => setIndex((current) => (current + delta + pages.length) % pages.length), [pages.length]);
  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => trigger.current?.focus());
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, move]);

  if (!pages.length) return null;
  const page = pages[index];

  return (
    <>
      <button ref={trigger} className="example-gallery-card" onClick={() => { setIndex(0); setOpen(true); }} aria-label={`打开${title}举例图集，共 ${pages.length} 页`}>
        <span className="example-gallery-stack" aria-hidden="true">
          <i/><i/>
          <Image src={pages[0].image} alt="" width={480} height={300} unoptimized/>
        </span>
        <span><strong>举例图集 · {pages.length} 页</strong><small>一页内包含多个简笔画 · 点击翻阅</small></span>
        <b>打开 →</b>
      </button>
      {open ? (
        <div className="example-gallery-modal" role="dialog" aria-modal="true" aria-label={`${title}举例图集`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <section className="example-gallery-viewer" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const distance = event.changedTouches[0].clientX - touchStart.current;
            if (Math.abs(distance) >= 48) move(distance > 0 ? -1 : 1);
            touchStart.current = null;
          }}>
            <header><span><strong>{page.title}</strong><small>第 {index + 1} / {pages.length} 页</small></span><button onClick={close} aria-label="关闭举例图集">×</button></header>
            <div className="example-gallery-stage"><Image src={page.image} alt={`${page.title}，第 ${index + 1} 页`} width={1600} height={1000} unoptimized/></div>
            <footer>
              <button onClick={() => move(-1)} disabled={pages.length < 2} aria-label="上一页">← 上一页</button>
              <div aria-label="页码">{pages.map((item, dot) => <button key={item.id} className={dot === index ? "active" : ""} onClick={() => setIndex(dot)} aria-label={`查看第 ${dot + 1} 页`}/>)}</div>
              <button onClick={() => move(1)} disabled={pages.length < 2} aria-label="下一页">下一页 →</button>
            </footer>
          </section>
        </div>
      ) : null}
    </>
  );
}
