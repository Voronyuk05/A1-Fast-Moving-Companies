import { IReply } from "@/types/replies.types"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const BASE_URL = "http://localhost:4000/replies"

export const usePostReply = () => {
    const {mutate, isSuccess, isPending} = useMutation({
        mutationKey: ['add reply'],
        mutationFn: async (newReply: IReply) => await axios.post(BASE_URL, newReply)
    })

    return {mutate, isSuccess, isPending}
}