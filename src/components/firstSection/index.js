import React from 'react'
import firstSectionImg from '../../../public/assets/firstSection.png';
import Image from 'next/image'
import Button from '../Button';
export default function FirstSection() {
    return (
        <>
            <div className='container'>
                <div className='text-white flex md:row flex-col-reverse md:flex-row'>
                    <div className='md:w-[50%]'>
                        <h2 className='hero_title Oxanium md:text-start font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl mb-5 xl:mb-10 md:w-[97%]'>
                            AI - WEARABLE CRYPTO
                            COLLECTIBLES ECOSYSTEM
                        </h2>
                        <p className='LatoLight xl:text-xl md:text-start'>
                            Gamified DePin + AI companion System on wearable
                        </p>
                        <div className='flex items-center md:items-start md:justify-start my-16 md:mb-0 xl:mt-20'>
                            <Button title={"Private Sale"} />
                            <Button title={"White List"} />
                        </div>
                    </div>
                    <div className='md:w-[50%] flex items-center justify-center w-100'>
                        <Image className='w-[100%]' src={firstSectionImg} />
                    </div>
                </div>
            </div>
        </>
    )
}
