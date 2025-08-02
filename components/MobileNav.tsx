"use client"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navbarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Star, MessageCircle } from "lucide-react"

const MobileNav = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <section>
      <Sheet>
        <SheetTrigger asChild>
          <motion.div
            className="cursor-pointer bg-gradient-to-r from-black-6 to-black-2 p-3 rounded-xl shadow-lg"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image src="/hamburger.svg" width={24} height={24} alt="menu" />
          </motion.div>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-gradient-to-b from-black-1 to-black-2 w-80">
          {/* Header */}
          <div className="pt-8 pb-6 border-b border-white-3/20">
            <Link href="/" className="flex cursor-pointer items-center gap-2">
              <Star className="w-6 h-6 text-white-3 animate-pulse" />
              <h1 className="text-lg font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent">
                ZERO | PORTFOLIO
              </h1>
            </Link>
            <p className="text-white-3 text-sm mt-2">Full-Stack Developer</p>
          </div>

          {/* Navigation */}
          <div className="flex h-[calc(100vh-200px)] flex-col justify-between overflow-y-auto py-6">
            <SheetClose asChild>
              <nav className="flex flex-col gap-2">
                {navbarLinks.map(({ route, label }) => {
                  const isActive = pathname === route || pathname.startsWith(`/${route}`)
                  return (
                    <SheetClose asChild key={route}>
                      <Link href={route}>
                        <motion.div
                          className={cn(
                            "flex items-center py-4 px-6 rounded-xl transition-all duration-300 font-medium",
                            isActive
                              ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white-1 shadow-lg"
                              : "text-white-3 hover:text-white-1 hover:bg-white-1/10",
                          )}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-base font-semibold">{label}</p>
                        </motion.div>
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>
            </SheetClose>

            {/* CTA Button */}
            <div className="pt-6 border-t border-white-3/20">
              <SheetClose asChild>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl shadow-lg"
                  onClick={() => router.push("/contact")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Let's Talk
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
