'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { TypingAnimation } from '@/components/ui/typing-animation'
import Link from 'next/link'
import { notFoundContent } from '@/data/not-found'
import { useAppContext } from '@/context/context'
import { motion } from 'framer-motion'

export default function NotFound() {
    const { languagePos } = useAppContext()

    return (
        <main className='flex flex-col h-screen w-full items-center justify-center space-y-10'>
            <div className='flex flex-col items-center justify-center'>
                <TypingAnimation className='text-9xl' startOnView as='h1' duration={200}>
                    404
                </TypingAnimation>
                <TypingAnimation className='text-3xl' startOnView as='h2' duration={150}>{notFoundContent.title[languagePos]}</TypingAnimation>
            </div>
            <TypingAnimation className='text-lg text-center max-w-96' startOnView as='p' duration={35}>{notFoundContent.description[languagePos]}</TypingAnimation>
            <motion.div
                key={`button-${languagePos}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Link href='/' passHref>
                    <Button variant='default'>
                        {notFoundContent.buttonText[languagePos]}
                    </Button>
                </Link>
            </motion.div>
        </main>
    )
}
