'use client';
import { motion, AnimatePresence } from 'framer-motion';
import type { Star } from '@/lib/ziwei/types';
import { STAR_DESCRIPTIONS } from '@/lib/ziwei/constants';
import { VI_TEXT } from '@/lib/i18n/vi';

interface StarDetailPanelProps {
  star: Star | null;
  palaceName?: string;
  onClose: () => void;
}

// 倪海厦体系各星详细解读（参考顾祥弘《飞星紫微斗数全书》及南北山人《紫微斗数全书》）
const STAR_DETAIL: Record<string, {
  niHaixia: string;
  classical: string;
  bestPalace: string;
  worstPalace: string;
  career: string;
  relationship: string;
  wealth: string;
  health: string;
}> = {
  '紫微': {
    niHaixia: 'Theo hệ thống Nghê Hải Hạ, Tử Vi được gọi là Đế tinh, biểu trưng quyền uy và tính tự chủ. Tử Vi thủ Mệnh có khuynh hướng độc lập, tự trọng; được Tả Phụ, Hữu Bật hội chiếu thì tăng khả năng lãnh đạo. Khi hội Thiên Phủ tại vị trí thuận lợi, cổ thư thường luận về tài quan. Cần xét thêm sát tinh Kình Dương, Đà La, Hỏa Tinh, Linh Tinh để đánh giá toàn cục.',
    classical: 'Theo cổ quyết, Tử Vi là Đế tọa, tượng trưng địa vị và quyền hành. Chú giải cổ nhấn mạnh việc xét vị trí đóng cung cùng các sao hội chiếu; tại Thìn thường được luận về tài quan, còn tại Tý cần xét kỹ điều kiện phối hợp.',
    bestPalace: 'Cung Mệnh (Thìn, Tuất), cung Quan Lộc',
    worstPalace: 'Cung Tật Ách, cung Phu Thê',
    career: 'Quản lý, lãnh đạo, hoạt động công chúng hoặc tự kinh doanh; hợp môi trường được tự chủ quyết định.',
    relationship: 'Tính tự trọng cao, ít chủ động bộc lộ tình cảm; nên chú ý lắng nghe và chia sẻ trong quan hệ.',
    wealth: 'Thường được luận về khả năng tích lũy và quản lý; cần xét đồng thời cung Tài Bạch và Quan Lộc.',
    health: 'Theo ngũ hành thuộc Thổ; cách liên hệ sao với cơ quan cơ thể chỉ là quan niệm cổ truyền, không dùng để chẩn đoán.',
  },
  '天机': {
    niHaixia: 'Thiên Cơ là sao chủ trí tuệ, mưu lược, ứng biến và thay đổi. Theo hệ thống Nghê Hải Hạ, người có Thiên Cơ thủ Mệnh thường nhanh nhạy, nhiều ý tưởng nhưng có thể do dự; Thiên Cơ Hóa Kỵ được luận là dễ vướng suy nghĩ quá mức. Cần phối hợp toàn bộ cách cục và Tứ Hóa.',
    classical: 'Cổ quyết luận Thiên Cơ thuộc Mộc, chủ tính linh hoạt, biết lập kế hoạch, có duyên với công việc tính toán và thương mại. Khi Miếu Vượng, năng lực tổ chức và suy xét thường được đề cao.',
    bestPalace: 'Cung Mệnh (Mão), cung Quan Lộc',
    worstPalace: 'Cung Phu Thê',
    career: 'Kỹ thuật, nghiên cứu, tư vấn, lập kế hoạch và những nghề thiên về trí tuệ.',
    relationship: 'Dễ phân tích nhiều và thay đổi suy nghĩ; nên tăng sự rõ ràng, ổn định trong giao tiếp.',
    wealth: 'Có xu hướng tạo thu nhập từ chuyên môn và kỹ năng; cần chú ý kế hoạch tích lũy.',
    health: 'Thuộc hành Mộc theo hệ thống cổ; không thể suy ra nguy cơ bệnh gan hay thần kinh chỉ từ Thiên Cơ.',
  },
  '太阳': {
    niHaixia: 'Thái Dương tượng trưng ánh sáng, danh tiếng, sự hào sảng và hình tượng người cha. Theo hệ thống Nghê Hải Hạ, vị trí Miếu Vượng từ Mão đến Ngọ thường được đánh giá tích cực, còn khi lạc Hãm cần xét thêm các sao hỗ trợ. Người có Thái Dương thủ Mệnh thường quan tâm trách nhiệm xã hội và sự ghi nhận.',
    classical: 'Cổ thư xem Thái Dương ở Ngọ là vị trí rực sáng, chủ danh tiếng và sự phát triển khi đủ cát tinh. Khi lạc Hãm, luận đoán phải cân nhắc thêm Tam phương tứ chính.',
    bestPalace: 'Cung Mệnh (Mão đến Ngọ), cung Quan Lộc',
    worstPalace: 'Cung Phu Thê, cung Tật Ách',
    career: 'Công quyền, quản lý, giáo dục, truyền thông, quan hệ công chúng.',
    relationship: 'Thẳng thắn và coi trọng trách nhiệm, đôi khi cứng rắn; nên chú ý dung hòa quan điểm.',
    wealth: 'Tài vận gắn với sự nghiệp và nỗ lực; cần tính cả trạng thái Miếu, Vượng hoặc Hãm.',
    health: 'Theo ngũ hành thuộc Hỏa; mọi khuyến nghị liên quan tim mạch hoặc mắt phải dựa trên đánh giá y khoa, không dựa vào lá số.',
  },
  '武曲': {
    niHaixia: 'Vũ Khúc là Tài tinh, chủ quyết đoán, kỷ luật và khả năng quản lý tài chính. Hệ thống Nghê Hải Hạ nhấn mạnh tính cương nghị của Vũ Khúc và lưu ý khi gặp Hóa Kỵ hoặc sát tinh. Khi đồng cung Thất Sát và có cát tinh, một số cổ quyết gọi là cách Tướng Tài.',
    classical: 'Cổ quyết luận Vũ Khúc thuộc Kim, tính cứng cỏi. Nếu thủ Mệnh và được Tam phương tứ chính hội cát tinh, thường được đánh giá có năng lực thực thi và quản lý tài chính.',
    bestPalace: 'Cung Mệnh (Thìn, Tuất, Sửu, Mùi), cung Tài Bạch, cung Quan Lộc',
    worstPalace: 'Cung Phu Thê',
    career: 'Tài chính, kế toán, kỹ thuật, quản lý vận hành và các nghề đòi hỏi quyết đoán.',
    relationship: 'Thực tế và thẳng thắn; có thể cần biểu đạt cảm xúc mềm mỏng hơn.',
    wealth: 'Được xem là Tài tinh, nhưng năng lực tích lũy cần luận qua toàn bộ cung sao.',
    health: 'Thuộc hành Kim theo cổ thư; không dùng đặc tính sao để dự báo tai nạn hoặc bệnh phổi.',
  },
  '天同': {
    niHaixia: 'Thiên Đồng là Phúc tinh, chủ hòa nhã, an nhàn và khả năng thích nghi. Theo hệ thống Nghê Hải Hạ, Thiên Đồng thủ Mệnh thường thích môi trường ổn định, ít cạnh tranh. Khi đồng cung Thiên Lương hoặc gặp Hóa Lộc được xem là tăng tính phúc hậu, nhưng vẫn phải xét sát tinh và vị trí đắc hãm.',
    classical: 'Cổ quyết gọi Thiên Đồng là sao Phúc Đức, chủ sự an hòa và hưởng phúc. Gặp Tam phương cát tinh thường được luận về đời sống thuận lợi, hòa nhã và có nhân duyên.',
    bestPalace: 'Cung Mệnh, cung Phúc Đức',
    worstPalace: 'Cung Quan Lộc',
    career: 'Dịch vụ, giáo dục, nghệ thuật, ẩm thực hoặc môi trường làm việc linh hoạt.',
    relationship: 'Hòa nhã nhưng đôi khi thiếu chủ động; cần nói rõ nhu cầu và mong đợi.',
    wealth: 'Ưa nguồn thu ổn định, thiên về bảo toàn hơn là đầu cơ.',
    health: 'Thuộc hành Thủy theo cổ truyền; nên duy trì vận động và sinh hoạt điều độ thay vì luận bệnh từ sao.',
  },
  '廉贞': {
    niHaixia: 'Liêm Trinh là sao mang tính kỷ luật, tài nghệ và đào hoa thứ. Theo hệ thống Nghê Hải Hạ, Liêm Trinh Hóa Kỵ thường được luận là có trở ngại về tranh chấp và danh dự; Liêm Trinh đồng cung Thiên Tướng có thể hình thành cách Liêm Tướng. Không nên dùng luận điểm cổ để dự đoán chắc chắn tai họa.',
    classical: 'Cổ quyết đề cập Liêm Trinh với các ý nghĩa tài nghệ, tình cảm phức tạp và tính nghiêm. Khi hội cát tinh, tính năng động và kỷ luật được nhấn mạnh; gặp Hóa Kỵ cần xét toàn cục.',
    bestPalace: 'Cung Quan Lộc (hội Thiên Tướng), cung Mệnh (gặp Hóa Lộc)',
    worstPalace: 'Cung Mệnh (Hóa Kỵ), cung Phu Thê',
    career: 'Nghệ thuật, pháp lý, hành chính hoặc những lĩnh vực cần khả năng tổ chức.',
    relationship: 'Cảm xúc phong phú; nên giữ ranh giới và sự minh bạch trong quan hệ.',
    wealth: 'Khả năng kiếm tiền từ tài nghệ; cần quản trị rủi ro pháp lý và tài chính như mọi hoạt động kinh doanh.',
    health: 'Thuộc hành Hỏa theo cổ thư; không dùng Liêm Trinh Hóa Kỵ để tiên đoán bệnh tật hay phẫu thuật.',
  },
  '天府': {
    niHaixia: 'Thiên Phủ là sao chủ kho tàng, tích lũy và ổn định. Người có Thiên Phủ thủ Mệnh thường được luận là thận trọng, thích tổ chức và quản lý tài nguyên. Hội Tử Vi hoặc các cát tinh có thể tăng ý nghĩa về tài quan; gặp Không Kiếp thì truyền thống cho rằng cần đề phòng thất thoát.',
    classical: 'Cổ quyết xem Thiên Phủ là Tài khố, thiên về giữ gìn và ổn định. Khi Tam phương hội cát tinh, cổ thư luận về khả năng tích lũy và phúc khí; Không Kiếp thường được xem là yếu tố bất lợi.',
    bestPalace: 'Cung Mệnh, cung Tài Bạch, cung Điền Trạch',
    worstPalace: 'Cung Thiên Di',
    career: 'Quản trị tài chính, hành chính, bảo hiểm, quản lý tài sản.',
    relationship: 'Thận trọng, coi trọng gia đình và sự an toàn lâu dài.',
    wealth: 'Tượng trưng tài khố và năng lực giữ của; hiệu quả thực tế phụ thuộc nhiều yếu tố ngoài lá số.',
    health: 'Thuộc hành Thổ theo cách phân loại truyền thống; nên giữ chế độ ăn uống và sinh hoạt điều độ.',
  },
  '太阴': {
    niHaixia: 'Thái Âm là sao biểu trưng âm nhu, điền sản, tài lộc và hình tượng người mẹ. Trong luận giải truyền thống, Thái Âm ở Hợi, Tý được xem là vị trí sáng, còn tại Ngọ có thể lạc Hãm. Khi Hóa Kỵ, cần xem tổng thể cung Phụ Mẫu, Phu Thê và các sao liên hệ, không suy diễn trực tiếp sự kiện.',
    classical: 'Cổ quyết xem Thái Âm là Tài tinh và chủ điền sản. Vị trí Miếu Vượng được đánh giá tích cực về sự ổn định; lạc Hãm cần phối hợp các sao khác trước khi luận đoán.',
    bestPalace: 'Cung Mệnh (Hợi, Tý), cung Tài Bạch',
    worstPalace: 'Cung Mệnh (Ngọ, trạng thái Hãm)',
    career: 'Tài chính, bất động sản, giáo dục, nghệ thuật và công việc cần sự tỉ mỉ.',
    relationship: 'Tinh tế, coi trọng cảm xúc và cảm giác an toàn trong quan hệ.',
    wealth: 'Được luận về tích lũy và điền sản; cần xét cung Điền Trạch cùng các yếu tố liên quan.',
    health: 'Thuộc hành Thủy theo quan niệm truyền thống; không suy ra bệnh phụ khoa hoặc thận từ sao này.',
  },
  '贪狼': {
    niHaixia: 'Tham Lang là Đào Hoa tinh, biểu thị tài nghệ, giao tế, ham học hỏi và khát vọng trải nghiệm. Theo hệ thống Nghê Hải Hạ, Tham Lang Hóa Lộc được xem là gia tăng sức hút và cơ hội tài lộc; đồng thời cần xét Không Kiếp, sát tinh và sự cân bằng của toàn lá số.',
    classical: 'Cổ quyết luận Tham Lang chủ đa tài, đào hoa và đời sống xã hội phong phú. Đắc cát tinh thường được luận về cơ hội; gặp sát tinh thì cần xem xét các điều kiện khác, tránh tuyệt đối hóa cát hung.',
    bestPalace: 'Cung Mệnh (gặp Hóa Lộc), cung Phúc Đức, cung Thiên Di',
    worstPalace: 'Cung Tật Ách',
    career: 'Nghệ thuật, truyền thông, thương mại, quan hệ công chúng và công việc cần mạng lưới xã hội.',
    relationship: 'Giàu sức hút và nhu cầu giao tiếp; cần xây dựng ranh giới, sự chung thủy và tin cậy.',
    wealth: 'Cơ hội thường gắn với kỹ năng và quan hệ; nên theo đuổi quản trị tiền bạc thực tế.',
    health: 'Được phân loại hành Mộc hoặc Thủy tùy hệ thống; không suy ra bệnh gan thận từ sao này.',
  },
  '巨门': {
    niHaixia: 'Cự Môn là Ám tinh, chủ khẩu thiệt, tranh luận và ngôn ngữ. Theo hệ thống Nghê Hải Hạ, Cự Môn Hóa Lộc hoặc Hóa Quyền có thể phát huy năng lực thuyết phục; Hóa Kỵ được luận là dễ nảy sinh bất đồng và hiểu lầm. Nên xét tính chất cung và các sao hội chiếu.',
    classical: 'Cổ quyết gọi Cự Môn là Ám diệu, chủ khả năng ngôn luận và thị phi. Khi hội Hóa Lộc, Hóa Quyền, phẩm chất ngôn ngữ có thể trở thành lợi thế; Hóa Kỵ thường được xem là yếu tố cần thận trọng lời nói.',
    bestPalace: 'Cung Quan Lộc (Hóa Lộc hoặc Hóa Quyền), cung Mệnh (Tý, Ngọ)',
    worstPalace: 'Cung Phu Thê, cung Tật Ách (Hóa Kỵ)',
    career: 'Luật, giáo dục, bán hàng, thuyết trình, tư vấn và đàm phán.',
    relationship: 'Có khả năng tranh luận nhưng đôi khi đa nghi; giao tiếp rõ ràng là điều quan trọng.',
    wealth: 'Có thể tận dụng năng lực ngôn ngữ và chuyên môn để kiếm sống; tránh tranh chấp tài chính.',
    health: 'Thuộc hành Thủy theo cổ thư; không dùng sao để suy đoán bệnh tai, miệng hoặc thận.',
  },
  '天相': {
    niHaixia: 'Thiên Tướng là Ấn tinh, chủ phụ tá, tổ chức và công việc hành chính. Theo hệ thống Nghê Hải Hạ, Thiên Tướng thường cần phối hợp sao mạnh để phát huy; hội Liêm Trinh có thể thành cách Liêm Tướng. Cần thận trọng với các tổ hợp mang tính hình kỵ.',
    classical: 'Cổ quyết xem Thiên Tướng chủ ấn tín, lễ nghi và trách nhiệm. Khi phối hợp Liêm Trinh cùng cát tinh, thường được luận về khả năng tổ chức, điều hành.',
    bestPalace: 'Cung Quan Lộc, cung Mệnh (hội Liêm Trinh)',
    worstPalace: 'Cung Tài Bạch, các vị trí bị Hình Kỵ giáp Ấn',
    career: 'Hành chính, tổ chức, pháp lý, thư ký, hỗ trợ điều hành.',
    relationship: 'Đáng tin cậy, thực tế; nên tăng khả năng tự quyết và chia sẻ trách nhiệm.',
    wealth: 'Thiên về quản lý chi tiêu và tích lũy bền vững.',
    health: 'Thuộc hành Thủy theo một số hệ thống; hãy dựa trên y học khi đánh giá sức khỏe.',
  },
  '天梁': {
    niHaixia: 'Thiên Lương là Ấm tinh, thường biểu thị sự bảo hộ, tinh thần trách nhiệm và quan hệ với người lớn tuổi. Theo hệ thống Nghê Hải Hạ, Thiên Lương thủ Mệnh có khuynh hướng quan tâm cộng đồng và công bằng. Việc hội cát tinh, Hóa Kỵ hoặc Thái Dương cần được luận theo đúng cách cục.',
    classical: 'Cổ quyết luận Thiên Lương là sao che chở, có duyên với trưởng bối và công việc trợ giúp. Hội cát tinh thường được xem là tăng yếu tố quý nhân và ổn định.',
    bestPalace: 'Cung Mệnh, cung Phụ Mẫu, cung Phúc Đức',
    worstPalace: 'Cung Mệnh (gặp Hóa Kỵ), cung Tài Bạch',
    career: 'Y tế, giáo dục, pháp lý, công tác xã hội và hoạt động cộng đồng.',
    relationship: 'Coi trọng sự chín chắn và tin cậy; có thể cần thời gian để xây dựng gắn bó.',
    wealth: 'Thiên về nguồn lực ổn định, được người khác hỗ trợ; nên thận trọng khi quyết định tài chính.',
    health: 'Thuộc hành Thổ theo cổ thư; không dùng Thiên Lương để dự báo bệnh xương khớp.',
  },
  '七杀': {
    niHaixia: 'Thất Sát là Tướng tinh, chủ quyết đoán, cạnh tranh và dám hành động. Theo hệ thống Nghê Hải Hạ, Thất Sát thủ Mệnh mang tính độc lập mạnh, cần xét cát tinh hỗ trợ để cân bằng. Khi đồng cung Vũ Khúc có thể được luận trong cách Tướng Tài. Không nên coi các cách sát tinh là dự báo tai nạn chắc chắn.',
    classical: 'Cổ quyết luận Thất Sát chủ khí chất mạnh, quyết đoán và thường gặp biến động. Tam hợp hội cát tinh có thể tăng cơ hội thành tựu, trong khi hội nhiều sát tinh cần thận trọng.',
    bestPalace: 'Cung Mệnh (được cát tinh phù trợ), cung Quan Lộc',
    worstPalace: 'Cung Phu Thê, cung Phụ Mẫu',
    career: 'Kỹ thuật, quản trị khủng hoảng, khởi nghiệp, quân đội hoặc những nghề cần quyết đoán.',
    relationship: 'Độc lập và có chính kiến; nên trau dồi lắng nghe, tôn trọng khác biệt.',
    wealth: 'Có khả năng chấp nhận thử thách; cần kiểm soát rủi ro tài chính thực tế.',
    health: 'Thuộc hành Kim trong cổ thư; không thể từ Thất Sát suy ra tai nạn hoặc bệnh tật.',
  },
  '破军': {
    niHaixia: 'Phá Quân là sao chủ phá cũ lập mới, cải cách và biến đổi. Theo hệ thống Nghê Hải Hạ, Phá Quân thủ Mệnh thường độc lập, thích thử nghiệm hướng đi mới; Hóa Lộc được luận là khả năng tái lập sau thay đổi. Cần xem đồng thời Đại hạn, Tứ Hóa và các sao hội chiếu.',
    classical: 'Cổ quyết mô tả Phá Quân gắn với phá cách, đổi mới và nhiều bước ngoặt. Khi có cát tinh, một số cách cục được luận là có khả năng tái thiết và phát triển sau biến động.',
    bestPalace: 'Cung Quan Lộc (hội Hóa Lộc), cung Thiên Di',
    worstPalace: 'Cung Phu Thê, cung Phụ Mẫu',
    career: 'Cải cách, đổi mới, xây dựng dự án mới, quản lý thay đổi hoặc kỹ thuật.',
    relationship: 'Coi trọng tự do và độc lập; cần đối thoại và duy trì cam kết.',
    wealth: 'Tài vận có thể biến động theo cách luận truyền thống; nên chú ý tích lũy và quản trị rủi ro.',
    health: 'Thuộc hành Thủy theo cổ thư; không dùng đặc tính sao để suy đoán bệnh sinh sản hoặc tiết niệu.',
  },
};

