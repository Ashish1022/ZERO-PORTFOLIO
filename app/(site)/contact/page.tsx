"use client"

import ContactBox from '@/components/ContactBox'
import Image from 'next/image'
import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(2),
  subject: z.string().min(2),
  message: z.string().min(2),
})


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'

import {motion} from 'framer-motion'


const Contact = () => {

  const [result, setResult] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })


  async function onSubmit(e: z.infer<typeof formSchema>) {
    e:JSON.stringify({
      name:e.name,
      email:e.email,
      subject:e.subject,
      message:e.message,
    })
    setLoading(true)
    fetch('/api/emails',{
      method:'POST'
    })
    .then(response=>response.json())
    .then(data => setResult(data))
    .catch(error => setResult(error))
    .finally(()=>setLoading(false))
  }

  return (
    <div className='mt-4'>
      <div className='mx-32 py-6 max-md:mx-2 flex gap-4 max-md:flex-col'>
        <motion.div className='md:w-[35%] bg-gradient-to-r from-black-1/40 to-black-1/70 rounded-2xl p-4' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
          <h1 className='font-bold text-white-2 mb-16'>CONTACT INFO.</h1>
          <div className='flex flex-col gap-16'>
            <ContactBox image='/mail.png' name='MAIL US' info1='ashishjadhav9900@gmail.com' />
            <ContactBox image='/phone.png' name='CONTACT US' info1='+91 7400106790' info2='+91 9324955840' />
            <ContactBox image='/location.png' name='LOCATION' info1='Mumbai, Maharashtra' info2='India' />
          </div>
          <h1 className='font-bold text-white-2 mt-16 mb-8'>SOCIAL INFO.</h1>
          <div className='flex justify-between'>
            <Link href='https://www.instagram.com/ashishhh2210?igsh=MWR1NHBxZmZ1MGY5OQ==' className='cursor-pointer' target={'_blank'}>
              <Image src='/instagram.svg' alt='insta' width={66} height={66} className='aspect-square bg-black-2 border hover:bg-gray-1/70 transition p-3 rounded-2xl' />
            </Link>
            <Link href='https://x.com/ashishhh2210' className='cursor-pointer' target={'_blank'}>
              <Image src='/twitter.svg' alt='insta' width={66} height={66} className='aspect-square rounded-full bg-black-2 border hover:bg-gray-1/70 transition' />
            </Link>
            <Link href='https://discord.gg/63sd6r2N88' className='cursor-pointer' target={'_blank'}>
              <Image src='/discord.svg' alt='insta' width={66} height={66} className='aspect-square rounded-full bg-black-2 border hover:bg-gray-1/70 transition p-3' />
            </Link>
          </div>
        </motion.div>
        <motion.div className='md:w-[65%] bg-gradient-to-r from-black-1/40 to-black-1/70 rounded-2xl p-8' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
          <h1 className='font-extrabold text-[42px]'>Let's Work <span className='text-blue-600'>together.</span></h1>
          <div className='mt-8 flex flex-col justify-center'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your Name *" required {...field} className='border-none bg-gradient-to-r from-black-1 to-black-1/90 placeholder:font-bold h-14 rounded-xl' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your Email *" required {...field} className='border-none bg-gradient-to-r from-black-1 to-black-1/90 placeholder:font-bold h-14 rounded-xl ' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your Subject *" required {...field} className='border-none bg-gradient-to-r from-black-1 to-black-1/90 placeholder:font-bold h-14 rounded-xl' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Your Message *" required {...field} className='border-none bg-gradient-to-r from-black-1 to-black-1/90 placeholder:font-bold min-h-[150px] rounded-xl' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className='bg-black-1 rounded-xl p-8 hover:bg-white-2 hover:text-black-7 transition font-extrabold tracking-wider'>Send message</Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact