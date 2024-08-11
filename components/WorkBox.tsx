"use client"


import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const WorkBox = ({ image, type, name, projectId }: { image: string; type: string; name: string; projectId: string }) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/project/${projectId}`)
    }

    return (
        <div className='bg-black-1 w-fit rounded-2xl p-4 relative'>
            <Image src={image} alt='image' width={300} height={250} className='rounded-2xl mb-8' />
            <div className='mt-3 ml-2'>
                <p className='text-white-3'>{type}</p>
                <h1 className='font-bold'>{name}</h1>
            </div>
            <Button className='absolute right-0 bottom-5' onClick={handleClick}>
              <Image src='/arrowR.png' alt='arrow' width={50} height={50} className='transition hover:scale-150' />
            </Button>
        </div>
    )
}

export default WorkBox