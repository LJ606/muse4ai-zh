import { FACTS } from "./facts";
import type { L } from "./types";

/**
 * Website page copy and interface words (R3-CNT). Kept in content/ so the same
 * checks (translations, forbidden claims, secrets, links) cover it.
 */

const l = (en: string, vi: string, zh: string): L => ({ en, vi, zh });

export const UI = {
  skip: l("Skip to content", "Bỏ qua tới nội dung", "跳到正文"),
  nav: {
    agents: l("AI agents", "AI agent", "AI agent"),
    useCases: l("Use cases", "Tình huống", "使用场景"),
    docs: l("Docs", "Tài liệu", "指南"),
    download: l("Download", "Tải về", "下载"),
    downloadCta: l("Download for Windows", "Tải cho Windows", "下载 Windows 版"),
    search: l("Search", "Tìm kiếm", "搜索"),
    menu: l("Menu", "Menu", "菜单"),
    close: l("Close", "Đóng", "关闭"),
    language: l("Language", "Ngôn ngữ", "语言"),
    home: l("Muse4AI home", "Trang chủ Muse4AI", "Muse4AI 首页"),
  },
  github: {
    mark: l("GitHub", "GitHub", "GitHub"),
    source: l("Source code", "Mã nguồn", "源代码"),
    viewSource: l("View source on GitHub", "Xem mã nguồn trên GitHub", "在 GitHub 上查看源代码"),
    issues: l("Report a problem", "Báo một lỗi", "报告问题"),
    stars: l("stars", "lượt theo dõi", "星标"),
    clone: l("Copy the clone command", "Chép lệnh tải code", "复制克隆命令"),
    folderNote: l("Inside the repo", "Bên trong kho code", "仓库内容"),
    licenseNote: l("MIT licensed — free to use and free to learn from.", "Giấy phép MIT — dùng thoải mái, học thoải mái.", "MIT 协议——可自由使用、自由学习。"),
  },
  footer: {

    product: l("Product", "Sản phẩm", "产品"),
    docs: l("Docs", "Tài liệu", "指南"),
    agents: l("AI agents", "AI agent", "AI agent"),
    project: l("Project", "Dự án", "项目"),
    allAgents: l("All agents", "Tất cả agent", "全部 agent"),
    madeBy: l("Made by Andrew Babo", "Made by Andrew Babo", "作者 Andrew Babo"),
    portfolio: l("Free, non-commercial portfolio project.", "Dự án portfolio miễn phí, phi thương mại.", "免费的非商业作品集项目。"),
    disclaimer: l(
      "Muse4AI is independent and not affiliated with Meta, Muse or any AI agent maker. Product names belong to their owners.",
      "Muse4AI là dự án độc lập, không liên kết với Meta, Muse hay hãng AI agent nào. Tên sản phẩm thuộc về chủ sở hữu.", "Muse4AI 是独立项目，与 Meta、Muse 或任何 AI agent 厂商均无关联。产品名称属于各自所有者。",
    ),
  },
  search: {
    placeholder: l("Search guides, agents and use cases…", "Tìm bài hướng dẫn, agent, tình huống…", "搜索指南、agent 与使用场景…"),
    empty: l("Nothing found. These pages are a good start:", "Không tìm thấy. Bạn có thể bắt đầu từ:", "没有找到。你可以从这些页面开始："),
    hint: l("Type at least one word. Vietnamese works with or without accents.", "Gõ ít nhất một từ. Tiếng Việt có dấu hay không dấu đều được.", "至少输入一个词。越南文带不带声调都可以搜索。"),
    kinds: { doc: l("Guide", "Hướng dẫn", "指南"), agent: l("Agent", "Agent", "Agent"), usecase: l("Use case", "Tình huống", "使用场景") },
    open: l("Open search (Ctrl K)", "Mở tìm kiếm (Ctrl K)", "打开搜索（Ctrl K）"),
  },
  copy: l("Copy", "Sao chép", "复制"),
  copied: l("Copied", "Đã chép", "已复制"),
  external: l("opens in a new tab", "mở thẻ mới", "在新标签页打开"),
  onThisPage: l("On this page", "Trên trang này", "本页内容"),
  before: l("Before you start", "Trước khi bắt đầu", "开始之前"),
  steps: l("Steps", "Các bước", "步骤"),
  success: l("Check it worked", "Kiểm tra thành công", "检查是否成功"),
  troubleshoot: l("If it doesn't work", "Nếu không chạy", "如果不行"),
  related: l("Related", "Liên quan", "相关内容"),
  previous: l("Previous", "Bài trước", "上一篇"),
  next: l("Next", "Bài sau", "下一篇"),
  markdown: l("Markdown for AI", "Bản Markdown cho AI", "供 AI 阅读的 Markdown"),
  updated: l("Updated", "Cập nhật", "更新于"),
  zoom: l("Click to enlarge", "Bấm để phóng to", "点击放大"),
  shotMissing: l("Screenshot coming soon", "Ảnh chụp sẽ có sớm", "截图即将上线"),
  aiLabel: l("AI-generated", "Tạo bằng AI", "AI 生成"),
  soundOn: l("Play with sound", "Bật tiếng", "带声音播放"),
  themeDark: l("Switch to dark mode", "Chuyển sang giao diện tối", "切换到深色模式"),
  themeLight: l("Switch to light mode", "Chuyển sang giao diện sáng", "切换到浅色模式"),
  soundOff: l("Mute", "Tắt tiếng", "静音"),
  promptUsed: l("Prompt sent to Muse", "Prompt đã gửi Muse (nguyên văn)", "发给 Muse 的提示词"),
  playVideo: l("Play video", "Phát video", "播放视频"),
  readGuide: l("Read the guide", "Đọc hướng dẫn", "阅读指南"),
  allDocs: l("All guides", "Mọi bài hướng dẫn", "全部指南"),
  chapter: l("Chapter", "Chương", "章节"),
  notFound: {
    title: l("This page doesn't exist", "Không có trang này", "这个页面不存在"),
    body: l("The address may be mistyped, or the page moved. These are good places to continue:", "Địa chỉ có thể gõ sai hoặc trang đã đổi chỗ. Bạn có thể đi tiếp tại:", "地址可能输错了，或者页面已移动。可以从这里继续："),
  },
  error: {
    title: l("This page didn't load", "Trang chưa tải được", "这个页面没有加载出来"),
    body: l("Something went wrong. Try again, or go back to the home page.", "Có lỗi xảy ra. Thử lại hoặc quay về trang chủ.", "出了点问题。请重试，或返回首页。"),
    retry: l("Try again", "Thử lại", "重试"),
  },
  status: {
    verified: l("Tested with Muse4AI", "Đã kiểm với Muse4AI", "已用 Muse4AI 测试"),
    documented: l("Setup guide — not yet tested", "Có hướng dẫn — chưa kiểm", "有设置指南——尚未测试"),
    later: l("Not available yet", "Chưa dùng được", "暂不可用"),
  },
  connection: {
    local: l("On this PC", "Trên máy này", "本机"),
    public: l("Cloud app", "Ứng dụng trên mây", "云端应用"),
    bridge: l("Command bridge", "Cầu nối lệnh", "命令桥"),
  },
  filters: {
    all: l("All", "Tất cả", "全部"),
    local: l("On this PC", "Trên máy này", "本机"),
    public: l("Cloud apps", "Ứng dụng trên mây", "云端应用"),
    later: l("Not yet", "Chưa hỗ trợ", "暂不支持"),
  },
  agentPage: {
    officialDocs: l("Official documentation", "Tài liệu chính hãng", "官方文档"),
    config: l("Configuration", "Cấu hình", "配置"),
    oneClick: l("Install in one click", "Cài bằng một lần bấm", "一键安装"),
    oneClickNote: l(
      "Opens the app with the server filled in. You still replace msk_YOUR_KEY with your own key there.",
      "Mở app với máy chủ đã điền sẵn. Bạn vẫn phải thay msk_YOUR_KEY bằng khoá của mình trong đó.", "会打开应用并填好服务器地址。你仍需在其中把 msk_YOUR_KEY 换成自己的密钥。",
    ),
    notes: l("Good to know", "Cần biết", "须知"),
    why: l("Why not yet", "Vì sao chưa được", "为什么还不行"),
    skills: l("Supports Agent Skills", "Hỗ trợ Agent Skill", "支持 Agent Skill"),
    skillLink: l("Teach it with the Muse4AI skill", "Dạy agent bằng skill Muse4AI", "用 Muse4AI 技能教它"),
  },
  useCasePage: {
    who: l("Who it's for", "Dành cho ai", "适用人群"),
    outcome: l("What you get", "Kết quả", "能得到什么"),
    flow: l("Who does what", "Ai làm gì", "各自做什么"),
    you: l("You", "Bạn", "你"),
    agent: l("Your agent", "Agent của bạn", "你的 agent"),
    bridge: l("Muse4AI", "Muse4AI", "Muse4AI"),
    prompt: l("Prompt to give your agent", "Prompt đưa cho agent", "交给 agent 的提示词"),
    samples: l("Samples made with Muse through Muse4AI", "Mẫu tạo bằng Muse qua Muse4AI", "用 Muse 经 Muse4AI 制作的示例"),
    samplesPending: l(
      "Samples for this use case are being made on a test account and will appear here.",
      "Mẫu cho tình huống này đang được tạo bằng tài khoản thử và sẽ hiện ở đây.", "该场景的示例正在测试账号上制作，完成后会在这里展示。",
    ),
    limits: l("Limits to keep in mind", "Giới hạn cần nhớ", "需要注意的限制"),
    disclosure: l("Labeling", "Ghi nhãn", "标注"),
    guides: l("Guides you'll use", "Bài hướng dẫn cần dùng", "会用到的指南"),
    more: l("More use cases", "Tình huống khác", "更多使用场景"),
  },
  categories: {
    all: l("All", "Tất cả", "全部"),
    sales: l("Selling", "Bán hàng", "销售"),
    education: l("Teaching", "Giáo dục", "教学"),
    creators: l("Content creators", "Sáng tạo nội dung", "内容创作者"),
    office: l("Office work", "Văn phòng", "办公"),
    dev: l("Developers", "Lập trình", "开发者"),
  },
};

