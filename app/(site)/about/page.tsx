"use client"
import Box from "@/components/Box"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { GraduationCap, Briefcase, MapPin, Code, Star, ArrowRight, Download, Mail } from "lucide-react"

const About = () => {
  const router = useRouter()

  const experiences = [
    {
      period: "2022 - 2023",
      role: "Frontend Developer",
      company: "Personal Projects",
      description: "Focused on creating responsive web applications using modern frontend technologies.",
      skills: ["React", "JavaScript", "CSS3", "HTML5"],
    },
    {
      period: "2023 - Present",
      role: "Full-Stack Developer",
      company: "SaaS/BaaS Applications",
      description: "Building scalable SaaS and BaaS solutions with modern tech stack.",
      skills: ["Next.js", "Node.js", "Database Design", "API Development"],
    },
  ]

  const education = [
    {
      period: "2020 - 2022",
      degree: "Higher Secondary School",
      institution: "University of Mumbai",
      description: "Completed with focus on Science and Mathematics.",
      grade: "Distinction",
    },
    {
      period: "2022 - 2026",
      degree: "Bachelor of Engineering in Information Technology",
      institution: "University of Mumbai",
      description: "Currently pursuing with specialization in web technologies and software development.",
      grade: "Current CGPA: 8.5/10",
    },
  ]

  const skills = [
    "React & Next.js",
    "Node.js & Express",
    "Database Design",
    "API Development",
    "Cloud Services",
    "DevOps",
    "UI/UX Design",
    "Project Management",
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
                ABOUT ME
              </h1>
              <Star className="w-12 h-12 text-white-3 animate-pulse" />
            </div>
            <p className="text-white-2 text-lg md:text-xl max-w-3xl mx-auto">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </motion.div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            {/* Profile Image */}
            <motion.div
              className="md:col-span-2 bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white-3/20 shadow-2xl">
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

                <h2 className="text-2xl font-bold text-white-1 mb-2">Ashish Jadhav</h2>
                <p className="text-white-2 mb-4">Full-Stack Developer</p>

                <div className="flex items-center justify-center gap-2 text-white-3 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Mumbai, India</span>
                </div>

                <div className="flex justify-center gap-3">
                  <Button className="bg-gradient-to-r from-white-1 to-white-3 text-black-1 hover:scale-105 transition-all">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white-3/30 text-white-2 hover:bg-white-3/10 bg-transparent"
                    onClick={() => router.push("/contact")}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Self Summary */}
            <motion.div
              className="md:col-span-3 bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-white-1/20 to-white-3/20 p-3 rounded-xl">
                  <Code className="w-6 h-6 text-white-3" />
                </div>
                <h3 className="text-2xl font-bold text-white-1">Self Summary</h3>
              </div>

              <p className="text-white-2 text-lg leading-relaxed mb-6">
                I am a Mumbai-based Information Technology student with a passion for creating innovative web solutions.
                My expertise spans across web design, automation, and webhook management, with a diverse range of
                experience across various modern technologies and tools.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Projects", value: "50+" },
                  { label: "Experience", value: "4+ Years" },
                  { label: "Technologies", value: "15+" },
                  { label: "Satisfaction", value: "100%" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-black-1/30 rounded-xl">
                    <h4 className="text-xl font-bold text-white-1">{stat.value}</h4>
                    <p className="text-white-3 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-white-1 font-semibold mb-3">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-white-1/10 to-white-3/10 text-white-2 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience & Education */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div
              className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 p-3 rounded-xl">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white-1">Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-6 border-l-2 border-white-3/20 hover:border-white-3/40 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>

                    <div className="bg-black-1/30 rounded-xl p-4 hover:bg-black-1/50 transition-colors">
                      <p className="text-white-3 text-sm mb-1">{exp.period}</p>
                      <h4 className="text-white-1 font-bold text-lg mb-1">{exp.role}</h4>
                      <p className="text-white-2 text-sm mb-3">{exp.company}</p>
                      <p className="text-white-3 text-sm mb-3">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-green-400/20 to-green-600/20 p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white-1">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-6 border-l-2 border-white-3/20 hover:border-white-3/40 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>

                    <div className="bg-black-1/30 rounded-xl p-4 hover:bg-black-1/50 transition-colors">
                      <p className="text-white-3 text-sm mb-1">{edu.period}</p>
                      <h4 className="text-white-1 font-bold text-lg mb-1">{edu.degree}</h4>
                      <p className="text-white-2 text-sm mb-3">{edu.institution}</p>
                      <p className="text-white-3 text-sm mb-3">{edu.description}</p>
                      <div className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-xs inline-block">
                        {edu.grade}
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                  <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
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
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
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

              <Button
                className="absolute right-4 bottom-4 bg-gradient-to-r from-white-1/20 to-white-3/20 hover:scale-110 transition-all p-2"
                onClick={() => router.push("/socials")}
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
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
                  Let&apos;s Build
                  <br />
                  Something{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    Great
                  </span>
                </h2>
                <p className="text-white-2 mb-6">Ready to turn your ideas into reality? Let&apos;s collaborate!</p>

                <Button className="bg-gradient-to-r from-white-1 to-white-3 text-black-1 hover:scale-105 transition-all duration-300 font-semibold px-6 py-3 rounded-full shadow-lg">
                  <span>Get In Touch</span>
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
                title="My Journey"
                route="/credentials"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
