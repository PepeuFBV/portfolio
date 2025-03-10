'use client'

import React, { useState } from 'react'
import { useAppContext } from '@/context/context'
import { motion } from 'framer-motion'

enum Languages {
    EN = 'en',
    PTBR = 'pt',
}

const LanguageSwitch = () => {
    const { languagePos, switchLanguage } = useAppContext()

    const [currentLanguage, setCurrentLanguage] = useState<Languages>(languagePos === 0 ? Languages.EN : Languages.PTBR)

    const handleLanguageSwitch = () => {
        setCurrentLanguage(currentLanguage === Languages.EN ? Languages.PTBR : Languages.EN)
        switchLanguage()
    }

    return (
        <div className='flex justify-center items-center'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
                className='relative w-40 h-10 bg-zinc-300 dark:bg-zinc-900 rounded-full overflow-hidden'
            >
                <motion.div
                    className='absolute top-0 left-0 w-1/2 h-full bg-zinc-400 dark:bg-zinc-700'
                    animate={{ x: currentLanguage === Languages.EN ? 0 : '100%' }}
                    transition={{ duration: 0.9 }}
                />
                <div
                    className='absolute top-0 left-0 w-1/2 h-full flex items-center justify-center cursor-pointer'
                    onClick={handleLanguageSwitch}
                >
                    <div className='dark:text-white text-sm'>EN-US</div>
                </div>
                <div
                    className='absolute top-0 right-0 w-1/2 h-full flex items-center justify-center cursor-pointer'
                    onClick={handleLanguageSwitch}
                >
                    <div className='dark:text-white text-sm'>PT-BR</div>
                </div>
            </motion.div>
        </div>
    )
}

export { LanguageSwitch }
