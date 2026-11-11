import type { UseCase } from "../types";
import { FACTS } from "../facts";

const l = (en: string, vi: string, zh?: string): UseCase["title"] => (zh === undefined ? { en, vi } : { en, vi, zh });

const clipLimit = l(
  `Muse clips are about ${FACTS.media.videoSeconds} s at ${FACTS.media.videoWidth}×${FACTS.media.videoHeight}; assemble the final video in an editor such as CapCut or Remotion.`,
  `Clip Muse dài khoảng ${FACTS.media.videoSeconds} giây, độ phân giải ${FACTS.media.videoWidth}×${FACTS.media.videoHeight}; bạn ghép video hoàn chỉnh bằng CapCut hoặc Remotion.`, `Muse 生成的片段约为 ${FACTS.media.videoSeconds} 秒，尺寸为 ${FACTS.media.videoWidth}×${FACTS.media.videoHeight}；请在 CapCut 或 Remotion 等编辑器中拼接成最终视频。`,
);

const usageLimit = l(
  "Generation uses your own Muse account's usage limit. Review a small sample before requesting a larger batch.",
  "Việc tạo ảnh và video dùng hạn mức tài khoản Muse của bạn. Hãy duyệt một nhóm mẫu trước khi yêu cầu tạo cả loạt.", "生成内容会消耗你自己的 Muse 账号额度。先查看少量样品，再请求更大批量的生成。",
);

const consistencyLimit = l(
  "Character and product consistency is not guaranteed. Compare every result with your references before using it.",
  "Nhân vật và sản phẩm có thể khác nhau giữa các kết quả. Hãy đối chiếu từng ảnh, clip với tài liệu tham chiếu trước khi dùng.", "人物和产品在各次生成中可能不一致。使用前请把每个结果都与参考图对照检查。",
);

const commercialDisclosure = l(
  "Label AI-generated content and disclose affiliate links or ads wherever applicable under the platform's rules.",
  "Gắn nhãn nội dung do AI tạo; công khai liên kết tiếp thị hoặc nội dung quảng cáo khi có, theo quy định của nền tảng.", "请按平台规则为 AI 生成内容打上标签，并在适用时披露联盟链接或广告内容。",
);

