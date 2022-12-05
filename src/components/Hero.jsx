import React from 'react'
import MayCountdown from './countdown/MayCountdown'
import NovCountdown from './countdown/NovCountdown'

const Hero = () => {
  return (
    <hero className='max-w-lg mx-8'>
      <div className='sm:mx-10 flex-col mb-10 mt-[7rem] '>
        <div className='sm:flex gap-3'>
          {/* ----------------------- */}
          <div className='sm:w-1/2 sm:text-left'>
            <div className='mx-7 sm:mx-0'>    
              <h1 className='font-medium tracking-[-0.045rem] sm:text-3xl text-2xl sm:leading-10 leading-8 mb-2 text-gray-700'>IB Documents is the most up-to-date repository to search all you IB Diploma Program document and resources</h1>
              <p className='text-[1rem] sm:text-[1.05rem] sm:mr-[5rem] font-normal text-gray-500'>Revisa la documentación para ver los recursos disponibles e nuestro sito web. IB Docs es el repositorio en español mas actualizado para buscar todos los recursos del Bachillerato Internacional.</p>
            </div>
          </div>
          {/* ----------------------- */}
          <div className='sm:w-1/2'>
            <div className='sm:flex-row gap-3 sm:gap-0 mx-7 mt-4 sm:mx-0 sm:mt-0 flex flex-col'>
              <MayCountdown/> 
              <NovCountdown/>
            </div>
          </div>
        </div>
      </div>
    </hero>
  )
}

export default Hero