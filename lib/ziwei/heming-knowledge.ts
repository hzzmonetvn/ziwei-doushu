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
  '化禄': '与配偶有先天缘分，配偶个性乐观，婚后感情更好，配偶越来越会赚钱，缘分深厚；自化禄则财来财去，感情有但难守',
  '化权': '婚姻多为主动争取而来，配偶掌握决策权，大部分事情配偶自行裁决，需学会放手；争取型婚姻，越强求越难得',
  '化科': '视为小禄，能与配偶和谐相处，有贵人缘，利于恋爱结婚；科在夫妻主配偶有名声或专业技能',
  '化忌': '欠下婚姻债务，早婚早离，建议晚婚或不婚；配偶对本人有怨言；化忌冲夫妻宫尤凶——生离死别之兆',
};

// ─── 合盘核心方法论 ─────────────────────────────────────────

export const HEMING_METHODOLOGY = `
## 合盘分析核心框架（倪海厦体系 + 《紫微斗数全书》综合）

### 一、双宫联参原则（倪海厦最重要的婚姻断法）

**核心口诀：「看婚姻，光看夫妻宫，大错特错，一定要同时看福德宫。」**

- **夫妻宫**：看配偶的星性、外形、性格、互动模式
- **福德宫**：代表夫妻深层感情、婚姻能否长久
- **倪师案例**：“有人夫妻宫很好，福德宫很烂，散！夫妻要散。”

**因此合盘时必须同时分析双方的：命宫 + 夫妻宫 + 福德宫**

---

### 二、天作之合的判断标准

**最高级匹配（天作之合）**：
- 甲方夫妻宫主星 = 乙方命宫主星
- 乙方夫妻宫主星 = 甲方命宫主星
- 两者互相对应，则为命中注定的一对

**次级良配**：
- 一方夫妻宫主星 = 对方命宫主星（单向对应）
- 双方命宫星性五行相生（如木命配土命、土命配水命）
- 双方大限同走旺运

**凶兆组合**：
- 双方互相化忌冲对方命宫（互为冤家）
- 一方化忌飞入另一方夫妻宫（带给对方婚姻伤害）
- 双方夫妻宫皆有重煞无吉星

---

### 三、完整合盘五步法

**第一步：评估双方命格基础**
- 双方命宫格局是否般配（同类型 or 互补型）
- 重点看：命宫 + 身宫 + 福德宫的星性搭配
- 警戒：双方皆为杀破狼格（两虎相争）；或一强一弱过度悬殊

**第二步：夫妻宫互参**
- 甲方夫妻宫主星 → 是否对应乙方命宫/三合方星？
- 乙方夫妻宫主星 → 是否对应甲方命宫/三合方星？
- 双方夫妻宫各自的四化状态（化禄/化忌影响最大）

**第三步：太阳太阴星象分析**
- 女命：太阳代表丈夫；太阳庙旺=旺夫，落陷化忌=克夫
- 男命：太阴代表妻子；太阴庙旺=妻美贤，化忌=婆媳不和
- 这两颗星在双方命盘中的状态，直接影响婚姻质量

**第四步：四化飞化互参（高级技法）**
- 甲方生年干 → 找到四化星 → 这些星落在乙方命盘哪个宫位
  - 化禄飞入乙方命宫/财帛宫：对乙方有正向帮助
  - 化忌飞入乙方夫妻宫：带给乙方婚姻伤害
  - 化忌飞入乙方命宫：自身给对方带来压力
- 乙方生年干 → 反向飞化分析甲方
- 形成”飞化互参“，判断双向的”缘分类型”

**第五步：大限同步分析**
- 双方当前大限是否同走旺运：俱旺=最佳时机，俱衰=共同挑战
- 一方旺一方衰：需有意识平衡双方状态
- 流年三合方桃花星聚集：当年结婚好时机

---

### 四、缘分类型判断

| 化缘类型 | 特征 |
|---------|------|
| 化禄引动 | 正缘、真爱，感情甜蜜顺遂 |
| 化权引动 | 主动争取的感情，有张力，有主导方 |
| 化科引动 | 和谐相处的缘分，互相尊重，白头偕老型 |
| 化忌引动 | 逆缘/冤家，彼此折磨但难以分离，需修行方可化解 |
| 双方互化忌 | “冤家路窄“型，感情强烈但痛苦并存，前世欠债型 |

---

### 五、婚期判断三层法

**第一层：本命盘格局**
- 夫妻宫无煞：宜早婚
- 夫妻宫有煞无吉：宜晚婚（男30以上，女27以上）
- 武曲、廉贞、七杀、破军在夫妻宫：一律建议晚婚

**第二层：大限**
- 大限夫妻宫吉星多：该十年有结婚机会
- 大限夫妻宫化忌：该十年感情受阻

**第三层：流年**
- 红鸾、天喜入命宫或夫妻宫：该年婚恋有动
- 流年宫位落到夫妻宫：该年婚姻是重点
- 流年三合方桃花星汇集：该年感情机遇多

---

### 六、各宫位结婚情形

| 流年宫位 | 结婚情形 |
|---------|---------|
| 夫妻宫 | 正常感情发展结婚 |
| 命宫 | 自己主动出击结婚 |
| 子女宫 | 奉子成婚（先上车后补票） |
| 田宅宫 | 因家庭、房产缘故结婚 |
| 父母宫 | 奉父母之命，经长辈介绍 |

---

### 七、克夫/克妻的具体标志

**克夫命（非传统含义）倪师定义**：
> “克夫的女孩子，就是太太在前面走，先生在后面满头大汗提着大包小包付钱，好不容易等到车，先生还要帮太太开门。这叫克夫。”
> “旺夫，一个太太完全让先生没有后顾之忧。”

**具体标志**：
- 夫妻宫廉贞+贪狼/破军/七杀（三凶组合）
- 太阳落陷化忌（女命）
- 太阴化忌（男命）
- 夫妻宫四煞齐聚无吉星
- 寡宿孤辰入命宫或夫妻宫
- 福德宫破军陷落 + 廉贞平（水中做冢格）

---

### 八、事业合作合盘判断

**主要参考宫位**：
- 官禄宫：双方事业宫星性是否兼容
- 兄弟宫（仆役宫）：代表合伙关系
- 福德宫：能否同甘共苦

**事业合作吉象**：
- 双方命宫互补（一谋一行）
- 一方官禄宫化禄飞入另一方官禄宫
- 兄弟宫有禄存无化忌冲

**事业合作凶象**：
- 双方化忌互冲官禄宫
- 对方命宫化忌飞入己方财帛宫（对方消耗自己钱财）
- 巨门在兄弟/仆役宫：倪师：”巨门在朋友宫，代表跟朋友合伙会朋友变仇人”

---

### 九、感情相位类型（命格兼容性速判）

| 双方组合 | 兼容性 | 说明 |
|---------|-------|------|
| 紫微 + 天府 | ★★★★★ | 帝星遇财库，相互成就，最稳定 |
| 天相 + 任何星 | ★★★★ | 印星佐才，天相适应性强 |
| 天梁 + 天同 | ★★★★ | 老成与温和互补，白头偕老型 |
| 太阳 + 太阴 | ★★★★ | 日月并明，经典互补，阴阳调和 |
| 七杀 + 七杀 | ★★ | 两虎相争，火花大，矛盾多 |
| 破军 + 破军 | ★★ | 双破，彼此破坏，婚姻不稳 |
| 廉贞 + 七杀/破军 | ★ | 三凶组合之二，生离死别风险最高 |
| 杀破狼 + 机月同梁 | ★★★ | 动静互补，但需磨合，一方开拓一方守成 |
| 紫破 + 廉府 | ★★★★ | 格局相当，互相吸引 |
| 武曲 + 天同 | ★★★ | 刚柔互济，武曲收敛遇天同温和，能互补 |

---

### 十、倪海厦合盘核心名言汇总

1. **“看婚姻，光看夫妻宫，大错特错，一定要同时看福德宫。”**
2. **“廉贞贪狼/廉贞破军在夫妻宫，不管男命女命，非生离即死别。”**
3. **“廉贞七杀——半路埋尸；廉贞破军——水中做冢；廉贞贪狼——横夭夭折。”**
4. **“太阳化忌，上不见父，下不见子，中不见夫。“（女命那十年配偶有重大灾难）**
5. **“男人的命，最怕太阴化忌，婆媳不和，太太跟妈妈一定不和。”**
6. **“旺夫，一个太太完全让先��没有后顾之忧；克夫是感情太好，完全以对方为主。”**
7. **“巨门在朋友宫，跟朋友合伙会朋友变仇人。”**
8. **“如果你娶个太太是七杀入命，那你差不多毁了一半了，很累啊，草木皆兵。”**
`;

