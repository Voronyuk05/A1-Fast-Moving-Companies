import repliesServices from "@/services/replies.service"
import { useQuery } from "@tanstack/react-query"

export const useGetLatestReplies = () => {
    const {data, isPending} = useQuery({
        queryKey: ['reply by company name'],
        queryFn: () => repliesServices.getLatestReplies(),
        select: data => data,
        refetchInterval: 600000
    })

    return {data, isPending}
}