/**
 * 名人命盘数据库
 * 基于公开记录的出生日期，时辰为估算值（部分有文献记载）
 */

import 'server-only';

export interface FamousPerson {
  id: string;
  name: string;
  nameEn: string;
  nameOriginal?: string; // Tên Hán tự để đối chiếu nguồn
  category: '商业' | '文艺' | '历史' | '体育' | '科技';
  description: string;           // 一句话身份介绍
  descriptionEn: string;
  descriptionOriginal?: string; // Nguyên văn giới thiệu
  year: number;
  month: number;
  day: number;
  hour: number;                  // 时辰地支索引 0-11
  gender: 'male' | 'female';
  notable: string;               // 命盘亮点提示（启发用户兴趣）
  notableEn: string;
  notableOriginal?: string; // Nguyên văn bình luận
}

export const FAMOUS_PERSONS: FamousPerson[] = [
  // ─── Doanh nhân ─────────────────────────────────────────────
  {
    id: 'ma-yun',
    name: 'Mã Vân',
    nameOriginal: "马云",
    nameEn: 'Jack Ma',
    category: '商业',
    description: 'Người sáng lập Alibaba',
    descriptionEn: 'Founder of Alibaba',
    year: 1964, month: 9, day: 10, hour: 5,  // 约巳时
    gender: 'male',
    notable: 'Theo cách luận Tử Vi truyền thống, lá số mẫu được dùng để bàn về khả năng đổi mới, tổ chức và phát triển công danh.',
    notableEn: 'The chart shows an exceptional ability to break established patterns and rebuild, while the Career Palace closely parallels the rise of an internet business empire.',
  },
  {
    id: 'li-jiacheng',
    name: 'Lý Gia Thành',
    nameOriginal: "李嘉诚",
    nameEn: 'Li Ka-shing',
    category: '商业',
    description: 'Doanh nhân Hồng Kông, người sáng lập tập đoàn CK Hutchison',
    descriptionEn: 'Hong Kong billionaire and founder of the CK Hutchison business empire',
    year: 1928, month: 7, day: 29, hour: 3,  // 约卯时
    gender: 'male',
    notable: 'Ví dụ nghiên cứu tài vận qua Tứ Hóa tại cung Tài Bạch và ý nghĩa Lộc Tồn trong việc tích lũy.',
    notableEn: 'The Four Transformations in the Wealth Palace make this a compelling case study of extraordinary wealth; Lu Cun preserves assets and supports steady accumulation.',
  },
  {
    id: 'ren-zhengfei',
    name: 'Nhậm Chính Phi',
    nameOriginal: "任正非",
    nameEn: 'Ren Zhengfei',
    category: '商业',
    description: 'Người sáng lập Huawei',
    descriptionEn: 'Founder of Huawei',
    year: 1944, month: 10, day: 25, hour: 3, // 卯时
    gender: 'male',
    notable: 'Lá số mẫu có Thất Sát nhập Mệnh, dùng để tìm hiểu tính quyết đoán và năng lực vượt thử thách theo cổ thư.',
    notableEn: 'Qi Sha in the Life Palace points to a life strengthened by adversity—the greater the pressure, the stronger the response—making this a vivid case study of traditional Qi Sha theory.',
  },

  // ─── Nghệ thuật ─────────────────────────────────────────────
  {
    id: 'zhang-ailing',
    name: 'Trương Ái Linh',
    nameOriginal: "张爱玲",
    nameEn: 'Eileen Chang',
    category: '文艺',
    description: 'Nhà văn nổi tiếng của văn học Trung Quốc hiện đại',
    descriptionEn: 'A master of modern Chinese literature',
    year: 1920, month: 9, day: 30, hour: 1, // 丑时
    gender: 'female',
    notable: 'Ví dụ tham khảo cách luận các tổ hợp sao cô độc, đối chiếu với tiểu sử văn học, không coi là quan hệ nhân quả.',
    notableEn: 'The chart’s combination of solitary stars forms a striking parallel with her celebrated romantic history and literary achievements.',
  },
  {
    id: 'jay-chou',
    name: 'Châu Kiệt Luân',
    nameOriginal: "周杰伦",
    nameEn: 'Jay Chou',
    category: '文艺',
    description: 'Ca sĩ, nhạc sĩ nhạc Hoa ngữ nổi tiếng',
    descriptionEn: 'Mandopop singer-songwriter and cultural icon',
    year: 1979, month: 1, day: 18, hour: 1,  // 丑时（据报道夜间出生）
    gender: 'male',
    notable: 'Tổ hợp Văn Khúc và Tham Lang được dùng để nghiên cứu cách luận về tài nghệ, giao tế và sáng tạo.',
    notableEn: 'The combination of Wen Qu and Tan Lang suggests natural artistic talent and helps explain his ability to move across musical styles.',
  },
  {
    id: 'wang-fei',
    name: 'Vương Phi',
    nameOriginal: "王菲",
    nameEn: 'Faye Wong',
    category: '文艺',
    description: 'Nữ ca sĩ nổi tiếng trong làng nhạc Hoa ngữ',
    descriptionEn: 'One of the most iconic singers in Chinese pop',
    year: 1969, month: 8, day: 8, hour: 4,   // 辰时
    gender: 'female',
    notable: 'Ví dụ dùng để tham khảo cách luận cung Phu Thê; không suy ra quan hệ hôn nhân thực tế từ lá số.',
    notableEn: 'The stars in the Marriage Palace closely parallel her two high-profile marriages, making the relationship pattern especially valuable for study.',
  },
  {
    id: 'lin-zhiling',
    name: 'Lâm Chí Linh',
    nameOriginal: "林志玲",
    nameEn: 'Lin Chi-ling',
    category: '文艺',
    description: 'Người mẫu và diễn viên Đài Loan',
    descriptionEn: 'Taiwanese model and actress',
    year: 1974, month: 11, day: 29, hour: 5, // 巳时
    gender: 'female',
    notable: 'Thái Âm thủ Mệnh thường được liên hệ với tính âm nhu và thẩm mỹ trong cổ thư; không dùng sao để đánh giá ngoại hình thật.',
    notableEn: 'Tai Yin guarding the Life Palace is a classic symbol of feminine grace, closely echoing the traditional view that this placement bestows exceptional beauty.',
  },

  // ─── Công nghệ ─────────────────────────────────────────────
  {
    id: 'steve-jobs',
    name: 'Steve Jobs',
    nameOriginal: "乔布斯",
    nameEn: 'Steve Jobs',
    category: '科技',
    description: 'Đồng sáng lập Apple',
    descriptionEn: 'Co-founder of Apple',
    year: 1955, month: 2, day: 24, hour: 6,  // 午时
    gender: 'male',
    notable: 'Phá Quân nhập Mệnh được dùng làm ví dụ nghiên cứu tính khai phá và thay đổi; các biến cố trong tiểu sử không phải do sao quyết định.',
    notableEn: 'Po Jun in the Life Palace, adoption at birth, and the creation of the Apple empire make this an archetypal chart of renewal after disruption.',
  },
  {
    id: 'elon-musk',
    name: 'Elon Musk',
    nameOriginal: "马斯克",
    nameEn: 'Elon Musk',
    category: '科技',
    description: 'Doanh nhân công nghệ, sáng lập SpaceX và điều hành Tesla',
    descriptionEn: 'Founder of SpaceX and CEO of Tesla',
    year: 1971, month: 6, day: 28, hour: 4,  // 辰时（7:30AM 有文献记录）
    gender: 'male',
    notable: 'Lá số mẫu được dùng để tìm hiểu cách Sát Phá Tham và các sao chủ biến động, gắn với hoạt động đổi mới công nghệ.',
    notableEn: 'An intense expression of the Sha Po Lang pattern, with a powerful Travel Horse star and a life devoted to pushing the boundaries of humanity’s future.',
  },

  // ─── Thể thao ─────────────────────────────────────────────
  {
    id: 'yao-ming',
    name: 'Diêu Minh',
    nameOriginal: "姚明",
    nameEn: 'Yao Ming',
    category: '体育',
    description: 'Trung phong bóng rổ NBA, biểu tượng bóng rổ Trung Quốc',
    descriptionEn: 'Legendary NBA center and ambassador for Chinese basketball',
    year: 1980, month: 9, day: 12, hour: 5,  // 巳时
    gender: 'male',
    notable: 'Thiên Lương thủ Mệnh là ví dụ nghiên cứu tinh tính Ấm tinh và cung Quan Lộc, không dùng để dự đoán thành tích thể thao.',
    notableEn: 'Tian Liang guarding the Life Palace suggests stature and dignity, while the Career Palace closely aligns with his professional achievements.',
  },
  {
    id: 'li-na',
    name: 'Lý Na',
    nameOriginal: "李娜",
    nameEn: 'Li Na',
    category: '体育',
    description: 'Tay vợt Trung Quốc từng vô địch Grand Slam',
    descriptionEn: 'Chinese Grand Slam tennis champion',
    year: 1982, month: 2, day: 26, hour: 2,  // 寅时
    gender: 'female',
    notable: 'Thất Sát được luận về tinh thần cạnh tranh; việc đối chiếu các kỳ Đại hạn, Lưu niên chỉ phục vụ tham khảo học thuật.',
    notableEn: 'Qi Sha channels a powerful competitive drive, while the major periods and annual cycles closely align with the timing of her French Open victory.',
  },
];

/** 按分类获取名人 */
export function getFamousByCategory(category: FamousPerson['category']): FamousPerson[] {
  return FAMOUS_PERSONS.filter(p => p.category === category);
}

/** 获取所有分类 */
export const FAMOUS_CATEGORIES: FamousPerson['category'][] = [
  '商业', '文艺', '科技', '体育',
];
