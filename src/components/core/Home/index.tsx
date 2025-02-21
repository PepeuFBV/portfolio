'use client'

import React from 'react'
import Image from 'next/image'
import { Icons } from '@/components/core/Icons'
import { aboutme } from '@/data/aboutme'
import { cn } from '@/utils/tailwind-merge'
import { motion } from 'framer-motion'
import { Index } from '../Index'

interface HomeProps {
    className?: string
    languagePos?: number
}
const Home: React.FC<HomeProps> = ({ className, languagePos = 0 }) => {
    return (
        <section className={cn('flex flex-col w-full h-full justify-between gap-8 lg:gap-0', className)}>
            <div className='flex flex-col gap-16'>
                <div className='w-[28rem] md:w-[36rem] lg:w-full flex flex-col gap-5 lg:gap-10'>
                    <div className='flex gap-6 items-center justify-start'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className='hidden md:block py-1 px-2 bg-zinc-200 dark:bg-zinc-900 rounded-lg'
                        >
                            <Image src="/pedro.jpg" alt="Logo" width={140} height={180} loading='eager' quality={100} priority className='rounded-full float-left' />
                        </motion.div>
                        <div className='flex flex-col gap-2 w-full lg:w-1/2'>
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className='text-5xl font-bold'
                            >
                                {aboutme.name}
                            </motion.h1>
                            <motion.p
                                key={`role-${languagePos}`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className='dark:font-extralight text-lg dark:text-zinc-400'
                            >
                                {aboutme.role[languagePos]}
                            </motion.p>
                        </div>
                    </div>
                    <motion.p
                        key={`description-${languagePos}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='text-start dark:font-extralight text-md w-[58%]'
                    >
                        {aboutme.smallDescription[languagePos]}
                    </motion.p>
                </div>
                <Index />
            </div>
            <Icons languagePos={languagePos} />
        </section >
    )
}

export { Home }