export const USE_CASE_LIST: UseCase[] = [
  {
    slug: "affiliate-videos",
    category: "sales",
    title: l(
      "Affiliate videos with clear product details",
      "Video affiliate rõ thông tin, dễ dựng lại", "带清晰产品信息的联盟视频",
    ),
    summary: l(
      "Plan affiliate videos from real product photos, then generate supporting clips for TikTok Shop edits without inventing product claims.",
      "Tạo video AI cho TikTok Shop affiliate từ ảnh sản phẩm thật, có cảnh phụ và lời giới thiệu để bạn duyệt trước khi dựng.", "根据真实产品照片规划联盟视频，再生成辅助片段用于 TikTok Shop 剪辑，不编造产品卖点。",
    ),
    who: l(
      "TikTok Shop affiliates and creators who have checked the product themselves.",
      "Người làm TikTok Shop affiliate, KOC đã kiểm tra sản phẩm thực tế.", "已亲自检查过产品的 TikTok Shop 联盟推广者和创作者。",
    ),
    outcome: l(
      "A reviewed script, a shot list, and supporting images and clips ready for your editor.",
      "Kịch bản đã duyệt, danh sách cảnh và bộ ảnh, clip phụ để bạn đưa vào phần mềm dựng.", "一份已审核的脚本、一份分镜表，以及可直接交给剪辑的配套图片和片段。",
    ),
    lanes: {
      you: l(
        "Provide real product photos, verified features, your experience, and the affiliate disclosure.",
        "Gửi ảnh sản phẩm thật, tính năng đã kiểm chứng, trải nghiệm của bạn và thông tin tiếp thị liên kết.", "提供真实产品照片、已核实的产品特点、你的使用体验和联盟推广声明。",
      ),
      agent: l(
        "Draft the hook and shot list, separate verified claims from unknowns, and request approved visuals.",
        "Viết câu mở đầu, chia cảnh, tách thông tin đã kiểm chứng khỏi điều chưa rõ rồi yêu cầu tạo cảnh đã duyệt.", "起草开场和分镜表，把已核实的信息与未知项区分开，并请求已批准的视觉素材。",
      ),
      muse4ai: l(
        "Send the agent's image and video requests to your Muse account and return the generated assets.",
        "Chuyển yêu cầu tạo ảnh, video của agent tới tài khoản Muse của bạn và trả lại các tệp kết quả.", "把 agent 的图片和视频请求发送到你的 Muse 账号，并返回生成的素材。",
      ),
    },
    prompt: l(
      "Use these real photos and my notes about this desk lamp to plan a TikTok Shop affiliate video. Do not invent benefits or say I tested anything outside my notes. Ask me to approve the script, then request supporting visuals through Muse4AI. Mark where the AI and affiliate disclosures belong.",
      "Dựa vào ảnh thật và ghi chú của tôi về đèn bàn này, lên kịch bản video TikTok Shop affiliate. Không tự thêm công dụng hay trải nghiệm dùng thử. Cho tôi duyệt kịch bản rồi mới nhờ Muse4AI tạo cảnh phụ. Đánh dấu chỗ cần ghi nhãn AI và thông báo tiếp thị liên kết.", "用这些实拍照片和我关于这盏台灯的笔记，规划一条 TikTok Shop 联盟视频。不要编造产品优点，也不要说我测试过笔记以外的东西。请先让我审核脚本，再通过 Muse4AI 请求辅助视觉素材，并标出 AI 标注和联盟声明应放的位置。",
    ),
    media: ["uc-affiliate-videos-1", "uc-affiliate-videos-2"],
    limits: [clipLimit, usageLimit, consistencyLimit],
    docs: ["reference-files", "create-video", "library"],
    related: ["product-photos", "sales-videos", "short-ads"],
    disclosure: commercialDisclosure,
    featured: true,
    rank: 1,
  },
  {
    slug: "product-photos",
    category: "sales",
    title: l("Product photos for a consistent shop set", "Bộ ảnh sản phẩm cho shop online", "一套风格统一的店铺产品图"),
    summary: l(
      "Create AI product photo concepts from real references, then check shape, color, and packaging before using them in your shop.",
      "Tạo ảnh sản phẩm AI từ ảnh thật để thử bối cảnh cho shop Shopee; kiểm tra màu, hình dáng và bao bì trước khi đăng bán.", "根据真实参考图生成 AI 产品图创意，使用前先核对形状、颜色和包装，再用于店铺上架。",
    ),
    who: l(
      "Shopee sellers and small shop teams preparing product listings.",
      "Chủ shop Shopee và nhóm bán hàng cần chuẩn bị ảnh đăng sản phẩm.", "正在准备商品上架图的 Shopee 卖家和小型店铺团队。",
    ),
    outcome: l(
      "A reviewed set of product scene concepts, with unsuitable variations removed.",
      "Bộ ảnh bối cảnh sản phẩm đã duyệt, loại bỏ những ảnh làm sai đặc điểm hàng thật.", "一套已审核的产品场景图创意，已去掉与实物特征不符的版本。",
    ),
    lanes: {
      you: l(
        "Supply clear product photos and identify details that must not change.",
        "Gửi ảnh rõ sản phẩm và chỉ ra những chi tiết không được thay đổi.", "提供清晰的产品照片，并指出哪些细节绝不能改动。",
      ),
      agent: l(
        "Propose backgrounds and lighting, request image variations, and organize them for comparison.",
        "Đề xuất nền, ánh sáng, yêu cầu tạo các phương án ảnh và sắp xếp để bạn đối chiếu.", "建议背景和灯光，请求图片的不同版本，并整理好方便你对照比较。",
      ),
      muse4ai: l(
        "Pass image prompts and references to Muse and return generated scene variations.",
        "Gửi lời nhắc và ảnh tham chiếu tới Muse, trả lại các phương án bối cảnh được tạo.", "把图片提示词和参考图发送给 Muse，返回生成的场景版本。",
      ),
    },
    prompt: l(
      "Use these photos of my ceramic mug to propose clean listing backgrounds. Keep its handle, glaze color, and proportions as reference requirements. Create a small sample through Muse4AI for my review. Do not add labels or imply that the generated images are real product photographs.",
      "Dùng ảnh chiếc cốc gốm này để đề xuất nền đăng bán trên Shopee. Lấy quai cốc, màu men và tỷ lệ làm yêu cầu tham chiếu. Nhờ Muse4AI tạo một nhóm mẫu nhỏ để tôi kiểm tra. Không thêm nhãn hay giới thiệu ảnh tạo ra là ảnh chụp sản phẩm thật.", "用我这只陶瓷马克杯的照片，建议干净的上架图背景。以杯把、釉色和比例作为参考要求。通过 Muse4AI 先生成少量样品供我审核。不要添加标签，也不要暗示生成的图片是真实的产品照片。",
    ),
    media: ["uc-product-photos-1", "uc-product-photos-2"],
    limits: [
      usageLimit,
      consistencyLimit,
      l(
        "Inspect dimensions, materials, labels, and included accessories; generated images must not misrepresent what buyers receive.",
        "Kiểm tra kích thước, chất liệu, nhãn và phụ kiện; ảnh tạo ra không được khiến khách hiểu sai về hàng sẽ nhận.", "检查尺寸、材质、标签和附带配件；生成的图片不得让买家误解收到的商品。",
      ),
    ],
    docs: ["create-image", "reference-files", "batches"],
    related: ["affiliate-videos", "restaurant-menus", "sales-videos"],
    disclosure: commercialDisclosure,
    featured: true,
    rank: 2,
  },
  {
    slug: "lesson-videos",
    category: "education",
    title: l("Lesson videos with reviewed illustrations", "Video bài giảng có minh hoạ dễ hiểu", "配有审核过的插图的课程视频"),
    summary: l(
      "Prepare lesson videos with AI illustrations and short opening clips, while keeping explanations and classroom examples under teacher review.",
      "Làm video bài giảng với ảnh minh hoạ và clip mở bài cho giáo viên THCS; bạn kiểm tra kiến thức trước khi đưa vào bài giảng điện tử.", "用 AI 插图和简短开场片段制作课程视频，讲解内容和课堂示例始终由教师审核把关。",
    ),
    who: l(
      "Middle school teachers and tutors preparing visual explanations.",
      "Giáo viên THCS và gia sư cần hình ảnh để giải thích bài học.", "正在准备可视化讲解的中学教师和家教。",
    ),
    outcome: l(
      "A lesson outline, reviewed illustrations, and short clips to insert into your teaching materials.",
      "Dàn ý bài học, ảnh minh hoạ đã kiểm tra và clip ngắn để chèn vào học liệu.", "一份课程大纲、已审核的插图和可插入教学材料的短片段。",
    ),
    lanes: {
      you: l(
        "Provide the learning objective, grade level, approved source material, and likely misconceptions.",
        "Gửi mục tiêu bài học, khối lớp, tài liệu được phép dùng và những chỗ học sinh hay hiểu sai.", "提供学习目标、年级、允许使用的教材，以及学生容易误解的地方。",
      ),
      agent: l(
        "Break the concept into scenes, draft narration, and request visuals after you approve the explanation.",
        "Chia kiến thức thành từng cảnh, soạn lời dẫn và yêu cầu tạo hình sau khi bạn duyệt cách giải thích.", "把知识点拆解成场景，起草旁白，在你批准讲解内容后再请求视觉素材。",
      ),
      muse4ai: l(
        "Generate illustrative images and short clips through Muse for your lesson.",
        "Tạo ảnh minh hoạ và clip ngắn qua Muse để bạn dùng trong bài giảng.", "通过 Muse 为你的课程生成插图和短片段。",
      ),
    },
    prompt: l(
      "Help me plan a lesson video about the water cycle for middle school students. Use my attached lesson notes, flag any uncertain explanation, and propose illustrative scenes. After I approve, ask Muse4AI for visuals without embedded labels; I will add accurate labels in my slides.",
      "Giúp tôi soạn video bài giảng về vòng tuần hoàn nước cho học sinh THCS. Bám theo giáo án đính kèm, đánh dấu chỗ chưa chắc và đề xuất cảnh minh hoạ. Sau khi tôi duyệt, nhờ Muse4AI tạo hình không có chữ; tôi sẽ thêm nhãn chính xác trong slide.", "帮我为中学生规划一节关于水循环的课程视频。使用我附上的教案，标出不确定的讲解内容，并建议配图场景。等我批准后，再请 Muse4AI 生成不带文字的视觉素材；我会在幻灯片里添加准确的标签。",
    ),
    media: ["uc-lesson-videos-1", "uc-lesson-videos-2"],
    limits: [
      clipLimit,
      usageLimit,
      l(
        "Check every explanation against your teaching sources. AI illustrations are not scientific evidence or historical records.",
        "Đối chiếu mọi lời giải thích với tài liệu dạy học. Hình AI không phải bằng chứng khoa học hay tư liệu lịch sử.", "把每处讲解都与你的教学资料核对。AI 插图不是科学证据，也不是历史记录。",
      ),
    ],
    docs: ["ask-and-research", "reference-files", "create-video"],
    related: ["ngo-explainers", "storyboards", "research-to-visuals"],
    featured: true,
    rank: 3,
  },
  {
    slug: "short-ads",
    category: "sales",
    title: l("Short ads built from approved scenes", "Video quảng cáo ngắn từ cảnh đã duyệt", "用已批准场景制作的短广告"),
    summary: l(
      "Create short AI ad concepts with separate hooks, product scenes, and closing shots, then assemble approved clips in your editor.",
      "Tạo video quảng cáo bằng AI với câu mở đầu, cảnh sản phẩm và cảnh kết riêng; duyệt nội dung rồi ghép clip trong CapCut.", "用 AI 制作短广告创意，开场、产品场景和结尾镜头各自独立，审核通过后再在编辑器里拼接。",
    ),
    who: l(
      "Marketers and small businesses testing creative directions for paid ads.",
      "Nhân viên marketing và doanh nghiệp nhỏ muốn thử hướng hình ảnh cho quảng cáo.", "正在为付费广告测试创意方向的营销人员和小型企业。",
    ),
    outcome: l(
      "Alternative ad scripts and approved scene assets for an edited short ad.",
      "Các phương án kịch bản quảng cáo và tư liệu từng cảnh đã duyệt để dựng video ngắn.", "多套备选广告脚本和已批准的场景素材，可剪辑成一条短广告。",
    ),
    lanes: {
      you: l(
        "Set the audience, offer, approved claims, brand references, and platform requirements.",
        "Nêu người xem, ưu đãi, thông tin được phép quảng cáo, mẫu thương hiệu và yêu cầu nền tảng.", "确定受众、优惠、已批准的宣传内容、品牌参考素材和平台要求。",
      ),
      agent: l(
        "Draft distinct hooks and shot plans, then request visuals only for the direction you select.",
        "Viết các câu mở đầu và phương án chia cảnh, chỉ yêu cầu tạo hình cho hướng bạn chọn.", "起草不同的开场和分镜方案，只为你选定的方向请求视觉素材。",
      ),
      muse4ai: l(
        "Generate short scene clips and supporting images through your Muse account.",
        "Tạo clip từng cảnh và ảnh bổ trợ qua tài khoản Muse của bạn.", "通过你的 Muse 账号生成短场景片段和配套图片。",
      ),
    },
    prompt: l(
      "Plan a short ad for our reusable lunch box using these approved product claims. Offer two different hooks without inventing testimonials. Let me choose a direction before requesting clips through Muse4AI. Leave price, captions, and the ad disclosure for the final edit.",
      "Lên video quảng cáo ngắn cho hộp cơm dùng nhiều lần, chỉ dùng các thông tin sản phẩm tôi gửi. Đề xuất hai câu mở đầu, không bịa lời khách hàng. Đợi tôi chọn hướng rồi mới nhờ Muse4AI tạo clip. Giá, phụ đề và nhãn quảng cáo sẽ thêm khi dựng.", "用这些已批准的产品信息，为我们的可重复使用饭盒规划一条短广告。提供两种不同的开场，不要编造用户评价。先让我选定方向，再通过 Muse4AI 请求片段。价格、字幕和广告声明留到最后剪辑时再加。",
    ),
    media: ["uc-short-ads-1", "uc-short-ads-2"],
    limits: [
      clipLimit,
      usageLimit,
      l(
        "Review claims and platform ad policies yourself. Product details may drift, and ad approval is not guaranteed.",
        "Bạn cần tự kiểm tra lời quảng cáo và chính sách nền tảng. Chi tiết sản phẩm có thể sai lệch; không bảo đảm quảng cáo được duyệt.", "请自行审核宣传内容和平台广告政策。产品细节可能出现偏差，广告能否通过审核并不确定。",
      ),
    ],
    docs: ["create-video", "reference-files", "queue"],
    related: ["affiliate-videos", "sales-videos", "social-campaigns"],
    disclosure: commercialDisclosure,
    featured: true,
    rank: 4,
  },
  {
    slug: "sales-videos",
    category: "sales",
    title: l("Sales videos with offers you can verify", "Video bán hàng dùng giá và ưu đãi thật", "用可核实的优惠制作销售视频"),
    summary: l(
      "Build sales videos from your current prices, offer terms, and real product references, with AI clips reserved for supporting scenes.",
      "Tạo video AI bán hàng từ giá và điều kiện ưu đãi bạn cung cấp; dùng ảnh thật làm tham chiếu và clip AI cho cảnh minh hoạ.", "根据当前价格、优惠条款和真实产品参考制作销售视频，AI 片段只用于辅助场景。",
    ),
    who: l(
      "Shop owners preparing product launches, seasonal offers, or store updates.",
      "Chủ shop chuẩn bị giới thiệu sản phẩm, ưu đãi theo mùa hoặc thông báo bán hàng.", "正在准备新品发布、季节优惠或店铺动态的店主。",
    ),
    outcome: l(
      "A sales script tied to your verified offer and supporting visuals for the final edit.",
      "Kịch bản bán hàng bám đúng ưu đãi đã xác nhận và bộ hình minh hoạ để dựng.", "一份与已核实优惠挂钩的销售脚本，以及用于最终剪辑的配套视觉素材。",
    ),
    lanes: {
      you: l(
        "Supply current prices, stock information, offer dates, and real product references.",
        "Gửi giá hiện tại, tình trạng hàng, thời gian ưu đãi và ảnh sản phẩm thật.", "提供当前价格、库存信息、优惠日期和真实产品参考图。",
      ),
      agent: l(
        "Draft the offer clearly, flag missing terms, and plan supporting scenes without invented urgency.",
        "Viết ưu đãi rõ ràng, hỏi điều kiện còn thiếu và chia cảnh mà không bịa lý do thúc giục mua.", "把优惠写清楚，标出缺失的条款，并规划辅助场景，不要编造催促购买的理由。",
      ),
      muse4ai: l(
        "Produce requested illustrative images and short clips through Muse.",
        "Tạo ảnh minh hoạ và clip ngắn theo yêu cầu qua Muse.", "通过 Muse 生成所需的插图和短片段。",
      ),
    },
    prompt: l(
      "Turn this approved price list and offer note into a sales video plan for my shop. Ask about missing dates or conditions instead of guessing. After I approve the script, request supporting visuals through Muse4AI. Keep prices as editable text for my editor.",
      "Dựa vào bảng giá và nội dung ưu đãi đã duyệt này, lên video bán hàng cho shop. Nếu thiếu ngày áp dụng hay điều kiện thì hỏi lại, đừng đoán. Đợi tôi duyệt kịch bản rồi nhờ Muse4AI tạo cảnh minh hoạ. Để giá ở dạng chữ có thể sửa khi dựng.", "把这份已批准的价格表和优惠说明做成我店铺的销售视频方案。缺少日期或条件时请先问我，不要猜测。等我批准脚本后，再通过 Muse4AI 请求辅助视觉素材。价格请保留为可编辑文字，方便我在剪辑时修改。",
    ),
    media: ["uc-sales-videos-1", "uc-sales-videos-2"],
    limits: [
      clipLimit,
      usageLimit,
      l(
        "Verify prices, stock, dates, and claims before publishing. Generated products may differ from the real item.",
        "Kiểm tra giá, tồn kho, ngày áp dụng và công dụng trước khi đăng. Sản phẩm tạo bằng AI có thể khác hàng thật.", "发布前请核实价格、库存、日期和宣传内容。AI 生成的产品可能与实物不同。",
      ),
    ],
    docs: ["reference-files", "create-video", "library"],
    related: ["affiliate-videos", "product-photos", "short-ads"],
    disclosure: commercialDisclosure,
    featured: true,
    rank: 5,
  },
  {
    slug: "remotion-broll",
    category: "dev",
    title: l("B-roll for agent-built Remotion videos", "B-roll cho video dựng bằng Remotion", "为 agent 搭建的 Remotion 视频提供 B-roll"),
    summary: l(
      "Have your agent build a Remotion composition and request B-roll clips or images through Muse4AI, keeping timing and captions editable.",
      "Nhờ agent dựng bố cục Remotion rồi lấy B-roll và ảnh qua Muse4AI; giữ thời lượng cảnh, phụ đề và lớp chữ ở dạng dễ chỉnh sửa.", "让 agent 搭建 Remotion 合成并通过 Muse4AI 请求 B-roll 片段或图片，时间和字幕保持可编辑。",
    ),
    who: l(
      "Editors and developers using a coding agent to build videos in [Remotion](https://www.remotion.dev).",
      "Người dựng video và lập trình viên dùng coding agent để làm video bằng [Remotion](https://www.remotion.dev).", "使用编程 agent 在 [Remotion](https://www.remotion.dev) 中制作视频的剪辑师和开发者。",
    ),
    outcome: l(
      "A Remotion composition built by your agent, with generated assets placed into planned scenes.",
      "Bố cục Remotion do agent xây dựng, có ảnh và clip được đặt vào các cảnh đã lên kế hoạch.", "一份由 agent 搭建的 Remotion 合成，生成的素材已放入规划好的场景中。",
    ),
    lanes: {
      you: l(
        "Provide the brief, approved script, brand assets, and access to your Remotion project.",
        "Gửi yêu cầu, kịch bản đã duyệt, tư liệu thương hiệu và dự án Remotion để agent làm việc.", "提供需求说明、已批准的脚本、品牌素材，以及你的 Remotion 项目的访问权限。",
      ),
      agent: l(
        "Use Claude Code with Remotion's Agent Skills, for example, to build the composition, request B-roll, and place returned files on the timeline.",
        "Chẳng hạn, dùng Claude Code cùng Agent Skills của Remotion để dựng bố cục, yêu cầu B-roll và đưa tệp nhận được vào dòng thời gian.", "例如，使用 Claude Code 搭配 Remotion 的 Agent Skills 搭建合成、请求 B-roll，并把返回的文件放到时间轴上。",
      ),
      muse4ai: l(
        "Generate the requested clips and images through Muse; composition code and rendering stay with the agent and Remotion.",
        "Tạo clip và ảnh theo yêu cầu qua Muse; phần mã bố cục và kết xuất do agent cùng Remotion xử lý.", "通过 Muse 生成所请求的片段和图片；合成代码与渲染仍由 agent 和 Remotion 处理。",
      ),
    },
    prompt: l(
      "Use Remotion's Agent Skills to build a composition from this approved script. Show me the scene plan first. Ask Muse4AI for B-roll clips and images only where needed, then place the returned assets in the composition. Keep captions editable and flag missing assets rather than inventing file paths.",
      "Dùng Agent Skills của Remotion để dựng bố cục từ kịch bản đã duyệt này. Cho tôi xem kế hoạch cảnh trước. Chỉ nhờ Muse4AI tạo B-roll và ảnh ở chỗ cần thiết, rồi đưa tệp nhận được vào bố cục. Giữ phụ đề dễ sửa; báo tệp còn thiếu, không tự bịa đường dẫn.", "使用 Remotion 的 Agent Skills，根据这份已批准的脚本搭建合成。先给我看场景规划。只在需要的地方请 Muse4AI 生成 B-roll 片段和图片，再把返回的素材放入合成中。字幕保持可编辑；缺少素材时请标出来，不要编造文件路径。",
    ),
    media: ["uc-remotion-broll-1", "uc-remotion-broll-2"],
    limits: [
      clipLimit,
      usageLimit,
      l(
        "Muse4AI does not build or render Remotion compositions. Your agent needs a working Remotion project and must check asset paths and timing.",
        "Muse4AI không dựng hay kết xuất bố cục Remotion. Agent cần dự án Remotion hoạt động được và phải kiểm tra đường dẫn tệp, nhịp cảnh.", "Muse4AI 不负责搭建或渲染 Remotion 合成。你的 agent 需要一个能正常工作的 Remotion 项目，并检查素材路径和时间安排。",
      ),
    ],
    docs: ["agent-skill", "create-video", "mcp-tools"],
    related: ["storyboards", "realistic-broll", "data-report-videos"],
    featured: true,
    rank: 6,
  },
  {
    slug: "storyboards",
    category: "creators",
    title: l("Storyboards to review before production", "Storyboard để duyệt ý tưởng trước khi quay", "开拍前先审核的分镜脚本"),
    summary: l(
      "Use an AI storyboard workflow to turn a script into shot references and rough motion tests before committing to production.",
      "Làm storyboard bằng AI từ kịch bản, tạo khung hình tham chiếu và clip thử chuyển động để cả nhóm duyệt ý tưởng trước khi quay.", "用 AI 分镜工作流把脚本变成镜头参考和粗略的动态测试，正式制作前先确定方案。",
    ),
    who: l(
      "Directors, freelance editors, and agency teams discussing a script with clients.",
      "Đạo diễn, người dựng tự do và nhóm agency cần trao đổi kịch bản với khách hàng.", "正在与客户讨论脚本的导演、自由剪辑师和代理商团队。",
    ),
    outcome: l(
      "A shot-by-shot storyboard and selected motion studies for a rough animatic.",
      "Storyboard theo từng cảnh và một số clip thử để ghép bản phác chuyển động.", "一份逐镜头的分镜脚本和选定的动态测试，用于制作粗略的动态预览。",
    ),
    lanes: {
      you: l(
        "Provide the script, visual references, required shots, and production constraints.",
        "Gửi kịch bản, mẫu hình ảnh, cảnh bắt buộc và điều kiện sản xuất.", "提供脚本、视觉参考、必需镜头和制作限制条件。",
      ),
      agent: l(
        "Number shots, describe framing and movement, and request images before selected video tests.",
        "Đánh số cảnh, mô tả khung hình và chuyển động, yêu cầu tạo ảnh trước rồi mới thử clip cho cảnh đã chọn.", "给镜头编号，描述构图和运镜，在选定的视频测试前先请求图片。",
      ),
      muse4ai: l(
        "Generate storyboard frames and short motion studies through Muse.",
        "Tạo khung hình storyboard và clip thử chuyển động qua Muse.", "通过 Muse 生成分镜画面和简短的动态测试。",
      ),
    },
    prompt: l(
      "Break this café ad script into a storyboard with framing, action, and transition notes. Ask me to approve the shot list, then request draft frames through Muse4AI. Only test motion for the selected shots. Label the result as a concept, not finished production footage.",
      "Chia kịch bản quảng cáo quán cà phê này thành storyboard, ghi khung hình, hành động và cách chuyển cảnh. Cho tôi duyệt danh sách rồi nhờ Muse4AI tạo ảnh phác. Chỉ thử chuyển động ở cảnh được chọn. Ghi rõ đây là bản ý tưởng, không phải tư liệu quay hoàn chỉnh.", "把这份咖啡馆广告脚本拆解成一份分镜脚本，注明构图、动作和转场。请先让我批准镜头清单，再通过 Muse4AI 请求草稿画面。只对选定的镜头测试动态效果。把结果标注为创意方案，而不是已完成的成片素材。",
    ),
    media: ["uc-storyboards-1", "uc-storyboards-2"],
    limits: [
      clipLimit,
      usageLimit,
      consistencyLimit,
      l(
        "Treat frames as concept references, not exact promises of camera movement, blocking, or final production quality.",
        "Dùng khung hình để trao đổi ý tưởng, không xem đó là cam kết chính xác về máy quay, diễn xuất hay chất lượng bản cuối.", "把画面当作创意参考，不要把它视为对运镜、走位或最终成片质量的准确承诺。",
      ),
    ],
    docs: ["create-image", "create-video", "reference-files"],
    related: ["remotion-broll", "short-ads", "realistic-broll"],
    featured: true,
    rank: 7,
  },
  {
    slug: "data-report-videos",
    category: "office",
    title: l("Report videos with charts from your data", "Video báo cáo dùng biểu đồ từ dữ liệu thật", "用你的数据制作带图表的汇报视频"),
    summary: l(
      "Turn a sales spreadsheet into a data-report video plan, with charts made in a chart tool and AI visuals used only as supporting scenes.",
      "Biến file Excel doanh số thành kịch bản video báo cáo; biểu đồ lấy từ công cụ vẽ, còn ảnh và clip AI chỉ dùng làm nền minh hoạ.", "把销售电子表格做成数据汇报视频方案，图表用制图工具制作，AI 视觉素材只作辅助场景。",
    ),
    who: l(
      "Office teams presenting monthly sales, operations, or project results.",
      "Nhân viên văn phòng báo cáo doanh số, vận hành hoặc kết quả dự án hằng tháng.", "正在汇报月度销售、运营或项目成果的办公室团队。",
    ),
    outcome: l(
      "A checked narration outline, chart assets made from your data, and separate illustrative scene assets.",
      "Dàn ý lời dẫn đã kiểm tra, biểu đồ vẽ từ dữ liệu của bạn và bộ cảnh minh hoạ tách riêng.", "一份已核对的旁白大纲、用你的数据制作的图表素材，以及单独的插图场景素材。",
    ),
    lanes: {
      you: l(
        "Provide a shareable spreadsheet, metric definitions, reporting period, and approved conclusions.",
        "Gửi bảng tính được phép chia sẻ, định nghĩa chỉ số, kỳ báo cáo và kết luận đã duyệt.", "提供可分享的电子表格、指标定义、汇报周期和已批准的结论。",
      ),
      agent: l(
        "Check calculations, build charts in a chart tool, draft narration, and request only decorative visuals from Muse4AI.",
        "Kiểm tra phép tính, vẽ biểu đồ bằng công cụ biểu đồ, viết lời dẫn và chỉ nhờ Muse4AI tạo cảnh trang trí.", "核对计算结果，用制图工具制作图表，起草旁白，只向 Muse4AI 请求装饰性视觉素材。",
      ),
      muse4ai: l(
        "Generate background images and transition clips through Muse, separate from all charts and numbers.",
        "Tạo ảnh nền và clip chuyển cảnh qua Muse, tách khỏi toàn bộ biểu đồ và số liệu.", "通过 Muse 生成背景图片和转场片段，与所有图表和数字完全分开。",
      ),
    },
    prompt: l(
      "Use this shareable sales spreadsheet to plan our monthly report video. Confirm the reporting period and totals with me. Build charts from the data in a chart tool, not in AI images. Ask Muse4AI only for neutral backgrounds and transition clips, then list what I need to assemble.",
      "Dùng file Excel doanh số được phép chia sẻ này để lên video báo cáo tháng. Xác nhận kỳ báo cáo và tổng số với tôi. Vẽ biểu đồ từ dữ liệu bằng công cụ biểu đồ, không để AI vẽ số. Chỉ nhờ Muse4AI tạo nền trung tính và clip chuyển cảnh, rồi liệt kê những phần tôi cần ghép.", "用这份可分享的销售电子表格，规划我们的月度汇报视频。请先和我确认汇报周期和总计数据。用制图工具根据数据制作图表，不要用 AI 图片画数字。只请 Muse4AI 生成中性背景和转场片段，然后列出我还需要自行拼接的部分。",
    ),
    media: ["uc-data-report-videos-1", "uc-data-report-videos-2"],
    limits: [
      clipLimit,
      usageLimit,
      l(
        "Review totals, units, filters, dates, and conclusions. Remove confidential rows before sharing files with an agent or Muse.",
        "Kiểm tra tổng số, đơn vị, bộ lọc, ngày tháng và kết luận. Bỏ dữ liệu mật trước khi gửi tệp cho agent hoặc Muse.", "核对总计、单位、筛选条件、日期和结论。把文件发给 agent 或 Muse 之前，先删除保密内容。",
      ),
    ],
    docs: ["reference-files", "create-video", "library"],
    related: ["remotion-broll", "research-to-visuals", "hr-onboarding"],
    disclosure: l(
      "Numbers and charts must come from your data and a chart tool, never from AI pictures. Identify AI-generated illustrative backgrounds separately.",
      "Số liệu và biểu đồ phải lấy từ dữ liệu của bạn và công cụ vẽ biểu đồ, không lấy từ ảnh AI. Ghi rõ phần nền minh hoạ do AI tạo.", "数字和图表必须来自你的数据和制图工具，绝不能来自 AI 图片。AI 生成的插图背景请单独注明。",
    ),
    featured: true,
    rank: 8,
  },
  {
    slug: "realistic-broll",
    category: "creators",
    title: l("Realistic B-roll, clearly illustrative", "B-roll chân thật, ghi rõ là minh hoạ", "真实感 B-roll，并明确标注为示意"),
    summary: l(
      "Generate realistic B-roll for narration gaps and abstract topics, with clear labels so illustrative scenes are not mistaken for evidence.",
      "Tạo B-roll chân thật cho đoạn lời dẫn thiếu hình và chủ đề trừu tượng; ghi rõ cảnh minh hoạ để người xem không hiểu là tư liệu thật.", "为旁白空缺处和抽象主题生成真实感 B-roll，并打上清晰标签，避免示意场景被误当成证据。",
    ),
    who: l(
      "YouTubers and editors who need illustrative cutaways rather than documentary evidence.",
      "YouTuber và người dựng cần cảnh chèn minh hoạ, không phải bằng chứng tư liệu.", "需要示意性切镜而非纪录证据的 YouTuber 和剪辑师。",
    ),
    outcome: l(
      "A reviewed set of illustrative cutaways matched to specific narration passages.",
      "Bộ cảnh chèn minh hoạ đã duyệt, gắn với từng đoạn lời dẫn cụ thể.", "一套已审核的示意性切镜，与具体的旁白段落一一对应。",
    ),
    lanes: {
      you: l(
        "Mark narration gaps and identify any real places or events that must not be simulated.",
        "Đánh dấu đoạn thiếu hình và những địa điểm, sự kiện thật không được mô phỏng gây hiểu nhầm.", "标出旁白中缺少画面的段落，并指出哪些真实地点或事件绝不能模拟。",
      ),
      agent: l(
        "Suggest generic scenes, request approved clips, and note where illustrative labels are needed.",
        "Đề xuất cảnh không gắn với sự kiện cụ thể, yêu cầu tạo clip đã duyệt và ghi chỗ cần nhãn minh hoạ.", "建议通用场景，请求已批准的片段，并注明哪些地方需要加示意标签。",
      ),
      muse4ai: l(
        "Generate short illustrative clips and images through your Muse account.",
        "Tạo clip minh hoạ ngắn và ảnh qua tài khoản Muse của bạn.", "通过你的 Muse 账号生成简短的示意片段和图片。",
      ),
    },
    prompt: l(
      "Suggest B-roll for this narration about working from home. Use generic fictional spaces, not recognizable real offices. Show me the shot list before requesting clips through Muse4AI. Mark every generated scene as illustrative and keep real interview footage separate.",
      "Đề xuất B-roll cho lời dẫn về làm việc tại nhà này. Dùng không gian hư cấu, không mô phỏng văn phòng thật dễ nhận ra. Cho tôi xem danh sách cảnh trước khi nhờ Muse4AI tạo clip. Đánh dấu mọi cảnh tạo ra là minh hoạ và tách riêng tư liệu phỏng vấn thật.", "为这段关于居家办公的旁白建议 B-roll。使用通用的虚构空间，不要用可辨认的真实办公室。先给我看镜头清单，再通过 Muse4AI 请求片段。把每个生成的场景都标注为示意内容，真实的采访素材单独保留。",
    ),
    media: ["uc-realistic-broll-1"],
    limits: [
      clipLimit,
      usageLimit,
      consistencyLimit,
      l(
        "AI footage must not be presented as real footage of real places or events, or used as evidence that something happened.",
        "Không được giới thiệu cảnh AI là tư liệu quay thật về địa điểm, sự kiện có thật hoặc dùng làm bằng chứng một việc đã xảy ra.", "AI 画面不得被说成是真实地点或事件的实拍，也不得用作某件事发生过的证据。",
      ),
    ],
    docs: ["create-video", "queue", "library"],
    related: ["remotion-broll", "storyboards", "event-recaps"],
    featured: true,
    rank: 9,
  },
  {
    slug: "restaurant-menus",
    category: "sales",
    title: l("Menu visuals grounded in real dishes", "Ảnh menu bám đúng món quán đang bán", "以真实菜品为准的菜单图片"),
    summary: l(
      "Explore AI menu visuals from photos of your real dishes, then check portions and ingredients before adding prices in a layout tool.",
      "Tạo ảnh menu AI từ ảnh món ăn thật của quán, kiểm tra khẩu phần và nguyên liệu rồi thêm tên món, giá bằng công cụ dàn trang.", "根据真实菜品照片探索 AI 菜单图片，核对分量和配料后，再用排版工具加上菜名和价格。",
    ),
    who: l(
      "Café and restaurant owners updating printed or delivery menus.",
      "Chủ quán ăn, quán cà phê cần cập nhật menu in hoặc menu giao hàng.", "正在更新纸质菜单或外卖菜单的咖啡馆和餐厅老板。",
    ),
    outcome: l(
      "Reviewed dish image concepts ready for a menu layout with editable names and prices.",
      "Bộ ảnh món ăn đã duyệt để dàn menu, với tên món và giá được thêm riêng, dễ sửa.", "已审核的菜品图片创意，可用于菜单排版，菜名和价格可编辑。",
    ),
    lanes: {
      you: l(
        "Photograph actual servings and provide ingredients, portion details, and current prices.",
        "Chụp khẩu phần đang bán, gửi thành phần, lượng món và giá hiện tại.", "拍摄实际出餐的分量，并提供配料、分量细节和当前价格。",
      ),
      agent: l(
        "Suggest backgrounds and framing, request image samples, and keep menu text outside the generated image.",
        "Đề xuất nền, góc chụp, yêu cầu tạo ảnh mẫu và giữ chữ menu tách khỏi ảnh AI.", "建议背景和构图，请求图片样品，并把菜单文字保留在生成的图片之外。",
      ),
      muse4ai: l(
        "Generate dish presentation concepts from your references through Muse.",
        "Tạo phương án trình bày món ăn từ ảnh tham chiếu qua Muse.", "通过 Muse 根据你的参考图生成菜品呈现方案。",
      ),
    },
    prompt: l(
      "Use these photos of our actual noodle bowl to propose a clean menu image. Do not add toppings or enlarge the serving. Ask Muse4AI for a small sample first. Keep dish names and prices out of the image so I can add them in the menu layout.",
      "Dùng ảnh bát bún quán đang bán này để đề xuất ảnh menu nền gọn. Không thêm topping hay làm khẩu phần lớn hơn. Nhờ Muse4AI tạo ít ảnh mẫu trước. Không đưa tên món và giá vào ảnh để tôi thêm khi dàn menu.", "用我们这碗实际出餐的面条照片，建议一张干净的菜单图片。不要添加配料或放大分量。请先让 Muse4AI 生成少量样品。不要把菜名和价格放进图片里，我会在排版菜单时再加。",
    ),
    media: ["uc-restaurant-menus-1"],
    limits: [
      usageLimit,
      consistencyLimit,
      l(
        "Check ingredients, portions, and allergen information yourself. Label AI visuals and do not misrepresent the dish customers receive.",
        "Tự kiểm tra nguyên liệu, khẩu phần và thông tin dị ứng. Gắn nhãn ảnh AI, không khiến khách hiểu sai về món thực tế.", "请自行检查配料、分量和过敏原信息。为 AI 视觉素材打上标签，不要让顾客误解实际出餐的菜品。",
      ),
    ],
    docs: ["reference-files", "create-image", "library"],
    related: ["product-photos", "sales-videos"],
    featured: false,
    rank: 10,
  },
  {
    slug: "social-campaigns",
    category: "creators",
    title: l("Social campaign visuals from one brief", "Bộ hình chiến dịch từ một bản yêu cầu", "用一份需求说明做整套社媒活动视觉"),
    summary: l(
      "Plan a social campaign with related AI image concepts and supporting clips, then adapt each approved asset to its posting format.",
      "Lên bộ hình chiến dịch mạng xã hội với ảnh AI và clip bổ trợ theo một ý tưởng; duyệt từng mẫu rồi chỉnh cho từng định dạng đăng.", "围绕一份需求说明规划社媒活动，配上相关的 AI 图片创意和辅助片段，审核通过后再按发布格式逐一适配。",
    ),
    who: l(
      "Small social teams managing a launch or a themed content calendar.",
      "Nhóm nội dung nhỏ chuẩn bị ra mắt sản phẩm hoặc lịch bài theo chủ đề.", "负责新品发布或主题内容日历的小型社媒团队。",
    ),
    outcome: l(
      "A content matrix and reviewed visual assets organized by post and channel.",
      "Bảng nội dung và bộ tư liệu hình ảnh đã duyệt, chia theo bài đăng và kênh.", "一份内容矩阵和已审核的视觉素材，按帖子和渠道整理好。",
    ),
    lanes: {
      you: l(
        "Set the campaign goal, audience, brand references, channels, and approved message.",
        "Nêu mục tiêu, người xem, mẫu thương hiệu, kênh đăng và thông điệp đã duyệt.", "确定活动目标、受众、品牌参考素材、发布渠道和已批准的信息。",
      ),
      agent: l(
        "Map messages to posts, keep a shared visual brief, and request samples before larger batches.",
        "Chia thông điệp theo bài, giữ một bản hướng dẫn hình ảnh chung và yêu cầu mẫu trước khi tạo loạt.", "把信息分配到各篇帖子，保持一份统一的视觉说明，并在大批量生成前先请求样品。",
      ),
      muse4ai: l(
        "Generate requested image concepts and short scene clips through Muse.",
        "Tạo các phương án ảnh và clip ngắn theo yêu cầu qua Muse.", "通过 Muse 生成所需的图片创意和短场景片段。",
      ),
    },
    prompt: l(
      "Plan a social campaign for our bookstore's reading week using this brief. Map each post to one message and propose related visual concepts. Request a small sample through Muse4AI after my approval. List cropping and text-overlay work separately for each channel.",
      "Lên chiến dịch mạng xã hội cho tuần lễ đọc sách của nhà sách theo yêu cầu này. Mỗi bài có một thông điệp và hình ảnh cùng hướng. Đợi tôi duyệt rồi nhờ Muse4AI tạo nhóm mẫu. Liệt kê riêng phần cắt khung và thêm chữ cho từng kênh.", "根据这份需求说明，为我们书店的阅读周规划一场社媒活动。每篇帖子对应一条信息，并提出相关的视觉创意。等我批准后，再通过 Muse4AI 请求少量样品。请按渠道分别列出裁剪和叠加文字的工作。",
    ),
    media: ["uc-social-campaigns-1"],
    limits: [
      clipLimit,
      usageLimit,
      consistencyLimit,
      l(
        "Check channel dimensions and crop safety in your editor. Generation does not schedule posts or guarantee campaign results.",
        "Kiểm tra kích thước và vùng cắt trong phần mềm chỉnh sửa. Tạo hình không bao gồm lên lịch đăng hay bảo đảm hiệu quả chiến dịch.", "请在编辑器里检查渠道尺寸和裁剪安全区。生成图片不包括排期发布，也不承诺活动效果。",
      ),
    ],
    docs: ["batches", "reference-files", "library"],
    related: ["short-ads", "thumbnails", "shorts-series"],
    featured: false,
    rank: 11,
  },
  {
    slug: "thumbnails",
    category: "creators",
    title: l("Thumbnail backgrounds with room for text", "Ảnh nền thumbnail có chỗ đặt chữ", "留出放文字空间的缩略图背景"),
    summary: l(
      "Create AI thumbnail background options around your video's actual topic, then add readable titles and brand elements in an editor.",
      "Tạo ảnh nền thumbnail AI bám đúng nội dung video, chừa chỗ đặt tiêu đề; thêm chữ rõ và nhận diện kênh bằng công cụ chỉnh ảnh.", "围绕视频的真实主题制作 AI 缩略图背景方案，再在编辑器里加上清晰的标题和品牌元素。",
    ),
    who: l(
      "YouTube creators and editors preparing covers for published videos.",
      "Người làm YouTube và người dựng cần ảnh bìa cho video sắp đăng.", "正在为已发布视频准备封面的 YouTube 创作者和剪辑师。",
    ),
    outcome: l(
      "Several reviewed background concepts ready for text, cropping, and final export.",
      "Một số phương án nền đã duyệt để thêm chữ, cắt khung và xuất ảnh cuối.", "多套已审核的背景方案，可用于加文字、裁剪和最终导出。",
    ),
    lanes: {
      you: l(
        "Provide the real topic, intended title, brand references, and any photos you have permission to use.",
        "Gửi nội dung thật, tiêu đề dự kiến, mẫu nhận diện và ảnh bạn có quyền sử dụng.", "提供真实主题、拟定的标题、品牌参考素材，以及你有权使用的照片。",
      ),
      agent: l(
        "Suggest distinct compositions, reserve text space, and request background variations.",
        "Đề xuất các bố cục khác nhau, chừa chỗ cho chữ và yêu cầu tạo phương án nền.", "建议不同的构图，预留文字空间，并请求背景的不同版本。",
      ),
      muse4ai: l(
        "Generate background images through Muse without relying on generated lettering.",
        "Tạo ảnh nền qua Muse, không dựa vào chữ do AI vẽ trong ảnh.", "通过 Muse 生成背景图片，不依赖 AI 在图片中生成的文字。",
      ),
    },
    prompt: l(
      "Propose thumbnail backgrounds for my video about organizing a small desk. Keep the imagery faithful to the video and leave clear space for my title. After I choose a direction, request backgrounds through Muse4AI without text. I will add the title in my image editor.",
      "Đề xuất nền thumbnail cho video sắp xếp bàn làm việc nhỏ của tôi. Hình phải đúng nội dung video và chừa chỗ rõ để đặt tiêu đề. Đợi tôi chọn hướng rồi nhờ Muse4AI tạo nền không có chữ. Tôi sẽ thêm tiêu đề trong công cụ chỉnh ảnh.", "为我这条关于整理小书桌的视频建议缩略图背景。画面要忠实于视频内容，并留出放标题的清晰空间。等我选定方向后，再请 Muse4AI 生成不带文字的背景。我会在图片编辑器里加上标题。",
    ),
    media: ["uc-thumbnails-1"],
    limits: [
      usageLimit,
      consistencyLimit,
      l(
        "Add readable text in an editor and check the small-screen preview. A thumbnail does not guarantee clicks or views.",
        "Thêm chữ bằng công cụ chỉnh ảnh và xem thử ở kích thước nhỏ. Thumbnail không bảo đảm lượt nhấp hay lượt xem.", "请在编辑器里添加清晰的文字，并检查小屏幕预览效果。缩略图不能确保带来点击或播放。",
      ),
    ],
    docs: ["create-image", "reference-files", "library"],
    related: ["social-campaigns", "shorts-series"],
    featured: false,
    rank: 12,
  },
  {
    slug: "hr-onboarding",
    category: "office",
    title: l("Onboarding visuals for real procedures", "Hình hướng dẫn nhân viên mới theo quy trình", "按真实流程制作的新员工入职视觉素材"),
    summary: l(
      "Turn approved HR procedures into an onboarding video plan, using AI illustrations for generic scenes and real screenshots for exact steps.",
      "Làm video onboarding từ quy trình nhân sự đã duyệt; dùng ảnh AI cho cảnh minh hoạ chung và ảnh màn hình thật cho thao tác cụ thể.", "把已批准的人事流程做成新员工入职视频方案，通用场景用 AI 插图，精确步骤用真实截图。",
    ),
    who: l(
      "HR and operations teams preparing orientation for new employees.",
      "Nhóm nhân sự và vận hành chuẩn bị tài liệu cho nhân viên mới.", "正在为新员工准备入职培训的人事和运营团队。",
    ),
    outcome: l(
      "A reviewed onboarding outline and illustrative assets separated from real process screenshots.",
      "Dàn ý hướng dẫn đã duyệt và bộ hình minh hoạ tách riêng khỏi ảnh màn hình quy trình thật.", "一份已审核的入职大纲和插图素材，与真实流程截图明确分开。",
    ),
    lanes: {
      you: l(
        "Provide an approved, shareable procedure and identify private information to exclude.",
        "Gửi quy trình đã duyệt, được phép chia sẻ và chỉ rõ thông tin riêng tư cần bỏ.", "提供已批准、可分享的流程，并指出需要排除的隐私信息。",
      ),
      agent: l(
        "Break the procedure into steps, flag missing details, and request generic supporting visuals.",
        "Chia quy trình thành bước, đánh dấu thông tin thiếu và yêu cầu tạo hình minh hoạ chung.", "把流程拆解成步骤，标出缺失的细节，并请求通用的辅助视觉素材。",
      ),
      muse4ai: l(
        "Generate illustrative workplace images and short clips through Muse.",
        "Tạo ảnh môi trường làm việc và clip minh hoạ ngắn qua Muse.", "通过 Muse 生成示意性的工作场所图片和短片段。",
      ),
    },
    prompt: l(
      "Turn this approved onboarding checklist into a video outline for new staff. Ask about unclear steps. Use real screenshots for software instructions and request only generic workplace illustrations through Muse4AI. Do not send employee records or confidential policies.",
      "Chuyển checklist onboarding đã duyệt này thành dàn ý video cho nhân viên mới. Hỏi lại những bước chưa rõ. Dùng ảnh màn hình thật để chỉ thao tác phần mềm; chỉ nhờ Muse4AI tạo cảnh công sở minh hoạ chung. Không gửi hồ sơ nhân viên hay chính sách mật.", "把这份已批准的新员工入职清单做成视频大纲。步骤不清楚时请先问我。软件操作请用真实截图，只通过 Muse4AI 请求通用的工作场所插图。不要发送员工档案或保密政策。",
    ),
    media: ["uc-hr-onboarding-1"],
    limits: [
      clipLimit,
      usageLimit,
      l(
        "HR must verify policies and instructions. Do not use generated screens as exact software guidance or share private employee data.",
        "Nhân sự phải kiểm tra chính sách và hướng dẫn. Không dùng màn hình AI để chỉ thao tác chính xác hoặc chia sẻ dữ liệu riêng của nhân viên.", "人事部门必须核实政策和操作说明。不要把生成的界面当作精确的软件操作指南，也不要分享员工的隐私数据。",
      ),
    ],
    docs: ["reference-files", "create-video", "library"],
    related: ["data-report-videos", "lesson-videos"],
    featured: false,
    rank: 13,
  },
  {
    slug: "real-estate-clips",
    category: "sales",
    title: l("Property clips with honest visual context", "Clip bất động sản tách rõ cảnh minh hoạ", "视觉背景真实可信的房源片段"),
    summary: l(
      "Plan real-estate clips around verified listing details and real property footage, using clearly labeled AI scenes only for illustration.",
      "Lên clip bất động sản từ thông tin đã kiểm chứng và tư liệu căn nhà thật; chỉ dùng cảnh AI có nhãn rõ để minh hoạ ý tưởng.", "围绕已核实的房源信息和真实房源实拍画面规划房产片段，AI 场景只作示意并明确标注。",
    ),
    who: l(
      "Property agents and editors preparing listing introductions.",
      "Môi giới và người dựng chuẩn bị video giới thiệu bất động sản.", "正在准备房源介绍视频的房产经纪人和剪辑师。",
    ),
    outcome: l(
      "A listing video plan that separates verified property footage from illustrative concepts.",
      "Kế hoạch video tách rõ tư liệu căn nhà đã xác nhận và cảnh ý tưởng minh hoạ.", "一份房源视频方案，把已核实的房源实拍画面与示意性创意明确分开。",
    ),
    lanes: {
      you: l(
        "Provide current property photos, footage, verified specifications, and permission to use them.",
        "Gửi ảnh, video hiện trạng, thông số đã kiểm tra và quyền sử dụng tư liệu.", "提供当前的房源照片、实拍画面、已核实的房屋参数，以及使用授权。",
      ),
      agent: l(
        "Build the script around real assets and request only clearly identified illustrative scenes.",
        "Viết kịch bản dựa trên tư liệu thật, chỉ yêu cầu tạo những cảnh được xác định rõ là minh hoạ.", "围绕真实素材撰写脚本，只请求已明确标注为示意的场景。",
      ),
      muse4ai: l(
        "Generate requested concept images or atmosphere clips through Muse, not evidence of property condition.",
        "Tạo ảnh ý tưởng hoặc clip gợi không khí qua Muse, không tạo bằng chứng về hiện trạng căn nhà.", "通过 Muse 生成所需的概念图片或氛围片段，而不是房屋状况的证据。",
      ),
    },
    prompt: l(
      "Plan an introduction for this apartment using my verified listing and real footage. Do not invent views, facilities, or renovations. If an illustrative opening is useful, propose it separately before requesting it through Muse4AI. Label it clearly and keep it apart from property footage.",
      "Lên video giới thiệu căn hộ từ tin đăng đã kiểm tra và tư liệu quay thật của tôi. Không tự thêm tầm nhìn, tiện ích hay hạng mục sửa chữa. Nếu cần cảnh mở đầu minh hoạ, đề xuất riêng rồi mới nhờ Muse4AI tạo. Ghi nhãn rõ và tách khỏi cảnh căn hộ thật.", "根据我已核实的房源信息和实拍画面，规划这套公寓的介绍视频。不要编造景观、配套或装修情况。如果一段示意性开场有用，请先单独提出来，获批后再通过 Muse4AI 请求。标注清楚，并与房源实拍画面分开。",
    ),
    media: ["uc-real-estate-clips-1"],
    limits: [
      clipLimit,
      usageLimit,
      l(
        "AI footage must not be presented as real footage of real places or events, including the listed property or its surroundings.",
        "Không được giới thiệu cảnh AI là tư liệu quay thật về địa điểm, sự kiện có thật, kể cả căn nhà đang bán và khu vực xung quanh.", "AI 画面不得被说成是真实地点或事件的实拍，包括所售房源及其周边环境。",
      ),
      l(
        "Verify dimensions, amenities, legal claims, and current condition. Generated concepts cannot replace an inspection or real listing photos.",
        "Kiểm tra diện tích, tiện ích, pháp lý và hiện trạng. Hình ý tưởng không thay thế việc xem nhà hay ảnh đăng bán thật.", "核实面积、配套、法律声明和当前状况。生成的概念图无法替代实地看房或真实的房源照片。",
      ),
    ],
    docs: ["reference-files", "create-video", "library"],
    related: ["realistic-broll", "sales-videos", "product-photos"],
    featured: false,
    rank: 14,
  },
  {
    slug: "shorts-series",
    category: "creators",
    title: l("A Shorts series planned before batching", "Chuỗi Shorts có kế hoạch trước khi tạo loạt", "先做规划再批量制作的 Shorts 系列"),
    summary: l(
      "Plan a YouTube Shorts series with repeatable scripts and batched AI scene requests, then review each episode before editing and publishing.",
      "Lên chuỗi YouTube Shorts với mẫu kịch bản chung và tạo video AI theo đợt; kiểm tra từng tập trước khi dựng, thêm chữ và đăng.", "规划 YouTube Shorts 系列，脚本可复用、AI 场景按批量请求，剪辑发布前逐集审核。",
    ),
    who: l(
      "Creators producing recurring educational, lifestyle, or explainer shorts.",
      "Người làm nội dung sản xuất Shorts kiến thức, đời sống hoặc giải thích theo chuỗi.", "制作长期教育、生活或讲解类短视频的创作者。",
    ),
    outcome: l(
      "An episode plan, reusable scene briefs, and reviewed assets grouped by episode.",
      "Kế hoạch từng tập, mẫu yêu cầu cảnh có thể dùng lại và tư liệu đã duyệt chia theo tập.", "一份分集规划、可复用的场景需求说明，以及按分集整理好的已审核素材。",
    ),
    lanes: {
      you: l(
        "Choose the series topic, approve episode facts, and set a manageable production batch.",
        "Chọn chủ đề chuỗi, duyệt thông tin từng tập và xác định số tập làm mỗi đợt.", "选定系列主题，审核每集的事实，并确定每批可完成的制作量。",
      ),
      agent: l(
        "Draft a repeatable structure, vary the examples, and request assets in small reviewed batches.",
        "Soạn cấu trúc chung, đổi ví dụ từng tập và yêu cầu tạo tư liệu theo nhóm nhỏ có duyệt.", "起草可复用的结构，变换每集的例子，按经过审核的小批量请求素材。",
      ),
      muse4ai: l(
        "Generate requested scene images and short clips through Muse for each episode.",
        "Tạo ảnh từng cảnh và clip ngắn theo yêu cầu qua Muse cho từng tập.", "通过 Muse 为每集生成所需的场景图片和短片段。",
      ),
    },
    prompt: l(
      "Plan a Shorts series about simple desk organization. Draft a reusable episode structure and the first few episode briefs. Let me approve one pilot before requesting more assets through Muse4AI. Group results by episode and list the vertical cropping and caption work still needed.",
      "Lên chuỗi Shorts về sắp xếp bàn làm việc đơn giản. Soạn cấu trúc chung và yêu cầu cho vài tập đầu. Cho tôi duyệt một tập thử trước khi nhờ Muse4AI tạo thêm tư liệu. Chia kết quả theo tập và ghi phần còn phải cắt dọc, thêm phụ đề.", "围绕简单的书桌整理，规划一个 Shorts 系列。起草可复用的分集结构和前几集的需求说明。先让我批准一集试播，再通过 Muse4AI 请求更多素材。按分集整理结果，并列出仍需完成的竖屏裁剪和字幕工作。",
    ),
    media: ["uc-shorts-series-1"],
    limits: [
      clipLimit,
      usageLimit,
      consistencyLimit,
      l(
        "Check facts per episode and adapt framing for vertical delivery in your editor. Muse4AI does not publish or schedule the series.",
        "Kiểm tra kiến thức từng tập và chỉnh khung dọc trong phần mềm dựng. Muse4AI không đăng hay lên lịch phát hành chuỗi.", "请逐集核对事实，并在编辑器里调整竖屏构图。Muse4AI 不负责发布或排期。",
      ),
    ],
    docs: ["batches", "queue", "accounts-and-limits"],
    related: ["social-campaigns", "thumbnails", "lesson-videos"],
    featured: false,
    rank: 15,
  },
  {
    slug: "ngo-explainers",
    category: "education",
    title: l("NGO explainers with responsible visuals", "Video giải thích cho tổ chức phi lợi nhuận", "配有负责任视觉素材的 NGO 讲解视频"),
    summary: l(
      "Build NGO explainer videos from approved source material, using labeled AI illustrations rather than fabricated beneficiary stories or footage.",
      "Làm video giải thích cho tổ chức phi lợi nhuận từ tài liệu đã duyệt; dùng hình AI có nhãn, không dựng chuyện hay tư liệu người thụ hưởng.", "根据已批准的资料制作 NGO 讲解视频，使用带标注的 AI 插图，不编造受助者的故事或画面。",
    ),
    who: l(
      "Nonprofit communications teams and community educators.",
      "Nhóm truyền thông tổ chức phi lợi nhuận và người làm giáo dục cộng đồng.", "非营利组织的传播团队和社区教育工作者。",
    ),
    outcome: l(
      "A source-checked explainer script and clearly identified illustrative assets.",
      "Kịch bản giải thích đã đối chiếu nguồn và bộ hình được ghi rõ là minh hoạ.", "一份已核对来源的讲解脚本，以及明确标注为示意的素材。",
    ),
    lanes: {
      you: l(
        "Provide approved sources, safeguarding rules, audience needs, and consent requirements.",
        "Gửi nguồn đã duyệt, nguyên tắc bảo vệ người liên quan, nhu cầu người xem và yêu cầu đồng ý sử dụng hình ảnh.", "提供已批准的资料、保护相关人员的规则、受众需求和图片使用授权要求。",
      ),
      agent: l(
        "Draft plain-language explanations, retain source notes, and request respectful generic illustrations.",
        "Viết lời giải thích dễ hiểu, giữ ghi chú nguồn và yêu cầu hình minh hoạ chung, tôn trọng người được nói tới.", "用通俗易懂的语言撰写讲解，保留来源备注，并请求尊重相关人员的通用插图。",
      ),
      muse4ai: l(
        "Generate illustrative scenes through Muse, not documentary records or personal testimony.",
        "Tạo cảnh minh hoạ qua Muse, không tạo hồ sơ tư liệu hay lời chứng cá nhân.", "通过 Muse 生成示意场景，而不是纪录档案或个人证言。",
      ),
    },
    prompt: l(
      "Use these approved materials to plan an explainer about our community recycling program. Keep source notes for factual claims. Do not invent beneficiaries or quotes. After review, ask Muse4AI for respectful generic illustrations and mark them as AI-generated.",
      "Dùng tài liệu đã duyệt này để lên video giải thích chương trình tái chế cộng đồng. Giữ ghi chú nguồn cho các thông tin thực tế. Không bịa người thụ hưởng hay lời trích dẫn. Sau khi duyệt, nhờ Muse4AI tạo hình minh hoạ chung, phù hợp và có nhãn AI.", "用这些已批准的资料，规划一期关于我们社区回收计划的讲解视频。事实性内容请保留来源备注。不要编造受助者或引言。审核通过后，请 Muse4AI 生成尊重相关人员的通用插图，并标注为 AI 生成。",
    ),
    media: ["uc-ngo-explainers-1"],
    limits: [
      clipLimit,
      usageLimit,
      l(
        "Review facts, consent, and safeguarding. Generated people or scenes must not be presented as real beneficiaries or field evidence.",
        "Kiểm tra thông tin, sự đồng ý và yêu cầu bảo vệ người liên quan. Không giới thiệu người, cảnh AI là người thụ hưởng thật hay bằng chứng thực địa.", "核对事实、授权和保护相关人员的要求。不得把 AI 生成的人物或场景说成真实的受助者或实地证据。",
      ),
    ],
    docs: ["ask-and-research", "reference-files", "create-video"],
    related: ["lesson-videos", "research-to-visuals", "realistic-broll"],
    featured: false,
    rank: 16,
  },
  {
    slug: "event-recaps",
    category: "creators",
    title: l("Event recaps built around real footage", "Video tổng kết giữ tư liệu sự kiện thật", "围绕真实素材制作的活动回顾"),
    summary: l(
      "Plan event recap videos around real recordings, with AI-generated opening and closing visuals kept separate from evidence of the event.",
      "Lên video tổng kết sự kiện từ tư liệu quay thật; dùng ảnh và clip AI cho cảnh mở, kết, tách rõ khỏi những gì diễn ra tại sự kiện.", "围绕真实录像规划活动回顾视频，AI 生成的开场和结尾视觉素材与活动实况明确分开。",
    ),
    who: l(
      "Event teams and editors assembling recaps from approved photos and recordings.",
      "Nhóm tổ chức sự kiện và người dựng làm video từ ảnh, bản quay được phép dùng.", "负责整理活动回顾的活动团队和剪辑师，素材来自已批准的照片和录像。",
    ),
    outcome: l(
      "A recap structure based on real moments, with separate illustrative opening and closing assets.",
      "Bố cục tổng kết dựa trên khoảnh khắc thật, kèm tư liệu minh hoạ mở và kết tách riêng.", "一份基于真实瞬间的回顾结构，另附单独的示意性开场和结尾素材。",
    ),
    lanes: {
      you: l(
        "Provide real event assets, confirmed names and dates, and usage permissions.",
        "Gửi tư liệu sự kiện thật, tên và ngày đã xác nhận, cùng quyền sử dụng hình ảnh.", "提供真实的活动素材、已确认的人名和日期，以及图片使用授权。",
      ),
      agent: l(
        "Arrange real highlights, verify captions against your notes, and propose separate decorative scenes.",
        "Sắp xếp điểm nhấn thật, đối chiếu chú thích với ghi chú của bạn và đề xuất riêng các cảnh trang trí.", "整理真实的精彩瞬间，根据你的笔记核对字幕，并单独建议装饰性场景。",
      ),
      muse4ai: l(
        "Generate abstract or illustrative opening and closing assets through Muse.",
        "Tạo ảnh hoặc clip mở, kết mang tính trừu tượng hay minh hoạ qua Muse.", "通过 Muse 生成抽象或示意性的开场和结尾素材。",
      ),
    },
    prompt: l(
      "Plan a recap using this approved footage from our school fair. Keep names and dates tied to my notes. Suggest an abstract opening and closing, then request them through Muse4AI after approval. Do not generate attendees, speeches, or activities that were not recorded.",
      "Lên video tổng kết từ tư liệu hội chợ trường đã duyệt này. Dùng tên và ngày đúng theo ghi chú của tôi. Đề xuất cảnh mở, kết trừu tượng rồi đợi duyệt mới nhờ Muse4AI tạo. Không tạo thêm người tham dự, bài phát biểu hay hoạt động chưa được ghi lại.", "用这份已批准的校园集市录像规划一期回顾视频。人名和日期以我的笔记为准。建议一段抽象的开场和结尾，获批后再通过 Muse4AI 请求。不要生成没有录下的参与者、发言或活动。",
    ),
    media: ["uc-event-recaps-1"],
    limits: [
      clipLimit,
      usageLimit,
      l(
        "Do not fabricate attendees, quotes, or event moments. Label generated scenes and never present them as real event recordings.",
        "Không bịa người tham dự, lời nói hay khoảnh khắc sự kiện. Gắn nhãn cảnh tạo bằng AI, không giới thiệu là bản quay thật tại sự kiện.", "不要编造参与者、引言或活动瞬间。为生成的场景打上标签，绝不要把它说成真实的活动录像。",
      ),
    ],
    docs: ["reference-files", "create-video", "library"],
    related: ["realistic-broll", "social-campaigns", "storyboards"],
    featured: false,
    rank: 17,
  },
  {
    slug: "research-to-visuals",
    category: "office",
    title: l("Research notes into a visual brief", "Từ ghi chú nghiên cứu đến bản yêu cầu hình", "把研究笔记变成视觉需求说明"),
    summary: l(
      "Turn research notes into a visual brief with source-linked claims, illustrative image ideas, and a review step before generating assets.",
      "Biến ghi chú nghiên cứu thành bản yêu cầu hình ảnh, gắn nguồn cho nhận định và duyệt ý tưởng minh hoạ trước khi nhờ AI tạo ảnh.", "把研究笔记变成视觉需求说明，观点附上来源，生成素材前先审核插图创意并确认无误。",
    ),
    who: l(
      "Analysts, researchers, and office teams preparing presentations from shareable sources.",
      "Chuyên viên phân tích, người nghiên cứu và nhóm văn phòng làm thuyết trình từ nguồn được phép chia sẻ.", "根据可分享的资料准备演示文稿的分析师、研究人员和办公室团队。",
    ),
    outcome: l(
      "A source-aware visual brief and reviewed illustrations, with uncertain claims clearly marked.",
      "Bản yêu cầu hình ảnh có ghi nguồn và bộ minh hoạ đã duyệt, đánh dấu rõ nhận định chưa chắc.", "一份注明来源的视觉需求说明和已审核的插图，不确定的观点已明确标出。",
    ),
    lanes: {
      you: l(
        "Provide shareable sources, the research question, and the audience's decision needs.",
        "Gửi nguồn được phép chia sẻ, câu hỏi nghiên cứu và điều người xem cần để ra quyết định.", "提供可分享的资料、研究问题，以及受众做决策时需要的信息。",
      ),
      agent: l(
        "Compare claims with sources, distinguish findings from hypotheses, and draft visual prompts for approval.",
        "Đối chiếu nhận định với nguồn, tách kết quả khỏi giả thuyết và soạn lời nhắc tạo hình để bạn duyệt.", "把观点与来源对照，区分研究发现与假设，并起草视觉提示词供你批准。",
      ),
      muse4ai: l(
        "Forward approved Ask requests to Muse and generate requested illustrative images or clips.",
        "Chuyển yêu cầu Ask đã duyệt tới Muse và tạo ảnh hoặc clip minh hoạ theo yêu cầu.", "把已批准的 Ask 请求转发给 Muse，并生成所需的示意图片或片段。",
      ),
    },
    prompt: l(
      "Turn these shareable research notes into a visual brief for our team presentation. Link factual claims to the supplied sources and flag gaps. Suggest illustrations separately from data charts. After I approve, use Muse4AI for illustrative assets only, not for evidence or invented findings.",
      "Chuyển ghi chú nghiên cứu được phép chia sẻ này thành bản yêu cầu hình cho buổi thuyết trình nhóm. Gắn nhận định thực tế với nguồn tôi gửi và đánh dấu chỗ thiếu. Tách ý tưởng minh hoạ khỏi biểu đồ dữ liệu. Đợi tôi duyệt rồi dùng Muse4AI tạo hình minh hoạ, không tạo bằng chứng hay bịa kết quả.", "把这些可分享的研究笔记变成我们团队演示的视觉需求说明。事实性观点请关联我提供的来源，并标出缺失的部分。插图创意与数据图表分开建议。等我批准后，只用 Muse4AI 生成示意素材，不要用它生成证据或编造研究发现。",
    ),
    media: ["uc-research-to-visuals-1"],
    limits: [
      usageLimit,
      l(
        "Verify citations and conclusions yourself. Muse does not provide access to Meta's internal data stores.",
        "Bạn cần tự kiểm tra trích dẫn và kết luận. Muse không cung cấp quyền truy cập kho dữ liệu nội bộ của Meta.", "请自行核实引用和结论。Muse 不提供 Meta 内部数据存储的访问权限。",
      ),
      l(
        "AI images are illustrations, not research evidence. Build quantitative charts from verified data in a chart tool.",
        "Ảnh AI là hình minh hoạ, không phải bằng chứng nghiên cứu. Vẽ biểu đồ định lượng từ dữ liệu đã kiểm tra bằng công cụ biểu đồ.", "AI 图片只是插图，不是研究证据。定量图表请用制图工具根据已核实的数据制作。",
      ),
      l(
        "Share only permitted material. Jobs on the same Muse account share its Muse memory; use a separate account for research.",
        "Chỉ gửi tài liệu được phép chia sẻ. Các tác vụ trên cùng tài khoản dùng chung bộ nhớ Muse; nên dùng tài khoản riêng cho nghiên cứu.", "只分享允许分享的资料。同一 Muse 账号下的任务共享 Muse 记忆；研究工作请使用单独的账号。",
      ),
    ],
    docs: ["ask-and-research", "reference-files", "create-image"],
    related: ["data-report-videos", "lesson-videos", "ngo-explainers"],
    featured: false,
    rank: 18,
  },
];
