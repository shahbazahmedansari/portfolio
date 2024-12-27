import Image from "next/image";
import React from "react";

interface ServiceCardprops {
    title: string;
    content: string;
    imgUrl: string;
}

const ServiceCard = ({ title, content, imgUrl }: ServiceCardprops) => {
    return (
        <div className="group lg:size-[320px] bg-slate-200 p-10 rounded-xl hover:bg-blue-700 hover:text-white text-gray-600 hover:translate-y-5 size-[320px] md:w-[400px] md:h-[280px] dark:text-white dark:bg-slate-950 dark:hover:bg-blue-600 shadow-xl">
            <div className="bg-blue-600 p-3 rounded-lg shadow-xl w-fit group-hover:bg-slate-950">
                <Image src={imgUrl} alt="Service-Logo" width={50} height={50} />
            </div>
            <h2 className="mt-5 font-bold text-2xl">{title}</h2>
            <p className="text-lg">{content}</p>
        </div>
    );
};

export default ServiceCard;
