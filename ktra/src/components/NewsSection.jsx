import React from "react";
import tinTuc from "../assets/tinTuc.jfif";
import HopTacQT from "../assets/HopTacQT.jfif";

const NewsSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-8">
            {/* Cột trái */}
            <div className="space-y-4">
                {/* Thông báo */}
                <Section title="THÔNG BÁO" items={[
                    { text: "Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025", date: "24-04-2025", isNew: true },
                    { text: "Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội", date: "21-04-2025", isNew: true },
                ]} />

                {/* Tin tức - Sự kiện */}
                <Section title="TIN TỨC - SỰ KIỆN" items={[
                    { image: tinTuc },
                    { text: "AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp", date: "25-04-2025" },
                    { text: "Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong...", date: "22-04-2025", isNew: true },
                ]} />
            </div>

            {/* Cột phải */}
            <div className="space-y-4">
                {/* Tuyển sinh */}
                <Section title="TUYỂN SINH" items={[
                    { text: "Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình...", date: "28-03-2025" },
                    { text: "Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025", date: "20-03-2025" },
                ]} />

                {/* Hợp tác quốc tế */}
                <Section title="HỢP TÁC QUỐC TẾ" items={[
                    { image: HopTacQT },
                    { text: "Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc tế...", date: "24-03-2025" },
                    { text: "Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus", date: "19-03-2025" },
                ]} />
            </div>
        </div>
    );
};

const Section = ({ title, items }) => {
    return (
        <div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 mb-2">
                <h3 className="font-bold text-blue-900">{title}</h3>
                <button className="text-xs text-gray-500 hover:underline">xem tất cả</button>
            </div>
            <div className="space-y-2">
                {items.map((item, index) => (
                    item.image ? (
                        <img key={index} src={item.image} alt="News" className="w-full h-32 object-cover rounded" />
                    ) : (
                        <div key={index} className="flex items-center space-x-2">
                            <span className="text-red-600 font-bold">•</span>
                            <div>
                                <p className="hover:underline cursor-pointer">{item.text}</p>
                                <div className="text-gray-500 text-xs flex items-center">
                                    {item.date && <span>{item.date}</span>}
                                    {item.isNew && <span className="text-red-500 ml-2 font-bold">new</span>}
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
