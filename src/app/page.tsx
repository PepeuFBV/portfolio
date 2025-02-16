import React from 'react'
import { Home } from '@/components/core/Home'
import { AboutMe } from '@/components/core/AboutMe'

export default function Main() {
    return (
        <main className="flex flex-col lg:flex-row h-screen w-full items-center px-32 pt-36 pb-12 lg:pl-56 gap-36">
            <div className='lg:fixed lg:h-[83%]'>
                <Home className='h-full' />
            </div>
            <div className="lg:w-1/2 ml-auto h-full flex flex-col gap-40">
                <AboutMe />
            </div>
        </main>
    )
}
