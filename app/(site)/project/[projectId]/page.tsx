"use client"
import { projects } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  Github,
  ArrowRight,
} from "lucide-react"

const Page = ({ params }: { params: { projectId: string } }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
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

  const currentProject = projects.find((project) => project.id === params.projectId)

  if (!currentProject) {
    return <div className="text-white-2 text-center mt-20">Project not found</div>
  }

  const { description, techStack, name, year, link, githubUrl, videoUrl, showcaseImages } = currentProject

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-1 via-black-2 to-black-1">
      {/* Hero Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {name}
          </motion.h1>

          <motion.p
            className="text-xl text-white-2 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-black-6/50 rounded-full px-6 py-2 text-white-2 font-semibold">
              {year}
            </span>
            {techStack.slice(0, 3).map((tech, index) => (
              <span key={index} className="bg-black-6/50 rounded-full px-6 py-2 text-white-2 font-semibold">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {link && (
              <Link
                href={link.startsWith('http') ? link : `https://${link}`}
                target="_blank"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-white-1 to-white-3 text-black-1 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                <ExternalLink className="w-5 h-5" />
                View Live
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
            
            <Link
              href={githubUrl || `https://github.com/yourusername/${params.projectId}`}
              target="_blank"
              className="inline-flex items-center gap-3 bg-black-6/50 hover:bg-black-6/70 text-white-1 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl border border-white-3/20"
            >
              <Github className="w-5 h-5" />
              View Code
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Video Section */}
      {videoUrl && (
        <motion.section
          className="py-8 px-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white-1">Live Demo</h2>
                <button
                  onClick={toggleVideo}
                  className="flex items-center gap-2 bg-black-1/50 hover:bg-black-1 transition-all rounded-full px-4 py-2"
                >
                  {isVideoPlaying ? (
                    <Pause className="w-4 h-4 text-white-2" />
                  ) : (
                    <Play className="w-4 h-4 text-white-2" />
                  )}
                  <span className="text-white-2 text-sm">{isVideoPlaying ? "Pause" : "Play"}</span>
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  autoPlay={isVideoPlaying}
                  muted
                  loop
                  playsInline
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>

                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black-1/50">
                    <button
                      onClick={toggleVideo}
                      className="bg-white-1/20 backdrop-blur-sm rounded-full p-4 hover:bg-white-1/30 transition-all"
                    >
                      <Play className="w-8 h-8 text-white-1" />
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
          className="py-8 px-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white-1 mb-6">Screenshots</h2>

              <div className="relative mb-6">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={showcaseImages[currentImageIndex] || "/placeholder.svg"}
                    alt={`${name} showcase ${currentImageIndex + 1}`}
                    width={1200}
                    height={600}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>

                {showcaseImages.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(showcaseImages)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black-1/80 hover:bg-black-1 transition-all rounded-full p-3"
                    >
                      <ChevronLeft className="w-5 h-5 text-white-2" />
                    </button>
                    <button
                      onClick={() => nextImage(showcaseImages)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black-1/80 hover:bg-black-1 transition-all rounded-full p-3"
                    >
                      <ChevronRight className="w-5 h-5 text-white-2" />
                    </button>
                    <div className="absolute bottom-4 right-4 bg-black-1/80 rounded-full px-3 py-1">
                      <span className="text-white-2 text-sm">
                        {currentImageIndex + 1} / {showcaseImages.length}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {showcaseImages.length > 1 && (
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {showcaseImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative rounded-lg overflow-hidden transition-all ${
                        index === currentImageIndex
                          ? "ring-2 ring-white-3 scale-105"
                          : "hover:scale-105 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        width={120}
                        height={80}
                        className="w-full h-16 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Tech Stack */}
      <motion.section
        className="py-8 px-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white-1 mb-6">Built with</h2>
            
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white-3/10 text-white-2 px-4 py-2 rounded-full text-sm font-medium hover:bg-white-3/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Page