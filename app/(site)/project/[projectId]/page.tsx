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
  Calendar,
  Clock,
  Users,
  Target,
  Lightbulb,
  Code,
  Zap,
  Award,
  Bookmark,
  Star,
  TrendingUp
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

  const { 
    description, 
    techStack, 
    name, 
    year, 
    link, 
    githubUrl, 
    videoUrl, 
    showcaseImages,
    // Add these new optional fields to your project type
    overview,
    challenge,
    solution,
    features,
    impact,
    duration,
    role,
    teamSize,
    keyLearnings,
    futureEnhancements,
    architecture,
    performanceMetrics
  } = currentProject

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
            <span className="bg-black-6/50 rounded-full px-6 py-2 text-white-2 font-semibold flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {year}
            </span>
            {duration && (
              <span className="bg-black-6/50 rounded-full px-6 py-2 text-white-2 font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {duration}
              </span>
            )}
            {teamSize && (
              <span className="bg-black-6/50 rounded-full px-6 py-2 text-white-2 font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" />
                {teamSize}
              </span>
            )}
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

      {/* Project Overview */}
      {overview && (
        <motion.section
          className="py-8 px-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Bookmark className="w-6 h-6 text-white-3" />
                <h2 className="text-2xl font-bold text-white-1">Project Overview</h2>
              </div>
              <p className="text-white-2 leading-relaxed text-lg">{overview}</p>
            </div>
          </div>
        </motion.section>
      )}

      {/* Challenge & Solution */}
      {(challenge || solution) && (
        <motion.section
          className="py-8 px-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {challenge && (
                <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-red-400" />
                    <h3 className="text-2xl font-bold text-white-1">The Challenge</h3>
                  </div>
                  <p className="text-white-2 leading-relaxed">{challenge}</p>
                </div>
              )}

              {solution && (
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb className="w-6 h-6 text-green-400" />
                    <h3 className="text-2xl font-bold text-white-1">The Solution</h3>
                  </div>
                  <p className="text-white-2 leading-relaxed">{solution}</p>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Key Features */}
      {features && features.length > 0 && (
        <motion.section
          className="py-8 px-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-6 h-6 text-white-3" />
                <h2 className="text-2xl font-bold text-white-1">Key Features</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-black-1/30 rounded-xl p-6 border border-white-3/10 hover:border-white-3/20 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-5 h-5 text-white-3" />
                      <h4 className="font-semibold text-white-1">{feature.title}</h4>
                    </div>
                    <p className="text-white-2 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

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

      {/* Architecture & Performance */}
      {(architecture || performanceMetrics) && (
        <motion.section
          className="py-8 px-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {architecture && (
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Code className="w-6 h-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white-1">Architecture</h3>
                  </div>
                  <p className="text-white-2 leading-relaxed">{architecture}</p>
                </div>
              )}

              {performanceMetrics && (
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white-1">Performance</h3>
                  </div>
                  <div className="space-y-4">
                    {performanceMetrics.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-white-2">{metric.label}</span>
                        <span className="text-white-1 font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
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

      {/* Key Learnings */}
      {keyLearnings && keyLearnings.length > 0 && (
        <motion.section
          className="py-8 px-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white-1 mb-8">Key Learnings</h2>
              
              <div className="space-y-4">
                {keyLearnings.map((learning, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-black-1/20 border border-white-3/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white-3 mt-2 flex-shrink-0"></div>
                    <p className="text-white-2">{learning}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Future Enhancements */}
      {futureEnhancements && futureEnhancements.length > 0 && (
        <motion.section
          className="py-8 px-4 mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white-1 mb-8">Future Enhancements</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {futureEnhancements.map((enhancement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-black-1/20 border border-white-3/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="w-4 h-4 text-white-3 flex-shrink-0" />
                    <span className="text-white-2">{enhancement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  )
}

export default Page