import Image from 'next/image'
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookieLight } from "react-icons/pi";
import { GiWineGlass } from "react-icons/gi";
import React from 'react'

const Whyus = () => {
  return (
    
    <div className='w-full h-[716px] flex mt-[100px] lg:px-[100px] overflow-hidden px-[20px]'>
    <div className='xl:block md:hidden sm:hidden hidden lg:hidden'>
    <div className='grid grid-cols-2 grid-row-2 '>
        <Image src="/whyus1.png" alt='' width={200} height={200} className='w-[262px] h-[256px] rounded-[6px]' />    
        <Image src="/whyus1.png" alt='' width={200} height={200} className='w-[201px] ml-[-60px] h-[181px] rounded-[6px] mt-[75px]'/>    
        <Image src="/whyus2.png" alt='' width={200} height={200} className='w-[144px] h-[206px] rounded-[6px] mt-[15px]'/>    
        <Image src="/whyus3.png" alt='' width={200} height={200} className='w-[141px] h-[146px] ml-[-180px] mt-[15px] rounded-[6px]'/>    
        <Image src="/whyus4.png" alt='' width={200} height={200} className='w-[101px] h-[106px] rounded-[6px] ml-[300px] mt-[-205px]'/>    
        <Image src="/whyus5.png" alt='' width={200} height={200} className='w-[101px] h-[106px] rounded-[6px] ml-[-30px] mt-[-90px]'/>    
      </div>
    </div>
    
      <div className='flex flex-col  lg:gap-[90px] '>
     <div className='flex flex-col justify-between  lg:gap-[20px]'>
     <h1 className='text-bordercoloryello font-greatVibes text-[32px] leading-[40px] font-medium'>Why Choose us</h1>
        <h1 className='font-helvetica w-[400px] font-bold lg:text-[40px] text-[30px] leading-[45px] text-whitetext'><span className='text-bordercoloryello'>Ex</span>ta ordinary taste And Experienced</h1>
        <p className='font-normal lg:text-[16px]  text-[13px] leading-6 text-whitetext w-[280px] lg:w-[480px] lg:h-[48px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
     </div>
        <div className='lg:w-[374px] text-xs lg:h-[135px] h-[90px] flex lg:gap-[20px] gap-3'>
          <h1 className='text-whitetext text-center font-medium'><PiHamburgerLight className=' lg:w-[102px] lg:h-[100px] h-10 w-10 rounded-[6px] bg-bordercoloryello text-whitetext text-center'/>Fast Food</h1>
          <h1 className='text-whitetext text-center font-medium'>< PiCookieLight className=' lg:w-[102px] lg:h-[100px] h-10 w-10 rounded-[6px] bg-bordercoloryello text-whitetext text-center'/>Lunch</h1>
          <h1 className='text-whitetext text-center font-medium'><GiWineGlass className='text-xs lg:w-[102px] w-10 lg:h-[100px] h-10 rounded-[6px] bg-bordercoloryello text-whitetext text-center'/>Dinner</h1>
        </div>
        <div className='lg:w-[304px] w-[200px] flex gap-[20px] lg:px-[50px] lg:py-[20px] h-[93px] rounded-[6px] bg-whitetext'>
          <div>
          <h1 className='font-bold leading-[56px] text-[48px] text-bordercoloryello'>30+</h1>
          </div> 
<div>
<h1>Year of</h1>
<h1 className=' font-bold leading-[32px] text-blackkk'>Experienced</h1>
</div>
        </div>
      </div>
    </div>
    
  )
}

export default Whyus

