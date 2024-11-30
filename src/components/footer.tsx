import Image from 'next/image';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    
    <div className=' bg-white w-full h-[300px] md:px-20  border-t-2 border-black' >
      
     <div className=' md:flex-row flex flex-col md:justify-between md:items-center md:w-full bg-white my-10'>
        <h1 className='md:text-[18px] text-[22px]  md:font-bold font-bold md:font-[Roboto] md:leading-[27px] md:w-full pl-5 '>Subscribe to our newsletters <br />
          <span className='text-[16px] text-black font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></h1>
         
         <div className=''>
            <div className='flex flex-col md:flex-row px-2 md:px-0'>
  <input type="email" placeholder='Enter your Email' className='text-black pl-4 rounded-[5px]   
  border-[2px] border-black md:w-[265px]  md:h-[48px] gap-8 w-full h-[48px] md:mr-20 mt-5 md:mt-0' />
  <button className='  rounded-[5px] md:w-[119px] w-full md:h-[48px] h-[48px] mt-5 md:mt-0 border-[2px] border-black bg-white text-black text-[18px] font-[Roboto]'>Subscribe</button>
  </div>
  <p className='text-[16px] font-[Roboto] font-normal text-black mt-5 md:ml-6 pl-4'>By subscribing you agree to with our Privacy Policy</p>
         </div>
         
     </div>


     <div className='flex flex-col md:flex-row  w-full h-[1000px] md:h-[300px]  md:mt-[80px] px-10 md:gap-10'>
        <div className=' w-full h-[90px]   '>
            <Image 
            src="/images/logo1.png"
             alt="logo"
             width={130.6}
             height={48}
             className='ml-10 md:ml-10 mt-5'
             />
        </div>
        <div className=' w-full h-[300px] md:py-5 py-9 text-center'>
            <h1 className='text-black text-[20px] font-bold px-5  '>Courses</h1>
            <ul className='font-normal font-[Roboto] text-[16px] text-black mt-4'>
                <li className='py-2 px-5 '>Bussiness</li>
                <li className='py-2 px-5'>Development</li>
                <li className='py-2 px-5'>Technology</li>
                <li className='py-2 px-5'>Design</li>
                <li className='py-2 px-5'>Programming</li>
            </ul>
        </div>
        <div className=' w-full h-[300px]  md:py-5 py-4 text-center'>
            <h1 className='text-black text-[20px] font-bold px-5  '>Resources</h1>
            <ul className='font-normal font-[Roboto] text-[16px] text-black mt-4'>
                <li className='py-2 px-5 '>Carrer</li>
                <li className='py-2 px-5'>Resume</li>
                <li className='py-2 px-5'>Learning</li>
                <li className='py-2 px-5'>Interview Preprations</li>
                <li className='py-2 px-5'>Jobs</li>
            </ul>
        </div>
        <div className='b w-full h-[300px]  md:py-5 py-4 text-center'>
            <h1 className='text-black text-[20px] font-bold px-5  '>About Us</h1>
            <ul className='font-normal font-[Roboto] text-[16px] text-black mt-4'>
                <li className='py-2 px-5 '>Contact</li>
                <li className='py-2 px-5'>Help/Support</li>
                <li className='py-2 px-5'>FAQ</li>
                <li className='py-2 px-5'>Terms and Conditions</li>
                <li className='py-2 px-5'>Partners</li>
            </ul>
        </div>
     </div>
     <div className='w-full h-[100px] border-t-[2px] border-black flex flex-col md:flex-row gap-5  '>
      <div className=' w-full h-[25px] text-[18px] font-[Roboto] font-normal leading-[21px] text-center md:text-start mt-9'>2023 Ddsgnr. All right reserved.</div>
      <div className='w-full h-[25px] text-[14px] md:text-[15px] font-[Roboto] font-normal leading-[21px] Cookies Settings text-center underline mt-9'>
     <span className='mr-2'> Privacy Policy </span>
     Terms of Service
       <span className='ml-2'> Cookies Settings </span></div>
      <div className=' w-full h-[25px] flex md:justify-end justify-center items-center gap-5 py-4 mt-9'>
        <span className='w-[24px] h-[24px]   text-[18px] ' ><FaFacebookF /></span>
        <span className='w-[24px] h-[24px]   text-[18px] ' ><FaInstagram /></span>
        <span className='w-[24px] h-[24px]   text-[18px] ' ><FaTwitter /></span>
        <span className='w-[24px] h-[24px]   text-[18px] ' ><FaLinkedin /></span>
      </div>

     </div>

     
     
    </div>
  )
}

export default Footer
