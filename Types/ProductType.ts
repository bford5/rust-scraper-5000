export type ProductType = {
    id: string,
    name: string,
    unit_amount: number | null,
    description: string | null,
    image: string,
    metadata: MetaDataType,
    quantity?: number | 1
}

type MetaDataType = {
    features: string
}