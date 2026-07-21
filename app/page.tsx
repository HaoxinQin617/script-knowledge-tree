"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { type ScriptNode } from "./script-data";
import { nodes, tasks } from "./task-data";
import { guideByNode, type PracticalGuide } from "./guide-data";

const visualById: Record<string, { src: string; alt: string }> = Object.fromEntries(
  nodes.map((node) => [
    node.id,
    {
      src: `/illustrations/mindmaps/${node.id}.png`,
      alt: `${node.title}口播稿的液态玻璃思维导图`,
    },
  ]),
);

const keyTerms = [
  "API Key", "API", "Token", "GPU", "Embedding", "Reranker",
  "Agent", "OpenClaw", "Skills", "MCP", "Context 窗口", "RAG", "AIGC", "多模态", "泛化", "抽卡",
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

function GuideDocument({ guide }: { guide: PracticalGuide }) {
  return (
    <section className="practical-guide" aria-label="逐步操作文档">
      <header className="guide-intro">
        <p className="eyebrow">STEP-BY-STEP DOCUMENT · 更新于 {guide.updatedAt}</p>
        <h2>{guide.title}</h2>
        <p>{guide.intro}</p>
      </header>
      <div className="guide-choice-grid">
        {guide.quickChoice.map((item) => <div key={item.title}><strong>{item.title}</strong><p>{item.text}</p></div>)}
      </div>
      <div className="guide-steps">
        {guide.steps.map((step) => (
          <article className="guide-step" key={step.number}>
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
              {step.screenshot ? <figure className="official-shot">
                <Image src={step.screenshot} alt={step.screenshotAlt ?? "官方页面截图"} width={1440} height={1000} unoptimized/>
                <figcaption><span>官方页面截图</span>{step.officialUrl ? <a href={step.officialUrl} target="_blank" rel="noreferrer">打开对应官网 ↗</a> : null}</figcaption>
              </figure> : null}
              {step.commands?.map((command) => <div className="command-block" key={command.label}><div><span>{command.label}</span><button onClick={() => navigator.clipboard.writeText(command.code)}>复制</button></div><pre><code>{command.code}</code></pre></div>)}
              {step.checks?.length ? <div className="step-checks"><strong>完成检查</strong><ul>{step.checks.map((check) => <li key={check}>{check}</li>)}</ul></div> : null}
              {step.note ? <aside className="guide-note"><strong>注意</strong><p>{step.note}</p></aside> : null}
            </div>
          </article>
        ))}
      </div>
      <footer className="guide-sources"><strong>官方来源</strong>{guide.sources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} ↗</a>)}</footer>
    </section>
  );
}

