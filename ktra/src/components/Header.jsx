import React from "react";
import iconHome from "../assets/logo/home.png";

const Header = () => {
    const menuItems = [
        "GIỚI THIỆU",
        "ĐÀO TẠO",
        "TUYỂN SINH",
        "NGHIÊN CỨU",
        "SINH VIÊN",
        "GIẢNG VIÊN",
        "VĂN BẰNG",
    ];

    return (
        <header className="bg-gray-100 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={iconHome} alt="Home" className="h-8 w-auto" />
                </div>

                {/* Menu */}
                <nav className="flex gap-6 text-gray-800 font-bold text-sm">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className="hover:text-blue-600 transition-colors duration-200"
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                {/* Search */}
                <div>
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="border rounded-full pl-4 pr-4 py-1 text-sm focus:outline-none"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
