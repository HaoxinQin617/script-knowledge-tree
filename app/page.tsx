"use client";

import { useMemo, useState } from "react";

type Level = 1 | 2 | 3;
type ScriptNode = {
  id: string;
  level: Level;
  title: string;
  eyebrow: string;
  duration: string;
  summary: string;
  parent?: string;
  children?: string[];
  body: string[];
};

const nodes: ScriptNode[] = [
  {
    id: "overview", level: 1, title: "AI 接入的三种方式", eyebrow: "总览手稿", duration: "约 4 分钟",
    summary: "借能力、养能力、组合能力：用一家餐厅讲清 AI 产品怎么选模型。",
    children: ["api", "self-host", "hybrid"],
    body: [
      "如果把一个 AI 产品想象成一家餐厅，模型就是后厨。你不一定要自己种菜、养牛、盖厨房，但必须决定：这顿饭由谁来做。",
      "第一种，是直接调用商业模型 API。就像把订单交给成熟的中央厨房：上线最快、能力最强，但每一份订单都要付费，也会依赖供应商。",
      "第二种，是自己部署开源模型。相当于买设备、建厨房、请人维护。前期更费力，但数据和长期成本掌握在自己手里。",
      "第三种，是混合架构。日常小任务在自己的厨房完成，复杂任务再请更强的外援。它追求的不是某个模型最强，而是让每种任务去最合适的位置。",
      "所以，选方案不是选冠军。真正的问题是：现在最看重上线速度、数据控制，还是长期成本？答案不同，最合适的路也不同。",
    ],
  },
  {
    id: "api", level: 2, title: "直接调用商业模型 API", eyebrow: "类别详解", duration: "约 5 分钟", parent: "overview",
    summary: "把复杂能力当作成熟服务调用，快速搭建 AI 产品。", children: ["api-term", "api-key", "token"],
    body: [
      "先说最常见的一种：直接调用商业模型 API。这里可以把 API 理解成软件之间固定的服务窗口。你的产品把任务递进去，模型服务处理后，再把答案从同一个窗口送回来。",
      "用户看到的是聊天框、上传按钮和历史记录；真正负责理解问题、生成答案的模型，可能运行在 OpenAI、Anthropic 或其他服务商的服务器上。",
      "它最大的好处是快。团队不需要先训练模型、买显卡、维护推理服务，就能验证产品。代价也很明确：调用越多成本越高，服务价格、限流或故障也会影响产品。",
      "一次完整请求通常是：用户操作进入前端，后端补充规则并整理资料，使用 API Key 调用模型，模型按 Token 计算输入与输出，最后把结果返回界面。",
      "它最适合产品早期、个人开发者和希望快速上线的团队。等需求稳定、用户量增大，再判断是否把某些固定任务迁到本地模型。",
    ],
  },
  {
    id: "self-host", level: 2, title: "自己部署开源模型", eyebrow: "类别详解", duration: "约 5 分钟", parent: "overview",
    summary: "把 AI 能力真正运行在自己的设备与服务器上。", children: ["deployment", "gpu", "quantization"],
    body: [
      "自己部署不是下载一个文件、双击打开那么简单。它更像经营自己的工厂：模型只是机器，服务器、显卡、运行程序、监控和升级共同组成生产线。",
      "用户的问题先进入自己的后端，再交给部署在 GPU 服务器上的模型。数据不必发送给外部模型公司，模型也能按业务需要微调。",
      "自由的另一面是责任。并发访问、显存不足、服务崩溃、恶意请求和版本升级，都需要团队自己处理。模型越大，硬件与维护成本越高。",
      "为了让模型在普通设备上运行，团队常用量化压缩体积，用推理框架提高速度，并建立监控确保服务稳定。",
      "它适合重视数据隐私、需要长期控制、拥有技术团队或必须在内网与离线环境运行的业务。",
    ],
  },
  {
    id: "hybrid", level: 2, title: "混合架构模式", eyebrow: "类别详解", duration: "约 5 分钟", parent: "overview",
    summary: "先判断任务，再让不同模型各自处理最合适的工作。", children: ["routing", "embedding", "reranker"],
    body: [
      "混合架构不是把两个模型简单接在一起，而是先判断任务，再分配任务。像综合医院先分诊：普通问题去普通门诊，复杂问题再转专家。",
      "日常聊天、标题生成和简单改写可以交给便宜的小模型；长文分析、复杂推理交给强模型；扫描文件先交给 OCR；资料搜索则交给检索系统。",
      "用户只看到一个入口，后台的路由系统负责选择工具。这样既能控制成本，也能在关键任务上保留效果。",
      "它的难点是规则设计与结果统一：什么任务走哪条路线，失败后如何切换，不同模型的输出如何保持一致，都需要持续调试。",
      "当产品功能变多、请求差异变大时，混合架构通常比所有任务都交给一个最强模型更合理。",
    ],
  },
  { id: "api-term", level: 3, title: "API", eyebrow: "术语拆解", duration: "约 3 分钟", parent: "api", summary: "软件之间约定好的服务窗口。", body: ["API 的全称是应用程序编程接口，但不用记这串名字。把它想成餐厅的服务窗口就够了。", "你的软件像顾客，外部模型像后厨。软件按约定格式提交问题，后厨处理完，再按约定格式把答案送回来。", "API 规定请求送到哪里、需要哪些信息、返回什么格式，以及出错时如何说明。它不是模型，也不是聊天机器人，而是一条稳定的沟通通道。", "借助 API，产品不用从头制造大模型，也能直接使用成熟能力。代价是依赖外部服务，并按照调用量付费。" ] },
  { id: "api-key", level: 3, title: "API Key", eyebrow: "术语拆解", duration: "约 3 分钟", parent: "api", summary: "调用外部服务时使用的身份钥匙。", body: ["API Key 就像进入模型服务的一把身份钥匙。服务商用它确认谁在调用、有没有权限，以及费用应该记在哪个账户。", "这把钥匙不能放在网页前端。否则别人打开开发者工具就可能看见它，拿走后产生的调用费用仍会算在你的账户。", "正常做法是把 Key 安全保存在后端。用户先把问题发给自己的服务器，再由服务器带着 Key 调用模型。", "Key 还可以设置权限、额度和有效期。测试与正式环境最好使用不同的 Key，发现泄露时立即撤销并更换。" ] },
  { id: "token", level: 3, title: "Token", eyebrow: "术语拆解", duration: "约 3 分钟", parent: "api", summary: "模型读取与生成文字时使用的计数单位。", body: ["Token 是模型处理文字时的计数单位，可以把它理解成快递的计费重量。它不完全等于汉字，也不完全等于英文单词。", "用户问题、系统规则、聊天记录和从文件中找出的资料，都会成为输入 Token；模型生成的回答属于输出 Token。", "商业模型通常按输入和输出的 Token 数量收费。内容越长，费用通常越高，也更容易碰到模型的上下文上限。", "因此长文档不会每次全部发送。系统会先检索相关片段，只把真正需要的内容交给模型。" ] },
  { id: "deployment", level: 3, title: "部署", eyebrow: "术语拆解", duration: "约 3 分钟", parent: "self-host", summary: "让模型在稳定环境中持续接收请求。", body: ["部署就是把模型放进一个能稳定工作的环境，让它随时接收问题并返回答案。", "这个环境可以是个人电脑、公司服务器或云端 GPU。除了模型本身，还需要运行程序、接口、日志和监控。", "部署完成的标准不是模型能启动一次，而是多人访问时仍然稳定，失败后可以恢复，并且版本能够安全升级。" ] },
  { id: "gpu", level: 3, title: "GPU", eyebrow: "术语拆解", duration: "约 3 分钟", parent: "self-host", summary: "擅长同时完成大量计算的模型发动机。", body: ["GPU 原本擅长处理图形，但它也非常适合同时完成大量相似计算，因此成为运行大模型的重要硬件。", "模型越大，需要的显存通常越多。显存装不下时，速度会下降，甚至无法启动。", "选择 GPU 不是只看型号，还要看显存、功耗、并发人数和任务长度。它决定自部署方案的大部分硬件成本。" ] },
  { id: "quantization", level: 3, title: "量化", eyebrow: "术语拆解", duration: "约 3 分钟", parent: "self-host", summary: "用少量精度换取更小体积与更低硬件需求。", body: ["量化像把高清图片适度压缩：文件会变小，细节可能略有损失，但更容易存储和使用。", "模型量化后会占用更少显存，也能在更普通的设备上运行。", "压缩得越激进，回答质量越可能下降，所以要在效果、速度与硬件成本之间测试平衡。" ] },
  { id: "routing", level: 3, title: "模型路由", eyebrow: "术语拆解", duration: "约 3 分钟", parent: "hybrid", summary: "根据任务自动选择模型或工具。", body: ["模型路由就像分诊台。它先看用户想做什么，再决定交给哪个模型或工具。", "简单问题走便宜快速的小模型，复杂推理走强模型，图片交给视觉模型，扫描文档交给 OCR。", "好的路由还要处理失败：首选模型不可用时自动切换，并记录结果方便持续优化。" ] },
  { id: "embedding", level: 3, title: "Embedding", eyebrow: "术语拆解", duration: "约 3 分钟", parent: "hybrid", summary: "把文字变成能比较含义远近的数字坐标。", body: ["Embedding 可以理解成给每段文字安排一个含义坐标。意思相近的内容，坐标也会更靠近。", "用户提问后，系统把问题也变成坐标，再从资料库中寻找距离最近的片段。", "它让搜索不只依赖相同关键词，即使换一种说法，也有机会找到相关内容。" ] },
  { id: "reranker", level: 3, title: "Reranker", eyebrow: "术语拆解", duration: "约 3 分钟", parent: "hybrid", summary: "对初步搜索结果进行第二次精细排序。", body: ["Reranker 是复排模型。第一次搜索像快速从书架上拿出十本可能相关的书，复排则逐本查看，把最能回答问题的放在前面。", "它通常比初步检索更慢，但判断更细，所以只处理少量候选内容。", "检索负责快，复排负责准，两者配合能减少把无关资料交给大模型的情况。" ] },
];

