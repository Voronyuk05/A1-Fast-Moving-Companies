export interface ITipsTricksArticle {
    id: number,
    cardLogo: string,
    name: string,
    cardDescription: string,
    publishedAt: string,
    info: ITipsTricksArticleInfo
    comments: ITipsTricksComment[]
}

export interface ITipsTricksArticleInfo {
    articleImage: string,
    paragraphs: ITipsTricksArticleInfoParagraph[]
    table: ITipsTricksArticleTable
}

export interface ITipsTricksArticleInfoParagraph {
    paragraphTitle:  string
    paragraphText: string
}

export interface ITipsTricksArticleTable {
    head: string[][]
    body: string[][]
}

export interface ITipsTricksComment {
    id: number
    userComment: string,
    publishedAt: string,
    comments: ITipsTricksComment[]
}