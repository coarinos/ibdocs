import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
import Commons from './commons'

import Logo from '../../../public/icons/logo.svg'
import Hand  from '../../../public/icons/hand-holding-heart.svg'
import Heart from '../../../public/icons/heart.svg'
import Spotify  from '../../../public/icons/spotify.svg'
import Discord from '../../../public/icons/discord.svg'


const Footer = () => {
  return (
    <FSection>
      <FWrapper>
        <Container>
          <Link href='/' className='flex gap-1 sm:mb-0 mb-3 items-center text-sl tracking-tighter font-bold text-[#5856D6] left-2 cursor-pointer hover:text-indigo-500 duration-600'>
            <Logo  className='w-4 fill-[#5856D6]'/>
            ibdocs.com
          </Link>
          <Message>
            Si tienes recursos para contribuir (resumenes, estructuras de ensayo, trabajos internas,  monografías, etc), envía mediante el e-mail <SpanLink href="mailto:diplomerpotato@gmail.com">diplomerpotato@gmail.com</SpanLink>. 
          </Message>
          <LinkContainer>
            <LinkWrapper>
              <Linked href='/'>
                <Hand className='w-[.9rem] inline-block'/>
                Contribuir
              </Linked>
              <Linked href='https://open.spotify.com/playlist/3VZTa4Zh9sPDwxWlwS3sJI?si=387863cb64664687'>
                <Spotify className='w-[.9rem] inline-block'/>
                Playlist
              </Linked>
              <Linked href='https://discord.gg/95KARrGJ'>
                <Discord className='w-[.9rem] inline-block'/>
                Discord
              </Linked>
              <Linked href='/' className>
                <Heart className='w-[.9rem] inline-block'/>
                Donar
              </Linked>
            </LinkWrapper>
          </LinkContainer>
        </Container>
      </FWrapper>
      <Commons/>
    </FSection>
  )
}

export default Footer

const FSection = tw.footer`w-full`
const FWrapper = tw.div`border-gray-100 bottom-0 sm:mx-10 mx-7 mb-2`
const Container = tw.div`sm:flex items-center justify-between mb-5 sm:mb-0 `
const Message = tw.p`text-sm text-left mb-4 sm:hidden tracking-tight text-gray-600`
const SpanLink = tw.a`text-indigo-500 font-medium hover:text-indigo-400 duration-500`

const LinkContainer = tw.ul` gap-5 items-center`
const LinkWrapper = tw.ul`flex flex-wrap justify-between sm:flex gap-5 text-[.80rem] tracking-tight font-medium`
const Linked = tw.a`flex items-center gap-1 fill-gray-500  hover:fill-gray-700 text-gray-500 hover:text-gray-700 duration-700`



