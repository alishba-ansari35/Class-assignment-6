import React from 'react'

const Achievements = () => {
  return (
    <div>
      <section className='md:w-full md:h-[448px] w-full h-[448px] mt-[400px] md:mt-0 bg-[#f7f7f7]  md:bg-white'>

        <div  className='md:w-full md:h-[264px] w-full h-[300px]  md:mt-0 '>
            <div className='md:w-full w-full h-[300px]  md:h-[136px] font-bold  '>
                <h2 className='font-[Roboto] md:text-[48px] text-[35px] leading-[57.6px] text-center py-10'>Our Achivements</h2>
                <p className='font-[Roboto] font-normal md:text-[18px] text-sm text-center px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                 enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>

            <div className='md:w-full w-full h-[450px]  md:h-[136px] font-bold flex flex-row md:flex-row px-9  md:py-20 bg-[#f7f7f7] md:bg-white'>
                 <div className='md:w-full w-full h-[96px] py-[8px] gap-[24px] flex flex-col md:flex-row'>
                    <div className='md:w-[296px] md:h-[80px]  '>
                        <h3 className='text-[40px] text-center font-[Roboto] font-normal'>+200</h3>
                        <p className='text-[16px] leading-[24px] text-center font-[Roboto] font-normal'>Courses</p>
                    </div>

                    <div className='md:w-[296px] md:h-[80px]  '>
                        <h3 className='text-[40px] text-center font-[Roboto] font-normal'>500k</h3>
                        <p className='text-[16px] leading-[24px] text-center font-[Roboto] font-normal '>Mentors</p>
                    </div>

                    <div className='md:w-[296px] md:h-[80px] '>
                        <h3 className='text-[40px] text-center font-[Roboto] font-normal'>370K</h3>
                        <p className='text-[16px] leading-[24px] text-center font-[Roboto] font-normal'>Students</p>
                    </div>

                    <div className='md:w-[296px] md:h-[80px] '>
                        <h3 className='text-[40px] text-center font-[Roboto] font-normal'>100+</h3>
                        <p className='text-[16px] leading-[24px] text-center font-[Roboto] font-normal '>Recognition</p>
                    </div>
                 </div>  
                   
            </div>

        </div>

      </section>






    </div>
  )
}

export default Achievements
