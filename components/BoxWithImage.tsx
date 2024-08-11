import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const BoxWithImage = ({ className, image }: { className?: string; image?: string }) => {
    return (
        <div className={cn('bg-gradient-to-r from-black-2/80 to-black-2/40 p-10 flex rounded-3xl relative', className)}>
            {image && (
                <div>
                    <Image src={image!} alt='hero' width={200} height={200} className='rounded-3xl aspect-square bg-black-5 p-2' />
                </div>
            )}
            <div className='p-4 ml-2 flex flex-col justify-center gap-2'>
                <p className='text-18 font-normal text-white-2 tracking-wide'>Tech Enthusiast</p>
                <h1 className='text-24 font-extrabold text-white-1 font-serif tracking-widest'>Ashish Jadhav.</h1>
                <p className='text-16 text-white-2 font-bold tracking-wider'>Tech designer based<br /> in Mumbai.</p>
            </div>
            <Button className='absolute right-0 bottom-5'>
                <Image src='/arrowR.png' alt='arrow' width={50} height={50} className=' transition hover:scale-150' />
            </Button>
        </div>
    )
}

export default BoxWithImage