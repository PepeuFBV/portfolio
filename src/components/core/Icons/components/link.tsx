import React from 'react'
import { cn } from '@/utils/tailwind-merge'

interface LinkProps {
    className?: string
    size?: number
    href?: string
}
const Link: React.FC<LinkProps> = ({ className = '', size = 24, href }) => {
    if (href) {
        return (
            <a
                href={href}
                target='_blank'
                rel='noreferrer'
            >
                <img
                    src={'/icons/link.svg'}
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
                    src={'/icons/link.svg'}
                    alt='link'
                    width={`${size}px`}
                    height={`${size}px`}
                />
            </div>
        )
    }
}

export { Link }
