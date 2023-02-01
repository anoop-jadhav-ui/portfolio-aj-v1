import React from "react";
import { RecentArticle } from "../../../types/profileDataTypes";
import "./HightlightedArticle.scss";

interface ArticleCardProps {
  articleDetails: RecentArticle;
}
const HightlightedArticle = ({ articleDetails }: ArticleCardProps) => {
  const redirectToBlogPage = () => {
    const URL = `${import.meta.env.VITE_HASHNODE_BLOG_URL}\\${
      articleDetails.slug
    }`;
    window.open(URL, "_blank");
  };
  return (
    <div className="highlighted-articlecard mb-2" onClick={redirectToBlogPage}>
      <div className="article-image">
        <img
          src={articleDetails.coverImage}
          width="100%"
          alt={articleDetails.title}
        />
      </div>
      <div className="content p-4 pl-3 pr-3">
        <div>
          <div className="header h4 bold">{articleDetails.title}</div>
          <div className="description pt-2">{articleDetails.brief}</div>
        </div>
        <div className="date pt-4">
          {new Date(articleDetails.dateAdded).toDateString()}
        </div>
      </div>
    </div>
  );
};

export default HightlightedArticle;
