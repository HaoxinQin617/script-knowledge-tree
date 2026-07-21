"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ScriptVisualVersions } from "./visual-data";

type VisualProps = {
  title: string;
  visuals: ScriptVisualVersions;
};

const previews = [
  { key: "version2", label: "新版二", note: "灰粉梦幻玻璃 · 线性结构" },
  { key: "version3", label: "新版三", note: "白色雾面玻璃 · 分层讲解" },
] as const;

export function PrimaryScriptVisual({ title, visuals }: VisualProps) {
  return (
    <figure className="script-visual primary-script-visual">
      <a className="mindmap-link" href={visuals.original} target="_blank" rel="noreferrer" aria-label={`放大查看${title}旧版首图`}>
        <Image src={visuals.original} alt={`${title}口播旧版首图`} width={1584} height={990} priority unoptimized/>
      </a>
      <figcaption><span>旧版首图 · 点击放大</span><b>保留原始版本，位于正文文字上端，不参与新版图片生成。</b></figcaption>
    </figure>
  );
}

export function VisualPreviewRail({ title, visuals, mobile = false }: VisualProps & { mobile?: boolean }) {
  const [active, setActive] = useState<(typeof previews)[number] | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setActive(null);
    requestAnimationFrame(() => lastTrigger.current?.focus());
  };

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <section className={`${mobile ? "mobile-visual-previews" : "visual-preview-rail"}`} aria-label="两个新版口播结构图预览">
        {!mobile ? <header><span>新版结构图</span><b>2 个独立版本</b></header> : null}
        {previews.map((preview) => (
          <button
            className="visual-preview-card"
            key={preview.key}
            ref={(element) => { if (active?.key === preview.key && element) lastTrigger.current = element; }}
            onClick={(event) => { lastTrigger.current = event.currentTarget; setActive(preview); }}
            aria-label={`放大查看${title}${preview.label}`}
          >
            <span><strong>{preview.label}</strong><small>{preview.note}</small></span>
            <Image src={visuals[preview.key]} alt={`${title}${preview.label}预览`} width={480} height={300} unoptimized/>
            <i>点击放大</i>
          </button>
        ))}
      </section>
      {active ? <VisualLightbox title={`${title} · ${active.label}`} src={visuals[active.key]} onClose={close}/> : null}
    </>
  );
}

export function VisualLightbox({ title, src, onClose }: { title: string; src: string; onClose: () => void }) {
  return (
    <div className="visual-lightbox" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="visual-lightbox-panel">
        <header><strong>{title}</strong><button onClick={onClose} aria-label="关闭大图">×</button></header>
        <Image src={src} alt={title} width={1600} height={1000} unoptimized/>
      </div>
    </div>
  );
}
