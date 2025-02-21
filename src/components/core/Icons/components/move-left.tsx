'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/utils/tailwind-merge'

interface MoveLeftProps {
    className?: string
    size?: number
    animate?: boolean
    animationVariants: Variants
}
const MoveLeft: React.FC<MoveLeftProps> = ({ className = '', size = 24, animate = false, animationVariants }) => {
    const { theme } = useTheme()
    const [imageLink, setImageLink] = useState<string>('')

    useEffect(() => {
        setImageLink(theme === 'dark' ? '/icons/move-left.svg' : '/icons/move-left-white.svg')
    }, [theme])

    if (animate) {
        if (!animationVariants) {
            throw new Error('The animation prop is required when animate is true')
        }
        return (
            <motion.div
                variants={animationVariants}
                className={cn(className)}
            >
                <img
                    src={imageLink}
                    alt='move-left'
                    width={`${size}px`}
                    height={`${size}px`}
                />
            </motion.div>
        )
    } else {
        return (
            <motion.div
                variants={animationVariants}
                className={cn(className)}
            >
                <img
                    src={imageLink}
                    alt='move-left'
                    width={`${size}px`}
                    height={`${size}px`}
                />
            </motion.div>
        )
    }
}

export { MoveLeft }
