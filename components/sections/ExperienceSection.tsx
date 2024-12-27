import React from "react";

const ExperienceSection = () => {
    return (
        <section className="flex justify-center items-center my-20 dark:bg-slate-950">
            <div className="w-[50%] flex items-center justify-center">
                <div className="bg-slate-100 w-fit p-20 rounded-lg dark:bg-slate-900 text-5xl font-bold">
                    Work Experience
                </div>
            </div>
            <div className="w-[50%] flex items-center justify-center">
                <div className="w-fit p-10 hover:cursor-pointer hover:translate-x-1 hover:translate-y-4 dark:hover:bg-slate-800 rounded-lg hover:shadow-2xl hover:bg-white">
                    <h1 className="font-semibold text-2xl">
                        GrayQuest Finance Pvt. Ltd.
                    </h1>
                    <p className="text-lg mt-3">
                        Front End Developer Intern -- February 2023 - June 2023
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
