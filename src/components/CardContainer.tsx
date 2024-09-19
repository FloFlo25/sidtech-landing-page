import Image from "next/image";
import React from "react";
import { atma } from "~/app/fonts";

type Props = {
  title: string;
  image: string;
  icon: string;
  description: string;
};

const CardContainer = ({ title, description, icon, image }: Props) => {
  return (
    <div
      className={`flex w-[325px] flex-col items-center rounded-2xl border-2 border-solid border-[#6A9730] bg-[#283311] md:w-fit`}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="h-[250px] w-full rounded-t-[14px]"
      />
      <div
        className={`${atma.className} mt-2 text-[24px] text-white xl:text-[3vw]`}
      >
        {title}
      </div>
      <div className="flex w-full items-center gap-2 xl:gap-6">
        <hr className="w-full border-[1px] border-solid border-[#6A9730] xl:border-[2px]" />
        <Image src={icon} alt={icon} className="xl:scale-[2]" />
        <hr className="w-full border-[1px] border-solid border-[#6A9730] xl:border-[2px]" />
      </div>
      <div className="p-2 font-mono text-white xl:text-[1.5vw]">
        {description}
      </div>
    </div>
  );
};

export default CardContainer;
