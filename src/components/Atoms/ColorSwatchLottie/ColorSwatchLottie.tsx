import { useLottie } from 'lottie-react'
import React, { useEffect } from 'react'
import lottieData from './ColorPicker.json'
import './ColorSwatchLottie.scss'

interface ColorSwatchLottieProps {
    color?: string
    size?: number
    isOpen: boolean
    onClick: () => void
    onBlur?: React.FocusEventHandler<HTMLAnchorElement>
}

const ColorSwatchLottie = ({
    color = 'var(--primary-color)',
    size = 28,
    isOpen,
    onClick,
    onBlur,
}: ColorSwatchLottieProps) => {
    const options = {
        animationData: lottieData,
        loop: false,
        autoplay: false,
    }

    const { View, play, setDirection, setSpeed } = useLottie(options, {
        height: `${size}px`,
        color,
    })

    setSpeed(8)

    const handleClick = () => {
        onClick()
    }

    useEffect(() => {
        if (isOpen) {
            setDirection(1)
            play()
        } else {
            setDirection(-1)
            play()
        }
    }, [isOpen])

    return (
        <a
            onClick={handleClick}
            onBlur={onBlur}
            tabIndex={0}
            style={{
                cursor: 'pointer',
            }}
            className="color-swatch-lottie"
        >
            {View}
        </a>
    )
}

export default ColorSwatchLottie
