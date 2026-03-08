import { RecentArticle } from '../../../types/profileDataTypes'

interface ArticleCardProps {
    articleDetails: RecentArticle
}
const HightlightedArticle = ({ articleDetails }: ArticleCardProps) => {
    const blogBaseUrl = process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL ?? '#'
    const blogUrl = `${blogBaseUrl}/${articleDetails.slug}`

    return (
        <a
            className="highlighted-articlecard"
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read article: ${articleDetails.title}`}
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
        </a>
    )
}

export default HightlightedArticle
