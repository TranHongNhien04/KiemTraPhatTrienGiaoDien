import React from "react";
import QN03 from "../assets/QN03.jpg";
import TH03 from "../assets/TH03.jpg";
import video from "../assets/video-background.jpg"; // Đường dẫn đến ảnh video

const CampusSection = () => {
    const campusItems = [
        {
            title: "PHÂN HIỆU QUẢNG NGÃI",
            img: QN03, // dùng ảnh QN03
        },
        {
            title: "CƠ SỞ THANH HÓA",
            img: TH03, // dùng ảnh TH03
        },
        {
            title: "VIDEO VÀ HÌNH ẢNH",
            img: video, // dùng ảnh video
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
