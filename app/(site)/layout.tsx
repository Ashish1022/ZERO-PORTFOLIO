import type React from "react";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-16 md:pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
}
