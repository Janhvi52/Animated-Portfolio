import React from "react";
const Copyright = () => {
    const date=new Date();
    const currentYear= date.getFullYear();
    return(
        <div className="w-[100vw] h-[100px] pb-1 mt-4 mb-0  flex justify-center items-center text-xl font-inter">
            <p className="text-gray-500"> Copyright © <span className="text-white">{currentYear}</span>  | Janhvi Singh |</p>
        </div>
    );
};

export default Copyright;