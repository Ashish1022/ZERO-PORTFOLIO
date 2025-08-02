"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Code, Zap } from "lucide-react"

const BoxWithImage = ({ className, image }: { className?: string; image?: string }) => {
  const router = useRouter()

  return (
    <motion.div
      className={cn(
        "bg-gradient-to-br from-black-6 to-black-2 rounded-3xl p-8 shadow-2xl relative overflow-hidden group",
        className,
      )}
      initial={{ scale: 0, rotate: -5 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-4 right-4 text-white-3/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 text-white-3/20"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Code className="w-5 h-5" />
      </motion.div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image Section */}
          {image && (
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="relative">
                <Image
                  src={image || "/placeholder.svg"}
                  alt="Ashish Jadhav"
                  width={200}
                  height={200}
                  className="rounded-2xl aspect-square object-cover shadow-2xl border-4 border-white-3/20 group-hover:border-white-3/40 transition-all duration-300"
                />
                {/* Status Indicator */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-green-600 w-8 h-8 rounded-full border-4 border-black-2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
            </motion.div>
          )}

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Role Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-4 border border-blue-400/30">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
                  Full Stack Developer
                </span>
              </div>

              {/* Name */}
              <motion.h1
                className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Ashish Jadhav
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-white-2 text-lg leading-relaxed mb-6 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Crafting{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold">
                  clean code
                </span>{" "}
                with a{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold">
                  creative touch
                </span>
              </motion.p>

              {/* Skills Tags */}
              <motion.div
                className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {["React", "Node.js", "TypeScript", "Next.js"].map((skill, index) => (
                  <span
                    key={skill}
                    className="bg-black-1/50 text-white-3 px-3 py-1 rounded-full text-xs font-medium hover:bg-black-1/70 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  onClick={() => router.push("/about")}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full translate-y-12 -translate-x-12 blur-2xl"></div>
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-3xl border border-white-3/0 group-hover:border-white-3/20 transition-all duration-300"></div>
    </motion.div>
  )
}

export default BoxWithImage
