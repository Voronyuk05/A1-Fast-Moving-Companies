import { ICompany } from "@/types/companies.types"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const BASE_URL = "http://localhost:4000/companies"

export const usePostQuote = (companyId: string) => {
    const {mutate, isSuccess, isPending} = useMutation({
        mutationKey: ['add quote'],
        mutationFn: async (newQuote: ICompany) => await axios.put(`${BASE_URL}/${companyId}`, newQuote)
    })

    return {mutate, isSuccess, isPending}
}