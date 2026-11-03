/**
 * 紫微斗数合盘知识库
 * 基于倪海厦《天纪》体系 + 《紫微斗数全书》古典断语 + 全网专业资料整合
 * 供合盘 AI 分析使用
 */

// ─── 十四主星在夫妻宫的完整断语 ──────────────────────────

export const STAR_IN_FUQI_GU: Record<string, {
  summary: string;       // 一句话核心
  good: string;          // 吉象条件/表现
  bad: string;           // 凶象/注意事项
  spouse_traits: string; // 配偶外形性格
  timing: string;        // 婚期建议
  ni_quote?: string;     // 倪海厦原话
}> = {
  '紫微': {
    summary: "Người phối ngẫu có năng lực, lòng tự trọng cao; cổ thư thiên về kết hôn khi trưởng thành, lấy sự tôn trọng làm nền tảng.",
    good: "Tam phương hội Tả Phụ, Hữu Bật, Lộc tinh được luận là được hỗ trợ trong hôn nhân và tài vận.",
    bad: "Đế tinh cô độc, ít sao phù trợ; ở Thìn Tuất có thể bị luận là tình cảm nhạt; hội Phá Quân tăng sự biến động.",
    spouse_traits: "Người phối ngẫu có chính kiến, tự trọng, năng lực tốt nhưng đôi khi ít bày tỏ tình cảm.",
    timing: "Cổ thư thiên về kết hôn khi trưởng thành; không có mốc tuổi nào bảo đảm hòa hợp.",
    ni_quote: "Dịch ý lời giảng: Tử Vi tại Phu Thê dễ biểu thị người phối ngẫu độc lập; giao tiếp và tôn trọng rất quan trọng.",
  },
  '天机': {
    summary: "Thiên Cơ ở Phu Thê được luận là tình cảm biến đổi, cần sự linh hoạt.",
    good: "Gặp Lộc Tồn hoặc Hóa Lộc có thể tăng cát lợi; gặp Thái Âm thêm sự mềm mỏng.",
    bad: "Hóa Kỵ hoặc hội sát tinh được cổ thư luận là nhiều biến động, cần đối thoại thay vì suy đoán chia tay.",
    spouse_traits: "Người phối ngẫu được mô tả thông minh, nhạy cảm, giàu suy nghĩ, đôi khi hay do dự.",
    timing: "Cổ thư khuyên chọn người có mức độ chín chắn phù hợp; chênh lệch tuổi không bảo đảm hạnh phúc.",
    ni_quote: "Dịch ý: Thiên Cơ chủ biến đổi, khi luận hôn nhân cần xét sao phối hợp.",
  },
  '太阳': {
    summary: "Thái Dương tại Phu Thê liên hệ danh tiếng, trách nhiệm và tính hào sảng.",
    good: "Khi Miếu Vượng và hội cát tinh, cổ thư luận người phối ngẫu năng động và hỗ trợ gia đình.",
    bad: "Lạc Hãm, Hóa Kỵ được xem là bất lợi; những lời đoán cực đoan về bệnh, tử vong hoặc 'khắc phu' không phải sự thật có thể kiểm chứng.",
    spouse_traits: "Người phối ngẫu cởi mở, có trách nhiệm xã hội, đôi khi quá quyết đoán.",
    timing: "Cần tôn trọng khoảng riêng, làm mới cách giao tiếp khi quan hệ thay đổi.",
    ni_quote: "Dịch ý lời giảng: Thái Dương Hóa Kỵ là yếu tố cổ thư cần xét kỹ, không phải dự báo tai họa.",
  },
  '武曲': {
    summary: "Vũ Khúc tại Phu Thê chủ thực tế, tài chính và tính cương nghị; cổ thư thường khuyên kết hôn muộn.",
    good: "Vũ Khúc Hóa Lộc hoặc hội Lộc Tồn được luận là có khả năng tích lũy tiền bạc.",
    bad: "Hóa Kỵ hoặc hội sát tinh thường được luận là trở lực; không thể suy ra ly dị hay khuyết tật của người phối ngẫu.",
    spouse_traits: "Người phối ngẫu độc lập, thẳng thắn, có kỷ luật và năng lực kiếm sống, nhưng có thể ít biểu lộ cảm xúc.",
    timing: "Cổ thư thường khuyên nên trưởng thành trước khi kết hôn, không nên áp dụng tuổi cố định.",
    ni_quote: "Dịch ý: Vũ Khúc có khí chất cương nghị; tình cảm cần sự mềm mỏng.",
  },
  '天同': {
    summary: "Thiên Đồng tại Phu Thê gắn với hòa nhã, hưởng phúc, thường được khuyên kết hôn khi đủ chín chắn.",
    good: "Lộc tinh hoặc Thái Âm hội hợp tăng ý nghĩa gia đình ổn định và cảm xúc dịu dàng.",
    bad: "Hóa Kỵ hoặc nhiều sát tinh được luận là tình cảm nguội dần hoặc khó thống nhất kỳ vọng.",
    spouse_traits: "Người phối ngẫu ôn hòa, lạc quan, thích cuộc sống dễ chịu, đôi khi thiếu chủ động.",
    timing: "Chú trọng mức độ trưởng thành và khả năng chịu trách nhiệm hơn là chênh lệch tuổi.",
  },
  '廉贞': {
    summary: "Liêm Trinh tại Phu Thê liên hệ cảm xúc mạnh, đào hoa thứ và biến động trong cách luận cổ.",
    good: "Đồng cung Thiên Phủ ở vị trí phù hợp có thể thêm tính ổn định, người phối ngẫu ôn hòa.",
    bad: "Cổ thư có những câu rất nặng khi Liêm Trinh hội Tham Lang, Phá Quân hoặc Thất Sát, nói về chia ly hay tử vong; đây chỉ là quan niệm cổ, không phải kết luận thực tế.",
    spouse_traits: "Người phối ngẫu có sức hút, giao tiếp tốt, cá tính mạnh; quan hệ cần ranh giới rõ ràng.",
    timing: "Tài liệu cổ đề cập chênh lệch tuổi; thực tế nên đánh giá sự đồng thuận và chín chắn.",
    ni_quote: "Dịch ý cổ thư: Liêm Trinh hội Tham Lang, Phá Quân, Thất Sát ở Phu Thê là các cách cục cần thận trọng, không được suy ra tử vong.",
  },
  '天府': {
    summary: "Thiên Phủ được xem là cát tinh, biểu thị gia đình ổn định, tuy có thể ít bộc lộ cảm xúc.",
    good: "Hội Lộc tinh, ít sát tinh thường được luận là thuận lợi về kinh tế và nếp sống.",
    bad: "Một số sách coi Phụ Bật đơn tinh hoặc sát tinh là yếu tố biến động, nhưng không thể kết luận tái hôn.",
    spouse_traits: "Người phối ngẫu nhã nhặn, có nguyên tắc tài chính, thực tế, chăm chỉ, đôi khi bảo thủ.",
    timing: "Chủ động vun đắp tình cảm, phân công trách nhiệm và trao đổi kế hoạch chung.",
  },
  '太阴': {
    summary: "Thái Âm chủ sự dịu dàng, điền sản và tâm tư; lạc Hãm hội sát tinh cần xét thêm.",
    good: "Khi Miếu Vượng, hội cát tinh được cổ thư luận là người phối ngẫu tinh tế và có thành tựu.",
    bad: "Lạc Hãm hoặc Hóa Kỵ có thể được cổ thư gắn với khúc mắc gia đình; không thể khẳng định người phối ngẫu mắc bệnh hay bất hòa.",
    spouse_traits: "Người phối ngẫu tinh tế, nhạy cảm, chú trọng cảm xúc và sự gắn bó.",
    timing: "Không có mốc tuổi cố định; khi khác biệt nhu cầu nên tăng đối thoại.",
    ni_quote: "Dịch ý: Thái Âm Hóa Kỵ được cổ thư liên hệ với khó khăn trong gia đình, không quyết định mâu thuẫn thật.",
  },
  '贪狼': {
    summary: "Tham Lang là Đào Hoa tinh, chủ sức hút, giao tế và sự ham thích trải nghiệm.",
    good: "Hóa Lộc, Hóa Khoa có thể tăng ý nghĩa tài nghệ, hòa hợp và nhân duyên.",
    bad: "Hóa Kỵ và sát tinh có thể biểu thị khó cân bằng các nhu cầu; không thể suy ra chắc chắn ngoại tình.",
    spouse_traits: "Người phối ngẫu đa tài, giỏi giao tiếp, nhiều mối quan hệ và giàu năng lượng.",
    timing: "Nên thỏa thuận về sự chung thủy, thời gian dành cho nhau và các ranh giới.",
    ni_quote: "Dịch ý lời giảng: Tham Lang còn mang ý nghĩa ham muốn vật chất, rượu và sắc; vị trí Ngọ có cách luận khác.",
  },
  '巨门': {
    summary: "Cự Môn chủ khẩu tài, tranh luận và các vấn đề do lời nói gây ra.",
    good: "Hội Thái Dương Miếu Vượng hoặc Hóa Lộc được luận là khả năng nói năng trở thành lợi thế.",
    bad: "Hóa Kỵ hoặc Đà La có thể gắn với hiểu lầm, xung đột và cảm giác không được lắng nghe.",
    spouse_traits: "Người phối ngẫu giỏi tranh luận, coi trọng quan điểm cá nhân, có thể khá khắt khe.",
    timing: "Cần xây dựng thói quen giao tiếp tích cực, không thắng thua trong tranh luận.",
  },
  '天相': {
    summary: "Thiên Tướng tại Phu Thê chủ trợ lực, phép tắc và sự hợp tác.",
    good: "Tả Hữu và Lộc tinh hội chiếu được xem là hỗ trợ tình cảm và tài vận.",
    bad: "Sát tinh được luận là cảm giác áp lực hoặc khó nói ra nhu cầu, không quyết định tái hôn.",
    spouse_traits: "Người phối ngẫu thẳng thắn, trọng chữ tín, giỏi tổ chức và điều hòa quan hệ.",
    timing: "Có thể phát triển từ sự quen biết trong công việc, học tập hoặc cộng đồng.",
  },
  '天梁': {
    summary: "Thiên Lương thường liên hệ người phối ngẫu chín chắn, có trách nhiệm.",
    good: "Lộc tinh và cát tinh hội hợp được luận là tăng sự tin cậy và ổn định.",
    bad: "Hóa Kỵ, sát tinh hoặc Thiên Mã có thể biểu thị cách biệt do công việc và môi trường.",
    spouse_traits: "Người phối ngẫu chững chạc, thích đưa ra lời khuyên, đôi khi thành áp đặt.",
    timing: "Chú trọng trao đổi và bình đẳng, không giả định hôn nhân nhất thiết trắc trở.",
  },
  '七杀': {
    summary: "Thất Sát tại Phu Thê được luận là quan hệ cần tôn trọng độc lập và không gian riêng.",
    good: "Miếu Vượng, hội cát tinh có thể biểu thị người phối ngẫu quyết đoán và có trách nhiệm.",
    bad: "Hội sát tinh được cổ thư luận là dễ cứng rắn và mâu thuẫn, không đồng nghĩa ly hôn.",
    spouse_traits: "Người phối ngẫu mạnh mẽ, hành động nhanh, có thể khó diễn đạt cảm xúc.",
    timing: "Cổ thư khuyên kết hôn khi trưởng thành; không có tuổi cứng nhắc.",
    ni_quote: "Dịch ý: Thất Sát tại Phu Thê cần xét tính cương của cả hai phía để tránh căng thẳng.",
  },
  '破军': {
    summary: "Phá Quân ở Phu Thê liên hệ sự đổi mới, tự do và những thay đổi trong tình cảm.",
    good: "Hóa Lộc được luận về khả năng ổn định lại sau giai đoạn biến động.",
    bad: "Hóa Kỵ, Liêm Trinh hoặc nhiều sát tinh thường được xếp vào cách cục cần chú ý, không phải dự báo cái chết hay đổ vỡ.",
    spouse_traits: "Người phối ngẫu có nhu cầu tự do, không thích gò bó, quyết đoán nhưng có thể thay đổi nhanh.",
    timing: "Nên kéo dài thời gian tìm hiểu, không đưa ra cam kết chỉ từ cảm xúc nhất thời.",
    ni_quote: "Dịch ý cổ thư: Phá Quân chủ sự biến động, không quyết định kết quả hôn nhân.",
  },
};

