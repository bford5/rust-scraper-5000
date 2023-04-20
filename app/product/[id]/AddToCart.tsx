'use client'

import { AddToCartType } from "@/Types/CartType"

import { useCartStore } from "@/Store/store"

export default function AddToCart({
    name,
    id,
    images,
    unit_amount,
    quantity
}: AddToCartType) {
    const cartStore = useCartStore();

    const addProduct = () => cartStore.addProduct({id, name, unit_amount, quantity, images})
    
    return (
        <>
            <button onClick={addProduct} className=" bg-green-600 text-white font-medium p-1 md:p-4 rounded-lg ml-4 hover:bg-green-800 hover:text-slate-300 ease-in-out duration-300 md:mt-2">Add To Cart</button>
        </>
    )
}