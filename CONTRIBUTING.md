# Hướng dẫn đóng góp

Rất hoan nghênh báo lỗi, đề xuất tính năng và Pull Request. Trước khi tham gia, cần lưu ý:

- Repo là **bản mã nguồn mở định kỳ** của bộ máy an sao tại [ouranic.cn](https://ouranic.cn/?from=gh-contrib).
- Repo **không có** cơ sở dữ liệu luận đoán đầy đủ, prompt AI hoặc API backend `/api/*`. Các tính năng AI báo 404 là đúng thiết kế cho đến khi bạn tự triển khai API.

## Báo vấn đề

- **Cách sử dụng, thảo luận:** mở [Discussions](https://github.com/Renhuai123/ziwei-doushu/discussions).
- **Lá số bị nghi an sai:** sử dụng mẫu “Thắc mắc kết quả lập lá số”, cung cấp ngày dương lịch, giờ phút sinh, địa điểm hoặc kinh độ, giới tính, kết quả hiện tại và kết quả đối chiếu. Chỉ ghi “không đúng” sẽ không đủ để xác minh.
  - Độ sáng phụ tinh, cách tính tháng nhuận và quy tắc đổi ngày giờ Tý muộn có khác biệt giữa các trường phái. Nếu thuộc trường hợp này, hãy nêu nguồn tham khảo.
- **Lỗi chương trình:** dùng mẫu “Báo lỗi ứng dụng”, mô tả cách tái hiện và lỗi cụ thể.
- **Vấn đề trên trang vận hành:** dùng mẫu “Vấn đề website OURANIC”.

Không công khai số điện thoại, mã xác thực hoặc ngày giờ sinh của người khác khi chưa được đồng ý.

## Đóng góp mã nguồn

~~~bash
npm ci
npm run typecheck
npm test
~~~

- Mỗi Pull Request chỉ nên giải quyết một nhóm thay đổi rõ ràng, giải thích lý do và ảnh hưởng.
- Nếu thay đổi **kết quả an sao**, cần đưa dẫn chứng (cổ thư, quy tắc trường phái hoặc lá số đối chiếu) và bổ sung kiểm thử hồi quy trong `scripts/regression/`, đăng ký trong script `test` ở `package.json`.
- CI được cấu hình chạy kiểm tra TypeScript và hồi quy khi mở PR hoặc đẩy lên nhánh `main`.

## Giấy phép

Bằng việc gửi đóng góp, bạn đồng ý để nội dung được phát hành theo giấy phép tương ứng:

- Mã nguồn: [MIT](./LICENSE).
- Bộ dữ liệu mẫu: [CC BY 4.0](./DATASET-LICENSE).
- Trích lời Nghê Hải Hạ ở `docs/tianji-ziwei/`: [CC BY-NC-SA 4.0](./docs/tianji-ziwei/LICENSE.md), chỉ dùng phi thương mại.
