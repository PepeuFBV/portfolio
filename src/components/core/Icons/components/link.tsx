import React from 'react'
import { cn } from '@/utils/tailwind-merge'

interface LinkProps {
    className?: string
    size?: number
    github?: boolean
}
const Link: React.FC<LinkProps> = ({ className = '', size = 24, github = false }) => {
    if (!github) {
        return (
            <div className={cn('', className)}>
                <img
                    src={'/icons/link.svg'}
                    alt='link'
                    width={`${size}px`}
                    height={`${size}px`}
                />
            </div>
        )
    } else {
        return (
            <div className={cn('h-full flex justify-center items-center', className)}>
                <img
                    src={'/icons/github-mark-white.svg'}
                    alt='github'
                    width={`${size}px`}
                    height={`${size}px`}
                />
            </div>
        )
    }
}

export { Link }
