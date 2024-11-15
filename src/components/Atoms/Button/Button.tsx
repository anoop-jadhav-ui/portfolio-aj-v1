import './Button.css'

import React, { useState } from 'react'
import useBrowserType from '../../../hooks/useBrowserType'

interface ButtonProps {
    label?: string
    onClick?: () => void
    variant?: 'neutral' | 'brand' | 'base'
    endIcon?: React.ReactNode
    type?: 'button' | 'submit' | 'reset' | undefined
    testID?: string
    className?: string
    tabIndex?: number
    disabled?: boolean
}

interface ClickPosition {
    x: number
    y: number
}

const Button = ({
    label,
    onClick,
    variant = 'brand',
    endIcon,
    type = 'button',
    testID,
    className,
    tabIndex,
    disabled = false,
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
            disabled={disabled}
        >
            {label && <span className="label">{label}</span>}
            {endIcon && <span className="icon">{endIcon}</span>}
        </button>
    )
}

export default Button
