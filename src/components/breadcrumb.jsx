import React from "react";
import homeIcon from '../assets/bx-home-alt.png'

function Breadcrumb({isMobile}) {

  return (
    <>
      {!isMobile ? (
        <div className="w-[80%] mx-auto mt-3 text-[#777E90] text-[14px] font-[Poppins]">
          <div className="flex gap-3">
            <div className="flex gap-1 justify-center align-middle">
            <img src={homeIcon} alt="Home" />
            <p>Homepage</p>
            </div>
            &gt;&gt;
            <p>Accessories </p>
            &gt;&gt;
            <p>Dog collar</p>
            &gt;&gt;
            <p className="text-black">Cart</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Breadcrumb;
