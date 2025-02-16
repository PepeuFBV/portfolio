import React from 'react'
import Home from '@/components/core/Home'

export default function Main() {
    return (
        <main className="grid grid-cols-2 h-screen w-full items-center justify-between pt-28 pb-12 px-56">
            <Home />
            <p className='w-full h-full'>right content</p>
        </main>
    )
}
