import React from "react";

const Skills = () => {
  return (
    <div id="sskill">
    <div className="flex flex-col">
      <div className="pb-4 text-center font-inter">
        <h2 className="text-4xl font-bold">Skills</h2>
      </div>
      <div className="grid items-center grid-cols-4 gap-4 font-inter">
      <div className="p-0 duration-300 ease-in  shadow-md rounded-md cursor-pointer shadow-gray-400 hover:scale-105">
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          MERN
        </div>
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b]  flex justify-center items-center text-3xl font-bold p-0 duration-300 ease-in  shadow-md rounded-md cursor-pointer shadow-gray-400 hover:scale-105">
          GIT & GITHUB
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] flex justify-center items-center text-3xl font-bold p-0 duration-300 ease-in  shadow-md rounded-md cursor-pointer shadow-gray-400 hover:scale-105">
          THREE.JS
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] flex justify-center items-center text-3xl font-bold p-0 duration-300 ease-in  shadow-md rounded-md cursor-pointer shadow-gray-400 hover:scale-105">
        TAILWINDCSS
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b]  flex justify-center items-center text-3xl font-bold p-0 duration-300 ease-in  shadow-md rounded-md cursor-pointer shadow-gray-400 hover:scale-105">
          SOCKET.IO
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b]  flex justify-center items-center text-3xl font-bold p-0 duration-300 ease-in  shadow-md rounded-md cursor-pointer shadow-gray-400 hover:scale-105">
        NEXT.JS
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b]  flex justify-center items-center text-3xl font-bold p-0 duration-300 ease-in  shadow-md rounded-md cursor-pointer shadow-gray-400 hover:scale-105">
          TYPESCRIPT
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] flex justify-center items-center text-3xl font-bold p-0 duration-300 ease-in  shadow-md rounded-md cursor-pointer shadow-gray-400 hover:scale-105">
          GSAP
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
