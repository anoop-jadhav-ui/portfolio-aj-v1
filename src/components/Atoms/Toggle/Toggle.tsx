import './Toggle.scss'
import React from 'react'

interface ToggleProps {
    name?: string
    checked: boolean
    onChange: () => void
    onLabel: string
    offLabel: string
}

const Toggle = ({
    name = 'Toggle',
    checked = false,
    onChange,
    onLabel = 'ON',
    offLabel = 'OFF',
}: ToggleProps) => {
    return (
        <div className="toggle-wrapper">
            <div className={`${checked && 'highlight'} option`}>
                <label htmlFor="on">{onLabel}</label>
                <input
                    id="on"
                    type="radio"
                    name={name}
                    checked={checked}
                    onChange={onChange}
                />
            </div>
            <div className={`${!checked && 'highlight'} option`}>
                <label htmlFor="off">{offLabel}</label>
                <input
                    id="off"
                    type="radio"
                    name={name}
                    checked={!checked}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Toggle
