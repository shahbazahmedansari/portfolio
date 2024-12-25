import React from "react";
import ServiceCard from "../ServiceCard";

const ServiceSection = () => {
  return (
    <section className="flex justify-center items-center flex-col dark:bg-slate-900 bg-slate-100">
      <h1 className="text-5xl font-bold mt-10 text-center">
        What service do I provide
      </h1>
      <div className="my-10 grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default ServiceSection;
