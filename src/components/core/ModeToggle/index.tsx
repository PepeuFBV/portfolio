'use client'

import React, { useState, useEffect } from 'react'
import { ModeToggleIcons } from '@/components/core/Icons/components/mode-toggle-icons'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useAppContext } from '@/context/context'

const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    const { languagePos } = useAppContext()
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        setIsDarkMode(theme === 'dark')
    }, [theme])

    const handleToggle = () => {
        const newTheme = isDarkMode ? 'light' : 'dark'
        setTheme(newTheme)
        setIsDarkMode(!isDarkMode)
    }

    return (
        <Button className='[&_svg]:size-6' variant="outline" size="icon" onClick={handleToggle}>
            <ModeToggleIcons />
        </Button>
    )
}

export { ModeToggle }