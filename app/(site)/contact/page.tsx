"use client"
import ContactBox from "@/components/ContactBox"
import Image from "next/image"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { motion } from "framer-motion"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Loader, Send, Star, MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const getClient = useMutation(api.person.getClient)
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      const client = await getClient({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      })
      form.reset()
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        variant: "default",
      })
      setIsSubmitting(false)
    } catch (error) {
      console.log(error)
      toast({ title: "Error sending message", description: "Please try again later.", variant: "destructive" })
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: "/mail.png",
      title: "EMAIL ADDRESS",
      primary: "ashishjadhav9900@gmail.com",
      secondary: "Available 24/7",
      color: "from-blue-400/20 to-blue-600/20",
      iconColor: "text-blue-400",
    },
    {
      icon: "/phone.png",
      title: "PHONE NUMBER",
      primary: "+91 7400106790",
      secondary: "Mon-Fri 9AM-6PM IST",
      color: "from-green-400/20 to-green-600/20",
      iconColor: "text-green-400",
    },
    {
      icon: "/location.png",
      title: "LOCATION",
      primary: "Mumbai, Maharashtra",
      secondary: "India",
      color: "from-purple-400/20 to-purple-600/20",
      iconColor: "text-purple-400",
    },
  ]

  const socialLinks = [
    {
      href: "https://www.instagram.com/ashishhh2210?igsh=MWR1NHBxZmZ1MGY5OQ==",
      icon: "/instagram.svg",
      label: "Instagram",
      color: "from-pink-500/20 to-purple-500/20",
    },
    {
      href: "https://x.com/ashishhh2210",
      icon: "/twitter.svg",
      label: "Twitter",
      color: "from-blue-400/20 to-cyan-400/20",
    },
    {
      href: "https://discord.gg/63sd6r2N88",
      icon: "/discord.svg",
      label: "Discord",
      color: "from-indigo-500/20 to-purple-500/20",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-1 via-black-2 to-black-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Hero Section */}
          <motion.div className="text-center mb-8 sm:mb-12" variants={itemVariants}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <Star className="w-8 h-8 sm:w-12 sm:h-12 text-white-3 animate-pulse" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent text-center">
                GET IN TOUCH
              </h1>
              <Star className="w-8 h-8 sm:w-12 sm:h-12 text-white-3 animate-pulse" />
            </div>
            <p className="text-white-2 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
              Ready to bring your ideas to life? Let&apos;s start a conversation and create something amazing together.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8">
            {/* Contact Information Sidebar */}
            <motion.div
              className="xl:col-span-2 order-2 xl:order-1 bg-gradient-to-br from-black-6 to-black-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl"
              variants={itemVariants}
            >
              {/* Contact Info Header */}
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-white-1/20 to-white-3/20 p-2 sm:p-3 rounded-xl">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white-3" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white-1">Contact Information</h2>
                </div>
                <p className="text-white-2 text-sm sm:text-base">Feel free to reach out through any of these channels</p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {contactInfo.map((contact, index) => (
                  <ContactBox
                    key={index}
                    image={contact.icon}
                    name={contact.title}
                    info1={contact.primary}
                    info2={contact.secondary}
                    color={contact.color}
                    iconColor={contact.iconColor}
                    index={index}
                  />
                ))}
              </div>

              {/* Social Links */}
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-white-1/20 to-white-3/20 p-2 sm:p-3 rounded-xl">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white-3" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white-1">Follow Me</h3>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} target="_blank" className="group">
                      <motion.div
                        className={`bg-gradient-to-r ${social.color} p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={social.icon || "/placeholder.svg"}
                          alt={social.label}
                          width={32}
                          height={32}
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform mx-auto"
                        />
                      </motion.div>
                    </Link>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-black-1/30 to-transparent rounded-xl sm:rounded-2xl">
                  <p className="text-white-3 text-xs sm:text-sm text-center">
                    <span className="text-white-1 font-semibold">Response Time:</span> Usually within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="xl:col-span-3 order-1 xl:order-2 bg-gradient-to-br from-black-6 to-black-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl"
              variants={itemVariants}
            >
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white-1 mb-3 sm:mb-4 leading-tight">
                  Let&apos;s Create
                  <br />
                  Something{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    Amazing
                  </span>
                </h2>
                <p className="text-white-2 text-sm sm:text-base lg:text-lg">
                  Share your project details and let&apos;s discuss how we can bring your vision to life.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <Input
                                placeholder="Your Name *"
                                {...field}
                                className="border-2 border-white-3/20 bg-gradient-to-r from-black-1 to-black-6 placeholder:text-white-3 text-white-1 h-12 sm:h-14 rounded-xl focus:border-blue-400/50 transition-all pl-3 sm:pl-4 text-sm sm:text-base"
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <Input
                                placeholder="Your Email *"
                                type="email"
                                {...field}
                                className="border-2 border-white-3/20 bg-gradient-to-r from-black-1 to-black-6 placeholder:text-white-3 text-white-1 h-12 sm:h-14 rounded-xl focus:border-blue-400/50 transition-all pl-3 sm:pl-4 text-sm sm:text-base"
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs sm:text-sm" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Project Subject *"
                            {...field}
                            className="border-2 border-white-3/20 bg-gradient-to-r from-black-1 to-black-6 placeholder:text-white-3 text-white-1 h-12 sm:h-14 rounded-xl focus:border-blue-400/50 transition-all pl-3 sm:pl-4 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project... *"
                            {...field}
                            className="border-2 border-white-3/20 bg-gradient-to-r from-black-1 to-black-6 placeholder:text-white-3 text-white-1 min-h-[120px] sm:min-h-[150px] rounded-xl focus:border-blue-400/50 transition-all p-3 sm:p-4 resize-none text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs sm:text-sm" />
                      </FormItem>
                    )}
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                          <Loader size={16} className="sm:w-5 sm:h-5 animate-spin" />
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                          <Send size={16} className="sm:w-5 sm:h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>

              {/* Additional Info */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-black-1/30 to-transparent rounded-xl sm:rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                  <div className="p-2">
                    <h4 className="text-white-1 font-semibold mb-1 text-sm sm:text-base">Quick Response</h4>
                    <p className="text-white-3 text-xs sm:text-sm">Within 24 hours</p>
                  </div>
                  <div className="p-2">
                    <h4 className="text-white-1 font-semibold mb-1 text-sm sm:text-base">Free Consultation</h4>
                    <p className="text-white-3 text-xs sm:text-sm">30-minute call</p>
                  </div>
                  <div className="p-2">
                    <h4 className="text-white-1 font-semibold mb-1 text-sm sm:text-base">Project Estimate</h4>
                    <p className="text-white-3 text-xs sm:text-sm">Detailed proposal</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact