'use client'

import React, { useState } from 'react'

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
        <div className='fixed right-0 top-0 mt-10 mr-10 justify-center items-center'>
            <div className='flex bg-black items-center rounded-full p-2'>
                <div
                    className={`h-10 w-20 flex items-center justify-center rounded-full cursor-pointer ${currentLanguage === Languages.EN ? 'bg-gray-500' : 'bg-transparent'}`}
                    onClick={() => handleLanguageSwitch()}
                >
                    <div className='text-white text-sm'>EN-US</div>
                </div>
                <div
                    className={`h-10 w-20 flex items-center justify-center rounded-full cursor-pointer ${currentLanguage === Languages.PTBR ? 'bg-gray-500' : 'bg-transparent'}`}
                    onClick={() => handleLanguageSwitch()}
                >
                    <div className='text-white text-sm'>PT-BR</div>
                </div>
            </div>
        </div>
    )
}

export { LanguageSwitch }