// ─── 四化在夫妻宫的完整断语 ──────────��─────────────────────

export const SIHUA_IN_FUQI_GU = {
  '化禄': "Hóa Lộc tại Phu Thê được luận về nhân duyên và việc chia sẻ nguồn lực; Tự Hóa Lộc có cách giải riêng.",
  '化权': "Hóa Quyền biểu thị tính chủ động và trách nhiệm; hai người cần cân bằng quyền quyết định.",
  '化科': "Hóa Khoa được luận về sự hòa hợp, danh tiếng, kiến thức và quý nhân hỗ trợ.",
  '化忌': "Hóa Kỵ liên hệ những vướng mắc cần giải quyết, không đồng nghĩa chia ly hoặc tử vong.",
};

// ─── 合盘核心方法论 ─────────────────────────────────────────

export const HEMING_METHODOLOGY = "## Khung phân tích ghép hai lá số (theo hệ thống Nghê Hải Hạ và Tử Vi Đẩu Số Toàn Thư)\n\n**Lưu ý:** Nội dung sau ghi nhận quan niệm của trường phái Tử Vi truyền thống. Không có cơ sở khoa học để dự đoán chắc chắn tình cảm, khả năng kết hôn, ngoại tình, ly dị, tử vong hay tài vận bằng lá số.\n\n### I. Nguyên tắc đối chiếu hai cung\n\nCổ quyết được tóm lược: “Luận hôn nhân mà chỉ xem cung Phu Thê là chưa đủ; phải phối hợp cung Phúc Đức.”\n\n- **Cung Phu Thê:** Hình tượng sao ở lĩnh vực người phối ngẫu, cách tương tác và tình cảm.\n- **Cung Phúc Đức:** Phúc khí, chiều sâu tâm lý và đời sống tinh thần.\n- **Cung Mệnh:** Tính chất tiên thiên, phong cách ứng xử.\n- **Tam phương tứ chính:** Quan hệ giữa Mệnh, Tài Bạch, Quan Lộc, Thiên Di và Đối cung.\n\nKhi ghép lá số cần xét đồng thời cung Mệnh, cung Phu Thê và cung Phúc Đức của cả hai người.\n\n### II. Tiêu chí hòa hợp trong cổ thư\n\n**Tổ hợp được coi là hòa hợp cao:**\n- Chính tinh cung Phu Thê của người A trùng hoặc tương hợp với chính tinh cung Mệnh người B.\n- Chính tinh cung Phu Thê của người B trùng hoặc tương hợp với chính tinh cung Mệnh người A.\n- Sự tương ứng hai chiều từng được gọi là Thiên tác chi hợp, nhưng không có nghĩa là định mệnh không thể thay đổi.\n\n**Tổ hợp phối hợp tốt:**\n- Sự tương ứng một chiều giữa Phu Thê và Mệnh.\n- Ngũ hành, tinh tính và hành xử của hai bên có thể bổ trợ nhau.\n- Đại hạn có những yếu tố cát lợi trong cách luận truyền thống.\n\n**Tổ hợp cần xem xét kỹ:**\n- Hóa Kỵ, sát tinh tại những cung liên hệ với Phu Thê hoặc Mệnh.\n- Một số phương pháp Phi Hóa có quy tắc riêng; không trộn các phái.\n- Không sử dụng các dấu hiệu trên để gán lỗi cho một người hay khuyên chia tay.\n\n### III. Năm bước luận ghép lá số\n\n**Bước 1: Xét nền tảng Mệnh cách.** So sánh cung Mệnh, cung Thân, cung Phúc Đức và các sao chủ đạo; ghi nhận sự tương đồng và bổ trợ theo tinh tính.\n\n**Bước 2: Đối chiếu cung Phu Thê.** Xem chính tinh Phu Thê của người A đối chiếu Mệnh và Tam hợp người B, rồi làm chiều ngược lại. Xét Tứ Hóa và sát tinh từng lá số.\n\n**Bước 3: Xét Thái Dương và Thái Âm.** Phân tích vị trí Miếu, Vượng, Lợi, Hãm, hội chiếu và Tứ Hóa. Những quan niệm cổ về vai trò nam và nữ không được xem là chân lý về giới.\n\n**Bước 4: Đối chiếu Phi Hóa khi đúng phương pháp.** Nếu dùng bảng Hóa theo thiên can, xét Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ ở các cung tương ứng. Phải phân biệt Sinh niên, Đại hạn và Lưu niên; không suy diễn “người này gây hại cho người kia” từ một sao.\n\n**Bước 5: Phối hợp Đại hạn và Lưu niên.** Xét những giai đoạn được cổ thư mô tả là thuận hoặc không thuận. Không đưa ra năm cưới hay kết thúc quan hệ như một tiên đoán chắc chắn.\n\n### IV. Hình tượng Tứ Hóa khi ghép lá số\n\n| Loại | Ý nghĩa truyền thống |\n|---|---|\n| Hóa Lộc | Tài lộc, nhân duyên, hỗ trợ |\n| Hóa Quyền | Quyền hành, chủ động và trách nhiệm |\n| Hóa Khoa | Khoa danh, hòa giải, sự tôn trọng |\n| Hóa Kỵ | Trở lực, vướng mắc, vấn đề cần thương lượng |\n| Hóa Kỵ hai chiều | Cách cục được coi là có nhiều khác biệt, không đồng nghĩa quan hệ độc hại |\n\n### V. Xét thời điểm hôn nhân\n\n**Tầng bản mệnh:** Cung Phu Thê có cát tinh và sát tinh ra sao. Một số cổ thư khuyên kết hôn khi đủ chín chắn nếu có nhiều sát tinh, Vũ Khúc, Liêm Trinh, Thất Sát hoặc Phá Quân; không có ngưỡng tuổi bắt buộc.\n\n**Tầng Đại hạn:** Xét vị trí cung Phu Thê của Đại hạn và Tứ Hóa trong chu kỳ mười năm.\n\n**Tầng Lưu niên:** Xét Hồng Loan, Thiên Hỷ, các sao ở Mệnh và Phu Thê theo đúng phép an sao. Đây chỉ là cách đọc truyền thống, không bảo đảm hôn nhân diễn ra trong năm.\n\n### VI. Các cung liên hệ đến chủ đề kết hôn\n\n| Cung Lưu niên | Chủ đề có thể tham khảo |\n|---|---|\n| Phu Thê | Quan hệ đôi lứa, cam kết hôn nhân |\n| Mệnh | Bản thân chủ động lựa chọn |\n| Tử Tức | Kế hoạch con cái, gia đình |\n| Điền Trạch | Nhà cửa và môi trường cư trú |\n| Phụ Mẫu | Cha mẹ, người lớn tuổi và sự giới thiệu từ gia đình |\n\n### VII. “Khắc phu/khắc thê” trong cách nói cổ\n\nMột số lời giảng sử dụng khái niệm “khắc phu”, “khắc thê” theo nghĩa ví von về sự bất cân bằng trách nhiệm giữa hai người. Tuy nhiên, các phán đoán rằng Liêm Trinh – Tham Lang, Liêm Trinh – Phá Quân hoặc Liêm Trinh – Thất Sát tại Phu Thê chắc chắn dẫn đến tai họa, tử vong hay chia ly là những quan niệm cổ cực đoan. Không thể dùng chúng đánh giá tính mạng, đạo đức hay phẩm chất con người.\n\nCác yếu tố có thể được một số phái xét gồm Hóa Kỵ, các sát tinh tại Phu Thê, các sao Nhật Nguyệt, Cô Thần và Quả Tú. Phải cân nhắc tổng thể và không biến các nhận định này thành sự thật cá nhân.\n\n### VIII. Luận hợp tác sự nghiệp\n\nCác cung tham khảo: Quan Lộc (sự nghiệp), Huynh Đệ hoặc Nô Bộc (đối tác), Phúc Đức (động lực và sự đồng hành).\n\nNhững phối hợp như hai cung Mệnh bổ trợ nhau hoặc Hóa Lộc chiếu Quan Lộc được cổ thư xem là cát; Hóa Kỵ, Cự Môn, sát tinh hội Nô Bộc được xem là trở lực. Nhưng quyết định làm ăn phải dựa trên năng lực thực tế, hợp đồng, dòng tiền và mức độ tin cậy, không chỉ dựa vào lá số.\n\n### IX. Một số tổ hợp tương quan\n\n| Chính tinh / cách cục | Đặc điểm theo trường phái |\n|---|---|\n| Tử Vi – Thiên Phủ | Quyền uy kết hợp ổn định |\n| Thiên Tướng – chính tinh khác | Tính hỗ trợ, điều hòa |\n| Thiên Lương – Thiên Đồng | Trách nhiệm kết hợp hòa nhã |\n| Thái Dương – Thái Âm | Dương và Âm bổ sung |\n| Thất Sát – Thất Sát | Hai người quyết đoán, cần thống nhất cách phân quyền |\n| Phá Quân – Phá Quân | Cùng muốn thay đổi, cần cam kết lâu dài |\n| Liêm Trinh – Thất Sát / Phá Quân | Khác biệt trong cách xử lý biến động |\n| Sát Phá Tham – Cơ Nguyệt Đồng Lương | Khai phá phối hợp ổn định |\n| Tử Phá – Liêm Phủ | Tính cách có thể bổ sung nhau |\n| Vũ Khúc – Thiên Đồng | Cương và nhu cùng tồn tại |\n\n### X. Dẫn chứng lời giảng\n\nCác trích dẫn trong bài giảng Thiên Kỷ đề cập việc phối hợp cung Phu Thê với cung Phúc Đức, tính chất Liêm Trinh, Nhật Nguyệt, Thất Sát và Cự Môn. Một số câu có lời lẽ cực đoan hoặc tính định mệnh của bối cảnh giảng dạy. Khi muốn trích dẫn nguyên văn, hãy kiểm tra mốc video trong docs/tianji-ziwei thay vì tự tạo lời trích hay trình bày bản dịch ý là nguyên văn.\n";