export const HOME = {
  eyebrow: l("Free Windows app · works with your Muse account", "Ứng dụng Windows miễn phí · dùng tài khoản Muse của bạn", "免费 Windows 应用 · 使用你的 Muse 账号"),
  h1: l("Muse for AI agents", "Muse cho AI agent", "为 AI agent 而生的 Muse"),
  lead: l(
    "Tell your AI assistant what you need in plain words. It drives Muse for you — pictures, short videos, research and more — and hands the finished files back. No code, no copy-pasting between tabs.",
    "Nói với trợ lý AI điều bạn cần bằng lời thường. Trợ lý sẽ điều khiển Muse giúp bạn — làm ảnh, video ngắn, tìm hiểu thông tin và hơn thế nữa — rồi trả lại tệp đã xong. Không cần code, không phải chép qua lại giữa các tab.", "用大白话告诉你的 AI 助手需要什么。它会替你操作 Muse——图片、短视频、资料调研等等——再把成品文件交还给你。不用写代码，也不用在标签页之间复制粘贴。",
  ),
  chatYou: l("Make a clean product photo of our handmade ceramic mug for the shop page.", "Làm giúp mình ảnh sản phẩm chiếc cốc gốm thủ công để đăng lên shop nhé.", "帮我给手工陶瓷杯拍一张干净的产品照，放在店铺页面上。"),
  chatAgent: l("On it — I asked Muse. Here's your photo.", "Có ngay — mình đã nhờ Muse. Ảnh của bạn đây.", "马上办——我已经问过 Muse 了。照片给你。"),
  benefits: [
    { title: l("Just ask", "Cứ nói là được", "开口就行"), body: l("Write like you'd message a colleague. Your assistant turns it into the right request for Muse.", "Viết như nhắn cho đồng nghiệp. Trợ lý tự biến nó thành yêu cầu đúng cho Muse.", "像给同事发消息一样写就行。你的助手会把它变成发给 Muse 的正确请求。") },
    { title: l("It does the clicking", "Trợ lý bấm thay bạn", "它替你点鼠标"), body: l("Pictures, clips, answers from your documents — one after another, while you get on with your day.", "Ảnh, clip, câu trả lời từ tài liệu — làm lần lượt từng việc trong khi bạn làm việc khác.", "图片、短片、来自你文档的答案——一件接一件地完成，而你继续忙自己的事。") },
    { title: l("Files land on your PC", "Tệp về thẳng máy bạn", "文件直接落到你的电脑上"), body: l("Every result is saved in a folder you choose and shown with a picture, so nothing gets lost.", "Mọi kết quả lưu vào thư mục bạn chọn, có hình xem trước, không thất lạc.", "每个结果都保存在你选的文件夹里，并附带预览图，不会丢失。") },
  ],
  showcaseTitle: l("Real voices, music and on-screen text — made by Muse", "Có giọng nói, nhạc, chữ trên hình — Muse làm hết", "真实的人声、音乐与屏幕文字——全部由 Muse 制作"),
  showcaseBody: l(
    "Every scene, voice and sound was made by Muse from a starting picture and one request; longer samples join a few Muse scenes and add captions. Hover to play with sound off; click a clip to hear it.",
    "Mọi cảnh, giọng nói và âm thanh đều do Muse làm từ một ảnh mở đầu và một câu nhờ; clip dài hơn ghép vài cảnh Muse và thêm phụ đề. Rê chuột để xem, bấm vào clip để nghe tiếng.", "每个场景、声音与音效都由 Muse 根据一张起始图片和一句话请求制作；较长的示例由几个 Muse 场景拼接而成并加上字幕。悬停可静音播放，点击片段可听到声音。",
  ),
  /** Home showcase: English and Vietnamese pages show different clips (made separately for each audience). */
  showcase: {
    en: [
      { media: "uc4-affiliate-en", slug: "affiliate-videos", label: "Affiliate product reviews" },
      { media: "uc4-fb-en", slug: "short-ads", label: "Facebook ads for a small shop" },
      { media: "home-en-ugc", slug: "short-ads", label: "UGC-style Facebook ads" },
      { media: "home-en-drama", slug: "shorts-series", label: "Short drama episodes" },
      { media: "home-en-lesson", slug: "lesson-videos", label: "Lessons where words appear as you speak" },
      { media: "home-en-testimonial", slug: "social-campaigns", label: "Customer stories (AI characters)" },
    ],
    vi: [
      { media: "uc4-affiliate-vi", slug: "affiliate-videos", label: "Video review affiliate" },
      { media: "uc4-fb-vi", slug: "short-ads", label: "Quảng cáo Facebook cho tiệm nhỏ" },
      { media: "home-vi-ugc", slug: "short-ads", label: "Quảng cáo Facebook kiểu UGC" },
      { media: "home-vi-drama", slug: "shorts-series", label: "Phim drama ngắn" },
      { media: "home-vi-lesson", slug: "lesson-videos", label: "Bài giảng nói tới đâu chữ hiện tới đó" },
      { media: "home-vi-testimonial", slug: "social-campaigns", label: "Chia sẻ của khách (nhân vật AI)" },
    ],
    zh: [
      { media: "uc4-affiliate-en", slug: "affiliate-videos", label: "带货产品评测" },
      { media: "uc4-fb-en", slug: "short-ads", label: "小店 Facebook 广告" },
      { media: "home-en-ugc", slug: "short-ads", label: "UGC 风格 Facebook 广告" },
      { media: "home-en-drama", slug: "shorts-series", label: "短剧集" },
      { media: "home-en-lesson", slug: "lesson-videos", label: "边说边出字的课程" },
      { media: "home-en-testimonial", slug: "social-campaigns", label: "客户故事（AI 人物）" },
    ],
  },
  anythingTitle: l("If Muse can do it, your assistant can ask for it", "Muse làm được gì, trợ lý nhờ được nấy", "Muse 能做的事，你的助手都能替你开口要"),
  anythingBody: l(
    "Muse4AI doesn't limit you to a few templates. It simply lets the AI assistant you already use talk to Muse — so the list below is only a start.",
    "Muse4AI không gò bạn vào vài mẫu có sẵn. Nó chỉ mở đường cho trợ lý AI bạn đang dùng nói chuyện với Muse — nên danh sách dưới đây mới chỉ là khởi đầu.", "Muse4AI 不会把你限制在几个模板里。它只是让已经在用的 AI 助手能和 Muse 对话——所以下面的列表只是个开始。",
  ),
  logoStrip: l("Connect the AI assistant you already use", "Kết nối trợ lý AI bạn đang dùng", "连接你已经在用的 AI 助手"),
  agentsWord: l("Works with the assistant you already use", "Dùng với trợ lý AI bạn đang quen", "搭配你已经在用的助手"),
  ctaHow: l("See how it works", "Xem cách hoạt động", "看看它怎么工作"),
  relayTitle: l("One request, start to finish", "Một yêu cầu, từ đầu đến cuối", "一个请求，从头到尾"),
  relay: {
    ask: l("Your agent asks", "Agent của bạn yêu cầu", "你的 agent 发出请求"),
    queue: l("Muse4AI runs it on your PC", "Muse4AI chạy trên máy bạn", "Muse4AI 在你的电脑上执行"),
    result: l("The file comes back", "Tệp kết quả trả về", "文件返回"),
    running: l("Running", "Đang tạo", "进行中"),
    done: l("Done", "Xong", "已完成"),
    jobTitle: l("Image · Account A", "Ảnh · Tài khoản A", "图片 · 账号 A"),
    queueTitle: l("Queue", "Hàng chờ", "队列"),
    earlier: l("Earlier", "Trước đó", "更早"),
    kindImage: l("Image", "Ảnh", "图片"),
    kindVideo: l("Video", "Video", "视频"),
    caption: l(
      "The prompt and the picture are a real Muse job made through Muse4AI on a test account. The agent's call is written the way any MCP agent sends it; the job shows in the Queue and the agent gets the file.",
      "Prompt và ảnh là một lượt Muse thật, tạo qua Muse4AI bằng tài khoản thử. Lệnh của agent được viết đúng cách mọi agent MCP gửi; việc hiện trong Hàng chờ và agent nhận tệp.", "提示词与图片来自测试账号上经 Muse4AI 完成的真实 Muse 任务。agent 的调用按任何 MCP agent 的发送方式书写；任务会显示在队列中，agent 随后拿到文件。",
    ),
  },
  stepsTitle: l("Start in three steps", "Bắt đầu với ba bước", "三步开始使用"),
  steps: [
    {
      title: l("Install and sign in", "Cài app và đăng nhập", "安装并登录"),
      body: l("Install Muse4AI on Windows and sign in to your own Muse account inside the app.", "Cài Muse4AI trên Windows và đăng nhập tài khoản Muse của bạn ngay trong app.", "在 Windows 上安装 Muse4AI，并在应用内登录你自己的 Muse 账号。"),
      href: "/docs/install",
    },
    {
      title: l("Connect your agent", "Kết nối agent", "连接 agent"),
      body: l("Create a key in Settings › API & agent and paste the ready-made setup into your agent.", "Tạo khoá trong Cài đặt › API & agent rồi dán cấu hình có sẵn vào agent.", "在「设置 › API 与 agent」中创建一个密钥，把现成的配置粘贴到你的 agent 里。"),
      href: "/docs/connect-overview",
    },
    {
      title: l("Ask in plain words", "Nhờ bằng lời thường", "用大白话提要求"),
      body: l("Ask your agent for a product photo, a short clip or a research summary. Follow each job in the Queue.", "Nhờ agent tạo ảnh sản phẩm, clip ngắn hay tóm tắt tài liệu. Theo dõi từng việc trong Hàng chờ.", "让 agent 帮你做产品照、短片或资料摘要。在队列中跟进每个任务。"),
      href: "/docs/queue",
    },
  ],
  agentsTitle: l("Works with the agents you already use", "Dùng được với agent bạn đang dùng", "搭配你已经在用的 agent"),
  agentsBody: l(
    "Any agent that can add an MCP server with a header key can connect. Each guide says whether it was tested with Muse4AI.",
    "Agent nào thêm được máy chủ MCP kèm khoá trong header đều kết nối được. Mỗi bài ghi rõ đã thử với Muse4AI hay chưa.", "任何能添加带 header 密钥的 MCP 服务器的 agent 都可以连接。每篇指南都会说明是否已用 Muse4AI 测试过。",
  ),
  agentsAll: l("See every agent guide", "Xem mọi hướng dẫn agent", "查看全部 agent 指南"),
  useCasesTitle: l("What people make with it", "Mọi người làm được gì", "大家用它做了什么"),
  useCasesAll: l("All use cases", "Mọi tình huống", "全部使用场景"),
  appTitle: l("A real app, not a script", "Một app thật, không phải đoạn script", "一个真正的应用，不是脚本"),
  appBody: l(
    "Studio for making things yourself, a Queue with pictures, Batches for long lists, a Library on your disk and several Muse accounts — in English and Vietnamese.",
    "Studio để tự tạo, Hàng chờ có hình, Hàng loạt cho danh sách dài, Thư viện trên ổ đĩa và nhiều tài khoản Muse — có tiếng Anh và tiếng Việt.", "Studio 供你自己创作，带图片的队列，处理长清单的批量，硬盘上的素材库，多个 Muse 账号——支持英文与越南文。",
  ),
  appLink: l("Explore the features", "Xem các tính năng", "了解全部功能"),
  honestTitle: l("Good to know before you start", "Cần biết trước khi bắt đầu", "开始之前须知"),
  honest: [
    l("Muse4AI is free. Creating images and videos uses your own Muse account's usage limit.", "Muse4AI miễn phí. Việc tạo ảnh và video dùng hạn mức tài khoản Muse của bạn.", "Muse4AI 免费。创作图片与视频会消耗你自己 Muse 账号的额度。"),
    l("Muse decides limits, verification and regions. The app pauses and tells you; it does not work around them.", "Muse quyết định hạn mức, xác minh và vùng hỗ trợ. App dừng lại và báo cho bạn, không tìm cách né.", "额度、验证与地区由 Muse 决定。遇到限制时应用会暂停并告诉你，不会绕过它们。"),
    l("Everything stays on your PC. The app has no Muse4AI account and sends nothing to its maker.", "Mọi thứ nằm trên máy bạn. App không có tài khoản Muse4AI và không gửi gì cho người làm ra nó.", "一切都留在你的电脑上。应用没有 Muse4AI 账号，也不会向作者发送任何数据。"),
    l("Independent project, not affiliated with Meta or Muse. You are responsible for following Muse's terms.", "Dự án độc lập, không liên kết với Meta hay Muse. Bạn tự chịu trách nhiệm tuân theo điều khoản của Muse.", "独立项目，与 Meta 或 Muse 无关联。你有责任遵守 Muse 的条款。"),
  ],
  honestLink: l("Read the full disclaimer", "Đọc miễn trừ đầy đủ", "阅读完整免责声明"),
  ossLine: l(
    "Built on open source and on ideas from the muse2api projects — every source is credited.",
    "Xây trên mã nguồn mở và ý tưởng từ các dự án muse2api — mọi nguồn đều được ghi.", "基于开源软件与 muse2api 项目的思路构建——每个来源都有致谢。",
  ),
  ossLink: l("Open source & credits", "Mã mở & ghi nguồn", "开源与致谢"),
  repoTitle: l("The whole app is on GitHub", "Cả app nằm trên GitHub", "整个应用都在 GitHub 上"),
  repoBody: l(
    "Muse4AI is a small personal project, not a company: every line of it is public. Read it, run it from source, or tell Andrew what broke.",
    "Muse4AI là một dự án cá nhân nhỏ, không phải công ty: từng dòng code đều công khai. Bạn có thể đọc, tự chạy từ code, hoặc báo cho Andrew chỗ nào hỏng.", "Muse4AI 是个小型的个人项目，不是一家公司：每一行代码都是公开的。你可以阅读它、从源码运行它，或者告诉 Andrew 哪里坏了。",
  ),

};

