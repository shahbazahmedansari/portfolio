import Image from "next/image";
import React from "react";
import { FloatingDockLinks } from "../FloatingDockLinks";
import HeroButton from "../HeroButton";

const HeroSection = () => {
  return (
    <section className="flex items-start justify-between max-sm:flex-col bg-slate-100 dark:bg-slate-900 pb-20">
      <div className="mx-10 sm:max-w-[50%] mt-10">
        <h3 className="uppercase text-blue-700 dark:text-blue-600 tracking-widest text-2xl">
          Hi, I am Shahbaz Ansari
        </h3>
        <h1 className="mt-10 dark:text-white text-black font-extrabold sm:text-7xl text-5xl">
          Professional Web Developer based in India
        </h1>
        <p className="mt-2 text-xl text-gray-500 tracking-widest dark:text-white">
          Transforming the web one line of code at a time.
          <br /> Crafting cutting-edge digital experiences with precsion,
          passion and a profound commitment to excellence.
        </p>
        <div className="flex items-center justify-center max-sm:flex-col mx-10">
          <HeroButton className="bg-blue-700 dark:bg-blue-600 text-white px-10 py-4">
            Projects
          </HeroButton>
          <HeroButton className="sm:ml-8 dark:bg-slate-950 bg-white text-gray-500 dark:text-white px-10 py-5">
            Contact
          </HeroButton>

          <FloatingDockLinks />
        </div>
      </div>
      <div className="mx-14 mt-10">
        <Image
          src={"/hero-section.jpg"}
          alt="hero-section"
          width={500}
          height={500}
          className="rounded-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
