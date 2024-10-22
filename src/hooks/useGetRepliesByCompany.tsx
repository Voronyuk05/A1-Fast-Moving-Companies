import repliesServices from "@/services/replies.service"
import { useQuery } from "@tanstack/react-query"

export const useGetRepliesByCompany = (companyName: string) => {
    const {data, isPending} = useQuery({
        queryKey: ['reply by company name', companyName],
        queryFn: () => repliesServices.getRepliesByCompany(companyName),
        select: data => data,
        refetchInterval: 600000
    })

    return {data, isPending}
}