'use client'

import React from 'react'
import Image from 'next/image'
import { Icons } from '@/components/core/Icons'
import { aboutme } from '@/data/aboutme'
import { getLanguagePos } from '@/utils/language-handler'
import { cn } from '@/utils/tailwind-merge'
import { motion } from 'framer-motion'

interface HomeProps {
    className?: string
}
const Home: React.FC<HomeProps> = ({ className }) => {
    const languagePos = getLanguagePos()

    return (
        <section className={cn('flex flex-col w-full h-full justify-between gap-8 lg:gap-0', className)}>
            <div className='flex flex-col gap-16'>
                <div className='w-full flex flex-col gap-5 lg:gap-10'>
                    <div className='flex gap-6 items-center justify-start'>
                        <Image src="/pedro.jpg" alt="Logo" width={150} height={150} loading='eager' quality={100} className='rounded-full float-left' />
                        <div className='flex flex-col gap-2'>
                            <motion.h1
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className='text-5xl font-bold'
                            >
                                {aboutme.name}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className='font-light text-lg'
                            >
                                {aboutme.role[languagePos]}
                            </motion.p>
                        </div>
                    </div>
                    <p className='text-start font-extralight text-base w-[66%]'>
                        {aboutme.smallDescription[languagePos]}
                    </p>
                </div>
                <div className='lg:visible hidden'>
                    <p>todo: index</p>
                </div>
            </div>
            <Icons />
        </section >
    )
}

export { Home }
