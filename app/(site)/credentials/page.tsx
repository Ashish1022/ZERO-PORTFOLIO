import Skills from '@/components/Skills'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Credentials = () => {
  return (
    <div className='mt-4 scroll-smooth'>
      <div className='mx-32 py-6 gap-24 flex'>
        <div className='w-[30%] p-6 bg-black-3 rounded-2xl sticky h-fit top-[6px]'>
          <Image src='/ashish4.jpeg' alt='ashish' width={300} height={300} className='rounded-2xl shadow-2xl' />
          <div className='mt-10'>
            <h1 className='font-extrabold text-[28px] text-center'>Ashish Jadhav.</h1>
            <h2 className='font-extrabold text-[18px] text-white-3 text-center'>@ashishhh2210</h2>
            <div className='flex justify-evenly mt-8 my-2'>
              <Image src='/twitter.svg' alt='twitter' width={50} height={50} className='rounded-full mr-2 p-1 bg-black-2 hover:bg-black-7 transition cursor-pointer' />
              <Image src='/twitter.svg' alt='twitter' width={50} height={50} className='rounded-full bg-black-2 aspect-square mx-2 p-1 hover:bg-black-7 transition cursor-pointer' />
              <Image src='/twitter.svg' alt='twitter' width={50} height={50} className='rounded-full bg-black-2 aspect-square mx-2 p-1 hover:bg-black-7 transition cursor-pointer' />
              <Image src='/twitter.svg' alt='twitter' width={50} height={50} className='rounded-full bg-black-2 aspect-square ml-2 p-1 hover:bg-black-7 transition cursor-pointer' />
            </div>
            <Button className='bg-black-6 w-full rounded-2xl mt-6'>
              Contat Me.
            </Button>
          </div>
        </div>
        <div className='w-[70%] flex flex-col gap-8'>
          <div>
            <h1 className='text-white-1 text-24 font-bold mb-10 font-mono'>About Me.</h1>
            <p className='text-white-2 font-normal mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel quod delectus, praesentium explicabo molestias nihil corporis, dolorem quaerat deserunt ab ipsa magnam repellendus fugiat itaque incidunt dolores nisi? Quisquam officiis quod sequi id obcaecati vitae error vero ab! Numquam exercitationem voluptate necessitatibus, consequatur corrupti iste mollitia ipsum eos inventore.</p>
            <p className='text-white-2 font-normal mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel quod delectus, praesentium explicabo molestias nihil corporis, dolorem quaerat deserunt ab ipsa magnam repellendus fugiat itaque incidunt dolores nisi? Quisquam officiis quod sequi id obcaecati vitae error vero.</p>
          </div>
          <div className='mt-12'>
            <h1 className='font-mono text-24 font-bold mb-10 text-white-1'>EDUCATION.</h1>
            <p className='text-white-3 py-1'>2022 - Present</p>
            <p className='text-blue-600 py-1 font-bold'>Bachelor of Engineeering in Information technology</p>
            <p className='text-white-3 py-1'>University Of Mumbai</p>
            <p className='text-white-2 mb-8 py-1 pb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem excepturi cum quisquam, at sed libero corrupti est, incidunt laborum perferendis mollitia? Ab labore incidunt illo est magnam, placeat mollitia blanditiis porro quis voluptatem aspernatur repellat tempore, explicabo quisquam non praesentium error ratione sapiente veritatis atque! Id molestiae corporis iusto veniam.</p>
          </div>
          <div className='mt-12'>
            <h1 className='font-mono text-24 font-bold mb-10 text-white-1'>SKILLS.</h1>
            <div className='flex gap-4'>
              <div className='flex flex-col gap-8 w-[50%]'>
                <Skills skill='Python' sub='NumPy, MatPlotlib, Scikit-learn, OpenCV, PyGame' />
                <Skills skill='DevOps' sub='Git, GitHub, Docker, Jenkins, AWS, FileCloud' />
                <Skills skill='Networking' sub='Wireshark, NMAP, VPNs, Firewalls' />
              </div>
              <div className='flex flex-col gap-8 w-[50%]'>
                <Skills skill='Web Development' sub='HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Next JS, PostgreSQL, SEO' />
                <Skills skill='Database' sub='SQL, PostgreSQL, MongoDB, Convex, Supabase' />
                <Skills skill='Other tools' sub='Clerk, Stripe' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credentials