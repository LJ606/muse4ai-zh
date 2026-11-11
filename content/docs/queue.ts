import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_QUEUE: DocArticle[] = [
  {
    slug: "queue",
    chapter: "queue",
    order: 1,
    title: { en: "Follow jobs in Queue", vi: "Theo dõi lượt trong Hàng chờ", zh: "在队列中跟进任务" },
    summary: {
      en: "Track waiting and running jobs, preview finished results, and handle requests that need review without creating duplicates.",
      vi: "Theo dõi lượt đang chờ và đang chạy, xem nhanh kết quả và xử lý lượt cần kiểm tra để tránh tạo yêu cầu trùng.",
      zh: "跟踪等待中和运行中的任务，预览已完成的结果，处理需要审核的请求，且不产生重复任务。"
    },
    before: [
      {
        en: "Send a request from Studio, a batch, or a connected agent.",
        vi: "Gửi yêu cầu từ Studio, một lô hoặc agent đã kết nối.",
        zh: "从 Studio、批量任务或已连接的 agent 发送一个请求。"
      },
      {
        en: `Keep ${FACTS.productName} running while it processes work.`,
        vi: `Giữ ${FACTS.productName} chạy trong lúc xử lý công việc.`,
        zh: `处理任务期间保持 ${FACTS.productName} 运行。`
      },
    ],
    steps: [
      {
        title: { en: "1. Find the job", vi: "1. Tìm lượt cần xem", zh: "1. 找到任务" },
        body: {
          en: "Open Queue and identify the job by its thumbnail and prompt. Read its status before taking action: it may be waiting, running, finished, failed, cancelled, or awaiting review.",
          vi: "Mở Hàng chờ, nhận diện lượt bằng ảnh thu nhỏ và prompt. Đọc trạng thái trước khi thao tác: lượt có thể đang chờ, đang chạy, đã xong, lỗi, đã huỷ hoặc cần kiểm tra.",
          zh: "打开队列，通过缩略图和提示词识别任务。操作前先读状态：它可能在等待、运行、已完成、失败、已取消，或等待审核。"
        },
        shot: "queue-list",
      },
      {
        title: { en: "2. Preview a result", vi: "2. Xem nhanh kết quả", zh: "2. 预览结果" },
        body: {
          en: "Hover over or focus a job to open its quick preview. Use this to recognize the result without opening each job's full details.",
          vi: "Di chuột lên lượt hoặc đưa tiêu điểm bàn phím tới lượt để xem nhanh. Bạn có thể nhận ra kết quả mà không cần mở chi tiết từng lượt.",
          zh: "把鼠标悬停在任务上，或用键盘把焦点移到任务上，打开快速预览。这样不用打开每个任务的完整详情就能认出结果。"
        },
        shot: "queue-preview",
      },
      {
        title: { en: "3. Open full details", vi: "3. Mở chi tiết", zh: "3. 打开完整详情" },
        body: {
          en: "Click the job to open its drawer. Check the prompt, result, files, and available actions. Open the finished file or its folder from here when those actions are available.",
          vi: "Bấm vào lượt để mở ngăn chi tiết. Kiểm tra prompt, kết quả, tệp và thao tác hiện có. Mở tệp hoàn chỉnh hoặc thư mục từ đây khi có nút tương ứng.",
          zh: "点击任务打开详情抽屉。检查提示词、结果、文件和可用操作。有对应操作时，可从这里打开完成的文件或所在文件夹。"
        },
        shot: "queue-drawer",
      },
      {
        title: { en: "4. Handle review without resending", vi: "4. Kiểm tra mà không gửi trùng", zh: "4. 审核，但不要重新发送" },
        body: {
          en: "Do not resubmit a job marked as needing review. The app is unsure whether Muse received it. Inspect Muse history and use Import from Muse history if a matching result exists; this retrieves a result rather than creating another one.",
          vi: "Không gửi lại lượt mang trạng thái Cần anh xem. App chưa chắc Muse đã nhận yêu cầu hay chưa. Kiểm tra lịch sử Muse và dùng Nhập từ lịch sử Muse nếu có kết quả phù hợp; thao tác này lấy kết quả, không tạo lượt mới.",
          zh: "不要重新提交标记为待审核的任务。应用不确定 Muse 是否已收到它。请检查 Muse 历史记录，如果有匹配的结果，使用「从 Muse 历史记录导入」；这是取回结果，而不是再创建一个任务。"
        },
      },
    ],
    success: {
      en: "You can identify the job's current state, open its result, and avoid duplicate submissions when delivery is uncertain.",
      vi: "Bạn xác định được trạng thái hiện tại, mở được kết quả và tránh gửi trùng khi chưa rõ Muse đã nhận yêu cầu hay chưa.",
      zh: "你可以确认任务的当前状态、打开结果，并在投递情况不确定时避免重复提交。"
    },
    troubleshoot: [
      {
        q: {
          en: "Why does a job stay in the waiting state?",
          vi: "Vì sao lượt cứ ở trạng thái chờ?",
          zh: "任务为什么一直处于等待状态？"
        },
        a: {
          en: "Check account readiness, usage limit, proxy health, and parallel-job availability. A paused batch can also keep its unsent jobs waiting.",
          vi: "Kiểm tra tài khoản, hạn mức, proxy và số việc chạy song song còn trống. Lô đang tạm dừng cũng khiến các lượt chưa gửi tiếp tục chờ.",
          zh: "检查账号就绪情况、用量额度、代理健康状况和并行任务名额。已暂停的批量任务也会让未发送的任务继续等待。"
        },
      },
      {
        q: {
          en: "Is a job needing review the same as a failed job?",
          vi: "Lượt cần kiểm tra có giống lượt lỗi không?",
          zh: "待审核的任务和失败的任务是一回事吗？"
        },
        a: {
          en: "No. Muse may already have received it. Do not use a fresh Studio request or another job to repeat it; inspect the original job and Muse history first.",
          vi: "Không. Muse có thể đã nhận lượt đó. Đừng tạo yêu cầu mới trong Studio hoặc lượt khác để lặp lại; hãy kiểm tra lượt gốc và lịch sử Muse trước.",
          zh: "不是。Muse 可能已经收到它。不要用新的 Studio 请求或其他任务重复提交；先检查原始任务和 Muse 历史记录。"
        },
      },
      {
        q: {
          en: "Why are retry actions different between jobs?",
          vi: "Vì sao các lượt có nút thử lại khác nhau?",
          zh: "为什么不同任务的重试操作不一样？"
        },
        a: {
          en: "Available actions depend on the job's state and whether the app knows Muse received it. Resolve the displayed cause instead of assuming every job is safe to resend.",
          vi: "Thao tác phụ thuộc trạng thái và việc app có biết chắc Muse đã nhận lượt hay không. Hãy xử lý nguyên nhân được hiển thị, không mặc định lượt nào cũng có thể gửi lại an toàn.",
          zh: "可用操作取决于任务状态，以及应用是否确定 Muse 已收到它。请处理显示的原因，不要以为每个任务都可以安全重发。"
        },
      },
    ],
    related: ["accounts-and-limits", "batches", "library", "troubleshooting"],
    appRoute: "/queue",
    updated: "2026-11-02",
  },
];
