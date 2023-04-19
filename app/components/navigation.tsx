'use client'

import Link from "next/link"

import { Session } from "next-auth"
import {signIn} from "next-auth/react"
import {signOut} from "next-auth/react"

export default function Navigation({user}: Session) {
    return (
        <nav className=" mx-5 bg-slate-500 mt-1 rounded-md py-3 px-2 flex justify-between">
            <div className="logo"><Link href={`/`}><h1>rustScraper5000</h1></Link></div>
            <div className="menu flex flex-row gap-1">
                <Link href={`/`}>Homepage</Link>
                {!user ? <button onClick={() => signIn()} className="p-2 bg-red-400 text-white">Login</button> : <button onClick={() => signOut()} className="p-2 bg-red-400 text-white">Logout</button>}
            </div>
        </nav>
    )
}