// ─── 婚姻判断辅助表 ───────────��─────────────────────────────

export const MARRIAGE_STARS_BRIEF: Record<string, string> = {
  '红鸾': '婚恋正缘，入命身主动成婚；流年逢红鸾该年婚恋有动',
  '天喜': '婚喜，与红鸾相互引动，主喜事到来',
  '天姚': '才艺桃花，感情机遇；婚恋中遇天姚易有浪漫邂逅',
  '咸池': '强力桃花，注意感情纷扰；遇贪狼则桃花最旺',
  '孤辰': '孤克之星，男命入命宫主独立好，但入夫妻宫主缘浅',
  '寡宿': '孤克之星，女命入命或夫妻宫，主婚姻不顺聚少离多',
  '天哭': '孤克刑伤，入夫妻宫主配偶有重大灾祸',
  '天虚': '空耗之星，入夫妻宫主感情虚耗',
  '天巫': '晚婚遗产宗教；入夫妻宫主晚婚为吉，早婚多波折',
};

export const HEMING_SCORE_CRITERIA = {
  '五星': '双方夫妻宫互映天作之合，四化相互补益，大限同走旺运，福德宫双吉',
  '四星': '一方夫妻宫对应对方命宫，四化以禄科为主，感情基础扎实',
  '三星': '命格相配但各有棱角，需磨合，长期来看稳定',
  '二星': '夫妻宫各有煞星，化忌有冲，感情起伏大，需双方主动经营',
  '一星': '凶星汇聚夫妻宫，或廉贞三凶组合，生离死别风险高',
};