export const FEATURES = {
  h1: l("Everything Muse4AI does", "Muse4AI làm được gì", "Muse4AI 能做的所有事"),
  lead: l(
    "One Windows app that lets you and your AI agents use Muse with order and visibility: a place to create, a queue to follow, a library on your disk.",
    "Một app Windows giúp bạn và AI agent dùng Muse có trật tự và dễ theo dõi: nơi tạo, hàng chờ để theo dõi, thư viện trên ổ đĩa.", "一个 Windows 应用，让你和 AI agent 有条理、看得见地使用 Muse：创作的地方、跟进的队列、硬盘上的素材库。",
  ),
  items: [
    {
      id: "studio",
      title: l("Studio", "Studio", "Studio"),
      body: l(
        "Make images and short videos from a description, edit a picture with references, or ask questions about your files. Answers appear as tidy articles you can copy.",
        "Tạo ảnh và video ngắn từ mô tả, sửa ảnh với ảnh tham chiếu, hay hỏi về tài liệu của bạn. Câu trả lời hiện như bài viết gọn, sao chép được.", "根据描述制作图片与短视频，用参考图编辑图片，或就你的文件提问。回答会以整齐文章的形式呈现，可以复制。",
      ),
      shot: "studio-image",
      doc: "create-image",
    },
    {
      id: "queue",
      title: l("Queue with pictures", "Hàng chờ có hình", "带图片的队列"),
      body: l(
        "Every job — from you or an agent — shows its picture, prompt and status. Hover for a quick preview. Jobs Muse may already have received are marked for review instead of being sent twice.",
        "Mọi việc — của bạn hay của agent — hiện hình, prompt và trạng thái. Rê chuột để xem nhanh. Việc mà Muse có thể đã nhận được đánh dấu cần xem, không bị gửi hai lần.", "每个任务——来自你或 agent——都会显示图片、提示词与状态。悬停可快速预览。Muse 可能已经收到的任务会标记为待审核，不会重复发送。",
      ),
      shot: "queue-list",
      doc: "queue",
    },
    {
      id: "batches",
      title: l("Batches", "Hàng loạt", "批量"),
      body: l("Paste a list of prompts and let them run one after another, with pause and resume.", "Dán danh sách prompt và để chúng chạy lần lượt, có tạm dừng và chạy tiếp.", "粘贴一份提示词清单，让它们依次运行，还可以暂停与继续。"),
      shot: "batch-new",
      doc: "batches",
    },
    {
      id: "library",
      title: l("Library on your disk", "Thư viện trên ổ đĩa", "硬盘上的素材库"),
      body: l("Finished files are saved in a folder you choose, sorted by month and batch. Search, preview and reuse an image as a new reference.", "Tệp hoàn chỉnh lưu trong thư mục bạn chọn, chia theo tháng và lô. Tìm, xem và dùng lại ảnh làm tham chiếu mới.", "成品文件保存在你选的文件夹里，按月份与批量整理。可以搜索、预览，并把图片复用为新的参考图。"),
      shot: "library-grid",
      doc: "library",
    },
    {
      id: "accounts",
      title: l("Several Muse accounts", "Nhiều tài khoản Muse", "多个 Muse 账号"),
      body: l(
        "Add more than one Muse account, each with its own proxy. See the usage each account has left, and set how many jobs each may run at once.",
        "Thêm nhiều tài khoản Muse, mỗi tài khoản một proxy riêng. Xem hạn mức còn lại và đặt số việc mỗi tài khoản được chạy cùng lúc.", "添加多个 Muse 账号，每个账号配自己的代理。查看每个账号剩余的额度，并设置每个账号可同时运行的任务数。",
      ),
      shot: "accounts-list",
      doc: "accounts-and-limits",
    },
    {
      id: "agents",
      title: l("MCP and REST for agents", "MCP và REST cho agent", "面向 agent 的 MCP 与 REST"),
      body: l(
        `Eight MCP tools and a REST API on your PC at port ${FACTS.apiDefaultPort}. Each agent gets its own key; status-only keys can watch without creating.`,
        `Tám công cụ MCP và REST API trên máy bạn ở cổng ${FACTS.apiDefaultPort}. Mỗi agent có khoá riêng; khoá chỉ xem trạng thái thì không tạo được.`, "你电脑上有 8 个 MCP 工具与一个 REST API，端口为 47821。每个 agent 各有自己的密钥；仅查看状态的密钥只能查看，不能创建。",
      ),
      shot: "settings-api",
      doc: "connect-overview",
    },
    {
      id: "remote",
      title: l("Remote access when you need it", "Truy cập từ xa khi cần", "需要时远程访问"),
      body: l(
        "Cloud agents such as Claude on the web can reach your PC through a tunnel or your own HTTPS domain. Off by default; keys are always required.",
        "Agent trên mây như Claude bản web có thể gọi tới máy bạn qua tunnel hoặc tên miền HTTPS riêng. Mặc định tắt; luôn cần khoá.", "Claude 网页版等云端 agent 可以通过隧道或你自己的 HTTPS 域名访问你的电脑。默认关闭；始终需要密钥。",
      ),
      shot: "settings-remote",
      doc: "remote-access",
    },
    {
      id: "languages",
      title: l("English and Vietnamese", "Tiếng Anh và tiếng Việt", "英文与越南文"),
      body: l(
        "The whole app, its notifications, the installer and replies to agents come in both languages. English is the default; switch any time.",
        "Toàn bộ app, thông báo, bộ cài và phản hồi cho agent đều có hai ngôn ngữ. Mặc định tiếng Anh; đổi lúc nào cũng được.", "整个应用、通知、安装程序与回复给 agent 的内容都有两种语言。默认英文，随时可以切换。",
      ),
      shot: "settings-general",
      doc: "settings-overview",
    },
  ],
};

