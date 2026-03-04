import { Node, RecentArticle } from '../types/profileDataTypes'

interface HashnodeData {
    data?: {
        publication?: {
            posts?: {
                edges?: Node[]
            }
        }
    }
}

const GET_USER_ARTICLES = `
  {
    publication(host: "blog.anoopjadhav.in") {
      posts(first: 6) {
        edges {
          node {
            title
            brief
            slug
            coverImage{
              url
            }
            publishedAt
            updatedAt
          }
        }
      }
    }
  }
`

const ARTICLES_REVALIDATE_SECONDS = 900

export async function getRecentArticlesServer(): Promise<Array<RecentArticle>> {
    try {
        const response = await fetch('https://gql.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: GET_USER_ARTICLES,
                variables: {},
            }),
            next: { revalidate: ARTICLES_REVALIDATE_SECONDS },
        })

        if (!response.ok) {
            return []
        }

        const result = (await response.json()) as HashnodeData
        const edges = result.data?.publication?.posts?.edges ?? []
        return edges.map((data) => data.node)
    } catch (error) {
        console.error('Failed to fetch recent articles on server:', error)
        return []
    }
}
