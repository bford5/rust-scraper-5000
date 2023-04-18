import Image from "next/image";

import { ProductType } from "@/Types/productType";

import formatPrice from "@/utils/PriceFormatter";

export default function Product({id, name, description, image, metadata, price}:  ProductType) {
    return (
        <div key={id}>
            <Image src={image} alt={name} width={300} height={300} />
            <h2>{name}</h2>
            <h3>{price !== null ? formatPrice(price) : 'N/A'}</h3>
            <p>{description}</p>
        </div>
    )
}