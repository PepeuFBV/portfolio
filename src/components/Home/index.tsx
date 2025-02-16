import React from 'react'
import Image from 'next/image'
import { Icons } from '@/components/Home/icons'
import { aboutme } from '@/data/aboutme'
import { getLanguagePos } from '@/utils/language-handler'
import * as motion from 'motion/react-client'

const Home = () => {
    const languagePos = getLanguagePos()

    return (
        <section className='flex flex-col place-items-center w-full h-full justify-between'>
            <div className='flex flex-col gap-16'>
                <div className='w-full flex flex-col gap-10'>
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
                    <p className='text-center font-light text-base'>
                        {aboutme.smallDescription[languagePos]}
                    </p>
                </div>
                <div>
                    <p>todo: index</p>
                </div>
            </div>
            <Icons />
        </section >
    )
}

export default Home
