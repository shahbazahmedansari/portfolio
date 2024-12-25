import Image from "next/image";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="lg:size-[320px] bg-slate-200 p-10 rounded-xl hover:bg-blue-700 hover:text-white text-gray-600 hover:translate-y-5 size-[320px] md:w-[400px] md:h-[280px]">
      <div className="bg-blue-600 p-5 rounded-lg shadow-xl w-fit hover:bg-white">
        <Image
          src="/backend-coding.png"
          alt="Service-Logo"
          width={50}
          height={50}
        />
      </div>
      <h2 className="mt-5 font-bold text-2xl">Analytics & SEO</h2>
      <p className="text-lg">
        Implement tracking & analysis tools to monitor website performance &
        improve SEO
      </p>
    </div>
  );
};

export default ServiceCard;