export const HOW = {
  h1: l("How Muse4AI works", "Muse4AI hoạt động thế nào", "Muse4AI 如何工作"),
  lead: l(
    "Three parts, all of them yours: your AI agent, the Muse4AI app on your Windows PC, and your Muse account.",
    "Ba phần, đều là của bạn: AI agent, app Muse4AI trên máy Windows và tài khoản Muse của bạn.", "三个部分，全都属于你：你的 AI agent、你 Windows 电脑上的 Muse4AI 应用，以及你的 Muse 账号。",
  ),
  parts: [
    {
      title: l("Your AI agent", "AI agent của bạn", "你的 AI agent"),
      body: l(
        "Claude Code, Codex, Cursor or another agent decides what to make and sends a request with its own key, through MCP or REST.",
        "Claude Code, Codex, Cursor hay agent khác quyết định cần tạo gì và gửi yêu cầu kèm khoá riêng, qua MCP hoặc REST.", "Claude Code、Codex、Cursor 或其他 agent 决定要制作什么，并用自己的密钥通过 MCP 或 REST 发送请求。",
      ),
    },
    {
      title: l("Muse4AI on your PC", "Muse4AI trên máy bạn", "你电脑上的 Muse4AI"),
      body: l(
        "The app checks the key, puts the request in the Queue, picks a ready Muse account, sends it once and saves the result to your Library.",
        "App kiểm khoá, đưa yêu cầu vào Hàng chờ, chọn tài khoản Muse sẵn sàng, gửi đúng một lần và lưu kết quả vào Thư viện.", "应用校验密钥，把请求放入队列，挑选一个就绪的 Muse 账号，只发送一次，并把结果保存到素材库。",
      ),
    },
    {
      title: l("Your Muse account", "Tài khoản Muse của bạn", "你的 Muse 账号"),
      body: l(
        "Muse makes the image, video or answer under your account and its usage limit, through the proxy you set for that account.",
        "Muse tạo ảnh, video hay câu trả lời bằng tài khoản và hạn mức của bạn, qua proxy bạn đặt cho tài khoản đó.", "Muse 在你的账号与额度内，通过你为该账号设置的代理，制作图片、视频或回答。",
      ),
    },
  ],
  dataTitle: l("Where your data lives", "Dữ liệu của bạn nằm ở đâu", "你的数据在哪里"),
  data: [
    l(`Accounts, settings, the Queue and Library records stay in ${FACTS.dataDir} on your PC.`, `Tài khoản, cài đặt, Hàng chờ và thông tin Thư viện nằm ở ${FACTS.dataDir} trên máy bạn.`, "账号、设置、队列与素材库记录保存在你电脑上的 %APPDATA%\\MuseStudio 中。"),
    l("Finished files go to the library folder you choose.", "Tệp hoàn chỉnh nằm trong thư mục thư viện bạn chọn.", "成品文件保存在你选的素材库文件夹中。"),
    l("You sign in to Muse yourself; the app keeps the session, not your password.", "Bạn tự đăng nhập Muse; app giữ phiên đăng nhập, không giữ mật khẩu.", "由你自己登录 Muse；应用只保留登录会话，不保存密码。"),
    l("API keys are stored only as a fingerprint (hash); the full key is shown once when you create it.", "Khoá API chỉ được lưu dạng dấu vân tay (hash); khoá đầy đủ chỉ hiện một lần lúc tạo.", "API 密钥只以指纹（哈希）形式保存；完整密钥仅在创建时显示一次。"),
  ],
  rulesTitle: l("Rules that keep jobs safe", "Các luật giữ cho việc an toàn", "保障任务安全的规则"),
  rules: [
    l("Each request carries its own ID, so a retry after a dropped connection does not create a second job.", "Mỗi yêu cầu có mã riêng, nên thử lại sau khi rớt mạng không tạo việc thứ hai.", "每个请求都有自己的 ID，因此断线后重试不会产生第二个任务。"),
    l("If the app cannot tell whether Muse received a job, it marks it for review instead of sending it again.", "Nếu app không chắc Muse đã nhận việc, app đánh dấu cần xem thay vì gửi lại.", "如果应用无法确认 Muse 是否收到任务，会把它标记为待审核，而不是重新发送。"),
    l("When Muse asks for verification, reports a limit or an unsupported region, the account pauses until you act.", "Khi Muse yêu cầu xác minh, báo hết hạn mức hay vùng không hỗ trợ, tài khoản dừng cho tới khi bạn xử lý.", "当 Muse 要求验证、报告额度已满或地区不受支持时，账号会暂停，直到你处理。"),
    l("A broken proxy stops its account; the app never switches to a direct connection.", "Proxy hỏng thì tài khoản đó dừng; app không bao giờ tự chuyển sang kết nối trực tiếp.", "代理出问题会停用对应账号；应用绝不会自动切换到直连。"),
  ],
  next: l("Ready to connect an agent?", "Sẵn sàng kết nối agent?", "准备好连接 agent 了吗？"),
  privacyLink: l("Privacy details", "Chi tiết quyền riêng tư", "隐私详情"),
};

