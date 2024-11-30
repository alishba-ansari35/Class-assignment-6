"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>

        {/*Top navbar */}
  <div className="md:flex justify-between   md:w-full bg-[#F7F7F7] md:h-[54px] md:top-[100px] md:left-[100px] md:pr-[64px] md:pl-[62px]
   border-b-2 border-[#676767] hidden ">
  <div  className='md:flex justify-between  md:w-full md:h-[54px] md:pt-[12px] md:pl-[12px] md;gap-[32px]'>
            <div className='md:flex justify-between md:w-[386px] md:h-[24px] md:gap-[16px] '>
              <p className=' md:w-[205px] md:h-[21px] md:font-[Roboto] md:font-normal md:text-sm text-sm md:leading-[21px] text-black'>
              Phone Number: 956 742 455 678  <span className="border border-[#676767] ml-4"></span>
              </p>
             
              <p className='md:w-[149px] md:h-[21px] md:font-[Roboto] md:font-normal md:text-sm text-sm md:leading-[21px] text-black'>
              Email:info@ddsgnr.com 
              </p>
            </div>
            <div className='md:flex justify-end   md:h-[24px] md:gap-[16px] '>
              <div className='flex justify-between w-[132px]  h-[24px] gap-[12px] p-1'>
          <FaFacebookF/>
          <FaInstagram />
          <FaLinkedin />
         <FaTwitter /> 
          </div>
          </div>
  </div>
  </div>

      {/* top navbar end  */}

      {/* Navabar start  */}
        <nav
        className='bg-[#F7F7F7] h-[72px] w-full mt-0 md:mt-3 border-b-2  border-[#676767] md:px-9 px-0  md:flex md:items-center md:justify-between flex justify-between items-center'>
          <div className='flex justify-between items-center pl-4 ' >
          <Image
           src="/images/logo1.png"
           alt="logo"
           width={130.6}
           height={41}
         
            />
              </div>

         
          <ul className='md:font-normal  md:text-[14px]  md:font-[Roboto]  md:items-center z-[-1] md:z-auto md:static 
          absolute bg-white w-full   left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] md:flex hidden '>
            <li className='mx-4 my-6 md:my-0 border-b-2 border-black'><Link href="/">Home</Link></li>
            <li className='mx-4 my-6 md:my-0'><Link href="/">Courses</Link></li>
            <li className='mx-4 my-6 md:my-0'><Link href="/">Services</Link></li>
            <li className='mx-4 my-6 md:my-0'><Link href="/">Achievements</Link></li>
            <li className='mx-4 my-6 md:my-0'><Link href="/">About Us</Link></li>
            <li className='mx-4 my-6 md:my-0'><Link href="/">Testimonials</Link></li>

 <button className='bg-white rounded-[5px] mx-2 md:my-0 border-[1px] border-black px-6 py-2 font-normal font-[Roboto]'>Login</button>
 <button className='bg-black rounded-[5px] border-[1px]  border-black px-6 py-2  font-normal font-[Roboto]  text-white '>Sign in</button>
          </ul>
         
        
<div onClick={toggleMenu}
 className='md:hidden  mx-5 text-4xl'>

         <AiOutlineMenu /> 
          </div>
</nav>



{/* MOBILE RESPONSIVE */}

    {isOpen && (
          
          <div className="md:full w-auto bg-[#F7F7F7] mx-auto md:hidden  ">
          <ul className='underline text-center'>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0 ' ><Link href="/">Home</Link></li>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0' ><Link href="/">Courses</Link></li>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0'><Link href="/">Services</Link></li>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0'><Link href="/">Achievements</Link></li>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0'><Link href="/">About Us</Link></li>
            <li className='text-center font-[Roboto] text-[18px] my-3 md:my-0'><Link href="/">Testimonials</Link></li>

 <button className='bg-white rounded-[5px] mx-2 md:my-0 border-[1px] border-black px-6 py-2 font-normal font-[Roboto]'>Login</button>
 <button className='bg-black rounded-[5px] border-[1px]  border-black px-6 py-2  font-normal font-[Roboto]  text-white '>Sign in</button>
          </ul>
</div>
      

  )}


      
      {/* Navabar End  */}


    </div>
  )
}

export default Header

