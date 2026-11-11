import type { Chapter } from "./types";

/** Guide chapters, same order in the app and on the website (screens §5). */
export const CHAPTERS: Chapter[] = [
  { id: "start", order: 1, title: { en: "Start here", vi: "Bắt đầu", zh: "从这里开始"}, summary: { en: "What Muse4AI is, how to install it and what you see the first time.", vi: "Muse4AI là gì, cách cài và những gì bạn thấy lần đầu.", zh: "Muse4AI 是什么、怎么安装，以及第一次打开会看到什么。"} },
  { id: "account", order: 2, title: { en: "Add your Muse account", vi: "Thêm tài khoản Muse", zh: "添加 Muse 账号"}, summary: { en: "Sign in to Muse inside Muse4AI so it can create for you.", vi: "Đăng nhập Muse ngay trong Muse4AI để app tạo thay bạn.", zh: "在 Muse4AI 内登录 Muse，让它替你创作。"} },
  { id: "studio", order: 3, title: { en: "Create in Studio", vi: "Tạo trong Studio", zh: "在 Studio 中创作"}, summary: { en: "Make images and short videos, ask questions and use reference pictures.", vi: "Tạo ảnh, video ngắn, hỏi đáp và dùng ảnh tham chiếu.", zh: "制作图片和短视频、提问，并使用参考图。"} },
  { id: "queue", order: 4, title: { en: "Queue", vi: "Hàng chờ", zh: "队列"}, summary: { en: "Follow every job and open the result.", vi: "Theo dõi từng việc và mở kết quả.", zh: "跟进每个任务并打开结果。"} },
  { id: "batch", order: 5, title: { en: "Batches", vi: "Hàng loạt", zh: "批量"}, summary: { en: "Create many items from one list.", vi: "Tạo nhiều tác phẩm từ một danh sách.", zh: "用一份清单一次创建多个作品。"} },
  { id: "library", order: 6, title: { en: "Library", vi: "Thư viện", zh: "素材库"}, summary: { en: "Find, preview and reuse what you made.", vi: "Tìm, xem và dùng lại những gì đã tạo.", zh: "查找、预览并复用已创作的内容。"} },
  { id: "accounts", order: 7, title: { en: "Accounts & usage limits", vi: "Tài khoản & hạn mức", zh: "账号与使用额度"}, summary: { en: "Several Muse accounts, how jobs are shared and how much each can still make.", vi: "Nhiều tài khoản Muse, cách chia việc và lượng còn tạo được.", zh: "多个 Muse 账号、任务如何分配，以及每个账号还能创作多少。"} },
  { id: "agents", order: 8, title: { en: "Connect AI agents", vi: "Kết nối AI agent", zh: "连接 AI agent"}, summary: { en: "Let Claude, Codex, Cursor and others use Muse through Muse4AI.", vi: "Cho Claude, Codex, Cursor và các agent khác dùng Muse qua Muse4AI.", zh: "让 Claude、Codex、Cursor 等通过 Muse4AI 使用 Muse。"} },
  { id: "settings", order: 9, title: { en: "Settings & remote access", vi: "Cài đặt & truy cập từ xa", zh: "设置与远程访问"}, summary: { en: "Language, notifications, sharing a public link, updates and backups.", vi: "Ngôn ngữ, thông báo, chia sẻ link công khai, cập nhật và sao lưu.", zh: "语言、通知、分享公开链接、更新与备份。"} },
  { id: "help", order: 10, title: { en: "Troubleshooting", vi: "Khắc phục sự cố", zh: "故障排除"}, summary: { en: "Fix common problems and look up words.", vi: "Sửa lỗi hay gặp và tra từ.", zh: "修复常见问题并查询术语。"} },
  { id: "credits", order: 11, title: { en: "Open source & credits", vi: "Mã mở & ghi nguồn", zh: "开源与致谢"}, summary: { en: "The projects Muse4AI learned from and is built with.", vi: "Các dự án Muse4AI tham khảo và được xây dựng cùng.", zh: "Muse4AI 借鉴和使用的项目。"} },
];
