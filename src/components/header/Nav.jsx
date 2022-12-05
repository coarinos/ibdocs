"use cliente";
import React, { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'

import Pastpaper from '../../../public/icons/file.svg'
import Books  from '../../../public/icons/book.svg'
import Resources  from '../../../public/icons/folder.svg'
import Coursework  from '../../../public/icons/document.svg'

import Logo from '../../../public/icons/logo.svg'
import Heart from '../../../public/icons/heart.svg'
import Discord from '../../../public/icons/discord.svg'

import Button from './Button'
import Notification from './Notification'

import Spotify from "../../../public/icons/spotify.svg"
import Telegram from "../../../public/icons/telegram.svg"

import Top from "../../../public/icons/flame.svg"


import Open from "../../../public/icons/plus.svg"
import Close from "../../../public/icons/cross-small.svg"

import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Hola, los EXAMENES PASADOS puedes encontrar en esta dirección "ibdocs.com/pastpapers"');


const Nav = () => {
  return (
    <Popover className='items-center border-b fixed bg-white backdrop-opacity-50 border-gray-200 w-full top-0 left-0 z-30 '>
      <header className='sm:flex py-2.5 justify-between md:mx-10 px-7 font-["Cera_Pro"]'>
        <nav className='sm:flex flex items-center gap-10'>
          <Link href='/' className='sm:flex gap-2 items-center text-xl tracking-tight font-medium text-[#5856D6] left-2 cursor-pointer md:text-display-nones hover:text-indigo-500 duration-700'>
            <Logo  className='w-7 fill-[#050513]'/>
            <p className='hidden sm:flex md:flex font-bold'>IB Documents</p>
          </Link>
          <ul className='hidden sm:flex md:flex gap-5 md:items-center justify-start items-center'>
            <li className='md:flex gap-5 text-[1rem] tracking-[-.02rem] font-[500] text-gray-500'>
              <Link href='/' className='md:flex flex items-center gap-1 fill-gray-500  hover:fill-gray-700 hover:text-gray-700 duration-700'>
                <Pastpaper className='w-[.8rem] inline-block'/>
                Exámenes pasados
              </Link>
              <Link href='/' className='md:flex flex items-center gap-1 fill-gray-500  hover:fill-gray-700 hover:text-gray-700 duration-700'>
                <Books className='w-[.8rem] inline-block'/>
                IB Libros
              </Link>
              <Link href='/' className='md:flex flex items-center gap-1 fill-gray-500  hover:fill-gray-700 hover:text-gray-700 duration-700'>
                <Coursework className='w-[.8rem] inline-block'/>
                IB Coursework
              </Link>
              <Link href='/resources' className='md:flex flex items-center gap-1 fill-gray-500  hover:fill-gray-700 hover:text-gray-700 duration-700'>
                <Resources className='w-[.8rem] inline-block'/>
                IB Recursos
              </Link>
            </li>
          </ul>

          {/* POPOVER STARTS HERE */}
          <div className='flex grow items-center justify-end sm:hidden'>
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className='sr-only'>Open Menu</span>
              <Open className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
          </div>
          <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-40"/>
          <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
              <div className='rounded-lg bg-white shadow-lg right-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
                <div className='px-5 pt-5 pb-6'>
                  <div className='flex items-center justify-between'>

                    {/* ADDING THE LOGO */}
                    <Link href='/' className='sm:flex gap-2 items-center text-xl tracking-tight font-["Netflix_Sans"] font-bold text-[#5856D6] left-2 cursor-pointer md:text-display-nones hover:text-indigo-500 duration-700'>
                      <Logo  className='w-7 fill-[#5856D6]'/>
                      <p className='hidden sm:flex md:flex'>
                      IB Documents
                      </p>
                    </Link>
                    <div className='-mr-2'>
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className='sr-only'>Close Menu</span>
                      <Close className="h-8 w-8" aria-hidden="true"/>
                    </Popover.Button>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <nav className='grid gap-y-8'>
                      <ul className='md:items-center justify-start items-center flex-col'>
                        <li className='flex-col mx-10 text-lg tracking-normal font-medium font-["Netflix_Sans"]'>
                          <Link href='/' className='flex items-center gap-1 fill-gray-500  hover:fill-gray-700 text-gray-500 hover:text-gray-700 duration-700'>
                            <Pastpaper className='w-[.9rem] inline-blck'/>
                            Exámenes pasados
                          </Link>
                          <Link href='/' className='flex items-center gap-1 fill-gray-500  hover:fill-gray-700 text-gray-500 hover:text-gray-700 duration-700'>
                            <Books className='w-[.9rem] inline-block'/>
                            IB Libros
                          </Link>
                          <Link href='/' className='flex items-center gap-1 fill-gray-500  hover:fill-gray-700 text-gray-500 hover:text-gray-700 duration-700'>
                            <Coursework className='w-[.9rem] inline-block'/>
                            IB Coursework
                          </Link>
                          <Link href='/' className='flex items-center gap-1 fill-gray-500  hover:fill-gray-700 text-gray-500 hover:text-gray-700 duration-700'>
                            <Resources className='w-[.9rem] inline-block'/>
                            IB Recursos
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className='mb-1 mt-5 flex flex-col items-center gap-5'>
                    <div className='gap-4 flex items-center'>
                      <Link href="/" className='flex'>
                        <Discord className='fill-[#7289d9] sm:w-[1.2rem] w-5 hover:fill-indigo-500 duration-700'/>
                      </Link>
                      <Link href="/">              
                        <Telegram className=" fill-[#229ED9] sm:w-[1.2rem] w-5 hover:fill-blue-500 duration-700"></Telegram>
                      </Link>
                      <Link href="/">
                        <Spotify className=" fill-[#1DB954] sm:w-4 w-5 hover:fill-green-600 duration-700"/>
                      </Link>
                      <Link href="/">              
                        <Notification className="flex md:flex gap-1">
                          <p className='text-black'>Actualizaciones</p>
                          </Notification>
                      </Link>
                    </div>
                    <Button>
                      <Heart className='w-4 duration-300 fill-white hover:fill-yellow-400'/>
                      Contribuir
                    </Button>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition> 
        </nav>

        <div className='hidden sm:flex gap-3'>
          <ul className='gap-4 flex items-center'>
            <a href="https://discord.gg/95KARrGJ" target="_blank" className='flex'>
              <Discord className='fill-gray-500 w-[1.2rem] hover:fill-indigo-500 duration-700'/>
            </a>
            <Link href="/">              
              <Telegram className=" fill-gray-500 w-[1.2rem] hover:fill-blue-500 duration-700"></Telegram>
            </Link>
            <Link href="https://open.spotify.com/playlist/3VZTa4Zh9sPDwxWlwS3sJI?si=387863cb64664687" target="_blank">
              <Spotify className=" fill-gray-500 w-4 hover:fill-green-500 duration-700"/>
            </Link>
            <a onClick={notify}>              
              <Notification className="flex md:flex gap-1"/>
            </a>
          </ul>
          <div className='sm:flex flex'>
            <Link href='/resources' className='md:flex flex items-center gap-1 fill-[#5956d6] text-[#5856d6] font-medium tracking-tight border-indigo-500 hover:fill-white hover:bg-indigo-500 hover:text-white duration-700 text-[.95rem] border-lg border-2 px-2 py-1 rounded-md'>
                <Top className='w-[.95rem] inline-block'/>
                Top IB Resources
            </Link>
          </div>
          
          <Button>
            <Heart className='w-[.95rem] duration-300 fill-white hover:fill-yellow-300'/>
            <p className='font-["Cera_Pro"] text-[1rem] font-medium'>Contribuir</p>
          </Button>
        </div>
      </header>
      <Toaster position='bottom-right' containerClassName="text-left text-white font-['Cera_Pro']"/>
    </Popover>
  )
}

export default Nav