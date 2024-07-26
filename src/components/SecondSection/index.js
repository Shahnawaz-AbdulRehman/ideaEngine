import React from 'react'
import Image from 'next/image'
import secondImg from '../../../public/assets/secondImage.svg';
import secondImgResponsive from '../../../public/assets/secondImageResponsive.svg';

export default function SecondSection({

    preTitle ,
    blueText ,
    titleText,
    paragraph,
    sectionImg,
    responsiveImage 
}) {
    return (
        <div className='  sm:pl-0 text-white flex flex-col  max-[1200px] self-start w-full mt-14 '>
            <div className='flex justify-center items-end '>
                <div className='w-1/2'>
                    <div className='LatoLight'>
                        {preTitle}
                    </div>
                    <div className='Oxanium text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-10'>
                        <span className='text-custom-blue mr-3'>
                            {blueText}
                        </span>
                        {titleText}
                    </div>
                    <div className='Oxanium text-lg sm:text-xl mt-10 font-thin'>
                        {paragraph}
                    </div>
                </div>
                <div className=" w-[35%]  xl:w-1/2 flex justify-end items-start ">
                    <button2 className="relative text-black opacity-80  p-3 Oxanium bg-black hover:text-white border border-transparent group">
                        View All
                    </button2>
                </div>
            </div>
        {sectionImg && responsiveImage  && 
        
            <>
            <div className='hidden md:flex justify-center items-center self-center w-full lg:w-3/4 mt-5'>
                <Image src={sectionImg} layout='responsive' />
            </div>
            <div className='flex md:hidden justify-center items-center self-center  mt-5'>
                <Image src={responsiveImage} />
            </div>
            </>
            }

        </div>
    )
}
