import { RecentArticle } from '../types/profileDataTypes'
import { getRecentArticles } from '../helpers/hashnodeApi'

export async function getRecentArticlesServer(): Promise<Array<RecentArticle>> {
    try {
        return await getRecentArticles(process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL)
    } catch (error) {
        console.error('Failed to fetch recent articles on server:', error)
        return []
    }
}
