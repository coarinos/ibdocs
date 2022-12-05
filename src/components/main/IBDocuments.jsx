import React from 'react'
import styled from 'styled-components'
import Popular from '../../assets/icons/flame.svg'

import Pastpaper from '../../assets/icons/file.svg'
import IBTextbooks from '../../assets/icons/book.svg'
import IBResources from '../../assets/icons/folder.svg'
import IBGuides from '../../assets/icons/document.svg'
import IBQuestionbank from '../../assets/icons/layers.svg'
import IBCoursework from '../../assets/icons/laptop.svg'
import Arrow from '../../assets/icons/arrow.svg'

const IBDocuments = () => {
  return (
    <div className='w-1/2'>
      <div className='font-["DM_Sans"] font-medium text-[.9rem]'>
         <span className='flex md:flex tracking-tight font-bold items-center text-[#FF2D55] gap-1 mb-4'>
            <Popular className='w-3 fill-red-500'/>
            Popular resources
         </span>
         <div className='flex md:flex'>
            <div className='grid grid-cols-2 gap-3'>
              <div className='flex flex-col leading-6 bg-gradient-to-bl from-[#FFECF0] to-[#FFD9DE] px-7 py-5 rounded-xl'>
                <Pastpaper className='w-6 mb-3 fill-gray-700'/>
                <p className='font-bold text-[1rem] text-gray-700'>IB Past papers</p>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>Organized by subject<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>Organized by subject<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              <div className='flex flex-col leading-6 bg-gradient-to-bl from-[#FFECF0] to-[#FFD9DE] bg-red-200 px-7 py-5 rounded-xl'>
                <IBTextbooks className='w-6 mb-3 fill-gray-700'/>
                <p className='font-bold text-[1rem] text-gray-700'>IB Textbooks</p>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>Spanish version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>English version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              <div className='flex flex-col leading-6 bg-gradient-to-bl from-[#FFECF0] to-[#FFD9DE] bg-red-200 px-7 py-5 rounded-xl'>
                <IBGuides className='w-6 mb-3 fill-gray-700'/>
                <p className='font-bold text-[1rem] text-gray-700'>IB Subjec guides</p>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>English version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>Spanish version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              <div className='flex flex-col leading-6 bg-gradient-to-bl from-[#FFECF0] to-[#FFD9DE] bg-red-200 px-7 py-5 rounded-xl'>
                <IBQuestionbank className='w-6 mb-3 fill-gray-700'/>
                <p className='font-bold text-[1rem] text-gray-700'>IB Questionbank</p>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>English version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>Spanish version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              <div className='flex flex-col leading-6 bg-gradient-to-bl from-[#FFECF0] to-[#FFD9DE] bg-red-200 px-7 py-5 rounded-xl'>
                <IBResources className='w-6 mb-3 fill-gray-700'/>
                <p className='font-bold text-[1rem] text-gray-700'>IB Resources</p>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>IB Grade boundaries<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>IB Specieman papers<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>IB Statistic bulletins<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              <div className='flex flex-col leading-6 bg-gradient-to-bl from-[#FFECF0] to-[#FFD9DE] bg-red-200 px-7 py-5 rounded-xl'>
                <IBCoursework className='w-6 mb-3 fill-gray-700'/>
                <p className='font-bold text-[1rem] text-gray-700'>IB Coursework</p>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>IA examples<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>EE examples<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-[#FF2D55] md:flex flex gap-1'>TOK Essay examples<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              
            </div>
         </div>
      </div>
    </div>
  )
}

export default IBDocuments