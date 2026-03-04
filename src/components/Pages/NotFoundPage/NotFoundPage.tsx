import styles from './NotFoundPage.module.css'

import { House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Button from '../../Atoms/Button/Button'
import Header from '../../Molecules/Header/Header'

const NotFound = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className="app-container">
                <Header />
                <div className={styles.pageContainer}>
                    <h1>404</h1>
                    <p className={styles.message}>
                        Oops! The page you are looking for doesn't exist or has
                        been moved.
                    </p>
                    <Link href="/" className={styles.link}>
                        <Button
                            variant="brand"
                            label="Go to Homepage"
                            endIcon={<House />}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
