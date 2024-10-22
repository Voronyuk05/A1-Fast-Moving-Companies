import axios from "axios"
import { IReply } from "@/types/replies.types"

class RepliesServices {
    private URL = "http://localhost:4000/replies"


    async getRepliesByCompany(companyName: string) {
        return await axios.get<IReply[]>(`${this.URL}?company=${companyName}`).then(
            ({data}) => data
        )
    }

    async getLatestReplies() {
        return await axios.get<IReply[]>(`${this.URL}?sortBy=latest`).then(
            ({data}) => data
        )
    }

}

const repliesServices = new RepliesServices()

export default repliesServices