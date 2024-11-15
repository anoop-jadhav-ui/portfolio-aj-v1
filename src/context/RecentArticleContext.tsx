import React, { createContext, useContext, useEffect, useState } from 'react'
import { getRecentArticles } from '../helpers/hashnodeApi'
import { RecentArticle } from '../types/profileDataTypes'

interface RecentArticleContextType {
    recentArticles: Array<RecentArticle>
    isLoadingArticles: boolean
}
type RecentArticleContextProps = {
    children: React.ReactNode
}
const defaultGobalContext: RecentArticleContextType = {
    recentArticles: [],
    isLoadingArticles: false,
}

const RecentArticleContext =
    createContext<RecentArticleContextType>(defaultGobalContext)

export const useRecentArticleContext = () => useContext(RecentArticleContext)

export const RecentArticleContextProvider = ({
    children,
}: RecentArticleContextProps) => {
    const [isLoadingArticles, setLoadingArticles] = useState(false)
    const [recentArticles, setRecentArticles] = useState<Array<RecentArticle>>(
        []
    )

    useEffect(() => {
        ;(async () => {
            try {
                setLoadingArticles(true)
                const recentArticles = await getRecentArticles()
                setRecentArticles(recentArticles)
            } catch (e) {
                console.log(e)
            } finally {
                setLoadingArticles(false)
            }
        })()
    }, [])

    return (
        <RecentArticleContext.Provider
            value={{
                recentArticles,
                isLoadingArticles,
            }}
        >
            {children}
        </RecentArticleContext.Provider>
    )
}