export const DOWNLOAD = {
  h1: l("Download Muse4AI for Windows", "Tải Muse4AI cho Windows", "下载 Windows 版 Muse4AI"),
  lead: l(
    "Free app for Windows 10 and 11 (64-bit). Your data stays on your PC and is kept when you update.",
    "App miễn phí cho Windows 10 và 11 (64-bit). Dữ liệu nằm trên máy bạn và được giữ khi cập nhật.", "免费应用，支持 Windows 10 与 11（64 位）。数据留在你的电脑上，更新时也会保留。",
  ),
  privateTitle: l("Private beta for now", "Hiện là bản beta riêng", "目前为内测版"),
  privateBody: l(
    "The current version is shared privately while testing continues. A public download link will appear on this page; there is no other official download.",
    "Phiên bản hiện tại đang được chia sẻ riêng trong lúc thử nghiệm. Link tải công khai sẽ hiện trên trang này; không có nơi tải chính thức nào khác.", "当前版本在测试期间仅私下分享。公开下载链接会出现在此页面上；没有其他下载渠道。",
  ),
  version: l("Version", "Phiên bản", "版本"),
  date: l("Released", "Ngày phát hành", "发布日期"),
  size: l("Installer size", "Dung lượng bộ cài", "安装包大小"),
  checksum: l("SHA-256 of the installer", "SHA-256 của bộ cài", "安装包的 SHA-256"),
  checksumNote: l(
    "After downloading, compare this value with Windows: open PowerShell in the download folder and run the command below.",
    "Sau khi tải, so mã này bằng Windows: mở PowerShell trong thư mục tải về rồi chạy lệnh bên dưới.", "下载后请在 Windows 上核对该值：在下载文件夹中打开 PowerShell，运行下方命令。",
  ),
  requirements: l("What you need", "Bạn cần gì", "需要准备什么"),
  req: [
    l("Windows 10 or 11, 64-bit.", "Windows 10 hoặc 11, bản 64-bit.", "Windows 10 或 11，64 位。"),
    l("Your own Muse account and a working proxy for it.", "Tài khoản Muse của bạn và một proxy hoạt động cho tài khoản đó.", "你自己的 Muse 账号，以及一个可用的代理。"),
    l("Free disk space for the files you create.", "Ổ đĩa còn chỗ cho các tệp bạn tạo.", "为你创建的文件留出足够的磁盘空间。"),
  ],
  unsigned: l(
    "The installer is not code-signed yet, so Windows SmartScreen may warn you. Continue only with a file whose SHA-256 matches the value above.",
    "Bộ cài chưa được ký số nên Windows SmartScreen có thể cảnh báo. Chỉ tiếp tục với tệp có SHA-256 khớp với mã ở trên.", "安装包尚未进行代码签名，因此 Windows SmartScreen 可能会发出警告。请只继续使用 SHA-256 与上方数值一致的文件。",
  ),
  guides: l("Install, update and remove", "Cài, cập nhật và gỡ", "安装、更新与卸载"),
  install: l("Install guide", "Hướng dẫn cài", "安装指南"),
  update: l("Updates and backups", "Cập nhật và sao lưu", "更新与备份"),
  changelog: l("What changed in each version", "Thay đổi của từng phiên bản", "各版本的变更内容"),
};

