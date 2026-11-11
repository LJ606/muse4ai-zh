import type { DocArticle } from "../types";
import { FACTS } from "../facts";

export const DOCS_STUDIO: DocArticle[] = [
  {
    slug: "create-image",
    chapter: "studio",
    order: 1,
    title: { en: "Create an image", vi: "Tạo ảnh", zh: "创建图片" },
    summary: {
      en: "Create an image from a clear description in Studio, follow its progress, and find the finished file on your PC.",
      vi: "Tạo ảnh từ mô tả trong Studio, theo dõi tiến trình và tìm tệp kết quả trên máy để dùng cho công việc của bạn.",
      zh: "在 Studio 里用清晰的描述创建图片，跟进进度，并在电脑上找到完成的文件。"
    },
    before: [
      {
        en: "Have a Muse account ready with usage limit remaining.",
        vi: "Có tài khoản Muse sẵn sàng và còn hạn mức.",
        zh: "有已就绪的 Muse 账号，且剩余额度。"
      },
      {
        en: "Check that your library folder has room for new files.",
        vi: "Kiểm tra thư mục thư viện còn chỗ cho tệp mới.",
        zh: "检查素材库文件夹有空间存放新文件。"
      },
    ],
    steps: [
      {
        title: { en: "1. Select Image", vi: "1. Chọn Ảnh", zh: "1. 选择图片" },
        body: {
          en: "Open Studio, choose Image, and use the text creation mode for a new image. For editing an existing picture, see [Reference files](/docs/reference-files).",
          vi: "Mở Studio, chọn Ảnh rồi chọn Từ chữ để tạo ảnh mới. Nếu muốn sửa ảnh có sẵn, xem [Tệp tham chiếu](/docs/reference-files).",
          zh: "打开 Studio，选择「图片」，用文字创建模式生成新图片。要编辑已有图片，参见 [参考文件](/docs/reference-files)。"
        },
        shot: "studio-image",
      },
      {
        title: { en: "2. Describe the result", vi: "2. Mô tả kết quả", zh: "2. 描述想要的结果" },
        body: {
          en: "Describe the subject, setting, light, and style. For a shop photo, explain where the product should sit and what should be in the background.",
          vi: "Nêu chủ thể, bối cảnh, ánh sáng và phong cách. Với ảnh cho shop, hãy nói rõ sản phẩm đặt ở đâu và phông nền cần có gì.",
          zh: "描述主体、场景、光线和风格。如果是店铺照片，说明产品应放在哪里、背景里应有什么。"
        },
      },
      {
        title: { en: "3. Send once", vi: "3. Gửi một lần", zh: "3. 只发送一次" },
        body: {
          en: "Choose an account or leave account selection automatic, then send the request. If no account is ready, the job waits in Queue. Do not send it again just because it is waiting.",
          vi: "Chọn tài khoản hoặc giữ Tự động rồi gửi yêu cầu. Nếu chưa có tài khoản sẵn sàng, lượt sẽ nằm trong Hàng chờ. Đừng gửi lại chỉ vì lượt đang chờ.",
          zh: "选择一个账号，或保持自动选择账号，然后发送请求。如果没有就绪的账号，任务会在队列中等待。不要因为它在等待就再发一次。"
        },
      },
      {
        title: { en: "4. Review the saved image", vi: "4. Xem ảnh đã lưu", zh: "4. 查看已保存的图片" },
        body: {
          en: `Open the finished result in Studio or Library. Images normally arrive as ${FACTS.media.imageFormat}, around ${FACTS.media.imageWidth}×${FACTS.media.imageHeight}; inspect the actual file before using it.`,
          vi: `Mở kết quả hoàn chỉnh trong Studio hoặc Thư viện. Ảnh thường có định dạng ${FACTS.media.imageFormat}, khoảng ${FACTS.media.imageWidth}×${FACTS.media.imageHeight}; hãy kiểm tra tệp thực tế trước khi dùng.`,
          zh: `在 Studio 或素材库中打开已完成的结果。图片通常是 ${FACTS.media.imageFormat} 格式，约 ${FACTS.media.imageWidth}×${FACTS.media.imageHeight}；使用前请检查实际文件。`
        },
      },
    ],
    success: {
      en: "The job finishes, its image opens, and the downloaded file appears in Library.",
      vi: "Lượt hoàn tất, bạn mở được ảnh và tệp đã tải xuất hiện trong Thư viện.",
      zh: "任务完成，图片可以打开，下载的文件出现在素材库中。"
    },
    troubleshoot: [
      {
        q: { en: "Why is the job waiting?", vi: "Vì sao lượt vẫn đang chờ?", zh: "任务为什么在等待？" },
        a: {
          en: "Check Accounts for a ready account with remaining usage limit and a working proxy. Also check whether other jobs are using the available parallel slots.",
          vi: "Kiểm tra có tài khoản sẵn sàng, còn hạn mức và proxy hoạt động không. Các lượt khác cũng có thể đang dùng hết số việc chạy song song.",
          zh: "检查「账号」里是否有就绪的账号、剩余额度与可用代理。同时检查其他任务是否占用了可用的并行名额。"
        },
      },
      {
        q: {
          en: "The result is not what I wanted. What should I change?",
          vi: "Ảnh chưa đúng ý thì nên sửa gì?",
          zh: "结果不是我想要的，该改什么？"
        },
        a: {
          en: "Make the description more specific or attach a reference image. Sending another request creates another job and uses your Muse usage limit.",
          vi: "Viết mô tả cụ thể hơn hoặc thêm ảnh tham chiếu. Gửi yêu cầu mới sẽ tạo lượt mới và dùng hạn mức Muse của bạn.",
          zh: "把描述写得更具体，或附上一张参考图。再发一个请求会产生新任务，并消耗 Muse 用量额度。"
        },
      },
    ],
    related: ["reference-files", "queue", "library"],
    appRoute: "/studio",
    updated: "2026-11-02",
  },
  {
    slug: "create-video",
    chapter: "studio",
    order: 2,
    title: { en: "Create a video", vi: "Tạo video", zh: "创建视频" },
    summary: {
      en: "Describe a short video in Studio, submit it to Muse, and review the finished clip before using it in your project.",
      vi: "Mô tả video ngắn trong Studio, gửi yêu cầu đến Muse và xem lại clip hoàn chỉnh trước khi dùng cho dự án của bạn.",
      zh: "在 Studio 里描述一段短视频，提交给 Muse，并在用到项目中之前检查完成的片段。"
    },
    before: [
      {
        en: "Have a ready Muse account with usage limit remaining.",
        vi: "Có tài khoản Muse sẵn sàng và còn hạn mức.",
        zh: "有已就绪的 Muse 账号，且剩余额度。"
      },
      {
        en: "Plan one short scene and make room for the downloaded video.",
        vi: "Chuẩn bị một cảnh ngắn và chỗ trống để lưu video.",
        zh: "规划一个短场景，并为下载的视频留出空间。"
      },
    ],
    steps: [
      {
        title: { en: "1. Select Video", vi: "1. Chọn Video", zh: "1. 选择视频" },
        body: {
          en: "Open Studio and select Video. Use the text creation mode to start from a description rather than an existing image or MP4.",
          vi: "Mở Studio và chọn Video. Chọn Từ chữ để bắt đầu bằng mô tả thay vì dùng ảnh hoặc MP4 có sẵn.",
          zh: "打开 Studio，选择「视频」。用文字创建模式从描述开始，而不是用已有图片或 MP4。"
        },
        shot: "studio-video",
      },
      {
        title: { en: "2. Describe one short scene", vi: "2. Mô tả một cảnh ngắn", zh: "2. 描述一个短场景" },
        body: {
          en: `Muse clips are about ${FACTS.media.videoSeconds} seconds. Describe the subject, its motion, the camera movement, and the setting rather than asking for many scenes.`,
          vi: `Clip Muse dài khoảng ${FACTS.media.videoSeconds} giây. Hãy mô tả chủ thể, chuyển động, cách máy quay di chuyển và bối cảnh thay vì yêu cầu quá nhiều cảnh.`,
          zh: `Muse 的片段大约 ${FACTS.media.videoSeconds} 秒。描述主体、动作、运镜和场景，不要要求太多场景。`
        },
      },
      {
        title: { en: "3. Send and follow progress", vi: "3. Gửi và theo dõi", zh: "3. 发送并跟进进度" },
        body: {
          en: "Choose an account or automatic selection, then send once. Follow the job in Studio or Queue. If it needs review, inspect it instead of submitting a duplicate.",
          vi: "Chọn tài khoản hoặc Tự động rồi gửi một lần. Theo dõi lượt trong Studio hoặc Hàng chờ. Nếu lượt cần kiểm tra, hãy mở chi tiết thay vì gửi trùng.",
          zh: "选择一个账号或自动选择，然后只发送一次。在 Studio 或队列中跟进任务。如果需要审核，先检查它，不要提交重复任务。"
        },
      },
      {
        title: { en: "4. Play the finished clip", vi: "4. Phát clip hoàn chỉnh", zh: "4. 播放完成的片段" },
        body: {
          en: `Open the result and check motion, framing, and sound. Typical output is ${FACTS.media.videoWidth}×${FACTS.media.videoHeight} with ${FACTS.media.videoCodec}. Find the saved file in Library.`,
          vi: `Mở kết quả để kiểm tra chuyển động, khung hình và âm thanh. Tệp thường có kích thước ${FACTS.media.videoWidth}×${FACTS.media.videoHeight}, dùng ${FACTS.media.videoCodec}. Tìm tệp đã lưu trong Thư viện.`,
          zh: `打开结果，检查动作、构图和声音。典型输出为 ${FACTS.media.videoWidth}×${FACTS.media.videoHeight}，采用 ${FACTS.media.videoCodec}。在素材库中找到保存的文件。`
        },
      },
    ],
    success: {
      en: "The finished clip plays in the app and its downloaded file is available in Library.",
      vi: "Clip hoàn chỉnh phát được trong app và tệp đã tải có trong Thư viện.",
      zh: "完成的片段可以在应用内播放，下载的文件已在素材库中。"
    },
    troubleshoot: [
      {
        q: {
          en: "Why is the clip shorter than the story I described?",
          vi: "Vì sao clip ngắn hơn câu chuyện tôi mô tả?",
          zh: "为什么片段比我描述的故事短？"
        },
        a: {
          en: `Muse normally produces clips of about ${FACTS.media.videoSeconds} seconds. Simplify the request to one scene; do not assume a longer prompt produces a longer video.`,
          vi: `Muse thường tạo clip khoảng ${FACTS.media.videoSeconds} giây. Hãy rút yêu cầu còn một cảnh; mô tả dài hơn không đồng nghĩa video sẽ dài hơn.`,
          zh: `Muse 通常生成的片段约为 ${FACTS.media.videoSeconds} 秒。请把请求简化为一个场景；提示词更长并不意味着视频会更长。`
        },
      },
      {
        q: {
          en: "An image-to-video or editing option is unavailable. Why?",
          vi: "Vì sao tuỳ chọn ảnh thành video hoặc sửa video chưa dùng được?",
          zh: "图片转视频或编辑选项不可用，为什么？"
        },
        a: {
          en: "Some actions depend on what the current Muse version supports. Follow the app's notice rather than repeatedly resending the request.",
          vi: "Một số thao tác phụ thuộc khả năng của phiên bản Muse hiện tại. Làm theo thông báo trong app thay vì gửi lại nhiều lần.",
          zh: "有些操作取决于当前 Muse 版本支持什么。请按应用内的提示操作，不要反复重新发送请求。"
        },
      },
    ],
    related: ["edit-video", "extend-video", "reference-files", "library"],
    appRoute: "/studio",
    updated: "2026-11-03",
  },
  {
    slug: "edit-video",
    chapter: "studio",
    order: 3,
    title: { en: "Edit a video", vi: "Sửa video", zh: "编辑视频" },
    summary: {
      en: "Attach an MP4 in Studio, describe the change in words, and Muse returns a new edited video while your original file stays as it was.",
      vi: "Đính một tệp MP4 trong Studio, viết rõ muốn sửa gì; Muse trả về video mới đã sửa, tệp gốc của bạn vẫn giữ nguyên.",
      zh: "在 Studio 里附加一个 MP4，用文字描述要改的地方，Muse 会返回一段新的编辑后视频，原始文件保持原样。"
    },
    before: [
      {
        en: "Have a ready Muse account with usage limit remaining.",
        vi: "Có tài khoản Muse sẵn sàng và còn hạn mức.",
        zh: "有已就绪的 Muse 账号，且剩余额度。"
      },
      {
        en: "Keep the MP4 you want to change on your PC (a short clip works best).",
        vi: "Có sẵn tệp MP4 muốn sửa trên máy (clip ngắn cho kết quả tốt nhất).",
        zh: "把要改的 MP4 保存在电脑上（短片段效果最好）。"
      },
    ],
    steps: [
      {
        title: { en: "1. Choose Video, then Edit video", vi: "1. Chọn Video, rồi Sửa video", zh: "1. 选择「视频」，再选择「编辑视频」" },
        body: {
          en: "Open Studio and select Video. Open the creation method menu next to it and choose Edit video (MP4 → video).",
          vi: "Mở Studio và chọn Video. Mở menu cách tạo bên cạnh và chọn Sửa video (MP4 → video).",
          zh: "打开 Studio，选择「视频」。打开旁边的创建方式菜单，选择「编辑视频」（MP4 → 视频）。"
        },
        shot: "studio-video-edit",
      },
      {
        title: { en: "2. Attach the MP4", vi: "2. Đính tệp MP4", zh: "2. 附加 MP4" },
        body: {
          en: "Drag the MP4 into Studio or use the attach button. Check the small preview: it is the clip Muse will change. A video from Library can be attached the same way.",
          vi: "Kéo tệp MP4 vào Studio hoặc bấm nút đính kèm. Xem ô xem trước nhỏ: đó là clip Muse sẽ sửa. Video trong Thư viện cũng đính được theo cách này.",
          zh: "把 MP4 拖进 Studio，或使用附加按钮。查看小预览图：那就是 Muse 要修改的片段。素材库里的视频也可以用同样方式附加。"
        },
      },
      {
        title: { en: "3. Say what should change", vi: "3. Ghi rõ muốn đổi gì", zh: "3. 说清楚要改什么" },
        body: {
          en: "Write one clear change, for example “make the light warmer and add a slow push-in at the end”. Name what must stay the same, such as the product or the person.",
          vi: "Viết một thay đổi rõ ràng, ví dụ “làm ánh sáng ấm hơn và thêm cảnh đẩy máy chậm ở cuối”. Ghi luôn phần cần giữ nguyên, như sản phẩm hay nhân vật.",
          zh: "写一个明确的改动，例如“让光线更暖一些，结尾加一个缓慢推近”。同时注明必须保持不变的内容，比如产品或人物。"
        },
      },
      {
        title: { en: "4. Send once and compare", vi: "4. Gửi một lần và so sánh", zh: "4. 只发送一次并对比" },
        body: {
          en: "Send, follow the job in Studio or Queue, then play the new clip next to the original. The edited video is a new file in Library; the original is never overwritten.",
          vi: "Gửi, theo dõi lượt trong Studio hoặc Hàng chờ, rồi phát clip mới cạnh bản gốc. Video đã sửa là tệp mới trong Thư viện; bản gốc không bị ghi đè.",
          zh: "发送后在 Studio 或队列中跟进任务，然后把新片段与原片并排播放。编辑后的视频是素材库里的一个新文件；原始文件永远不会被覆盖。"
        },
      },
    ],
    success: {
      en: "A new edited clip plays in the app, appears in Library, and your original MP4 is unchanged.",
      vi: "Clip mới đã sửa phát được trong app, có trong Thư viện và tệp MP4 gốc của bạn vẫn nguyên vẹn.",
      zh: "一段新的编辑后片段可以在应用内播放，出现在素材库中，原始 MP4 保持不变。"
    },
    troubleshoot: [
      {
        q: { en: "The app refuses my file. Why?", vi: "App không nhận tệp của tôi, vì sao?", zh: "应用拒绝了我的文件，为什么？" },
        a: {
          en: "Edit video takes MP4 files only. Convert other formats to MP4 first, and keep the clip short; a very large file can take longer to send.",
          vi: "Sửa video chỉ nhận tệp MP4. Hãy đổi định dạng khác sang MP4 trước và giữ clip ngắn; tệp quá lớn sẽ gửi lâu hơn.",
          zh: "编辑视频只接受 MP4 文件。请先把其他格式转为 MP4，并保持片段较短；文件过大时发送会更慢。"
        },
      },
      {
        q: { en: "Is editing the same as extending?", vi: "Sửa video có giống kéo dài không?", zh: "编辑和续写是一回事吗？" },
        a: {
          en: "No. Editing changes a clip you attach and returns a new clip. Extending continues a Muse video from Library and returns one longer video; see Extend a video.",
          vi: "Không. Sửa video thay đổi clip bạn đính kèm và trả về clip mới. Kéo dài nối tiếp một video Muse trong Thư viện và trả về một video dài hơn; xem bài Kéo dài video.",
          zh: "不是。编辑是修改你附加的片段并返回一个新片段。续写是接着素材库里的 Muse 视频继续生成，返回一条更长的视频；参见「续写视频」。"
        },
      },
      {
        q: { en: "The result changed more than I asked.", vi: "Kết quả đổi nhiều hơn tôi muốn.", zh: "结果改动比我要求的多。" },
        a: {
          en: "Ask for one change at a time and say what must stay the same. Muse decides the final look, so compare before you use the new clip.",
          vi: "Mỗi lần chỉ yêu cầu một thay đổi và ghi rõ phần cần giữ. Muse quyết định hình ảnh cuối cùng, nên hãy so sánh trước khi dùng clip mới.",
          zh: "一次只提一个改动，并说明哪些内容必须保持不变。最终效果由 Muse 决定，所以使用新片段之前请先对比。"
        },
      },
    ],
    related: ["create-video", "extend-video", "reference-files", "library"],
    appRoute: "/studio",
    updated: "2026-11-03",
  },
  {
    slug: "ask-and-research",
    chapter: "studio",
    order: 4,
    title: { en: "Ask and research", vi: "Hỏi đáp và tìm hiểu tài liệu", zh: "提问与研究" },
    summary: {
      en: "Ask Muse a question or attach research files in Studio, then read the answer and continue the same conversation.",
      vi: "Đặt câu hỏi hoặc đính kèm tài liệu trong Studio, đọc câu trả lời của Muse rồi hỏi tiếp trong cùng hội thoại.",
      zh: "在 Studio 里向 Muse 提问或附加研究文件，然后阅读答案，并在同一个会话中继续提问。"
    },
    before: [
      {
        en: "Have a ready Muse account and check that Ask is available.",
        vi: "Có tài khoản Muse sẵn sàng và kiểm tra chế độ Hỏi đáp dùng được.",
        zh: "有已就绪的 Muse 账号，并确认「提问」功能可用。"
      },
      {
        en: "Prepare a clear question and any files you have permission to share with Muse.",
        vi: "Chuẩn bị câu hỏi rõ ràng và tài liệu bạn được phép gửi cho Muse.",
        zh: "准备一个明确的问题，以及你有权分享给 Muse 的文件。"
      },
      {
        en: "Consider a separate account for research because jobs on one account share its Muse memory.",
        vi: "Cân nhắc tài khoản riêng cho nghiên cứu vì các lượt trên cùng tài khoản dùng chung bộ nhớ Muse.",
        zh: "考虑用单独的账号做研究，因为同一账号上的任务共享 Muse 记忆。"
      },
    ],
    steps: [
      {
        title: { en: "1. Choose Ask", vi: "1. Chọn Hỏi đáp", zh: "1. 选择「提问」" },
        body: {
          en: `Open Studio in ${FACTS.productName} and select Ask. Choose the account you want to use for this conversation.`,
          vi: `Mở Studio trong ${FACTS.productName}, chọn Hỏi đáp rồi chọn tài khoản bạn muốn dùng cho hội thoại này.`,
          zh: `在 ${FACTS.productName} 中打开 Studio，选择「提问」，再选择本次会话要用的账号。`
        },
        shot: "studio-ask",
      },
      {
        title: { en: "2. Give context and attach files", vi: "2. Nêu bối cảnh và thêm tệp", zh: "2. 说明背景并附加文件" },
        body: {
          en: "Explain the task and the format you need. For example, ask for a short summary of a sales report. Attach relevant files and check their names before sending.",
          vi: "Nêu công việc và cách trình bày bạn cần. Ví dụ, nhờ tóm tắt ngắn báo cáo bán hàng. Đính kèm tài liệu liên quan và kiểm tra tên tệp trước khi gửi.",
          zh: "说明任务和你需要的格式。例如，请它简要总结一份销售报告。附加相关文件，发送前核对文件名。"
        },
      },
      {
        title: { en: "3. Send and read the answer", vi: "3. Gửi và đọc câu trả lời", zh: "3. 发送并阅读答案" },
        body: {
          en: "Send once and wait for the answer, which opens as an article. Check important claims against your source material before using them.",
          vi: "Gửi một lần rồi chờ câu trả lời được trình bày dạng bài viết. Đối chiếu thông tin quan trọng với tài liệu gốc trước khi sử dụng.",
          zh: "发送一次并等待答案，答案会以文章形式打开。使用之前，请对照原始资料核对重要说法。"
        },
      },
      {
        title: { en: "4. Continue or start fresh", vi: "4. Hỏi tiếp hoặc bắt đầu mới", zh: "4. 继续提问或重新开始" },
        body: {
          en: "Use the conversation continuation option for a follow-up. A conversation stays on the account that created it. Choose a new conversation when you want a separate thread.",
          vi: "Dùng tuỳ chọn tiếp hội thoại để hỏi thêm. Hội thoại chỉ chạy trên tài khoản đã tạo ra nó. Chọn Hỏi trong hội thoại mới khi muốn tách sang luồng khác.",
          zh: "要追问时，使用继续会话选项。会话属于创建它的账号。想另开一个话题时，选择新的会话。"
        },
      },
    ],
    success: {
      en: "You can read the answer and either continue its conversation or start a separate question.",
      vi: "Bạn đọc được câu trả lời và có thể hỏi tiếp trong hội thoại đó hoặc bắt đầu câu hỏi riêng.",
      zh: "你可以阅读答案，继续在该会话中提问，或另开一个问题。"
    },
    troubleshoot: [
      {
        q: {
          en: "Why can I not switch accounts for a follow-up?",
          vi: "Vì sao tôi không đổi được tài khoản khi hỏi tiếp?",
          zh: "追问时为什么不能换账号？"
        },
        a: {
          en: "The conversation belongs to its original Muse account. Start a new conversation to use another account.",
          vi: "Hội thoại thuộc tài khoản Muse đã tạo ra nó. Hãy bắt đầu hội thoại mới nếu muốn dùng tài khoản khác.",
          zh: "会话属于创建它的 Muse 账号。要使用另一个账号，请开始新的会话。"
        },
      },
      {
        q: {
          en: "A file was refused. What should I check?",
          vi: "Tệp bị từ chối thì cần kiểm tra gì?",
          zh: "文件被拒绝了，该检查什么？"
        },
        a: {
          en: "Read the attachment warning and check the file type, size, and total attachments. A refused file is not included just because it was dropped into Studio.",
          vi: "Đọc cảnh báo đính kèm, kiểm tra loại tệp, dung lượng và tổng số tệp. Tệp bị từ chối sẽ không được gửi chỉ vì bạn đã thả vào Studio.",
          zh: "阅读附加警告，检查文件类型、大小和附加文件总数。被拒绝的文件不会因为被拖进 Studio 就自动包含在内。"
        },
      },
    ],
    related: ["reference-files", "accounts-and-limits", "privacy-and-data"],
    appRoute: "/studio",
    updated: "2026-11-02",
  },
  {
    slug: "reference-files",
    chapter: "studio",
    order: 5,
    title: { en: "Use reference files", vi: "Dùng tệp tham chiếu", zh: "使用参考文件" },
    summary: {
      en: "Attach reference images, video, or research files in the right Studio mode and check them before submitting a job.",
      vi: "Đính kèm ảnh tham chiếu, video hoặc tài liệu đúng chế độ trong Studio và kiểm tra tệp trước khi gửi yêu cầu.",
      zh: "在正确的 Studio 模式下附加参考图片、视频或研究文件，提交任务前先检查它们。"
    },
    before: [
      {
        en: "Have local files you have permission to send to Muse.",
        vi: "Chuẩn bị tệp trên máy mà bạn được phép gửi cho Muse.",
        zh: "准备好你有权发送给 Muse 的本地文件。"
      },
      {
        en: "Have a ready account and decide whether you want image editing, video work, or questions about files.",
        vi: "Có tài khoản sẵn sàng và xác định bạn muốn sửa ảnh, làm video hay hỏi về tài liệu.",
        zh: "准备好就绪的账号，并确定是要编辑图片、处理视频，还是就文件提问。"
      },
    ],
    steps: [
      {
        title: { en: "1. Choose the right mode", vi: "1. Chọn đúng chế độ", zh: "1. 选择正确的模式" },
        body: {
          en: `In ${FACTS.productName} Studio, use Image for image editing, Video for video requests, or Ask for questions about documents. Select an editing mode when working from an existing image or MP4.`,
          vi: `Trong Studio của ${FACTS.productName}, chọn Ảnh để sửa ảnh, Video để làm video hoặc Hỏi đáp để hỏi về tài liệu. Chọn chế độ sửa phù hợp khi dùng ảnh hoặc MP4 có sẵn.`,
          zh: `在 ${FACTS.productName} 的 Studio 中，编辑图片用「图片」，视频请求用「视频」，就文档提问用「提问」。基于已有图片或 MP4 操作时，选择相应的编辑模式。`
        },
      },
      {
        title: { en: "2. Attach the files", vi: "2. Đính kèm tệp", zh: "2. 附加文件" },
        body: {
          en: "Use the attachment control to choose reference images. For video editing, use the MP4 attachment action in the appropriate mode. In Ask, attach documents through its file control or drop them into Studio.",
          vi: "Dùng nút đính kèm để chọn ảnh tham chiếu. Khi sửa video, dùng Thêm video MP4 trong chế độ phù hợp. Với Hỏi đáp, dùng nút đính kèm tệp hoặc thả tài liệu vào Studio.",
          zh: "使用附加控件选择参考图片。编辑视频时，在相应模式下使用 MP4 附加操作。在「提问」中，通过文件控件附加文档，或把文档拖进 Studio。"
        },
        shot: "studio-references",
      },
      {
        title: { en: "3. Check the attachment list", vi: "3. Kiểm tra danh sách đính kèm", zh: "3. 检查附加列表" },
        body: {
          en: "Check every thumbnail or filename and remove anything unrelated. Follow any size, count, or support warning. Do not assume all files from a multi-file drop were attached.",
          vi: "Kiểm tra từng ảnh thu nhỏ hoặc tên tệp, rồi bỏ tệp không liên quan. Làm theo cảnh báo về dung lượng, số lượng hoặc khả năng hỗ trợ. Đừng mặc định mọi tệp thả cùng lúc đều đã được đính kèm.",
          zh: "检查每个缩略图或文件名，删除无关内容。留意大小、数量或支持情况方面的警告。不要以为一次拖入多个文件就都已附加。"
        },
      },
      {
        title: { en: "4. Explain how to use them", vi: "4. Nói rõ cách dùng tệp", zh: "4. 说明文件的用途" },
        body: {
          en: "Describe what should stay, what should change, or which question the files should answer. Send once, then review the result before making another request.",
          vi: "Nêu phần cần giữ, phần cần đổi hoặc câu hỏi cần trả lời từ tài liệu. Gửi một lần rồi xem kết quả trước khi tạo yêu cầu khác.",
          zh: "描述哪些内容要保留、哪些要改，或文件应回答哪个问题。发送一次，提出下一个请求前先检查结果。"
        },
      },
    ],
    success: {
      en: "The intended files are visible in the composer before sending, and the result reflects the requested edit or question.",
      vi: "Các tệp cần dùng hiện trong ô soạn trước khi gửi, và kết quả đáp ứng yêu cầu sửa hoặc câu hỏi của bạn.",
      zh: "发送前，要用的文件已在编辑器中可见，结果也反映了所要求的编辑或问题。"
    },
    troubleshoot: [
      {
        q: {
          en: "I dropped several images but not all appeared. Why?",
          vi: "Tôi thả nhiều ảnh nhưng không thấy đủ. Vì sao?",
          zh: "我拖了好几张图片，但没有全部出现，为什么？"
        },
        a: {
          en: "Media-mode drops can select only the first matching image. Use the attachment control to add more and check the visible list before sending.",
          vi: "Khi thả tệp ở chế độ tạo ảnh hoặc video, app có thể chỉ lấy ảnh phù hợp đầu tiên. Dùng nút đính kèm để thêm và kiểm tra danh sách trước khi gửi.",
          zh: "在媒体模式下拖放时，可能只会选中第一张匹配的图片。请使用附加控件添加更多内容，发送前检查可见列表。"
        },
      },
      {
        q: {
          en: "My MP4 was not attached when I dropped it. What now?",
          vi: "Thả MP4 nhưng tệp không được đính kèm thì làm sao?",
          zh: "拖入 MP4 后没有附加成功，该怎么办？"
        },
        a: {
          en: "Choose the video-editing mode and use its MP4 attachment action. General media drops are not a substitute for that control.",
          vi: "Chọn chế độ Sửa video rồi dùng Thêm video MP4. Thả tệp vào vùng tạo ảnh hoặc video không thay thế thao tác này.",
          zh: "选择视频编辑模式，并使用其中的 MP4 附加操作。用常规方式拖放媒体文件不能代替这个控件。"
        },
      },
      {
        q: {
          en: "Can I reuse a finished image?",
          vi: "Tôi có dùng lại ảnh đã tạo được không?",
          zh: "已完成的图片可以重复使用吗？"
        },
        a: {
          en: "Yes. Open the image in Library and use its reference-image action to bring it back into Studio.",
          vi: "Có. Mở ảnh trong Thư viện rồi chọn Dùng làm ảnh tham chiếu để đưa ảnh trở lại Studio.",
          zh: "可以。在素材库中打开图片，选择「用作参考图」，把它带回 Studio。"
        },
      },
    ],
    related: ["create-image", "create-video", "ask-and-research", "library"],
    appRoute: "/studio",
    updated: "2026-11-02",
  },
];
