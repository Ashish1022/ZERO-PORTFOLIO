"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface ContactBoxProps {
  image: string
  name: string
  info1: string
  info2?: string
  color?: string
  iconColor?: string
  index?: number
}

const ContactBox = ({
  image,
  name,
  info1,
  info2,
  color = "from-white-1/20 to-white-3/20",
  iconColor = "text-white-3",
  index = 0,
}: ContactBoxProps) => {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 5 }}
    >
      <div className="flex items-center gap-4 p-4 bg-black-1/30 rounded-2xl hover:bg-black-1/50 transition-all duration-300 group-hover:shadow-lg">
        {/* Icon Container */}
        <div
          className={`bg-gradient-to-r ${color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={32}
            height={32}
            className="group-hover:rotate-12 transition-transform"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-white-3 font-semibold text-sm uppercase tracking-wider mb-2 group-hover:text-white-2 transition-colors">
            {name}
          </h3>
          <p className="text-white-1 font-medium text-lg group-hover:text-white-3 transition-colors leading-tight">
            {info1}
          </p>
          {info2 && <p className="text-white-2 text-sm mt-1 group-hover:text-white-1 transition-colors">{info2}</p>}
        </div>

        {/* Hover Indicator */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactBox
