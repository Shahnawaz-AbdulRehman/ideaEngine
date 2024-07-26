import React from 'react'
import Image from 'next/image'
import block from "../../../public/assets/userProfile.png"
import fire from "../../../public/assets/fxemoji_fire.png";
import eth from "../../../public/assets/eth.png";
// import nft1 from "../../../public/assets/nft1.png";
import vectorTest from "../../../public/assets/vectorTest.png";

export default function Card({img,hearts}) {

    const buttonStyle = {
        borderRadius: "0 20px 0 20px"
    }
    return (
        <div className='text-white w-[90%] bg-white bg-opacity-25 p-2 rounded-xl self-center'>

            <div className='relative'>
                <Image src={img} />
                <div style={buttonStyle} className='bg-white bg-opacity-25 p-2 absolute top-0 right-0 flex items-center'>
                    <div className='w-4 mr-3'>
                        <Image src={vectorTest} />
                    </div>
                    <div>{hearts}</div>
                </div>
            </div>

            <div className='flex items-center ms-5'>
                <div className='w-10 mr-4'>
                    <Image src={block} />
                </div>
                <div>
                    <div className='Oxanium text-2xl'>
                        Floki Monster
                    </div>
                    <div className='Inter'>
                        By @ User
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between mx-4 mt-10'>
                <div className='flex items-center'>
                    <div className='Oxanium '>
                        On Sale
                    </div>
                    <div className='w-6'>
                        <Image src={fire} />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='w-10'>
                        <Image src={eth} />
                    </div>
                    <div>
                        4.89 ETH
                    </div>
                </div>
            </div>

            <div className=" flex justify-center items-center mt-10 mb-3 ">
                <button3 className="relative w-[80%] text-center  opacity-80 cursor-pointer  p-3 Oxanium  hover:text-white border border-[#AD1AAF] group">
                    View All
                </button3>
            </div>

        </div>
    )
}
