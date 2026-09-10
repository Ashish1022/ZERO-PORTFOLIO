import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/Providers/ConvexClientProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashishport.vercel.app"),
  title: {
    default: "Ashish Jadhav — Full-stack Engineer",
    template: "%s — Ashish Jadhav",
  },
  description:
    "Full-stack engineer in Mumbai. Founding Engineer at GradGuide, building CRM, job-search and automation systems that run in production.",
  keywords: [
    "Ashish Jadhav",
    "Full-stack Engineer",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Portfolio",
    "Mumbai",
  ],
  authors: [{ name: "Ashish Jadhav" }],
  openGraph: {
    type: "profile",
    title: "Ashish Jadhav — Full-stack Engineer",
    description:
      "Founding Engineer at GradGuide. Building products end to end — CRM, job search, deployment and automation systems.",
    url: "https://ashishport.vercel.app",
    siteName: "Ashish Jadhav",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Jadhav — Full-stack Engineer",
    description: "Founding Engineer at GradGuide. Building products end to end.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} overflow-y-scroll no-scrollbar`}
    >
      <body className="grain bg-background font-sans antialiased">
        {/* Framer only resolves its initial transforms once hydrated; without
            JS the masked headlines would stay parked out of frame. */}
        <noscript>
          <style>
            {
              "[data-animated-text] * { transform: none !important; }" +
              "[data-preloader] { display: none !important; }"
            }
          </style>
        </noscript>
        <ConvexClientProvider>
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
