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
    </div>
   </header>
   </> 
  )
}
