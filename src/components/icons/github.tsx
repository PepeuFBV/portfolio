import React from 'react'

interface GithubProps {
    size?: number
}
const Github: React.FC<GithubProps> = ({ size = 24 }) => {
    return (
        <a href='https://github.com/PepeuFBV' target='_blank'>
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
