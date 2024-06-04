'use client'
import { useState, useEffect } from 'react'

const ButtonChangeTheme = () => {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])
    

    return (
        <button
            onClick={toggleTheme}
            className='bg-gray-800 p-3'>
            Toggle Mode
        </button>
    )
}

export default ButtonChangeTheme