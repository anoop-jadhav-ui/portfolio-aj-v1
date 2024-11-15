import './RecentArticles.css'

import { ArrowRight } from 'lucide-react'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useRecentArticleContext } from '../../../context/RecentArticleContext'
import { useTheme } from '../../../context/ThemeContext'
import constants from '../../../helpers/constants'
import Button from '../../Atoms/Button/Button'
import ArticleCard from '../../Molecules/ArticleCard/ArticleCard'
import HightlightedArticle from '../../Molecules/HightlightedArticle/HightlightedArticle'
import SectionWrapper from '../../Organisms/SectionWrapper/SectionWrapper'

function RecentArticles() {
    const { recentArticles } = useRecentArticleContext()
    const { isMobile } = useTheme()
    const { t } = useTranslation()

    const highlightedArticle = recentArticles[0]

    const topRecentArticles = useMemo(() => {
        return recentArticles.slice(isMobile ? 1 : 0, isMobile ? 3 : 6)
    }, [recentArticles, isMobile])

    return (
        <>
            {recentArticles?.length > 0 && (
                <>
                    <div className="section-title h2 bold">
                        {t('sectionName.recentArticles')}
                    </div>
                    <div className="subsection">
                        <div className="recent-articles-grid">
                            {isMobile && (
                                <HightlightedArticle
                                    articleDetails={highlightedArticle}
                                />
                            )}
                            {topRecentArticles.map((article, index) => {
                                return (
                                    <ArticleCard
                                        key={String(index)}
                                        articleDetails={article}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="view-all-button text-center">
                        <a
                            href={import.meta.env.VITE_HASHNODE_BLOG_URL}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={t('button.viewAll')}
                            style={{
                                display: 'inline-block',
                            }}
                        >
                            <Button
                                variant="brand"
                                endIcon={<ArrowRight />}
                                label={t('button.viewAll')}
                                className="mx-auto"
                                tabIndex={-1}
                            />
                        </a>
                    </div>
                </>
            )}
        </>
    )
}

// export default RecentArticles;
export default SectionWrapper(
    RecentArticles,
    constants.classNames.RECENT_ARTICLES
)
