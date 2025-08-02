"use client"
import Box from "@/components/Box"
import ServiceBox from "@/components/ServiceBox"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

const Services = () => {
  const router = useRouter()

  const services = [
    {
      icon: "/server.png",
      title: "Database Architecture Design",
      description:
        "Skilled in designing efficient database architectures, focusing on creating scalable, high-performance solutions that ensure data integrity, optimize query performance, and support business needs.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Database Optimization"],
    },
    {
      icon: "/webhook.png",
      title: "Webhooks Management",
      description:
        "Expert in efficient webhook management, specializing in integrating and automating real-time data exchanges between systems to streamline workflows and enhance operational efficiency.",
      features: ["Real-time Integration", "API Management", "Event Processing", "System Automation"],
    },
    {
      icon: "/cloud.png",
      title: "Cloud Storage Management",
      description:
        "Proficient in efficient cloud storage management, focusing on optimizing data storage solutions for scalability, security, and cost-effectiveness while ensuring seamless access and reliability.",
      features: ["AWS S3", "Google Cloud", "CDN Setup", "Storage Optimization"],
    },
    {
      icon: "/webdev.png",
      title: "Web Development",
      description:
        "Experienced in full-stack web development, adept at creating dynamic, scalable web applications with expertise in both front-end and back-end technologies.",
      features: ["React/Next.js", "Node.js", "TypeScript", "Full-Stack Solutions"],
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
      <div className="mx-32 max-md:mx-2 py-12">
        <motion.div className="flex flex-col gap-8" variants={containerVariants} initial="hidden" animate="visible">
          {/* Hero Section */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <div className="flex justify-center items-center gap-4 mb-6">
              <Star className="w-12 h-12 text-white-3 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent">
                MY SERVICES
              </h1>
              <Star className="w-12 h-12 text-white-3 animate-pulse" />
            </div>
            <p className="text-white-2 text-lg md:text-xl max-w-3xl mx-auto">
              Comprehensive solutions for your digital needs, from database architecture to full-stack development
            </p>
          </motion.div>

          {/* Main Services Section */}
          <div className="flex max-md:flex-col gap-8">
            {/* Services Sidebar */}
            <motion.div
              className="md:w-[35%] bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl"
              variants={itemVariants}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white-1 mb-2">Core Expertise</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-white-1 to-white-3 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-black-1/30 rounded-2xl hover:bg-black-1/50 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-gradient-to-r from-black-1 to-black-6 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Image src={service.icon || "/placeholder.svg"} alt={service.title} width={24} height={24} />
                    </div>
                    <h3 className="text-white-2 font-semibold text-sm leading-tight group-hover:text-white-1 transition-colors">
                      {service.title}
                    </h3>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-black-1/50 to-transparent rounded-2xl">
                <p className="text-white-3 text-sm text-center">
                  <span className="text-white-1 font-semibold">4+ Years</span> of experience delivering exceptional
                  results
                </p>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div className="md:w-[65%]" variants={itemVariants}>
              <motion.div
                className="mb-6 flex gap-5 p-2 items-center justify-center md:justify-start"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <Image
                  src="/star.svg"
                  alt="star"
                  width={60}
                  height={60}
                  className="aspect-square max-md:w-[15%] max-md:h-fit animate-spin-slow"
                />
                <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent">
                  MY OFFERINGS
                </h1>
                <Image
                  src="/star.png"
                  alt="star"
                  width={60}
                  height={60}
                  className="aspect-square max-md:w-[15%] max-md:h-fit animate-pulse"
                />
              </motion.div>

              <div className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <ServiceBox
                      key={index}
                      title={service.title}
                      description={service.description}
                      features={service.features}
                      icon={service.icon}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Action Section */}
          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8" variants={itemVariants}>
            {/* Social Links */}
            <motion.div
              className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white-1/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

              <div className="flex justify-center gap-4 mb-6">
                <Link
                  href="https://www.instagram.com/ashishhh2210?igsh=MWR1NHBxZmZ1MGY5OQ=="
                  target="_blank"
                  className="group"
                >
                  <div className="bg-gradient-to-r from-black-1 to-black-6 p-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Image
                      src="/instagram.svg"
                      alt="Instagram"
                      width={32}
                      height={32}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                </Link>
                <Link href="https://x.com/ashishhh2210" target="_blank" className="group">
                  <div className="bg-gradient-to-r from-black-1 to-black-6 p-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Image
                      src="/twitter.svg"
                      alt="Twitter"
                      width={32}
                      height={32}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                </Link>
              </div>

              <div className="text-center">
                <p className="font-semibold text-white-3 text-sm mb-1">STAY CONNECTED</p>
                <h3 className="text-white-1 font-bold text-lg">Follow Me</h3>
              </div>
            </motion.div>

            {/* Work Together CTA */}
            <motion.div
              className="md:col-span-2 bg-gradient-to-r from-black-6 via-black-2 to-black-6 rounded-3xl p-8 shadow-2xl relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => router.push("/contact")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white-1 mb-4 leading-tight">
                  Let's Create
                  <br />
                  Something{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    Amazing
                  </span>
                </h2>
                <p className="text-white-2 mb-6">Ready to bring your ideas to life? Let's collaborate!</p>

                <Button className="bg-gradient-to-r from-white-1 to-white-3 text-black-1 hover:scale-105 transition-all duration-300 font-semibold px-6 py-3 rounded-full shadow-lg">
                  <span>Start Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            </motion.div>

            {/* Credentials */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Box
                className="h-full"
                image="/signature.svg"
                subtitle="LEARN MORE ABOUT ME"
                title="My Story"
                route="/credentials"
              />
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "4+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-black-6 to-black-2 rounded-2xl p-6 text-center shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white-1 mb-2">{stat.number}</h3>
                <p className="text-white-3 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
