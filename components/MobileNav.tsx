"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center md:hidden"
      >
        <span className="flex w-5 flex-col gap-[5px]">
          <span
            className={cn(
              "h-px w-full bg-foreground transition-transform duration-300",
              isOpen && "translate-y-[3px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-full bg-foreground transition-transform duration-300",
              isOpen && "-translate-y-[3px] -rotate-45",
            )}
          />
        </span>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex w-full flex-col border-l border-border bg-background p-0 sm:max-w-sm"
      >
        <SheetTitle className="sr-only">Navigation</SheetTitle>

        <div className="flex h-16 items-center px-6">
          <span className="eyebrow">Menu</span>
        </div>

        <nav className="flex flex-col px-6">
          {navbarLinks.map(({ route, label }, index) => {
            const isActive =
              route === "/"
                ? pathname === "/"
                : pathname === route || pathname.startsWith(`${route}/`);

            return (
              <SheetClose asChild key={route}>
                <Link
                  href={route}
                  className="group flex items-baseline gap-4 border-t border-border py-5"
                >
                  <span className="meta w-6 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "text-[26px] font-medium tracking-tightest transition-colors duration-200",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground",
                    )}
                  >
                    {label}
                  </span>
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-border px-6 py-6">
          <p className="eyebrow mb-3">Available for work</p>
          <SheetClose asChild>
            <Link href="/contact" className="btn-solid w-full">
              Get in touch
            </Link>
          </SheetClose>
          <a
            href="mailto:ashishjadhav9900@gmail.com"
            className="meta mt-4 block hover:text-foreground"
          >
            ashishjadhav9900@gmail.com
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
