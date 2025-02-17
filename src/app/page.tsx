'use client'

import React, { useState } from 'react'
import { LanguageSwitch } from '@/components/core/LanguageSwitch'
import { Home } from '@/components/core/Home'
import { AboutMe } from '@/components/core/AboutMe'
import { Experience } from '@/components/core/Experience'
import { Footer } from '@/components/core/Footer'

const INITIAL_DELAY = 0.02

// TODO: exit animations for language switch, switch animations

export default function Main() {
    const [languagePos, setLanguagePos] = useState<number>(1) // 0 = EN, 1 = PTBR

    const switchLanguage = () => {
        setLanguagePos(languagePos === 0 ? 1 : 0)
    }

    return (
        <main className="flex flex-col lg:flex-row h-screen w-full items-center lg:px-20 xl:px-32 py-20 lg:py-36 gap-36">
            <LanguageSwitch switchLanguage={switchLanguage} />
            <div className='lg:fixed h-full lg:pb-16 lg:pt-32 mx-5 lg:mx-0'>
                <Home className='h-full' languagePos={languagePos} />
            </div>
            <div className="lg:w-1/2 mx-8 lg:ml-auto h-full flex flex-col gap-20 lg:mt-40 scroll-my-10">
                <AboutMe INITIAL_DELAY={INITIAL_DELAY} languagePos={languagePos} />
                <Experience INITIAL_DELAY={INITIAL_DELAY + 0.8} languagePos={languagePos} />
                <Footer className='w-full' INITIAL_DELAY={INITIAL_DELAY + 5.0} languagePos={languagePos} />
            </div>
        </main>
    )
}
