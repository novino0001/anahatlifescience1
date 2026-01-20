import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Anahat Life Sciences Pvt. Ltd. | Pharmaceutical Excellence",
  description: "Leading pharmaceutical company dedicated to medical excellence and healthcare innovation.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
