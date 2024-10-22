import { ICompany } from "@/types/companies.types"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const BASE_URL = "http://localhost:4000/companies"

export const usePutCompany = (companyId: string) => {
    const {mutate, isSuccess, isError} = useMutation({
        mutationKey: ['put company'],
        mutationFn: async (newCompany: ICompany) => await axios.put(`${BASE_URL}/${companyId}`, newCompany)
    })

    return {mutate, isSuccess, isError}
}