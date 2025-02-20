'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggleIcons } from '@/components/core/Icons/components/mode-toggle-icons'
import { useTheme } from 'next-themes'
import { useAppContext } from '@/context/context'
import { motion } from 'framer-motion'

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
        >
            <Button className='[&_svg]:size-6' variant="outline" size="icon" onClick={handleToggle}>
                <ModeToggleIcons />
            </Button>
        </motion.div>
    )
}

export { ModeToggle }