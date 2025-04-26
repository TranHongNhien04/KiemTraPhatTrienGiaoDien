import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import nenWeb from "./assets/nenWeb.png"; // import ảnh local

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Line xanh trên cùng */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 flex justify-center space-x-6">
        <a href="#" className="hover:underline">E-Office</a>
        <a href="#" className="hover:underline">Email</a>
        <a href="#" className="hover:underline">Thư viện - Thông tin</a>
        <a href="#" className="hover:underline">Kết nối | Liên hệ</a>
      </div>

      {/* Ảnh dưới line, không full width */}
      <img
        src={nenWeb}
        alt="Nền trang web"
        className="mx-auto max-w-7xl object-cover"
      />

      {/* Nội dung chính */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg">
        <Header />
        <Body />
        <Footer />
      </div>

    </div>
  );
};

export default App;
