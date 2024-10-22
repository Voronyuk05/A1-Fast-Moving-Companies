'use client'
import { useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { HeroBar } from "@/components/UI/HeroBar/HeroBar";
import { Headings } from "@/components/UI/Headings/Headings";
import { Path } from "@/components/UI/Path/Path";
import { useGetTipsTricksArticleByName } from "@/hooks/useGetTipsTricksArticleByName";
import { TipsTricksArticle } from "@/components/UI/TicksTricks/TipsTricksArticle/TipsTricksArticle";
import { LoadingCircle } from "@/components/UI/LoadingCircle/LoadingCircle";

const TipsTricksArticleComments = dynamic(() => import('../../../components/UI/TicksTricks/TipsTricksArticleComments/TipsTricksArticleComments'), {ssr: false})
const TipsTricksArticleCommentForm = dynamic(() => import('../../../components/UI/TicksTricks/TipsTricksArticleCommentForm/TipsTricksArticleCommentForm'), {ssr: false})
const TipsTricksCardsSwiper = dynamic(() => import('../../../components/UI/TicksTricks/TipsTricksCardsSwiper/TipsTricksCardsSwiper'), {ssr: false})
const SearchCompanies = dynamic(() => import("@/components/UI/Companies/SearchCompanies/SearchCompanies"), {ssr: false})



export default function ArticleLayout() {
    const {article} = useParams<{article: string}>()
    const articleName = article.replace(/%20/g, " ")
    const {data: articleData, isLoading, refetch} = useGetTipsTricksArticleByName(articleName)

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    if (isLoading) <LoadingCircle/>

    if (articleData)
    return (
        <>
            <HeroBar direction="column">
                <>
                    <Headings heading="h5" weight="500" color="primary">Tips & Tricks</Headings>       
                    <Headings heading="h3" weight="700" color="black">{articleName}</Headings>
                </>
            </HeroBar>
            <Path/>
            <TipsTricksArticle data={articleData}/>
            <TipsTricksArticleCommentForm itemData={articleData} refetch={refetch}/>
            <TipsTricksArticleComments commentsData={articleData.comments} articleId={articleData.id} refetch={refetch}/>
            <TipsTricksCardsSwiper/>
            <SearchCompanies />
        </>
    )
}