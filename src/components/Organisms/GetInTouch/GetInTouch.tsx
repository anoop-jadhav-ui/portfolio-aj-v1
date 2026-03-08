
import { useTranslation } from 'react-i18next'
import MessageForm from '../../Molecules/MessageForm/MessageForm'
import { sectionDetails } from '../../Molecules/LeftPane/leftPaneData'
import SectionWrapper from '../../Molecules/SectionWrapper/SectionWrapper'

const headingId = `${sectionDetails.getInTouch.class}-heading`

export const GetInTouch = () => {
    const { t } = useTranslation()
    return (
        <>
            <h2 id={headingId} className="section-title h2 bold">
                {t(sectionDetails.getInTouch.label)}
                {sectionDetails.getInTouch.icon}
            </h2>
            <div id="contact-form" className="subsection message-content">
                <div className="subsection-data">
                    <p className="subsection-title body-text">
                        {t('messageFormSubtitle')}
                    </p>
                    <MessageForm />
                </div>
            </div>
        </>
    )
}

export default SectionWrapper(
    GetInTouch,
    sectionDetails.getInTouch.class,
    headingId
)
