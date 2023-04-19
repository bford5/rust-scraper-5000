import Image from "next/image";
import Link from "next/link";

import { ProductType } from "@/Types/ProductType";

import formatPrice from "@/utils/PriceFormatter";

export default function Product({id, name, description, image, metadata, unit_amount}:  ProductType) {
    const {features} = metadata;
    const productLink = {
        pathname: `/product/${id}`,
        query: {
            id,
            name,
            description,
            image,
            features,
            unit_amount
        }
    }
    
    return (
        <Link href={productLink}>
        <div key={id} className=" bg-neutral-500 text-black px-10 py-5 rounded-xl text-center">
            <div className="flex justify-center rounded-sm"><Image src={image} alt={name} width={300} height={300} className=" rounded-2xl w-80 h-52 md:w-full md:h-64 object-cover" /></div>
            <div className=" flex flex-row justify-between bg-slate-300 rounded-md p-1 mt-2">
                <h2>{name}</h2>
                <h3 className=" font-medium">{unit_amount !== null ? formatPrice(unit_amount) : 'N/A'}</h3>
            </div>
            <p className="p-4">{description}</p>
        </div>
        </Link>
    )
}