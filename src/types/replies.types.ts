
export interface IReply {
    name: string,
    comment: string
    company: string,
    rating: number,
    publishedAt: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}