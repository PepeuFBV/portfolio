'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

enum Languages {
    EN = 'en',
    PTBR = 'pt',
}

interface LanguageSwitchProps {
    switchLanguage: () => void
}
const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ switchLanguage }) => {
    const [currentLanguage, setCurrentLanguage] = useState<Languages>(Languages.PTBR)

    const handleLanguageSwitch = () => {
        setCurrentLanguage(currentLanguage === Languages.EN ? Languages.PTBR : Languages.EN)
        switchLanguage()
    }

    return (
        <div className='fixed right-0 top-0 mt-10 mr-10 flex justify-center items-center'>
            <div className='relative w-40 h-10 bg-zinc-900 rounded-full overflow-hidden'>
                <motion.div
                    className='absolute top-0 left-0 w-1/2 h-full bg-zinc-700'
                    animate={{ x: currentLanguage === Languages.EN ? 0 : '100%' }}
                    transition={{ duration: 0.9 }}
                />
                <div
                    className='absolute top-0 left-0 w-1/2 h-full flex items-center justify-center cursor-pointer'
                    onClick={handleLanguageSwitch}
                >
                    <div className='text-white text-sm'>EN-US</div>
                </div>
                <div
                    className='absolute top-0 right-0 w-1/2 h-full flex items-center justify-center cursor-pointer'
                    onClick={handleLanguageSwitch}
                >
                    <div className='text-white text-sm'>PT-BR</div>
                </div>
            </div>
        </div>
    )
}

export { LanguageSwitch }
