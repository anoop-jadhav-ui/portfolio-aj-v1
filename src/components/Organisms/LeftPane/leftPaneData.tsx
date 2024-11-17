import { t } from 'i18next'
import {
    Award,
    BookOpenText,
    BriefcaseBusiness,
    Contact,
    Gamepad2,
    GraduationCap,
    Lightbulb,
    MessageCircleMore,
    Newspaper,
    PenTool,
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

export const sectionDetails = {
    summary: {
        class: constants.classNames.SUMMARY,
        label: t('sectionName.summary'),
        id: 'summary',
        headerPos: 0,
        icon: <BookOpenText />,
    },
    recentArticles: {
        class: constants.classNames.RECENT_ARTICLES,
        label: t('sectionName.recentArticles'),
        id: 'recentArticles',
        headerPos: 0,
        icon: <Newspaper />,
    },
    projects: {
        class: constants.classNames.PROJECTS,
        label: t('sectionName.funLearningProjects'),
        id: 'projects',
        headerPos: 0,
        icon: <Lightbulb />,
    },
    experience: {
        class: constants.classNames.WORK_EXPERIENCE,
        label: t('sectionName.workExperience'),
        id: 'experience',
        headerPos: 0,
        icon: <BriefcaseBusiness />,
    },
    skills: {
        class: constants.classNames.SKILLS,
        label: t('sectionName.skills'),
        id: 'skills',
        headerPos: 0,
        icon: <PenTool />,
    },
    education: {
        class: constants.classNames.EDUCATION,
        label: t('sectionName.education'),
        id: 'education',
        headerPos: 0,
        icon: <GraduationCap />,
    },
    certifications: {
        class: constants.classNames.CERTIFICATIONS,
        label: t('sectionName.certifications'),
        id: 'certifications',
        headerPos: 0,
        icon: <Award />,
    },
    hobbies: {
        class: constants.classNames.HOBBIES,
        label: t('sectionName.hobbiesAndInterests'),
        id: 'hobbies',
        headerPos: 0,
        icon: <Gamepad2 />,
    },
    getInTouch: {
        class: constants.classNames.GET_IN_TOUCH,
        label: t('sectionName.messageFormTitle'),
        id: 'getInTouch',
        headerPos: 0,
        icon: <MessageCircleMore />,
    },
    contactDetails: {
        class: constants.classNames.CONTACT_ME,
        label: t('sectionName.contactDetails'),
        id: 'contactDetails',
        headerPos: 0,
        icon: <Contact />,
    },
    toList(): LeftPaneMenuItem[] {
        return Object.values(this).filter(
            (item) => typeof item === 'object' && 'id' in item
        ) as Array<LeftPaneMenuItem>
    },
}

export default function getFilteredLeftPaneData(
    featureToggles: FeatureToggles
) {
    return sectionDetails
        .toList()
        .filter((item) => !!featureToggles[item.id as keyof FeatureToggles])
}
