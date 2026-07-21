"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { nodes, type Level, type ScriptNode } from "./script-data";

const visualById: Record<string, { src: string; alt: string }> = Object.fromEntries(
  nodes.map((node) => [
    node.id,
    {
      src: `/illustrations/${node.id}.webp`,
      alt: `${node.title}的液态玻璃概念配图`,
    },
  ]),
);

const keyTerms = [
  "API Key", "API", "Token", "GPU", "Embedding", "Reranker",
  "商业模型", "开源模型", "混合架构", "模型路由", "部署", "量化",
  "输入", "输出", "成本", "数据", "服务器", "用户", "请求", "模型",
];
const conclusionCue = /^(所以|因此|换句话说|记住|真正|关键|核心|最后|总的来说|一句话)/;
const contrastCue = /(不是.{0,18}而是|最大.{0,8}(好处|缺点|价值)|最重要|不能|不要|必须)/;

function emphasizeText(text: string): ReactNode[] {
  const escaped = keyTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  return text.split(regex).map((part, index) =>
    keyTerms.includes(part)
      ? <mark className="term-mark" key={`${part}-${index}`}>{part}</mark>
      : part,
  );
}

function RichParagraph({ text, index }: { text: string; index: number }) {
  const isConclusion = conclusionCue.test(text.trim());
  const isKey = contrastCue.test(text);
  return (
    <p className={`${isConclusion ? "paragraph-conclusion" : ""} ${isKey ? "paragraph-key" : ""}`}>
      <span className="paragraph-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <span>{emphasizeText(text)}</span>
    </p>
  );
}

function getNode(id: string | null) {
  return nodes.find((node) => node.id === id);
}

function pathFor(node: ScriptNode) {
  const path: ScriptNode[] = [node];
  let parentId = node.parent;
  while (parentId) {
    const parent = getNode(parentId);
    if (!parent) break;
    path.unshift(parent);
    parentId = parent.parent;
  }
  return path;
}

function branchFor(node: ScriptNode) {
  if (node.level === 1) return nodes.filter((item) => item.parent === node.id);
  if (node.level === 2) return nodes.filter((item) => item.parent === node.id);
  return nodes.filter((item) => item.parent === node.parent);
}

