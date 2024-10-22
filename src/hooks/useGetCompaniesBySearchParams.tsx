import companiesServices from "@/services/companies.service"
import { ISearchParametrs } from "@/types/searchParametrs.types"
import { useQuery } from "@tanstack/react-query"

export const useGetCompaniesBySearchParams = (searchParams: ISearchParametrs) => {
    const {data, isPending} = useQuery({
        queryKey: ['searched companies', searchParams],
        queryFn: () => companiesServices.getSearchedCompanies(searchParams),
        select: data => data,
        refetchInterval: 600000
    })

    return {data, isPending}
}