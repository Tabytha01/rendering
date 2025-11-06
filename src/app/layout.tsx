import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Next.js Rendering Demo",
  description: "Demonstrating different rendering techniques in Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <header className="bg-blue-600 text-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold hover:text-blue-200">
                Next.js Demo
              </Link>
              <div className="flex space-x-6">
                <Link href="/" className="hover:text-blue-200 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="hover:text-blue-200 transition-colors">
                  About
                </Link>
                <Link href="/blog" className="hover:text-blue-200 transition-colors">
                  Blog
                </Link>
              </div>
            </div>
          </nav>
        </header>
        
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        
        <footer className="bg-gray-800 text-white py-6 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Next.js Rendering Demo. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2">
              Demonstrating CSR, SSR, SSG, and ISR techniques
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
