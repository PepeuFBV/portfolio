'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/tailwind-merge'
import '@/components/core/Footer/loading.css'

interface FooterProps {
    className?: string
    INITIAL_DELAY?: number
}
const Footer: React.FC<FooterProps> = ({ className, INITIAL_DELAY }) => {
    return (
        <footer className={cn('flex flex-row justify-between gap-4 pb-12', className)}>
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: INITIAL_DELAY }}
                className='text-start text-sm text-zinc-500'
            >
                <p>Deployed in <span className='text-white'>Vercel</span>.</p>
                <p>Designed with <span className='text-white'>Figma</span>, built in <span className='text-white'>NextJS</span> with <span className='text-white'>React</span>, <span className='text-white'>Typescript</span> and <span className='text-white'>TailwindCSS</span>.</p>
                <p><span className='text-white'>Poppings</span> is the font.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: INITIAL_DELAY }}
                className='loader'
            >
            </motion.div>
        </footer>
    )
}

export { Footer }
