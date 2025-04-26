import React, { useState } from "react";

const Sidebar = () => {
    const [hoveredMenu, setHoveredMenu] = useState(null);

    const menuItems = [
        {
            title: "LÃNH ĐẠO",
            subMenu: ["ĐẢNG ỦY", "BAN GIÁM HIỆU"],
        },
        {
            title: "CÁC PHÒNG BAN",
            subMenu: [
                "PHÒNG TỔ CHỨC - HÀNH CHÍNH",
                "PHÒNG TÀI CHÍNH - KẾ TOÁN",
                "PHÒNG KẾ HOẠCH - ĐẦU TƯ",
                "PHÒNG ĐÀO TẠO",
                "PHÒNG QUẢN LÝ KHOA HỌC VÀ HỢP TÁC QUỐC TẾ",
                "PHÒNG CÔNG TÁC CHÍNH TRỊ VÀ HỖ TRỢ SINH VIÊN",
                "PHÒNG KHẢO THÍ VÀ ĐẢM BẢO CHẤT LƯỢNG",
                "PHÒNG QUẢN TRỊ",
                "PHÒNG DỊCH VỤ",
                "PHÒNG QUẢN LÝ KÝ TÚC XÁ",
                "TẠP CHÍ KHOA HỌC VÀ CÔNG NGHỆ",
                "NHÀ XUẤT BẢN",
            ],
        },
        {
            title: "CÁC KHOA",
            subMenu: [
                "KHOA CÔNG NGHỆ CƠ KHÍ",
                "KHOA CÔNG NGHỆ THÔNG TIN",
                "KHOA CÔNG NGHỆ ĐIỆN",
                "KHOA CÔNG NGHỆ ĐIỆN TỬ",
                "KHOA CÔNG NGHỆ ĐỘNG LỰC",
                "KHOA CÔNG NGHỆ NHIỆT - LẠNH",
                "KHOA CÔNG NGHỆ MAY - THỜI TRANG",
                "KHOA CÔNG NGHỆ HÓA HỌC",
                "KHOA KHOA HỌC CƠ BẢN",
                "KHOA LUẬT VÀ KHOA HỌC CHÍNH TRỊ",
                "KHOA NGOẠI NGỮ",
                "KHOA QUẢN TRỊ KINH DOANH",
                "KHOA THƯƠNG MẠI - DU LỊCH",
                "KHOA KỸ THUẬT XÂY DỰNG",
            ],
        },
        {
            title: "CÁC VIỆN",
            subMenu: [
                "VIỆN TÀI CHÍNH - KẾ TOÁN",
                "VIỆN ĐÀO TẠO QUỐC TẾ VÀ SAU ĐẠI HỌC",
                "VIỆN CÔNG NGHỆ SINH HỌC VÀ THỰC PHẨM",
                "VIỆN KHOA HỌC CÔNG NGHỆ VÀ QUẢN LÝ MÔI TRƯỜNG",
            ],
        },
        {
            title: "CÁC TRUNG TÂM",
            subMenu: [
                "TRUNG TÂM QUẢN TRỊ HỆ THỐNG",
                "TRUNG TÂM NGOẠI NGỮ",
                "TRUNG TÂM GIÁO DỤC QUỐC PHÒNG VÀ THỂ CHẤT",
                "TRUNG TÂM THƯ VIỆN",
                "TRUNG TÂM THÔNG TIN - TRUYỀN THÔNG",
            ],
        },
        {
            title: "CÁC PHÂN HIỆU",
            subMenu: [
                "PHÂN HIỆU QUẢNG NGÃI",
                "CƠ SỞ THANH HÓA",
            ],
        },
        {
            title: "ĐOÀN THỂ",
            subMenu: [
                "CÔNG ĐOÀN",
                "ĐOÀN THANH NIÊN",
                "HỘI SINH VIÊN",
            ],
        },
    ];

    return (
        <div className="bg-blue-900 text-white p-4 w-64">
            <h2 className="font-bold mb-4 text-lg">CƠ CẤU TỔ CHỨC</h2>
            <ul className="space-y-2">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        onMouseEnter={() => setHoveredMenu(index)}
                        onMouseLeave={() => setHoveredMenu(null)}
                    >
                        <div className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 cursor-pointer flex justify-between items-center">
                            <span>{item.title}</span>
                            <span>{hoveredMenu === index ? "▲" : "▼"}</span>
                        </div>
                        {hoveredMenu === index && (
                            <ul className="bg-gray-100 text-black mt-1 rounded shadow-inner">
                                {item.subMenu.map((subItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className="px-6 py-2 hover:bg-gray-200 cursor-pointer text-sm"
                                    >
                                        {subItem}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
