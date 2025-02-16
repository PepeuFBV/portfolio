import React from 'react'
import { Home } from '@/components/core/Home'
import { AboutMe } from '@/components/core/AboutMe'

export default function Main() {
    return (
        <main className="flex h-screen w-full items-center pt-28 pb-12 pl-56 pr-32 gap-36">
            <div className='fixed h-[84%]'>
                <Home className='h-full' />
            </div>
            <div className="w-1/2 ml-auto h-full">
                <AboutMe />
                <AboutMe />
                <AboutMe />
                <AboutMe />
                <AboutMe />
                <AboutMe />
                <AboutMe />
            </div>
        </main>
    )
}
