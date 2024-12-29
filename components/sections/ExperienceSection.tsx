import Image from "next/image";
import React from "react";

const ExperienceSection = () => {
    return (
        <section className="flex justify-center items-center my-20 dark:bg-slate-950 max-sm:flex-col">
            <div className="w-[50%] flex items-center justify-center max-sm:w-full">
                <div className="bg-slate-100 w-fit p-20 rounded-lg dark:bg-slate-900 text-5xl font-bold max-sm:mx-10">
                    Work Experience
                </div>
            </div>
            <div className="w-[50%] flex items-center justify-center max-sm:w-full">
                <div className="w-fit p-10 hover:cursor-pointer hover:translate-x-1 hover:translate-y-4 dark:hover:bg-slate-800 rounded-lg hover:shadow-2xl hover:bg-white flex justify-center items-center gap-8 max-sm:flex-col max-sm:items-start max-sm:mx-10">
                    <Image
                        src="/grayquest.png"
                        alt="grayquest"
                        width={40}
                        height={40}
                    />
                    <div>
                        <h1 className="font-semibold text-2xl">
                            GrayQuest Finance Pvt. Ltd.
                        </h1>
                        <p className="text-lg mt-3">
                            Front End Developer Intern -- February 2023 - June
                            2023
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
