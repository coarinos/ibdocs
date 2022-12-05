import React from 'react'
import Popular from '../../../public/icons/flame.svg'

import Pastpaper from '../../../public/icons/file.svg'
import IBTextbooks from '../../../public/icons/book.svg'
import IBResources from '../../../public/icons/folder.svg'
import IBGuides from '../../../public/icons/document.svg'
import IBQuestionbank from '../../../public/icons/layers.svg'
import IBCoursework from '../../../public/icons/laptop.svg'
import Arrow from '../../../public/icons/arrow.svg'

const TopResources = () => {
  return (
    <div className='w-full'>
      <div className='mx-10 mb-10 text-[.9rem]'>
         <span className='flex tracking-tight font-bold items-center text-[#5856D6] gap-1 mb-4'>
            <Popular className='w-3 fill-indigo-500'/>
            Popular resources
         </span>
         <div className='w-full'>
            <div className='sm:grid sm:grid-cols-5 sm:gap-3 flex flex-col display-inline gap-3'>
              <div className='flex flex-col leading-6 bg-gray-50 hover:shadow-md duration-500 px-7 py-5 rounded-xl'>
                <Pastpaper className='w-6 mb-3 fill-gray-700'/>
                <p className='font-medium text-[1rem] text-gray-600 text-left'>IB Past papers</p>
                <a href="/" className='text-indigo-500 md:flex flex gap-1'>Organized by subject<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-indigo-500 md:flex flex gap-1'>Organized by subject<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              <div className='flex flex-col leading-6 bg-gray-50 hover:shadow-md duration-500 px-7 py-5 rounded-xl'>
                <IBTextbooks className='w-6 mb-3 fill-gray-700'/>
                <p className='font-medium text-[1rem] text-gray-600 text-left'>IB Textbooks</p>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>Spanish version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>English version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              <div className='flex flex-col leading-6 bg-gray-50 hover:shadow-md duration-500 px-7 py-5 rounded-xl'>
                <IBGuides className='w-6 mb-3 fill-gray-700'/>
                <p className='font-medium text-[1rem] text-gray-600'>IB Subjec guides</p>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>English version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>Spanish version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              <div className='flex flex-col leading-6 bg-gray-50 hover:shadow-md duration-500 px-7 py-5 rounded-xl'>
                <IBQuestionbank className='w-6 mb-3 fill-gray-700'/>
                <p className='font-medium text-[1rem] text-gray-600'>IB Questionbank</p>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>English version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>Spanish version<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              <div className='flex flex-col leading-6 bg-gray-50 hover:shadow-md duration-500 px-7 py-5 rounded-xl'>
                <IBResources className='w-6 mb-3 fill-gray-700'/>
                <p className='font-medium text-[1rem] text-gray-600 text-left'>IB Resources</p>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>IB Grade boundaries<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>IB Specieman papers<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>IB Statistic bulletins<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              <div className='flex flex-col leading-6 bg-gray-50 hover:shadow-md duration-500 px-7 py-5 rounded-xl'>
                <IBCoursework className='w-6 mb-3 fill-gray-700'/>
                <p className='font-bold text-[1rem] text-gray-700 text-left'>IB Coursework</p>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>IA examples<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>EE examples<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
                <a href="/" className='text-indigo-500 flex gap-1 text-normal'>TOK Essay examples<Arrow className='w-[.95rem] rotate-45 py-[-1rem]'/></a>
              </div>
              
            </div>
         </div>
      </div>
    </div>
  )
}

export default TopResources