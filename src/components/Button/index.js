import React from 'react'

export default function Button({ title }) {

    return (
        <>
            <div className="flex items-center justify-center mx-10 md:ml-0 md:mr-16">
                <button className="relative text-xs md:text-lg text-black opacity-80   Oxanium hover:bg-white hover:text-black border hover:border-transparent border-custom-blue transition-all duration-300  group">
                    {title}
                </button>
            </div>
        </>
        
    )
}
