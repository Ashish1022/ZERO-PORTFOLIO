"use client"
import { navbarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { MessageCircle, Star, Sparkles, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
  const pathName = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="navbar pt-6 px-32 max-md:hidden fixed top-6 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.nav
        className={cn(
          "flex items-center justify-between rounded-2xl px-8 py-4 shadow-2xl border transition-all duration-500",
          isScrolled
            ? "bg-black-6/95 backdrop-blur-xl border-white-3/20 shadow-black-1/50"
            : "bg-gradient-to-r from-black-6/80 to-black-2/80 backdrop-blur-sm border-white-3/10",
        )}
        style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}
      >
        <Link href="/" className="flex cursor-pointer items-center justify-center group">
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Star className="w-7 h-7 text-white-3 group-hover:text-white-1 transition-colors" />
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Sparkles className="w-7 h-7 text-blue-400/50" />
              </motion.div>
            </motion.div>

            <div className="flex flex-col group-hover:items-start items-center transition-all duration-300">
              <h1 className="text-xl font-extrabold bg-gradient-to-r from-white-1 via-blue-300 to-white-3 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                ZERO | PORTFOLIO
              </h1>
              <span className="text-xs text-white-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute group-hover:relative">
                Full-Stack Developer
              </span>
            </div>
          </motion.div>
        </Link>

        <div className="flex items-center gap-1">
          {navbarLinks.map(({ label, route }, index) => {
            const isActive = pathName === route || pathName.startsWith(`${route}/`)
            return (
              <Link key={route} href={route}>
                <motion.div
                  className={cn(
                    "relative px-6 py-3 rounded-xl transition-all duration-300 font-medium overflow-hidden group",
                    isActive ? "text-white-1 shadow-lg" : "text-white-3 hover:text-white-1",
                  )}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <motion.div className="absolute inset-0 bg-gradient-to-r from-white-1/5 to-white-3/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="relative z-10 text-base font-semibold">{label}</span>

                  {isActive && (
                    <motion.div
                      className="absolute bottom-1 left-1/2 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      initial={{ scale: 0, x: "-50%" }}
                      animate={{ scale: 1, x: "-50%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            )
          })}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            onClick={() => router.push("/contact")}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <MessageCircle className="w-4 h-4" />
              </motion.div>
              <span>Let&apos;s Talk</span>

              <motion.div
                className="overflow-hidden"
                initial={{ width: 0 }}
                whileHover={{ width: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-4 h-4 ml-1" />
              </motion.div>
            </div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </Button>
        </motion.div>
      </motion.nav>
    </motion.div>
  )
}

export default Navbar
