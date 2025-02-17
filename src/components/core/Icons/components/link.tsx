import React from 'react'

interface LinkProps {
    size?: number
}
const Link: React.FC<LinkProps> = ({ size = 24 }) => {
    return (
        <div>
            <img
                src={'/icons/link.svg'}
                alt='link'
                width={`${size}px`}
                height={`${size}px`}
            />
        </div>
    )
}

export { Link }
