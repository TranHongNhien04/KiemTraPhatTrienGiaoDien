import React from "react";
import Sidebar from "../components/Sidebar";


const Body = () => {
    return (

        <div className="grid grid-cols-4 gap-4">

            <div className="col-span-1">
                <Sidebar />
            </div>

        </div>
    );
};

export default Body;