export const ABOUT = {
  h1: l("Made by Andrew Babo", "Made by Andrew Babo", "作者 Andrew Babo"),
  lead: l(
    "Muse4AI is a free, non-commercial portfolio project by Andrew Babo: a bridge that lets the AI agents people already use work with Muse in an orderly, visible way.",
    "Muse4AI là dự án portfolio miễn phí, phi thương mại của Andrew Babo: một cây cầu để các AI agent mọi người đang dùng làm việc với Muse một cách có trật tự, dễ theo dõi.", "Muse4AI 是 Andrew Babo 的免费非商业作品集项目：一座桥，让人们已经在用的 AI agent 能有条理、看得见地与 Muse 协作。",
  ),
  why: l("Why it exists", "Vì sao có dự án này", "它为什么存在"),
  whyBody: l(
    "AI agents are good at planning work but cannot use Muse on their own. Muse4AI gives them one clear door — on your PC, with your account, with every job in sight.",
    "AI agent giỏi lên kế hoạch nhưng không tự dùng Muse được. Muse4AI cho agent một cánh cửa rõ ràng — trên máy bạn, bằng tài khoản của bạn, mọi việc đều nhìn thấy.", "AI agent 擅长规划工作，却无法独自使用 Muse。Muse4AI 给它们开了一扇明确的门——在你的电脑上、用你的账号、每个任务都看得见。",
  ),
  principles: l("How it is built", "Được làm theo nguyên tắc nào", "它遵循哪些原则"),
  principleList: [
    l("Local first: no cloud account, no database on the web.", "Ưu tiên chạy trên máy: không tài khoản đám mây, không cơ sở dữ liệu trên web.", "本地优先：没有云端账号，网上也没有数据库。"),
    l("Honest about limits: Muse's rules come first.", "Trung thực về giới hạn: luật của Muse đứng trước.", "坦诚面对限制：Muse 的规则优先。"),
    l("Plain language in English and Vietnamese.", "Lời văn dễ hiểu bằng tiếng Anh và tiếng Việt.", "用英文与越南文写成通俗易懂的语言。"),
    l("Every borrowed idea and library is credited.", "Mọi ý tưởng và thư viện mượn đều được ghi nguồn.", "每个借鉴的思路与库都有致谢。"),
  ],
};

