import { ArrowRight } from 'lucide-react'
import React from 'react'
import { RecentArticle } from '../../../types/profileDataTypes'
import './ArticleCard.css'

interface ArticleCardProps {
    articleDetails: RecentArticle
}
const ArticleCard = ({ articleDetails }: ArticleCardProps) => {
    const blogUrl = `${import.meta.env.VITE_HASHNODE_BLOG_URL}\\${
        articleDetails.slug
    }`

    const redirectToBlogPage = () => {
        window.open(blogUrl, '_blank')
    }
    return (
        <div className="article-card" onClick={redirectToBlogPage} tabIndex={0}>
            <img
                src={articleDetails.coverImage?.url}
                width="100%"
                height="auto"
                alt={articleDetails.title}
            />
            <div className="article-content">
                <div className="date">
                    {new Date(articleDetails.publishedAt).toDateString()}
                </div>
                <div className="bold title">{articleDetails.title}</div>
                <div className="brief">{articleDetails.brief}</div>
                <a
                    href={blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-color explore-button"
                >
                    Explore <ArrowRight size="0.8125rem" />
                </a>
            </div>
        </div>
    )
}

export default ArticleCard
