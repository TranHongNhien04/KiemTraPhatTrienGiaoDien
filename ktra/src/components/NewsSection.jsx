import React from "react";

const NewsSection = () => {
    return (
        <div className="grid grid-cols-2 gap-4 text-sm">
            {/* Cột trái */}
            <div className="space-y-4">
                {/* Thông báo */}
                <Section title="THÔNG BÁO" />

                {/* Tin tức - Sự kiện */}
                <Section title="TIN TỨC - SỰ KIỆN" />
            </div>

            {/* Cột phải */}
            <div className="space-y-4">
                {/* Tuyển sinh */}
                <Section title="TUYỂN SINH" />

                {/* Hợp tác quốc tế */}
                <Section title="HỢP TÁC QUỐC TẾ" />
            </div>
        </div>
    );
};

const Section = ({ title }) => {
    return (
        <div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 mb-2">
                <h3 className="font-bold text-blue-900">{title}</h3>
                <button className="text-xs text-gray-500 hover:underline">xem tất cả</button>
            </div>
            {/* Demo nội dung tin */}
            <ul className="list-disc list-inside space-y-1">
                <li>Thông báo / Tin tức mẫu...</li>
                <li>Thông báo / Tin tức mẫu...</li>
            </ul>
        </div>
    );
};

export default NewsSection;
