import { useLottie } from 'lottie-react'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import lottieData from './colorPickerLottie.json'
import './ColorPickerSelector.scss'

const hueList = [0, 220, 280, 315]

const ColorPickerSelector = () => {
    const { setColorHue, isMobile } = useTheme()
    const [isColorPickerOpen, toggleColorPicker] = useState(false)

    const options = {
        animationData: lottieData,
        loop: false,
        autoplay: false,
    }

    const { View, play, setDirection, setSpeed } = useLottie(options, {
        height: `${isMobile ? 34 : 44}px`,
    })

    setSpeed(8)

    const onColorSelection: React.MouseEventHandler<HTMLUListElement> = (
        evt
    ) => {
        // @ts-ignore
        const newHue = Number(evt.target.dataset.key)
        if (newHue >= 0) {
            setColorHue(newHue)
        }
    }

    useEffect(() => {
        if (isColorPickerOpen) {
            setDirection(1)
            play()
        } else {
            setDirection(-1)
            play()
        }
    }, [isColorPickerOpen])

    return (
        <div className="color-picker-container">
            <a
                tabIndex={0}
                onClick={() => toggleColorPicker((prevValue) => !prevValue)}
                onBlur={(evt) => {
                    if (!evt.relatedTarget) {
                        toggleColorPicker(false)
                    }
                }}
                className="selected-color"
            >
                {View}
            </a>
            {isColorPickerOpen && (
                <ul
                    onBlur={() => toggleColorPicker(false)}
                    className="color-list"
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
