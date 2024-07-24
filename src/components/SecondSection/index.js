import React from 'react'

export default function SecondSection({

    preTitle = "Most loved NFTs of the time",
    blueText = "Gamified",
    titleText = "DePin + AI",
    paragraph = ""
}) {
    return (
        <div className='text-white self-start '>
            <div className='flex justify-center items-end'>
                <div>
                    <div className='LatoLight'>
                        {preTitle}
                    </div>
                    <div className='Oxanium text-8xl mt-10'>
                        <span className='text-custom-blue'>
                            Gamified
                        </span>
                        DePin + AI
                    </div>
                    <div className='Oxanium text-xl mt-10 font-thin'>
                        mini-games to level up your desired Identity on smartwatch
                    </div>
                </div>
                <div className="flex justify-end items-end ">
                    <button2 className="relative text-black opacity-80  p-3 Oxanium bg-black hover:text-white border border-transparent group">
                        View All
                    </button2>
                </div>
            </div>


        </div>
    )
}
