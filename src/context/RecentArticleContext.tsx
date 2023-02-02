import React, { createContext, useContext, useEffect, useState } from "react";
import { getRecentArticles } from "../helpers/hashnodeApi";
import { RecentArticle } from "../types/profileDataTypes";

interface RecentArticleContextType {
  recentArticles: Array<RecentArticle>;
}
type RecentArticleContextProps = {
  children: React.ReactNode;
};
const defaultGobalContext: RecentArticleContextType = {
  recentArticles: [],
};

const RecentArticleContext =
  createContext<RecentArticleContextType>(defaultGobalContext);

export const useRecentArticleContext = () => useContext(RecentArticleContext);

export const RecentArticleContextProvider = (
  props: RecentArticleContextProps
) => {
  const { children } = props;
  const [recentArticles, setRecentArticles] = useState<Array<RecentArticle>>(
    []
  );

  useEffect(() => {
    (async () => {
      let errorWhileLoadingArticles = false;

      try {
        const recentArticles = await getRecentArticles();
        setRecentArticles(recentArticles);
      } catch (e) {
        console.log(e);
        errorWhileLoadingArticles = true;
      }
    })();
  }, []);

  console.count("Recent Article Context");
  return (
    <RecentArticleContext.Provider
      value={{
        recentArticles,
      }}
    >
      {children}
    </RecentArticleContext.Provider>
  );
};
