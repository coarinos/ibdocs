import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { ReactSVG } from 'react'
import { ReactComponentElement } from 'react'


import Folder  from '../../assets/icons/fi-rr-folder.svg';
import Book  from '../../assets/icons/fi-rr-book-alt.svg';
import File  from '../../assets/icons/fi-rr-document.svg';
import Documents  from '../../assets/icons/fi-rr-copy-alt.svg';
// import Bell  from '../../assets/icons/fi-rr-bell.svg';

import Logo from '../../assets/icons/logo.svg';

import {ReactComponent as Hearth } from '../../assets/icons/hearth.svg';
import {ReactComponent as Document} from '../../assets/icons/fi-rr-document.svg';

// {homes.map(home => <div>{home.name}</div>)}

  let Links = [
    {name:'IB Resources', link:'/', description:'ibdocs', Icon: Folder},
    {name:'IB Books', link:'/', description:'ibdocs', Icon: Book},
    {name:'IB Past papers', link:'/', description:'ibdocs', Icon: File},
    {name:'IB Coursework', link:'/', description:'ibdocs', Icon: Folder},
  ];

const Nav = () => {
  return (
    <div className='border-b-2 border-gray-100 w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between py-2.5 md:px-10 px-7'>
        <a href='/' className='md:flex gap-2 tracking-tight font-["DM_Sans"] font-black text-indigo-600 left-2  text-xl cursor-pointer md:text-display-nones hover:text-indigo-500 duration-700'>
          <span className='flex items-center text-3xl text-gray-700'>
            <Logo  className='w-7'/>
          </span>
          IB Documents
        </a>
        <ul className='md:flex gap-5 md:intems-center justify-start items-center'>
          {
            Links.map((link)=>(

              <li key={link.name} className='md:ml-1 text-[1rem] tracking-normal font-medium font-["DM_Sans"]'>
                <a href={link.link} className='md:flex items-center text-gray-500'>
                  <span className='md:flex flex items-center gap-1  hover:text-gray-800 duration-700'>
                    <Icon className="w-12"/>
                    {link.name}
                  </span>
                </a>
              </li>
            ))
          }
        </ul>
        <div className='md:flex justify-end'>
          <Button>
            <span>
              <Hearth/>
            </span>
            Contribuir
          </Button>
        </div>
      </div>
    </div>
  )
}


export default Nav