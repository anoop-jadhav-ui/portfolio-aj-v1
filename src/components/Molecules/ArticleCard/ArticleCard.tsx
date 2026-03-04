import { ArrowRight } from 'lucide-react'
import React from 'react'
import { RecentArticle } from '../../../types/profileDataTypes'

interface ArticleCardProps {
    articleDetails: RecentArticle
}
const ArticleCard = ({ articleDetails }: ArticleCardProps) => {
    const blogBaseUrl = process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL ?? '#'
    const blogUrl = `${blogBaseUrl}/${articleDetails.slug}`

    return (
        <a
            className="article-card"
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read article: ${articleDetails.title}`}
        >
            <div className="image-container">
                <img
                    src={articleDetails.coverImage?.url}
                    width="100%"
                    height="auto"
                    alt={articleDetails.title}
                />
            </div>
            <div className="article-content">
                <div>
                    <div className="date">
                        {new Date(articleDetails.publishedAt).toDateString()}
                    </div>
                    <div className="bold title">{articleDetails.title}</div>
                    <div className="brief">{articleDetails.brief}</div>
                </div>
                <div className="primary-color explore-button">
                    Explore <ArrowRight size="0.8125rem" />
                </div>
            </div>
        </a>
    )
}

export default ArticleCard
