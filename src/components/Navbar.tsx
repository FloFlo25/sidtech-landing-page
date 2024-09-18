"use client";
import { type Dispatch, type SetStateAction, useRef, useState } from "react";
import { atma } from "~/app/fonts";
import { motion } from "framer-motion";

type TabProps = {
  children: React.ReactNode;
  selected?: boolean;
  setPosition: Dispatch<SetStateAction<PositionType>>;
};

type PositionType = { left: number; width: number; opacity: number };
type CursorProps = { position: PositionType };

// ${selected && "bg-[#526827] text-[#A8DA67]"

const Tab = ({ children, selected = false, setPosition }: TabProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      onClick={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={`${atma.className} relative z-10 rounded-full px-3 py-1 uppercase md:text-[2rem]`}
    >
      {children}
    </button>
  );
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.div
      animate={position}
      className="absolute z-0 h-8 scale-110 rounded-full bg-[#526827] mix-blend-normal md:h-14 md:scale-100"
    ></motion.div>
  );
};

const Navbar = () => {
  const [position, setPosition] = useState<PositionType>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="absolute left-[calc(50%_-_225px)] top-8 z-50 flex w-fit scale-75 gap-8 rounded-full border-4 border-solid border-[#526827] bg-[#283311] px-4 py-3 text-white md:left-[calc(50%_-_375px)] md:scale-100">
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Services</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Reviews</Tab>
      <Cursor position={position} />
    </nav>
  );
};

export default Navbar;
