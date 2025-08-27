import React from 'react'
import VideoCards from '../Carousel/VideoCards'

export default function Our_creative_portfolio() {
  return (
    <div className='overflow-hidden'>
          <section className=' py-20 '>
        <div className="main">
            <div className="title-main">
                <div className='flex justify-center items-center'>
                    <h3 >
                       <span   
                  className="inline-block  text-center  font-extrabold text-4xl md:text-7xl  bg-gradient-to-r from-[#F7C7FF] to-[#FFD3E5] bg-clip-text text-transparent"
                >
                     OUR CREATIVE PORTFOLIO
                    </span>
                     </h3>
                </div>
                <div className='flex  justify-center shrink-0  flex-none h-auto relative whitespace-pre-wrap '>
                    <p className='border text-sm md:text-2xl  w-[900px] text-center bg-gradient-to-r from-[#F7C7FF] to-[#FFD3E5] bg-clip-text text-transparent'>
                        Explore the variety and creativity in our work. We craft unique video content that resonates with your audience and aligns perfectly with your brand identity.
                    </p>
                </div>
            </div>
            <div className="scroll-youtube">
                {/* youtube videos scrolls */}
                  <VideoCards/>
            </div>
        </div>
      
    </section>
    </div>
  )
}
