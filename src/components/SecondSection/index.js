import React from 'react'
import Image from 'next/image'
import secondImg from '../../../public/assets/secondImage.svg';
import secondImgResponsive from '../../../public/assets/secondImageResponsive.svg';

export default function SecondSection({

    preTitle,
    blueText,
    titleText,
    paragraph,
    sectionImg,
    responsiveImage,
    viewAllBtn
}) {
    return (
        <div className='text-white md:flex flex-col mt-16 md:mt-24 lg:mt-32 w-full'>
            <div className='container'>
                <div className='md:flex justify-between items-end '>
                    <div className='w-full'>
                        <div className='LatoLight'>
                            {preTitle}
                        </div>
                        <h2 className='break-words Oxanium text-4xl  xl:text-7xl mt-5 md:mt-10'>
                            {blueText ? (
                                <span className='text-custom-blue mr-3'>
                                    {blueText}
                                </span>
                            ) : null}
                            {titleText}
                        </h2>
                        <p className='Oxanium text-lg sm:text-xl mt-5 lg:mt-10 font-thin mb-5 lg:mb-0 lg:w-1/3'>
                            {paragraph}
                        </p>
                    </div>
                    {viewAllBtn &&
                        <div className="px-3 px-md-0 lg:w-[35%]  xl:w-1/2 md:flex justify-end items-start mt-8 mt-md-0">
                            <button2 className="view_all relative text-black opacity-80 Oxanium bg-black hover:text-white border border-transparent group">
                                View All
                            </button2>
                        </div>
                    }
                </div>
            </div>

            {sectionImg && responsiveImage &&

                <>
                    <div className='hidden md:flex justify-center items-center self-center w-full container'>
                        <Image src={sectionImg} layout='responsive' />
                    </div>
                    <div className='flex md:hidden justify-center items-center self-center'>
                        <Image src={responsiveImage} />
                    </div>
                </>
            }

        </div>
    )
}
