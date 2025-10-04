import './Summary.css'

import DOMPurify from 'dompurify'
import parse from 'html-react-parser'
import moment from 'moment/moment'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import { useTheme } from '../../../context/ThemeContext'
import ContactMeButton from '../../Molecules/ContactMeButton/ContactMeButton'
import DownloadCVButton from '../../Molecules/DownloadCVButton/DownloadCVButton'
import { sectionDetails } from '../../Molecules/LeftPane/leftPaneData'
import SectionVisibilityHOC from '../../Molecules/SectionWrapper/SectionWrapper'
import portfolioImage from '/images/portfolio-app-img.webp'

const Summary = () => {
    const { profileData } = useProfileDataContext()
    const { darkMode } = useTheme()
    const { overview, experience } = profileData
    const { t } = useTranslation()

    const totalExperience = useMemo((): string => {
        try {
            const totalDifference = experience
                .map((exp) => {
                    const fromDate = moment(exp.fromDate)
                    const toDate =
                        exp.toDate !== 'Present' ? moment(exp.toDate) : moment()
                    return moment(toDate).diff(fromDate, 'year', true)
                })
                .reduce((a, b) => a + b)

            const totalYears = Math.floor(totalDifference)
            // const totalMonths = Math.round((totalDifference - totalYears) * 12)

            // if (totalMonths === 0) {
            //     return `${totalYears} years`
            // }

            // return `${totalYears} years ${totalMonths} ${totalMonths > 1 ? 'months' : 'month'}`
            return `${totalYears} years`
        } catch (err) {
            return String(moment().year() - 2014)
        }
    }, [experience])

    const overviewSummaryHTML = overview.summary.replace(
        '{totalYearsOfExperience}',
        totalExperience
    )

    const purifiedHTML = DOMPurify.sanitize(overviewSummaryHTML)

    return (
        <div className="summary-mobile summary-section">
            <div className="mainlogo-wrapper">
                <img
                    src={portfolioImage}
                    className="mainlogo"
                    alt="mi Baburao"
                    loading="eager"
                />
                <svg
                    role="img"
                    aria-label="ring"
                    className="ring ring-1"
                    width="328"
                    height="328"
                    viewBox="0 0 328 328"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M275.182 48.9409C277.867 51.5359 280.461 54.224 282.96 57M74.5431 31.325C71.3944 33.4522 68.3255 35.6886 65.3419 38.0286C60.9794 41.45 56.7991 45.0931 52.8179 48.9409C49.2109 52.4271 45.7674 56.0814 42.5 59.891C39.4475 63.4501 36.5488 67.1448 33.8139 70.9649M10.7899 117.738C9.82602 120.934 8.95946 124.173 8.19363 127.45M224.831 15.9693C220.161 14.0482 215.38 12.3416 210.5 10.8619C207.309 9.8943 204.077 9.02373 200.805 8.25358C193.23 6.47036 185.448 5.22547 177.5 4.56149C173.049 4.18966 168.547 4 164 4C157.571 4 151.231 4.37918 145 5.11639C140.277 5.67522 135.617 6.43979 131.029 7.40088C126.444 8.36134 121.931 9.51806 117.5 10.8619C112.62 12.3416 107.839 14.0482 103.169 15.9693M304.464 240.677C307.492 235.142 310.203 229.408 312.571 223.5C314.016 219.896 315.333 216.228 316.517 212.5C317.763 208.58 318.861 204.594 319.806 200.55C321.222 194.491 322.293 188.301 322.999 182C323.66 176.091 324 170.085 324 164C324 157.571 323.621 151.231 322.884 145M286.224 267.259C283.526 270.449 280.706 273.531 277.771 276.5C274.179 280.132 270.415 283.592 266.492 286.868M200.805 319.746C194.986 321.116 189.045 322.168 183 322.884C176.769 323.621 170.429 324 164 324C157.571 324 151.231 323.621 145 322.884C140.277 322.325 135.617 321.56 131.029 320.599C124.304 319.19 117.734 317.359 111.348 315.135M89.623 305.698C84.4207 302.962 79.3875 299.948 74.5431 296.675C71.3944 294.548 68.3255 292.311 65.3419 289.971M27.695 247.834C25.1036 243.63 22.7013 239.296 20.5 234.846C18.7576 231.323 17.141 227.727 15.6562 224.064C14.1223 220.279 12.729 216.422 11.4828 212.5C10.2373 208.58 9.13875 204.594 8.19363 200.55C6.77805 194.491 5.70667 188.301 5.00123 182C4.33972 176.091 4 170.085 4 164C4 159.793 4.16233 155.625 4.48108 151.5M312.571 104.5C311.073 100.762 309.437 97.0928 307.671 93.5C305.82 89.7365 303.827 86.0562 301.696 82.4665C300.295 80.1045 298.834 77.7816 297.316 75.5"
                        stroke={darkMode ? 'var(--grey8)' : 'var(--grey8)'}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                <svg
                    role="img"
                    aria-label="ring"
                    className="ring ring-2"
                    width="328"
                    height="328"
                    viewBox="0 0 328 328"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M275.182 48.9409C277.867 51.5359 280.461 54.224 282.96 57M74.5431 31.325C71.3944 33.4522 68.3255 35.6886 65.3419 38.0286C60.9794 41.45 56.7991 45.0931 52.8179 48.9409C49.2109 52.4271 45.7674 56.0814 42.5 59.891C39.4475 63.4501 36.5488 67.1448 33.8139 70.9649M10.7899 117.738C9.82602 120.934 8.95946 124.173 8.19363 127.45M224.831 15.9693C220.161 14.0482 215.38 12.3416 210.5 10.8619C207.309 9.8943 204.077 9.02373 200.805 8.25358C193.23 6.47036 185.448 5.22547 177.5 4.56149C173.049 4.18966 168.547 4 164 4C157.571 4 151.231 4.37918 145 5.11639C140.277 5.67522 135.617 6.43979 131.029 7.40088C126.444 8.36134 121.931 9.51806 117.5 10.8619C112.62 12.3416 107.839 14.0482 103.169 15.9693M304.464 240.677C307.492 235.142 310.203 229.408 312.571 223.5C314.016 219.896 315.333 216.228 316.517 212.5C317.763 208.58 318.861 204.594 319.806 200.55C321.222 194.491 322.293 188.301 322.999 182C323.66 176.091 324 170.085 324 164C324 157.571 323.621 151.231 322.884 145M286.224 267.259C283.526 270.449 280.706 273.531 277.771 276.5C274.179 280.132 270.415 283.592 266.492 286.868M200.805 319.746C194.986 321.116 189.045 322.168 183 322.884C176.769 323.621 170.429 324 164 324C157.571 324 151.231 323.621 145 322.884C140.277 322.325 135.617 321.56 131.029 320.599C124.304 319.19 117.734 317.359 111.348 315.135M89.623 305.698C84.4207 302.962 79.3875 299.948 74.5431 296.675C71.3944 294.548 68.3255 292.311 65.3419 289.971M27.695 247.834C25.1036 243.63 22.7013 239.296 20.5 234.846C18.7576 231.323 17.141 227.727 15.6562 224.064C14.1223 220.279 12.729 216.422 11.4828 212.5C10.2373 208.58 9.13875 204.594 8.19363 200.55C6.77805 194.491 5.70667 188.301 5.00123 182C4.33972 176.091 4 170.085 4 164C4 159.793 4.16233 155.625 4.48108 151.5M312.571 104.5C311.073 100.762 309.437 97.0928 307.671 93.5C305.82 89.7365 303.827 86.0562 301.696 82.4665C300.295 80.1045 298.834 77.7816 297.316 75.5"
                        stroke={darkMode ? 'var(--grey8)' : 'var(--grey8)'}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="bold primary-color hello">{t('hello')}</div>
            <h1 className="h1 bold main-title grey-1 text-cursor">
                {overview.name}
            </h1>
            <div className="body-text summary-text">{parse(purifiedHTML)}</div>
            <div className="summary-buttons">
                <DownloadCVButton />
                <ContactMeButton />
            </div>
        </div>
    )
}

export default SectionVisibilityHOC(Summary, sectionDetails.summary.class)
