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
      </body>
    </html>
  );
}
