'use client'

import Link from "next/link"
import { DiRust } from "react-icons/di"

export default function Footer() {
    return (
        <footer className=" bg-amber-800 mt-1 px-5 md:px-10 pt-3 pb-4 flex justify-between gap-3">
            <div className="logo"><Link href={`/`} className="inline-block align-middle"><span className=" text-2xl"><DiRust /></span><span className=" text-lg">Buster</span></Link></div>
            <div className="menu flex flex-row gap-1 py-3 ml-auto mr-0">
                <Link className="p-2 hover:text-slate-800 hover:underline ease-in-out duration-700 transition-all" href={`/`}>Homepage</Link>
                <Link className="p-2 hover:text-slate-800 hover:underline ease-in-out duration-700 transition-all" href={`/about`}>About</Link>
            </div>
        </footer>
    )
}