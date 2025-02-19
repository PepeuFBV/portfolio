'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { cn } from '@/utils/tailwind-merge'

interface MoveLeftProps {
    className?: string
    size?: number
    animate?: boolean
    animationVariants: Variants
}
const MoveLeft: React.FC<MoveLeftProps> = ({ className = '', size = 24, animate = false, animationVariants }) => {
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
                    src={'/icons/move-left.svg'}
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
                    src={'/icons/move-left.svg'}
                    alt='move-left'
                    width={`${size}px`}
                    height={`${size}px`}
                />
            </motion.div>
        )
    }
}

export { MoveLeft }
