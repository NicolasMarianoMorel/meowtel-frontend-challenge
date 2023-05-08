import React from "react";
import PawCards from '../assets/PawCards.png'

function ServiceCard({ service }) {
  return (
    <div className="flex bg-[#FEF2CB] rounded-3xl p-3 relative h-[110px] md:h-[294px] md:w-[23%] max-w-[282px] md:flex-col md:p-8">
      <div className="flex bg-[#ffffff] rounded-full h-[70px] w-[70px] justify-center md:h-[90px] md:w-[90px] my-auto md:min-h-[90px]">
        <img src={service.img} alt={service.name} className="h-[45px] w-[45px] object-contain self-center md:h-[56px] md:w-[56px]" />
      </div>
      <div className="flex flex-col p-1 pl-2">
        <h2 className="font-[Londrina-Solid] text-[#8BB741] font-bold text-[24px] sm:text-[28px] md:text-[32px] border-b-[2px] border-[#F9C87F] pb-1 md:pb-3">{service.name}</h2>
        <p className="font-[Poppins] font-medium text-[14px] md:text-[16px] text-[#F39100] pt-2 md:pt-4">{service.description}</p>
      </div>
      <img src={PawCards} alt="Paw" className={`absolute h-10 w-10 md:h-[50px] md:w-[60px] ${service.pawPosition}`}/>
    </div>
  );
}

export default ServiceCard;
