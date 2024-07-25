import React from 'react'
import './style.css'
import Image from 'next/image'
import logo from '../../../public/assets/logo.png';
import profile from '../../../public/assets/profile.png';
import menuicon from '../../../public/assets/menu-icon.svg';
import facebook from '../../../public/assets/facebook.png';
import linkedin from '../../../public/assets/linkedin.png';
import cam from '../../../public/assets/cam.png';
import footerline from '../../../public/assets/footer-top-line.png';





export default function Header() {
  return (
   <>
 <header className='header w-full px-3'>
 <div className='flex justify-between items-center'>
 <div className='logo md:w-40 lg:w-auto'>
        <Image src={logo} />
      </div>
      <div className='header-menu py-5 xl:px-16 xl:px-16 md:px-6 hidden sm:block'>
        <ul className='flex text-white xl:gap-12 md:gap-4 lg:gap-6'>
        <li><a href="#" className='fs-18x uppercase'>White-paper</a></li>
        <li><a href="#" className='fs-18x uppercase'>VISUAL NOVEL</a></li>
        <li><a href="#" className='fs-18x uppercase'>INITIAL DEMO</a></li>
        </ul>
      </div>
      <div className='headerbtn-box flex items-center lg:gap-3 md:gap-1'>
        <div className='left-line h-7 w-2 bg-black'></div>
        <div className='header-btn py-2 lg:px-4 md:px-2 text-white'><button><a href="#" className='fs-18x'>Connect Wallet</a></button></div>
        <div className='right-line h-7 w-2'></div>
        <div className='profile-img'> 
        <Image src={profile} /> 
        </div>
        <input type='checkbox' id='check'></input>
        <label for="check" className='checkbtn block sm:hidden'>
        <div className='menu-icon'> 
        <Image src={menuicon} /> 
        </div>
        </label>
    </div>
    </div>
   </header> 

   <footer className='w-full relative'>
    <div className='footer-top-line w-full'>
    <Image className='w-full' src={footerline} /> 
    </div>
      <div className='flex items-center justify-around my-24 md-col-reverser'>
        <div>
        <ul className='flex footer-list xl:gap-12 md:gap-4 lg:gap-6'>
        <li><a href="#" className='fs-18x uppercase footer-gray-text'>White-paper</a></li>
        <li><a href="#" className='fs-18x uppercase footer-gray-text'>VISUAL NOVEL</a></li>
        <li><a href="#" className='fs-18x uppercase footer-gray-text'>INITIAL DEMO</a></li>
        </ul>
        </div>
        <div className='flex items-center gap-6'>
        <a href="#" className='fs-18x uppercase text-white'>Follow us</a>
        <a href="#"><Image className='footer-social-img' src={facebook} /></a>
        <a href="#"><Image className='footer-social-img' src={cam} /></a>
        <a href="#"><Image className='footer-social-img' src={linkedin} /></a>
        </div>
        <div><div className='footer-btn py-2 lg:px-4 md:px-2 text-white'><button><a href="#" className='fs-18x'>Connect Wallet</a></button></div>
        </div>
      </div>
      <div className='footer-copty-text py-1'>
        <p>© Copyright © 2024 Incentives  Incentives - AI Automations and blockchain sales@idea-engine.ai</p>
      </div>
   
   </footer>
</>
)
};
