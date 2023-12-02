import "./ArticleCard.scss";

import React from "react";
import { RecentArticle } from "../../../types/profileDataTypes";

interface ArticleCardProps {
  articleDetails: RecentArticle;
}
const ArticleCard = ({ articleDetails }: ArticleCardProps) => {
  const redirectToBlogPage = () => {
    const URL = `${import.meta.env.VITE_HASHNODE_BLOG_URL}\\${
      articleDetails.slug
    }`;
    window.open(URL, "_blank");
  };
  return (
    <div className="article-card" onClick={redirectToBlogPage} tabIndex={0}>
      <div className="article-image">
        <img
          src={articleDetails.coverImage?.url}
          width="100%"
          alt={articleDetails.title}
        />
      </div>
      <div className="article-content">
        <div className="bold">{articleDetails.title}</div>
        <div className="date">
          {new Date(articleDetails.publishedAt).toDateString()}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
