import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type CartItemsType = {
    id: string,
    name: string,
    unit_amount: number,
    quantity: number,
    images?: string[],
    description?: string
}

type CartType = {
    cart: CartItemsType[],
    isOpen: boolean
}

export const useCartStore = create<CartType>()(
    persist(
        (set) => ({
            cart: [],
            isOpen: false,
        }),
        {name: 'cart-store'}
    )
)