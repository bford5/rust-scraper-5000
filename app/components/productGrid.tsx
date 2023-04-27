export default function ProductGrid({children}: any) {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-16 mt-3">
            {children}
        </div>
    )
}