'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { cn } from '@/utils/tailwind-merge'

interface LinkProps {
    className?: string
    size?: number
    href?: string
}
const Link: React.FC<LinkProps> = ({ className = '', size = 24, href }) => {
    const { theme } = useTheme()

    let link: string = '/icons/link-white.svg'
    if (theme === 'dark') link = '/icons/link.svg'

    if (href) {
        return (
            <a
                href={href}
                target='_blank'
                rel='noreferrer'
            >
                <img
                    src={link}
                    alt='link'
                    width={`${size}px`}
                    height={`${size}px`}
                />
            </a>
        )
    } else {
        return (
            <div className={cn('', className)}>
                <img
                    src={link}
                    alt='link'
                    width={`${size}px`}
                    height={`${size}px`}
                />
            </div>
        )
    }
}

export { Link }
