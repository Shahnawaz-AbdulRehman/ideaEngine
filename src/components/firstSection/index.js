import React from 'react'
import firstSectionImg from '../../../public/assets/firstSection.png';
import Image from 'next/image'
import Button from '../Button';
export default function FirstSection() {
    return (
        <>
            <div className='text-white flex'>
                <div className='w-[60%]'>
                    <div className='Oxanium font-bold text-6xl mb-10 w-[90%]'>
                        AI - WEARABLE CRYPTO
                        COLLECTIBLES ECOSYSTEM
                    </div>
                    <div className='LatoLight'>
                        Gamified DePin + AI companion System on wearable
                    </div>
                    <div className='flex mt-10'>
                        <Button title={"Private Sale"} />
                        <Button title={"White List"} />
                    </div>
                </div>
                <div >
                    <Image className='w-[80%]' src={firstSectionImg} />
                </div>
            </div>
        </>
    )
}
