import React from "react";
import { atma } from "../fonts";
import CardContainer from "~/components/CardContainer";
import designImage from "/public/assets/images/designImage.png";
import developmentImage from "/public/assets/images/developmentImage.png";
import marketingImage from "/public/assets/images/marketingImage.png";
import brushIcon from "/public/assets/icons/brushIcon.svg";

const ServicesPage = () => {
  return (
    <div id="services" className="w-screen p-4 md:p-[124px]">
      <h1
        className={`${atma.className} 3xl:text-[4vw] mt-[100px] text-center text-[2rem] font-medium leading-10 text-white md:text-[4rem] md:leading-none`}
      >
        At SidTech, We Believe in Smart Solutions
      </h1>
      <h3
        className={`${atma.className} mt-8 text-[1rem] 3xl:text-[1.25vw] font-medium leading-5 text-white md:mt-16 md:bg-transparent md:text-[1.5rem] md:leading-none`}
      >
        We know that sometimes, the best solutions come from a laid-back
        approach. At SidTech, we take the time to understand your needs and
        provide thoughtful, innovative solutions that make your tech journey
        effortless and enjoyable. Our team of dedicated experts is here to turn
        your ideas into reality, one relaxed step at a time.
      </h3>
      <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
        <CardContainer
          image={designImage.src}
          title="Design & Branding"
          description="Cutting-edge UI/UX design and comprehensive branding solutions to establish your digital identity"
          icon={brushIcon as string}
        />
        <CardContainer
          image={designImage.src}
          title="Design & Branding"
          description="Cutting-edge UI/UX design and comprehensive branding solutions to establish your digital identity"
          icon={brushIcon as string}
        />
        <CardContainer
          image={designImage.src}
          title="Design & Branding"
          description="Cutting-edge UI/UX design and comprehensive branding solutions to establish your digital identity"
          icon={brushIcon as string}
        />
      </div>
    </div>
  );
};

export default ServicesPage;
