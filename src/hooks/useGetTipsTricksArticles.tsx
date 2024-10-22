import { useQuery } from "@tanstack/react-query"
import tipsTricksServices from "@/services/tipsTricks.service"

export const useGetTipsTricksArticles = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['articles'],
        queryFn: () => tipsTricksServices.getTipsTricksArticles(),
        select: data => data,
        refetchInterval: 600000
    })

    return {data, isLoading}

}