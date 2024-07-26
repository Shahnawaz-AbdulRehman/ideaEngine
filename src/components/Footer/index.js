import React from 'react'
import facebook from '../../../public/assets/facebook.png';
import linkedin from '../../../public/assets/linkedin.png';
import cam from '../../../public/assets/cam.png';
import footerline from '../../../public/assets/footer-top-line.png';
import Image from "next/image"
export default function Footer() {
  return (
    <footer className='w-full relative mt-20 md:mt-24 max-w-none w-screen '>
    <div className='footer-top-line w-full'>
    <Image className='w-full' src={footerline} /> 
    </div>
      <div className='footer-content flex items-center justify-around my-14 md:my-20 flex-col gap-8 md:flex-row'>
        <div>
        <ul className='flex footer-list gap-6 xl:gap-12 md:gap-4 lg:gap-6'>
        <li><a href="#" className='xs uppercase footer-gray-text'>White-paper</a></li>
        <li><a href="#" className='xs uppercase footer-gray-text'>VISUAL NOVEL</a></li>
        <li><a href="#" className='xs uppercase footer-gray-text'>INITIAL DEMO</a></li>
        </ul>
        </div>
        <div className='flex items-center gap-6'>
          <a href="#" className='follow-us uppercase text-white'>Follow us</a>
          <a href="#"><Image className='footer-social-img' src={facebook} /></a>
          <a href="#"><Image className='footer-social-img' src={cam} /></a>
          <a href="#"><Image className='footer-social-img' src={linkedin} /></a>
        </div>
        <div><div className='footer-btn py-2 px-5 text-white'><button className='flex'><a href="#" className='footer-btn-text'>Connect Wallet</a></button></div>
        </div>
      </div>
      <div className='footer-copty-text py-1'>
        <p className='md:text-1xl'>© Copyright © 2024 Incentives  Incentives - AI Automations and blockchain sales@idea-engine.ai</p>
      </div>
   
   </footer>
  )
}
