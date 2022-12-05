import React from 'react'
import Bell from '../../../public/icons/bell.svg'

const Notification = () => {
  return (
    <div className='md:flex flex'>
        <Bell className='w-4 fill-gray-700 hover:fill-indigo-700 duration-700 cursor-pointer'/>
    </div>
  )
}

export default Notification