import React from 'react'
import '@/components/core/Footer/loading.css'
import { cn } from '@/utils/tailwind-merge'

interface FooterProps {
    className?: string
}
const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer className={cn('flex flex-row justify-between gap-4 pb-12', className)}>
            <div className='text-start text-sm text-zinc-500'>
                <p>Deployed in Vercel.</p>
                <p>Designed with Figma, built in NextJS with React, Typescript and TailwindCSS.</p>
                <p>Poppings is the font.</p>
            </div>
            <div className='loader'></div>
        </footer>
    )
}

export { Footer }
