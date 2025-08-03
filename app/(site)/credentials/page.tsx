"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { User, GraduationCap, MapPin, Calendar, Award, Download, Mail } from "lucide-react"

const Credentials = () => {
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
    {
      href: "https://github.com/Ashish1022",
      icon: "/github.svg",
      label: "GitHub",
      color: "from-gray-500/20 to-gray-700/20",
    },
  ]

  const achievements = [
    { title: "50+ Projects Completed", description: "Successfully delivered various web applications" },
    { title: "4+ Years Experience", description: "Continuous learning and development in tech" },
    { title: "Full-Stack Expertise", description: "Proficient in both frontend and backend technologies" },
    { title: "Modern Tech Stack", description: "Always up-to-date with latest technologies" },
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
      <div className="mx-32 py-12 max-md:mx-4 gap-8 flex max-md:flex-col">
        {/* Profile Sidebar */}
        <motion.div
          className="md:w-[30%] bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 md:sticky h-fit top-6 shadow-2xl"
          initial={{ scale: 0, x: -100 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white-3/20">
              <Image
                src="/profile.png"
                alt="Ashish Jadhav"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-green-600 w-8 h-8 rounded-full border-4 border-black-2"></div>
          </div>

          {/* Profile Info */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-extrabold text-white-1 mb-2">Ashish Jadhav</h1>
            <p className="text-white-3 font-semibold mb-4">@ashishhh2210</p>

            <div className="flex items-center justify-center gap-2 text-white-3 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Mumbai, India</span>
            </div>

            <div className="bg-gradient-to-r from-black-1/30 to-transparent rounded-xl p-4 mb-6">
              <p className="text-white-2 text-sm leading-relaxed">
                Full-Stack Developer passionate about creating innovative web solutions and exploring cutting-edge
                technologies.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} target="_blank" className="group">
                <motion.div
                  className={`bg-gradient-to-r ${social.color} p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={social.icon || "/placeholder.svg"}
                    alt={social.label}
                    width={24}
                    height={24}
                    className="w-6 h-6 mx-auto group-hover:scale-110 transition-transform"
                  />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href="/contact">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full border-white-3/30 text-white-2 hover:bg-white-3/10 bg-transparent py-3 rounded-xl"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-black-1/30 rounded-xl">
              <h4 className="text-lg font-bold text-white-1">50+</h4>
              <p className="text-white-3 text-xs">Projects</p>
            </div>
            <div className="text-center p-3 bg-black-1/30 rounded-xl">
              <h4 className="text-lg font-bold text-white-1">4+</h4>
              <p className="text-white-3 text-xs">Years Exp</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="md:w-[70%] flex flex-col gap-12">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* About Me Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 p-3 rounded-xl">
                  <User className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white-1">About Me</h2>
              </div>

              <div className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl mb-8">
                <p className="text-white-2 text-lg leading-relaxed mb-6">
                  I&apos;m a passionate tech enthusiast with a relentless curiosity for the latest advancements in
                  technology. From groundbreaking gadgets and innovative software to emerging trends in artificial
                  intelligence and cybersecurity, I&apos;m always on the cutting edge of what&apos;s new and next.
                </p>
                <p className="text-white-2 text-lg leading-relaxed mb-6">
                  My journey in tech is driven by a love for problem-solving and a desire to understand how things work
                  behind the scenes. Whether it&apos;s building scalable web applications, exploring blockchain technology,
                  or diving into machine learning, I thrive on discovering and sharing insights about the technologies
                  that shape our future.
                </p>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="bg-black-1/30 rounded-xl p-4 hover:bg-black-1/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <h4 className="text-white-1 font-semibold">{achievement.title}</h4>
                      </div>
                      <p className="text-white-3 text-sm">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-green-400/20 to-green-600/20 p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white-1">Education</h2>
              </div>

              <div className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl mb-8">
                <div className="relative pl-6 border-l-2 border-green-400/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span className="text-white-3 text-sm">2022 - Present</span>
                    </div>
                    <h3 className="text-xl font-bold text-white-1 mb-2">
                      Bachelor of Engineering in Information Technology
                    </h3>
                    <p className="text-white-2 mb-4">University of Mumbai</p>
                    <p className="text-white-3 leading-relaxed">
                      During my studies at Bharati Vidyapeeth, I immersed myself in the dynamic field of Information
                      Technology. My coursework included Software Engineering, Machine Learning, and Network Security,
                      providing me with a solid foundation in both theoretical concepts and practical applications.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-green-400/10 rounded-xl p-4 text-center">
                      <h4 className="text-white-1 font-semibold mb-1">Current CGPA</h4>
                      <p className="text-green-400 font-bold text-lg">8.5/10</p>
                    </div>
                    <div className="bg-green-400/10 rounded-xl p-4 text-center">
                      <h4 className="text-white-1 font-semibold mb-1">Specialization</h4>
                      <p className="text-white-3 text-sm">Web Technologies</p>
                    </div>
                    <div className="bg-green-400/10 rounded-xl p-4 text-center">
                      <h4 className="text-white-1 font-semibold mb-1">Expected</h4>
                      <p className="text-white-3 text-sm">2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Credentials
