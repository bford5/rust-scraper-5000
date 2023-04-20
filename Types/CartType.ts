export type AddToCartType = {
    id: string,
    name: string,
    images?: string[],
    quantity: number | 1,
    unit_amount: number | null,
    description?: string
}