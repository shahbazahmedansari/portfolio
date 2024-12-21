import Image from "next/image";
import React from "react";
import { FloatingDockLinks } from "./FloatingDockLinks";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="flex items-start justify-between max-sm:flex-col bg-slate-100 dark:bg-slate-900 pb-20">
      <div className="mx-10 sm:max-w-[50%] mt-10">
        <h3 className="uppercase text-blue-600 tracking-widest text-2xl">
          Hi, I am Shahbaz Ansari
        </h3>
        <h1 className="mt-10 dark:text-white text-black font-extrabold text-7xl">
          Professional Web Developer based in India
        </h1>
        <p className="mt-2 text-xl text-gray-500 tracking-widest dark:text-white">
          Transforming the web one line of code at a time.
          <br /> Crafting cutting-edge digital experiences with precsion,
          passion and a profound commitment to excellence.
        </p>
        <div className="flex items-center justify-center">
          <Button className="mt-10 px-8 py-8 text-xl rounded-full bg-blue-500 max-sm:w-full hover:bg-blue-500 hover:animate-bounce dark:text-white">
            My Work
          </Button>
          <Button className="mt-10 px-8 py-8 text-xl rounded-full bg-white text-gray-500 hover:bg-white max-sm:w-full ml-5 hover:animate-bounce hover:trans dark:text-white dark:bg-slate-950">
            Contact Me
          </Button>
          <FloatingDockLinks />
        </div>
      </div>
      <div className="mx-14 mt-10">
        <Image
          src={"/hero-section.jpg"}
          alt="hero-section"
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
