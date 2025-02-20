'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface LinkedinProps {
    size?: number
}
const Linkedin: React.FC<LinkedinProps> = ({ size = 24 }) => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const iconLink: string = theme === 'dark' ? '/icons/linkedin.svg' : '/icons/linkedin-white.svg'

    return (
        <a href='https://www.linkedin.com/in/pedro-fbv/' target='_blank'>
            <img
                src={iconLink}
                alt='linkedin'
                width={`${size}px`}
                height={`${size}px`}
            />
        </a>
    )
}

export { Linkedin }
