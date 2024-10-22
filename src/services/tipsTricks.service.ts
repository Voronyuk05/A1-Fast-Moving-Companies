import { ITipsTricksArticle } from "@/types/tipsTricks.types"
import axios from "axios"


class TipsTricksServices {
    private URL = "http://localhost:4000/tips-tricks"

    async getTipsTricksArticles() {
        return await axios.get<ITipsTricksArticle[]>(`${this.URL}`).then(
            ({data}) => data
        )
    }

    async getTipsTricksArticleByName(articleName: string) {
        return await axios.get<ITipsTricksArticle[]>(`${this.URL}?name=${articleName}`).then(
            ({data}) => data
        )
    }
}

const tipsTricksServices = new TipsTricksServices()

export default tipsTricksServices