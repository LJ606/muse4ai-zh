import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_BATCH: DocArticle[] = [
  {
    slug: "batches",
    chapter: "batch",
    order: 1,
    title: { en: "Create and follow batches", vi: "Tạo và theo dõi lô", zh: "创建与跟进批量任务" },
    summary: {
      en: "Turn a pasted or imported prompt list into a batch, check each row, and follow progress without sending jobs one by one.",
      vi: "Tạo lô từ danh sách prompt đã dán hoặc nhập từ tệp, kiểm tra từng dòng và theo dõi tiến trình mà không gửi từng lượt.",
      zh: "把粘贴或导入的提示词列表变成一个批量任务，逐行检查，并跟进进度，不用逐个发送任务。"
    },
    before: [
      {
        en: "Prepare one prompt per line, or a TXT or CSV file.",
        vi: "Chuẩn bị mỗi dòng một prompt hoặc tệp TXT hay CSV.",
        zh: "每行准备一个提示词，或准备一个 TXT 或 CSV 文件。"
      },
      {
        en: "Have ready Muse accounts with enough usage limit for the work you intend to send.",
        vi: "Có tài khoản Muse sẵn sàng và còn hạn mức cho công việc bạn định gửi.",
        zh: "准备好就绪的 Muse 账号，用量额度要够完成你打算发送的工作。"
      },
      {
        en: "Review the list for accidental duplicates before importing it.",
        vi: "Rà soát danh sách để loại prompt trùng ngoài ý muốn trước khi nhập.",
        zh: "导入前检查列表，排除意外重复的提示词。"
      },
    ],
    steps: [
      {
        title: { en: "1. Create a batch", vi: "1. Tạo lô mới", zh: "1. 创建批量任务" },
        body: {
          en: `In ${FACTS.productName}, open Batches and choose New batch. Give it a recognizable name and choose the default type, creation mode, repeat setting, and account.`,
          vi: `Trong ${FACTS.productName}, mở Hàng loạt rồi chọn Lô mới. Đặt tên dễ nhận biết và chọn mặc định cho loại, cách tạo, số lần lặp cùng tài khoản.`,
          zh: `在 ${FACTS.productName} 中打开「批量」，选择「新建批量任务」。起一个容易识别的名字，并选择默认类型、创建方式、重复设置和账号。`
        },
        shot: "batch-new",
      },
      {
        title: { en: "2. Paste or import prompts", vi: "2. Dán hoặc nhập prompt", zh: "2. 粘贴或导入提示词" },
        body: {
          en: "Paste one prompt per line, choose a TXT or CSV file, or drop the file into the import area. Use the CSV sample shown in the app if you need columns for per-row settings.",
          vi: "Dán mỗi dòng một prompt, bấm Chọn tệp… để nhập TXT hoặc CSV, hay thả tệp vào vùng nhập. Dùng Xem mẫu CSV trong app nếu cần cột thiết lập riêng cho từng dòng.",
          zh: "每行粘贴一个提示词，选择 TXT 或 CSV 文件，或把文件拖到导入区域。如果需要按行设置，请使用应用内显示的 CSV 示例。"
        },
      },
      {
        title: { en: "3. Validate every row", vi: "3. Kiểm tra từng dòng", zh: "3. 逐行验证" },
        body: {
          en: "Run the list check, review the parsed rows, and fix errors. Check the total number of jobs, including repeats. Changing defaults applies to the next list check, so check again after changing them.",
          vi: "Bấm Kiểm danh sách, xem các dòng đã đọc và sửa lỗi. Kiểm tra tổng số lượt, gồm cả lần lặp. Đổi mặc định chỉ áp dụng cho lần đọc tiếp theo, nên hãy kiểm lại sau khi đổi.",
          zh: "运行列表检查，查看解析出的行并修复错误。检查任务总数，包括重复次数。更改默认值只对下一次列表检查生效，所以改完后要重新检查。"
        },
      },
      {
        title: { en: "4. Start or save a draft", vi: "4. Bắt đầu hoặc lưu nháp", zh: "4. 开始或保存草稿" },
        body: {
          en: "Save a draft if the list is not ready. Otherwise, use the start button after confirming its job count. Each created job uses the selected accounts' Muse usage limit.",
          vi: "Chọn Lưu nháp nếu danh sách chưa sẵn sàng. Nếu đã kiểm tra xong, xác nhận số lượt trên nút Bắt đầu rồi chạy. Mỗi lượt tạo dùng hạn mức Muse của các tài khoản được chọn.",
          zh: "如果列表还没准备好，先保存草稿。否则，确认开始按钮上的任务数量后再开始。每个创建的任务都会消耗所选账号的 Muse 用量额度。"
        },
      },
      {
        title: { en: "5. Follow the batch", vi: "5. Theo dõi lô", zh: "5. 跟进批量任务" },
        body: {
          en: "Open the batch to follow finished, running, waiting, failed, and review counts. Pause or resume when needed. Finished files appear in Library, grouped by the batch name.",
          vi: "Mở lô để xem số lượt đã xong, đang chạy, đang chờ, lỗi và cần xem. Dùng Tạm dừng hoặc Tiếp tục khi cần. Tệp hoàn chỉnh nằm trong Thư viện, nhóm theo tên lô.",
          zh: "打开批量任务，查看已完成、运行中、等待中、失败和待审核的数量。需要时可以暂停或继续。完成的文件出现在素材库中，按批量任务名称分组。"
        },
        shot: "batch-list",
      },
    ],
    success: {
      en: "The batch shows the intended number of jobs and its progress updates as results arrive in Library.",
      vi: "Lô hiển thị đúng số lượt dự kiến và tiến trình cập nhật khi kết quả xuất hiện trong Thư viện.",
      zh: "批量任务显示预期的任务数量，进度会随着结果进入素材库而更新。"
    },
    troubleshoot: [
      {
        q: {
          en: "The imported text has strange characters. What should I do?",
          vi: "Văn bản nhập vào có ký tự lạ thì làm sao?",
          zh: "导入的文本出现乱码，该怎么办？"
        },
        a: {
          en: "The file may not be UTF-8. Open it in Notepad, save it with UTF-8 encoding, then import and validate it again.",
          vi: "Tệp có thể chưa dùng UTF-8. Mở bằng Notepad, chọn Lưu thành với mã hoá UTF-8, rồi nhập và kiểm tra lại.",
          zh: "文件可能不是 UTF-8 编码。请用记事本打开，以 UTF-8 编码另存，然后重新导入并验证。"
        },
      },
      {
        q: {
          en: "Why are there more jobs than prompt lines?",
          vi: "Vì sao số lượt nhiều hơn số dòng prompt?",
          zh: "为什么任务数量比提示词行数多？"
        },
        a: {
          en: "Check the repeat default and any CSV repeat values. Repeated rows create separate jobs, so confirm the total before starting.",
          vi: "Kiểm tra mặc định Lặp mỗi dòng và giá trị lặp trong CSV. Mỗi lần lặp tạo lượt riêng, nên hãy xác nhận tổng trước khi chạy.",
          zh: "检查重复默认值和 CSV 里的重复值。重复的行会生成单独的任务，开始前请确认总数。"
        },
      },
      {
        q: {
          en: "Will cancelling the remainder stop jobs already generating?",
          vi: "Huỷ phần còn lại có dừng lượt đang tạo không?",
          zh: "取消剩余部分会停止正在生成的任务吗？"
        },
        a: {
          en: "No. The confirmation states that waiting jobs are cancelled while generating jobs continue until finished. Do not resubmit jobs needing review.",
          vi: "Không. Hộp xác nhận cho biết lượt chưa chạy sẽ bị huỷ, còn lượt đang tạo vẫn tiếp tục đến khi xong. Không gửi lại lượt đang cần kiểm tra.",
          zh: "不会。确认框会说明：等待中的任务会被取消，正在生成的任务会继续直到完成。不要重新提交待审核的任务。"
        },
      },
    ],
    related: ["queue", "library", "accounts-and-limits"],
    appRoute: "/batch",
    updated: "2026-11-02",
  },
];
