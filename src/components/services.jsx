import React from "react";
import ServiceCard from "./serviceCard";
import BoxImg from "../assets/Frame4.png";
import TruckImg from "../assets/Frame3.png";
import LockImg from "../assets/Frame2.png";
import VetImg from "../assets/Frame1.png";

function Services() {
  const services = [
    {
      name: "Free Shipping",
      img: BoxImg,
      description: "if you spend over £24",
      pawPosition: "right-[30px] top-6 md:right-[40px] md:top-[140px]"
    },
    {
      name: "Shipping",
      img: TruckImg,
      description: "within 24 Hours",
      pawPosition: "right-[80px] top-5 rotate-180 md:right-[80px] md:top-[200px]"
    },
    {
      name: "Secure",
      img: LockImg,
      description: "Payment",
      pawPosition: "right-[50px] top-8 rotate-45  md:top-[60px]"
    },
    {
      name: "Vet",
      img: VetImg,
      description: "Recomended",
      pawPosition: "right-[90px] top-11 rotate-180 md:right-[80px] md:top-[140px]"
    },
  ];

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-col md:flex-row justify-around my-[80px] gap-3">
        {services.map((service) => {
          return <ServiceCard service={service} />;
        })}
      </div>
    </div>
  );
}

export default Services;
