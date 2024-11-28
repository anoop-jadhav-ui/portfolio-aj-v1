import './MainBody.css'

import React, { lazy, Suspense } from 'react'
import { useProfileDataContext } from '../../../context/ProfileDataContext'
import Loader from '../../Atoms/Loader/Loader'
import Header from '../Header/Header'

const Skills = lazy(() => import('../../Organisms/Skills/Skills'))
const Summary = lazy(() => import('../../Organisms/Summary/Summary'))
const Education = lazy(() => import('../../Organisms/Education/Education'))
const WorkExperience = lazy(
    () => import('../../Organisms/WorkExperience/WorkExperience')
)
const Certifications = lazy(
    () => import('../../Organisms/Certifications/Certifications')
)
const Hobbies = lazy(() => import('../../Organisms/Hobbies/Hobbies'))
const GetInTouch = lazy(() => import('../../Organisms/GetInTouch/GetInTouch'))
const Contact = lazy(() => import('../../Organisms/Contact/Contact'))
const Projects = lazy(() => import('../../Organisms/Projects/Projects'))
const RecentArticles = lazy(
    () => import('../../Organisms/RecentArticles/RecentArticles')
)

export interface SectionProps {
    sectionRef: HTMLDivElement
}

const MainBody = () => {
    const {
        profileData: { appFeatureAvailability },
    } = useProfileDataContext()

    const {
        projects,
        experience,
        education,
        certifications,
        hobbies,
        getInTouch,
        contactDetails,
        recentArticles,
        skills,
    } = appFeatureAvailability

    return (
        <div className="main-body">
            <Header />
            <Summary />
            <Suspense fallback={<Loader />}>
                {recentArticles && <RecentArticles />}
                {projects && <Projects />}
                {experience && <WorkExperience />}
                {skills && <Skills />}
                {education && <Education />}
                {certifications && <Certifications />}
                {hobbies && <Hobbies />}
                {getInTouch && <GetInTouch />}
                {contactDetails && <Contact />}
            </Suspense>
        </div>
    )
}

export default MainBody
