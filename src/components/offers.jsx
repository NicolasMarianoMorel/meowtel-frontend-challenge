import React from "react";
import ProductCard from "./productCard";
import nextArrow from "../assets/nextArrow.png";
import backArrow from "../assets/backArrow.png";
import pagination from "../assets/pagination.png";
import Collar from "../assets/collar.png";
import Leash from "../assets/leash.png";

function Offers({ isMobile }) {
  const products = [
    {
      img: Collar,
      name: "Dog collar",
      offerPrice: "£8.90",
      realPrice: "£17.80",
    },
    {
      img: Collar,
      name: "Cat collar",
      offerPrice: "£7.90",
      realPrice: "£15.80",
    },
    {
      img: Leash,
      name: "Leash",
      offerPrice: "£8.90",
      realPrice: "£17.80",
    },
  ];

  return (
    <div className="w-[80%] bg-[#EFF3E2] rounded-xl flex flex-col mx-auto mt-3 p-3">
      <div className="w-full flex flex-col bg-[#103A1E] rounded-xl p-3 md:flex-row justify-center">
        <div className="md:w-[50%] flex flex-col mx-auto relative pb-[50px] md:pb-0 md:h-[160px] md:pl-4">
          <div className="flex text-white justify-between">
            <div className="flex flex-col md:flex-row md:justify-center md:gap-2 md:mt-6">
              <p className="text-[20px] font-bold md:text-[24px]">
                Exclusive Offer!
              </p>
              {!isMobile && (
                <p className="bg-[#8BB741] h-[34px] rounded-xl text-[21px] font-bold">
                  -50%
                </p>
              )}
              <p className="text-[12px] md:text-[16px] my-auto">
                On all our Accesories
              </p>
            </div>
            {isMobile && (
              <p className="bg-[#8BB741] h-[34px] rounded-xl  ml-7 my-auto px-1 text-[21px] font-bold">
                -50%
              </p>
            )}
          </div>
          <div className="text-[#F39100] font-bold text-[20px] md:text-[28px] md:mt-3">
            <p>08mins : 23sec remaining</p>
          </div>
          <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border-[4px] border-white bg-[#99C43C] font-[Londrina-Solid] flex flex-col absolute left-[35%] top-24 md:top-6 md:left-[90%] lg:left-[91%]">
            <div className="m-auto">
              <p className="text-[#ffffff] text-[20px] md:text-[24px] pl-[5px] font-bold">
                FREE
              </p>
              <p className="text-[455C1E] pb-3 text-[12px] md:text-[14px]">Shipping fees</p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] rounded-xl border-grey-600 border-2 pt-[50px] pb-1 flex md:pt-0">
          <div className="font-[Londrina-Solid] text-[#ffffff] mx-auto w-[70%] text-center my-auto">
            <p>
              <span className="text-[#8BB741] md:text-[20px]">Add the product below</span> to
              your basket and we will send it to you at no additional cost.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto my-5 md:flex md:justify-around">
        { !isMobile ? products.map((accesory) => {
            return <ProductCard props={accesory}/>
          })
          :
          <ProductCard props={products[0]}/>
        }
        {isMobile && (
          <div className="flex gap-3 mt-3 justify-center">
            <img src={backArrow} alt="backArrow" className="object-contain" />
            <img src={pagination} alt="pagination" className="object-contain" />
            <img src={nextArrow} alt="nextArrow" className="object-contain" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Offers;
