import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "口播知识树｜把复杂资料讲明白",
  description: "将上传内容自动整理为总览、类别和专业名词三层口播稿。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
