import { ITipsTricksArticle, ITipsTricksComment } from "@/types/tipsTricks.types"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const BASE_URL = "http://localhost:4000/tips-tricks"
export const usePutTipsTricksComment = (id: number, articleId?: number, refetch?: () => void) => {
    const {mutate, isSuccess, isError} = useMutation({
        mutationKey: ['put comment', articleId, id],
        mutationFn: async (newComment: ITipsTricksArticle | ITipsTricksComment) => await axios.patch(`${BASE_URL}/${ articleId ? `${articleId}/comments/${id}` : `${id}`}`, newComment),
        onSuccess() {
            if (refetch) refetch()
        },
    })

    return {mutate, isSuccess, isError}
}