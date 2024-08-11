"use client"


import Box from '@/components/Box'
import BoxWithImage from '@/components/BoxWithImage'
import HomeCard from '@/components/HomeCard'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className="mt-4">
      <div className='flex flex-col mx-32 py-6 gap-4'>
        <div className='flex gap-4'>
          <BoxWithImage className='w-[50%] h-full' image='/ashish4.jpeg' />
          <div className='w-[50%] h-fit flex flex-col gap-4'>
            <div className='p-4 w-[100%] bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl'>
              <p className='text-white-2 tracking-widest'><b className='text-white-1 text-16 tracking-wider'>Freelance Work</b>&nbsp;: Available as a freelancer</p>
            </div>
            <div className='flex gap-4'>
              <Box className='w-[50%]' image='/signature.svg' subtitle='MORE ABOUT ME.' title='Credentials.' route='/credentials' />
              <Box className='w-[50%]' image='/project.svg' title='Works' subtitle='SHOWCASE' route='/work' />
            </div>
          </div>
        </div>

        <div className='flex gap-4'>
          <Box className='w-[25%] h-[90%]' image='/cv.png' title='Download.' subtitle='MY CV' route='/work' />
          <div className='p-4 w-[50%] bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl relative'>
            <div className='flex gap-5 justify-evenly mt-12'>
              <Link href='/' className='hover:scale-150 transition'>
                <Image src='/webdev.png' alt='webdev' width={40} height={40} />
              </Link>
              <Link href='/' className='hover:scale-150 transition'>
                <Image src='/python.png' alt='webdev' width={40} height={40} />
              </Link>
              <Link href='/' className='hover:scale-150 transition'>
                <Image src='/server.png' alt='webdev' width={40} height={40} />
              </Link>
              <Link href='/' className='hover:scale-150 transition'>
                <Image src='/webhook.png' alt='webdev' width={40} height={40} />
              </Link>
            </div>
            <div className='pl-2 absolute bottom-4'>
              <p className='font-bold text-white-3'>SPECIALIZATION</p>
              <h1 className='text-white-1 font-extrabold text-20'>Services Offering.</h1>
            </div>
            <Button className='absolute right-0 bottom-5'>
              <Image src='/arrowR.png' alt='arrow' width={50} height={50} className='transition hover:scale-150' />
            </Button>
          </div>
          
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
        </div>

        <div className='flex gap-4'>
          <div className='p-4 w-[50%] flex gap-4 bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl relative'>
            <HomeCard title='02' subtitle1='PERSONAL WORK' subtitle2='EXPERIENCE' />
            <HomeCard title='+2' subtitle1='HAPPY' subtitle2='CLIENTS' />
            <HomeCard title='08' subtitle1='TOTAL' subtitle2='PROJECTS' />
          </div>
          <div className='p-4 w-[50%] bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl relative'>
            {/* <Image src='/lamp.png' alt='lamp' width={100} height={100} className='absolute top-0'/> */}
            <h1 className='text-[42px] pl-2 py-7 font-extrabold'>Let's <br />Work <span className='text-blue-600'>together.</span></h1>
            <Button className='absolute right-0 bottom-5'>
              <Image src='/arrowR.png' alt='arrow' width={50} height={50} className='transition hover:scale-150' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home