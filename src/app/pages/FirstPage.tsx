import React from "react";
import { atma } from "~/app/fonts";

const FirstPage = () => {
  return (
    <div className="h-screen bg-[url('/assets/images/smallHomePage.png')] bg-cover bg-bottom md:bg-[url('/assets/images/homePage.png')]">
      <div className="ml-2 mt-[10rem] md:w-[96rem] md:ml-[4rem]">
        <h1
          className={`${atma.className} text-[2rem] font-medium text-white md:text-[8rem]`}
        >
          Effortless Tech Expertise, <span className="text-[#48c030]">One Step at a Time</span>
        </h1>
        <h3
          className={`font-mono text-[1rem] font-medium text-white md:bg-transparent md:text-[3rem]`}
        >
          At <span>SidTech</span>, we make your tech journey smooth and
          enjoyable. Whether you need cutting-edge software solutions,
          innovative project management, or friendly tech advice, we&apos;re
          here to help.
        </h3>
      </div>
    </div>
  );
};

export default FirstPage;
