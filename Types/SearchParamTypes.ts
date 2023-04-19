type Params = {
    id: string
}

type SearchParams = {
    id: string,
    name: string,
    unit_amount: number | null,
    description: string,
    image: string,
    features: string,
}



export type SearchParamTypes = {
    params: Params,
    searchParams: SearchParams
}