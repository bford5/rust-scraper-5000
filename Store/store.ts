import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import { AddToCartType } from '@/Types/CartType';

// type CartItemsType = {
//     id: string,
//     name: string,
//     unit_amount: number,
//     quantity: number,
//     images?: string[],
//     description?: string
// }

type CartType = {
    cart: AddToCartType[],
    isOpen: boolean,
    toggleCart: () => void,
    addProduct: (item: AddToCartType) => void
    removeProduct: (item: AddToCartType) => void
}

export const useCartStore = create<CartType>()(
    persist(
        (set) => ({
            cart: [],
            isOpen: false,
            toggleCart: () => set((state) => ({isOpen: !state.isOpen})),
            addProduct: (item) => set((state) => {
                const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
                if (existingItem) {
                    const updatedCart = state.cart.map((cartItem) => {
                        if (cartItem.id === item.id) {
                            return {...cartItem, quantity: cartItem.quantity + 1}
                        }
                        return cartItem;
                    })
                    return {cart: updatedCart}
                } else {
                    return {cart: [...state.cart, {...item, quantity: 1}]}
                }
                // if item exists in cart, update specific cart-item quantity +1, else add new item to cart
            }),
            removeProduct: (item) => set((state) => {
                // check if exists, if true decrement quantity by 1
                const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
                if (existingItem && existingItem.quantity > 1){
                    const updatedCart = state.cart.map((cartItem) => {
                        if (cartItem.id === item.id){
                            return {...cartItem, quantity: cartItem.quantity - 1}
                        }
                        return cartItem;
                    })
                    return {cart: updatedCart}
                } else {
                    // remove item from cart
                    const filteredCart = state.cart.filter((cartItem) => cartItem.id !== item.id)
                    return {cart: filteredCart}
                }
            })
        }),
        {name: 'cart-store'}
    )
)