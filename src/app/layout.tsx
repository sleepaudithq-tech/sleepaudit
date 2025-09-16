import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SleepAudit.io", template: "%s • SleepAudit.io" },
  description:
    "Actionable sleep education, product reviews, and science-backed guides for cooler, deeper sleep.",
  openGraph: {
    type: "website",
    siteName: "SleepAudit.io",
    url: siteUrl,
    images: [
      {
        url: "/images/og-default.jpg", // add later (1200x630)
        width: 1200,
        height: 630,
        alt: "SleepAudit.io",
      },
    ],
  },
  twitter: { card: "summary_large_image", site: "@SleepAudit" },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-neutral-900 antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}

