"use client";

import Image from "next/image";
import HomeScreenImage from "../../public/assets/images/HomeScreen.jpg"
import { MouseEventHandler } from "react";

interface handleStartProps {  
  handleStart: MouseEventHandler<HTMLButtonElement>;
}

const HomeScreen = ({ handleStart }: handleStartProps) => {
  return (
    <div className="relative h-full flex items-center justify-center  w-full">
      <span className="text-white text-7xl absolute top-[15%] bg-black/70 rounded-lg px-10 py-5 left-[5%]">
        Enchanted Escapades
      </span>
      <button
        className="text-5xl bg-white rounded-full px-10 py-5 absolute right-[20%] bottom-[30%]  cursor-pointer"
        onClick={handleStart}
      >
        Start
      </button>
      <Image
        src={HomeScreenImage}
        alt="HomeScreen image"
        className="absolute h-full w-full -z-10	 top-0 left-0 object-cover"
      />
    </div>
  );
};

export default HomeScreen;
