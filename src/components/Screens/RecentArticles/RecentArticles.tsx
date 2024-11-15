import './RecentArticles.css'

import { ArrowRight } from 'lucide-react'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useRecentArticleContext } from '../../../context/RecentArticleContext'
import { useTheme } from '../../../context/ThemeContext'
import constants from '../../../helpers/constants'
import Button from '../../Atoms/Button/Button'
import ArticleCard from '../../Molecules/ArticleCard/ArticleCard'
import SectionWrapper from '../../Organisms/SectionWrapper/SectionWrapper'
import RecentArticlesSkeleton from './RecentArticlesSkeleton'

function RecentArticles() {
    const { recentArticles, isLoadingArticles } = useRecentArticleContext()
    const { isMobile } = useTheme()
    const { t } = useTranslation()

    const topRecentArticles = useMemo(() => {
        return recentArticles.slice(0, 3)
    }, [recentArticles, isMobile])

    return (
        <>
            {recentArticles?.length > 0 && (
                <>
                    <div className="section-title h2 bold">
                        {t('sectionName.recentArticles')}
                    </div>
                    {isLoadingArticles && <RecentArticlesSkeleton />}
                    {!isLoadingArticles && (
                        <>
                            <div className="subsection">
                                <div className="recent-articles-grid">
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
                                    href={
                                        import.meta.env.VITE_HASHNODE_BLOG_URL
                                    }
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
            )}
        </>
    )
}

// export default RecentArticles;
export default SectionWrapper(
    RecentArticles,
    constants.classNames.RECENT_ARTICLES
)
