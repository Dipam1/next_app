'use client'

import React, { createContext, useContext } from 'react'

export const ThemeContext = createContext<{ isDarkMode: boolean; toggleTheme: () => void }>({
    isDarkMode: false,
    toggleTheme: () => { },
})

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}
