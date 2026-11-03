export const metadata = { title: 'Chính sách quyền riêng tư · Lá số Tử Vi', description: 'Chính sách quyền riêng tư của Lá số Tử Vi' };

export default function PrivacyPage() {
  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg-0)', borderBottom: '1px solid var(--bdr)', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--tx-3)', textDecoration: 'none' }}>
          <span style={{ fontSize: '16px' }}>‹</span>
          <span>Về trang chủ</span>
        </a>
        <div style={{ width: '1px', height: '20px', background: 'var(--bdr-med)' }} />
        <span style={{ fontSize: '12px', color: 'var(--ac)', letterSpacing: '0.2em' }}>Lá số Tử Vi</span>
      </header>
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px', color: 'var(--tx-1)', lineHeight: 1.8 }}>
        <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 8 }}>Chính sách quyền riêng tư</h1>
        <p style={{ fontSize: 12, color: 'var(--tx-3)', marginBottom: 32 }}>Cập nhật lần cuối: Tháng 4 năm 2026</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>1. Thông tin chúng tôi thu thập</h2>
      <p>Để cung cấp dịch vụ lập và luận giải lá số Tử Vi, chúng tôi có thể thu thập các thông tin sau:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li><strong>Thông tin lập lá số</strong>: Họ tên (không bắt buộc), ngày tháng năm sinh dương lịch, giờ sinh, giới tính và kinh độ nơi sinh</li>
        <li><strong>Thông tin tài khoản (nếu đăng ký)</strong>: Số điện thoại (để xác minh qua SMS và phục vụ tài khoản thành viên)</li>
        <li><strong>Dữ liệu tương tác</strong>: Lượt nhấp, trang đã xem và lịch sử lá số trên nền tảng</li>
        <li><strong>Thông tin phản hồi</strong>: Đánh giá “đúng / chưa đúng” và ý kiến về nội dung luận giải</li>
        <li><strong>Thông tin thanh toán</strong>: Các khoản thanh toán cho hội viên hoặc dịch vụ riêng được xử lý qua bên thứ ba (Alipay / WeChat Pay); nền tảng không lưu số thẻ đầy đủ hoặc mật khẩu</li>
      </ul>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>2. Cách chúng tôi sử dụng thông tin</h2>
      <ul style={{ paddingLeft: 24 }}>
        <li>Thông tin lá số chỉ phục vụ lần luận giải này và lưu trữ lịch sử lá số trong tài khoản của bạn</li>
        <li>Số điện thoại dùng để đăng ký, đăng nhập và nhận thông báo đơn hàng</li>
        <li>Phản hồi được tổng hợp sau khi loại bỏ thông tin nhận dạng để cải thiện chất lượng nội dung</li>
        <li>Dữ liệu tổng hợp có thể phục vụ nghiên cứu và tối ưu hóa nền tảng</li>
      </ul>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>3. Chia sẻ thông tin và bên thứ ba</h2>
      <p>Chúng tôi không chia sẻ thông tin cá nhân với bên thứ ba, trừ các trường hợp sau:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li>Đơn vị thanh toán (Alipay / WeChat Pay): xử lý giao dịch</li>
        <li>Đơn vị SMS (ví dụ Alibaba Cloud): gửi mã xác minh</li>
        <li>Đơn vị hạ tầng đám mây (Vercel / Cloudflare / Alibaba Cloud): vận hành kỹ thuật</li>
        <li>Dịch vụ AI (ví dụ Anthropic Claude): xử lý các câu hỏi bổ sung đã được ẩn danh</li>
        <li>Cơ quan tư pháp hoặc cơ quan nhà nước có yêu cầu hợp pháp theo quy định</li>
      </ul>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>4. Bảo mật thông tin</h2>
      <p>Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và quản trị thông dụng, bao gồm mã hóa truyền tải HTTPS, mã hóa dữ liệu lưu trữ và kiểm soát quyền truy cập. Tuy nhiên, không thể bảo đảm an toàn tuyệt đối khi truyền dữ liệu qua Internet.</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>5. Quyền của bạn</h2>
      <ul style={{ paddingLeft: 24 }}>
        <li><strong>Tra cứu</strong>: Xem lịch sử lá số và đơn hàng trong trung tâm tài khoản</li>
        <li><strong>Xóa</strong>: Liên hệ bộ phận hỗ trợ để xóa lá số đã chọn hoặc đóng tài khoản</li>
        <li><strong>Xuất dữ liệu</strong>: Có thể yêu cầu xuất toàn bộ dữ liệu cá nhân</li>
      </ul>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>6. Cookie và lưu trữ cục bộ</h2>
      <p>Trang web dùng cookie và localStorage để ghi nhớ giao diện sáng/tối, lịch sử lá số gần đây và trạng thái đăng nhập. Bạn có thể tắt chúng trong trình duyệt, nhưng một số chức năng có thể bị ảnh hưởng.</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>7. 未成年人</h2>
      <p>本平台命理内容面向 18 岁以上成年用户。未成年人请在监护人同意下使用，并不得将解读用于重大人生决策。</p>

      <h2 style={{ fontSize: 18, marginTop: 32, marginBottom: 12 }}>8. 政策变更</h2>
      <p>本政策可能不定期更新。重大变更将以显著方式通知。继续使用即表示同意更新后的版本。</p>

        <p style={{ marginTop: 48, fontSize: 12, color: 'var(--tx-3)' }}>
          <a href="/terms" style={{ color: 'var(--ac)' }}>服务条款</a> · <a href="/" style={{ color: 'var(--ac)' }}>Về trang chủ</a>
        </p>
      </main>
    </>
  );
}
