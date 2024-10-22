import companiesServices from "@/services/companies.service"
import { useQuery } from "@tanstack/react-query"

export const useGetCompanyByName = (name: string) => {
    const {data, isPending} = useQuery({
        queryKey: ['company by name', name],
        queryFn: () => companiesServices.getCompanyByName(name),
        select: data => data[0],
        refetchInterval: 600000
    })

    return {data, isPending}
}