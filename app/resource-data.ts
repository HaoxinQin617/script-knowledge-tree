export type PageResource = { title: string; caption: string; image: string; url: string };

export const resourcesByNode: Record<string, PageResource[]> = {
  "figma-overview": [
    {title:"Figma Design 官方页",caption:"查看真实界面设计、协作、原型和设计系统案例。",image:"/resource-screenshots/figma-design.png",url:"https://www.figma.com/design/"},
    {title:"Figma 原型代表作",caption:"官方页面展示可点击原型以及知名团队的使用场景。",image:"/resource-screenshots/figma-prototype.png",url:"https://www.figma.com/prototyping/"}
  ],
  "canva-overview": [
    {title:"Canva 创作类型",caption:"查看演示文稿、海报、社交媒体等真实模板入口。",image:"/resource-screenshots/canva-create.png",url:"https://www.canva.com/create/"},
    {title:"Canva 演示模板",caption:"官方代表模板能直观看到“模板驱动、快速成稿”的特点。",image:"/resource-screenshots/canva-presentations.png",url:"https://www.canva.com/create/ai-presentations/"}
  ],
  "figma-canva": [
    {title:"Figma：产品界面",caption:"重点观察协作画布、组件和可交互原型。",image:"/resource-screenshots/figma-design.png",url:"https://www.figma.com/design/"},
    {title:"Canva：视觉内容",caption:"重点观察大量模板与面向发布的内容类型。",image:"/resource-screenshots/canva-create.png",url:"https://www.canva.com/create/"}
  ]
};
