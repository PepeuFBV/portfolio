import type { Metadata } from 'next'
import { getLanguagePos } from '@/utils/language-handler'
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
    const languagePos = getLanguagePos()

    return (
        <html lang={languagePos === 0 ? 'pt-br' : 'en-us'}>
            <body className={poppins.className}>
                {children}
            </body>
        </html>
    )
}
