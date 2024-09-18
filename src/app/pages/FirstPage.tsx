import React from "react";
import { atma } from "~/app/fonts";

const FirstPage = () => {
  return (
    <div className="h-screen min-h-[868px] w-screen min-w-[466px] bg-[url('/assets/images/smallHomePage.png')] bg-cover bg-right sm:bg-fixed md:bg-[url('/assets/images/homePage.png')]">
      <div className="ml-[4rem] mt-[10rem]">
        <h1
          className={`${atma.className} text-[2rem] font-medium text-white md:text-[8rem]`}
        >
          Effortless Tech Expertise, <span>One Step at a Time</span>
        </h1>
        <h3
          className={`font-mono text-[1rem] font-medium text-white md:text-[3rem]`}
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
