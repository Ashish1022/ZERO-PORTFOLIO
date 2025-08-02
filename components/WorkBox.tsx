"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Star, Code } from "lucide-react"

interface WorkBoxProps {
  image: string
  type: string
  name: string
  projectId: string
  description?: string
  technologies?: string[]
  category?: string
  featured?: boolean
  index?: number
}

const WorkBox = ({
  image,
  type,
  name,
  projectId,
  description,
  technologies = [],
  category,
  featured = false,
  index = 0,
}: WorkBoxProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/project/${projectId}`)
  }

  return (
    <motion.div
      className={`bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 group cursor-pointer border border-white-3/10 hover:border-white-3/20 ${
        featured ? "md:col-span-1" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={handleClick}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black-1 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10">
          <Star className="w-3 h-3" />
          Featured
        </div>
      )}

      {/* Project Image */}
      <div className="relative mb-6 overflow-hidden rounded-2xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-1/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="bg-gradient-to-r from-white-1 to-white-3 text-black-1 hover:scale-110 transition-all font-semibold px-6 py-3 rounded-full shadow-lg">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Project
          </Button>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        {/* Category & Type */}
        <div className="flex items-center justify-between">
          {category && (
            <span className="bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </span>
          )}
          <span className="text-white-3 text-sm font-medium">{type}</span>
        </div>

        {/* Project Name */}
        <h3 className="text-white-1 font-bold text-xl group-hover:text-white-3 transition-colors leading-tight">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-white-2 text-sm leading-relaxed group-hover:text-white-1 transition-colors">
            {description}
          </p>
        )}

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-white-3" />
              <span className="text-white-3 text-xs font-semibold uppercase tracking-wider">Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-black-1/50 text-white-3 px-3 py-1 rounded-full text-xs font-medium hover:bg-black-1/70 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="bg-black-1/50 text-white-3 px-3 py-1 rounded-full text-xs font-medium">
                  +{technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-white-3/10">
          <div className="flex items-center gap-2 text-white-2 group-hover:text-white-1 transition-colors">
            <span className="text-sm font-medium">View Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
          <Button
            className="bg-gradient-to-r from-white-1/20 to-white-3/20 hover:scale-110 transition-all p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation()
              handleClick()
            }}
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  )
}

export default WorkBox
