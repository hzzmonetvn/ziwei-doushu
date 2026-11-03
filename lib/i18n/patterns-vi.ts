import { translateVisibleText } from './vi';

// Bản dịch tên cách cục dùng riêng cho lớp hiển thị; tên Hán tự trong thuật toán giữ nguyên.
export const PATTERN_NAMES_VI: Record<string,string> = {
  "君臣庆会": "Quân Thần Khánh Hội",
  "紫府同宫": "Tử Phủ đồng cung",
  "府相朝垣": "Phủ Tướng triều viên",
  "阳梁昌禄": "Dương Lương Xương Lộc",
  "火贪格": "Cách Hỏa Tham",
  "铃贪格": "Cách Linh Tham",
  "武贪格": "Cách Vũ Tham",
  "杀破狼": "Sát Phá Tham",
  "机月同梁": "Cơ Nguyệt Đồng Lương",
  "廉贞天相格": "Cách Liêm Tướng",
  "武曲七杀": "Vũ Khúc Thất Sát",
  "天同天梁格": "Thiên Đồng Thiên Lương",
  "日月同宫": "Nhật Nguyệt đồng cung",
  "日月夹命": "Nhật Nguyệt giáp Mệnh",
  "巨日同宫": "Cự Nhật đồng cung",
  "石中隐玉": "Thạch Trung Ẩn Ngọc",
  "明珠出海": "Minh Châu Xuất Hải",
  "紫微入命": "Tử Vi nhập Mệnh",
  "辅弼夹命": "Phụ Bật giáp Mệnh",
  "昌曲夹命": "Xương Khúc giáp Mệnh",
  "魁钺夹命": "Khôi Việt giáp Mệnh",
  "双禄朝垣": "Song Lộc triều viên",
  "三奇加会": "Tam Kỳ gia hội",
  "羊陀夹忌": "Kình Đà giáp Kỵ",
  "火铃夹命": "Hỏa Linh giáp Mệnh",
  "空劫夹命": "Không Kiếp giáp Mệnh",
  "廉杀羊": "Liêm Sát Kình",
  "巨火羊": "Cự Hỏa Kình",
  "铃昌陀武": "Linh Xương Đà Vũ",
  "马头带箭": "Mã Đầu Đới Tiễn",
  "化禄入财": "Hóa Lộc nhập Tài Bạch",
  "化权入官": "Hóa Quyền nhập Quan Lộc",
  "机月同梁三星会": "Tam tinh Cơ Nguyệt Đồng Lương",
  "辅弼同会": "Phụ Bật đồng hội",
  "魁钺同会": "Khôi Việt đồng hội",
  "科权双会": "Khoa Quyền song hội"
};

