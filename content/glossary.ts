import type { GlossaryTerm } from "./types";

/**
 * Plain-language glossary (R3-CNT.2). The first time a term appears in an
 * article it links here (AC-CNT-06).
 */
export const GLOSSARY: GlossaryTerm[] = [
  {
    id: "agent",
    term: { en: "AI agent", vi: "AI agent (trợ lý AI)", zh: "AI agent"},
    match: { en: ["AI agent", "AI agents"], vi: ["AI agent", "trợ lý AI"] , zh: ["AI agent", "AI 助手", "AI 助理"]},
    definition: {
      en: "An AI assistant that can use tools for you — for example Claude Code, Codex or Cursor. Muse4AI is one of those tools.",
      vi: "Trợ lý AI biết dùng công cụ thay bạn — ví dụ Claude Code, Codex hay Cursor. Muse4AI là một công cụ như vậy.",
      zh: "能替你使用工具的 AI 助手，例如 Claude Code、Codex 或 Cursor。Muse4AI 就是这样的工具之一。"},
  },
  {
    id: "mcp",
    term: { en: "MCP", vi: "MCP", zh: "MCP"},
    match: { en: ["MCP"], vi: ["MCP"] , zh: ["MCP", "模型上下文协议"]},
    definition: {
      en: "Model Context Protocol: a common plug that lets an AI agent use outside tools. Muse4AI offers one at the address ending in /mcp.",
      vi: "Model Context Protocol: một kiểu \"ổ cắm\" chung để AI agent dùng công cụ bên ngoài. Muse4AI có một ổ như vậy ở địa chỉ kết thúc bằng /mcp.",
      zh: "Model Context Protocol（模型上下文协议）：一种通用接口，让 AI agent 能使用外部工具。Muse4AI 提供了一个，地址以 /mcp 结尾。"},
  },
  {
    id: "api",
    term: { en: "API", vi: "API", zh: "API"},
    match: { en: ["API", "REST API"], vi: ["API", "REST API"] , zh: ["API", "REST API", "接口"]},
    definition: {
      en: "A way for programs to talk to each other. Muse4AI's API lets scripts and agents send jobs and fetch results.",
      vi: "Cách để các chương trình nói chuyện với nhau. API của Muse4AI cho script và agent gửi việc và lấy kết quả.",
      zh: "程序之间相互交流的方式。Muse4AI 的 API 让脚本和 agent 可以发送任务、获取结果。"},
  },
  {
    id: "api-key",
    term: { en: "API key", vi: "Khoá API", zh: "API 密钥"},
    match: { en: ["API key", "API keys"], vi: ["khoá API", "khóa API"] , zh: ["API 密钥", "API key", "密钥"]},
    definition: {
      en: "A long password (it starts with msk_) that an agent sends with each request. You create, copy and delete keys in Settings › API & agent.",
      vi: "Một mật khẩu dài (bắt đầu bằng msk_) mà agent gửi kèm mỗi yêu cầu. Bạn tạo, sao chép và xoá khoá trong Cài đặt › API & agent.",
      zh: "一串很长的密码（以 msk_ 开头），agent 每次请求都会附带发送。在「设置 › API 与 agent」中创建、复制和删除密钥。"},
  },
  {
    id: "tunnel",
    term: { en: "Tunnel", vi: "Tunnel (đường hầm)", zh: "隧道"},
    match: { en: ["tunnel", "tunnels", "Quick tunnel"], vi: ["tunnel", "đường hầm"] , zh: ["隧道", "tunnel", "快速隧道"]},
    definition: {
      en: "A safe public web address that leads to Muse4AI on your PC, so cloud apps like Claude or Lovable can reach it. Your API key is still required.",
      vi: "Một địa chỉ web công khai, an toàn, dẫn tới Muse4AI trên máy bạn để các app trên mây như Claude hay Lovable kết nối được. Vẫn cần khoá API.",
      zh: "一个安全的公开网址，指向你电脑上的 Muse4AI，让 Claude、Lovable 等云端应用能够访问。不过仍需要 API 密钥。"},
  },
  {
    id: "proxy",
    term: { en: "Proxy", vi: "Proxy", zh: "代理"},
    match: { en: ["proxy", "proxies"], vi: ["proxy"] , zh: ["代理", "proxy"]},
    definition: {
      en: "A separate internet connection given to one Muse account so each account keeps its own connection. It is not a way around Muse's rules or limits.",
      vi: "Một đường kết nối Internet riêng gán cho một tài khoản Muse để mỗi tài khoản giữ kết nối của mình. Đây không phải cách lách luật hay hạn mức của Muse.",
      zh: "分配给某个 Muse 账号的独立网络连接，让每个账号保持自己的连接。这不是绕过 Muse 规则或额度的方法。"},
  },
  {
    id: "quota",
    term: { en: "Usage limit", vi: "Hạn mức", zh: "使用额度"},
    match: { en: ["usage limit", "usage limits", "quota"], vi: ["hạn mức"] , zh: ["使用额度", "额度", "用量上限"]},
    definition: {
      en: "How much your Muse account can still create. It belongs to your Muse account; Muse4AI only reads and shows it.",
      vi: "Lượng tài khoản Muse của bạn còn tạo được. Hạn mức thuộc tài khoản Muse; Muse4AI chỉ đọc và hiển thị.",
      zh: "你的 Muse 账号还能创作多少。额度属于你的 Muse 账号，Muse4AI 只负责读取和展示。"},
  },
  {
    id: "skill",
    term: { en: "Agent Skill", vi: "Agent Skill", zh: "Agent Skill"},
    match: { en: ["Agent Skill", "skill file", "SKILL.md"], vi: ["Agent Skill", "SKILL.md"] , zh: ["Agent Skill", "SKILL.md", "技能文件"]},
    definition: {
      en: "A small folder of instructions (SKILL.md) that teaches an AI agent how to use a tool well.",
      vi: "Một thư mục hướng dẫn nhỏ (SKILL.md) dạy AI agent cách dùng tốt một công cụ.",
      zh: "一份小型指令文件夹（SKILL.md），教 AI agent 如何用好某个工具。"},
  },
  {
    id: "queue",
    term: { en: "Queue", vi: "Hàng chờ", zh: "队列"},
    match: { en: ["Queue"], vi: ["Hàng chờ"] , zh: ["队列", "Queue"]},
    definition: {
      en: "The list of every job — waiting, running, done or failed — with a picture and the prompt.",
      vi: "Danh sách mọi việc — đang chờ, đang chạy, xong hoặc lỗi — kèm hình và prompt.",
      zh: "全部任务的列表——等待中、进行中、已完成或失败的任务，附带图片和提示词。"},
  },
];
