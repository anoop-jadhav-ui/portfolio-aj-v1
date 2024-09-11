import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import Loader from '../../Atoms/Loader/Loader'

const HtmlModel = React.lazy(() => import('../../Atoms/3DModels/HtmlModel'))
const CSSModel = React.lazy(() => import('../../Atoms/3DModels/CSSModel'))
const JsModel = React.lazy(() => import('../../Atoms/3DModels/JsModel'))
const ReactModel = React.lazy(() => import('../../Atoms/3DModels/ReactModel'))
const FigmaModel = React.lazy(() => import('../../Atoms/3DModels/FigmaModel'))
const BlenderModel = React.lazy(
    () => import('../../Atoms/3DModels/BlenderModel')
)

const Skills3D = () => {
    const { t } = useTranslation()
    return (
        <Suspense
            fallback={
                <Loader
                    isFullScreen={false}
                    message={t('loadingSkillsModel')}
                />
            }
        >
            <div className="subsection skills-content">
                <div className="skills-3d-grid">
                    <HtmlModel scale={1.5} />
                    <JsModel scale={1.5} />
                    <CSSModel scale={1.5} />
                    <ReactModel scale={0.5} />
                    <FigmaModel scale={0.65} />
                    <BlenderModel scale={1} />
                </div>
            </div>
        </Suspense>
    )
}

export default Skills3D
