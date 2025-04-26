import React from "react";

const CampusSection = () => {
    const campusItems = [
        {
            title: "PHÂN HIỆU QUẢNG NGÃI",
            img: "https://via.placeholder.com/300x200", // Ảnh demo
        },
        {
            title: "CƠ SỞ THANH HÓA",
            img: "https://via.placeholder.com/300x200",
        },
        {
            title: "VIDEO VÀ HÌNH ẢNH",
            img: "https://via.placeholder.com/300x200",
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 bg-blue-900 p-4 text-white mt-8">
            {campusItems.map((item, index) => (
                <div key={index} className="text-center">
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded" />
                </div>
            ))}
        </div>
    );
};

export default CampusSection;
