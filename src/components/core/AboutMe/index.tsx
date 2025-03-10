'use client'

import React from 'react'
import { aboutme } from '@/data/aboutme'
import { motion } from 'framer-motion'

const DELAY_MULTIPLIER = 0.2

interface AboutMeProps {
    INITIAL_DELAY?: number,
    languagePos?: number
}
const AboutMe: React.FC<AboutMeProps> = ({ INITIAL_DELAY = 0.0, languagePos = 0 }) => {
    let iterator: number = 0

    return (
        <section className='flex flex-col gap-8' id='about-me'>
            <motion.h2
                key={`title` + languagePos}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className='text-base font-bold uppercase'
            >
                {aboutme.descriptionTitle[languagePos]}
            </motion.h2>
            <div className='flex flex-col gap-4 text-left lg:text-justify'>
                <motion.p
                    key={`description1` + languagePos}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: INITIAL_DELAY + DELAY_MULTIPLIER * iterator++ }}
                >
                    {aboutme.description1[languagePos]}
                </motion.p>
                <motion.p
                    key={`description2` + languagePos}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: INITIAL_DELAY + DELAY_MULTIPLIER * iterator++ }}
                >
                    {aboutme.description2[languagePos]}
                </motion.p>
                <motion.p
                    key={`description3` + languagePos}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: INITIAL_DELAY + DELAY_MULTIPLIER * iterator++ }}
                >
                    {aboutme.description3[languagePos]}
                </motion.p>
                <motion.p
                    key={`descriptionExtra` + languagePos}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: INITIAL_DELAY + DELAY_MULTIPLIER * iterator++ }}
                >
                    {aboutme.descriptionExtra[languagePos]}
                </motion.p>
            </div>
        </section>
    )
}

export { AboutMe }
