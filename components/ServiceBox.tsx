"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ServiceBoxProps {
  title: string
  description: string
  features: string[]
  icon: string
  index: number
}

const ServiceBox = ({ title, description, features, icon, index }: ServiceBoxProps) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-black-1 to-black-6 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-white-3/10 hover:border-white-3/20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-gradient-to-r from-white-1/20 to-white-3/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
          <Image src={icon || "/placeholder.svg"} alt={title} width={24} height={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-white-1 font-bold text-lg leading-tight group-hover:text-white-3 transition-colors">
            {title}
          </h3>
        </div>
        <ArrowRight className="w-5 h-5 text-white-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
      </div>

      {/* Description */}
      <p className="text-white-2 text-sm leading-relaxed mb-4 group-hover:text-white-1 transition-colors">
        {description}
      </p>

      {/* Features */}
      <div className="space-y-2">
        <h4 className="text-white-3 font-semibold text-xs uppercase tracking-wider">Key Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {features.map((feature, featureIndex) => (
            <span
              key={featureIndex}
              className="bg-white-1/10 text-white-3 px-3 py-1 rounded-full text-xs font-medium hover:bg-white-1/20 transition-colors"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  )
}

export default ServiceBox
