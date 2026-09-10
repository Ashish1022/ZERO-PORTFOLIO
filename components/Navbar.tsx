"use client";

import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import RollText from "./RollText";

const Navbar = () => {
  const pathName = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between md:h-[72px]">
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 text-[13.5px] font-medium tracking-tight"
        >
          <RollText className="text-foreground">Ashish Jadhav</RollText>
          <span className="hidden font-mono text-[10.5px] uppercase tracking-label text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:inline">
            Engineer
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navbarLinks.map(({ label, route }) => {
            const isActive =
              route === "/"
                ? pathName === "/"
                : pathName === route || pathName.startsWith(`${route}/`);

            return (
              <Link
                key={route}
                href={route}
                className={cn(
                  "group relative px-3.5 py-2 text-[13.5px] tracking-tight transition-colors duration-300",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <RollText>{label}</RollText>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3.5 -bottom-px h-px bg-foreground"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group relative hidden h-9 items-center overflow-hidden rounded-full border border-border px-4 text-[13px] tracking-tight text-foreground transition-colors duration-500 hover:border-foreground md:inline-flex"
          >
            <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-raised transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
            <RollText>Get in touch</RollText>
          </Link>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
