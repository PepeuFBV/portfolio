'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface GithubProps {
    size?: number
    href?: string
}
const Github: React.FC<GithubProps> = ({ size = 24, href = 'https://github.com/PepeuFBV' }) => {
    const { theme } = useTheme()
    const [link, setLink] = useState('/icons/github-mark.svg')

    useEffect(() => {
        if (theme === 'dark') {
            setLink('/icons/github-mark-white.svg')
        } else {
            setLink('/icons/github-mark.svg')
        }
    }, [theme])

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
