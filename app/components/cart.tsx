'use client'

import Image from "next/image"

import formatPrice from "@/utils/PriceFormatter";

import { useCartStore } from "@/Store/store"

// NOTE: transition class is custom using tailwind utility classes, setup in global.css w/ @apply

export default function Cart() {

    const cartStore = useCartStore();

    const CartItemsList = ({cart}) => {
        
        return (
            <>
            {cart.map((item)=> (
                <div key={item.id} className=" flex flex-row justify-between bg-slate-300 rounded-2xl p-3">
                    <div>
                        {/* <Image src={item.images} alt={item.name} width={50} height={50} /> */}
                        {/* item.images is being registered as null, am not able to find an image data being passed onto cart in local storage, need to review and fix this to have product image displayed in cart */}
                    </div>
                    <div className=" block text-left">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className=" block text-right">
                        <h3>{item.unit_amount !== null ? formatPrice(item.unit_amount) : 'N/A'}</h3>
                        <h5>Qt. <span className="bg-white rounded-full p-1">{item.quantity}</span></h5>
                    </div>
                </div>
            ))}
            </>
        )
    }

    return (
        <div onClick={() => {cartStore.toggleCart()}} className=" fixed w-full h-screen left-0 top-o bg-black/25">
            {/* in order to stop cart closing when user interacts with cart modal below, add an onClick to stop propogation */}
            <div onClick={(e) =>e.stopPropagation()} className="bg-white absolute right-0 top-0 w-1/4 h-screen py-12 px-8 overflow-y-scroll text-gray-700 flex flex-col gap-2">
                <h2 className=" underline text-lg">CART MODAL</h2>
                {cartStore.cart.length > 0 ? <CartItemsList cart={cartStore.cart} /> : 'No items in cart...'}
                <button className=" w-full mx-2 rounded-xl text-lg bg-black text-white">Checkout</button>
            </div>
            {/* <button className="p-2 bg-yellow-500 text-white rounded-md" onClick={toggleCart}>Close</button> */}
            {/* {cartStore.isOpen && <CartModal />} */}
        </div>
    )
}