import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
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

  useLayoutEffect(() => {
    (async () => {
      try {
        const recentArticles = await getRecentArticles();
        setRecentArticles(recentArticles);
      } catch (e) {
        console.log(e);
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
