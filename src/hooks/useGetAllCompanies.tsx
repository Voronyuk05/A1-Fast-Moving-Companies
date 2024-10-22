import companiesServices from "@/services/companies.service"
import { useQuery } from "@tanstack/react-query"

export const useGetAllCompanies = () => {
    const {data, isPending} = useQuery({
        queryKey: ['all companies'],
        queryFn: () => companiesServices.getAllCompanies(),
        select: data => data
    })

    return {data, isPending}
}