
import { useCallback, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useSectionInViewContext } from '../../../context/SectionInViewContext'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import constants from '../../../helpers/constants'

const SectionInViewIdentifier = ({ sectionName }: { sectionName: string }) => {
    const { setCurrentSectionInView } = useSectionInViewContext()
    const compRef = useRef<HTMLDivElement>(null)

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setCurrentSectionInView(sectionName)
                }
            })
        },
        [sectionName, setCurrentSectionInView]
    )

    useEffect(() => {
        let observer: IntersectionObserver
        if (compRef.current) {
            observer = new IntersectionObserver(handleIntersection)
            observer.observe(compRef.current)
        }
        return () => {
            observer?.disconnect()
        }
    }, [handleIntersection])

    return <div ref={compRef} className="section-floating-element" />
}

const SectionWrapper =
    (
        Component: () => JSX.Element,
        sectionName: string,
        headingId?: string
    ) =>
    () => {
        const {
            currentSectionInView,
            setSkillsSectionVisited,
            isSkillsSectionVisited,
        } = useSectionInViewContext()
        const { t } = useTranslation()

        useEffect(() => {
            if (
                currentSectionInView === constants.classNames.SKILLS &&
                !isSkillsSectionVisited
            ) {
                setSkillsSectionVisited(true)
            }
        }, [
            currentSectionInView,
            isSkillsSectionVisited,
            setSkillsSectionVisited,
        ])

        return (
            <ErrorBoundary errorMessage={t('sectionLoadError')}>
                <section
                    className={`${sectionName} section ${
                        sectionName === currentSectionInView
                            ? 'section-in-view'
                            : ''
                    } ${isSkillsSectionVisited ? 'visited' : ''}`}
                    aria-labelledby={headingId}
                >
                    <SectionInViewIdentifier sectionName={sectionName} />
                    <Component />
                </section>
            </ErrorBoundary>
        )
    }

export default SectionWrapper
