
import React, { useMemo, useRef } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useTheme } from '../../../context/ThemeContext'
import useScrollPosition from '../../../hooks/useScrollPosition'
// import { ColorPickerSimple } from '../../Atoms/ColorPickerSelector/ColorPickerSelector'
import { Logo } from '../../Atoms/Logo/Logo'

export default function Header() {
    const headerRef = useRef<HTMLElement>(null)
    const { darkMode, setDarkMode, isMobile } = useTheme()
    const { scrollPosition } = useScrollPosition()
    const { t } = useTranslation()
    const blogUrl = process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL ?? '#'

    const isOverlayHeader = useMemo(() => {
        if (headerRef.current) {
            const headerEle = headerRef.current.getBoundingClientRect()
            return headerEle.bottom < scrollPosition
        }
        return false
    }, [scrollPosition])

    const toDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const toggleIconColor = darkMode ? '#fafafa' : '#ff565a'

    return (
        <header
            className={`header ${isOverlayHeader ? 'overlayHeader' : ''}`}
            ref={headerRef}
        >
            <div className="header-wrapper">
                <Logo />
                <nav aria-label="Primary navigation">
                    <ul className="menu">
                        <li className="menuItem selected">
                            <Link href="/"> {t('home')}</Link>
                        </li>
                        <li className="menuItem">
                            <a
                                href={blogUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('blogs')}
                            </a>
                        </li>
                    {/* 
                    <div className="menuItem">
                        <ColorPickerSelector />
                    </div> */}
                        <li className="menuItem">
                            <div
                                className="darkModeSwitch"
                                title="Toggle dark mode"
                            >
                                <DarkModeSwitch
                                    checked={darkMode}
                                    onChange={toDarkMode}
                                    size={isMobile ? 20 : 28}
                                    sunColor={toggleIconColor}
                                    moonColor={toggleIconColor}
                                />
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
