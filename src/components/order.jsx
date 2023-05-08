import React from "react";
import checkIcon from "../assets/checkIcon.png";

function Order() {
  return (
    <div className="w-[80%] bg-[#EFF3E2] rounded-xl mt-8 mb-8 flex mx-auto h-[154px] md:h-[140px]">
      <div className="w-[95%] bg-[#ffffff] flex flex-col rounded-xl my-auto mx-auto md:flex-row h-[134px] md:h-[100px]">
        <div className="w-full flex flex-col my-auto md:flex-row md:justify-between md:p-6 md:self-center">
        <div className="flex gap-3 justify-center my-auto">
          <img src={checkIcon} alt="Icon" className="h-[30px] w-[30px]" />
          <p className="font-[Londrina-Solid] text-[#000000] font-bold md:text-[24px]">
            Your order{" "}
            <span className="text-[#F39100] font-bold">#HGFU18X</span> is
            confirmed
          </p>
        </div>
        <div className="mx-auto mt-2 md:mx-0 md:my-auto">
          <button className="bg-[#8BB741] text-[#ffffff] h-[48px] md:h-[64px] w-[230px] font-[Londrina-Solid] text-[16px] font-bold rounded-[40px] md:px-7 md:flex justify-center">
            <p className="mt-1 md:mt-4">See more details</p>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
