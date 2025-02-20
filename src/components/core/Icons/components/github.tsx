'use client'

import React from 'react'
import { useTheme } from 'next-themes'

interface GithubProps {
    size?: number
    href?: string
}
const Github: React.FC<GithubProps> = ({ size = 24, href = 'https://github.com/PepeuFBV' }) => {
    const { theme } = useTheme()

    let link: string = '/icons/github-mark.svg'
    if (theme === 'dark') link = '/icons/github-mark-white.svg'

    return (
        <a href={href} target='_blank' rel='noreferrer'>
            <img
                src={link}
                alt='github'
                width={`${size}px`}
                height={`${size}px`}
            />
        </a>
    )
}

export { Github }
