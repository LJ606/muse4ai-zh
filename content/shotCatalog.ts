import type { AppRoute, L } from "./types";

export interface ShotSpec {
  id: string;
  route: AppRoute | "/onboarding" | `/queue/${string}` | `/library/${string}`;
  /** What must be on screen when the picture is taken (P4 capture script). */
  state: L;
  /** Optional CSS selector to crop to (default: whole window). */
  crop?: string;
}

/**
 * Screenshots the guide may reference (R3-SHOT). Articles use these ids only;
 * the capture pipeline takes each id in English and Vietnamese.
 */
export const SHOT_CATALOG: ShotSpec[] = [
  { id: "onboarding-welcome", route: "/onboarding", state: { en: "First-run welcome screen.", vi: "Màn chào lần đầu mở app.", zh: "首次运行的欢迎界面。"} },
  { id: "studio-image", route: "/studio", state: { en: "Studio in Image mode with a prompt typed and “From text” chosen.", vi: "Studio chế độ Ảnh, đã gõ prompt và chọn “Từ chữ”.", zh: "Studio 图片模式，已输入提示词并选择了“从文字生成”。"} },
  { id: "studio-video", route: "/studio", state: { en: "Studio in Video mode with a prompt typed.", vi: "Studio chế độ Video, đã gõ prompt.", zh: "Studio 视频模式，已输入提示词。"} },
  { id: "studio-video-edit", route: "/studio", state: { en: "Studio in Video mode with an MP4 attached and the change asked in words.", vi: "Studio chế độ Video, đã đính một tệp MP4 và ghi rõ muốn sửa gì.", zh: "Studio 视频模式，已附加一个 MP4 文件，并用文字说明了想要的修改。"} },
  { id: "studio-ask", route: "/studio", state: { en: "Studio in Ask mode showing a finished answer laid out as an article.", vi: "Studio chế độ Hỏi đáp, có câu trả lời dạng bài viết.", zh: "Studio 提问模式，展示一篇已完成的文章式回答。"} },
  { id: "studio-references", route: "/studio", state: { en: "Studio with two reference images attached.", vi: "Studio đã đính kèm hai ảnh tham chiếu.", zh: "Studio 已附加两张参考图。"} },
  { id: "queue-list", route: "/queue", state: { en: "Queue with image and video jobs, thumbnails and status chips.", vi: "Hàng chờ có việc ảnh và video, hình thu nhỏ và nhãn trạng thái.", zh: "队列中有图片与视频任务，附缩略图和状态标签。"} },
  { id: "queue-preview", route: "/queue", state: { en: "Queue with the quick preview open on one finished job.", vi: "Hàng chờ đang mở xem nhanh một việc đã xong.", zh: "队列中已打开一个已完成任务的快速预览。"} },
  { id: "queue-drawer", route: "/queue/sample", state: { en: "Job details drawer open with the result and the prompt.", vi: "Ngăn chi tiết việc đang mở, có kết quả và prompt.", zh: "任务详情抽屉已打开，显示结果与提示词。"} },
  { id: "batch-list", route: "/batch", state: { en: "Batches list with one finished and one running batch.", vi: "Danh sách Hàng loạt có một lô xong và một lô đang chạy.", zh: "批量列表中有一个已完成、一个进行中的批量任务。"} },
  { id: "batch-new", route: "/batch/new", state: { en: "New batch screen with a pasted list of prompts.", vi: "Màn tạo lô mới đã dán danh sách prompt.", zh: "新建批量界面，已粘贴一份提示词清单。"} },
  { id: "library-grid", route: "/library", state: { en: "Library grid of images and videos.", vi: "Lưới Thư viện gồm ảnh và video.", zh: "素材库网格，展示图片与视频。"} },
  { id: "library-detail", route: "/library/sample", state: { en: "One library item open with its details.", vi: "Một tác phẩm trong Thư viện đang mở chi tiết.", zh: "素材库中一项内容已打开并显示详情。"} },
  { id: "library-extend", route: "/library/sample", state: { en: "A Muse video open in the Library with the extend action available.", vi: "Một video Muse mở trong Thư viện, có nút kéo dài.", zh: "素材库中打开了一个 Muse 视频，并可执行续写操作。"} },
  { id: "extend-sheet", route: "/library/sample", state: { en: "Extend plan open: steps or target duration, with the source video.", vi: "Bảng kéo dài đang mở: chọn số bước hoặc thời lượng mục tiêu, kèm video gốc.", zh: "续写计划已打开：可选择步数或目标时长，并附源视频。"} },
  { id: "accounts-list", route: "/accounts", state: { en: "Accounts with two ready Muse accounts.", vi: "Tài khoản có hai tài khoản Muse sẵn sàng.", zh: "账号页中有两个就绪的 Muse 账号。"} },
  { id: "accounts-add", route: "/accounts", state: { en: "Add account dialog.", vi: "Hộp thoại thêm tài khoản.", zh: "添加账号对话框。"} },
  { id: "accounts-quota", route: "/accounts", state: { en: "Usage limit panel of one account.", vi: "Bảng hạn mức của một tài khoản.", zh: "某个账号的额度面板。"} },
  { id: "accounts-mode", route: "/accounts", state: { en: "Execution method dialog of one account (Auto, HTTP only, UI only) with its concurrent job limits.", vi: "Hộp thoại cách chạy của một tài khoản (Tự động, Chỉ HTTP, Chỉ giao diện) và giới hạn việc cùng lúc.", zh: "某个账号的执行方式对话框（自动、仅 HTTP、仅界面），附同时运行任务数的上限。"} },
  { id: "settings-general", route: "/settings/general", state: { en: "Settings › General with the language switch.", vi: "Cài đặt › Chung có chọn ngôn ngữ.", zh: "「设置 › 通用」，包含语言切换。"} },
  { id: "settings-proxy", route: "/settings/proxy", state: { en: "Settings › Proxy.", vi: "Cài đặt › Proxy.", zh: "「设置 › 代理」。"} },
  { id: "settings-run", route: "/settings/run", state: { en: "Settings › Job execution.", vi: "Cài đặt › Chạy việc.", zh: "「设置 › 任务执行」。"} },
  { id: "settings-queue", route: "/settings/queue", state: { en: "Settings › Queue.", vi: "Cài đặt › Hàng chờ.", zh: "「设置 › 队列」。"} },
  { id: "settings-notifications", route: "/settings/notifications", state: { en: "Settings › Notifications.", vi: "Cài đặt › Thông báo.", zh: "「设置 › 通知」。"} },
  { id: "settings-api", route: "/settings/api", state: { en: "Settings › API & agent with the server running and one key.", vi: "Cài đặt › API & agent, máy chủ đang chạy và có một khoá.", zh: "「设置 › API 与 agent」，服务器正在运行并有一个密钥。"} },
  { id: "settings-api-key", route: "/settings/api", state: { en: "New API key dialog showing a masked key once.", vi: "Hộp thoại khoá API mới hiện khoá (đã che) một lần.", zh: "新建 API 密钥对话框，会显示一次已打码的密钥。"} },
  { id: "settings-api-agents", route: "/settings/api", state: { en: "Agent setup section with ready-to-copy configurations.", vi: "Phần cấu hình agent có sẵn nội dung để sao chép.", zh: "Agent 设置区，提供可直接复制的配置。"} },
  { id: "settings-remote", route: "/settings/api", state: { en: "Remote access with Quick tunnel and own domain options.", vi: "Truy cập từ xa có Quick tunnel và tên miền riêng.", zh: "远程访问，提供快速隧道和自有域名选项。"} },
  { id: "settings-security", route: "/settings/security", state: { en: "Settings › Security.", vi: "Cài đặt › Bảo mật.", zh: "「设置 › 安全」。"} },
  { id: "settings-diagnostics", route: "/settings/diagnostics", state: { en: "Settings › Diagnostics.", vi: "Cài đặt › Chẩn đoán.", zh: "「设置 › 诊断」。"} },
  { id: "settings-about", route: "/settings/about", state: { en: "Settings › About: version, the Updates card and who made the app.", vi: "Cài đặt › Giới thiệu: phiên bản, thẻ Cập nhật và người làm app.", zh: "「设置 › 关于」：版本、更新卡片与应用作者。"} },
  { id: "guide-home", route: "/guide", state: { en: "Guide page with chapters and search.", vi: "Trang Hướng dẫn có các chương và ô tìm.", zh: "指南页面，包含章节与搜索框。"} },
  { id: "guide-agent", route: "/guide", state: { en: "Guide article with the For your AI agent panel.", vi: "Bài hướng dẫn có thẻ Cho AI agent.", zh: "指南文章，包含「写给你的 AI agent」面板。"} },
];

export const SHOT_IDS: readonly string[] = SHOT_CATALOG.map((s) => s.id);
