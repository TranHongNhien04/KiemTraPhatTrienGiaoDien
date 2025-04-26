import React from "react";
import Sidebar from "../components/Sidebar";
import NewsSection from "../components/NewsSection";
import CampusSection from "../components/CampusSection";

const Body = () => {
    return (
        <div className="p-4 space-y-8">
            <div className="grid grid-cols-4 gap-4">
                {/* Sidebar */}
                <div className="col-span-1">
                    <Sidebar />
                </div>

                {/* News */}
                <div className="col-span-3">
                    <NewsSection />
                </div>
            </div>

            {/* Campus */}
            <CampusSection />
        </div>
    );
};

export default Body;
