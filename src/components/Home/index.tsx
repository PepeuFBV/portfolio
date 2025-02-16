import React from 'react'
import Image from 'next/image'
import { aboutme } from '@/data/aboutme'
import { getLanguagePos } from '@/utils/language-handler'
import * as motion from 'motion/react-client'

const Home = () => {
    const languagePos = getLanguagePos()

    return (
        <section className='flex flex-col place-items-center w-full h-full'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex flex-col items-center gap-2'
            >
                <Image src="/pedro.jpg" alt="Logo" width={350} height={350} loading='eager' quality={100} className='rounded-2xl' />
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='font-extralight'
                >
                    {aboutme.role[languagePos]}
                </motion.p>
            </motion.div>
        </section>
    )
}

export default Home
