'use client'

import Image from "next/image"

import { useCartStore } from "@/Store/store"

// NOTE: transition class is custom using tailwind utility classes, setup in global.css w/ @apply

export default function Cart() {

    const cartStore = useCartStore();

    return (
        <>
            {/* <button className="p-2 bg-yellow-500 text-white rounded-md" onClick={toggleCart}>Cart</button> */}
            {/* {cartStore.isOpen && <CartModal />} */}
        </>
    )
}