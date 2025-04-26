import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      {/* Các thành phần khác */}
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
