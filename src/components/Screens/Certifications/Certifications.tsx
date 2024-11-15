import './Certifications.css'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import constants from '../../../helpers/constants'
import { CertificateDetails } from '../../../types/profileDataTypes'
import SectionWrapper from '../../Organisms/SectionWrapper/SectionWrapper'

const Certifications = () => {
    const {
        profileData: { certifications },
    } = useProfileDataContext()
    const { t } = useTranslation()
    return (
        <>
            <div className="section-title h2 bold">
                {t('sectionName.certifications')}
            </div>
            <div className="subsection certifications-content">
                {certifications.map(
                    (certificateDetail: CertificateDetails, key: number) => {
                        return (
                            <div className="subsection-data" key={String(key)}>
                                <span
                                    className="h3 grey1 bold"
                                    data-testid="name"
                                >
                                    {certificateDetail.name}
                                </span>
                                <div className="primary-color default-text">
                                    <a
                                        href={
                                            certificateDetail.urlToCertificate
                                        }
                                        target="_Blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t('viewCertification')}
                                    </a>
                                </div>
                                <div className="grey-1 body-text summary-text">
                                    {certificateDetail.summary}
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </>
    )
}

export default SectionWrapper(
    Certifications,
    constants.classNames.CERTIFICATIONS
)
