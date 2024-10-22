
export interface IQuoteForm {
    id: number
    movingFrom: string
    movingTo: string
    email: string
    date: Date
    name: string
    tel: string
    sizeOfMove: string    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface ICommentForm {
    comment: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface ISearchForm {
    name: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}