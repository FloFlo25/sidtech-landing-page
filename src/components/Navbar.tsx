"use client";
import { type Dispatch, type SetStateAction, useRef, useState } from "react";
import { atma } from "~/app/fonts";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type TabProps = {
  children: React.ReactNode;
  selected?: boolean;
  setPosition: Dispatch<SetStateAction<PositionType>>;
};

type PositionType = { left: number; width: number; opacity: number };
type CursorProps = { position: PositionType };

const Tab = ({ children, selected = false, setPosition }: TabProps) => {
  const router = useRouter();
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      onClick={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width: screen.width > 640 ? width * 1.35 : width * 1.3,
          opacity: 1,
          left: ref.current.offsetLeft,
        });

        if (ref.current.innerHTML === "Home") {
          router.push("/");
          return;
        }
        if (ref.current.innerHTML === "Services") {
          router.push("#services");
          return;
        }
        if (ref.current.innerHTML === "Projects") {
          router.push("#projects");
          return;
        }
        if (ref.current.innerHTML === "Reviews") router.push("#reviews");
      }}
      className={`${atma.className} relative z-10 rounded-full px-3 py-1 uppercase text-white md:text-[2rem]`}
    >
      {children}
    </button>
  );
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.div
      animate={position}
      className="absolute z-0 h-8 rounded-full bg-[#526827] mix-blend-normal md:h-14"
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
    <nav className="sticky top-8 m-[45px_auto_-115px] flex scale-[0.75] rounded-full border-4 border-solid border-[#526827] bg-[#283311] px-4 py-2 md:m-[45px_auto_-125px] md:gap-16">
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Services</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Reviews</Tab>
      <Cursor position={position} />
    </nav>
  );
};

export default Navbar;
