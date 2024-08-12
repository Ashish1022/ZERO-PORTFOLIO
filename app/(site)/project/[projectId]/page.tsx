
import { projects } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = ({ params }: { params: { projectId: string } }) => {
  return (
    <div className='mt-4 scroll-smooth'>
      <div className='mx-32 py-6'>
        {projects.map(({ id, description, techStack, thumbnail, name, year, service, methodology, link }) => {
          return (
            <>
              {id === params.projectId ? (
                <div key={id} className='flex flex-col items-center gap-6'>
                  <div className='mb-4 flex gap-5 p-2 items-center'>
                    <Image src='/star.svg' alt='star' width={40} height={40} className='aspect-square' />
                    <h1 className='text-[30px] font-extrabold'>{name}</h1>
                    <Image src='/star.png' alt='star' width={40} height={40} />
                  </div>
                  <Image src={thumbnail} alt='thumbnail' width={1300} height={1200} className='w-[100vw] p-2 bg-white-1 rounded-3xl' />
                  <div className='flex gap-4 bg-gradient-to-r from-black-1 to-black-1 p-4 w-full rounded-2xl'>
                    <div className='w-[50%] space-y-2 bg-gradient-to-r from-black-6 to-black-2 rounded-2xl p-4'>
                      <h1 className='text-white-3 font-bold text-[18px]'>Tech stack.</h1>
                      <p className='text-white-2'>{techStack}</p>
                    </div>
                    <Image src='/lamp.png' alt='lamp' width={120} height={40} className='h-fit' />
                    <div className='w-[50%] space-y-2 bg-gradient-to-r from-black-6 to-black-2 rounded-2xl p-4'>
                      <h1 className='text-white-3 font-bold text-[18px]'>About.</h1>
                      <p className='text-white-2'>{description}</p>
                    </div>
                  </div>
                  <div className='flex gap-6 bg-gradient-to-r from-black-1 to-black-1 p-4 w-full rounded-2xl'>
                    <div className='w-[30%] space-y-8 bg-gradient-to-r from-black-6 to-black-2 rounded-2xl p-4'>
                      <div>
                        <h1 className='text-white-3 font-bold text-[16px]'>Year</h1>
                        <p className='text-white-2 font-extrabold text-[20px]'>{year}</p>
                      </div>
                      <div>
                        <h1 className='text-white-3 font-bold text-[16px]'>Serives</h1>
                        <p className='text-white-2 font-extrabold text-[20px]'>{service}</p>
                      </div>
                      <div>
                        <h1 className='text-white-3 font-bold text-[16px]'>Project</h1>
                        <p className='text-white-2 font-extrabold text-[20px]'>{name}</p>
                      </div>
                      <Image src='/lamp.png' alt='lamp' width={100} height={100} />
                    </div>
                    <div className='w-[70%] space-y-8 relative'>
                      <h1 className='text-white-3 font-extrabold text-[20px]'>Description.</h1>
                      <p className='text-white-2 font-bold text-[16px]'>{methodology}</p>
                      <div className='absolute bottom-2 left-[50%] -translate-x-[50%] flex flex-col items-center justify-center w-full'>
                        <div className='mb-1 flex gap-5 p-2 items-center'>
                          <Image src='/star.svg' alt='star' width={40} height={40} className='aspect-square' />
                          <h1 className='text-[30px] font-extrabold'>{name}</h1>
                          <Image src='/star.png' alt='star' width={40} height={40} />
                        </div>
                        <p>by <b className='tracking-wider underline underline-offset-8'>Ashish Jadhav.</b></p>
                      <Link href={`https://${link}`} target={'_blank'} className='absolute right-3'>
                        <span className='text-white-1 bg-black-6 rounded-2xl p-4 font-bold'>Live Demo</span>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default page