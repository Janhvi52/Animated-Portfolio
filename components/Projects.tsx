import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="pproject">
    <div className="flex flex-col ml-[120px] my-3 ">
      <div className="pb-4 text-center font-inter"> 
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>
      <div className="grid items-center grid-cols-3 gap-4 font-inter">
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="https://res.cloudinary.com/codenplay/image/upload/v1640959794/portfolio/React-Ecommerce_kerdnf.png"
              alt="React-Ecommerce"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
              3D Portfolio Website
              </div>
              <p className="text-base text-gray-700">
              A 3D personal portfolio website.Used Next,js for server side rendering and Three.js, GSAP for animating 3D computer graphics in a web browser using webGL.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
              <button className="p-2">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="https://res.cloudinary.com/codenplay/image/upload/v1640959794/portfolio/MERN-Ecommerce_tearfh.png"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-2 text-xl font-bold">
              FemmeCare
              </div>
              <p className="text-base text-gray-700">
              Provide users to converse over the globe though a ChatRoomUsers can add notes, thoughts and espy Graph of Emotions, Word Cloud and track Mental Health through it.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
              <button className="p-2">View Details</button>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[450px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
            <Image
              src="https://res.cloudinary.com/codenplay/image/upload/v1640959795/portfolio/HTML-Website_ezbwkd.png"
              alt="Sunset in the mountains"
              width={480}
              height={200}
            />
            <div className="px-6 py-2">
              <div className="mb-4 text-xl font-bold">
              Criminal-Catch
              </div>
              <p className="pb-4 text-base text-gray-700">
              Provides users to upload videos and photos along with names returning names in video in real-time.Useful for Security systems.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-sm">
              <button className="p-2">View Details</button>
            </div>
          </div>
        </div>
        </div>
           
         
      </div>
    </div>
  );
};

export default Projects;
