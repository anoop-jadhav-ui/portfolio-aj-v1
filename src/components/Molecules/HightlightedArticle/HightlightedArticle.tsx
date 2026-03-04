import React from 'react'
import { RecentArticle } from '../../../types/profileDataTypes'

interface ArticleCardProps {
    articleDetails: RecentArticle
}
const HightlightedArticle = ({ articleDetails }: ArticleCardProps) => {
    const blogBaseUrl =
        process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL ??
        process.env.VITE_HASHNODE_BLOG_URL ??
        '#'

    const redirectToBlogPage = () => {
        const URL = `${blogBaseUrl}/${articleDetails.slug}`
        window.open(URL, '_blank')
    }
    return (
        <div
            className="highlighted-articlecard"
            onClick={redirectToBlogPage}
            tabIndex={0}
        >
            <div className="article-image">
                <img
                    src={articleDetails.coverImage?.url}
                    width="100%"
                    alt={articleDetails.title}
                />
            </div>
            <div className="content">
                <div>
                    <div className="h3 bold title">{articleDetails.title}</div>
                    <div className="description">{articleDetails.brief}</div>
                </div>
                <div className="date">
                    {new Date(articleDetails.publishedAt).toDateString()}
                </div>
            </div>
        </div>
    )
}

export default HightlightedArticle
