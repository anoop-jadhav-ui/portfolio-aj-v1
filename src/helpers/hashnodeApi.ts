import { RecentArticle, Node } from './../types/profileDataTypes'

interface HashnodeData {
    data: {
        publication: {
            posts: {
                edges: Node[]
            }
        }
    }
}

const GET_USER_ARTICLES = `
  {
    publication(host: "blog.anoopjadhav.in") {
      posts(first: 4) {
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

async function gql(query: unknown, variables = {}): Promise<HashnodeData> {
    const data = await fetch('https://gql.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    return data.json()
}

export const getRecentArticles = async (): Promise<Array<RecentArticle>> => {
    const result = await gql(GET_USER_ARTICLES, { page: 0 })
    return result.data.publication.posts.edges.map((data) => data.node)
}
