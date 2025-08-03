"use client"
import Box from "@/components/Box"
import BoxWithImage from "@/components/BoxWithImage"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Download, ArrowRight, ExternalLink, Sparkles, Zap, Star, Code, Users, Briefcase } from "lucide-react"

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

  const quickStats = [
    { icon: Briefcase, number: "4+", label: "Years Experience", color: "from-blue-400 to-blue-600" },
    { icon: Code, number: "50+", label: "Projects Done", color: "from-green-400 to-green-600" },
    { icon: Users, number: "100%", label: "Client Satisfaction", color: "from-purple-400 to-purple-600" },
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
    <div className="min-h-screen bg-gradient-to-br from-black-1 via-black-2 to-black-1 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-32 py-12 max-md:mx-2 relative z-10">
        <motion.div className="flex flex-col gap-12" variants={containerVariants} initial="hidden" animate="visible">
          {/* Hero Section */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <motion.div
              className="flex justify-center items-center gap-4 mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-12 h-12 text-white-3" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white-1 via-blue-300 to-white-3 bg-clip-text text-transparent">
                ASHISH JADHAV
              </h1>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-12 h-12 text-white-3" />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-white-2 text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Full-Stack Developer & Tech Enthusiast crafting{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold">
                digital experiences
              </span>{" "}
              with modern technologies
            </motion.p>

            <motion.div
              className="flex justify-center items-center gap-3 bg-gradient-to-r from-green-500/20 to-green-600/20 px-6 py-3 rounded-full border border-green-400/30 w-fit mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-semibold">Available for freelance work</span>
            </motion.div>
          </motion.div>

          {/* Main Profile Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Enhanced Profile Image */}
            <motion.div variants={itemVariants}>
              <BoxWithImage className="h-full" image="/profile2.png" />
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div className="flex flex-col gap-6" variants={itemVariants}>
              {/* Freelance Status */}
              <motion.div
                className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl border border-green-400/20 relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-r from-green-400/20 to-green-600/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
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
                </div>
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
                className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl h-full cursor-pointer group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.open("/pdf/Ashish Jadhav Resume.pdf", "_blank")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center h-full flex flex-col justify-between">
                  <div className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Download className="w-8 h-8 text-blue-400 mx-auto" />
                  </div>
                  <div>
                    <p className="text-white-3 font-semibold text-sm uppercase tracking-wider mb-2">MY RESUME</p>
                    <h3 className="text-white-1 font-bold text-xl mb-4">Download CV</h3>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 rounded-xl group-hover:scale-105 transition-all">
                      <Download className="w-4 h-4 mr-2" />
                      Get PDF
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Services Showcase */}
            <motion.div
              className="md:col-span-2 bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl relative overflow-hidden group"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer group/service`}
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={service.label}
                        width={32}
                        height={32}
                        className="mx-auto mb-2 group-hover/service:scale-110 transition-transform"
                      />
                      <p className="text-white-2 text-xs text-center font-medium">{service.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all"
                    onClick={() => router.push("/services")}
                  >
                    View All Services
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl relative overflow-hidden group"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center h-full flex flex-col justify-between">
                <div>
                  <p className="text-white-3 font-semibold text-sm uppercase tracking-wider mb-2">STAY CONNECTED</p>
                  <h3 className="text-white-1 font-bold text-xl mb-6">Follow Me</h3>
                </div>

                <div className="space-y-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} target="_blank" className="block group/social">
                      <motion.div
                        className={`bg-gradient-to-r ${social.color} p-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg group-hover/social:shadow-xl`}
                        whileHover={{ y: -2 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <Image
                          src={social.icon || "/placeholder.svg"}
                          alt={social.label}
                          width={32}
                          height={32}
                          className="mx-auto group-hover/social:scale-110 transition-transform"
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

          {/* Enhanced CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-black-6 via-black-2 to-black-6 rounded-3xl p-12 shadow-2xl relative overflow-hidden group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push("/contact")}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-8 right-8 text-blue-400/30"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Star className="w-8 h-8" />
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 text-purple-400/30"
              animate={{ rotate: -360, y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Code className="w-6 h-6" />
            </motion.div>

            <div className="relative z-10 text-center">
              <motion.h2
                className="text-4xl md:text-6xl font-extrabold text-white-1 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Let&apos;s Create
                <br />
                Something{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                  Amazing
                </span>
              </motion.h2>

              <motion.p
                className="text-white-2 mb-8 text-xl max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to bring your ideas to life? Let&apos;s start a conversation and build the future together with
                cutting-edge technology and creative solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button className="bg-gradient-to-r from-white-1 to-white-3 text-black-1 hover:scale-105 transition-all duration-300 font-bold px-10 py-5 rounded-full shadow-2xl text-lg group/cta">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover/cta:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
