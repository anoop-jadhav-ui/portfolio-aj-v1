import { useLottie } from 'lottie-react'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext'
import './ColorPickerSelector.scss'
import lottieData from './ColorSwatchIcon.json'

const hueList = [0, 220, 280, 315]

const ColorPickerSelector = () => {
    const { setColorHue, isMobile } = useTheme()

    const options = {
        animationData: lottieData,
        loop: false,
        autoplay: false,
    }

    const { View, setSpeed, play, setDirection } = useLottie(options, {
        height: `${isMobile ? 34 : 44}px`,
    })

    setSpeed(1)

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
        <div
            className="color-picker-container"
            onMouseEnter={() => {
                setDirection(1)
                play()
            }}
            onMouseLeave={() => {
                setDirection(-1)
                play()
            }}
        >
            <a tabIndex={0} className="selected-color">
                {View}
            </a>
            <ul className="color-list" onClick={onColorSelection} tabIndex={0}>
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
        </div>
    )
}

export default ColorPickerSelector
