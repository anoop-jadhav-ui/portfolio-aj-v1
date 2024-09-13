import React, { useState } from 'react'
import { HiColorSwatch } from 'react-icons/hi'
import { useTheme } from '../../../context/ThemeContext'
import './ColorPickerSelector.scss'

const hueList = [0, 45, 90, 135, 180, 225, 270, 315]

const ColorPickerSelector = () => {
    const { setColorHue } = useTheme()
    const [isColorPickerOpen, toggleColorPicker] = useState(false)

    const onColorSelection: React.MouseEventHandler<HTMLUListElement> = (
        evt
    ) => {
        // @ts-ignore
        const newHue = Number(evt.target.dataset.key)
        if (newHue >= 0) {
            setColorHue(newHue)
        }
    }

    return (
        <div className="color-picker-container">
            <a
                className="selected-color"
                onClick={() => toggleColorPicker((prevValue) => !prevValue)}
                onBlur={(evt) => {
                    if (!evt.relatedTarget) {
                        toggleColorPicker(false)
                    }
                }}
                tabIndex={0}
            >
                <HiColorSwatch size={28} color="var(--primary-color)" />
            </a>
            {isColorPickerOpen && (
                <ul
                    onBlur={() => toggleColorPicker(false)}
                    className="color-picker"
                    onClick={onColorSelection}
                    tabIndex={0}
                >
                    {hueList.map((hue) => (
                        <li
                            className="color-ball"
                            data-key={hue}
                            key={hue}
                            style={
                                {
                                    backgroundColor: `  hsla(${hue},
                                                        var(--primary-saturation),
                                                        var(--primary-light),
                                                        var(--primary-alpha))`,
                                } as any
                            }
                        ></li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ColorPickerSelector