// ─── 婚姻判断辅助表 ───────────��─────────────────────────────

export const MARRIAGE_STARS_BRIEF: Record<string, string> = {
  '红鸾': "Hồng Loan chủ duyên hỷ theo cổ thư, cần xem phối hợp các sao.",
  '天喜': "Thiên Hỷ chủ hỷ sự, thường phối hợp Hồng Loan.",
  '天姚': "Thiên Diêu chủ Đào Hoa, tài nghệ và giao tế.",
  '咸池': "Hàm Trì là Đào Hoa tinh, cần xét tổ hợp toàn cục.",
  '孤辰': "Cô Thần mang tính độc lập, không quyết định hôn nhân.",
  '寡宿': "Quả Tú được liên hệ với cảm giác cô đơn hoặc xa cách.",
  '天哭': "Thiên Khốc là sao biểu tượng buồn phiền, không dự đoán tai họa.",
  '天虚': "Thiên Hư liên hệ hụt hẫng, hao tổn tinh thần.",
  '天巫': "Thiên Vu được luận về tín ngưỡng và sự trợ lực trong một số phái.",
};

export const HEMING_SCORE_CRITERIA = {
  '五星': "Hai cung Phu Thê có nhiều yếu tố hội chiếu cát lợi theo cách luận cổ.",
  '四星': "Có sự phối hợp tích cực giữa các chính tinh và Tứ Hóa, vẫn cần vun đắp.",
  '三星': "Có điểm tương đồng và khác biệt, cần đối thoại để đồng hành.",
  '二星': "Một số tổ hợp được xem là bất lợi; quan hệ thực tế vẫn do hai người quyết định.",
  '一星': "Nhiều tổ hợp sát tinh trong cổ thư; không thể dùng để dự báo chia tay hay tai họa.",
};