// Diễn giải tiếng Việt, không phải bản chép nguyên văn cổ thư.
export const PATTERN_DESCRIPTIONS_VI: Record<string,string> = {
  "君臣庆会": "Tử Vi thủ Mệnh, Tả Phụ và Hữu Bật hội Tam phương tứ chính tạo cách Quân Thần khánh hội. Cổ thư liên hệ cách cục này với khả năng lãnh đạo, tổ chức và sự phù trợ của quý nhân.",
  "紫府同宫": "Tử Vi và Thiên Phủ đồng cung là cách Tử Phủ đồng cung, chủ sự ổn định và khả năng điều hành trong truyền thống. Cần xét điều kiện cung Mệnh, phụ tinh và sát tinh.",
  "府相朝垣": "Thiên Phủ và Thiên Tướng hội Tam phương tứ chính cung Mệnh là cách Phủ Tướng triều viên. Cổ thư xem đây là tổ hợp thiên về tổ chức, hành chính và sự ổn định.",
  "阳梁昌禄": "Thái Dương, Thiên Lương, Văn Xương và Lộc Tồn hội Mệnh tạo cách Dương Lương Xương Lộc, thường được luận về khoa danh, học vấn và nghề nghiệp chuyên môn.",
  "火贪格": "Tham Lang hội Hỏa Tinh tạo cách Hỏa Tham, biểu thị cơ hội và sự phát triển nhanh trong một số cách luận cổ. Nên xét toàn bộ cách cục, tránh xem là bảo đảm phát tài.",
  "铃贪格": "Tham Lang hội Linh Tinh tạo cách Linh Tham, gắn với biến đổi và cơ hội theo cổ thư. Khi có sát tinh khác cần luận cẩn trọng.",
  "武贪格": "Vũ Khúc và Tham Lang hội Mệnh là cách Vũ Tham. Truyền thống liên hệ cách này với tài vận phát triển sau quá trình tích lũy, năng lực giao tế và kinh doanh.",
  "杀破狼": "Thất Sát, Phá Quân và Tham Lang cùng hội Tam phương Mệnh thành cách Sát Phá Tham, chủ khai phá, thay đổi và tính hành động; không quyết định thành bại thực tế.",
  "机月同梁": "Thiên Cơ, Thái Âm, Thiên Đồng và Thiên Lương cùng hội là cách Cơ Nguyệt Đồng Lương, thường được liên hệ học thuật, công việc văn thư và sự ổn định.",
  "廉贞天相格": "Liêm Trinh và Thiên Tướng đồng cung thành cách Liêm Tướng, chủ kỷ luật, tổ chức, hành chính và ấn tín theo cổ thư. Tứ Hóa và sát tinh ảnh hưởng cách luận.",
  "武曲七杀": "Vũ Khúc và Thất Sát đồng cung, Tài tinh hội Tướng tinh, được luận về tính quả quyết và năng lực thực thi. Cần chú ý các sao đi kèm.",
  "天同天梁格": "Thiên Đồng và Thiên Lương đồng cung là tổ hợp Phúc tinh, Ấm tinh, thường luận về sự hòa nhã, phúc khí và công việc hỗ trợ cộng đồng.",
  "日月同宫": "Thái Dương và Thái Âm đồng cung, thường được luận về sự hòa hợp các tính chất âm dương. Độ sáng và các sao phối hợp quyết định cát hung.",
  "日月夹命": "Thái Dương và Thái Âm giáp hai bên cung Mệnh, gọi là Nhật Nguyệt giáp Mệnh. Phải xét cả độ sáng, không thể chỉ dựa trên vị trí giáp.",
  "巨日同宫": "Cự Môn và Thái Dương đồng cung, phối hợp khẩu tài với danh tiếng. Ý nghĩa thuận nghịch thay đổi theo cung và trạng thái tinh diệu.",
  "石中隐玉": "Cự Môn thủ Mệnh tại Tý hoặc Ngọ trong điều kiện phù hợp có thể thành cách Thạch Trung Ẩn Ngọc, mang ý nghĩa tài năng dần được nhận ra.",
  "明珠出海": "Cách Minh Châu Xuất Hải được luận khi cung Mệnh vô chính diệu, Nhật Nguyệt hội chiếu trong điều kiện phù hợp; tượng trưng cơ hội phát triển nhờ nỗ lực.",
  "紫微入命": "Tử Vi nhập cung Mệnh chủ tính tự chủ, uy nghi và khả năng lãnh đạo; có Tả Hữu hội chiếu thường thuận lợi hơn vị trí cô độc.",
  "辅弼夹命": "Tả Phụ và Hữu Bật giáp cung Mệnh, thành cách Phụ Bật giáp Mệnh, chủ sự tương trợ và năng lực tổ chức theo luận giải truyền thống.",
  "昌曲夹命": "Văn Xương và Văn Khúc giáp Mệnh tạo cách Xương Khúc giáp Mệnh, thường được luận về khả năng văn chương và học vấn.",
  "魁钺夹命": "Thiên Khôi và Thiên Việt giáp cung Mệnh tạo cách Khôi Việt giáp Mệnh, biểu thị quý nhân phù trợ trong cổ thư.",
  "双禄朝垣": "Hóa Lộc và Lộc Tồn cùng hội Tam phương tứ chính cung Mệnh, tạo cách Song Lộc triều viên, thường luận về tài lộc và tích lũy.",
  "三奇加会": "Hóa Lộc, Hóa Quyền và Hóa Khoa cùng hội Mệnh tạo cách Tam Kỳ gia hội, gắn với tài lộc, quyền hành và danh tiếng.",
  "羊陀夹忌": "Kình Dương và Đà La giáp cung có Hóa Kỵ là cách Kình Đà giáp Kỵ. Cổ thư xem là điều kiện bất lợi; không được suy ra tai họa chắc chắn.",
  "火铃夹命": "Hỏa Tinh và Linh Tinh giáp Mệnh, gọi là Hỏa Linh giáp Mệnh; thường nhắc người luận thận trọng với tính nóng và các biến động.",
  "空劫夹命": "Địa Không và Địa Kiếp giáp Mệnh, gọi là Không Kiếp giáp Mệnh; được luận về tính biến động và hao tổn, cần xét các cát tinh bù đắp.",
  "廉杀羊": "Liêm Trinh, Thất Sát và Kình Dương hội Mệnh là tổ hợp cần thận trọng trong một số cổ thư. Nên đánh giá thực tế, tránh suy đoán tai nạn.",
  "巨火羊": "Cự Môn, Hỏa Tinh và Kình Dương hội hợp, được xếp vào tổ hợp sát tinh mạnh. Cách luận hiện đại chú trọng quản trị xung đột và cảm xúc, không suy diễn tử vong.",
  "铃昌陀武": "Linh Tinh, Văn Xương, Đà La và Vũ Khúc hội hợp là tổ hợp cổ thư xếp vào dạng cần lưu ý. Không sử dụng để dự đoán hành vi tự hại.",
  "马头带箭": "Kình Dương tại cung Ngọ thủ Mệnh có thể hình thành cách Mã Đầu Đới Tiễn khi hội đủ điều kiện. Thường được luận về hành động mạnh và cạnh tranh.",
  "化禄入财": "Hóa Lộc nhập cung Tài Bạch, theo cách luận truyền thống liên hệ với nguồn tài lộc và cơ hội thu nhập.",
  "化权入官": "Hóa Quyền nhập cung Quan Lộc, thường được luận về năng lực quản lý, trách nhiệm và quyền hành trong công việc.",
  "机月同梁三星会": "Ba trong bốn sao của nhóm Cơ Nguyệt Đồng Lương hội Mệnh; đây là tổ hợp gần với cách chính, nhưng không đồng nhất cách cục đầy đủ.",
  "辅弼同会": "Tả Phụ và Hữu Bật cùng hội Tam phương tứ chính, chủ sự phù trợ, hợp tác và quý nhân theo truyền thống.",
  "魁钺同会": "Thiên Khôi và Thiên Việt cùng hội, gọi là Khôi Việt đồng hội, gắn với sự giúp đỡ và cơ hội học hành, công danh.",
  "科权双会": "Hóa Khoa và Hóa Quyền hội Mệnh là cách Khoa Quyền song hội, chủ khoa danh và quyền hành trong luận giải cổ."
};

export function patternNameVi(name: string): string {
  return PATTERN_NAMES_VI[name] ?? translateVisibleText(name);
}

export function patternDescriptionVi(name: string, fallback: string): string {
  return PATTERN_DESCRIPTIONS_VI[name] ?? translateVisibleText(fallback);
}
