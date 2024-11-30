import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>

  <section className='flex flex-col md:flex-row items-center w-full' >
 
      {/* right div */}
     <div className="md:w-full text-center md:h-[300px] mt-16">
     <div className='md:w-[500px] md:h-[300px] h-[255px]  '>
      <h1 className='md:font-[Roboto] font-[Roboto] md:text-[50px] text-[35px] md:font-[700px]
      font-bold   md:text-[#000000] md:text-center  text-center ml-4'>Learn new skills online with ease</h1>
      <p className='font-[Roboto] md:font[Roboto] font-normal md:font-normal text-[15px] md:text-[18px] 
      text-[#000000] text-center md:text-start  md:ml-20 mx-10 '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
     

     <div className=' md:w-[500px] w-auto md:h-[64px] top-[16px] md:gap-2 gap-2 text-center '>
    <button className='py-[10px] md:py-[12px] mt-5 md:px[24px] px-[20px] md:rounded-[5px] rounded-[5px]  border border-black bg-black text-white
     font-[Roboto] font-normal md:text-[16px] text-sm md:leading[24px] leading-[20px] ml-2'>
      Start learning now</button>

      <button className='py-[10px] md:py-[12px] mt-5 md:px[24px] px-[20px] md:rounded-[5px] rounded-[5px]  border border-black bg-white text-black
     font-[Roboto] font-normal md:text-[16px] text-sm md:leading[24px] leading-[20px] ml-2 '>
      Explore Courses</button>
      </div>
     </div>
     </div>
      {/* Right side Div end   */}


           
       {/* left side Div start  */}
         
          <div className="flex flex-col md:flex-row items-center w-full mt-10 md:mt-0 ">
          <div >
          <Image
            src="/images/hero1.png"
            alt="hero image"
            width={640}
            height={900}
            priority
          />
          </div>
          </div>
      
     {/* left side Div end  */}

      </section> 





   

    </div>
  )
}

export default Hero

