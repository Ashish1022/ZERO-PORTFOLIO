"use client"
import { navbarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { MessageCircle, Star } from "lucide-react"

const Navbar = () => {
  const pathName = usePathname()
  const router = useRouter()

  return (
    <motion.div
      className="navbar pt-6 px-32 max-md:hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="flex items-center justify-between bg-gradient-to-r from-black-6/80 to-black-2/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-2xl border border-white-3/10">
        {/* Logo */}
        <Link href="/" className="flex cursor-pointer items-center justify-center group">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Star className="w-6 h-6 text-white-3 group-hover:text-white-1 transition-colors animate-pulse" />
            <h1 className="text-xl font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent">
              ZERO | PORTFOLIO
            </h1>
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          {navbarLinks.map(({ label, route }) => {
            const isActive = pathName === route || pathName.startsWith(`${route}/`)
            return (
              <Link key={route} href={route}>
                <motion.div
                  className={cn(
                    "px-6 py-3 rounded-xl transition-all duration-300 font-medium",
                    isActive
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white-1 shadow-lg"
                      : "text-white-3 hover:text-white-1 hover:bg-white-1/10",
                  )}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-base">{label}</p>
                </motion.div>
              </Link>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => router.push("/contact")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's Talk
          </Button>
        </motion.div>
      </nav>
    </motion.div>
  )
}

export default Navbar
