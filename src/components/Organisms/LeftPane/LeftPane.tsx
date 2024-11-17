import './LeftPane.css'

import { Play } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import { useSectionInViewContext } from '../../../context/SectionInViewContext'
import usePersistState from '../../../hooks/usePersistState'
import LeftPaneItem from '../../Atoms/LeftPaneItem/LeftPaneItem'

const LeftPane = () => {
    const { t } = useTranslation()
    const { leftPaneData } = useProfileDataContext()
    const { currentSectionInView } = useSectionInViewContext()
    const [leftPaneVisible, setLeftPaneVisibility] = usePersistState(
        'leftPaneVisibility',
        false
    )

    const toggleLeftPane = () => {
        setLeftPaneVisibility(!leftPaneVisible)
    }

    return (
        <div
            className={`left-pane position-fixed ${
                leftPaneVisible ? 'open' : 'closed'
            }`}
        >
            <div className="left-pane-header-container">
                <div className="left-pane-header bold">
                    {t('skipToSection')}
                </div>
                <div
                    className="toggle-button"
                    title="Toggle sidebar"
                    onClick={toggleLeftPane}
                    onKeyDown={toggleLeftPane}
                    tabIndex={0}
                    aria-label="skip to section toggle"
                >
                    <Play className="arrow" />
                </div>
            </div>

            <ul className="menu body-text grey5">
                {leftPaneData.map((leftPaneItem) => {
                    return (
                        <LeftPaneItem
                            key={leftPaneItem.id}
                            label={leftPaneItem.label}
                            isSelected={
                                currentSectionInView === leftPaneItem.class
                            }
                            sectionClass={leftPaneItem.class}
                            icon={leftPaneItem.icon}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default LeftPane
export { LeftPane }
