import React from 'react'
import firstSectionImg from '../../../public/assets/firstSection.png';
import Image from 'next/image'
import Button from '../Button';
export default function FirstSection() {
    return (
        <>
            <div className='text-white flex md:row flex-col-reverse md:flex-row'>
                <div className='md:w-[50%]'>
                    <div className='Oxanium text-center md:text-start font-bold text-4xl lg:text-6xl mb-10 md:w-[90%]'>
                        AI - WEARABLE CRYPTO
                        COLLECTIBLES ECOSYSTEM
                    </div>
                    <div className='LatoLight text-center md:text-start'>
                        Gamified DePin + AI companion System on wearable
                    </div>
                    <div className='flex items-center justify-center md:items-start md:justify-start mb-16 md:mb-0 mt-10'>
                        <Button title={"Private Sale"} />
                        <Button title={"White List"} />
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <Image  src={firstSectionImg} />
                </div>
            </div>
        </>
    )
}
