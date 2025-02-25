'use client'

import React from 'react'
import { useAppContext } from '@/context/context'
import { Home } from '@/components/core/Home'
import { AboutMe } from '@/components/core/AboutMe'
import { Experience } from '@/components/core/Experience'
import { Footer } from '@/components/core/Footer'
import { Projects } from '@/components/core/Projects'

const INITIAL_DELAY = 0.02

export default function Main() {
    const { languagePos } = useAppContext()

    return (
        <main className="flex flex-col lg:flex-row h-screen w-full items-center mt-10 md:mt-0 lg:px-20 xl:px-32 py-20 lg:py-36 gap-36">
            <div className='lg:fixed lg:w-1/2 lg:-z-10 h-full lg:pb-16 lg:pt-32 mx-5 md:mx-2 lg:mx-0'>
                <Home className='h-full' languagePos={languagePos} />
            </div>
            <div className="lg:w-1/2 mx-8 lg:ml-auto h-full flex flex-col gap-20 lg:mt-40 scroll-my-10">
                <AboutMe INITIAL_DELAY={INITIAL_DELAY} languagePos={languagePos} />
                <Experience INITIAL_DELAY={INITIAL_DELAY + 0.8} languagePos={languagePos} />
                <Projects INITIAL_DELAY={INITIAL_DELAY + 3.8} languagePos={languagePos} />
                <Footer className='mt-16 lg:mt-24 w-full' INITIAL_DELAY={INITIAL_DELAY + 6.5} languagePos={languagePos} />
            </div>
        </main>
    )
}
