'use client'

import { aboutme } from '@/data/aboutme'
import { getLanguagePos } from '@/utils/language-handler'
import { motion } from 'framer-motion'

const AboutMe = () => {
    const languagePos = getLanguagePos()

    return (
        <div className='flex flex-col gap-2 text-center'>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                {aboutme.description1[languagePos]}
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.25 }}
            >
                {aboutme.description2[languagePos]}
            </motion.p>
        </div>
    )
}

export { AboutMe }
