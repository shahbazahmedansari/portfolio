import React from "react";
import ServiceCard from "../ServiceCard";
import { serviceCardDetails } from "@/constants";

const ServiceSection = () => {
  return (
    <section className="flex justify-center items-center flex-col dark:bg-slate-900 bg-slate-100">
      <h1 className="text-5xl font-bold mt-10 text-center">
        What service do I provide
      </h1>
      <div className="my-10 grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {serviceCardDetails &&
          serviceCardDetails.map((service) => (
            <div key={service.id}>
              <ServiceCard
                title={service.title}
                content={service.content}
                imgUrl={service.imgUrl}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ServiceSection;
