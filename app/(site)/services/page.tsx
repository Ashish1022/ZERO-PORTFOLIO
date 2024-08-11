"use client"

import Box from '@/components/Box'
import ServiceBox from '@/components/ServiceBox'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const Services = () => {
  const router = useRouter();
  return (
    <div className='mt-4 scroll-smooth'>
      <div className='mx-32 py-6'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div className='w-[35%] p-6 bg-black-3 rounded-2xl flex flex-col gap-8'>
              <div className='flex gap-12 items-center font-bold text-white-2 mt-16 mb-8 mx-4' >
                <Image src='/server.png' alt='server' width={30} height={30} />
                <h1>Database Architecture Design</h1>
              </div>
              <div className='flex gap-12 items-center font-bold text-white-2 my-8  mx-4'>
                <Image src='/webhook.png' alt='server' width={30} height={30} />
                <h1>Webhooks Management</h1>
              </div>
              <div className='flex gap-12 items-center font-bold text-white-2 my-8 mx-4'>
                <Image src='/cloud.png' alt='server' width={30} height={30} />
                <h1>Cloud Storage Management</h1>
              </div>
              <div className='flex gap-12 items-center font-bold text-white-2 mt-8 mb-16 mx-4'>
                <Image src='/webdev.png' alt='server' width={30} height={30} />
                <h1>Web development</h1>
              </div>
            </div>
            <div className='w-[65%]'>
              <div className='ml-8 mb-2 flex gap-5 p-2 items-center'>
                <Image src='/star.svg' alt='star' width={80} height={40} className='aspect-square' />
                <h1 className='text-[60px] font-extrabold'>MY OFFERINGS</h1>
                <Image src='/star.png' alt='star' width={80} height={40} />
              </div>
              <div className='p-6 bg-black-3 rounded-2xl grid grid-cols-2 gap-4'>
                <ServiceBox title='Web development' description='I am a Mumbai based Information technology student with a focus on web design, automation and webhooks management. I have a diverse range of experience having worked across various tools and techs.' />
                <ServiceBox title='Web development' description='I am a Mumbai based Information technology student with a focus on web design, automation and webhooks management. I have a diverse range of experience having worked across various tools and techs.' />
                <ServiceBox title='Web development' description='I am a Mumbai based Information technology student with a focus on web design, automation and webhooks management. I have a diverse range of experience having worked across various tools and techs.' />
                <ServiceBox title='Web development' description='I am a Mumbai based Information technology student with a focus on web design, automation and webhooks management. I have a diverse range of experience having worked across various tools and techs.' />
              </div>
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
              <Button className='absolute right-0 bottom-5' onClick={() => router.push(`/`)}>
                <Image src='/arrowR.png' alt='arrow' width={50} height={50} className='transition hover:scale-150' />
              </Button>
            </div>
            <Box className='w-[25%]' image='/signature.svg' subtitle='MORE ABOUT ME.' title='Credentials.' route='/credentials' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services