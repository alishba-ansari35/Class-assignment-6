import Image from 'next/image';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Coursescard = () => {
  return (
    <div>
      
      {/* <!-- Card Section --> */}
    <section className="my-80 md:mt-2">
       
    <div className='w-full  md:h-[120px]  gap-[24px] '>
    <h2 className='md:text-[56px] text-[36px] text-center md:font-bold font-bold text-black  font-[Roboto] md:font[Roboto] '>Courses </h2>
    <p className='text-[18px] mt-5 md:mt-3 text-center font-normal text-black'>Your Ultimate Guide to learning</p>
   
  </div>
            

            
            <div className="flex flex-col md:flex-row gap-5 md:mt-20 mt-[100px] px-5 md:px-10  ">

               {/* card1 */}
                <div className="bg-[#F7F7F7] md:w-[416px]  h-[450px] md:h-[534px] border-2 rounded-[5px] ">
                    <Image
                    src="/images/card1.png" 
                    alt="card1"
                    width={416}
                    height={300}
                  className=" rounded-[5px] md:mb-8 mb-5 object-cover "/>
                    <div className='w-full h-[24px] flex flex-row'>
                        <p className='text-[15px] font[Roboto] leading-[24px] font-bold '>Design</p>
                    </div>
                    <h5 className=" font-[Roboto] font-bold text-[24px] leading-[33.6px] mt-3 text-black">UX/UI Design 201</h5>
                    <p className="font-[Roboto] font-normal text-[16px] leading-[24px] mt-2">This is a description of Product 1. It is a great product that provides excellent value.</p>
                    <div className='flex flex-row mt-5'>
                    <button className='w-[117px] h-[40px] rounded-[5px] border border-black hover:bg-black hover:text-white'>Enroll Now</button>
                    <p className="mt-2 font-[Roboto] text-[16px] leading-[24px] ml-5 font-bold">$400</p>
                    </div>
                </div>


                 {/* card2 */}
                <div className="bg-[#F7F7F7] md:w-[416px]  h-[450px] md:h-[534px] border-2 rounded-[5px] ">
                    <Image
                    src="/images/card2.png" 
                    alt="card2"
                    width={416}
                    height={300}
                     className="  rounded-[5px] md:mb-8  mb-5 object-cover"/>
                    <div className='w-full h-[24px] flex flex-row'>
                        <p className='text-[15px] font[Roboto] leading-[24px] font-bold '>Programming</p>

                    </div>
                    <h5 className=" font-[Roboto] font-bold text-[24px] leading-[33.6px] mt-3 text-black">Introduction to Python</h5>
                    <p className="font-[Roboto] font-normal text-[16px] leading-[24px] mt-2">This is a description of Product 1. It is a great product that provides excellent value.</p>
                    <div className='flex flex-row mt-5'>
                    <button className='w-[117px] h-[40px] rounded-[5px] border border-black  hover:bg-black hover:text-white'>Enroll Now</button>
                    <p className="mt-2 font-[Roboto] text-[16px] leading-[24px] ml-5 font-bold">$400</p>
                    </div>
                </div>

                 {/* card3 */}
                <div className="bg-[#F7F7F7] md:w-[416px]  h-[450px] md:h-[534px] border-2 rounded-[5px] ">
                <Image
                    src="/images/card3.png" 
                    alt="card3"
                    width={416}
                    height={300}
                    className="rounded-[5px] md:mb-8  object-cover"/>
                    <div className='w-full h-[24px] flex flex-row'>
                        <p className='text-[15px] font[Roboto] leading-[24px] font-bold  '>Bussiness</p>
                    </div>
                    <h5 className=" font-[Roboto] font-bold text-[24px] leading-[33.6px] mt-3 text-black">Data Analysis for Beginners</h5>
                    <p className="font-[Roboto] font-normal text-[16px] leading-[24px] mt-2">This is a description of Product 1. It is a great product that provides excellent value.</p>
                    <div className='flex flex-row mt-5'>
                    <button className='w-[117px] h-[40px] rounded-[5px] border border-black  hover:bg-black hover:text-white'>Enroll Now</button>
                    <p className="mt-2 font-[Roboto] font-bold text-[16px] leading-[24px] ml-5">$400</p>
                    </div>
                </div>

                </div>



      <div className="flex flex-col md:flex-row gap-5 md:mt-20 mt-[20px] px-5 md:px-10 ">

{/* <!-- card 4--> */}
<div className="bg-[#F7F7F7] md:w-[416px]  h-[450px] md:h-[534px] border-2 rounded-[5px] ">
          <Image
                    src="/images/card4.png" 
                    alt="card4"
                    width={416}
                    height={300}
    className="  rounded-[5px] md:mb-8 mb-5 object-cover"/>
    <div className='w-full h-[24px] flex flex-row'>
        <p className='text-[15px] font[Roboto] leading-[24px] font-bold '>Art</p>
    </div>
    <h5 className=" font-[Roboto] font-bold text-[24px] leading-[33.6px] mt-3 text-black">Art Specialization</h5>
    <p className="font-[Roboto] font-normal text-[16px] leading-[24px] mt-2">This is a description of Product 1. It is a great product that provides excellent value.</p>
    <div className='flex flex-row mt-5'>
    <button className='w-[117px] h-[40px] rounded-[5px] border border-black  hover:bg-black hover:text-white'>Enroll Now</button>
    <p className="mt-2 font-[Roboto] text-[16px] leading-[24px] ml-5 font-bold">$400</p>
    </div>
</div>


{/* <!-- card 5 --> */}
<div className="bg-[#F7F7F7] md:w-[416px]  h-[450px] md:h-[534px] border-2 rounded-[5px] ">
                 <Image
                    src="/images/card5.png" 
                    alt="card5"
                    width={416}
                    height={300}
    className="  rounded-[5px] md:mb-8  mb-5 object-cover"/>
    <div className='w-full h-[24px] flex flex-row'>
        <p className='text-[15px] font[Roboto] leading-[24px] font-bold '>Law</p>

    </div>
    <h5 className=" font-[Roboto] font-bold text-[24px] leading-[33.6px] mt-3 text-black">Rule of Law</h5>
    <p className="font-[Roboto] font-normal text-[16px] leading-[24px] mt-2">This is a description of Product 1. It is a great product that provides excellent value.</p>
    <div className='flex flex-row mt-5'>
    <button className='w-[117px] h-[40px] rounded-[5px] border border-black  hover:bg-black hover:text-white'>Enroll Now</button>
    <p className="mt-2 font-[Roboto] text-[16px] leading-[24px] ml-5 font-bold">$400</p>
    </div>
</div>

{/* <!-- Card 6 --> */}
<div className="bg-[#F7F7F7] md:w-[416px]  h-[450px] md:h-[534px] border-2 rounded-[5px] ">
                  <Image
                    src="/images/card6.png" 
                    alt="card6"
                    width={416}
                    height={300}
    className="rounded-[5px] md:mb-8  mb-5 md:w-[416px] md:h-[275px]  object-cover"/>
    <div className='w-full h-[24px] flex flex-row'>
        <p className='text-[15px] font[Roboto] leading-[24px] font-bold  '>Tech</p>
    </div>
    <h5 className=" font-[Roboto] font-bold text-[24px] leading-[33.6px] mt-3 text-black">Introduction to webflow </h5>
    <p className="font-[Roboto] font-normal text-[16px] leading-[24px] mt-2">This is a description of Product 1. It is a great product that provides excellent value.</p>
    <div className='flex flex-row mt-5'>
    <button className='w-[117px] h-[40px] rounded-[5px] border border-black  hover:bg-black hover:text-white'>Enroll Now</button>
    <p className="mt-2 font-[Roboto] font-bold text-[16px] leading-[24px] ml-5">$400</p>
    </div>
</div>

</div>

<div className='text-center mt-12'>
      <button className='px-6 py-3 bg-[#ffffff] text-[#000000]  font-[Roboto] rounded-md border-[1px] border-[#676767] hover:bg-black hover:text-white'>View All Courses</button>
     </div>



          {/* our team section start*/}


     <div className='md:w-full  md:h-[800px] h-[2000px]  bg-[#f7f7f7] my-20 '>
    <h2 className='md:text-[56px] text-[36px] text-center md:font-bold font-bold text-black  font-[Roboto] md:font[Roboto] pt-5'>Our Team</h2>
    <p className='text-[20px] mt-5 md:mt-3 text-center font-normal text-black px-3' >Meet the professionals who make it all happen</p>

        {/* team section 1 start */}
        <div className="flex flex-col md:flex-row justify-center gap-16 px-4 mt-16 md:mt-20">

            <div className="flex flex-col items-center  md:h-[220px] md:w-[394.67px]  ">
                <Image
                 src="/images/team1.png" 
                 alt="team1" 
                 width={100}
                 height={100}
                className="mb-5"/>
               <h3 className='text-[20px] font-[Roboto] font-bold text-center'>James Nduku</h3>
                <p className='md:text-[18px] font-normal font-[Roboto] text-center leading-[27px] text-black '>Marketing Coordinator</p>
                <div className='flex flex-row md:flex-row items-center justify-center md:w-full md:h-[90px] mb-4'>
                <FaLinkedin className='md:w-[40px] w-[35px] h-[20px] md:h-[30px] my-2 ' />
                <FaTwitter className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                <FaFacebookSquare className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                </div>
            </div>

            <div className="flex flex-col items-center  md:h-[220px] md:w-[394.67px]  ">
            <Image
                 src="/images/team2.png" 
                 alt="team2" 
                 width={100}
                 height={100}
                className="mb-5"/>
               <h3 className='text-[20px] font-[Roboto] font-bold text-center'>Joseph Munyambu</h3>
                <p className='md:text-[18px] font-normal font-[Roboto] text-center leading-[27px] text-black '>Nursing Assistant</p>
                <div className='flex flex-row md:flex-row items-center justify-center md:w-full md:h-[90px] mb-4'>
                <FaLinkedin className='md:w-[40px] w-[35px] h-[20px] md:h-[30px] my-2 ' />
                <FaTwitter className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                <FaFacebookSquare className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                </div>
            </div>


            <div className="flex flex-col items-center  md:h-[220px] md:w-[394.67px]  ">
            <Image
                 src="/images/team3.png" 
                 alt="team3" 
                 width={100}
                 height={100}
                className="mb-5"/>
               <h3 className='text-[20px] font-[Roboto] font-bold text-center'>Joseph Ngumbau</h3>
                <p className='md:text-[18px] font-normal font-[Roboto] text-center leading-[27px] text-black '>Medical Assistant</p>
                <div className='flex flex-row md:flex-row items-center justify-center md:w-full md:h-[90px] mb-4'>
                <FaLinkedin className='md:w-[40px] w-[35px] h-[20px] md:h-[30px] my-2 ' />
                <FaTwitter className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                <FaFacebookSquare className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                </div>
            </div>

            
            </div>
             {/* team section 1 end */}
           

      
        {/* team section 2 start */}
        <div className="flex flex-col md:flex-row justify-center gap-16 px-4 mt-16 md:mt-20">

            <div className="flex flex-col items-center  md:h-[220px] md:w-[394.67px]  ">
            <Image
                 src="/images/team4.png" 
                 alt="team4" 
                 width={100}
                 height={100}
                className="mb-5"/>
               <h3 className='text-[20px] font-[Roboto] font-bold text-center'>Erick Kipkemboi</h3>
                <p className='md:text-[18px] font-normal font-[Roboto] text-center leading-[27px] text-black '>Web Designer</p>
                <div className='flex flex-row md:flex-row items-center justify-center md:w-full md:h-[90px] mb-4'>
                <FaLinkedin className='md:w-[40px] w-[35px] h-[20px] md:h-[30px] my-2 ' />
                <FaTwitter className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                <FaFacebookSquare className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                </div>
            </div>

            <div className="flex flex-col items-center  md:h-[220px] md:w-[394.67px]  ">
            <Image
                 src="/images/team5.png" 
                 alt="team5" 
                 width={100}
                 height={100}
                className="mb-5"/>
               <h3 className='text-[20px] font-[Roboto] font-bold text-center'>Stephen Kerubo</h3>
                <p className='md:text-[18px] font-normal font-[Roboto] text-center leading-[27px] text-black '>President of Sales</p>
                <div className='flex flex-row md:flex-row items-center justify-center md:w-full md:h-[90px] mb-4'>
                <FaLinkedin className='md:w-[40px] w-[35px] h-[20px] md:h-[30px] my-2 ' />
                <FaTwitter className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                <FaFacebookSquare className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                </div>
            </div>


            <div className="flex flex-col items-center  md:h-[220px] md:w-[394.67px]  ">
            <Image
                 src="/images/team6.png" 
                 alt="team6" 
                 width={100}
                 height={100}
                className="mb-5"/>
               <h3 className='text-[20px] font-[Roboto] font-bold text-center'>John Leboo</h3>
                <p className='md:text-[18px] font-normal font-[Roboto] text-center leading-[27px] text-black '>Dog Trainer</p>
                <div className='flex flex-row md:flex-row items-center justify-center md:w-full md:h-[90px] mb-4'>
                <FaLinkedin className='md:w-[40px] w-[35px] h-[20px] md:h-[30px] my-2 ' />
                <FaTwitter className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                <FaFacebookSquare className='md:w-[40px] md:h-[30px] w-[35px] h-[20px]  my-2' />
                </div>
            </div>

            
            </div>


            <div className='text-center my-5 md:hidden'>
      <button className='px-6 py-3 bg-[#ffffff] text-[#000000]  font-[Roboto] rounded-md border-[1px] border-[#676767] hover:bg-black hover:text-white'>View All </button>
     </div>
             {/* team section 2 end */}
        </div>


               {/* Customer testimonial start  */}
               
  <div className='md:w-full  md:h-[600px] h-[1110px]  bg-[#f7f7f7]  '>   

    <div className='w-full  md:h-[120px]  gap-[24px] '>
    <h2 className='md:text-[48px] text-[36px] leading-[57px] md:pl-32 pl-6 md:font-bold font-bold text-black  font-[Roboto] md:font[Roboto] md:pt-6 '>Customer Testimonials</h2>
    <p className='text-[18px] mt-5 md:mt-3 md:pl-32 pl-6 font-[Roboto] font-normal text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
    </div>


    <div className="flex flex-col md:flex-row justify-center gap-10 px-4  mt-20 md:mt-14 ">

            <div className="flex flex-col items-center  md:h-[321.89px] md:w-[362.67px]  border-[2px] border-black ">
                <div className='flex flex-row md:flex-row  md:w-full md:h-[90px] md:mt-5 md:pl-5 '>
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                </div>
                <p className='md:text-[18px] font-normal font-[Roboto] text-center leading-[27px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
              <div className='flex justify-center  items-center  md:w-full w-full h-[56px] md:h-[56px] md:mt-5 mt-5 '>
              <Image 
              src="/images/team3.png"
               alt="team3" 
               width={56}
               height={56}
              className=" rounded-full   "/>
              <p className='text-[20px] font-[Roboto] font-bold  pl-5 '>James Nduku</p>
              </div>
            </div>

            <div className="flex flex-col items-center  md:h-[321.89px] md:w-[362.67px]   border-[2px] border-black ">
                <div className='flex flex-row md:flex-row  md:w-full md:h-[90px] md:mt-5 md:pl-5 '>
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                </div>
                <p className='md:text-[18px] font-normal font-[Roboto] text-center leading-[27px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
              <div className='flex justify-center  items-center  md:w-full w-full h-[56px] md:h-[56px]  md:mt-5 mt-5 '>
              <Image 
              src="/images/team1.png"
               alt="team1" 
               width={56}
               height={56}
              className=" rounded-full   "/>
              <p className='text-[20px] font-[Roboto] font-bold  pl-5 '>Erick Kipkemboi</p>
              </div>
            </div>


            <div className="flex flex-col items-center  md:h-[321.89px] md:w-[362.67px]  border-[2px] border-black ">
                <div className='flex flex-row md:flex-row  md:w-full md:h-[90px] md:mt-5 md:pl-5 '>
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                <FaStar className='md:w-[20px] w-[20px] h-[18.89px] md:h-[18.89px] my-2 ' />
                </div>
                <p className='md:text-[18px] font-normal font-[Roboto] text-center leading-[27px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
              <div className='flex justify-center  items-center  md:w-full w-full h-[56px] md:h-[56px]   md:mt-5 mt-5 '>
              <Image 
              src="/images/team6.png"
               alt="team6" 
               width={56}
               height={56}
              className=" rounded-full   "/>
              <p className='text-[20px] font-[Roboto] font-bold  pl-5 '>Stephen Kerubo</p>
              </div>
            </div>

    </div>

  </div>
 
     {/* Customer testimonial end  */}




 </section>


  


    </div>
  )
}

export default Coursescard
