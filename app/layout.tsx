import type React from "react"
import type { Metadata } from "next"
import { VT323, Press_Start_2P, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { AnimationProvider } from "@/contexts/animation-context"
import { SmoothScroll } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"
import { getMetaInfo } from "@/lib/data"

const sans = VT323({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
  display: "swap",
})

const display = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const metaInfo = getMetaInfo()

export const metadata: Metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
  generator: "Next.js",
  icons: {
    icon: "/sb.ico",
    shortcut: "/sb.ico",
    apple: "/sb.ico",
  },
  openGraph: {
    title: metaInfo.title,
    description: metaInfo.description,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body className="bg-term text-phos antialiased scanlines">
        <div className="scanbeam" aria-hidden />
        <AnimationProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </AnimationProvider>
      </body>
    </html>
  )
}
