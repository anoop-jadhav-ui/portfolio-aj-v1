import React from "react";
import { useTranslation } from "react-i18next";
import { MdArrowRightAlt } from "react-icons/md";
import { useRecentArticleContext } from "../../../context/RecentArticleContext";
import { useTheme } from "../../../context/ThemeContext";
import constants from "../../../helpers/constants";
import Button from "../../Atoms/Button/Button";
import ArticleCard from "../../Molecules/ArticleCard/ArticleCard";
import HightlightedArticle from "../../Molecules/HightlightedArticle/HightlightedArticle";
import SectionWrapper from "../../Organisms/SectionWrapper/SectionWrapper";
import "./RecentArticles.scss";

function RecentArticles() {
  const { recentArticles } = useRecentArticleContext();
  const { isMobile } = useTheme();
  const { t } = useTranslation();
  return (
    <>
      {recentArticles?.length > 0 && (
        <>
          <div className="section-title h2 bold">{t("RECENT_ARTICLES")}</div>
          <div className="subsection">
            <HightlightedArticle articleDetails={recentArticles[0]} />
            <div className="recent-articles-section-body">
              {recentArticles
                .slice(0, isMobile ? 3 : 4)
                .filter((article) => article.slug !== recentArticles[0].slug)
                .map((article, index) => {
                  return (
                    <ArticleCard key={String(index)} articleDetails={article} />
                  );
                })}
            </div>
          </div>
          <div className="view-all-button text-center">
            <a
              href={import.meta.env.VITE_HASHNODE_BLOG_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="neutral"
                Icon={MdArrowRightAlt}
                label={t("VIEW_ALL")}
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
