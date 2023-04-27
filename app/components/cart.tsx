'use client'

import Image from "next/image"

import { IoChevronUpCircleSharp } from "react-icons/io5"
import { IoChevronDownCircleSharp } from "react-icons/io5"

import { motion } from "framer-motion"

import formatPrice from "@/utils/PriceFormatter";

import { useCartStore } from "@/Store/store"
import { format } from "path";

// NOTE: transition class is custom using tailwind utility classes, setup in global.css w/ @apply

function NoCartItems() {
    return (
        <div className="px-2 py-1 bg-sky-700 rounded-lg">
            <p className="text-center text-lg italic text-white">No items in cart...</p>
        </div>
    )
}


export default function Cart() {

    const cartStore = useCartStore();

    // total cart price
    const totalCartPRice = cartStore.cart.reduce((accu, item) => {
        // use ! on unit_amount to resolve TS-notice b/c unit_amount can potentially be null
        return accu + item.unit_amount! * item.quantity
    }, 0)

    const CartItemsList = ({cart}: any) => {
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
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={() => {cartStore.toggleCart()}} className=" fixed w-full h-screen left-0 top-o bg-black/25">
            {/* in order to stop cart closing when user interacts with cart modal below, add an onClick to stop propogation of general click event above */}
            <div onClick={(e) => e.stopPropagation()} className="bg-white absolute sm:right-0 top-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-screen py-12 px-8 overflow-y-scroll text-gray-700 flex flex-col gap-2">
                <h2 className=" underline text-lg">CART MODAL</h2>
                {cartStore.cart.length > 0 ? (
                    <>
                        <CartItemsList cart={cartStore.cart} />
                        <button className=" w-full mx-2 my-1 rounded-xl text-lg bg-black text-white">Checkout for {`${formatPrice(totalCartPRice)}`}</button>
                    </>
                ) : <NoCartItems />}
            </div>
        </motion.div>
    )
}