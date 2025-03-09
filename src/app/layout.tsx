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
    description: "Portfolio de Pedro Figueira, estudante de computação e desenvolvedor fullstack. Aqui você encontra meus projetos, habilidades e informações de contato.",
    authors: {
        url: "https://www.linkedin.com/in/pedrofbv/",
        name: "Pedro Figueira",
    },
    keywords: "portfolio, Pedro Figueira, web developer, fullstack developer, intern, student, estudante, desenvolvedor web, desenvolvedor, estagiario, projects",
    robots: "index, follow",
    twitter: {
        card: "summary_large_image",
        site: "@pedrofbv",
        title: "Pedro Figueira",
        description: "Portfolio de Pedro Figueira",
    },
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
            <head>
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Pedro Portfolio" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
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
