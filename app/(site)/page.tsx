"use client"
import Box from "@/components/Box"
import BoxWithImage from "@/components/BoxWithImage"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Download, ArrowRight, ExternalLink, Sparkles, Zap } from "lucide-react"

const Home = () => {
  const router = useRouter()

  const services = [
    { icon: "/webdev.png", label: "Web Development", color: "from-blue-400/20 to-blue-600/20" },
    { icon: "/python.png", label: "Python Development", color: "from-green-400/20 to-green-600/20" },
    { icon: "/server.png", label: "Backend Services", color: "from-purple-400/20 to-purple-600/20" },
    { icon: "/webhook.png", label: "API Integration", color: "from-orange-400/20 to-orange-600/20" },
  ]

  const socialLinks = [
    {
      href: "https://www.instagram.com/ashishhh2210?igsh=MWR1NHBxZmZ1MGY5OQ==",
      icon: "/instagram.svg",
      label: "Instagram",
      color: "from-pink-500/20 to-purple-500/20",
    },
    {
      href: "https://www.linkedin.com/in/ashish-jadhav-zero",
      icon: "/linkedin.svg",
      label: "LinkedIn",
      color: "from-blue-500/20 to-cyan-500/20",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <div className="mx-32 py-12 max-md:mx-2">
        <motion.div className="flex flex-col gap-8" variants={containerVariants} initial="hidden" animate="visible">
          {/* Hero Section */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <div className="flex justify-center items-center gap-4 mb-6">
              <Sparkles className="w-12 h-12 text-white-3 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent">
                ASHISH JADHAV
              </h1>
              <Sparkles className="w-12 h-12 text-white-3 animate-pulse" />
            </div>
            <p className="text-white-2 text-lg md:text-xl max-w-3xl mx-auto mb-6">
              Full-Stack Developer & Tech Enthusiast crafting digital experiences with modern technologies
            </p>
            <div className="flex justify-center items-center gap-2 text-green-400 font-semibold">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for freelance work</span>
            </div>
          </motion.div>

          {/* Main Profile Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Profile Image */}
            <motion.div variants={itemVariants}>
              <BoxWithImage className="h-full" image="/profile2.png" />
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div className="flex flex-col gap-6" variants={itemVariants}>
              {/* Freelance Status */}
              <motion.div
                className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl border border-green-400/20"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-r from-green-400/20 to-green-600/20 p-3 rounded-xl">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white-1 font-bold text-lg">Freelance Work</h3>
                    <p className="text-white-3 text-sm">Available for new projects</p>
                  </div>
                </div>
                <p className="text-white-2 leading-relaxed">
                  Ready to bring your ideas to life with cutting-edge web technologies and innovative solutions.
                </p>
              </motion.div>

              {/* Navigation Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Box
                  className="h-full"
                  image="/signature.svg"
                  subtitle="MORE ABOUT ME"
                  title="My Story"
                  route="/credentials"
                />
                <Box className="h-full" image="/project.svg" title="Portfolio" subtitle="MY WORKS" route="/work" />
              </div>
            </motion.div>
          </div>

          {/* Services & Social Section */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* CV Download */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl h-full cursor-pointer group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open("/pdf/Ashish Jadhav Resume.pdf", "_blank")}
              >
                <div className="text-center h-full flex flex-col justify-between">
                  <div className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Download className="w-8 h-8 text-blue-400 mx-auto" />
                  </div>
                  <div>
                    <p className="text-white-3 font-semibold text-sm uppercase tracking-wider mb-2">MY RESUME</p>
                    <h3 className="text-white-1 font-bold text-xl mb-4">Download CV</h3>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 rounded-xl">
                      <Download className="w-4 h-4 mr-2" />
                      Get PDF
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Services Showcase */}
            <motion.div
              className="md:col-span-2 bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white-3 font-semibold text-sm uppercase tracking-wider mb-2">SPECIALIZATION</p>
                  <h3 className="text-white-1 font-bold text-2xl">Services Offering</h3>
                </div>
                <Button
                  className="bg-gradient-to-r from-white-1/20 to-white-3/20 hover:scale-110 transition-all p-3 rounded-full"
                  onClick={() => router.push("/services")}
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer group`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.label}
                      width={32}
                      height={32}
                      className="mx-auto mb-2 group-hover:scale-110 transition-transform"
                    />
                    <p className="text-white-2 text-xs text-center font-medium">{service.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl"
                  onClick={() => router.push("/services")}
                >
                  View All Services
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl"
              variants={itemVariants}
            >
              <div className="text-center h-full flex flex-col justify-between">
                <div>
                  <p className="text-white-3 font-semibold text-sm uppercase tracking-wider mb-2">STAY CONNECTED</p>
                  <h3 className="text-white-1 font-bold text-xl mb-6">Follow Me</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} target="_blank" className="block group">
                      <motion.div
                        className={`bg-gradient-to-r ${social.color} p-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={social.icon || "/placeholder.svg"}
                          alt={social.label}
                          width={32}
                          height={32}
                          className="mx-auto group-hover:scale-110 transition-transform"
                        />
                      </motion.div>
                    </Link>
                  ))}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-white-1/20 to-white-3/20 hover:scale-105 transition-all"
                  onClick={() => router.push("/socials")}
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-black-6 via-black-2 to-black-6 rounded-3xl p-8 shadow-2xl relative overflow-hidden group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push("/contact")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white-1 mb-4 leading-tight">
                Let's Create
                <br />
                Something{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Amazing
                </span>
              </h2>
              <p className="text-white-2 mb-8 text-lg max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's start a conversation and build the future together.
              </p>

              <Button className="bg-gradient-to-r from-white-1 to-white-3 text-black-1 hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 rounded-full shadow-lg">
                <span>Start Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
