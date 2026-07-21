export type GuideStep = {
  number: string;
  title: string;
  detail: string;
  screenshot?: string;
  screenshotAlt?: string;
  officialUrl?: string;
  commands?: { label: string; code: string }[];
  checks?: string[];
  note?: string;
};

export type PracticalGuide = {
  title: string;
  updatedAt: string;
  intro: string;
  quickChoice: { title: string; text: string }[];
  steps: GuideStep[];
  sources: { label: string; url: string }[];
};

export const guideByNode: Record<string, PracticalGuide> = {
  "codex-china-overview": {
    title: "国内安装与使用 Codex：逐步操作文档",
    updatedAt: "2026-07-21",
    intro: "这份文档优先讲最容易成功的桌面应用路线，再补充命令行和 IDE 扩展。页面截图来自 OpenAI 当前官方文档；界面更新后，按钮文字可能略有变化，但入口逻辑一致。",
    quickChoice: [
      { title: "第一次使用", text: "优先安装 ChatGPT 桌面应用，登录后在左上角选择 Codex。" },
      { title: "习惯终端", text: "使用 Codex CLI，在项目目录中直接运行 codex。" },
      { title: "主要在编辑器写代码", text: "给 VS Code、Cursor 或 Windsurf 安装 Codex 扩展。" },
    ],
    steps: [
      {
        number: "01",
        title: "先打开官方 Codex 文档，确认入口",
        detail: "在浏览器地址栏输入下方网址。页面左侧会列出 ChatGPT desktop app、Codex CLI 和 Codex IDE extension。先根据自己的使用习惯选一种，不需要三种全部安装。",
        screenshot: "/guide-screenshots/codex-overview.png",
        screenshotAlt: "OpenAI 官方 Codex 文档总览页面",
        officialUrl: "https://learn.chatgpt.com/docs",
        checks: ["网址域名是 learn.chatgpt.com", "左侧可以看到多个 Codex 使用入口"],
      },
      {
        number: "02",
        title: "路线 A：下载 ChatGPT 桌面应用（推荐）",
        detail: "进入桌面应用页面后，点击页面中部的 Download for Windows。下载完成后打开安装包，按系统提示完成安装。这个方式不需要先安装 Node.js，也不需要先输入命令。",
        screenshot: "/guide-screenshots/codex-app.png",
        screenshotAlt: "ChatGPT 桌面应用官方页面，显示 Download for Windows 按钮",
        officialUrl: "https://learn.chatgpt.com/docs/app",
        checks: ["页面标题是 ChatGPT desktop app", "能看到 Download for Windows 按钮", "安装后桌面或开始菜单中出现 ChatGPT"],
        note: "如果下载按钮打不开，先确认浏览器能正常访问 OpenAI 官方页面。不要从陌生网盘或非官方安装站下载。",
      },
      {
        number: "03",
        title: "登录账号并进入 Codex",
        detail: "打开 ChatGPT 桌面应用，使用自己的 ChatGPT 账号登录。登录后点击左上角的产品切换位置，选择 Codex；再选择一个本地项目文件夹。第一次授权文件夹时，只开放本次任务真正需要的目录。",
        checks: ["左上角显示 Codex", "页面能看到新建任务或选择项目入口", "已选择正确的本地文件夹"],
        note: "Codex 已包含在当前支持的 ChatGPT 方案中，具体用量随账号方案变化。不要把账号密码、API Key 或验证码发到聊天内容里。",
      },
      {
        number: "04",
        title: "路线 B：安装 Codex CLI",
        detail: "如果你习惯在终端工作，可以安装命令行版本。Windows 用户打开 PowerShell；安装 Node.js LTS 后，依次输入下面的检查和安装命令。每输入一行按一次 Enter。",
        screenshot: "/guide-screenshots/codex-cli.png",
        screenshotAlt: "OpenAI 官方 Codex CLI 页面",
        officialUrl: "https://learn.chatgpt.com/docs/codex/cli",
        commands: [
          { label: "检查 Node.js 和 npm", code: "node -v\nnpm -v" },
          { label: "安装 Codex CLI", code: "npm install -g @openai/codex" },
          { label: "检查安装结果", code: "codex --version" },
          { label: "进入项目并启动", code: "cd \"你的项目文件夹路径\"\ncodex" },
        ],
        checks: ["node -v 和 npm -v 都显示版本号", "codex --version 显示版本号", "运行 codex 后出现登录选择"],
        note: "当前官方文档也提供其他安装方式。本文保留 npm 路线，是因为命令清晰、便于检查。网络失败时先排查网络环境，不建议把来源不明的镜像或代理命令当成固定步骤。",
      },
      {
        number: "05",
        title: "首次启动 CLI 并登录 ChatGPT",
        detail: "在项目目录运行 codex。首次启动时选择 Sign in with ChatGPT，浏览器会打开授权页面。确认页面属于 OpenAI 或 ChatGPT 官方域名，再完成登录并回到终端。通常不需要手动复制 API Key。",
        commands: [{ label: "启动 Codex", code: "codex" }],
        checks: ["终端显示当前项目目录", "登录完成后出现 Codex 输入界面", "输入 /status 可以查看当前会话状态"],
      },
      {
        number: "06",
        title: "路线 C：在 VS Code 或 Cursor 中安装扩展",
        detail: "进入官方 IDE 页面，点击 Install the extension。也可以在编辑器扩展商店中搜索 Codex，并核对发布者为 OpenAI。安装完成后点击左侧 Codex 图标；如果图标未显示，打开命令面板并运行 Codex: Open Codex Sidebar。",
        screenshot: "/guide-screenshots/codex-ide.png",
        screenshotAlt: "OpenAI 官方 Codex IDE extension 页面",
        officialUrl: "https://learn.chatgpt.com/docs/codex/ide",
        checks: ["扩展发布者是 OpenAI", "编辑器左侧出现 Codex 图标", "侧边栏可以登录并开始新对话"],
      },
      {
        number: "07",
        title: "打开项目并发送第一条有效指令",
        detail: "无论使用桌面应用、CLI 还是 IDE，都先打开一个明确的项目文件夹，再描述目标、范围和验收标准。第一次建议从只读任务开始，确认 Codex 选择的项目和文件正确。",
        commands: [{ label: "可直接使用的第一条指令", code: "请先只读检查这个项目，告诉我它的用途、主要目录和启动方法，不要修改任何文件。" }],
        checks: ["回答提到了当前项目中的真实文件", "没有访问无关文件夹", "后续修改前能够看到计划或变更内容"],
      },
      {
        number: "08",
        title: "遇到问题时按层排查",
        detail: "页面打不开先检查网络和官方域名；命令找不到先重新打开终端，再检查安装版本；登录失败先退出并重新启动登录流程；IDE 中没有图标则用命令面板打开侧边栏。不要一开始就同时修改代理、npm 源、环境变量和账号设置，否则很难判断是哪一步生效。",
        commands: [
          { label: "重新检查 CLI", code: "node -v\nnpm -v\ncodex --version" },
          { label: "查看 Codex 会话状态", code: "/status" },
        ],
        checks: ["每次只改变一个设置", "记录实际错误提示", "确认使用的是官方安装包或官方扩展"],
      },
    ],
    sources: [
      { label: "ChatGPT 桌面应用官方文档", url: "https://learn.chatgpt.com/docs/app" },
      { label: "Codex CLI 官方文档", url: "https://learn.chatgpt.com/docs/codex/cli" },
      { label: "Codex IDE 扩展官方文档", url: "https://learn.chatgpt.com/docs/codex/ide" },
      { label: "使用 ChatGPT 方案登录 Codex", url: "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan" },
    ],
  },
};
