import React from 'react'

function ProductCard({props}) {
  return (
    <div className='bg-[#ffffff] p-3 rounded-[30px]'>
      <div className='p-3'>
        <img src={props.img} alt={props.name} />
        <p className='text-center text-[#272E35] text-[20px] font-bold font-[Londrina-Solid]'>{props.name}</p>
      </div>

      <div className='flex gap-3 justify-center mt-3'>
        <div className='w-[24px] h-[24px] rounded-full bg-[#34679F]'></div>
        <div className='w-[24px] h-[24px] rounded-full bg-[#303030]'></div>
        <div className='w-[24px] h-[24px] rounded-full bg-[#D26FB7]'></div>
        <div className='w-[24px] h-[24px] rounded-full bg-[#EA393B]'></div>
        <div className='w-[24px] h-[24px] rounded-full bg-[#8C3EAF]'></div>
        <div className='w-[24px] h-[24px] rounded-full bg-[#FF640A]'></div>
      </div>

      <div className='flex p-3 gap-3 justify-around items-center mt-3'>
        <div className='flex flex-row border-[#F39100] border-2 p-2 h-[66px] rounded-3xl bg-[#FEF2CB] items-center'>
          <div className='flex flex-col ml-2'>
          <span className='text-[#F39100] font-bold text-[20px] font-[Londrina-Solid]'>{props.offerPrice}</span>
          <span className='line-through text-[#2D1405] text-[14px]'>{props.realPrice}</span>
          </div>
          <div className='h-[56px] w-[56px] rounded-full bg-[#ffffff] ml-6 p-2 pt-4 text-[#F39100] font-bold font-[Londrina-Solid]'>-50%</div>
        </div>
        <button className='w-[35%] bg-[#8BB741] h-[60px] rounded-3xl text-white text-[22px] font-[Londrina-Solid]'>View</button>
      </div>
    </div>
  )
}

export default ProductCard