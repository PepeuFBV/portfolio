import React from 'react'

interface LinkedinProps {
    size?: number
}
const Linkedin: React.FC<LinkedinProps> = ({ size = 24 }) => {
    return (
        <a href='https://www.linkedin.com/in/pedro-fbv/' target='_blank'>
            <img
                src={'/icons/linkedin.svg'}
                alt='github'
                width={`${size}px`}
                height={`${size}px`}
            />
        </a>
    )
}

export { Linkedin }
