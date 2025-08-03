"use client"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navbarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Star, MessageCircle, Sparkles, X, Menu } from "lucide-react"
import { useState } from "react"

const MobileNav = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.div
            className="cursor-pointer bg-gradient-to-r from-black-6 to-black-2 p-3 rounded-xl shadow-lg border border-white-3/20 relative overflow-hidden group"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div
                  key="menu"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white-2 relative z-10" />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white-2 relative z-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </SheetTrigger>

        <SheetContent side="left" className="border-none bg-gradient-to-b from-black-1 to-black-2 w-80 p-0">
          {/* Enhanced Header */}
          <motion.div
            className="pt-8 pb-6 px-6 border-b border-white-3/20 bg-gradient-to-r from-black-6/50 to-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex cursor-pointer items-center gap-3 group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Star className="w-7 h-7 text-white-3 group-hover:text-white-1 transition-colors" />
              </motion.div>
              <div>
                <h1 className="text-lg font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent">
                  ZERO | PORTFOLIO
                </h1>
                <p className="text-white-3 text-sm mt-1">Full-Stack Developer</p>
              </div>
            </Link>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Sparkles className="w-5 h-5 text-blue-400/50" />
            </motion.div>
          </motion.div>

          {/* Enhanced Navigation */}
          <div className="flex h-[calc(100vh-200px)] flex-col justify-between overflow-y-auto py-6">
            <SheetClose asChild>
              <nav className="flex flex-col gap-2 px-6">
                {navbarLinks.map(({ route, label }, index) => {
                  const isActive = pathname === route || pathname.startsWith(`/${route}`)
                  return (
                    <SheetClose asChild key={route}>
                      <Link href={route}>
                        <motion.div
                          className={cn(
                            "flex items-center py-4 px-6 rounded-xl transition-all duration-300 font-medium relative overflow-hidden group",
                            isActive ? "text-white-1 shadow-lg" : "text-white-3 hover:text-white-1",
                          )}
                          whileHover={{ x: 5, scale: 1.02 }}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {/* Active Background */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"
                              layoutId="activeMobileTab"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}

                          {/* Hover Background */}
                          <motion.div className="absolute inset-0 bg-gradient-to-r from-white-1/5 to-white-3/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <span className="text-base font-semibold relative z-10">{label}</span>

                          {/* Active Indicator */}
                          {isActive && (
                            <motion.div
                              className="absolute right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>
            </SheetClose>

            {/* Enhanced CTA Section */}
            <motion.div
              className="pt-6 px-6 border-t border-white-3/20 bg-gradient-to-r from-transparent to-black-6/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <SheetClose asChild>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg relative overflow-hidden group"
                  onClick={() => router.push("/contact")}
                >
                  {/* Button Glow */}
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <MessageCircle className="w-5 h-5" />
                    </motion.div>
                    <span>Let&apos;s Talk</span>
                  </div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </Button>
              </SheetClose>
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
