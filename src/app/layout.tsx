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
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-US" suppressHydrationWarning> {/*todo: fix language*/}
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
