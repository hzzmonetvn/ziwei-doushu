# Báo cáo Việt hóa Tử Vi Đẩu Số — 03/11/2026

> Nhánh: `localization/vi-VN`. PR [#1](https://github.com/hzzmonetvn/ziwei-doushu/pull/1) đang ở trạng thái nháp. Không ghi đè các định danh Hán tự dùng trong thuật toán; mọi dữ liệu gốc phải giữ để đối chiếu.

## Đã được triển khai

| Phạm vi | Tình trạng | Vị trí |
|---|---|---|
| Giao diện và metadata SEO | Việt hóa nhãn, nút, bảng lá số, tìm kiếm, chính sách, trang kiến thức và một số thông báo lỗi | `app/`, `components/` |
| Định danh và tên sao/cung | Bảng thuật ngữ Hán–Việt, giữ khóa Hán tự cho tính toán | `lib/i18n/vi.ts` |
| Cách cục | 36 tên và lời diễn giải tiếng Việt | `lib/i18n/patterns-vi.ts` |
| Cổ thư Tử Vi | 75 trích đoạn có bản dịch ý và nguyên văn | `lib/classics/` |
| Thiên Kỷ (chuyên đề) | 24 tập, 29 đoạn dẫn, 64 quẻ Kinh Dịch và Kham Dư | `lib/nihai/tianji.ts` |
| Nhân Kỷ | 5 chuyên đề, 15 chương cơ bản | `lib/nihai/renji.ts` |
| Châm cứu | 120 mục kinh nghiệm và 31 mục châm xuyên huyệt, có tên huyệt Hán–Việt | `lib/nihai/renji.ts` |
| Bài thuốc cổ truyền | 97 phương Hán Đường, 25 phương kinh điển và 18 danh mục thành phần được ghi trong nguồn | `lib/nihai/renji.ts` |
| Ghép lá số | 14 sao ở Phu Thê, 4 Tứ Hóa, 9 sao phụ, phương pháp luận và 5 mức đánh giá | `lib/ziwei/heming-knowledge.ts` |
| **Lời giảng Thiên Kỷ** | **1.848/1.848 bản dịch máy Trung–Việt, đủ 16 chương Markdown** | `docs/tianji-ziwei/entries.vi.jsonl`, `docs/tianji-ziwei/vi/` |

## Chi tiết bản dịch lời giảng

- Đã bảo tồn **1.848 đoạn nguồn** gồm **1.843 câu không trùng lặp**, 16 tập/bổ sung có mốc giờ và liên kết video.
- Tệp [translation-report.vi.json](./docs/tianji-ziwei/translation-report.vi.json) ghi số lượng từng tập; [refinement-report.vi.json](./docs/tianji-ziwei/refinement-report.vi.json) ghi lại đợt hiệu chỉnh theo cặp nguồn Hán tự. Đợt này sửa **619 bản ghi** với hơn một nghìn lượt sửa thuật ngữ.
- Bản gốc được giữ trong `entries.jsonl` và `*.md` ở thư mục nguồn; bản dịch nằm ở `entries.vi.jsonl` và `vi/*.md`.
- **Giới hạn:** Đây vẫn là **dịch máy**, còn có thể sai nghĩa, thiếu ngữ cảnh, từ cổ học, sao và địa danh. Chưa được dịch giả chuyên ngành kiểm duyệt thủ công toàn văn. Không được quảng bá là bản dịch chuyên gia hay trích dẫn trực tiếp mà không đối chiếu video.

## Những gì vẫn phải rà soát

1. Kiểm duyệt **từng câu của 1.848 đoạn** với nguyên văn và video; đặc biệt lời giảng về Tứ Hóa, tên chính tinh, tên cung, hình tướng, y học và tên riêng.
2. Mọi trường dữ liệu/chú thích dài chưa dùng trực tiếp trên UI có thể còn chữ Hán trong **nguồn gốc**; đây không phải lỗi hiển thị nếu nội dung gốc được gắn nhãn và có bản Việt tương ứng.
3. Thuật toán `lib/ziwei/` phụ thuộc chính xác vào khóa sao/cung, Tứ Hóa và địa chi Hán tự. Không thay các khóa đó để tránh sai lá số.
4. Chính sách, điều khoản pháp lý cần chuyên gia rà soát nếu sử dụng trong dịch vụ thực tế. Bài thuốc và huyệt vị chỉ là tư liệu lịch sử, không dùng để tự điều trị.

## Tái tạo bản dịch và kiểm thử

```bash
python3 scripts/translate_tianji_vi.py
python3 scripts/refine_tianji_vi.py
python3 scripts/refine_tianji_vi.py --check
python3 scripts/translate_tianji_vi.py --check

npm ci
npm run typecheck
npm test
npm run build
```

Dịch máy sử dụng endpoint Google Translate không chính thức; cần Internet và có thể bị giới hạn. GitHub Actions `translate-tianji-vi.yml` tạo 1.848 bản dịch, `refine-tianji-vi.yml` sửa thuật ngữ dựa trên Hán tự từng đoạn và kiểm tra toàn vẹn. **Đầu ra cần được kiểm tra bản quyền và chất lượng** trước khi sử dụng lại.

CI đã từng chạy xanh với kiểm tra TypeScript, regression và Next.js build trên các commit trước; với commit mới luôn xem [Actions của PR #1](https://github.com/hzzmonetvn/ziwei-doushu/actions) thay vì giả định đã được xác nhận.

## Quy tắc

- `七杀` → Thất Sát; `财帛宫` → Cung Tài Bạch; `化忌` → Hóa Kỵ; `三方四正` → Tam phương tứ chính.
- Không thay ký hiệu, mốc thời gian, trường dữ liệu nguồn và nguồn cấp phép.
- Dữ liệu lời giảng nằm dưới quy định giấy phép riêng [CC BY-NC-SA 4.0](./docs/tianji-ziwei/LICENSE.md); mã nguồn là MIT.
- Không dùng mệnh lý, nhân tướng hoặc bài thuốc để khẳng định tai nạn, bệnh tật, hôn nhân, phẩm chất con người hay tương lai.
