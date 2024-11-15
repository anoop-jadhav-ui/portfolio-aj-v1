import { useLottie } from 'lottie-react'
import React from 'react'
import { useTheme } from '../../../context/ThemeContext'
import './ColorPickerSelector.css'
import lottieData from './ColorSwatchIcon.json'
import { primaryColorList } from '../../../helpers/color'

const ColorPickerSelector = () => {
    const { setPrimaryColor, isMobile } = useTheme()

    const { View, setSpeed, play, setDirection } = useLottie(
        {
            animationData: lottieData,
            loop: false,
            autoplay: false,
        },
        {
            height: `${isMobile ? 28 : 40}px`,
            width: `${isMobile ? 28 : 40}px`,
        }
    )

    setSpeed(1)

    const onColorSelection: React.MouseEventHandler<HTMLUListElement> = (
        evt
    ) => {
        // @ts-ignore
        const newMainColor = evt.target.dataset.key
        const newColor = primaryColorList.find(
            (color) => color.main === newMainColor
        )
        if (newColor) setPrimaryColor(newColor)
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
                {primaryColorList.map((color) => (
                    <li
                        className="color-ball"
                        data-key={color.main}
                        key={color.main}
                        style={{
                            backgroundColor: color.main,
                        }}
                    ></li>
                ))}
            </ul>
        </div>
    )
}

export default ColorPickerSelector
