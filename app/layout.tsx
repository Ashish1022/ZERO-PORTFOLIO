import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";


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
    <html lang="en" className="overflow-y-scroll no-scrollbar">
      <body className={`${inter.className} bg-black-7`}>
        {children}
          {/* <h1 className="text-[28px] font-extrabold tracking-widest font-mono flex items-center justify-center">Under Maintainence</h1> */}
      </body>
    </html>
  );
}
