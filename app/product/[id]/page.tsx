import Image from "next/image";

import { SearchParamTypes } from "@/Types/SearchParamTypes";

import formatPrice from "@/utils/PriceFormatter";

export default async function ProductDetail({searchParams}: SearchParamTypes) {
    
    const {name, unit_amount, description, image, id, features} = searchParams;
    // console.log(searchParams)
    
    return (
        <div className=" mt-8 bg-slate-600 rounded-2xl p-4 w-4/5 mx-auto">
            <div className="w-full flex flex-col md:flex-row justify-center gap-10">
                <div className="">
                    <Image src={image} alt={name} width={400} height={200} className=" rounded-2xl" />
                </div>
                <div className="">
                    <div className=" flex justify-between flex-col md:flex-row">
                        <h1 className=" text-lg md:text-2xl font-bold my-2">{name}</h1>
                        <h3 className=" font-medium text-base md:text-lg bg-sky-700 p-1 md:p-4 rounded-full md:mr-0 md: ml-auto">{unit_amount !== null ? formatPrice(unit_amount) : 'N/A'}</h3>
                        <button className=" bg-green-600 text-white font-medium p-1 md:p-4 rounded-lg ml-4 hover:bg-green-800 hover:text-slate-300 ease-in-out duration-300 md:mt-2">Add To Cart</button>
                    </div>
                    <h3 className=" text-sm text-black underline">Product Description</h3>
                    <p className="text-lg p-4">{description}</p>
                    <h5 className=" text-sm text-black underline">Metadata Description</h5>
                    <p className="metaData text-sm p-2">{features}</p>
                </div>
            </div>
        </div>
    )
}