export const LEGAL = {
  disclaimer: {
    h1: l("Disclaimer & trademarks", "Miễn trừ & nhãn hiệu", "免责声明与商标"),
    sections: [
      {
        title: l("An independent project", "Một dự án độc lập", "一个独立项目"),
        body: l(
          "Muse4AI is an independent, non-commercial project by Andrew Babo. It is not affiliated with, sponsored by or approved by Meta Platforms, Muse, or any AI agent maker named on this site.",
          "Muse4AI là dự án độc lập, phi thương mại của Andrew Babo. Dự án không liên kết, không được tài trợ và không được Meta Platforms, Muse hay bất kỳ hãng AI agent nào nêu trên trang này phê duyệt.", "Muse4AI 是 Andrew Babo 的独立非商业项目，与 Meta Platforms、Muse 或本站提到的任何 AI agent 厂商均无关联，也未获得其赞助或认可。",
        ),
      },
      {
        title: l("Names and trademarks", "Tên và nhãn hiệu", "名称与商标"),
        body: l(
          "Muse, Meta, Claude, ChatGPT, Codex, Cursor, GitHub Copilot, VS Code, Antigravity, Gemini, Lovable, Grok and other names are trademarks of their owners. They appear only to say which tools Muse4AI can work with. This site shows agent names as text, not their logos, unless an owner's published rules allow it.",
          "Muse, Meta, Claude, ChatGPT, Codex, Cursor, GitHub Copilot, VS Code, Antigravity, Gemini, Lovable, Grok và các tên khác là nhãn hiệu của chủ sở hữu. Các tên chỉ dùng để nói Muse4AI làm việc được với công cụ nào. Trang này ghi tên agent bằng chữ, không dùng logo, trừ khi quy định công khai của chủ sở hữu cho phép.", "Muse、Meta、Claude、ChatGPT、Codex、Cursor、GitHub Copilot、VS Code、Antigravity、Gemini、Lovable、Grok 及其他名称均为其所有者的商标。这些名称出现只是为了说明 Muse4AI 能与哪些工具协作。本站以文字形式展示 agent 名称，不使用其徽标，除非所有者公布的规则允许。",
        ),
      },
      {
        title: l("Muse's terms are your responsibility", "Điều khoản của Muse là trách nhiệm của bạn", "遵守 Muse 条款是你的责任"),
        body: l(
          "Muse4AI works with your own Muse account. Muse's terms may restrict automated use of its service, and Muse can limit or suspend accounts. Read [Muse's terms](https://muse.ai/terms?locale=en_US) and decide for yourself; using a secondary account is wise.",
          "Muse4AI dùng tài khoản Muse của chính bạn. Điều khoản của Muse có thể hạn chế việc dùng tự động và Muse có thể giới hạn hoặc khoá tài khoản. Hãy đọc [điều khoản của Muse](https://muse.ai/terms?locale=en_US) và tự quyết định; nên dùng tài khoản phụ.", "Muse4AI 使用你自己的 Muse 账号。Muse 的条款可能限制对其服务的自动化使用，Muse 也可能限制或停用账号。请阅读 [Muse 的条款](https://muse.ai/terms?locale=en_US) 后自行决定；使用备用账号是明智的做法。",
        ),
      },
      {
        title: l("What the app will not do", "Những việc app không làm", "应用不会做的事"),
        body: l(
          "The app does not get around usage limits, verification, regional rules or other restrictions. When Muse reports one, the account pauses and you decide what to do.",
          "App không né hạn mức, xác minh, quy định theo vùng hay các hạn chế khác. Khi Muse báo, tài khoản dừng và bạn quyết định làm gì tiếp.", "应用不会绕过使用额度、验证、地区规则或其他限制。当 Muse 报告其中一项时，账号会暂停，由你决定下一步。",
        ),
      },
      {
        title: l("No warranty", "Không bảo đảm", "不作保证"),
        body: l(
          "Muse4AI is provided as is, without any warranty. Results come from Muse; check them before you use them, and label AI-generated content where rules require it.",
          "Muse4AI được cung cấp nguyên trạng, không kèm bảo đảm. Kết quả do Muse tạo; hãy kiểm tra trước khi dùng và ghi nhãn nội dung do AI tạo khi quy định yêu cầu.", "Muse4AI 按原样提供，不作任何保证。结果来自 Muse；使用前请检查，并在规则要求时标注 AI 生成内容。",
        ),
      },
    ],
  },
  privacy: {
    h1: l("Privacy", "Quyền riêng tư", "隐私"),
    sections: [
      {
        title: l("This website", "Website này", "本网站"),
        body: l(
          "This site sets no cookies, runs no analytics and loads no third-party scripts. Fonts are served from this site. Like any website, the hosting service may process technical data such as your IP address to deliver pages; this project adds no tracking of its own.",
          "Website không đặt cookie, không chạy phân tích và không tải script bên thứ ba. Phông chữ phục vụ từ chính trang. Như mọi website, dịch vụ lưu trữ có thể xử lý dữ liệu kỹ thuật như địa chỉ IP để trả trang; dự án không thêm theo dõi nào.", "本网站不设置 Cookie，不运行分析工具，不加载第三方脚本。字体由本站提供。和任何网站一样，托管服务可能会处理 IP 地址等技术数据以提供页面；本项目本身不添加任何追踪。",
        ),
      },
      {
        title: l("The Muse4AI app", "App Muse4AI", "Muse4AI 应用"),
        body: l(
          `The app stores everything on your PC, in ${FACTS.dataDir} and your library folder. It has no Muse4AI account and sends no data to Andrew Babo. It talks to Muse through the proxy you set, and to your agents only through the API you turn on.`,
          `App lưu mọi thứ trên máy bạn, ở ${FACTS.dataDir} và thư mục thư viện. App không có tài khoản Muse4AI và không gửi dữ liệu cho Andrew Babo. App nói chuyện với Muse qua proxy bạn đặt, và với agent chỉ qua API bạn bật.`, "应用把所有内容都存储在你的电脑上，位于 %APPDATA%\\MuseStudio 与你的素材库文件夹中。它没有 Muse4AI 账号，也不会向 Andrew Babo 发送数据。它通过你设置的代理与 Muse 通信，只通过你开启的 API 与你的 agent 通信。",
        ),
      },
      {
        title: l("What you send to Muse and agents", "Những gì bạn gửi cho Muse và agent", "你发送给 Muse 与 agent 的内容"),
        body: l(
          "Prompts and files you send are handled by Muse under its own policies, and by your agent's maker under theirs. Do not send private or customer data you are not allowed to share.",
          "Prompt và tệp bạn gửi được Muse xử lý theo chính sách của Muse, và được hãng agent xử lý theo chính sách của họ. Đừng gửi dữ liệu riêng tư hay dữ liệu khách hàng mà bạn không được phép chia sẻ.", "你发送的提示词与文件由 Muse 按其政策处理，由你的 agent 厂商按其政策处理。请勿发送不允许分享的私人或客户数据。",
        ),
      },
    ],
  },
};

