import { skillLists } from "@/constants";
import React from "react";
import Image from "next/image";

const SkillSection = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-5xl font-bold">My Skills</h1>
      <div className="flex justify-center items-center mb-10">
        <div className="mt-20 grid lg:grid-cols-10 grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 mx-10 items-center">
          {skillLists.map((skill) => (
            <div
              key={skill.id}
              className="bg-slate-100 size-20 rounded-full flex items-center justify-center hover:bg-white hover:shadow-2xl hover:scale-110 dark:bg-slate-700 dark:shadow-2xl dark:hover:bg-slate-600"
            >
              <Image
                src={skill.icon}
                alt={skill.title}
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
