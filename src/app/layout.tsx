import React from 'react'
import { AppProvider } from '@/context/context'
import { ThemeProvider } from '@/context/theme-provider'
import { LanguageSwitch } from '@/components/core/LanguageSwitch'
import { ModeToggle } from '@/components/core/ModeToggle'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Pedro Figueira",
    description: "Portfolio de Pedro Figueira",
    authors: {
        url: "https://www.linkedin.com/in/pedrofbv/",
        name: "Pedro Figueira",
    },
    keywords: "portfolio, Pedro Figueira, web developer, projects",
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
    twitter: {
        card: "summary_large_image",
        site: "@pedrofbv",
        title: "Pedro Figueira",
        description: "Portfolio de Pedro Figueira",
    },
    themeColor: "#000000",
    applicationName: "Pedro Figueira Portfolio",
    generator: "Next.js",
    classification: "Portfolio",
    publisher: "Pedro Figueira",
    category: "Portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-US" suppressHydrationWarning>
            <body className={poppins.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <AppProvider>
                        <div className='fixed right-0 top-0 mt-10 mr-10 flex flex-col lg:flex-row items-end gap-4'>
                            <LanguageSwitch />
                            <ModeToggle />
                        </div>
                        {children}
                    </AppProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
