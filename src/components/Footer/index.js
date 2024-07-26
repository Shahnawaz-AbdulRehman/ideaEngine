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
          <a href="https://x.com/Incentives01"><Image className='footer-social-img' src='https://www.idea-engine.ai/images/social_ic01.svg' width={20} height={20} /></a>
          <a href="https://t.me/idea_engine_ai"><Image className='footer-social-img' src='https://www.idea-engine.ai/images/social_ic02.svg' width={20} height={20} /></a>
          <a href="https://incentives101.substack.com/"><Image className='footer-social-img' src='https://www.idea-engine.ai/images/social_ic03.svg' width={20} height={20} /></a>
          <a href="https://www.instagram.com/idea_engine.ai/"><Image className='footer-social-img' src='https://www.idea-engine.ai/images/social_ic04.svg' width={20} height={20} /></a>
          <a href="https://www.youtube.com/@IDEA-EngineAI"><Image className='footer-social-img' src='https://www.idea-engine.ai/images/social_ic05.svg' width={20} height={20} /></a>
        </div>
        <div><div className='footer-btn py-2 px-5 text-white'><button className='flex'><a href="#" className='footer-btn-text'>Connect Wallet</a></button></div>
        </div>
      </div>
      <div className='footer-copty-text py-1'>
        <p className='m-0'>© Copyright © 2024 Incentives  Incentives - AI Automations and blockchain sales@idea-engine.ai</p>
      </div>
   
   </footer>
  )
}
