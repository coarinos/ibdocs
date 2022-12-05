import React from 'react'
import Image from 'next/image'
import tw from 'twin.macro'

import Biologia from "../../../public/sources/dna.png"
import Quimica from "../../../public/sources/flasks.png"
import Fisica from "../../../public/sources/engineer.png"
import Matematica from "../../../public/sources/whiteboard.png"
import Literatura from "../../../public/sources/book.png"

function resources() {
  return (
    <section className='h-screen w-full pt-20 font-["Cera_Pro"] bg-[#fcfcfc]'>
        <div className='max-w-[1200px] mx-auto'>
            <div>
             <p className='text-2xl text-[#ff3683] font-semibold tracking-tight'>The Best IB Resources & Websites</p>
            </div>
            <CardContainer>
                <CardWrapper>
                    <Card>
                        <Image src={Biologia} alt="Creative Commons Licence" width="32"/>
                        <CardTitle>Biología</CardTitle>
                        <CardDescription>Top IB Resources & Websites in 2022</CardDescription>
                    </Card>
                    <Card>
                        <Image src={Quimica} alt="Creative Commons Licence" width="32"/>
                        <CardTitle>Química</CardTitle>
                        <CardDescription>Top IB Resources & Websites in 2022</CardDescription>
                    </Card>
                    <Card>
                        <Image src={Fisica} alt="Creative Commons Licence" width="32"/>
                        <CardTitle>Física</CardTitle>
                        <CardDescription>Top IB Resources & Websites in 2022</CardDescription>
                    </Card>
                    <Card>
                        <Image src={Matematica} alt="Creative Commons Licence" width="32"/>
                        <CardTitle>Matemática</CardTitle>
                        <CardDescription>Top IB Resources & Websites in 2022</CardDescription>
                    </Card>
                    <Card>
                        <Image src={Literatura} alt="Creative Commons Licence" width="32"/>
                        <CardTitle>Literatura</CardTitle>
                        <CardDescription>Top IB Resources & Websites in 2022</CardDescription>
                    </Card>
                    <Card>
                        <Image src={Literatura} alt="Creative Commons Licence" width="32"/>
                        <CardTitle>Literatura</CardTitle>
                        <CardDescription>Top IB Resources & Websites in 2022</CardDescription>
                    </Card>
                    <Card>
                        <Image src={Literatura} alt="Creative Commons Licence" width="32"/>
                        <CardTitle>Literatura</CardTitle>
                        <CardDescription>Top IB Resources & Websites in 2022</CardDescription>
                    </Card>
                    <Card>
                        <Image src={Literatura} alt="Creative Commons Licence" width="32"/>
                        <CardTitle>Literatura</CardTitle>
                        <CardDescription>Top IB Resources & Websites in 2022</CardDescription>
                    </Card>
                    <Card>
                        <Image src={Literatura} alt="Creative Commons Licence" width="32"/>
                        <CardTitle>Literatura</CardTitle>
                        <CardDescription>Top IB Resources & Websites in 2022</CardDescription>
                    </Card>
                    <Card>
                        <Image src={Literatura} alt="Creative Commons Licence" width="32"/>
                        <CardTitle>Literatura</CardTitle>
                        <CardDescription>Top IB Resources & Websites in 2022</CardDescription>
                    </Card>
                </CardWrapper>
                <p className='text-sm text-gray-400 tracking-tight my-8'>
                ibresources.org is a student-led initiative to list and rank the top online IB Resources & Websites for International Baccalaureate (IB) students. The IB is a rigorous curriculum, where students strive to be 21st century learners. With the growing accessibility of digital resources, IB students can better develop understanding and broaden their knowledge outside of the classroom. The goal of ibresources.org is to showcase the top online resources that have helped IB students learn, study and revise for their IB exams. Results are periodically updated to give new & current IB students an updated analysis of the resources available. All copyrighted materials belong to their respective copyright owners. This page links to resources on other websites. No copyrighted material is hosted on this website.
                </p>
            </CardContainer>
        </div>
    </section>
  )
}

export default resources

const CardContainer = tw.div`sm:flex mt-5 sm:flex-col`
const CardWrapper = tw.div`sm:grid sm:grid-cols-5 sm:flex flex gap-5 flex-wrap`
const Card = tw.div`sm:flex-col bg-white hover:shadow-md duration-500 cursor-pointer rounded-lg px-5 py-5`
const CardTitle = tw.p`text-[.95rem] font-medium text-sky-800 mt-2`
const CardDescription = tw.p`text-[.85rem] text-gray-500`