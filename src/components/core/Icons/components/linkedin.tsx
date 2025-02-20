'use client'

import { useTheme } from 'next-themes'
import React from 'react'

interface LinkedinProps {
    size?: number
}
const Linkedin: React.FC<LinkedinProps> = ({ size = 24 }) => {
    const { theme } = useTheme()

    const iconLink: string = theme === 'dark' ? '/icons/linkedin.svg' : '/icons/linkedin-white.svg'

    return (
        <a href='https://www.linkedin.com/in/pedro-fbv/' target='_blank'>
            <img
                src={iconLink}
                alt='github'
                width={`${size}px`}
                height={`${size}px`}
            />
        </a>
    )
}

export { Linkedin }
