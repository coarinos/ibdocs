import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import tw from 'twin.macro';
import MayKid from '../../../public/img/maykiddo.jpg'

function MayCountdown() {

    const [time, setTime] = useState("")
    useEffect (()=>{
        let countDownDate = new Date ("May 02, 2023 24:00:00").getTime();
        //update every second
        let x=setInterval(function() {
            //get todays date date and time 
            let now = new Date().getTime()

            //find the distance between now and the countdown date
            
            let distance = countDownDate - now;
            
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            );

            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor ((distance % (1000 * 60)) / (1000));

            setTime(days  + "d " + hours + "h " +  minutes + "m " +  seconds + "s")

            if (distance <0) {
                cleatInterval(x);
                setTime("Happy Exams Week")
            }

        }, 1000);
    },[])

  return (
    <Container>
        <Wrapper>
            <Title>May 2023 IB Exams</Title>
            <Timer>{time}</Timer>
            <Image src={MayKid} width={175} className="inline --tw-rotate-x"/>
        </Wrapper>
    </Container>    
  )
}

export default MayCountdown

const Container = tw.div`sm:w-1/2 sm:mx-4 hover:shadow-md border-[.25rem] duration-500 border-gray-50 rounded-2xl`
const Wrapper = tw.div`flex text-center py-5 flex-col items-center`
const Title = tw.p`text-center sm:text-lg text-sm sm:text-sm text-gray-400`
const Timer = tw.div`font-bold text-[1.8rem] text-[1.5rem] mb-2 text-indigo-500 sm:mb-3`
