import './Certifications.css'

import { ExternalLink } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import { CertificateDetails } from '../../../types/profileDataTypes'
import { sectionDetails } from '../../Molecules/LeftPane/leftPaneData'
import SectionWrapper from '../../Molecules/SectionWrapper/SectionWrapper'

const Certifications = () => {
    const {
        profileData: { certifications },
    } = useProfileDataContext()
    const { t } = useTranslation()

    return (
        <>
            <div className="section-title h2 bold">
                {sectionDetails.certifications.label}
                {sectionDetails.certifications.icon}
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
                                        className="certificate-link"
                                    >
                                        {t('viewCertification')}
                                        <ExternalLink size="1rem" />
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
    sectionDetails.certifications.class
)
