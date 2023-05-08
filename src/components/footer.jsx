import React from 'react'
import Logo from '../assets/bigLogo.png'

function Footer() {
  return (
    <footer className='w-[80%] mx-auto '>
        <div className='flex flex-col md:flex-row gap-3 bg-[#FEF2CB] rounded-[50px] pb-5 md:pb-0'>
        <div className='pl-2'>
            <img src={Logo} alt="Logo" className='h-[80px] w-[180px] mx-auto mt-3 md:mt-0' />
        </div>
        <div className='flex flex-col my-auto mx-auto p-2 gap-5 md:flex-row text-[14px] font-[Poppins] text-center'>
            <p>Contact Us</p>
            <p>Delivery</p>
            <p className='text-[#F39100] font-bold'>Secure Payment</p>
            <p>Lifetime Guaranteed Engraving</p>
            <p>Terms of Use</p>
            <p>Returns and Refunds</p>
            <p>Privacy Policy</p>
        </div>
        </div>
        <div className='mx-auto w-fit my-4 text-[12px] md:text-[13px] font-medium text-[#847165]'>Copyright© 2023 Dogstag.uk.co. All rights reserved</div>
    </footer>
  )
}

export default Footer