export default function Home() {
  const [dateFilter, setDateFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [detailView, setDetailView] = useState<"script" | "guide">("script");
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
    setDetailView("script");
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      mainRef.current?.focus({ preventScroll: true });
    });
  };

  const current = getNode(selected);
  const practicalGuide = current ? guideByNode[current.id] : undefined;
  const visible = useMemo(() => tasks
    .filter((task) => dateFilter === "all" || task.dateLabel === dateFilter)
    .sort((a, b) => sortOrder === "newest"
      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    .map((task) => ({ task, node: getNode(task.rootId) }))
    .filter((entry): entry is { task: typeof tasks[number]; node: ScriptNode } => Boolean(entry.node))
    .filter(({ node }) => {
    const normalized = query.trim().toLowerCase();
    const textMatch = !normalized || `${node.title} ${node.summary} ${node.eyebrow}`.toLowerCase().includes(normalized);
    return textMatch;
  }), [dateFilter, sortOrder, query]);

  const dateOptions = [...new Set(tasks.map((task) => task.dateLabel))].sort().reverse();
  const latest = visible[0] ?? tasks.map((task) => ({task,node:getNode(task.rootId)})).find((entry) => entry.node);

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
            {practicalGuide ? <div className="detail-tabs" role="tablist" aria-label="内容类型">
              <button role="tab" aria-selected={detailView === "script"} onClick={() => setDetailView("script")}>口播稿与结构图</button>
              <button role="tab" aria-selected={detailView === "guide"} onClick={() => setDetailView("guide")}>逐步操作文档</button>
            </div> : null}
            {detailView === "script" || !practicalGuide ? <>
            <figure className="script-visual">
              <a className="mindmap-link" href={visualById[current.id].src} target="_blank" rel="noreferrer" aria-label={`放大查看${current.title}口播思维导图`}>
                <Image src={visualById[current.id].src} alt={visualById[current.id].alt} width={1584} height={990} priority unoptimized/>
              </a>
              <figcaption><span>口播思维导图 · 点击放大</span><b>沿着图中的节点顺序讲述，再对照下方完整文字稿补充细节。</b></figcaption>
            </figure>
            <div className="script-body">
              {current.body.map((paragraph, index) => <RichParagraph text={paragraph} index={index} key={index}/>) }
            </div>
            {current.children?.length ? <div className="next-callout"><span>继续拆解</span><strong>下一层还有 {current.children.length} 个主题</strong></div> : null}
            </> : <GuideDocument guide={practicalGuide}/>} 
          </article>

          <aside className="topic-rail glass" aria-label="知识树导航">
            <div className="rail-heading"><p>{current.level === 1 ? "下一层" : current.level === 2 ? "继续深入" : "同组术语"}</p><h2>{current.level === 1 ? "类别" : "知识节点"}</h2></div>
            <div className="mini-tree" aria-label="当前路径">
              {path.map((item) => <button className={`mini-node level-node-${item.level}`} key={item.id} onClick={() => navigate(item.id)}><i>{item.level}</i><span>{item.title}</span></button>)}
            </div>
            <div className="rail-divider"><span>{current.level < 3 ? `第 ${current.level + 1} 层` : "同级切换"}</span></div>
            {related.length ? related.map((item, index) => (
              <button key={item.id} className={`rail-topic ${item.id === current.id ? "active" : ""}`} onClick={() => navigate(item.id)}>
                <Image src={visualById[item.id].src} alt="" width={86} height={86} unoptimized/><i>{String(index + 1).padStart(2, "0")}</i>
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

  return (
    <main className="app-shell" ref={mainRef} tabIndex={-1}>
      <div className="aurora a1"/><div className="aurora a2"/><div className="aurora a3"/><div className="noise"/>
      <header className="topbar glass">
        <div className="brand"><span className="brand-orb">声</span><strong>口播知识树</strong></div>
        <label className="search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索口播稿、类别或专业名词" aria-label="搜索口播稿"/></label>
        <button className="create-button">＋ 新建解析任务</button>
      </header>
      <section className="hero">
        <div><p className="eyebrow">SCRIPT WORKSPACE · FIRST LAYER ONLY</p><h1>先选一个主题，<br/><em>再逐层讲明白。</em></h1><p>主页只展示每个独立任务的第一层总览。进入主题后查看第二层分类，再从分类进入相应的第三层术语。</p></div>
        <button className="hero-sculpture glass" onClick={() => latest?.node && navigate(latest.node.id)} aria-label="打开最新上传主题">
          {latest?.node ? <Image src={visualById[latest.node.id].src} alt={visualById[latest.node.id].alt} width={1584} height={990} priority unoptimized/> : null}
          <span>打开最新主题 <b>→</b></span>
        </button>
      </section>
      <section className="library glass">
        <div className="library-head">
          <div><p className="eyebrow">独立主题任务库</p><h2>第一层主题</h2></div>
          <div className="date-controls">
            <label><span>日期</span><select value={dateFilter} onChange={(event) => setDateFilter(event.target.value)}><option value="all">全部日期</option>{dateOptions.map((date) => <option key={date} value={date}>{date}</option>)}</select></label>
            <label><span>排序</span><select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as "newest" | "oldest")}><option value="newest">最新在前</option><option value="oldest">最早在前</option></select></label>
          </div>
        </div>
        <div className="card-grid">
          {visible.map(({task,node}) => <button className={`topic-card glass level-card-${node.level}`} key={task.id} onClick={() => navigate(node.id)}>
            <div className="card-visual"><Image src={visualById[node.id].src} alt={visualById[node.id].alt} width={792} height={495} priority={node.level === 1} unoptimized/><span>第 {node.level} 层</span><i>{node.duration}</i></div>
            <div className="card-copy"><p className="card-kicker">{task.dateLabel} · {task.sourceCount} 张资料</p><h3>{node.title}</h3><p>{node.summary}</p><footer><b>第一层总览</b><span>进入主题 →</span></footer></div>
          </button>)}
        </div>
        {!visible.length && <div className="empty">没有找到匹配的口播稿。</div>}
      </section>
    </main>
  );
}
