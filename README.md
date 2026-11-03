<div align="center">

# Tử Vi Đẩu Số · Bộ máy an sao mã nguồn mở

### Thuật toán là di sản tri thức truyền thống được chia sẻ rộng rãi, không nên bị đóng kín.

[![CI](https://github.com/Renhuai123/ziwei-doushu/actions/workflows/ci.yml/badge.svg)](https://github.com/Renhuai123/ziwei-doushu/actions/workflows/ci.yml)
[![MIT](https://img.shields.io/badge/code-MIT-blue.svg)](./LICENSE)
[![CC BY 4.0](https://img.shields.io/badge/dataset-CC%20BY%204.0-green.svg)](./DATASET-LICENSE)

**Tiếng Việt** · [中文](./README.zh.md) · [English](./README.en.md)

</div>

## 1. Giới thiệu

**Tử Vi Đẩu Số** là một hệ thống mệnh lý truyền thống. Nghê Hải Hạ (倪海厦) đã giới thiệu hệ thống an sao và luận đoán trong bộ giảng *Thiên Kỷ*. Dự án này công khai thuật toán an sao, hệ thống Tứ Hóa, các quy tắc cách cục, tư liệu cổ thư và dữ liệu mẫu để mọi người có thể nghiên cứu và phát triển ứng dụng.

Đây là bản mã nguồn mở của bộ máy đứng sau [OURANIC](https://ouranic.cn/?from=gh-readme), được đồng bộ định kỳ. **Lá số và lời luận giải chỉ có giá trị tham khảo**, không phải dự đoán chắc chắn hoặc căn cứ thay thế các quyết định y tế, tài chính, pháp lý.

### Các bộ dữ liệu

| Bộ dữ liệu | Số lá số | Số đoạn luận giải | Kích thước sau giải nén | Giai đoạn | Số chữ/lá số |
|---|---:|---:|---:|---|---:|
| **v4.0 — 13 chủ đề** (15/10/2026) | **674.976** | **8.774.688** | **56,6 GB** | 1950–2026, ngày có thật | ~30.000 |
| v3.0 — dữ liệu mẫu | 518.400 | 6.739.200 | 33,1 GB | 1924–1983 | ~21.000 |
| Chênh lệch | +30% | +30% | +71% | +17 năm | +44% |

*Lượng chữ v3.0 được ước tính từ 2.160 lá số; các con số khác là thống kê toàn bộ. Hai bản đều gồm 13 chủ đề.*

**Lưu ý về lục thân:** Tử Vi Đẩu Số có hạn chế nhất định khi luận về cha mẹ, anh chị em, con cái. Nghê Hải Hạ từng đề cập điều này trong [Thiên Kỷ, bài 2 phần thượng (00:25:27)](https://www.bilibili.com/video/BV1KJsLekEfA?p=3&t=1527). Không nên xem kết quả luận lục thân là chắc chắn.

## 2. Cập nhật

![Tổng quan cập nhật](./docs/update-20261015.png)

**Ngày 15/10/2026:**

- Công bố bộ dữ liệu luận giải **v4.0**: 674.976 lá số × 13 chủ đề = 8.774.688 đoạn luận giải. Kích thước nén khoảng 161 MB, sau giải nén 56,6 GB. Chia 77 tệp theo năm, kèm gói tổng.
- Hiệu đính 13 chủ đề với bản ghi bài giảng *Thiên Kỷ* và *Tử Vi Đẩu Số Toàn Thư*: loại trích dẫn không xác minh được, điều chỉnh các trường hợp Tứ Hóa không hợp lệ và ghi rõ các điều kiện luận đoán.
- Đồng bộ thuật toán [PR #39](https://github.com/Renhuai123/ziwei-doushu/pull/39), bổ sung bảng giờ mùa hè Trung Quốc và tọa độ địa lý.
- Điều chỉnh [DATASET-LICENSE](./DATASET-LICENSE) để bao gồm v4.0; các trích dẫn lời giảng có quy định bản quyền riêng.

**Bổ sung ngày 02/11/2026:** Quy tắc đổi ngày với giờ Tý muộn được xét theo **giờ mặt trời thực** khi người dùng cung cấp nơi sinh. Ví dụ, đồng hồ chỉ 23:30 tại kinh độ 100° Đông nhưng giờ mặt trời thực là 22:10 (giờ Hợi), thì vẫn tính ngày hiện tại. Khi không nhập nơi sinh, kết quả không thay đổi. Tham số quy tắc tháng nhuận không hợp lệ sẽ được báo lỗi, thay vì âm thầm áp dụng giá trị mặc định.

**Bổ sung ngày 31/10/2026:** Nền tảng vận hành đổi tên thành **OURANIC** tại [ouranic.cn](https://ouranic.cn/?from=gh-readme); tên miền cũ tự động chuyển hướng.

**Bổ sung ngày 27/10/2026:** Bộ máy hỗ trợ múi giờ tiêu chuẩn của nơi sinh ngoài Trung Quốc qua tham số `utcOffsetMinutes`. Tệp `clock-adjust.ts` hỗ trợ hiệu chỉnh giờ đồng hồ do DST hoặc thay đổi múi giờ, cần người dùng xác nhận trước khi áp dụng. Bộ máy chỉ **phát hiện** DST Trung Quốc, không tự trừ thời gian DST.

## 3. Năng lực của bộ máy an sao

| Chức năng | Nội dung |
|---|---|
| **Giờ mặt trời thực** | Hiệu chỉnh kinh độ và phương trình thời gian |
| **Giờ mùa hè Trung Quốc** | Nhận diện DST 1986–1991; không tự trừ giờ nếu chưa xác nhận |
| **Tháng nhuận** | Bốn quy tắc: quy về tháng trước, tháng sau, chia theo ngày hoặc giữ tháng nhuận |
| **Giờ Tý muộn** | 23:00–23:59 có thể quy về ngày hôm sau; lấy giờ mặt trời thực nếu nhập nơi sinh |
| **Độ sáng tinh diệu** | Miếu, Vượng, Đắc, Lợi, Bình, Bất, Hãm; có thể đổi bảng theo trường phái |
| **Tứ Hóa** | Sinh niên Tứ Hóa, Đại hạn, Lưu niên và Phi Hóa, Tự Hóa |
| **Thập nhị thần sát** | Xếp theo địa chi năm sinh hoặc địa chi Lưu niên |
| **Nhận diện cách cục** | Hơn 1.100 dòng quy tắc, ví dụ Tử Phủ đồng cung, Nhật Nguyệt tịnh minh, Thất Sát triều đẩu |

Mã thuật toán nằm tại `lib/ziwei/`, điểm vào là `generateChart()` trong `algorithm.ts`. Đầu vào gồm **ngày dương lịch** và **chỉ số giờ địa chi 0–11**: Tý = 0, Sửu = 1, …, Hợi = 11. Chỉ số này **không phải số giờ 0–23**.

## 4. Bắt đầu nhanh

~~~bash
git clone https://github.com/hzzmonetvn/ziwei-doushu.git
cd ziwei-doushu
npm ci
npm run dev
~~~

Mở http://localhost:3000/chart để thử lập lá số. Kiểm tra bằng:

~~~bash
npm run typecheck
npm test
npm run build
~~~

**An sao không cần API Key.** Bản mã nguồn mở **không chứa API backend**. Muốn dùng AI luận giải (`/api/interpret`) và phân tích ghép lá số (`/api/heming`), cần tự triển khai các endpoint tương ứng. Điền API Key nhưng không có backend sẽ không làm chức năng AI hoạt động.

Chưa có trong repo: cơ sở dữ liệu luận giải đầy đủ (tệp `lib/ziwei/db-analysis.ts` chỉ là khung), API máy chủ, hệ thống tài khoản, thanh toán và cấu hình triển khai dịch vụ thương mại.

## 5. Bộ dữ liệu luận giải v4.0

Tải tại [Releases — v4.0-13d](https://github.com/Renhuai123/ziwei-doushu/releases/tag/v4.0-13d).

- Phủ các ngày dương lịch có thật trong giai đoạn 1950–2026, 12 giờ địa chi và hai giới tính.
- Một dòng JSON Lines ứng với một lá số. Các trường: `k` (khóa), `y/m/d` (ngày dương lịch), `h` (chỉ số giờ), `g` (giới tính), `ms` (chính tinh đầu tiên tại cung Mệnh, hoặc `null`), `t` (thống kê số chữ), `c` (13 bài luận giải Markdown).
- Sinh tự động từ bộ máy an sao và thư viện luận đoán tại thời điểm 15/10/2026 (phiên bản `ca268829f7a9`); không dùng AI để tạo trực tiếp.
- Chỉ có góc nhìn lá số bản mệnh, không chứa nội dung AI theo người dùng, những phần phụ thêm dựa trên tuổi hiện tại hoặc quy tắc tự động thêm trên website.
- Không áp dụng hiệu chỉnh giờ mặt trời thực cho từng nơi sinh khi sinh dữ liệu mẫu.

Giải nén tệp từng năm:

~~~bash
zstd -d --long=27 year-1990.jsonl.zst
~~~

Tham số `--long=27` là bắt buộc do bộ nén sử dụng cửa sổ dài. Có tệp `SHA256SUMS.txt` để kiểm tra toàn vẹn và gói tổng `ziwei-interp-v4-all.tar`.

**Bản quyền:** Phần dữ liệu v4.0 áp dụng [CC BY 4.0](./DATASET-LICENSE) với yêu cầu ghi nguồn, **ngoại trừ** các trích dẫn từ *Thiên Kỷ*, thuộc quyền tác giả riêng. Việc sử dụng hàng loạt lời giảng phải tuân theo [CC BY-NC-SA 4.0](./docs/tianji-ziwei/LICENSE.md) và quyền của chủ sở hữu.

## 6. Bộ dữ liệu mẫu v3.0 — 518.400 lá số

Tải ba phần (tổng dung lượng nén 5,5 GB) tại [Releases v3.0-samples](https://github.com/Renhuai123/ziwei-doushu/releases/tag/v3.0-samples).

- Ngày sinh dương lịch 1924–1983, mỗi tháng lấy ngày 1–30.
- `hour` là chỉ số giờ địa chi 0–11, **không phải** số giờ trên đồng hồ; `hHH` trong tên tệp có cùng cách hiểu.
- `gender` có giá trị `male` hoặc `female`; kinh độ cố định 120° Đông.

**Vấn đề đã biết:** Khoảng 2.520 bản ghi (0,49%) chứa ngày không tồn tại, như 30/2 hoặc 29/2 trong năm không nhuận. Bộ máy cũ tự điều chỉnh sang ngày 1–2/3, nên dữ liệu bị trùng. Hãy loại các bản ghi có `month=2, day=30` hoặc `month=2, day=29` ở năm không nhuận. Từ ngày 03/10/2026, bộ máy mới từ chối ngày không hợp lệ.

## 7. Tư liệu lời giảng và cổ thư

Thư mục [`docs/tianji-ziwei/`](./docs/tianji-ziwei/) lưu **1.848 đoạn trích** thuộc phần Tử Vi của *Thiên Kỷ* (14 bài và hai phần bổ sung), kèm mốc thời gian phát biểu. Nguồn ban đầu: [nihai-tianji-corpus](https://github.com/Renhuai123/nihai-tianji-corpus).

**Nguyên văn Hán tự trong cổ thư và bản ghi lời giảng được giữ lại làm dữ liệu gốc để đối chiếu**. Phần giao diện và các nội dung đã có bản dịch tiếng Việt không thay đổi khóa Hán tự của thuật toán.

Tham khảo danh mục 14 chính tinh và 12 cung trong [hướng dẫn Hán–Việt](./README.vi.md).

## 8. Giấy phép và đóng góp

| Thành phần | Giấy phép |
|---|---|
| Mã nguồn (`lib/`, `app/`, `components/`) | [MIT](./LICENSE) |
| Dữ liệu mẫu (Releases) | [CC BY 4.0](./DATASET-LICENSE), được thương mại nếu ghi nguồn |
| Cổ thư hết thời hạn bảo hộ | Phạm vi công cộng đối với nguyên tác |
| Trích lời giảng Nghê Hải Hạ (`docs/tianji-ziwei/`) | [CC BY-NC-SA 4.0](./docs/tianji-ziwei/LICENSE.md), phi thương mại |

Đóng góp qua Pull Request. Xem [CONTRIBUTING.md](./CONTRIBUTING.md) và đặt câu hỏi tại [Discussions](https://github.com/Renhuai123/ziwei-doushu/discussions).

**Lưu ý:** Dự án là công cụ nghiên cứu mệnh lý truyền thống. Không nên thay thế chẩn đoán hoặc điều trị y khoa, tư vấn tài chính, pháp luật bằng nội dung luận giải.
