
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'
import { ArrowRight, Calendar } from 'lucide-react'
import moment from 'moment/moment'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import { ExperienceDetails } from '../../../types/profileDataTypes'
import Tag from '../../Atoms/Tag/Tag'
import { sectionDetails } from '../../Molecules/LeftPane/leftPaneData'
import SectionVisibilityHOC from '../../Molecules/SectionWrapper/SectionWrapper'

const headingId = `${sectionDetails.experience.class}-heading`

const sanitizeHtml = (rawHtml: string) => {
    const sanitizer = DOMPurify as unknown as {
        sanitize?: (html: string) => string
    }
    return typeof sanitizer.sanitize === 'function'
        ? sanitizer.sanitize(rawHtml)
        : rawHtml
}

const parseExperienceDate = (date: string) =>
    moment(date, ['DD MMMM YYYY', 'D MMMM YYYY', moment.ISO_8601], 'en', true)

const WorkExperience = () => {
    const {
        profileData: { experience },
    } = useProfileDataContext()
    const { t } = useTranslation()

    const calculatedExperience = useMemo((): Array<ExperienceDetails> => {
        return experience.map((exp): ExperienceDetails => {
            const fromDate = parseExperienceDate(exp.fromDate)
            const toDate =
                exp.toDate !== 'Present'
                    ? parseExperienceDate(exp.toDate)
                    : moment()

            const years = toDate.diff(fromDate, 'year')
            fromDate.add(years, 'years')
            const months = toDate.diff(fromDate, 'months')
            fromDate.add(months, 'months')

            let yearsOfExp = ''
            let monthsOfExp = ''

            if (years > 1) {
                yearsOfExp = `${years} years`
            } else if (years === 1) {
                yearsOfExp = `${years} year`
            }

            if (months > 1) {
                monthsOfExp = `${months} months`
            } else if (months == 1) {
                monthsOfExp = `${months} month`
            }

            exp.totalYears = `${yearsOfExp} ${monthsOfExp}`
            return exp
        })
    }, [experience])

    return (
        <>
            <h2 id={headingId} className="section-title h2 bold">
                {t(sectionDetails.experience.label)}
                {sectionDetails.experience.icon}
            </h2>
            <div className="subsection work-experience-content">
                {calculatedExperience.map((experienceDetail, key) => {
                    return (
                        <div
                            key={String(key)}
                            className="subsection-data stepper"
                        >
                            <div className="stepper-icon">
                                <div className="stepper-dot"></div>
                                {key !== calculatedExperience.length - 1 && (
                                    <div className="stepper-line"></div>
                                )}
                            </div>
                            <div className="stepper-content">
                                <div className="experience-header">
                                    <div className="h3 grey1 bold">
                                        {experienceDetail.name}
                                    </div>
                                    <div className="label primary-color">
                                        {experienceDetail.totalYears.trim() !==
                                            '' && (
                                            <Tag
                                                label={
                                                    experienceDetail.totalYears
                                                }
                                            />
                                        )}
                                        <span className="date">
                                            <Calendar size="0.8125rem" />
                                            <span>
                                                {experienceDetail.fromDate}
                                            </span>
                                            <ArrowRight size="0.8125rem" />
                                            <span>
                                                {experienceDetail.toDate.includes(
                                                    'Present'
                                                )
                                                    ? experienceDetail.toDate
                                                    : experienceDetail.toDate.substring(
                                                          3
                                                      )}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="summary list grey-1 body-text">
                                    {parse(
                                        sanitizeHtml(experienceDetail.summary)
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SectionVisibilityHOC(
    WorkExperience,
    sectionDetails.experience.class,
    headingId
)
