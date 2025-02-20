'use client'

import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
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

    const text = {
        toggle: ['Toggle theme', 'Alternar tema'],
        light: ['Light', 'Claro'],
        dark: ['Dark', 'Escuro'],
    }

    const handleToggle = () => {
        const newTheme = isDarkMode ? 'light' : 'dark'
        setTheme(newTheme)
        setIsDarkMode(!isDarkMode)
    }

    return (
        <Button variant="outline" size="icon" onClick={handleToggle}>
            {isDarkMode ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">{text.toggle[languagePos]}</span>
        </Button>
    )
}

export { ModeToggle }