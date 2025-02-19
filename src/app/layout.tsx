import React from 'react'
import { AppProvider } from '@/context/context'
import { LanguageSwitch } from '@/components/core/LanguageSwitch'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Pedro Figueira",
    description: "Portfolio de Pedro Figueira",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-US">
            <body className={poppins.className}>
                <AppProvider>
                    <LanguageSwitch />
                    {children}
                </AppProvider>
            </body>
        </html>
    )
}
