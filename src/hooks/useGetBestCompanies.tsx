import companiesServices from "@/services/companies.service"
import { useQuery } from "@tanstack/react-query"

export const useGetBestCompanies = (location: string) => {
    const {data, isPending} = useQuery({
        queryKey: ['best companies', location],
        queryFn: () => companiesServices.getBestCompanies(location),
        select: data => data.slice(0,3),
        refetchInterval: 600000
    })

    return {data, isPending}
}