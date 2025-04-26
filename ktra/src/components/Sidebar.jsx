import React from "react";

const Sidebar = () => {
    const menuItems = [
        "LÃNH ĐẠO",
        "CÁC PHÒNG BAN",
        "CÁC KHOA",
        "CÁC VIỆN",
        "CÁC TRUNG TÂM",
        "CÁC PHÂN HIỆU",
        "ĐOÀN THỂ",
    ];

    return (
        <div className="bg-blue-900 text-white p-4">
            <h2 className="font-bold mb-4">CƠ CẤU TỔ CHỨC</h2>
            <ul className="space-y-2">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
