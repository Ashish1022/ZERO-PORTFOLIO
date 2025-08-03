"use client"
import Box from "@/components/Box"
import WorkBox from "@/components/WorkBox"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Star, Code, Zap, ArrowRight, ExternalLink, Filter } from "lucide-react"
import { useState } from "react"

const Work = () => {
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState("All")

  const projects = [
    {
      id: "story",
      image: "/project1.png",
      name: "ZERO | STORY",
      type: "WebApp",
      category: "Full-Stack",
      description: "Interactive storytelling platform with modern UI/UX",
      technologies: ["React", "Node.js", "MongoDB"],
      featured: true,
    },
    {
      id: "portfolio",
      image: "/project2.png",
      name: "ZERO | PORTFOLIO",
      type: "WebApp",
      category: "Frontend",
      description: "Personal portfolio showcasing projects and skills",
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      featured: true,
    },
    {
      id: "hub",
      image: "/project3.png",
      name: "ZERO | HUB",
      type: "WebApp / AI-ML",
      category: "AI/ML",
      description: "AI-powered development hub with smart features",
      technologies: ["Python", "TensorFlow", "React"],
      featured: false,
    },
    {
      id: "deploy",
      image: "/project7.png",
      name: "ZERO | DEPLOY",
      type: "WebApp",
      category: "DevOps",
      description: "Automated deployment platform for web applications",
      technologies: ["Docker", "AWS", "CI/CD"],
      featured: false,
    },
    {
      id: "authenticate",
      image: "/project5.png",
      name: "ZERO | AUTHENTICATE",
      type: "WebApp",
      category: "Backend",
      description: "Secure authentication system with modern features",
      technologies: ["Node.js", "JWT", "OAuth"],
      featured: false,
    },
    {
      id: "campus",
      image: "/project6.png",
      name: "ZERO | CAMPUS",
      type: "WebApp",
      category: "Full-Stack",
      description: "Campus management system with comprehensive features",
      technologies: ["MERN Stack", "Socket.io", "Redux"],
      featured: false,
    },
  ]

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "AI/ML", "DevOps"]

  const filteredProjects = selectedFilter === "All" ? projects : projects.filter((p) => p.category === selectedFilter)

  const featuredProjects = projects.filter((p) => p.featured)
  const regularProjects = projects.filter((p) => !p.featured)

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
      <div className="mx-32 max-md:mx-2 py-12">
        <motion.div className="flex flex-col gap-12" variants={containerVariants} initial="hidden" animate="visible">
          {/* Hero Section */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <div className="flex justify-center items-center gap-4 mb-6">
              <Star className="w-12 h-12 text-white-3 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent">
                MY WORKS
              </h1>
              <Star className="w-12 h-12 text-white-3 animate-pulse" />
            </div>
            <p className="text-white-2 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              A showcase of my latest projects, featuring modern web applications and innovative solutions
            </p>

            {/* Filter Tabs */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedFilter === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "bg-black-6/50 text-white-3 hover:text-white-1 hover:bg-black-6"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Projects Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 p-3 rounded-xl">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-white-1">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredProjects.map((project, index) => (
                <WorkBox
                  key={project.id}
                  image={project.image}
                  name={project.name}
                  type={project.type}
                  projectId={project.id}
                  description={project.description}
                  technologies={project.technologies}
                  category={project.category}
                  featured={true}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 p-3 rounded-xl">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white-1">All Projects</h2>
              <div className="flex items-center gap-2 ml-auto">
                <Filter className="w-5 h-5 text-white-3" />
                <span className="text-white-3 font-medium">
                  {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {filteredProjects.map((project, index) => (
                <WorkBox
                  key={project.id}
                  image={project.image}
                  name={project.name}
                  type={project.type}
                  projectId={project.id}
                  description={project.description}
                  technologies={project.technologies}
                  category={project.category}
                  featured={false}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom Action Section */}
          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6" variants={itemVariants}>
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
                  Ready to Start
                  <br />
                  Your{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    Project?
                  </span>
                </h2>
                <p className="text-white-2 mb-6 text-lg">
                  Let&apos;s collaborate and bring your vision to life with cutting-edge technology and creative solutions.
                </p>

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

export default Work
