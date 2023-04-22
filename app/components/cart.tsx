'use client'

import Image from "next/image"

import { IoChevronUpCircleSharp } from "react-icons/io5"
import { IoChevronDownCircleSharp } from "react-icons/io5"

import formatPrice from "@/utils/PriceFormatter";

import { useCartStore } from "@/Store/store"

// NOTE: transition class is custom using tailwind utility classes, setup in global.css w/ @apply

export default function Cart() {

    const cartStore = useCartStore();

    const CartItemsList = ({cart}: any) => {
        // const {id, name, quantity, unit_amount, description} = cart
        
        return (
            <>
            {cart.map(({id, name, description, unit_amount, quantity}: any)=> (
                <div key={id} className=" flex flex-row justify-between bg-slate-300 rounded-2xl p-3">
                    <div>
                        {/* <Image src={item.images} alt={item.name} width={50} height={50} /> */}
                        {/* item.images is being registered as null, am not able to find an image data being passed onto cart in local storage, need to review and fix this to have product image displayed in cart */}
                    </div>
                    <div className=" block text-left">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                    <div className=" block text-right">
                        <h3>{unit_amount !== null ? formatPrice(unit_amount) : 'N/A'}</h3>
                        <h5>Qt. <span className="bg-white rounded-full p-1">{quantity}</span></h5>
                        <div className=" flex flex-row justify-around gap-4 text-base">
                            <button onClick={() => cartStore.addProduct({id, name, quantity, unit_amount, description})}><IoChevronUpCircleSharp /></button>
                            <button onClick={() => cartStore.removeProduct({id, name, quantity, unit_amount, description})}><IoChevronDownCircleSharp /></button>
                        </div>
                    </div>
                </div>
            ))}
            </>
        )
    }

    return (
        <div onClick={() => {cartStore.toggleCart()}} className=" fixed w-full h-screen left-0 top-o bg-black/25">
            {/* in order to stop cart closing when user interacts with cart modal below, add an onClick to stop propogation */}
            <div onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0 w-1/4 h-screen py-12 px-8 overflow-y-scroll text-gray-700 flex flex-col gap-2">
                <h2 className=" underline text-lg">CART MODAL</h2>
                {cartStore.cart.length > 0 ? <CartItemsList cart={cartStore.cart} /> : 'No items in cart...'}
                <button className=" w-full mx-2 rounded-xl text-lg bg-black text-white">Checkout</button>
            </div>
        </div>
    )
}