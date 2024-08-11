"use client"


import Image from 'next/image'
import {motion} from 'framer-motion'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const Box = ({ className, image, title, subtitle, route }: { className?: string; image?: string; title:string; subtitle:string; route?:string }) => {

    const router = useRouter();
    const handleClick = () => {
        router.push(`${route}`)
    }

    return (
        <div className={cn('flex-col bg-gradient-to-r from-black-2/80 to-black-2/40 p-4 flex rounded-3xl relative', className)}>
            {image && (
                <div className='flex justify-center items-center'>
                    <Image src={image!} alt='hero' width={150} height={50} className='rounded-3xl' />
                </div>
            )}
            <div className='flex-col pl-2'>
                <p className='font-bold text-white-3'>{subtitle}</p>
                <h1 className='text-white-1 font-extrabold text-20'>{title}</h1>
            </div>
            <Button className='absolute right-0 bottom-5' onClick={handleClick}>
                <Image src='/arrowR.png' alt='arrow' width={50} height={50} className='transition hover:scale-150' />
            </Button>
        </div>
    )
}

export default Box