const byId = Object.fromEntries(nodes.map((node) => [node.id, node]));
const today = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", weekday: "short" }).format(new Date());

export default function Home() {
  const [filter, setFilter] = useState<"all" | Level>("all");
  const [selected, setSelected] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const visible = useMemo(() => nodes.filter((node) => (filter === "all" || node.level === filter) && `${node.title}${node.summary}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);
  const current = selected ? byId[selected] : null;
  const root = current ? (current.level === 1 ? current : byId[current.parent || "overview"]?.level === 1 ? byId[current.parent || "overview"] : byId[byId[current.parent || ""]?.parent || "overview"]) : null;
  const siblingIds = current?.level === 1 ? current.children : current?.level === 2 ? current.children : byId[current?.parent || ""]?.children;
  const siblings = (siblingIds || []).map((id) => byId[id]).filter(Boolean);

  async function copyScript() {
    if (!current) return;
    await navigator.clipboard.writeText(`${current.title}\n\n${current.body.join("\n\n")}`);
    setCopied(true); window.setTimeout(() => setCopied(false), 1400);
  }

  if (current) return (
    <main className="app-shell detail-mode">
      <div className="aurora a1"/><div className="aurora a2"/><div className="noise"/>
      <header className="topbar glass">
        <button className="brand" onClick={() => setSelected(null)}><span className="brand-orb">声</span><strong>口播知识树</strong></button>
        <div className="crumbs"><button onClick={() => setSelected(null)}>任务库</button><span>/</span>{root && <><button onClick={() => setSelected(root.id)}>{root.title}</button><span>/</span></>}<b>{current.title}</b></div>
        <button className="soft-button" onClick={copyScript}>{copied ? "已复制" : "复制全文"}</button>
      </header>
      <section className="reader-layout">
        <article className="script-paper glass">
          <div className={`level-badge level-${current.level}`}>第 {current.level} 层</div>
          <p className="eyebrow">{current.eyebrow} · {current.duration}</p>
          <h1>{current.title}</h1>
          <p className="lead">{current.summary}</p>
          <div className="script-body">{current.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
          {current.children && <div className="next-callout"><span>继续拆解</span><strong>右侧还有 {current.children.length} 个下一层主题</strong></div>}
        </article>
        <aside className="topic-rail glass">
          <div><p>同层目录</p><h2>{current.level === 1 ? "类别" : current.level === 2 ? "专业名词" : "相关名词"}</h2></div>
          {siblings.length ? siblings.map((item, index) => <button key={item.id} className={item.id === current.id ? "active" : ""} onClick={() => setSelected(item.id)}><i>{String(index + 1).padStart(2, "0")}</i><span><strong>{item.title}</strong><small>{item.duration}</small></span><b>→</b></button>) : <p className="rail-empty">这一层已经讲到底了。</p>}
          {current.parent && <button className="rail-back" onClick={() => setSelected(current.parent!)}>← 返回上一层</button>}
        </aside>
      </section>
    </main>
  );

  return (
    <main className="app-shell">
      <div className="aurora a1"/><div className="aurora a2"/><div className="noise"/>
      <header className="topbar glass">
        <div className="brand"><span className="brand-orb">声</span><strong>口播知识树</strong></div>
        <label className="search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索口播稿、类别或专业名词"/></label>
        <button className="create-button">＋ 新建解析任务</button>
      </header>
      <section className="hero">
        <div><p className="eyebrow">SCRIPT WORKSPACE</p><h1>把复杂资料，<br/><em>讲成人人都懂的话。</em></h1><p>上传一次，自动形成总览、类别与术语三层口播知识树。</p></div>
        <div className="hero-sculpture glass"><span>1</span><i/><span>2</span><i/><span>3</span><small>从逻辑到细节</small></div>
      </section>
      <section className="library glass">
        <div className="library-head"><div><p className="eyebrow">今日任务</p><h2>{today}</h2></div><div className="filters">{[["all","全部"],[1,"第一层"],[2,"第二层"],[3,"第三层"]].map(([value,label]) => <button key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value as "all" | Level)}>{label}</button>)}</div></div>
        <div className="task-title"><div className="date-tile"><b>{new Date().getDate()}</b><span>{new Date().toLocaleDateString("zh-CN",{month:"short"})}</span></div><div><span>独立任务 · 4 份对话截图</span><h3>AI 产品的三种模型接入方式</h3><p>已生成 1 篇总览、3 个类别详解与 9 个术语拆解</p></div><button onClick={() => setSelected("overview")}>进入知识树 →</button></div>
        <div className="card-grid">{visible.map((node) => <button className={`topic-card glass level-card-${node.level}`} key={node.id} onClick={() => setSelected(node.id)}><div><span>第 {node.level} 层</span><i>{node.duration}</i></div><h3>{node.title}</h3><p>{node.summary}</p><footer><b>{node.eyebrow}</b><span>打开 →</span></footer></button>)}</div>
        {!visible.length && <div className="empty">没有找到匹配的口播稿。</div>}
      </section>
    </main>
  );
}
