import './Button.scss'

import React, { useState } from 'react'
import { IconType } from 'react-icons'
import useBrowserType from '../../../hooks/useBrowserType'

interface ButtonProps {
    label?: string
    onClick?: () => void
    variant?: 'neutral' | 'brand' | 'base'
    Icon?: IconType
    type?: 'button' | 'submit' | 'reset' | undefined
    testID?: string
    className?: string
    tabIndex?: number
}

interface ClickPosition {
    x: number
    y: number
}

const Button = ({
    label,
    onClick,
    variant = 'brand',
    Icon,
    type = 'button',
    testID,
    className,
    tabIndex,
}: ButtonProps) => {
    const [clickPosition, setCickPosition] = useState<ClickPosition>()

    const animateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget.getBoundingClientRect()
        setCickPosition({
            x: e.clientX - button.x,
            y: e.clientY - button.y,
        })
        onClick?.()
    }

    const browser = useBrowserType()

    return (
        <div className="buttonContainer">
            <button
                onClick={animateClick}
                className={`${variant} ${browser} button ${className} ${
                    label ? 'with-label' : 'no-label'
                }`}
                type={type}
                data-testid={testID}
                style={
                    {
                        '--button-x': clickPosition?.x,
                        '--button-y': clickPosition?.y,
                    } as React.CSSProperties
                }
                tabIndex={tabIndex}
            >
                {label && <span className="label">{label}</span>}
                {Icon && (
                    <span className="icon">
                        <Icon />
                    </span>
                )}
            </button>
        </div>
    )
}

export default Button
