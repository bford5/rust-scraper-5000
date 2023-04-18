import Image from "next/image";

export default function Product({productData}) {
    const {id, name, description, image, metadata} = productData;
    
    return (
        <div key={id}>
            <Image src={image} alt={name} width={300} height={300} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}