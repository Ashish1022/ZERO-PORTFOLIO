"use client"
import { navbarLinks } from "@/constants"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Heart } from "lucide-react"

const Footer = () => {
  return (
    <motion.footer
      className="mt-20 pt-16 pb-8 bg-gradient-to-t from-black-6 to-black-2 border-t border-white-3/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Star className="w-8 h-8 text-white-3 animate-pulse" />
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent">
              ZERO | PORTFOLIO
            </h1>
            <Star className="w-8 h-8 text-white-3 animate-pulse" />
          </div>
          <p className="text-white-2 text-lg max-w-2xl mx-auto">
            Crafting digital experiences with passion, precision, and cutting-edge technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-8 mb-12 max-md:gap-4 max-md:flex-wrap">
          {navbarLinks.map(({ route, label }) => (
            <Link
              key={route}
              href={route}
              className="text-white-3 hover:text-white-1 transition-colors duration-300 font-medium hover:scale-105 transform"
            >
              <motion.p whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                {label}
              </motion.p>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white-3/30 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white-3 flex justify-center items-center gap-2 tracking-wide">
            <span>&copy; 2024 All rights reserved by</span>
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-bold tracking-wider">
              ZERO
            </span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
          </p>
          <p className="text-white-3 text-sm mt-2">Made with passion in Mumbai, India</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
