import React from 'react'
import Popular from '../../../public/icon/flame.svg'
import Folder from '../../../public/icon/folder.svg'
import Arrow from '../../../public/icon/arrow.svg'

const FileDocuments = () => {
  return (
    <div className='w-auto'>
    <div className='font-["DM_Sans"] font-medium text-[.9rem]'>
      <span className='flex md:flex tracking-tight font-bold items-center text-[#FF2D55] gap-1 mb-4'>
        <Popular className='w-3 fill-red-500'/>
        IB Subject Resources & websites
      </span>
      <div className='flex md:flex'>
          <div className='flex-col'>
            <ul className='flex flex-col leading-6 bg-gradient-to-bl from-[#FFECF0] to-[#FFD9DE] px-7 py-5 rounded-xl gap-3'>
              <a href="/" className='text-[#FF2D55] md:flex flex items-center'>
                <Folder className='w-4 fill-gray-700 mr-2'/>
                  IB Mathematics AA
                <Arrow className='w-[.95rem] fill-[#FF2D55] rotate-45 ml-1 -mt-[-.18rem]'/>
              </a>
              <a href="/" className='text-[#FF2D55] md:flex flex items-center'>
                <Folder className='w-4 fill-gray-700 mr-2'/>
                  IB Mathematics AA
                <Arrow className='w-[.95rem] fill-[#FF2D55] rotate-45 ml-1 -mt-[-.18rem]'/>
              </a>
              <a href="/" className='text-[#FF2D55] md:flex flex items-center'>
                <Folder className='w-4 fill-gray-700 mr-2'/>
                  IB Mathematics AA
                <Arrow className='w-[.95rem] fill-[#FF2D55] rotate-45 ml-1 -mt-[-.18rem]'/>
              </a>
              <a href="/" className='text-[#FF2D55] md:flex flex items-center'>
                <Folder className='w-4 fill-gray-700 mr-2'/>
                  IB Mathematics AA
                <Arrow className='w-[.95rem] fill-[#FF2D55] rotate-45 ml-1 -mt-[-.18rem]'/>
              </a>
              <a href="/" className='text-[#FF2D55] md:flex flex items-center'>
                <Folder className='w-4 fill-gray-700 mr-2'/>
                  IB Mathematics AA
                <Arrow className='w-[.95rem] fill-[#FF2D55] rotate-45 ml-1 -mt-[-.18rem]'/>
              </a>
              <a href="/" className='text-[#FF2D55] md:flex flex items-center'>
                <Folder className='w-4 fill-gray-700 mr-2'/>
                  IB Mathematics AA
                <Arrow className='w-[.95rem] fill-[#FF2D55] rotate-45 ml-1 -mt-[-.18rem]'/>
              </a>
              <a href="/" className='text-[#FF2D55] md:flex flex items-center'>
                <Folder className='w-4 fill-gray-700 mr-2'/>
                  IB Mathematics AA
                <Arrow className='w-[.95rem] fill-[#FF2D55] rotate-45 ml-1 -mt-[-.18rem]'/>
              </a>
              <a href="/" className='text-[#FF2D55] md:flex flex items-center'>
                <Folder className='w-4 fill-gray-700 mr-2'/>
                  IB Mathematics AA
                <Arrow className='w-[.95rem] fill-[#FF2D55] rotate-45 ml-1 -mt-[-.18rem]'/>
              </a>
            </ul>
          </div>
      </div>
    </div>
  </div>
  )
}

export default FileDocuments