"use client"

import Box from '@/components/Box'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation'

const About = () => {
  const router = useRouter();
  return (
    <div className='mt-4'>
      <div className='flex flex-col mx-32 py-6 gap-4'>
        <div className='flex gap-4'>
          <div className='pb-4 pt-4 w-[30%] flex justify-center items-center bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl relative'>
            <Image src='/about.jpeg' alt='about' width={300} height={300} className='rounded-3xl aspect-square' />
          </div>
          <div className='flex flex-col w-[70%] items-center'>
            <div className='flex gap-5 p-2'>
              <Image src='/star.svg' alt='star' width={80} height={40} className='aspect-square' />
              <h1 className='text-[60px] font-extrabold'>SELF-SUMMARY</h1>
              <Image src='/star.png' alt='star' width={80} height={40} />
            </div>
            <div className='p-4 bg-gradient-to-r w-[100%] from-black-2/80 to-black-2/40 rounded-2xl relative'>
              <Image src='/lamp.png' alt='lamp' width={80} height={80} />
              <h1 className='text-[32px] tracking-wide font-extrabold'>Ashish Jadhav.</h1>
              <p className='text-white-2 font-mono'>I am a Mumbai based Information technology student with a focus on web design, automation and webhooks management. I have a diverse range of experience having worked across various tools and techs.</p>
            </div>
          </div>
        </div>
        <div className='flex gap-4'>

          <div className='p-4 w-[50%] relative bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl'>
            <h1 className='font-mono text-white-1 font-semibold text-20 mt-1'>EXPERIENCE</h1>
            <p className='font-normal text-white-3 mt-4 py-1'>2022 - 2023</p>
            <p className='font-bold tracking-wide font-mono text-18 text-white-2'>Frontend Developer</p>
            <p className='font-normal text-white-3'>Personal project</p>
            <p className='font-normal text-white-3 mt-4 py-1'>2023 - Present</p>
            <p className='font-bold tracking-wide font-mono text-18 text-white-2'>SaaS based applications</p>
            <p className='font-normal text-white-3'>Personal project</p>
          </div>
          <div className='p-4 w-[50%] relative bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl'>
            <h1 className='font-mono text-white-1 font-semibold text-20 mt-1'>EDUCATION</h1>
            <p className='font-normal text-white-3 mt-4 py-1'>2020 - 2022</p>
            <p className='font-bold tracking-wide font-mono text-18 text-white-2'>Higher Secondary School</p>
            <p className='font-normal text-white-3'>University of Mumbai</p>
            <p className='font-normal text-white-3 mt-4 py-1'>2022 - 2026</p>
            <p className='font-bold tracking-wide font-mono text-18 text-white-2'>Bachelor of Engineering in Information Technology</p>
            <p className='font-normal text-white-3'>University of Mumbai</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='p-4 w-[25%] relative bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl'>
            <div className='flex justify-evenly bg-gradient-to-l from-[#000000] rounded-3xl p-5 gap-8'>
              <Link href='https://www.instagram.com/ashishhh2210' className='cursor-pointer' target={'_blank'}>
                <Image src='/twitter.svg' alt='insta' width={66} height={66} className='aspect-square rounded-full bg-black-2 border hover:bg-gray-1/70 transition' />
              </Link>
              <Link href='https://www.instagram.com/ashishhh2210' className='cursor-pointer' target={'_blank'}>
                <Image src='/twitter.svg' alt='insta' width={66} height={66} className='aspect-square rounded-full bg-black-2 border hover:bg-gray-1/70 transition' />
              </Link>

            </div>
            <div className='pl-2 absolute bottom-4'>
              <p className='font-bold text-white-3'>STAY WITH ME</p>
              <h1 className='text-white-1 font-extrabold text-20'>Socials.</h1>
            </div>
            <Button className='absolute right-0 bottom-5'>
              <Image src='/arrowR.png' alt='arrow' width={50} height={50} className='transition hover:scale-150' />
            </Button>
          </div>
          <div className='p-4 w-[50%] bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl relative'>
            {/* <Image src='/lamp.png' alt='lamp' width={100} height={100} className='absolute top-0'/> */}
            <h1 className='text-[42px] pl-2 py-7 font-extrabold'>Let's <br />Work <span className='text-blue-600'>together.</span></h1>
            <Button className='absolute right-0 bottom-5' onClick={()=>router.push(`/`)}>
              <Image src='/arrowR.png' alt='arrow' width={50} height={50} className='transition hover:scale-150' />
            </Button>
          </div>
          <Box className='w-[25%]' image='/signature.svg' subtitle='MORE ABOUT ME.' title='Credentials.' route='/credentials' />
        </div>
      </div>
    </div>
  )
}

export default About