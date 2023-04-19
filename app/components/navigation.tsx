'use client'

import Link from "next/link"

import { Session } from "next-auth"
import {signIn} from "next-auth/react"
import {signOut} from "next-auth/react"

import {FaShoppingCart} from "react-icons/fa"
import {DiRust} from "react-icons/di"

import Cart from "./cart"
import { useCartStore } from "@/Store/store"

// NOTE: transition class is custom using tailwind utility classes, setup in global.css w/ @apply

export default function Navigation({user}: Session) {
    const cartStore = useCartStore();
    return (
        <nav className=" mx-5 bg-slate-500 mt-1 rounded-md py-3 px-2 flex justify-between">
            <div className="logo"><Link href={`/`} className="inline-block align-middle"><span className=" text-2xl"><DiRust /></span><span className=" text-lg">Buster</span></Link></div>
            <div className="menu flex flex-row gap-1">
                <Link className="p-2 hover:text-slate-800 hover:underline ease-in-out duration-700 transition-all" href={`/`}>Homepage</Link>
                <Link className="p-2 hover:text-slate-800 hover:underline ease-in-out duration-700 transition-all" href={`/about`}>About</Link>
                <div className="p-4 bg-teal-500 text-white rounded-md hover:bg-teal-700 hover:text-slate-300 transition text-xl cursor-pointer relative">
                    <FaShoppingCart />
                    {cartStore.cart.length >= 0 && <span className=" absolute text-sm bg-red-500 text-white rounded-full px-0.5 py-0.5 top-0 right-0 flex justify-center">{cartStore.cart.length}</span>}
                </div>
                {cartStore.isOpen && <Cart />}
                {!user ? <button onClick={() => signIn()} className="p-2 bg-red-400 text-white rounded-md transition">Login</button> : <button onClick={() => signOut()} className="p-2 bg-red-400 text-white rounded-md">Logout</button>}
            </div>
        </nav>
    )
}