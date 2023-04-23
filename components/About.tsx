import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const About = () => {
  const phone='8434856752';
  return (
    <div id="aabout">
    <div className="flex flex-col items-center justify-center text-center bg-[#1e293b] p-4 ml-[200px]">
      <div className="pb-4 text-center font-inter">
        <h2 className="text-4xl font-bold">About Me</h2>
      </div>
      <p className="pl-10 text-lg tracking-wider font-inter">
        I am a frontend web developer with cosmic love for colors, skilled developing a fully functional responsive front-end of websites and loves to explore new technologies with my patience amd determination hand in hand helped me in building my problem solving skills.I love to take challenge and eager to deliver it within schedule.My
        expertise include MERN stack, Nextjs, Tailwind CSS ,Reactjs ,Git & Github etc. I have also experience of tools like Figma and Canva.Looking forward to good career growth & grab opportunities where my strategic work & knowledge could be best subjected!
      </p>
      <div className="pt-8">
        <p className="uppercase tracking-widest text-[#5651e5]">
          {" "}
          Lets Connect
        </p>
        <div className="flex items-center justify-between my-3 w-full sm:w-[80%] gap-6">
          <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
            <Link href="https://www.linkedin.com/in/janhvi-singh-539989227/" target="_blank"> <FaLinkedinIn /></Link>
          </div>
          <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
            
            <Link href="https://github.com/Janhvi52" target="_blank"> <FaGithub /></Link>
          </div>
          <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
            
            <a href="mailto:janhvi52@gmail.com" target="_blank"> <AiOutlineMail /></a>
          </div>
          <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
          
            <a href={`tel:${phone}`} > <BsPersonLinesFill /></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
