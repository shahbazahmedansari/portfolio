import { skillLists } from "@/constants";
import React from "react";
import Image from "next/image";

const SkillSection = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10 text-5xl font-bold">
      <h1>My Skills</h1>
      <div className="mt-20 flex items-center justify-center mx-10 w-screen">
        {skillLists.map((skill) => (
          <div
            key={skill.id}
            className="bg-slate-100 size-20 rounded-full flex items-center justify-center hover:bg-white hover:shadow-2xl hover:scale-110 mx-5"
          >
            <Image src={skill.icon} alt={skill.title} width={50} height={50} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
