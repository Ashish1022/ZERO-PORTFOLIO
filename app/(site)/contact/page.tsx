"use client"

import ContactBox from '@/components/ContactBox'
import Image from 'next/image'
import React from 'react'

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


const Contact = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className='mt-4'>
      <div className='mx-32 py-6 flex gap-4'>
        <div className='w-[35%] bg-gradient-to-r from-black-1/40 to-black-1/70 rounded-2xl p-4'>
          <h1 className='font-bold text-white-2 mb-16'>CONTACT INFO.</h1>
          <div className='flex flex-col gap-16'>
            <ContactBox image='/mail.png' name='MAIL US' info1='ashishjadhav9900@gmail.com' />
            <ContactBox image='/phone.png' name='CONTACT US' info1='+91 7400106790' info2='+91 9324955840' />
            <ContactBox image='/location.png' name='LOCATION' info1='Mumbai, Maharashtra' info2='India' />
          </div>
          <h1 className='font-bold text-white-2 mt-16 mb-8'>SOCIAL INFO.</h1>
          <div className='flex justify-between'>
            <Image src='/twitter.svg' alt='twitter' width={80} height={40} className='bg-black-1 rounded-full p-5 aspect-square hover:bg-black-3 transition cursor-pointer' />
            <Image src='/twitter.svg' alt='twitter' width={80} height={40} className='bg-black-1 rounded-full p-5 aspect-square hover:bg-black-3 transition cursor-pointer' />
            <Image src='/twitter.svg' alt='twitter' width={80} height={40} className='bg-black-1 rounded-full p-5 aspect-square hover:bg-black-3 transition cursor-pointer' />
          </div>
        </div>
        <div className='w-[65%] bg-gradient-to-r from-black-1/40 to-black-1/70 rounded-2xl p-8'>
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
                        <Input placeholder="Name *" required {...field} className='border-none bg-gradient-to-r from-black-1 to-black-1/90 placeholder:font-bold h-14 rounded-xl'/>
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
                        <Input placeholder="Email *" required {...field} className='border-none bg-gradient-to-r from-black-1 to-black-1/90 placeholder:font-bold h-14 rounded-xl '/>
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
                        <Input placeholder="Your Subject *" required {...field} className='border-none bg-gradient-to-r from-black-1 to-black-1/90 placeholder:font-bold h-14 rounded-xl'/>
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
                        <Textarea placeholder="Your Subject *" required {...field} className='border-none bg-gradient-to-r from-black-1 to-black-1/90 placeholder:font-bold min-h-[150px] rounded-xl' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className='bg-black-1 rounded-xl p-8 hover:bg-white-2 hover:text-black-7 transition font-extrabold tracking-wider'>Send message</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact