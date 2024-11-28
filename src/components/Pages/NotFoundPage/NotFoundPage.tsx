import styles from './NotFoundPage.module.css'

import { House } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import Button from '../../Atoms/Button/Button'
import Header from '../../Molecules/Header/Header'

const NotFound = () => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <h1>404</h1>
            <p className={styles.message}>
                Oops! The page you are looking for doesn't exist or has been
                moved.
            </p>
            <Link to="/" className={styles.link}>
                <Button
                    variant="brand"
                    label="Go to Homepage"
                    endIcon={<House />}
                />
            </Link>
        </div>
    )
}

export default NotFound
