import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/main-logo.png"
export const Modal = () => {
  return (
    <div className="flex bg-white flex-col items-center justify-center text-center rounded-[24px] xl:w-[48%] lg:w-[60%] md:w-[90%] sm:w-[620px] w-[370px] px-[70px] md:py-[30px] py-[20px]">
      <Image src={logo} alt='img' width="100%" height="100%" />
      <h1 className='text-[#202125]  pt-[20px] font-[700] text-[18px] lg:text-[44px] md:text-[44px] sm:text-[20px]'>
        Quickly Access Manuals Right From Your Browser
      </h1>
      <h2 className='text-[#727171] text-[20px] pt-[20px] lg:w-[80%] md:w-[100%]  sm:w-[100%]'>
        Download the extension safely from the Chrome Web Store
      </h2>
      <div className='lg:w-[60%] md:w-[100%] w-[100%]'>
        <p className='text-[#727171] text-[16px] pt-[16px]'>
          Access thousands of user guides, owner manuals, and installation guides with our ad-supported extension! To learn more, see our <Link href="" className='underline'>
            EULA
          </Link> and
          <Link href="" className='underline'> Privacy Policy.
          </Link>
        </p>
      </div>
        <a href='https://chrome.google.com/webstore/detail/view-online-manuals/pmfjbnfgkdfckdkjihbonnedllnkbade'>
      <button className='transition-btn bg-[#1b68d2] mt-[36px] w-[300px] h-[65px] text-white text-[20px] text-[500] rounded-[30px]'>
        Add to Chrome - It's Free
      </button>
        </a>

      <div className=' flex flex-row justify-between items-center md:w-[90%] w-[100%] pt-[36px] space-x-[16px]'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col justify-center rounded-[30px] w-[40px] h-[40px] border-[2px] border-[#5489f7]'>
            <h4 className='text-[#5489f7]'>
              1
            </h4>
          </div>
        </div>
        <div className='border-[1px] w-[100%] border-[#1b68d2]'></div>

        <div className='flex flex-col items-center'>
          <div className='flex flex-col justify-center rounded-[30px] w-[40px] h-[40px] bg-[#5489f7]'>
            <h4 className='text-white'>
              2
            </h4>
          </div>
        </div>
        <div className='border-[1px] w-[100%] border-[#1b68d2]'></div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col justify-center rounded-[30px] w-[40px] h-[40px] bg-[#5489f7]'>
            <h4 className='text-white'>
              3
            </h4>
          </div>
        </div>
      </div>
      <div className=' flex flex-row justify-between items-center md:w-[90%] w-[100%]   space-x-[16px]'>
        <h1 className='text-[#727171] text-[12px] uppercase mt-[10px] font-[500] text-center ' style={{ marginLeft: "-30px" }}>CLICK 'ADD TO CHROME'</h1>
        <h1 className='text-[#727171] text-[12px] uppercase mt-[10px] font-[500] text-center ' style={{ marginLeft: "-20px" }}>ADD EXTENSION</h1>
        <h1 className='text-[#727171] text-[12px] uppercase mt-[10px] font-[500] text-center '>ENJOY</h1>
      </div>

    </div>
  )
}