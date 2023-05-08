import React from "react";
import Clock from "../assets/Clock.png";
import bigLogo from "../assets/bigLogo.png";
import smallLogo from "../assets/smallLogo.png";
import accesories from "../assets/accesories.png";
import avatar from "../assets/avatar.png";
import buy from "../assets/Buy.png";
import profile from "../assets/Profile.png";

function Navbar({isMobile}) {

  return (
    <nav className="w-full">
      <div className="w-full bg-[#103A1E] flex flex-col md:flex-row md:h-[50px] justify-center text-white">
        <div className="flex justify-center gap-1 my-auto md:gap-3">
          <div className="w-[44px] h-[44px] mt-[1px] mr-1 md:my-auto bg-[#99C43C] rounded-full border-[2px] md:w-[60px] md:h-[60px]">
            <img
              src={Clock}
              alt="clock"
              className="mx-auto w-[29px] mt-[6px] md:mt-[8px] md:w-[40px] object-contain"
            />
          </div>
          <p className="font-[Poppins] w-[90px] md:w-[190px] my-auto text-[16px] md:text-[18px]">
            Limited time promotion:
          </p>
          <p className="bg-[#8BB741] px-1 my-auto h-[34px] rounded-md font-[Londrina-Solid] text-[21px] font-bold">
            -50%
          </p>
          <p className="font-[Poppins] pl-1 w-[67px] md:w-[135px] my-auto text-[14px] md:text-[16px]">
            On all our website
          </p>
        </div>
        <div
          className="h-[50px] mx-auto w-[330px] text-center mt-1 border-t-[1px] border-[#ffffff] border-opacity-20 font-[900] text-[24px] font-[Londrina-Solid] 
        md:border-none md:flex md:justify-start md:mx-0 md:mt-2 md:w-auto"
        >
          04h : 02m : 55s
        </div>
      </div>
      <div className="w-full h-[94px]">
        <div className="flex justify-between bg-[#B9D74D] h-[64px]">
          <div className="flex pl-[16px] my-auto md:pl-[80px]">
            {isMobile ? (
              <img src={smallLogo} alt="mobileLogo" className="w-[90px] mt-4" />
            ) : (
              <img src={bigLogo} alt="Logo" className="w-[180px] mt-4" />
            )}
          </div>
          <div className="flex pr-[16px] gap-3 my-auto md:gap-7 md:pr-[50px]">
            <button className="bg-[#8BB741] w-[145px] hidden text-[#ffffff] font-[Londina-Solid] font-bold rounded-xl py-1 md:px-7 md:flex md:justify-center">
              <p className="mt-1">My account</p>
            </button>
            <button className=" flex my-auto px-1 bg-[#50B1E3] text-[#ffffff] font-[Londina-Solid] font-bold rounded-xl py-1 md:pl-[80px] md:h-[40px] md:w-[180px] relative">
              <div className="flex">
                {!isMobile && <img
                  src={accesories}
                  alt="accesories"
                  className="absolute left-2 h-[52px] w-[56px] object-contain mt-[-6px]"
                />}
                <p className="mt-1 font-bold">Accesories</p>
              </div>
            </button>
            <button className="bg-[#F39100] w-[150px] h-[40px] hidden text-[#ffffff] font-[Londina-Solid] font-bold rounded-xl py-1 md:pl-[65px] md:flex relative">
              <div className="flex">
                <img
                  src={avatar}
                  alt="avatar"
                  className="absolute left-2 h-[52px] w-[45px] object-contain mt-[-6px]"
                />
                <p className="mt-1 font-bold">Cart</p>
                <span className="bg-white rounded-full text-black h-[30px] w-[30px] absolute right-1 top-1">
                  <p className="mt-[3px] font-bold">0</p>
                </span>
              </div>
            </button>
            <button className="bg-[#8BB741] rounded-full h-[40px] w-[40px] md:hidden">
              <img src={profile} alt="profile" className="m-auto" />
            </button>
            <button className="bg-[#F39100] rounded-full h-[40px] w-[40px] md:hidden">
              <img src={buy} alt="buy" className="m-auto" />
            </button>
            <button></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
