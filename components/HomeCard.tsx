"use client"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface HomeCardProps {
  title: string
  subtitle1: string
  subtitle2: string
  icon?: LucideIcon
  color?: string
  index?: number
}

const HomeCard = ({
  title,
  subtitle1,
  subtitle2,
  icon: Icon,
  color = "from-blue-400 to-blue-600",
  index = 0,
}: HomeCardProps) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-black-1 to-black-6 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group border border-white-3/10 hover:border-white-3/20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      {/* Icon */}
      {Icon && (
        <div className="mb-4">
          <div
            className={`bg-gradient-to-r ${color}/20 p-3 rounded-xl mx-auto w-fit group-hover:scale-110 transition-transform`}
          >
            <Icon className={`w-6 h-6 bg-gradient-to-r ${color} bg-clip-text text-transparent`} />
          </div>
        </div>
      )}

      {/* Number */}
      <motion.h1
        className={`text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        {title}
      </motion.h1>

      {/* Labels */}
      <div className="space-y-1">
        <p className="text-white-2 font-semibold text-sm uppercase tracking-wider group-hover:text-white-1 transition-colors">
          {subtitle1}
        </p>
        <p className="text-white-3 font-semibold text-sm uppercase tracking-wider group-hover:text-white-2 transition-colors">
          {subtitle2}
        </p>
      </div>

      {/* Hover Effect Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      ></div>
    </motion.div>
  )
}

export default HomeCard
