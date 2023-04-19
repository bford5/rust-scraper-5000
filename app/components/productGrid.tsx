export default function ProductGrid({children}) {
    return (
        <div className=" grid grid-cols-fluid gap-4 mx-16 mt-3">
            {children}
        </div>
    )
}