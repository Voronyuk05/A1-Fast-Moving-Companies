import { IQuoteForm } from "./forms.types"

export interface ICompany {
    id: string
    logo?: string
    name: string
    addres: IAdress[]
    tel: string
    rating: number
    tags?: string[]
    services: string[]
    info: {
        images: string[]
        description: string
        pros: string[]
        cons: string[]
    },
    quotes?: IQuoteForm[]
}

export interface IAdress {
    location: string
    lat: string
    lng: string
}