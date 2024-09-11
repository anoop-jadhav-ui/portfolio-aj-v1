import './BarGraph.scss'
import React from 'react'

interface BarGraphProps {
    value: string
    className?: string
    animate?: boolean
}
const BarGraph = ({ value, className = '', animate }: BarGraphProps) => {
    const valuePercentage = `${value}%`

    return (
        <div className={`bar-graph ${className}`} data-testid="bar-graph">
            <div className="marker marker-1"></div>
            <div className="marker marker-2"></div>
            <div className="marker marker-3"></div>
            <div className="marker marker-4"></div>
            {value ? (
                <div
                    data-testid="bar"
                    className="filled"
                    title={String((Number(value) * 5) / 100) + '☆'}
                    style={{ width: animate ? valuePercentage : '0%' }}
                />
            ) : (
                ''
            )}
        </div>
    )
}

export default BarGraph
