import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'
import { isMobile as isDeviceMobile } from 'react-device-detect'
import usePersistState from '../hooks/usePersistState'

interface ThemeContextType {
    darkMode: boolean
    setDarkMode: (mode: boolean) => void

    currentPrimaryColor: string
    setPrimaryColor: (color: string) => void

    isMobile: boolean

    colorList: string[]
}

export const ThemeContext = createContext<ThemeContextType>(
    {} as ThemeContextType
)
export const useTheme = () => useContext(ThemeContext)

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [colorList] = useState(['#FF565A', '#488CF2', '#C657F2', '#FF57CC'])

    const [currentPrimaryColor, setPrimaryColor] = usePersistState<string>(
        'primaryColor',
        colorList[0]
    )

    const [darkMode, setDarkMode] = usePersistState<boolean>('darkMode', true)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        setIsMobile(isDeviceMobile)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.querySelector('body')?.classList.add('dark')
            document.querySelector('body')?.classList.remove('light')
        } else {
            document.querySelector('body')?.classList.add('light')
            document.querySelector('body')?.classList.remove('dark')
        }
        console.log('color scheme', darkMode ? '🌑' : '🌞')
    }, [darkMode])

    useEffect(() => {
        document.body.style.setProperty('--primary-color', currentPrimaryColor)
    }, [currentPrimaryColor])

    return (
        <ThemeContext.Provider
            value={{
                darkMode: !!darkMode,
                setDarkMode,
                isMobile,
                currentPrimaryColor,
                setPrimaryColor,
                colorList,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
