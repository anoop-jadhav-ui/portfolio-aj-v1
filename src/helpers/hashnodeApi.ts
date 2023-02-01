import { RecentArticle } from "./../types/profileDataTypes";

interface HashnodeData {
  data: {
    user: {
      publication: {
        posts: RecentArticle[];
      };
    };
  };
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "anoopjadhav") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                    dateAdded
                    dateFeatured
                    popularity
                    totalReactions
                    replyCount
                }
            }
        }
    }
`;

async function gql(query: unknown, variables = {}): Promise<HashnodeData> {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
}

export const getRecentArticles = async (): Promise<Array<RecentArticle>> => {
  const result = await gql(GET_USER_ARTICLES, { page: 0 });
  return result.data.user.publication.posts;
};
