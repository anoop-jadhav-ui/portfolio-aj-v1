import { t } from 'i18next'
import {
    Award,
    BookOpenText,
    BookUser,
    BriefcaseBusiness,
    Cog,
    Gamepad2,
    GraduationCap,
    Lightbulb,
    MessageCircleMore,
    Newspaper,
} from 'lucide-react'
import React from 'react'
import constants from '../../../helpers/constants'
import { FeatureToggles } from '../../../types/profileDataTypes'

export type LeftPaneMenuItem = {
    class: string
    label: string
    id: string
    headerPos: number
    icon: React.ReactNode
}

const leftPaneDataObj: Array<LeftPaneMenuItem> = [
    {
        class: constants.classNames.SUMMARY,
        label: t('sectionName.summary'),
        id: 'summary',
        headerPos: 0,
        icon: <BookOpenText />,
    },
    {
        class: constants.classNames.RECENT_ARTICLES,
        label: t('sectionName.recentArticles'),
        id: 'recentArticles',
        headerPos: 0,
        icon: <Newspaper />,
    },
    {
        class: constants.classNames.PROJECTS,
        label: t('sectionName.funLearningProjects'),
        id: 'projects',
        headerPos: 0,
        icon: <Lightbulb />,
    },
    {
        class: constants.classNames.WORK_EXPERIENCE,
        label: t('sectionName.workExperience'),
        id: 'experience',
        headerPos: 0,
        icon: <BriefcaseBusiness />,
    },
    {
        class: constants.classNames.SKILLS,
        label: t('sectionName.skills'),
        id: 'skills',
        headerPos: 0,
        icon: <Cog />,
    },
    {
        class: constants.classNames.EDUCATION,
        label: t('sectionName.education'),
        id: 'education',
        headerPos: 0,
        icon: <GraduationCap />,
    },
    {
        class: constants.classNames.CERTIFICATIONS,
        label: t('sectionName.certifications'),
        id: 'certifications',
        headerPos: 0,
        icon: <Award />,
    },
    {
        class: constants.classNames.HOBBIES,
        label: t('sectionName.hobbiesAndInterests'),
        id: 'hobbies',
        headerPos: 0,
        icon: <Gamepad2 />,
    },
    {
        class: constants.classNames.GET_IN_TOUCH,
        label: t('sectionName.messageFormTitle'),
        id: 'getInTouch',
        headerPos: 0,
        icon: <MessageCircleMore />,
    },
    {
        class: constants.classNames.CONTACT_ME,
        label: t('sectionName.contactDetails'),
        id: 'contactDetails',
        headerPos: 0,
        icon: <BookUser />,
    },
]

export default function getFilteredLeftPaneData(
    featureToggles: FeatureToggles
) {
    return leftPaneDataObj.filter(
        (item) => !!featureToggles[item.id as keyof FeatureToggles]
    )
}
