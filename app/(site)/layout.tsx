"use client"

import type React from "react"

import Footer from "@/components/Footer"
import MobileNav from "@/components/MobileNav"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black-1 via-black-2 to-black-1">
      <main>
        {/* Mobile Header */}
        <div className="md:hidden">
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-black-6/80 to-black-2/80 backdrop-blur-sm mx-2 mt-4 rounded-2xl shadow-2xl border border-white-3/10">
            <Link href="/">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-extrabold bg-gradient-to-r from-white-1 to-white-3 bg-clip-text text-transparent">
                  ZERO | PORTFOLIO
                </h1>
              </div>
            </Link>
            <MobileNav />
          </div>
        </div>

        {/* Desktop Navbar */}
        <Navbar />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
