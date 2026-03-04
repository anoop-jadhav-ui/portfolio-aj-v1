import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'
import { Color, primaryColorList } from '../helpers/color'
import usePersistState from '../hooks/usePersistState'

interface ThemeContextType {
    darkMode: boolean
    setDarkMode: (mode: boolean) => void

    currentPrimaryColor: Color
    setPrimaryColor: (color: Color) => void

    isMobile: boolean
}

export const ThemeContext = createContext<ThemeContextType>(
    {} as ThemeContextType
)
export const useTheme = () => useContext(ThemeContext)

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentPrimaryColor, setPrimaryColor] = usePersistState<Color>(
        'primaryColor',
        primaryColorList[0]
    )

    const [darkMode, setDarkMode] = usePersistState<boolean>('darkMode', true)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.querySelector('body')?.classList.add('dark')
            document.querySelector('body')?.classList.remove('light')
        } else {
            document.querySelector('body')?.classList.add('light')
            document.querySelector('body')?.classList.remove('dark')
        }
    }, [darkMode])

    useEffect(() => {
        document.body.style.setProperty(
            '--primary-color',
            currentPrimaryColor.main
        )
        document.body.style.setProperty(
            '--primary-color-dark',
            currentPrimaryColor.dark
        )
        document.body.style.setProperty(
            '--primary-color-light',
            currentPrimaryColor.light
        )
    }, [currentPrimaryColor])

    return (
        <ThemeContext.Provider
            value={{
                darkMode: !!darkMode,
                setDarkMode,
                isMobile,
                currentPrimaryColor,
                setPrimaryColor,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