export default function Home() {
  const [filter, setFilter] = useState<"all" | Level>("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const syncFromUrl = () => setSelected(decodeURIComponent(location.hash.slice(1)) || null);
    syncFromUrl();
    window.addEventListener("hashchange", syncFromUrl);
    return () => window.removeEventListener("hashchange", syncFromUrl);
  }, []);

  const navigate = (id: string | null) => {
    const nextHash = id ? `#${encodeURIComponent(id)}` : location.pathname;
    history.pushState(null, "", nextHash);
    setSelected(id);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      mainRef.current?.focus({ preventScroll: true });
    });
  };

  const current = getNode(selected);
  const visible = useMemo(() => nodes.filter((node) => {
    const levelMatch = filter === "all" || node.level === filter;
    const normalized = query.trim().toLowerCase();
    const textMatch = !normalized || `${node.title} ${node.summary} ${node.eyebrow}`.toLowerCase().includes(normalized);
    return levelMatch && textMatch;
  }), [filter, query]);

  async function copyScript() {
    if (!current) return;
    await navigator.clipboard.writeText([current.title, current.summary, ...current.body].join("\n\n"));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  if (current) {
    const path = pathFor(current);
    const related = branchFor(current);
    const parent = current.parent ? getNode(current.parent) : undefined;
    return (
      <main className="app-shell detail-mode" ref={mainRef} tabIndex={-1}>
        <a className="skip-link" href="#script-content">跳到口播正文</a>
        <div className="aurora a1"/><div className="aurora a2"/><div className="aurora a3"/><div className="noise"/>
        <header className="topbar glass">
          <button className="brand" onClick={() => navigate(null)} aria-label="返回任务库">
            <span className="brand-orb">声</span><strong>口播知识树</strong>
          </button>
          <nav className="crumbs" aria-label="面包屑">
            <button onClick={() => navigate(null)}>任务库</button><span>›</span>
            {path.map((item, index) => <span className="crumb-item" key={item.id}>{index ? <span>›</span> : null}<button aria-current={item.id === current.id ? "page" : undefined} onClick={() => navigate(item.id)}>{item.title}</button></span>)}
          </nav>
          <button className="soft-button" onClick={copyScript}>{copied ? "已复制" : "复制全文"}</button>
        </header>

        <section className="reader-layout">
          <article className="script-paper glass" id="script-content">
            <div className="reading-progress" aria-label={`当前位于第 ${current.level} 层`}>
              {[1,2,3].map((level) => <span key={level} className={level <= current.level ? "reached" : ""}><i>{level}</i><b>{["总览","类别","术语"][level-1]}</b></span>)}
            </div>
            <div className={`level-badge level-${current.level}`}>第 {current.level} 层 · {current.eyebrow}</div>
            <p className="eyebrow">{current.duration} · 可直接照稿朗读</p>
            <h1>{current.title}</h1>
            <p className="lead">{current.summary}</p>
            <figure className="script-visual">
              <Image src={visualById[current.id].src} alt={visualById[current.id].alt} width={1584} height={990} priority/>
              <figcaption><span>视觉记忆卡</span><b>{current.summary}</b></figcaption>
            </figure>
            <div className="script-body">
              {current.body.map((paragraph, index) => <RichParagraph text={paragraph} index={index} key={index}/>) }
            </div>
            {current.children?.length ? <div className="next-callout"><span>继续拆解</span><strong>下一层还有 {current.children.length} 个主题</strong></div> : null}
          </article>

          <aside className="topic-rail glass" aria-label="知识树导航">
            <div className="rail-heading"><p>{current.level === 1 ? "下一层" : current.level === 2 ? "继续深入" : "同组术语"}</p><h2>{current.level === 1 ? "类别" : "知识节点"}</h2></div>
            <div className="mini-tree" aria-label="当前路径">
              {path.map((item) => <button className={`mini-node level-node-${item.level}`} key={item.id} onClick={() => navigate(item.id)}><i>{item.level}</i><span>{item.title}</span></button>)}
            </div>
            <div className="rail-divider"><span>{current.level < 3 ? `第 ${current.level + 1} 层` : "同级切换"}</span></div>
            {related.length ? related.map((item, index) => (
              <button key={item.id} className={`rail-topic ${item.id === current.id ? "active" : ""}`} onClick={() => navigate(item.id)}>
                <Image src={visualById[item.id].src} alt="" width={86} height={86}/><i>{String(index + 1).padStart(2, "0")}</i>
                <span><strong>{item.title}</strong><small>{item.duration}</small></span><b>→</b>
              </button>
            )) : <p className="rail-empty">这一层已经讲到底了。</p>}
            {parent ? <button className="rail-back" onClick={() => navigate(parent.id)}>← 返回上一层：{parent.title}</button> : null}
            <button className="rail-library" onClick={() => navigate(null)}>返回全部口播稿</button>
          </aside>
        </section>
      </main>
    );
  }

  const today = new Date().toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" });
  return (
    <main className="app-shell" ref={mainRef} tabIndex={-1}>
      <div className="aurora a1"/><div className="aurora a2"/><div className="aurora a3"/><div className="noise"/>
      <header className="topbar glass">
        <div className="brand"><span className="brand-orb">声</span><strong>口播知识树</strong></div>
        <label className="search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索口播稿、类别或专业名词" aria-label="搜索口播稿"/></label>
        <button className="create-button">＋ 新建解析任务</button>
      </header>
      <section className="hero">
        <div><p className="eyebrow">SCRIPT WORKSPACE · 13 VISUAL STORIES</p><h1>把复杂资料，<br/><em>讲成人人都懂的话。</em></h1><p>每篇口播都有独立视觉记忆卡，从总览到术语，沿着一条清楚的路径逐层理解。</p></div>
        <button className="hero-sculpture glass" onClick={() => navigate("overview")} aria-label="从第一层总览开始">
          <Image src={visualById.overview.src} alt="三层口播知识树总览" width={1584} height={990} priority/>
          <span>从第一层开始 <b>→</b></span>
        </button>
      </section>
      <section className="library glass">
        <div className="library-head">
          <div><p className="eyebrow">今日独立任务</p><h2>{today}</h2></div>
          <div className="filters" role="group" aria-label="按层级筛选">
            {[["all","全部"],[1,"第一层"],[2,"第二层"],[3,"第三层"]].map(([value,label]) => <button key={value} className={filter === value ? "active" : ""} aria-pressed={filter === value} onClick={() => setFilter(value as "all" | Level)}>{label}</button>)}
          </div>
        </div>
        <div className="task-title">
          <div className="date-tile"><b>{new Date().getDate()}</b><span>{new Date().toLocaleDateString("zh-CN",{month:"short"})}</span></div>
          <div><span>独立任务 · 4 份对话截图</span><h3>AI 产品的三种模型接入方式</h3><p>1 篇总览 · 3 个类别详解 · 9 个术语拆解 · 13 张配套视觉</p></div>
          <button onClick={() => navigate("overview")}>进入知识树 →</button>
        </div>
        <div className="level-map" aria-label="三层知识结构">
          <span className="active"><i>1</i>总览逻辑</span><b>→</b><span><i>2</i>运行类别</span><b>→</b><span><i>3</i>专业术语</span>
        </div>
        <div className="card-grid">
          {visible.map((node) => <button className={`topic-card glass level-card-${node.level}`} key={node.id} onClick={() => navigate(node.id)}>
            <div className="card-visual"><Image src={visualById[node.id].src} alt={visualById[node.id].alt} width={792} height={495} priority={node.level === 1}/><span>第 {node.level} 层</span><i>{node.duration}</i></div>
            <div className="card-copy"><p className="card-kicker">{node.eyebrow}</p><h3>{node.title}</h3><p>{node.summary}</p><footer><b>视觉口播稿</b><span>打开 →</span></footer></div>
          </button>)}
        </div>
        {!visible.length && <div className="empty">没有找到匹配的口播稿。</div>}
      </section>
    </main>
  );
}
