import logoIUH from "../assets/logoIUH.png";
import iconFb from "../assets/logo/icon-fb.png";
import iconIn from "../assets/logo/icon-in.png";
import iconTw from "../assets/logo/icon-tw.png";

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-10">
            <div className="max-w-7xl mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700 text-sm">
                <div>
                    <h3 className="font-bold mb-2 text-red-700">LIÊN HỆ</h3>
                    <p className="mb-1 font-semibold">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
                    <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 1, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
                    <p>Điện thoại: 028 38940 390 - 100</p>
                    <p>Tuyển sinh: 028 3985 1392 - 028 3985 5858 - 028 3985 1917</p>
                    <p>Email: dhcni@iuh.edu.vn</p>
                    <img src={logoIUH} alt="IUH Logo" className="mt-3 w-40" />
                </div>

                <div>
                    <h3 className="font-bold mb-2 text-red-700">HOẠT ĐỘNG KHÁC</h3>
                    <ul className="space-y-1">
                        <li>Hoạt động phục vụ cộng đồng</li>
                        <li>Sinh viên tình nguyện</li>
                        <li>CLB/Đội/Nhóm sinh viên</li>
                        <li>Kết nối doanh nghiệp</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-2 text-red-700">THÔNG TIN MỞ RỘNG</h3>
                    <ul className="space-y-1">
                        <li>Báo chí viết về IUH</li>
                        <li>Khám phá IUH</li>
                        <li>Kỹ năng mềm</li>
                        <li>Bộ sưu tập</li>
                        <li>Dịch vụ sinh viên</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-2 text-red-700">VĂN BẢN TIỆN ÍCH</h3>
                    <ul className="space-y-1">
                        <li>Quy chế - Quy định - Quy trình</li>
                        <li>Ba công khai</li>
                        <li>Biểu mẫu đào tạo</li>
                        <li>Quản lý khoa học</li>
                        <li>Phản hồi</li>
                    </ul>
                </div>
            </div>

            <div className="border-t py-5 text-center text-gray-500 text-xs">
                <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
                <p className="mt-1 italic">
                    Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.
                </p>

                <div className="mt-4 flex justify-center space-x-4">
                    <img src={iconFb} alt="Facebook" className="h-6 w-6" />
                    <img src={iconIn} alt="LinkedIn" className="h-6 w-6" />
                    <img src={iconTw} alt="Twitter" className="h-6 w-6" />
                </div>

                <div className="mt-2 text-gray-500">
                    <p>Số lượt truy cập: 288,835,319 | Hôm nay: 21,673 | Đang xem: 48</p>
                </div>
            </div>
        </footer>
    );
}
