"use client"
import { projects } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  Calendar,
  Code,
  Briefcase,
  ArrowRight,
} from "lucide-react"

const page = ({ params }: { params: { projectId: string } }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isVideoInView, setIsVideoInView] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying)
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const nextImage = (showcaseImages: string[]) => {
    setCurrentImageIndex((prev) => (prev + 1) % showcaseImages.length)
  }

  const prevImage = (showcaseImages: string[]) => {
    setCurrentImageIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoInView(entry.isIntersecting)
      },
      { threshold: 0.5 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const currentProject = projects.find((project) => project.id === params.projectId)

  if (!currentProject) {
    return <div className="text-white-2 text-center mt-20">Project not found</div>
  }

  const { id, description, techStack, name, year, service, methodology, link, videoUrl, showcaseImages } =
    currentProject

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-1 via-black-2 to-black-1">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black-1/90 to-black-2/90" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            className="mb-8 flex justify-center items-center gap-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Image src="/star.svg" alt="star" width={50} height={50} className="animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent">
              {name}
            </h1>
            <Image src="/star.png" alt="star" width={50} height={50} className="animate-pulse" />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-white-2 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 bg-black-6/50 rounded-full px-6 py-3">
              <Calendar className="w-5 h-5 text-white-3" />
              <span className="text-white-2 font-semibold">{year}</span>
            </div>
            <div className="flex items-center gap-2 bg-black-6/50 rounded-full px-6 py-3">
              <Briefcase className="w-5 h-5 text-white-3" />
              <span className="text-white-2 font-semibold">{service}</span>
            </div>
            <div className="flex items-center gap-2 bg-black-6/50 rounded-full px-6 py-3">
              <Code className="w-5 h-5 text-white-3" />
              <span className="text-white-2 font-semibold">Tech Stack</span>
            </div>
          </motion.div>

          {link && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
              <Link
                href={`https://${link}`}
                target="_blank"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-white-1 to-white-3 text-black-1 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Video Showcase */}
      {videoUrl && (
        <motion.section
          className="py-16 px-4"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white-1 mb-2">Project in Action</h2>
                  <p className="text-white-2">Watch the live demonstration</p>
                </div>
                <button
                  onClick={toggleVideo}
                  className="flex items-center gap-3 bg-gradient-to-r from-black-1 to-black-6 hover:from-black-6 hover:to-black-1 transition-all rounded-full px-6 py-3 shadow-lg"
                >
                  {isVideoPlaying ? (
                    <Pause className="w-5 h-5 text-white-2" />
                  ) : (
                    <Play className="w-5 h-5 text-white-2" />
                  )}
                  <span className="text-white-2 font-semibold">{isVideoPlaying ? "Pause" : "Play"}</span>
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-[500px] object-cover"
                  autoPlay={isVideoPlaying}
                  muted
                  loop
                  playsInline
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black-1/30 via-transparent to-transparent pointer-events-none" />

                {/* Play overlay when paused */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black-1/50">
                    <button
                      onClick={toggleVideo}
                      className="bg-white-1/20 backdrop-blur-sm rounded-full p-6 hover:bg-white-1/30 transition-all"
                    >
                      <Play className="w-12 h-12 text-white-1" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Image Gallery */}
      {showcaseImages && showcaseImages.length > 0 && (
        <motion.section
          className="py-16 px-4"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white-1 mb-4">Visual Journey</h2>
              <p className="text-white-2 text-lg">Explore the project through detailed screenshots</p>
            </div>

            <div className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl">
              {/* Main Image */}
              <div className="relative mb-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={showcaseImages[currentImageIndex] || "/placeholder.svg"}
                    alt={`${name} showcase ${currentImageIndex + 1}`}
                    width={1200}
                    height={700}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-1/20 to-transparent" />
                </div>

                {/* Navigation */}
                {showcaseImages.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(showcaseImages)}
                      className="absolute left-6 top-1/2 -translate-y-1/2 bg-black-1/80 hover:bg-black-1 transition-all rounded-full p-4 shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6 text-white-2" />
                    </button>
                    <button
                      onClick={() => nextImage(showcaseImages)}
                      className="absolute right-6 top-1/2 -translate-y-1/2 bg-black-1/80 hover:bg-black-1 transition-all rounded-full p-4 shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6 text-white-2" />
                    </button>
                  </>
                )}

                {/* Counter */}
                {showcaseImages.length > 1 && (
                  <div className="absolute bottom-6 right-6 bg-black-1/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-white-2 font-semibold">
                      {currentImageIndex + 1} / {showcaseImages.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Grid */}
              {showcaseImages.length > 1 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {showcaseImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                        index === currentImageIndex
                          ? "ring-4 ring-white-3 scale-105 shadow-2xl"
                          : "hover:scale-105 hover:shadow-xl opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${name} thumbnail ${index + 1}`}
                        width={200}
                        height={120}
                        className="w-full h-24 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black-1/30 to-transparent" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Tech Stack & Details */}
      <motion.section
        className="py-16 px-4"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tech Stack */}
            <div className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-white-3" />
                <h3 className="text-2xl font-bold text-white-1">Technology Stack</h3>
              </div>
              <p className="text-white-2 text-lg leading-relaxed">{techStack}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {techStack.split(", ").map((tech, index) => (
                  <span key={index} className="bg-black-1/50 text-white-3 px-4 py-2 rounded-full text-sm font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-white-3" />
                <h3 className="text-2xl font-bold text-white-1">Project Details</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white-3 font-semibold mb-1">Year</h4>
                  <p className="text-white-2 text-lg">{year}</p>
                </div>
                <div>
                  <h4 className="text-white-3 font-semibold mb-1">Services</h4>
                  <p className="text-white-2 text-lg">{service}</p>
                </div>
                <div>
                  <h4 className="text-white-3 font-semibold mb-1">About</h4>
                  <p className="text-white-2 leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Description */}
      <motion.section
        className="py-16 px-4"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-12 shadow-2xl text-center">
            <h3 className="text-3xl font-bold text-white-1 mb-8">Project Methodology</h3>
            <p className="text-white-2 text-lg leading-relaxed mb-8">{methodology}</p>

            {/* Author Signature */}
            <div className="border-t border-white-3/20 pt-8">
              <div className="flex justify-center items-center gap-4 mb-4">
                <Image src="/star.svg" alt="star" width={30} height={30} />
                <h4 className="text-2xl font-bold text-white-1">{name}</h4>
                <Image src="/star.png" alt="star" width={30} height={30} />
              </div>
              <p className="text-white-2">
                Crafted with precision by{" "}
                <span className="font-bold text-white-1 underline underline-offset-4">Ashish Jadhav</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      {link && (
        <motion.section
          className="py-16 px-4"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-black-1 via-black-6 to-black-1 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-white-1 mb-4">Ready to Explore?</h3>
              <p className="text-white-2 text-lg mb-8">
                Experience the full project in action and see what makes it special.
              </p>
              <Link
                href={`https://${link}`}
                target="_blank"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-white-1 to-white-3 text-black-1 px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
              >
                <ExternalLink className="w-6 h-6" />
                Launch Live Demo
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  )
}

export default page
