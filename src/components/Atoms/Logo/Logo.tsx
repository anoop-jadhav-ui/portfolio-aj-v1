import './Logo.css'

import React from 'react'
import { Link } from 'react-router'

export function Logo() {
    return (
        <Link className="logo" to="/">
            <div>AnoopJadhav</div>
            <div>.</div>
        </Link>
    )
}
