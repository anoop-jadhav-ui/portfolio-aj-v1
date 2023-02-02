import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { useGlobalContext } from "../../../context/GlobalContext";
import constants from "../../../helpers/constants";
import T from "../../../translations/en_IN";
import Button from "../../Atoms/Button/Button";
import ArticleCard from "../../Molecules/ArticleCard/ArticleCard";
import HightlightedArticle from "../../Molecules/HightlightedArticle/HightlightedArticle";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";
import "./RecentArticles.scss";

function RecentArticles() {
  const { recentArticles } = useGlobalContext();

  return (
    <>
      {recentArticles?.length > 0 && (
        <>
          <div className="section-title h2 bold">{T.RECENT_ARTICLES}</div>
          <div className="subsection">
            <HightlightedArticle articleDetails={recentArticles[0]} />
            <div className="recent-articles-section-body">
              {recentArticles
                .slice(0, 4)
                .filter((article) => article.slug !== recentArticles[0].slug)
                .map((article, index) => {
                  return (
                    <ArticleCard key={String(index)} articleDetails={article} />
                  );
                })}
            </div>
          </div>
          <div className="mt-4">
            <a
              href={import.meta.env.VITE_HASHNODE_BLOG_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="neutral"
                Icon={MdArrowRightAlt}
                label={T.VIEW_ALL}
                className="mx-auto"
              />
            </a>
          </div>
        </>
      )}
    </>
  );
}

// export default RecentArticles;
export default SectionWrapper(
  RecentArticles,
  constants.classNames.RECENT_ARTICLES
);
