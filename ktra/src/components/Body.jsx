import React from "react";
import Sidebar from "../components/Sidebar";
import NewsSection from "../components/NewsSection";


const Body = () => {
    return (

        <div className="grid grid-cols-4 gap-4">

            <div className="col-span-1">
                <Sidebar />
            </div>
            {/* News */}
            <div className="col-span-3">
                <NewsSection />
            </div>

        </div>
    );
};

export default Body;
