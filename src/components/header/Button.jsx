import React from 'react'
import tw from 'twin.macro'

const Button = (props) => {
  return (
    <Buttons>
        {props.children}
    </Buttons>
  )
}

export default Button

const Buttons = tw.button`md:flex flex gap-[.30rem] items-center bg-indigo-600 text-white sm:py-[0.4rem] sm:px-[1rem] px-12 py-2 rounded-md hover:bg-indigo-500 duration-500`