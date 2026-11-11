import type { Credit } from "./types";

/**
 * Open-source credits shown on the website (/open-source) and in the app
 * (Guide › Open source, Settings › About). R3-OSS.
 */
export const CREDITS: Credit[] = [
  // Referenced directly — first on every credits page (R3-OSS.1).
  {
    id: "muse2api-czg86389",
    name: "muse2api (czg86389-hub)",
    url: "https://github.com/czg86389-hub/muse2api",
    license: "MIT",
    group: "referenced",
    note: {
      en: "How Muse4AI works with the Muse web page (finding buttons, sending prompts, attaching images, reading results and usage) is adapted from this project.",
      vi: "Cách Muse4AI làm việc với trang web Muse (tìm nút, gửi prompt, đính kèm ảnh, nhận kết quả và đọc hạn mức) được chuyển thể từ dự án này.",
      zh: "Muse4AI 与 Muse 网页协作的方式（查找按钮、发送提示词、附加图片、读取结果与额度）改编自该项目。"},
    noticeFile: "LICENSES/muse2api.txt",
    usedIn: ["app", "installer", "web"],
  },
  {
    id: "muse2api-www222fff",
    name: "muse2api (www222fff)",
    url: "https://github.com/www222fff/muse2api",
    license: "MIT",
    group: "referenced",
    note: {
      en: "A second muse2api fork the same adapter code learned from.",
      vi: "Bản muse2api thứ hai mà phần làm việc với Muse cũng tham khảo.",
      zh: "同一个适配器代码还参考了第二个 muse2api 分支。"},
    noticeFile: "LICENSES/muse2api.txt",
    usedIn: ["app", "installer", "web"],
  },
  // Design references (read only, no files included).
  {
    id: "apple-design-skill",
    name: "Apple Design Skill (dickwu)",
    url: "https://github.com/dickwu/apple-design-skill",
    license: "No license stated — used only as a review method; no files included",
    group: "design",
    note: {
      en: "The website design was reviewed with this skill's five lenses (accessibility, conventions, visual craft, writing, flow).",
      vi: "Thiết kế website được rà soát theo năm lăng kính của skill này (truy cập, quy ước, chất lượng hình ảnh, câu chữ, luồng).",
      zh: "网站设计用该技能的五个视角做了评审（无障碍、惯例、视觉工艺、文案、流程）。"},
    usedIn: ["web"],
  },
  {
    id: "apple-hig",
    name: "Apple Human Interface Guidelines",
    url: "https://developer.apple.com/design/human-interface-guidelines/",
    license: "Apple documentation — referenced, not reproduced. Not affiliated with Apple.",
    group: "design",
    note: {
      en: "Principles for contrast, type sizes, motion and materials.",
      vi: "Nguyên tắc về tương phản, cỡ chữ, chuyển động và chất liệu.",
      zh: "关于对比度、字号、动效与材质的原则。"},
    usedIn: ["web"],
  },
  // Used before (legacy code still in the product).
  {
    id: "vibesai-api",
    name: "VibesAI-api",
    url: "https://github.com/mir-ashiq/VibesAI-api",
    license: "MIT",
    group: "legacy",
    note: {
      en: "Earlier versions used it for a second website that is no longer supported. Its notice stays while compatibility code remains.",
      vi: "Bản cũ dùng cho một trang web khác nay đã ngừng hỗ trợ. Vẫn giữ ghi nguồn chừng nào mã tương thích còn trong sản phẩm.",
      zh: "早期版本用它支持另一个现已停止维护的网站。只要兼容代码还在产品中，致谢就会保留。"},
    noticeFile: "LICENSES/VibesAI-api.txt",
    usedIn: ["app", "installer", "web"],
  },
  // App runtime.
  { id: "electron", name: "Electron", url: "https://github.com/electron/electron", license: "MIT", group: "app", note: { en: "Runs the Windows app.", vi: "Chạy ứng dụng Windows.", zh: "运行 Windows 应用。"}, usedIn: ["app", "installer"], packages: ["electron"] },
  { id: "react", name: "React", url: "https://github.com/facebook/react", license: "MIT", group: "app", note: { en: "Builds the app and website screens.", vi: "Dựng giao diện app và website.", zh: "构建应用与网站界面。"}, usedIn: ["app", "web"], packages: ["react", "react-dom"] },
  { id: "mcp-sdk", name: "Model Context Protocol TypeScript SDK", url: "https://github.com/modelcontextprotocol/typescript-sdk", license: "MIT", group: "app", note: { en: "Speaks MCP with AI agents.", vi: "Nói chuyện MCP với AI agent.", zh: "与 AI agent 进行 MCP 通信。"}, usedIn: ["app"], packages: ["@modelcontextprotocol/sdk"] },
  { id: "zod", name: "Zod", url: "https://github.com/colinhacks/zod", license: "MIT", group: "app", note: { en: "Checks every message and request.", vi: "Kiểm tra mọi tin nhắn và yêu cầu.", zh: "校验每一条消息和请求。"}, usedIn: ["app", "web"], packages: ["zod"] },
  { id: "tanstack", name: "TanStack (Router, Start, Query, Virtual)", url: "https://github.com/TanStack", license: "MIT", group: "web", note: { en: "Website routing and fast long lists in the app.", vi: "Định tuyến website và danh sách dài mượt trong app.", zh: "网站路由，以及应用中流畅的长列表。"}, usedIn: ["app", "web"], packages: ["@tanstack/react-virtual", "@tanstack/react-router", "@tanstack/react-start", "@tanstack/react-query", "@tanstack/router-plugin"] },
  { id: "lucide", name: "Lucide icons", url: "https://github.com/lucide-icons/lucide", license: "ISC", group: "app", note: { en: "Icons in the app and on the website.", vi: "Biểu tượng trong app và website.", zh: "应用与网站中的图标。"}, usedIn: ["app", "web"], packages: ["lucide-react"] },
  { id: "tailwind", name: "Tailwind CSS", url: "https://github.com/tailwindlabs/tailwindcss", license: "MIT", group: "app", note: { en: "Styles the app and website.", vi: "Định kiểu app và website.", zh: "为应用和网站提供样式。"}, usedIn: ["app", "web"], packages: ["tailwindcss", "@tailwindcss/vite"] },
  // Website UI.
  { id: "radix", name: "Radix UI Primitives", url: "https://github.com/radix-ui/primitives", license: "MIT", group: "web", note: { en: "Accessible menus, dialogs and tabs.", vi: "Menu, hộp thoại, thẻ dễ truy cập.", zh: "无障碍的菜单、对话框和标签页。"}, usedIn: ["web"], packages: ["@radix-ui/*"] },
  { id: "shadcn", name: "shadcn/ui", url: "https://github.com/shadcn-ui/ui", license: "MIT", group: "web", note: { en: "Starting point for website components.", vi: "Nền cho các thành phần website.", zh: "网站组件的起点。"}, usedIn: ["web"] },
  { id: "cva", name: "class-variance-authority", url: "https://github.com/joe-bell/cva", license: "Apache-2.0", group: "web", note: { en: "Component variants.", vi: "Biến thể thành phần.", zh: "组件变体。"}, usedIn: ["web"], packages: ["class-variance-authority"] },
  { id: "small-web-libs", name: "clsx, tailwind-merge, sonner, vaul, cmdk, embla-carousel, react-day-picker, react-hook-form, @hookform/resolvers, input-otp, react-resizable-panels, recharts, date-fns, tw-animate-css", url: "https://www.npmjs.com/", license: "MIT", group: "web", note: { en: "Small helpers that come with the website template.", vi: "Thư viện nhỏ đi kèm khung website.", zh: "网站模板自带的小型辅助库。"}, usedIn: ["web"], packages: ["clsx", "tailwind-merge", "sonner", "vaul", "cmdk", "embla-carousel-react", "react-day-picker", "react-hook-form", "@hookform/resolvers", "input-otp", "react-resizable-panels", "recharts", "date-fns", "tw-animate-css"] },
  // Fonts.
  { id: "be-vietnam-pro", name: "Be Vietnam Pro", url: "https://github.com/bettergui/BeVietnamPro", license: "OFL-1.1", group: "font", note: { en: "Main typeface (reads Vietnamese well).", vi: "Font chính (đọc tiếng Việt chuẩn).", zh: "主要字体（越南文显示效果好）。"}, usedIn: ["app", "web"], packages: ["@fontsource/be-vietnam-pro"] },
  { id: "jetbrains-mono", name: "JetBrains Mono", url: "https://github.com/JetBrains/JetBrainsMono", license: "OFL-1.1", group: "font", note: { en: "Code and data.", vi: "Mã và dữ liệu.", zh: "代码与数据。"}, usedIn: ["app", "web"], packages: ["@fontsource/jetbrains-mono"] },
  // Tools the app downloads only when you turn the feature on.
  { id: "cloudflared", name: "cloudflared", url: "https://github.com/cloudflare/cloudflared", license: "Apache-2.0", group: "runtime-download", note: { en: "Quick and named tunnels for remote access (downloaded and checked when you turn it on).", vi: "Tunnel nhanh và tunnel cố định cho truy cập từ xa (tải và kiểm khi bạn bật).", zh: "用于远程访问的快速隧道与固定隧道（开启功能时下载并校验）。"}, usedIn: ["app"] },
  { id: "caddy", name: "Caddy", url: "https://github.com/caddyserver/caddy", license: "Apache-2.0", group: "runtime-download", note: { en: "HTTPS for your own domain (downloaded and checked when you turn it on).", vi: "HTTPS cho tên miền riêng (tải và kiểm khi bạn bật).", zh: "为你自己的域名提供 HTTPS（开启功能时下载并校验）。"}, usedIn: ["app"] },
  // Build tools.
  { id: "build-tools", name: "Vite, esbuild, TypeScript, Vitest, @electron/packager, Inno Setup", url: "https://github.com/vitejs/vite", license: "MIT / Apache-2.0 / BSD-2-Clause / Inno Setup License", group: "tool", note: { en: "Build, test and package the app and website.", vi: "Build, kiểm thử và đóng gói app và website.", zh: "构建、测试并打包应用与网站。"}, usedIn: ["installer"], packages: ["vite", "esbuild", "typescript", "vitest", "@electron/packager", "@vitejs/plugin-react"] },
];
