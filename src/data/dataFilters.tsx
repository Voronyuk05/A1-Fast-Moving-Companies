import { ISelectOptions } from "@/types/select.types"

export const sortByFilterArray: ISelectOptions[] = [
    {
        label: "Sort By",
        value: ""
    },
    {
        label: "A-z",
        value: "asc"
    },
    {
        label: "Z-a",
        value: "desc"
    },
    {
        label: "Best",
        value: "best"
    },
    {
        label: "Worst",
        value: "worst"
    },
]

export const sortByDefaultValue: ISelectOptions = {
    label: "Sort By",
    value: ""
}

export const servciesFilterArray: ISelectOptions[] = [
    {
        label: "Service",
        value: ""
    },
    {
        label: "Local Movers",
        value: "Local Movers"
    },
    {
        label: "Long Distance",
        value: "Long Distance"
    },
    {
        label: "Storages",
        value: "Storages"
    },
    {
        label: "State to State",
        value: "State to State"
    },
    {
        label: "Office Movers",
        value: "Office Movers"
    },
    {
        label: "Piano Movers",
        value: "Piano Movers"
    }
]

export const servicesDefaultValue: ISelectOptions =  {
    label: "Service",
    value: ""
}

export const ratingFilterArray: ISelectOptions[] = [
    {
        label: "Rate",
        value: ""
    },
    {
        label: "> 4.5",
        value: "4.5"
    },
    {
        label: "> 4",
        value: "4"
    },
    {
        label: "> 3",
        value: "3"
    },
    {
        label: "> 2",
        value: "2"
    },
]

export const ratingDefaultValue: ISelectOptions = {
    label: "Rate",
    value: ""
}

export const locationsFilterArray: ISelectOptions[] = [
    {
        label: "Location",
        value: ""
    },
    {
        label: "San Francisco",
        value: "San Francisco"
    },
    {
        label: "Oakland",
        value: "Oakland"
    },
    {
        label: "San Jose",
        value: "San Jose"
    },
    {
        label: "San Diego",
        value: "San Diego"
    },
    {
        label: "Ontario",
        value: "Ontario"
    },
    {
        label: "Los Angeles",
        value: "Los Angeles"
    }
]

export const locationDefaultValue: ISelectOptions =  {
    label: "Location",
    value: ""
}


export const tagsFilterArray: ISelectOptions[] = [
    {
        label: "Tags",
        value: ""
    },
    {
        label: "Popular",
        value: "popular"
    },
    {
        label: "Featured",
        value: "featured"
    }
]

export const tagDefaultValue: ISelectOptions = {
    label: "Tags",
    value: ""
}