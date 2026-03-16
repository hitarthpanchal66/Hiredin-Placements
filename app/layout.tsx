import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hiredin Placements | Recruitment Consultancy",
  description:
    "Hiredin Placements connects talented candidates with leading companies across India. We specialize in BPO, customer support, sales, and technical support hiring.",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
