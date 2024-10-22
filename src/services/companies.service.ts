import axios from "axios"
import { ICompany } from "@/types/companies.types"
import { ISearchParametrs } from "@/types/searchParametrs.types"

class CompaniesServices {
    private URL = "http://localhost:4000/companies"

    async getAllCompanies() {
        return await axios.get<ICompany[]>(this.URL).then(
            ({data}) => data
        )
    }

    async getCompanyByName(name: string) {
        return await axios.get<ICompany[]>(`${this.URL}?name=${name}`).then(
            ({data}) => data
        )
    }

    async getSearchedCompanies(searchParams: ISearchParametrs) {
        let filter: string[] = []
        filter = Object.keys(searchParams).map((key: keyof ISearchParametrs) => {
            return `${key}=${searchParams[key]}&`
        })
        
        return await axios.get<ICompany[]>(`${this.URL}?${filter.join('').replace(/ /g, '%20')}`).then(
            ({data}) => data
        )
    }

    async getBestCompanies(location: string) {
        return await axios.get<ICompany[]>(`${this.URL}?addres=${location}&sortBy=best`).then(
            ({data}) => data
        )
    }
    


}

const companiesServices = new CompaniesServices()

export default companiesServices