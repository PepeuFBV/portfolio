'use client'

import React, { createContext, useState, useContext } from 'react'

const AppContext = createContext<any>(null)

interface AppProviderProps {
    children: React.ReactNode
}
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [languagePos, setLanguagePos] = useState<number>(0) // 0 = EN, 1 = PTBR

    const switchLanguage = () => {
        setLanguagePos(languagePos === 0 ? 1 : 0)
    }

    return (
        <AppContext.Provider value={{ languagePos, switchLanguage }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)
