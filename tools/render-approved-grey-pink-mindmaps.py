import html
import json
import math
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "illustrations" / "mindmap-text-only-blueprints.json"
OUTPUT = ROOT / "public" / "illustrations" / "mindmaps-from-text-style2"
OUTPUT_3 = ROOT / "public" / "illustrations" / "mindmaps-from-text-style3"
MANIFEST = ROOT / "public" / "illustrations" / "mindmap-approved-structure.json"
TEXT_MANIFEST = ROOT / "public" / "illustrations" / "mindmap-text-only-structure.json"

SENTENCE = re.compile(r"[。！？；]\s*")
ORDER_PREFIX = re.compile(
    r"^(第一|第二|第三|第四|第五|第六|第七|第八|第九|最后)(步|块积木|条路|种方式|个环节)?[，、：:]?"
)
DISCOURSE = re.compile(
    r"^(首先|其次|然后|接下来|同时|另外|此外|不过|但是|因此|所以|换句话说|简单来说|真正重要的是)[，、：:]?"
)

SEMANTIC_LABELS = [
    (r"第一条路|借用别人|商业模型服务", "借用商业能力"),
    (r"第二条路|自己建厨房|自己部署", "自建本地能力"),
    (r"第三条路|组合起来|混合模式", "组合不同路线"),
    (r"到底哪一条|判断是否需要|适合.*场景|适合.*团队", "按真实约束选择"),
    (r"放回.*故事|再放回|对比.*差异", "对比并记住差异"),
    (r"前端开始|用户.*发送|一次请求", "接收用户请求"),
    (r"后端|整理好请求", "后端整理请求"),
    (r"身份.*钥匙|不能漏讲的钥匙|用来证明是谁", "验证调用身份"),
    (r"Token.*计费|按照 Token|费用", "计算调用成本"),
    (r"优势|好处|价值", "明确核心优势"),
    (r"缺点|代价|风险|不足", "识别代价风险"),
    (r"失败路线|备用路线|超时|重试", "准备失败路线"),
    (r"选模型|选择模型", "选择合适模型"),
    (r"运行环境|显存|硬件", "准备运行环境"),
    (r"推理框架|请求排队", "建立推理服务"),
    (r"量化|压缩", "压缩模型体积"),
    (r"服务启动|稳定接口|自动恢复", "保障稳定运行"),
    (r"数据控制|隐私边界", "掌握数据边界"),
    (r"安全|权限|泄露", "补齐安全保护"),
    (r"分流|路由|判断任务类型", "识别并分流任务"),
    (r"转换成.*数字|建立.*语义.*坐标|向量空间", "按语义建立坐标"),
    (r"初次检索|第一次检索|召回", "快速召回候选"),
    (r"复排模型|重排模型|重排序|候选.*重新排序|候选.*打分", "精排候选证据"),
    (r"Chunk overlap|重叠", "保留片段衔接"),
    (r"切片|切成小段|切出的.*片段", "沿语义边界切片"),
    (r"元数据|文件名.*页码|来源", "保留来源信息"),
    (r"完整链路|完整流程|整个流程", "串起完整链路"),
    (r"一致性|格式|统一规则", "统一输出体验"),
    (r"监控|日志|记录每次", "记录运行过程"),
    (r"误区|不等于|并不等于", "澄清常见误区"),
    (r"真实任务|实际测试|评估", "用真实任务验证"),
    (r"Frame|画框", "建立页面画框"),
    (r"Component|组件", "复用界面组件"),
    (r"Prototype|原型|页面跳转", "连接交互原型"),
    (r"多人协作|协作", "协作与交付"),
    (r"模板", "借助模板出图"),
    (r"最终交付物|怎么选|选择 Canva|选择 Figma", "按交付目标选择"),
    (r"自己规划步骤|推进目标", "让 AI 推进任务"),
    (r"技能说明书|专用技能", "装入专用技能"),
    (r"统一接口|连接外部工具", "连接外部工具"),
    (r"文字.*图片.*音频|多种素材格式", "接收多种素材"),
    (r"先.*检索.*再.*回答|开卷考试", "先检索再回答"),
    (r"文章.*图片.*视频|内容工作室", "生成内容成品"),
    (r"上下文上限|上下文窗口", "管理上下文窗口"),
    (r"完整界面|桌面入口", "使用桌面入口"),
    (r"命令行入口|流程直接", "使用命令行入口"),
    (r"编辑器扩展|VS Code.*Cursor", "使用编辑器扩展"),
    (r"官网下载|官方页面|下载", "进入官方入口"),
    (r"安装", "完成安装配置"),
    (r"登录", "完成账号登录"),
]

