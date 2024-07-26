import React from 'react'
import './style.css'
import Image from 'next/image'
import logo from '../../../public/assets/logo.png';
import profile from '../../../public/assets/profile.png';
import menuicon from '../../../public/assets/menu-icon.svg';






export default function Header() {
  return (
    <>
      <header className='header w-full px-3 pb-24'>
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

      
    </>
  )
};
