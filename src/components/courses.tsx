import Image from 'next/image'
import React from 'react'

const  Courses = () => {
  return (
    <div >

       {/* company section start */}

      <div className='md:w-full md:h-[228px] h-[600px] w-full bg-[#F7F7F7] md:py-[80px] py-[80px]  px-[64px] md:px-[64px] flex flex-col md:flex-row items-center '>
         <h5 className='md:w-[320px] md:h-[68px] w-full h-[68px] md:font-[Roboto] md:text-[24px] text-[18px] md:leading-[33.6px] font-bold md:font-bold text-[#000000] ml-5 '>
          Trusted by 2000+ companies worldwide.</h5>
         <div className='md:w-[880px] md:h-[56px] w-full h-[56px] md:py-[8.74px]   md:gap-[19.12px]  flex flex-col md:flex-row items-center  mb-5 ml-5'>
          <div className=' md:w-[123.8] w-full md:h-[38.52] h-[38.52] '>
      <Image
      src="/images/pic1.png"
      alt='pic1'
      width={123.8}
      height={38.52}/>
      </div>

      <div className='md:w-[123.8] w-full md:h-[38.52] h-[38.52]'>
      <Image
      src="/images/pic2.png"
      alt='pic1'
      width={123.8}
      height={38.52}/>
      </div>

      <div className='md:w-[123.8] w-full md:h-[38.52] h-[38.52] '>
      <Image
      src="/images/pic3.png"
      alt='pic1'
      width={123.8}
      height={38.52}/>
      </div>

      <div className='md:w-[123.8] w-full md:h-[38.52] h-[38.52] '>
      <Image
      src="/images/pic4.png"
      alt='pic1'
      width={123.8}
      height={38.52}/>
      </div>

      <div className=' md:w-[123.8] w-full md:h-[38.52] h-[38.52] '>
      <Image
      src="/images/pic5.png"
      alt='pic1'
      width={123.8}
      height={38.52}/>
      </div>

      <div className=' md:w-[123.8] w-full md:h-[38.52] h-[38.52] '>
      <Image
      src="/images/pic6.png"
      alt='pic1'
      width={123.8}
      height={38.52}/>
      </div>


         </div>
         </div>

           {/* company section end  */}

{/* courses section start  */}

<section className='w-full h-[1049px] md:h-[900px] bg-[#ffffff] mt-20'>
  <div className='w-full  md:h-[120px]  gap-[24px] '>
    <h2 className='md:text-[45px] text-[30px] text-center md:font-bold font-bold  text-black  font-[Roboto] md:font[Roboto] '>Explore Courses By Category</h2>
    <p className='md:text-[18px] text-[16px] mt-5 md:mt-3 text-center  font-normal text-black px-5'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
  </div>

      
      <div className='md:w-full w-full  md:h-[132px] mt-9 md:mt-10 flex flex-col md:flex-row gap-5 md:px-9 px-3'>
      
      <div className="bg-[#F7F7F7]  flex flex-row md:w-[410.67px] md:h-[132px] h-[100px] px-3 py-3 md:py-3 " >
        <Image
        src="/images/frame1.png" 
        alt="pic1"
        width={65}
        height={65}
         className="  md:w-[100px] w-[65px] h-[65px] md:h-[100px] mt-1 md:mt-0 object-cover rounded-[5px]"/>
        <div className="md:px-2 px-2  md:py-1 ">
          <h3 className="text-[20px] font-bold font-[Roboto] text-[#000000]">Design & Development</h3>
          <p className="text-[#000000] md:mt-1  text-[18px] font-[Roboto] font-normal ">50+ Courses Available</p>
        </div>
      </div>
      

      <div className="bg-[#F7F7F7] flex flex-row md:w-[410.67px] md:h-[132px] h-[100px] px-3 py-3 md:py-3 " >
      <Image
        src="/images/frame2.png" 
        alt="pic2"
        width={65}
        height={65}
         className="  md:w-[100px] w-[65px] h-[65px] md:h-[100px] mt-1 md:mt-0 object-cover rounded-[5px]"/>
        <div className="md:px-2 px-3 md:py-1 ">
          <h3 className="text-[20px] font-bold font-[Roboto] text-[#000000]">Marketing</h3>
          <p className="text-[#000000] md:mt-1 text-[18px] font-[Roboto] font-normal ">50+ Courses Available</p>
        </div>
      </div>

      <div className="bg-[#F7F7F7]  flex flex-row md:w-[410.67px] md:h-[132px] h-[100px] px-3 py-3 md:py-3 " >
      <Image
        src="/images/frame3.png" 
        alt="pic3"
        width={65}
        height={65}
         className="  md:w-[100px] w-[65px] h-[65px] md:h-[100px] mt-1 md:mt-0 object-cover rounded-[5px]"/>
        <div className="md:px-2 px-3 md:py-1 ">
          <h3 className="text-[20px] font-bold font-[Roboto] text-[#000000]">Development</h3>
          <p className="text-[#000000] md:mt-1  text-[18px] font-[Roboto] font-normal ">50+ Courses Available</p>
        </div>
      </div>
      
      </div>



      <div className='md:w-full w-full  md:h-[132px]  mt-5 md:mt-10 flex flex-col md:flex-row gap-5 md:px-9 px-3'>
      
      <div className="bg-[#F7F7F7]  flex flex-row md:w-[410.67px] md:h-[132px] h-[100px] px-3 py-3 md:py-3 " >
      <Image
        src="/images/frame4.png" 
        alt="pic4"
        width={65}
        height={65}
         className="  md:w-[100px] w-[65px] h-[65px] md:h-[100px] mt-1 md:mt-0 object-cover rounded-[5px]"/>
        <div className="md:px-2 px-3 md:py-1 ">
          <h3 className="text-[20px] font-bold font-[Roboto] text-[#000000]">Communication</h3>
          <p className="text-[#000000] md:mt-1 text-[18px] font-[Roboto] font-normal ">50+ Courses Available</p>
        </div>
      </div>
      

      <div className="bg-[#F7F7F7] flex flex-row md:w-[410.67px] md:h-[132px] h-[100px] px-3 py-3 md:py-3 " >
      <Image
        src="/images/frame5.png" 
        alt="pic5"
        width={65}
        height={65}
         className="  md:w-[100px] w-[65px] h-[65px] md:h-[100px] mt-1 md:mt-0 object-cover rounded-[5px]"/>
        <div className="md:px-2 px-3 md:py-1 ">
          <h3 className="text-[20px] font-bold font-[Roboto] text-[#000000]">Digital Marketing</h3>
          <p className="text-[#000000] md:mt-1 text-[18px] font-[Roboto] font-normal ">50+ Courses Available</p>
        </div>
      </div>

      <div className="bg-[#F7F7F7]  flex flex-row md:w-[410.67px] md:h-[132px] h-[100px] px-3 py-3 md:py-3 " >
      <Image
        src="/images/frame6.png" 
        alt="pic6"
        width={65}
        height={65}
         className="  md:w-[100px] w-[65px] h-[65px] md:h-[100px] mt-1 md:mt-0 object-cover rounded-[5px]"/>
        <div className="md:px-2 px-3 md:py-1 ">
          <h3 className="text-[20px] font-bold font-[Roboto] text-[#000000]">Self Development</h3>
          <p className="text-[#000000] md:mt-1 text-[18px] font-[Roboto] font-normal ">50+ Courses Available</p>
        </div>
      </div>
      
      </div>



      <div className='md:w-full w-full  md:h-[132px] mt-5 md:mt-10 flex flex-col md:flex-row gap-5 md:px-9 px-3'>
      
      <div className="bg-[#F7F7F7]  flex flex-row md:w-[410.67px] md:h-[132px] h-[100px] px-3 py-3 md:py-3 " >
      <Image
        src="/images/frame7.png" 
        alt="pic7"
        width={65}
        height={65}
         className="  md:w-[100px] w-[65px] h-[65px] md:h-[100px] mt-1 md:mt-0 object-cover rounded-[5px]"/>
        <div className="md:px-2 px-3 md:py-1 ">
          <h3 className="text-[20px] font-bold font-[Roboto] text-[#000000]">Bussiness</h3>
          <p className="text-[#000000] md:mt-1 text-[18px] font-[Roboto] font-normal ">50+ Courses Available</p>
        </div>
      </div>
      

      <div className="bg-[#F7F7F7]  flex flex-row md:w-[410.67px] md:h-[132px] h-[100px] px-3 py-3 md:py-3 " >
      <Image
        src="/images/frame8.png" 
        alt="pic8"
        width={65}
        height={65}
         className="  md:w-[100px] w-[65px] h-[65px] md:h-[100px] mt-1 md:mt-0 object-cover rounded-[5px]"/>
        <div className="md:px-2 px-3 md:py-1 ">
          <h3 className="text-[20px] font-bold font-[Roboto] text-[#000000]">Finance</h3>
          <p className="text-[#000000] md:mt-1 text-[18px] font-[Roboto] font-normal ">50+ Courses Available</p>
        </div>
      </div>

      <div className="bg-[#F7F7F7]  flex flex-row md:w-[410.67px] md:h-[132px] h-[100px] px-3 py-3 md:py-3 " >
      <Image
        src="/images/frame9.png" 
        alt="pic9"
        width={65}
        height={65}
         className="  md:w-[100px] w-[65px] h-[65px] md:h-[100px] mt-1 md:mt-0 object-cover rounded-[5px]"/>
        <div className="md:px-2 px-3 md:py-1 ">
          <h3 className="text-[20px] font-bold font-[Roboto] text-[#000000]">Consulting</h3>
          <p className="text-[#000000] md:mt-1 text-[18px] font-[Roboto] font-normal ">50+ Courses Available</p>
        </div>
      </div>
      
      </div>

     <div className='text-center mt-12'>
      <button className='px-6 py-3 bg-[#ffffff] text-[#000000]  font-[Roboto] rounded-md border-[1px] border-[#676767] hover:bg-black hover:text-white'>View All Courses</button>
     </div>

  </section>

{/* </section> */}

  {/* courses section end */}



    </div>
  )
}

export default Courses
