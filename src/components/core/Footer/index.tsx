'use client'

import React, { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Github } from '@/components/core/Icons/components/github'
import { motion } from 'framer-motion'
import { cn } from '@/utils/tailwind-merge'
import '@/components/core/Footer/loading.css'

const githubLink = 'https://github.com/PepeuFBV/portfolio'

const footerText: ReactNode[] = [
    [
        <div key='en' className='text-start flex flex-col gap-2'>
            <div className='text-start flex flex-col'>
                <p key="en-1">Deployed on <span className='font-semibold dark:text-white'>Vercel</span>.</p>
                <p key="en-2">Designed with <span className='font-semibold dark:text-white'>Figma</span>, built in <span className='font-semibold dark:text-white'>NextJS</span> with <span className='font-semibold dark:text-white'>React</span>, <span className='font-semibold dark:text-white'>Typescript</span> and <span className='font-semibold dark:text-white'>TailwindCSS</span>.</p>
                <p key="en-3"><span className='font-semibold dark:text-white'>Poppings</span> is the font.</p>
            </div>
            <a className="w-fit flex gap-2 items-center" href={githubLink} target="_blank" rel="noreferrer">
                <Button variant='link' className='dark:text-zinc-500 h-auto p-0'>See this project in Github</Button>
                <Github anchor={false} href={githubLink} size={18} />
            </a>
        </div>
    ],
    [
        <div key='pt' className='text-start flex flex-col gap-2'>
            <div className='text-start flex flex-col'>
                <p key="pt-1">Deployado no <span className='font-semibold dark:text-white'>Vercel</span>.</p>
                <p key="pt-2">Design feito com o <span className='font-semibold dark:text-white'>Figma</span>, construído em <span className='font-semibold dark:text-white'>NextJS</span> com programação em <span className='font-semibold dark:text-white'>React</span>, <span className='font-semibold dark:text-white'>Typescript</span> e <span className='font-semibold dark:text-white'>TailwindCSS</span>.</p>
                <p key="pt-3"><span className='font-semibold dark:text-white'>Poppings</span> é a fonte.</p>
            </div>
            <a className='w-fit flex gap-2 items-center' href={githubLink} target='_blank' rel='noreferrer'>
                <Button variant='link' className='relative z-10 dark:text-zinc-500 h-auto p-0'>Veja este projeto no Github</Button>
                <Github anchor={false} href={githubLink} size={16} />
            </a>
        </div>
    ]
]

interface FooterProps {
    className?: string
    INITIAL_DELAY?: number
    languagePos?: number
}
const Footer: React.FC<FooterProps> = ({ className, INITIAL_DELAY = 0.0, languagePos = 0 }) => {
    return (
        <footer className={cn('flex flex-row justify-between gap-4 pb-12', className)}>
            <motion.div
                key={`footer-${languagePos}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: INITIAL_DELAY }}
                className='text-start text-sm dark:text-zinc-500'
            >
                {footerText[languagePos]}
            </motion.div>
            <motion.div
                key={`footer-loader-${languagePos}`}
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
