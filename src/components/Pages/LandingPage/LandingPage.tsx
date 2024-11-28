import './LandingPage.css'

import React from 'react'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import { useTheme } from '../../../context/ThemeContext'
import LeftPane from '../../Molecules/LeftPane/LeftPane'
import MainBody from '../../Molecules/MainBody/MainBody'

export const LandingPage = () => {
    const { isMobile } = useTheme()
    const { leftPaneData } = useProfileDataContext()

    return (
        <>
            {!isMobile && leftPaneData && <LeftPane />}
            <MainBody />
        </>
    )
}

export default LandingPage
