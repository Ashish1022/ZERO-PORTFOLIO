import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/Providers/ConvexClientProvider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";


const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZERO | PORTFOLIO",
  description: "Developed and managed by ZERO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Ashish Jadhav" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Portfolio, Developer, Web Developer, UI/UX, JavaScript, React, Next.js, Designer" />
        <meta name="description" content="Welcome to the portfolio of Ashish Jadhav, a passionate web developer specializing in front-end development and UI/UX design." />
        <title>[Your Name] | Portfolio</title>

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ashish | Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Ashish, showcasing my skills in web development and UI/UX design." />
        <meta property="og:image" content="https://ashishport.vercel.app" />
        <meta property="og:url" content="https://ashishport.vercel.app" />
        <meta property="og:site_name" content="Ashish Portfolio" />
        <meta property="og:locale" content="en_US" />

      </Head>
      {/* Rest of your page content */}
      <html lang="en" className="overflow-y-scroll no-scrollbar">
        <body className={`${inter.className} bg-black-7`}>
          <ConvexClientProvider>
            {children}
            {/* <h1 className="text-[28px] font-extrabold tracking-widest font-mono flex items-center justify-center">Under Maintainence</h1> */}
            <Analytics />
            <SpeedInsights />
            <Toaster />
          </ConvexClientProvider>
        </body>
      </html>
    </>
  );
}
