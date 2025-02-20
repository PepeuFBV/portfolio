import React from 'react'

interface GithubProps {
    size?: number
    href?: string
}
const Github: React.FC<GithubProps> = ({ size = 24, href = 'https://github.com/PepeuFBV' }) => {
    return (
        <a href={href} target='_blank' rel='noreferrer'>
            <img
                src={'/icons/github-mark-white.svg'}
                alt='github'
                width={`${size}px`}
                height={`${size}px`}
            />
        </a>
    )
}

export { Github }