CURATED_LABELS = {
    "overview": ["提出厨房选择题", "借用商业能力", "自建本地能力", "组合不同路线", "按真实约束选择", "形成最终判断"],
    "api": ["用户发起请求", "后端整理内容", "API 送往模型", "验证调用身份", "计算 Token 成本", "准备失败路线", "判断适用场景"],
    "self-host": ["选择合适模型", "准备 GPU 环境", "建立推理服务", "压缩模型体积", "保障稳定运行", "掌握数据边界", "核算真实成本", "用真实任务验证"],
    "hybrid": ["识别任务差异", "规则或模型分流", "检索相关证据", "精排候选片段", "统一输出体验", "准备备用路线", "判断是否值得"],
    "api-term": ["软件提出请求", "API 规定窗口", "外部服务处理", "结果原路返回", "明确价值边界", "澄清常见误解"],
    "api-key": ["证明调用身份", "后端安全保存", "服务验证权限", "记录额度费用", "阻止密钥泄露", "区分不同环境"],
    "token": ["把文字切成单位", "区分输入与输出", "共同计算费用", "限制上下文长度", "长文先筛再送", "监控真实用量"],
    "deployment": ["准备运行环境", "接收用户请求", "安排并发排队", "监控服务状态", "自动恢复版本", "补齐安全保护"],
    "gpu": ["理解并行计算", "确认显存容量", "装入模型请求", "处理多人并发", "避免盲目多卡", "核算功耗成本", "完成压力测试"],
    "quantization": ["模型体积过大", "降低数字精度", "减少显存占用", "换取运行速度", "检查能力损失", "用真实任务对比"],
    "routing": ["识别请求类型", "规则快速分流", "模型判断复杂任务", "选择合适模型", "准备失败路线", "记录选择原因", "持续复查规则"],
    "embedding": ["文字转换坐标", "相近含义靠近", "问题同样向量化", "召回附近片段", "保留原文来源", "验证检索效果"],
    "reranker": ["初检召回候选", "逐一比较问题", "重新计算相关度", "把证据排在前面", "只保留少量片段", "记录排名变化"],
    "blackwords-overview": ["AI 术语并非黑话", "行动类能力", "连接类能力", "内容类能力", "记忆与计费", "看清完整工作流"],
    "bw-action": ["模型负责回答", "Agent 推进目标", "Skill 规定做法", "MCP 连接工具", "权限限制动作", "人工确认结果"],
    "bw-model": ["模型学习规律", "输入决定任务", "上下文提供资料", "生成存在波动", "固定评测样本", "按任务选择模型"],
    "bw-content": ["识别素材类型", "多模态读取内容", "AIGC 生成成品", "Token 计算消耗", "保留来源版本", "人工审核发布"],
    "bw-agent": ["接收明确目标", "自行规划步骤", "调用工具执行", "检查中间结果", "遇险暂停确认", "交付最终成果"],
    "bw-openclaw": ["运行在本机环境", "获得有限权限", "记住使用习惯", "调用工具完成任务", "防止误操作", "管理长期记忆"],
    "bw-skills": ["定义适用任务", "写明执行步骤", "连接所需工具", "规定输入输出", "加入检查规则", "按需组合技能"],
    "bw-mcp": ["AI 提出工具请求", "MCP 统一描述", "服务端执行动作", "返回结构结果", "限制权限范围", "记录调用过程"],
    "bw-gacha": ["同一提示多次生成", "结果带有随机性", "优质结果不稳定", "增加约束与示例", "保存种子版本", "人工筛选成品"],
    "bw-context": ["上下文容量有限", "问题与资料占空间", "历史对话持续累积", "超限内容会丢失", "摘要与检索减负", "区别长期记忆"],
    "bw-api": ["软件提出请求", "API 规定格式", "外部服务处理", "结果返回软件", "API Key 验身份", "Token 记录消耗"],
    "bw-generalization": ["从样本学习规律", "面对相似新问题", "避免只背答案", "改变表达做测试", "覆盖边界情况", "用新样本验证"],
    "bw-multimodal": ["接收文字图片音频", "分别提取不同信息", "统一到一个任务", "跨素材互相验证", "识别质量限制", "核算处理成本"],
    "bw-rag": ["资料持续更新", "文档切成片段", "建立语义索引", "先找相关证据", "模型依据证据回答", "更新并重新测试"],
    "bw-aigc": ["输入主题与素材", "模型生成内容", "跨模态组合成品", "核查事实版权", "保留来源版本", "人工审核发布"],
    "bw-token": ["文字切成 Token", "输入输出都计数", "决定调用费用", "限制上下文容量", "精简无关内容", "监控异常消耗"],
    "codex-china-overview": ["选择使用入口", "桌面应用路线", "命令行路线", "编辑器扩展路线", "完成账号登录", "打开项目试用", "对照操作文档"],
    "codex-desktop": ["进入官方页面", "下载桌面应用", "完成账号登录", "选择项目文件夹", "先做只读检查", "确认后再修改"],
    "codex-cli-guide": ["安装 Node.js", "安装 Codex CLI", "检查安装版本", "使用账号登录", "进入项目目录", "运行首个任务", "排查网络问题"],
    "codex-ide-guide": ["进入官方扩展页", "安装 Codex 扩展", "完成账号登录", "打开项目文件夹", "描述修改目标", "检查差异结果", "建立版本检查点"],
    "figma-overview": ["建立页面画框", "复用界面组件", "连接交互原型", "多人同步协作", "交付开发实现", "适合产品界面"],
    "canva-overview": ["选择成品模板", "替换文字素材", "调整品牌样式", "协作评论修改", "适配不同尺寸", "快速导出发布"],
    "figma-canva": ["先看最终交付物", "产品界面选 Figma", "传播内容选 Canva", "比较协作方式", "两种工具配合", "按真实目标选择"],
    "rag-building-blocks": ["长文沿语义切片", "片段进入向量库", "问题触发初检", "Rerank 精排证据", "模型依据证据回答", "保留来源供核查"],
    "chunk-explained": ["长文切成片段", "沿语义边界下刀", "控制片段长度", "保留少量重叠", "保存页码来源", "用真实问题评估"],
    "rerank-explained": ["初检快速召回", "问题配对候选", "计算精细分数", "重新排列证据", "保留最相关片段", "检查排名变化"],
    "vector-db-explained": ["文字转换向量", "相近含义靠近", "问题寻找邻居", "返回原文片段", "附带权限来源", "交给模型回答"],
}


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def clean(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip(" ，。；：:、“”‘’")


def short_clause(value: str, limit: int) -> str:
    value = clean(value)
    for mark in ("，", "：", ":", "；", "。"):
        if mark in value:
            head = clean(value.split(mark, 1)[0])
            if 2 <= len(head) <= limit:
                return head
    return value[:limit].rstrip("的与和并而把让将")


def label_for(paragraph: str, is_last: bool) -> str:
    first = clean(SENTENCE.split(paragraph, 1)[0])
    if is_last and first.startswith(("一句话总结", "所以", "因此", "最后")):
        return "形成最终结论"
    if first.startswith("完整链路"):
        return "串起完整链路"
    if first.startswith(("评估", "判断是否", "开始之前")):
        return "用真实任务验证"
    if "不要只看" in first or "不能只看" in first:
        return "建立判断标准"

    for pattern, label in SEMANTIC_LABELS:
        if re.search(pattern, paragraph, re.I):
            return label

    ordered = ORDER_PREFIX.sub("", first)
    ordered = DISCOURSE.sub("", ordered)
    ordered = ordered.lstrip("是，：: ")
    match = re.match(r"(.{2,18}?)(?:就是|也就是|是|叫做|叫|负责|意味着|可以理解成)", ordered)
    if match:
        candidate = clean(match.group(1))
    else:
        candidate = short_clause(ordered, 14)

    candidate = re.sub(r"^(一个|一种|这条方案|这一步|这里)", "", candidate)
    candidate = clean(candidate)
    if len(candidate) < 2:
        candidate = short_clause(first, 14)
    return candidate[:14].rstrip("的与和并而把让将") or "关键环节"


def detail_for(paragraph: str, label: str) -> str:
    sentences = [clean(item) for item in SENTENCE.split(paragraph) if clean(item)]
    source = sentences[1] if len(sentences) > 1 else sentences[0]
    if source.startswith(label):
        source = source[len(label):].lstrip("，：:是")
    source = short_clause(source, 25)
    if len(source) < 6 or source in {"所以", "因此", "但是", "不过"}:
        source = "说明这一环节如何影响最终结果"
    return source or "说明这一环节的作用与边界"


def choose_paragraphs(script: str) -> list[str]:
    paragraphs = [clean(item) for item in script.splitlines() if clean(item)]
    if len(paragraphs) <= 8:
        return paragraphs
    indexes = sorted(set(round(i * (len(paragraphs) - 1) / 7) for i in range(8)))
    return [paragraphs[i] for i in indexes]


def structure_for(record: dict) -> dict:
    curated = CURATED_LABELS.get(record["id"])
    all_paragraphs = [clean(item) for item in record["script"].splitlines() if clean(item)]
    if curated:
        indexes = sorted(set(round(i * (len(all_paragraphs) - 1) / (len(curated) - 1)) for i in range(len(curated))))
        selected = [all_paragraphs[i] for i in indexes]
    else:
        selected = choose_paragraphs(record["script"])
    nodes = []
    for index, paragraph in enumerate(selected):
        label = curated[index] if curated else label_for(paragraph, index == len(selected) - 1)
        nodes.append({"label": label, "detail": detail_for(paragraph, label)})

    while len(nodes) < 3:
        nodes.append({"label": "形成最终结论", "detail": short_clause(record["summary"], 25)})

    group_count = math.ceil(len(nodes) / 2)
    phase_names = {
        2: ["建立基础", "形成结论"],
        3: ["理解起点", "核心过程", "判断结论"],
        4: ["理解起点", "建立方法", "运行与控制", "判断结论"],
    }[group_count]
    groups = []
    for group_index in range(group_count):
        start = group_index * 2
        end = min(start + 2, len(nodes))
        groups.append({"name": phase_names[group_index], "start": start, "end": end})
    return {"nodes": nodes, "groups": groups}


def icon_kind(label: str) -> str:
    lower = label.lower()
    if any(word in lower for word in ("切", "拆", "分段", "chunk")):
        return "cut"
    if any(word in lower for word in ("库", "保存", "数据", "资料")):
        return "db"
    if any(word in lower for word in ("检索", "查找", "寻找", "比较", "排序", "验证", "判断")):
        return "search"
    if any(word in lower for word in ("重叠", "组合", "协作", "连接")):
        return "overlap"
    if any(word in lower for word in ("回答", "输出", "结论", "生成")):
        return "answer"
    return "doc"


def icon(kind: str, x: float, y: float) -> str:
    common = 'fill="none" stroke="#513b72" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"'
    if kind == "doc":
        return f'<path d="M{x-22},{y-27}h30l14,14v40h-44z M{x+8},{y-27}v14h14 M{x-12},{y}h24 M{x-12},{y+12}h20" {common}/>'
    if kind == "cut":
        return f'<circle cx="{x-13}" cy="{y+17}" r="10" {common}/><circle cx="{x+13}" cy="{y+17}" r="10" {common}/><path d="M{x-6},{y+9}L{x+24},{y-23} M{x+6},{y+9}L{x-24},{y-23}" {common}/>'
    if kind == "overlap":
        return f'<rect x="{x-25}" y="{y-22}" width="38" height="44" rx="7" {common}/><rect x="{x-8}" y="{y-10}" width="38" height="44" rx="7" {common}/>'
    if kind == "db":
        return f'<ellipse cx="{x}" cy="{y-20}" rx="27" ry="10" {common}/><path d="M{x-27},{y-20}v38c0,6 12,10 27,10s27-4 27-10v-38 M{x-27},{y-2}c0,6 12,10 27,10s27-4 27-10" {common}/>'
    if kind == "search":
        return f'<circle cx="{x-5}" cy="{y-5}" r="23" {common}/><path d="M{x+12},{y+12}l20,20 M{x-17},{y-5}h24 M{x-10},{y+5}h15" {common}/>'
    return f'<path d="M{x-29},{y-20}h58v39h-31l-16,13v-13h-11z M{x-14},{y-1}h28" {common}/>'


def text(x, y, value, size, weight, fill, anchor="start") -> str:
    return (
        f'<text x="{x}" y="{y}" text-anchor="{anchor}" '
        f'font-family="Noto Sans SC, Microsoft YaHei, sans-serif" '
        f'font-size="{size}" font-weight="{weight}" fill="{fill}">{esc(value)}</text>'
    )


def horizontal_arrow(x1: float, y: float, x2: float) -> str:
    shaft_end = x2 - 25
    return f'''<g>
      <path d="M{x1} {y-9} H{shaft_end} V{y-20} L{x2} {y} L{shaft_end} {y+20} V{y+9} H{x1}
        Q{x1-9} {y+9} {x1-9} {y} Q{x1-9} {y-9} {x1} {y-9} Z"
        fill="url(#arrowGrad)" stroke="#fff" stroke-width="3"/>
      <path d="M{x1+2} {y-4} H{shaft_end-5} L{x2-11} {y} L{shaft_end-5} {y+4} H{x1+2}"
        fill="none" stroke="#f5e8ef" stroke-opacity=".82" stroke-width="2.5" stroke-linecap="round"/>
    </g>'''


def turn_arrow(x: float, y1: float, y2: float) -> str:
    route = f"M{x} {y1} H{x+52} Q{x+68} {y1} {x+68} {y1+16} V{y2-15}"
    return f'''<g>
      <path d="{route}" fill="none" stroke="#fff" stroke-opacity=".92" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="{route}" fill="none" stroke="url(#arrowGrad)" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)"/>
      <path d="{route}" fill="none" stroke="#f5e8ef" stroke-opacity=".64" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </g>'''


def render(record: dict, structure: dict) -> str:
    nodes, groups = structure["nodes"], structure["groups"]
    group_count = len(groups)
    canvas_top, canvas_bottom = 28, 890
    group_h = (canvas_bottom - canvas_top) / group_count
    left_steps = [92, 170, 250, 320]
    widths = [1060, 1120, 1160, 1120]
    stage_fills = ["stageWarm", "stageCool", "stageViolet", "stageWarm"]
    card_fills = ["cardWarm", "cardMint", "cardViolet", "cardWarm"]

    parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f9f8fb"/><stop offset=".48" stop-color="#f4f1f7"/><stop offset="1" stop-color="#edf4f8"/></linearGradient>
      <linearGradient id="stageWarm" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff" stop-opacity=".76"/><stop offset=".55" stop-color="#f0d9d6" stop-opacity=".48"/><stop offset="1" stop-color="#eee7f3" stop-opacity=".66"/></linearGradient>
      <linearGradient id="stageCool" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff" stop-opacity=".77"/><stop offset=".55" stop-color="#d8e9e8" stop-opacity=".54"/><stop offset="1" stop-color="#e0e6f2" stop-opacity=".65"/></linearGradient>
      <linearGradient id="stageViolet" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff" stop-opacity=".78"/><stop offset=".55" stop-color="#e5ddf1" stop-opacity=".58"/><stop offset="1" stop-color="#ece5f5" stop-opacity=".68"/></linearGradient>
      <linearGradient id="cardWarm" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff" stop-opacity=".91"/><stop offset=".5" stop-color="#f6e1dd" stop-opacity=".75"/><stop offset="1" stop-color="#e9d8ee" stop-opacity=".78"/></linearGradient>
      <linearGradient id="cardMint" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff" stop-opacity=".92"/><stop offset=".5" stop-color="#d9eeee" stop-opacity=".77"/><stop offset="1" stop-color="#d8e8f1" stop-opacity=".78"/></linearGradient>
      <linearGradient id="cardViolet" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff" stop-opacity=".92"/><stop offset=".5" stop-color="#e8daf0" stop-opacity=".78"/><stop offset="1" stop-color="#d9e2f3" stop-opacity=".8"/></linearGradient>
      <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#a79ba5"/><stop offset=".48" stop-color="#c792ad"/><stop offset="1" stop-color="#d9a6c2"/></linearGradient>
      <linearGradient id="numberGrad" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#978d98"/><stop offset=".5" stop-color="#bd8fa9"/><stop offset="1" stop-color="#d7a5bf"/></linearGradient>
      <filter id="stageShadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="10" stdDeviation="9" flood-color="#5f5674" flood-opacity=".16"/></filter>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="7" stdDeviation="6" flood-color="#665875" flood-opacity=".16"/></filter>
      <marker id="arrow" markerUnits="userSpaceOnUse" markerWidth="44" markerHeight="44" refX="34" refY="22" orient="auto"><path d="M0 0L44 22L0 44Z" fill="#bd91aa" stroke="#fff" stroke-width="2.5"/></marker>
    </defs>
    <rect width="1600" height="1000" fill="url(#bg)"/>
    <ellipse cx="170" cy="160" rx="270" ry="200" fill="#eeb9d0" opacity=".14"/>
    <ellipse cx="1390" cy="770" rx="290" ry="220" fill="#9acfe4" opacity=".14"/>''']

    for gi, group in enumerate(groups):
        x = left_steps[gi]
        y = canvas_top + gi * group_h
        width = widths[gi]
        height = group_h + (25 if gi < group_count - 1 else -5)
        parts.append(f'<g filter="url(#stageShadow)"><rect x="{x}" y="{y}" width="{width}" height="{height}" rx="34" fill="url(#{stage_fills[gi]})" stroke="#fff" stroke-width="4"/><rect x="{x+7}" y="{y+7}" width="{width-14}" height="{height-14}" rx="28" fill="none" stroke="#fff" stroke-opacity=".66" stroke-width="2"/></g>')
        parts.append(text(x + 38, y + 55, "阶段", 30, 850, "#172653"))
        parts.append(f'<text x="{x+128}" y="{y+62}" font-family="Noto Sans SC, Microsoft YaHei, sans-serif" font-size="55" font-weight="950" fill="url(#numberGrad)" stroke="#fff" stroke-width="1">{gi+1}</text>')
        parts.append(text(x + 198, y + 55, group["name"], 33, 900, "#172653"))

        indices = list(range(group["start"], group["end"]))
        card_y = y + 78
        card_h = height - 102
        card_w = 380 if len(indices) > 1 else 520
        first_x = x + 82 if len(indices) > 1 else x + (width - card_w) / 2
        second_x = x + width - card_w - 82
        positions = [first_x, second_x]
        for local, node_index in enumerate(indices):
            node = nodes[node_index]
            card_x = positions[local]
            center_x = card_x + card_w / 2
            compact_card = card_h < 140
            icon_y = card_y + (80 if compact_card else max(86, card_h * .57))
            radius = 27 if compact_card else min(39, max(31, card_h * .22))
            parts.append(f'<g filter="url(#shadow)"><rect x="{card_x}" y="{card_y}" width="{card_w}" height="{card_h}" rx="23" fill="url(#{card_fills[gi]})" stroke="#fff" stroke-width="4"/><rect x="{card_x+5}" y="{card_y+5}" width="{card_w-10}" height="{card_h-10}" rx="19" fill="none" stroke="#fff" stroke-opacity=".72" stroke-width="2"/></g>')
            parts.append(text(card_x + 30, card_y + 46, f"{node_index+1:02d}", 34, 900, "#142552"))
            parts.append(text(card_x + 104, card_y + 44, node["label"], 27, 850, "#172653"))
            parts.append(f'<circle cx="{center_x}" cy="{icon_y}" r="{radius}" fill="#fff" fill-opacity=".54" stroke="#fff" stroke-width="2"/>')
            icon_markup = icon(icon_kind(node["label"]), center_x, icon_y)
            if compact_card:
                icon_markup = f'<g transform="translate({center_x} {icon_y}) scale(.66) translate({-center_x} {-icon_y})">{icon_markup}</g>'
            parts.append(icon_markup)
            # The diagram is a speaking cue, not a transcript. Keep only reviewed,
            # complete node labels here; auto-selected source sentences can attach
            # to the wrong node and visually compete with the relationship flow.

        if len(indices) == 2:
            parts.append(horizontal_arrow(first_x + card_w + 16, card_y + card_h / 2, second_x - 18))
        if gi < group_count - 1:
            next_y = canvas_top + (gi + 1) * group_h
            arrow_x = x + width - 72
            parts.append(turn_arrow(arrow_x, card_y + card_h * .56, next_y + 62))

    summary = "  →  ".join(node["label"] for node in nodes)
    if len(summary) > 58:
        summary = "  →  ".join(node["label"] for node in nodes[::2]) + "  →  最终结论"
    parts.append('<rect x="250" y="914" width="1100" height="62" rx="31" fill="#fff" fill-opacity=".72" stroke="#e2c9db" stroke-width="2"/>')
    parts.append(text(800, 954, summary, 24, 850, "#172653", "middle"))
    parts.append('</svg>')
    return "".join(parts)


def render_style3(record: dict, structure: dict) -> str:
    nodes, groups = structure["nodes"], structure["groups"]
    top, bottom = 188, 838
    step = (bottom - top) / max(1, len(nodes) - 1)
    parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
    <defs>
      <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fbfafc"/><stop offset=".52" stop-color="#f6f2f6"/><stop offset="1" stop-color="#eef4f8"/></linearGradient>
      <linearGradient id="glass3" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffffff" stop-opacity=".94"/><stop offset=".52" stop-color="#f3e8ee" stop-opacity=".76"/><stop offset="1" stop-color="#e5edf4" stop-opacity=".78"/></linearGradient>
      <linearGradient id="accent3" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#9a919a"/><stop offset=".5" stop-color="#bd91aa"/><stop offset="1" stop-color="#d3a2bc"/></linearGradient>
      <filter id="shadow3" x="-20%" y="-30%" width="140%" height="170%"><feDropShadow dx="0" dy="8" stdDeviation="9" flood-color="#62586d" flood-opacity=".14"/></filter>
      <marker id="down3" markerUnits="userSpaceOnUse" markerWidth="22" markerHeight="18" refX="16" refY="9" orient="auto"><path d="M0 0L18 9L0 18Z" fill="#bd91aa"/></marker>
    </defs>
    <rect width="1600" height="1000" fill="url(#bg3)"/>
    <ellipse cx="180" cy="120" rx="280" ry="180" fill="#eab7cc" opacity=".10"/>
    <ellipse cx="1430" cy="820" rx="310" ry="220" fill="#a9cfe2" opacity=".11"/>
    <text x="90" y="88" font-family="Noto Sans SC, Microsoft YaHei, sans-serif" font-size="50" font-weight="900" fill="#172653">{esc(record['title'])}</text>
    <text x="92" y="132" font-family="Noto Sans SC, Microsoft YaHei, sans-serif" font-size="21" font-weight="560" fill="#625e70">{esc(record['summary'])}</text>
    <path d="M800 184 V892" stroke="#d7c8d3" stroke-width="5" stroke-linecap="round"/>''']

    phase_for_node = {}
    for phase_index, group in enumerate(groups):
        for node_index in range(group["start"], group["end"]):
            phase_for_node[node_index] = (phase_index, group["name"])

    last_phase = None
    for index, node in enumerate(nodes):
        y = top + index * step
        phase_index, phase_name = phase_for_node[index]
        if phase_index != last_phase:
            parts.append(f'<rect x="70" y="{y-43}" width="210" height="54" rx="27" fill="#fff" fill-opacity=".7" stroke="#dbcbd7" stroke-width="2"/>')
            parts.append(f'<text x="96" y="{y-9}" font-family="Noto Sans SC, Microsoft YaHei, sans-serif" font-size="18" font-weight="850" fill="#69566a">阶段 {phase_index+1} · {esc(phase_name)}</text>')
            last_phase = phase_index
        card_x = 865 if index % 2 == 0 else 335
        line_x1 = 817 if index % 2 == 0 else 783
        line_x2 = card_x if index % 2 == 0 else card_x + 400
        parts.append(f'<path d="M{line_x1} {y} H{line_x2}" stroke="#bd91aa" stroke-width="5" stroke-linecap="round"/>')
        parts.append(f'<circle cx="800" cy="{y}" r="18" fill="url(#accent3)" stroke="#fff" stroke-width="4"/>')
        parts.append(f'<g filter="url(#shadow3)"><rect x="{card_x}" y="{y-48}" width="400" height="96" rx="24" fill="url(#glass3)" stroke="#fff" stroke-width="4"/><rect x="{card_x+6}" y="{y-42}" width="388" height="84" rx="19" fill="none" stroke="#fff" stroke-opacity=".72" stroke-width="2"/></g>')
        parts.append(f'<text x="{card_x+25}" y="{y+10}" font-family="Noto Sans SC, Microsoft YaHei, sans-serif" font-size="29" font-weight="900" fill="url(#accent3)">{index+1:02d}</text>')
        parts.append(f'<text x="{card_x+96}" y="{y+9}" font-family="Noto Sans SC, Microsoft YaHei, sans-serif" font-size="25" font-weight="850" fill="#172653">{esc(node["label"])}</text>')
        if index < len(nodes) - 1:
            next_y = top + (index + 1) * step
            parts.append(f'<path d="M800 {y+22} V{next_y-24}" stroke="url(#accent3)" stroke-width="7" stroke-linecap="round" marker-end="url(#down3)"/>')

    parts.append(f'<rect x="330" y="910" width="940" height="54" rx="27" fill="#fff" fill-opacity=".76" stroke="#ddc8d7" stroke-width="2"/>')
    parts.append(f'<text x="800" y="944" text-anchor="middle" font-family="Noto Sans SC, Microsoft YaHei, sans-serif" font-size="22" font-weight="820" fill="#172653">{esc(nodes[0]["label"])}  →  {esc(nodes[-1]["label"])}</text>')
    parts.append('</svg>')
    return "".join(parts)


def main() -> None:
    records = json.loads(SOURCE.read_text(encoding="utf-8"))
    OUTPUT.mkdir(parents=True, exist_ok=True)
    OUTPUT_3.mkdir(parents=True, exist_ok=True)
    manifest = []
    for record in records:
        structure = structure_for(record)
        (OUTPUT / f'{record["id"]}.svg').write_text(render(record, structure), encoding="utf-8")
        (OUTPUT_3 / f'{record["id"]}.svg').write_text(render_style3(record, structure), encoding="utf-8")
        manifest.append({"id": record["id"], "title": record["title"], **structure})
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    TEXT_MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Rendered {len(records)} approved grey-pink and white-frosted diagrams")


if __name__ == "__main__":
    main()
