'use client'

import { Github } from '@/components/icons/github'
import { Linkedin } from '@/components/icons/linkedin'
import { Curriculum } from '@/components/icons/curriculum'
import { motion } from 'framer-motion'

const INITIAL_DELAY = 0.0
const DELAY_MULTIPLIER = 0.2
const ICON_SIZE = 36

const Icons = () => {
    let iterator: number = 0 // icons iterator

    return (
        <div className='flex gap-8'>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: INITIAL_DELAY + DELAY_MULTIPLIER * iterator++ }}
            >
                <Github size={ICON_SIZE} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: INITIAL_DELAY + DELAY_MULTIPLIER * iterator++ }}
            >
                <Linkedin size={ICON_SIZE} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: INITIAL_DELAY + DELAY_MULTIPLIER * iterator++ }}
            >
                <Curriculum size={ICON_SIZE} />
            </motion.div>
        </div>
    )
}

export { Icons }
