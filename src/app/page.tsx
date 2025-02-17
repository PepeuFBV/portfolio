import React from 'react'
import { Home } from '@/components/core/Home'
import { AboutMe } from '@/components/core/AboutMe'
import { Experience } from '@/components/core/Experience'
import { Footer } from '@/components/core/Footer'

const INITIAL_DELAY = 0.02

export default function Main() {
    return (
        <main className="flex flex-col lg:flex-row h-screen w-full items-center lg:px-20 xl:px-32 py-36 gap-36">
            <div className='lg:fixed h-full lg:py-16 mx-5 lg:mx-0'>
                <Home className='h-full' />
            </div>
            <div className="lg:w-1/2 mx-8 lg:ml-auto h-full flex flex-col gap-20 lg:mt-40 scroll-my-10">
                <AboutMe INITIAL_DELAY={INITIAL_DELAY} />
                <Experience INITIAL_DELAY={INITIAL_DELAY + 0.8} />
                <Footer className='w-full' INITIAL_DELAY={INITIAL_DELAY + 5.0} />
            </div>
        </main>
    )
}