export const OSS = {
  h1: l("Open source & credits", "Mã mở & ghi nguồn", "开源与致谢"),
  lead: l(
    "Muse4AI learned from other people's work and is built with open-source software. Here is every source, with its license.",
    "Muse4AI học từ công sức của người khác và được xây bằng phần mềm mã nguồn mở. Đây là mọi nguồn, kèm giấy phép.", "Muse4AI 借鉴了他人的工作成果，并以开源软件构建。这里列出每一个来源及其许可证。",
  ),
  groups: {
    referenced: l("Referenced directly", "Tham khảo trực tiếp", "直接参考"),
    design: l("Design references", "Tham khảo thiết kế", "设计参考"),
    legacy: l("Used in earlier versions", "Đã dùng ở bản trước", "早期版本使用过"),
    app: l("Inside the Windows app", "Bên trong app Windows", "Windows 应用内部"),
    web: l("Inside this website", "Bên trong website này", "本网站内部"),
    font: l("Fonts", "Phông chữ", "字体"),
    tool: l("Build and install tools", "Công cụ dựng và cài đặt", "构建与安装工具"),
    "runtime-download": l("Downloaded only when you turn a feature on", "Chỉ tải khi bạn bật tính năng", "仅在开启功能时下载"),
  },
  license: l("License", "Giấy phép", "许可证"),
};

export const CHANGELOG = {
  h1: l("What's new", "Có gì mới", "更新动态"),
  lead: l("Changes in each Muse4AI version, in plain words.", "Thay đổi của từng phiên bản Muse4AI, viết dễ hiểu.", "每个 Muse4AI 版本的变更，用通俗的语言写成。"),
};

export const DOCS_HUB = {
  h1: l("Muse4AI guide, A to Z", "Hướng dẫn Muse4AI từ A đến Z", "Muse4AI 指南，从入门到精通"),
  lead: l(
    "Step-by-step guides with real screenshots, written for everyone — from installing the app to connecting your AI agent.",
    "Hướng dẫn từng bước kèm ảnh thật, viết cho mọi người — từ cài app đến kết nối AI agent.", "附真实截图的分步指南，写给每一个人——从安装应用到连接 AI agent。",
  ),
  forAgents: l("For AI agents", "Cho AI agent", "写给 AI agent"),
  forAgentsBody: l(
    "Agents can read every guide as Markdown, or start from llms.txt. The Muse4AI skill teaches them the safe way to send jobs.",
    "Agent có thể đọc mọi bài dạng Markdown, hoặc bắt đầu từ llms.txt. Skill Muse4AI dạy agent cách gửi việc an toàn.", "Agent 可以把每篇指南当作 Markdown 阅读，或从 llms.txt 开始。Muse4AI 技能会教它们安全发送任务的方法。",
  ),
  skillZip: l("Download the skill (.zip)", "Tải skill (.zip)", "下载技能（.zip）"),
  skillHow: l("How the skill works", "Skill hoạt động thế nào", "技能如何工作"),
};

export const AGENTS_HUB = {
  h1: l("Connect your AI agent to Muse", "Kết nối AI agent với Muse", "把 AI agent 连接到 Muse"),
  lead: l(
    "Pick your agent for exact setup steps. Agents on your PC use the local address; cloud apps need remote access first.",
    "Chọn agent để xem từng bước cài. Agent trên máy dùng địa chỉ cục bộ; ứng dụng trên mây cần bật truy cập từ xa trước.", "选择你的 agent，查看精确的设置步骤。本机上的 agent 使用本地地址；云端应用需要先开启远程访问。",
  ),
  honest: l(
    "\"Setup guide — not yet tested\" means the steps follow the maker's own documentation but nobody has confirmed them end to end with Muse4AI yet.",
    "\"Có hướng dẫn — chưa kiểm\" nghĩa là các bước theo tài liệu của hãng nhưng chưa ai xác nhận chạy trọn vẹn với Muse4AI.", "“有设置指南——尚未测试”是指这些步骤遵循厂商自己的文档，但还没有人确认它们能与 Muse4AI 全程跑通。",
  ),
};

export const USECASES_HUB = {
  h1: l("Use cases for Muse4AI", "Tình huống dùng Muse4AI", "Muse4AI 使用场景"),
  lead: l(
    "Real workflows where you decide, your agent plans and Muse4AI gets the pictures and clips made — with the limits stated plainly.",
    "Quy trình thật: bạn quyết định, agent lên kế hoạch, Muse4AI lo phần tạo ảnh và clip — giới hạn ghi rõ ràng.", "真实的工作流程：你做决定，agent 做规划，Muse4AI 负责把图片与片段做出来——限制也写得明明白白。",
  ),
};
