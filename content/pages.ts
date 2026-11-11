import type { JsonLdKind, L } from "./types";

export interface StaticPage {
  id: string;
  path: string;
  title: L;
  description: L;
  jsonLd: JsonLdKind[];
  ogImage: boolean;
  /** Shown in the footer "Product"/"Project" columns and breadcrumbs. */
  label: L;
}

/** Fixed pages of the website (screens §3). Titles ≤ 60, descriptions 70–160 characters (AC-WEB-SEO-01). */
export const STATIC_PAGES: StaticPage[] = [
  {
    id: "home",
    path: "/",
    label: { en: "Home", vi: "Trang chủ", zh: "首页"},
    title: { en: "Muse4AI — Muse for AI Agents on Windows", vi: "Muse4AI — Muse cho AI Agent trên Windows", zh: "Muse4AI — 让 AI Agent 使用 Muse（Windows 版）"},
    description: {
      en: "Free Windows app that lets Claude Code, Codex, Cursor and other AI agents create images, short videos and answers with your own Muse account, over MCP or REST.",
      vi: "Ứng dụng Windows miễn phí giúp Claude Code, Codex, Cursor và AI agent khác tạo ảnh, video ngắn, câu trả lời bằng tài khoản Muse của bạn qua MCP hoặc REST.",
      zh: "免费 Windows 应用，让 Claude Code、Codex、Cursor 等 AI agent 用你的 Muse 账号创作图片、短视频和回答，支持 MCP 或 REST。"},
    jsonLd: ["WebSite", "SoftwareApplication"],
    ogImage: true,
  },
  {
    id: "features",
    path: "/features",
    label: { en: "Features", vi: "Tính năng", zh: "功能"},
    title: { en: "Features — Studio, Queue, Batches and Agents | Muse4AI", vi: "Tính năng — Studio, Hàng chờ, Hàng loạt, Agent | Muse4AI", zh: "功能 — Studio、队列、批量与 Agent | Muse4AI"},
    description: {
      en: "Everything Muse4AI does on your PC: Studio for images and videos, a visual Queue, Batches, a Library, several Muse accounts, and MCP plus REST for agents.",
      vi: "Mọi thứ Muse4AI làm trên máy bạn: Studio tạo ảnh và video, Hàng chờ có hình, Hàng loạt, Thư viện, nhiều tài khoản Muse, cùng MCP và REST cho agent.",
      zh: "Muse4AI 在你电脑上能做的全部功能：Studio 创作图片视频、可视化队列、批量、素材库、多 Muse 账号，以及供 agent 使用的 MCP 与 REST。"},
    jsonLd: ["BreadcrumbList"],
    ogImage: true,
  },
  {
    id: "how-it-works",
    path: "/how-it-works",
    label: { en: "How it works", vi: "Cách hoạt động", zh: "工作原理"},
    title: { en: "How Muse4AI Works — Agent, Your PC, Your Muse", vi: "Muse4AI hoạt động thế nào — Agent, máy bạn, Muse", zh: "Muse4AI 如何工作 — Agent、你的电脑、你的 Muse"},
    description: {
      en: "A plain-language picture of the bridge: your AI agent sends a request, Muse4AI on your Windows PC runs it in your Muse account, and the file comes back to you.",
      vi: "Giải thích dễ hiểu về cầu nối: AI agent gửi yêu cầu, Muse4AI trên máy Windows của bạn chạy bằng tài khoản Muse của bạn, rồi trả tệp kết quả về.",
      zh: "用通俗的语言讲清这座桥：AI agent 发出请求，你 Windows 电脑上的 Muse4AI 用你的 Muse 账号执行，再把文件交还给你。"},
    jsonLd: ["BreadcrumbList"],
    ogImage: true,
  },
  {
    id: "agents",
    path: "/agents",
    label: { en: "AI agents", vi: "AI agent", zh: "AI agent"},
    title: { en: "Connect Your AI Agent to Muse — MCP Guides | Muse4AI", vi: "Kết nối AI agent với Muse — Hướng dẫn MCP | Muse4AI", zh: "把 AI Agent 连接到 Muse — MCP 指南 | Muse4AI"},
    description: {
      en: "Step-by-step MCP setup for Claude Code, Claude, Cursor, Codex, VS Code, Antigravity, Lovable and more, with what was tested and what still needs work.",
      vi: "Hướng dẫn kết nối MCP từng bước cho Claude Code, Claude, Cursor, Codex, VS Code, Antigravity, Lovable và nhiều agent khác, ghi rõ phần đã kiểm.",
      zh: "Claude Code、Claude、Cursor、Codex、VS Code、Antigravity、Lovable 等的 MCP 分步设置指南，并注明哪些已测试、哪些仍待完善。"},
    jsonLd: ["BreadcrumbList"],
    ogImage: true,
  },
  {
    id: "use-cases",
    path: "/use-cases",
    label: { en: "Use cases", vi: "Tình huống", zh: "使用场景"},
    title: { en: "Use Cases — Videos and Images with Muse via AI Agents", vi: "Tình huống — Tạo video, ảnh bằng Muse qua AI agent", zh: "使用场景 — 通过 AI Agent 用 Muse 创作视频和图片"},
    description: {
      en: "Affiliate and sales videos, lesson clips for teachers, short ads, storyboards, Remotion B-roll and data-report videos — workflows with honest limits.",
      vi: "Video affiliate và bán hàng, clip bài giảng cho giáo viên, quảng cáo ngắn, storyboard, B-roll cho Remotion, video báo cáo số liệu — kèm giới hạn rõ ràng.",
      zh: "带货与销售视频、教师讲课片段、短广告、故事板、Remotion 空镜与数据报告视频——附带坦诚说明的工作流程与限制。"},
    jsonLd: ["BreadcrumbList"],
    ogImage: true,
  },
  {
    id: "docs",
    path: "/docs",
    label: { en: "Docs", vi: "Tài liệu", zh: "指南"},
    title: { en: "Muse4AI Guide — From Install to Connecting Agents", vi: "Hướng dẫn Muse4AI — Từ cài đặt tới kết nối agent", zh: "Muse4AI 指南 — 从安装到连接 Agent"},
    description: {
      en: "The complete Muse4AI guide in plain language, with real screenshots: install, add a Muse account, create in Studio, Queue, Batches, Library and AI agents.",
      vi: "Hướng dẫn Muse4AI đầy đủ, dễ hiểu, có ảnh chụp thật: cài đặt, thêm tài khoản Muse, tạo trong Studio, Hàng chờ, Hàng loạt, Thư viện và AI agent.",
      zh: "通俗易懂的完整 Muse4AI 指南，附真实截图：安装、添加 Muse 账号、在 Studio 中创作、队列、批量、素材库与 AI agent。"},
    jsonLd: ["BreadcrumbList"],
    ogImage: true,
  },
  {
    id: "download",
    path: "/download",
    label: { en: "Download", vi: "Tải về", zh: "下载"},
    title: { en: "Download Muse4AI for Windows", vi: "Tải Muse4AI cho Windows", zh: "下载 Windows 版 Muse4AI"},
    description: {
      en: "Current Muse4AI version, Windows requirements, file checksum, and how to install, update and remove the app while keeping your data safe.",
      vi: "Phiên bản Muse4AI hiện tại, yêu cầu Windows, mã kiểm tra tệp, cách cài, cập nhật và gỡ ứng dụng mà vẫn giữ an toàn dữ liệu của bạn.",
      zh: "当前 Muse4AI 版本、Windows 系统要求、文件校验值，以及安装、更新和卸载应用的方法，同时保证数据安全。"},
    jsonLd: ["SoftwareApplication", "BreadcrumbList"],
    ogImage: false,
  },
  {
    id: "open-source",
    path: "/open-source",
    label: { en: "Open source", vi: "Mã mở", zh: "开源"},
    title: { en: "Open Source & Credits — Projects Behind Muse4AI", vi: "Mã mở & ghi nguồn — Các dự án phía sau Muse4AI", zh: "开源与致谢 — Muse4AI 背后的项目"},
    description: {
      en: "Muse4AI's own source code is public on GitHub under MIT, plus the muse2api projects it learned from and every library, font and tool behind it.",
      vi: "Mã nguồn Muse4AI công khai trên GitHub theo giấy phép MIT, cùng các dự án muse2api nó học hỏi và mọi thư viện, font, công cụ phía sau.",
      zh: "Muse4AI 自身源代码已在 GitHub 以 MIT 协议公开，此外还有它借鉴的 muse2api 项目，以及背后所有的库、字体和工具。"},

    jsonLd: ["BreadcrumbList"],
    ogImage: false,
  },
  {
    id: "about",
    path: "/about",
    label: { en: "Andrew Babo", vi: "Andrew Babo", zh: "Andrew Babo"},
    title: { en: "About Andrew Babo — Maker of Muse4AI", vi: "Về Andrew Babo — Người làm Muse4AI", zh: "关于 Andrew Babo — Muse4AI 的作者"},
    description: {
      en: "Muse4AI is a free, non-commercial portfolio project designed and built by Andrew Babo. Why it exists and how it is made.",
      vi: "Muse4AI là dự án portfolio miễn phí, phi thương mại do Andrew Babo thiết kế và xây dựng. Vì sao có dự án này và nó được làm thế nào.",
      zh: "Muse4AI 是 Andrew Babo 设计并开发的免费非商业作品集项目。这里介绍它为什么存在，以及它是如何做出来的。"},
    jsonLd: ["Person", "BreadcrumbList"],
    ogImage: false,
  },
  {
    id: "disclaimer",
    path: "/legal/disclaimer",
    label: { en: "Disclaimer & trademarks", vi: "Miễn trừ & nhãn hiệu", zh: "免责声明与商标"},
    title: { en: "Disclaimer & Trademarks | Muse4AI", vi: "Miễn trừ trách nhiệm & nhãn hiệu | Muse4AI", zh: "免责声明与商标 | Muse4AI"},
    description: {
      en: "Muse4AI is an independent app, not affiliated with or endorsed by Meta or any AI agent maker. What that means for you and your Muse account.",
      vi: "Muse4AI là ứng dụng độc lập, không liên kết và không được Meta hay hãng AI agent nào chứng thực. Điều đó có nghĩa gì với bạn và tài khoản Muse.",
      zh: "Muse4AI 是独立应用，与 Meta 或任何 AI agent 厂商均无关联，也未获其认可。这对你和你的 Muse 账号意味着什么。"},
    jsonLd: ["BreadcrumbList"],
    ogImage: false,
  },
  {
    id: "privacy",
    path: "/legal/privacy",
    label: { en: "Privacy", vi: "Quyền riêng tư", zh: "隐私"},
    title: { en: "Privacy — Your Data Stays on Your PC | Muse4AI", vi: "Quyền riêng tư — Dữ liệu ở trên máy bạn | Muse4AI", zh: "隐私 — 数据留在你的电脑上 | Muse4AI"},
    description: {
      en: "This website sets no cookies and loads no trackers. The Muse4AI app keeps your jobs, files and keys on your own Windows PC.",
      vi: "Website này không đặt cookie, không tải công cụ theo dõi. Ứng dụng Muse4AI giữ việc, tệp và khoá của bạn ngay trên máy Windows của bạn.",
      zh: "本网站不设置 Cookie，也不加载追踪器。Muse4AI 应用把你的任务、文件和密钥保存在你自己的 Windows 电脑上。"},
    jsonLd: ["BreadcrumbList"],
    ogImage: false,
  },
  {
    id: "changelog",
    path: "/changelog",
    label: { en: "What's new", vi: "Có gì mới", zh: "更新动态"},
    title: { en: "What's New in Muse4AI — Release Notes", vi: "Có gì mới trong Muse4AI — Ghi chú phát hành", zh: "Muse4AI 更新动态 — 版本说明"},
    description: {
      en: "Release notes for every Muse4AI version in plain words: new features, fixes and anything you should know before you update.",
      vi: "Ghi chú từng phiên bản Muse4AI bằng lời dễ hiểu: tính năng mới, lỗi đã sửa và những điều nên biết trước khi cập nhật.",
      zh: "每个 Muse4AI 版本的更新说明，用通俗的语言写成：新功能、已修复的问题，以及更新前需要了解的事项。"},
    jsonLd: ["BreadcrumbList"],
    ogImage: false,
  },
];

export function staticPage(id: string): StaticPage {
  const page = STATIC_PAGES.find((p) => p.id === id);
  if (!page) throw new Error(`Unknown static page ${id}`);
  return page;
}
