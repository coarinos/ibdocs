import React from 'react'
import Image from 'next/image'
import tw from 'twin.macro'
import Commons from "../../../public/img/creative.png"

const Licence = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Content>
            <ImgContainer href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">
              <Image src={Commons} alt="Creative Commons Licence" height="20" />
            </ImgContainer>
            <CommonMessage>This webpage is under the 
              <CommonsLink href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"> Attribution-NonCommercial-NoDerivatives 4.0 International License.</CommonsLink>
            </CommonMessage>
          </Content>
        </Wrapper>
      </Container>
    </>
  )
}
export default Licence

const Container = tw.div`bg-gray-700 w-full z-30`
const Wrapper = tw.div`py-2 sm:mx-10 mx-7`
const Content = tw.div`flex-col md:flex sm:flex-row text-center items-center md:items-center md:justify-center gap-2 text-xs tracking-tight font-["Cera_Pro"] font-[650px] text-gray-100`
const CommonMessage = tw.p`text-gray-100 mb-1 md:mb-0 sm:mb-0`
const CommonsLink = tw.a`text-indigo-300 hover:text-indigo-400 duration-700 `
const ImgContainer = tw.a`flex justify-center mb-1 md:mb-0 sm:mb-0`