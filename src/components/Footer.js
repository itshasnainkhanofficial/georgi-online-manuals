import Image from 'next/image'
import React from 'react'
import chrome from "../../public/chrome-browser.png"

export const Footer = () => {
    return (
        <div className="flex text-white flex-col items-center justify-center text-center lg:pt-[80px] md:pt-[80px] sm:pt-[70px] pt-[20px]" >
            <Image src={chrome} alt='img' width="auto" height="auto" />
            <h1 className='text-[16px] pt-[30px]'>
                © 2023 ViewOnlineManuals. All Rights Reserved.
            </h1>
            <h2 className=' text-white text-[9px] md:text-[20px] md:pt-[20px] pt-[10px]'>
                ABOUT US | PRIVACY POLICY | COPYRIGHT POLICY | TERMS of USE | UNINSTALL | CONTACT US
            </h2>
        </div>
    )
}

