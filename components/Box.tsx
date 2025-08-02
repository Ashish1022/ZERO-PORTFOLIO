"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

interface BoxProps {
  className?: string
  image?: string
  title: string
  subtitle: string
  route?: string
}

const Box = ({ className, image, title, subtitle, route }: BoxProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (route) {
      router.push(route)
    }
  }

  return (
    <motion.div
      className={cn(
        "bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-6 shadow-2xl relative overflow-hidden group cursor-pointer",
        className,
      )}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={handleClick}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white-1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Image */}
        {image && (
          <div className="flex justify-center items-center mb-6">
            <div className="bg-gradient-to-r from-black-1 to-black-6 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={80}
                height={80}
                className="group-hover:rotate-12 transition-transform"
              />
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="text-center flex-1 flex flex-col justify-center">
          <p className="text-white-3 font-semibold text-xs uppercase tracking-wider mb-3 group-hover:text-white-2 transition-colors">
            {subtitle}
          </p>
          <h3 className="text-white-1 font-bold text-xl mb-6 group-hover:text-white-3 transition-colors leading-tight">
            {title}
          </h3>

          {/* CTA Button */}
          <div className="flex items-center justify-center gap-2 text-white-2 group-hover:text-white-1 transition-colors">
            <span className="text-sm font-medium">Explore</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-3xl border border-white-3/0 group-hover:border-white-3/20 transition-all duration-300"></div>
    </motion.div>
  )
}

export default Box
