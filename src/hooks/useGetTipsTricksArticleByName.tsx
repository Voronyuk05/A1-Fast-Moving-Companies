import { useQuery } from "@tanstack/react-query"
import tipsTricksServices from "@/services/tipsTricks.service"

export const useGetTipsTricksArticleByName = (articleName: string) => {
    const {data, isLoading, refetch} = useQuery({
        queryKey: ['article by name', articleName],
        queryFn: () => tipsTricksServices.getTipsTricksArticleByName(articleName),
        select: data => data[0],
        refetchInterval: 600000
    })

    return {data, isLoading, refetch}

}