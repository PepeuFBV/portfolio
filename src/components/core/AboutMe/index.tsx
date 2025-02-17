'use client'

import { aboutme } from '@/data/aboutme'
import { getLanguagePos } from '@/utils/language-handler'
import { motion } from 'framer-motion'

const INITIAL_DELAY = 0.75
const DELAY_MULTIPLIER = 0.2

const AboutMe = () => {
    const languagePos = getLanguagePos()

    let iterator: number = 0

    return (
        <section className='flex flex-col gap-8'>
            <h2 className='text-base font-bold uppercase'>{aboutme.descriptionTitle[languagePos]}</h2>
            <div className='flex flex-col gap-4 text-left lg:text-justify'>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: INITIAL_DELAY + DELAY_MULTIPLIER * iterator++ }}
                >
                    {aboutme.description1[languagePos]}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: INITIAL_DELAY + DELAY_MULTIPLIER * iterator++ }}
                >
                    {aboutme.description2[languagePos]}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: INITIAL_DELAY + DELAY_MULTIPLIER * iterator++ }}
                >
                    {aboutme.description3[languagePos]}
                </motion.p>
                <motion.p
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
