import React from 'react'
import './style.css'
import Image from 'next/image'
import logo from '../../../public/assets/logo.png';

export default function Header() {
  return (
   <>
   <header>
    <div className='flex'>
      <div className='logo mw-100'>
        <Image src={logo} />
      </div>
      <div className='header-menu'>
        <ul>
        <li><a href="#">White-paper</a></li>
        <li><a href="#">VISUAL NOVEL</a></li>
        <li><a href="#">INITIAL DEMO</a></li>
        </ul>
      </div>
      <div className='headerbtn-box flex items-center lg:gap-3 md:gap-1'>
        <div className='left-line h-7 w-2 bg-black'></div>
        <div className='header-btn py-2 lg:px-4 md:px-2 text-white'><button><a href="#" className='fs-18x'>Connect Wallet</a></button></div>
        <div className='right-line h-7 w-2'></div>
        <div className='profile-img'> 
          <Image src={profile} />
    </div>
    </div>
    </div>
   </header> 
   </>)};
