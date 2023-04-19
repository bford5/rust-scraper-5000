import Image from "next/image";

import formatPrice from "@/utils/PriceFormatter";

export default async function ProductDetail({searchParams}) {
    
    const {name, price, description, image, id, metadata} = searchParams;
    
    return (
        <div className=" mt-8 bg-slate-600 rounded-2xl p-4 w-4/5 mx-auto flex justify-center gap-12">
            <div className="">
                <Image src={image} alt={name} width={400} height={200} className=" rounded-2xl" />
            </div>
            <div className=" align-middle">
                <div className=" flex justify-end">
                    <h3 className=" font-medium text-lg bg-sky-700 p-4 rounded-full">{price !== null ? formatPrice(price) : 'N/A'}</h3>
                </div>
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="text-lg p-4">{description}</p>
            </div>
        </div>
    )
}