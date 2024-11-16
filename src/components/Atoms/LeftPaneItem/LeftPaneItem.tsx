import React, { MouseEventHandler } from 'react'
import './LeftPaneItem.css'
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
    const scrollIntoSectionView = (): void => {
        const element = document.getElementsByClassName(`${sectionClass}`)
        if (element[0]) {
            element[0].scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            })
        }
    }
    return (
        <li
            className={`left-pane-item grey3 ${isSelected && 'selected'}`}
            onClick={
                scrollIntoSectionView as unknown as MouseEventHandler<HTMLLIElement>
            }
        >
            {icon}
            {label}
        </li>
    )
}

export default LeftPaneItem
