import React from "react";
import banner from "../assets/banner.jpg"; // Đường dẫn đến ảnh banner

const Banner = () => {
    return (
        <div className="relative w-full h-[300px] bg-blue-500 overflow-hidden rounded-lg shadow-md">
            <img
                src={banner}
                alt="Banner"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default Banner;
