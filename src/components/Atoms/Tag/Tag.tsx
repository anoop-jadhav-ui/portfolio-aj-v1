import React from 'react'
import './Tag.css'

const Tag = ({ label }: { label: string }) => {
    return (
        <div className="tag" title={label}>
            {label}
        </div>
    )
}

export default Tag