const levelConfig = {
  major: { label: 'Chính tinh', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
  lucky: { label: 'Cát tinh', color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
  sha:   { label: 'Sát tinh', color: 'text-red-400 border-red-500/30 bg-red-500/10' },
  minor: { label: 'Tạp tinh', color: 'text-slate-400 border-slate-500/25 bg-slate-500/10' },
};

const siHuaColors: Record<string, string> = {
  '禄': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  '权': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  '科': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
  '忌': 'text-red-400 bg-red-500/10 border-red-500/30',
};

export default function StarDetailPanel({ star, palaceName, onClose }: StarDetailPanelProps) {
  const desc = star ? STAR_DESCRIPTIONS[star.name] : null;
  const detail = star ? STAR_DETAIL[star.name] : null;
  const typeConfig = star ? levelConfig[star.type] : null;

  return (
    <AnimatePresence>
      {star && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2 }}
          className="card-glass rounded-xl overflow-hidden"
        >
          {/* 标题栏 */}
          <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid var(--t-border)' }}>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold" style={{ color: 'var(--t-gold)' }}>{VI_TEXT[star.name] ?? star.name}</span>
              {typeConfig && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full border ${typeConfig.color}`}>
                  {typeConfig.label}
                </span>
              )}
              {star.siHua && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium ${siHuaColors[star.siHua] || ''}`}>
                  Hóa {VI_TEXT[star.siHua] ?? star.siHua}
                </span>
              )}
            </div>
            <button onClick={onClose} className="transition-colors text-lg leading-none" style={{ color: 'var(--t-faint)' }}>×</button>
          </div>

          <div className="p-4 space-y-4 overflow-y-auto max-h-[560px]">
            {/* 基本信息 */}
            {desc && (
              <div className="flex flex-wrap gap-1.5">
                {[
                  `Ngũ hành · ${desc.element}`,
                  `Tính chất · ${desc.nature}`,
                  ...(palaceName ? [`Vị trí · ${palaceName}`] : []),
                  ...(star.brightness ? [star.brightness === 'bright' ? 'Miếu/Vượng' : star.brightness === 'dim' ? 'Hãm' : 'Bình hòa'] : []),
                ].map(tag => (
                  <div key={tag} className="text-[10px] px-2 py-1 rounded-full"
                    style={{
                      border: '1px solid var(--t-border)',
                      color: tag.includes('Miếu/Vượng') ? '#eab308' : tag.includes('Hãm') ? '#ef4444' : 'var(--t-text2)',
                    }}>
                    {tag}
                  </div>
                ))}
              </div>
            )}

            {/* 关键词 */}
            {desc && (
              <div>
                <div className="text-[10px] tracking-widest mb-1.5" style={{ color: 'var(--t-faint)' }}>Tính chất tinh diệu</div>
                <div className="flex flex-wrap gap-1.5">
                  {desc.keywords.split('·').map(k => (
                    <span key={k} className="text-[11px] px-2 py-0.5 rounded-full"
                      style={{ color: 'var(--t-gold)', border: '1px solid rgba(212,168,67,0.2)', background: 'rgba(212,168,67,0.06)' }}>
                      {k.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Diễn giải cổ quyết */}
            {detail && (
              <div className="rounded-xl p-3" style={{ background: 'rgba(212,168,67,0.04)', border: '1px solid rgba(212,168,67,0.12)' }}>
                <div className="text-[10px] tracking-widest mb-1.5 flex items-center gap-1" style={{ color: 'var(--t-gold)', opacity: 0.7 }}>
                  Diễn giải cổ quyết
                </div>
                <p className="text-[11px] leading-relaxed italic" style={{ color: 'var(--t-gold)', opacity: 0.8 }}>{detail.classical}</p>
              </div>
            )}

            {/* 倪海厦解读 */}
            {detail && (
              <>
                <div>
                  <div className="text-[10px] tracking-widest mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--t-faint)' }}>
                    <span className="w-3 h-px inline-block" style={{ background: 'var(--t-border-acc)' }} />
                    Luận giải theo hệ thống Nghê Hải Hạ
                    <span className="w-3 h-px inline-block" style={{ background: 'var(--t-border-acc)' }} />
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--t-text2)' }}>{detail.niHaixia}</p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {[
                    { label: 'Công danh, sự nghiệp', value: detail.career, icon: '◈' },
                    { label: 'Tình duyên', value: detail.relationship, icon: '♡' },
                    { label: 'Tài vận', value: detail.wealth, icon: '◆' },
                    { label: 'Lưu ý sức khỏe', value: detail.health, icon: '☯' },
                  ].map(item => (
                    <div key={item.label} className="card-inner rounded-lg p-3">
                      <div className="text-[10px] mb-1 flex items-center gap-1" style={{ color: 'var(--t-faint)' }}>
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      <p className="text-[11px] leading-relaxed" style={{ color: 'var(--t-text2)' }}>{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="text-[10px] p-2.5 rounded-lg" style={{ border: '1px solid rgba(74,222,128,0.15)', background: 'rgba(74,222,128,0.05)' }}>
                    <div className="text-emerald-500 mb-0.5 font-medium">Cung thuận lợi</div>
                    <div className="text-emerald-500/70">{detail.bestPalace}</div>
                  </div>
                  <div className="text-[10px] p-2.5 rounded-lg" style={{ border: '1px solid rgba(248,113,113,0.15)', background: 'rgba(248,113,113,0.05)' }}>
                    <div className="text-red-500 mb-0.5 font-medium">Cung cần lưu ý</div>
                    <div className="text-red-500/70">{detail.worstPalace}</div>
                  </div>
                </div>
              </>
            )}

            {/* 辅星/煞星说明 */}
            {!detail && star.type !== 'major' && (
              <div className="text-xs leading-relaxed" style={{ color: 'var(--t-text2)' }}>
                {star.type === 'lucky' && (
                  <>
                    {star.name === '文昌' && 'Văn Xương là Văn tinh, thường được luận về học hành, khoa cử và văn chương. Khi đắc địa và hội cát tinh, có lợi cho công việc giấy tờ, học thuật.'}
                    {star.name === '文曲' && 'Văn Khúc là sao chủ văn nghệ, tài hoa, ngôn ngữ và khả năng biểu đạt. Luận cát hung cần xem cung đóng và các sao hội hợp.'}
                    {star.name === '左辅' && 'Tả Phụ là Phụ tinh chủ sự hỗ trợ, thường được luận là quý nhân giúp đỡ và tăng khả năng tổ chức ở cung liên quan.'}
                    {star.name === '右弼' && 'Hữu Bật là Phụ tinh chủ sự phù trợ, được luận về các mối quan hệ giúp đỡ và khả năng phối hợp.'}
                    {star.name === '天魁' && 'Thiên Khôi là Quý nhân tinh, tượng trưng sự hỗ trợ, khoa bảng và cơ hội được đề bạt trong luận giải truyền thống.'}
                    {star.name === '天钺' && 'Thiên Việt là Quý nhân tinh, chủ sự tương trợ kín đáo và thuận lợi trong các mối quan hệ.'}
                    {star.name === '禄存' && 'Lộc Tồn là sao chủ tài lộc và tích lũy, thiên về giữ của và ổn định trong cách luận truyền thống.'}
                    {star.name === '天马' && 'Thiên Mã chủ di chuyển, thay đổi và hoạt động. Khi hội Lộc tinh, thường được luận là có cơ hội phát triển qua đi xa hoặc chuyển dịch.'}
                  </>
                )}
                {star.type === 'sha' && (
                  <>
                    {star.name === '地空' && 'Địa Không mang ý nghĩa hư hao, biến động, hụt hẫng theo cổ thư. Không dùng sao này để chẩn đoán vấn đề tâm lý.'}
                    {star.name === '地劫' && 'Địa Kiếp chủ hao tổn và biến động theo cách luận truyền thống; khi gặp cung Tài Bạch cần xét thêm cát tinh và điều kiện thực tế.'}
                    {star.name === '火星' && 'Hỏa Tinh là Sát tinh chủ sự nhanh mạnh và tính nóng. Hội Tham Lang có thể hình thành cách Hỏa Tham trong một số hệ thống.'}
                    {star.name === '铃星' && 'Linh Tinh là Sát tinh, biểu thị tác động ngầm và trở lực theo cổ thư; cần xem các sao hội chiếu trước khi luận đoán.'}
                    {star.name === '擎羊' && 'Kình Dương là Sát tinh mang tính cương mãnh, xung đột. Không được suy ra tai nạn thực tế chỉ từ vị trí Kình Dương.'}
                    {star.name === '陀罗' && 'Đà La là Sát tinh chủ sự trì trệ và vướng mắc trong luận giải truyền thống. Phải xét đồng thời các sao phối hợp.'}
                  </>
                )}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
