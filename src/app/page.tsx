import React from 'react'
import Home from '@/components/Home'

export default function Main() {
    return (
        <main className="grid grid-cols-2 h-screen w-full items-center justify-between my-10 py-20 px-56">
            <Home />
            <p className='w-full h-full'>right content</p>
        </main>
    )
}
