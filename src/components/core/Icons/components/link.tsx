'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { cn } from '@/utils/tailwind-merge'
import loadAssetUrl from '@/utils/load-asset-url'

interface LinkProps {
    className?: string
    size?: number
    href?: string
}
const Link: React.FC<LinkProps> = ({ className = '', size = 24, href }) => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    let link: string = loadAssetUrl('/icons/link-white.svg')
    if (theme === 'dark') link = loadAssetUrl('/icons/link.svg')

    if (href) {
        return (
            <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className={cn('', className)}
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
