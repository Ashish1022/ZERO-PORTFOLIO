"use client"


import Box from '@/components/Box'
import WorkBox from '@/components/WorkBox'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Work = () => {

  const router = useRouter();

  return (
    <div className='mt-4'>
      <div className='flex flex-col mx-32 py-6 gap-4'>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4 w-[35%] h-full'>
            <WorkBox image='/project1.png' name='ZERO | STORY' type='WebApp' projectId='story' />
            <WorkBox image='/project2.png' name='ZERO | PORTFOLIO' type='WebApp' projectId='portfolio' />
          </div>
          <div className='w-[65%]'>
            <div className='ml-20 mb-2 flex gap-5 p-2 items-center'>
              <Image src='/star.svg' alt='star' width={80} height={40} className='aspect-square' />
              <h1 className='text-[60px] font-extrabold'>MY WORKS</h1>
              <Image src='/star.png' alt='star' width={80} height={40} />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <WorkBox image='/project3.png' name='ZERO | INTELLIGENCE' type='WebApp / AI-ML' projectId='intelligence' />
              <WorkBox image='/project4.png' name='ZERO | SOCIALS' type='WebApp' projectId='social' />
              <WorkBox image='/project5.png' name='ZERO | AUTHENTICATE' type='WebApp' projectId='authenticate' />
              <WorkBox image='/project2.png' name='ZERO | PORTFOLIO' type='WebApp' projectId='portfolio' />
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='p-4 w-[25%] relative bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl'>
            <div className='flex justify-evenly bg-gradient-to-l from-[#000000] rounded-3xl p-5 gap-8'>
              <Link href='https://discord.gg/63sd6r2N88' className='cursor-pointer' target={'_blank'}>
                <Image src='/discord.svg' alt='insta' width={66} height={66} className='aspect-square rounded-full bg-black-2 border hover:bg-gray-1/70 transition p-3' />
              </Link>
              <Link href='https://www.instagram.com/ashishhh2210?igsh=MWR1NHBxZmZ1MGY5OQ==' className='cursor-pointer' target={'_blank'}>
                <Image src='/instagram.svg' alt='insta' width={66} height={66} className='aspect-square bg-black-2 border hover:bg-gray-1/70 transition p-2 rounded-2xl' />
              </Link>

            </div>
            <div className='pl-2 absolute bottom-4'>
              <p className='font-bold text-white-3'>STAY WITH ME</p>
              <h1 className='text-white-1 font-extrabold text-20'>Socials.</h1>
            </div>
            <Button className='absolute right-0 bottom-5' onClick={()=>router.push(`/socials`)}>
              <Image src='/arrowR.png' alt='arrow' width={50} height={50} className='transition hover:scale-150' />
            </Button>
          </div>
          <div className='p-4 w-[50%] bg-gradient-to-r from-black-2/80 to-black-2/40 rounded-2xl relative'>
            {/* <Image src='/lamp.png' alt='lamp' width={100} height={100} className='absolute top-0'/> */}
            <h1 className='text-[42px] pl-2 py-7 font-extrabold'>Let's <br />Work <span className='text-blue-600'>together.</span></h1>
            <Button className='absolute right-0 bottom-5' onClick={()=>router.push(`/contact`)}>
              <Image src='/arrowR.png' alt='arrow' width={50} height={50} className='transition hover:scale-150' />
            </Button>
          </div>
          <Box className='w-[25%]' image='/signature.svg' subtitle='MORE ABOUT ME.' title='Credentials.' route='/credentials' />
        </div>
      </div>
    </div>
  )
}

export default Work