import React from 'react'
import { useTranslation } from 'react-i18next'
interface LeftPaneMenuItemProps {
    label: string
    isSelected: boolean
    sectionClass: string
    icon: React.ReactNode
}
const LeftPaneItem = ({
    label,
    isSelected,
    sectionClass,
    icon,
}: LeftPaneMenuItemProps) => {
    const { t } = useTranslation()
    const scrollIntoSectionView = () => {
        let attempts = 0
        const maxAttempts = 12
        const delayMs = 80

        const scrollToSection = () => {
            const element = document.querySelector<HTMLElement>(
                `section.${sectionClass}`
            )
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                })
                return
            }

            if (attempts < maxAttempts) {
                attempts += 1
                window.setTimeout(scrollToSection, delayMs)
            }
        }

        scrollToSection()
    }

    return (
        <li className={`left-pane-item grey3 ${isSelected ? 'selected' : ''}`}>
            <button
                type="button"
                className="left-pane-item-trigger"
                onClick={scrollIntoSectionView}
                aria-label={t(label)}
            >
                {icon}
                {t(label)}
            </button>
        </li>
    )
}

export default LeftPaneItem
