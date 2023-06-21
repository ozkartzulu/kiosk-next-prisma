
'use client'
import Products from "@/components/Products"
import useKiosk from "@/hooks/useKiosk"

const ProductsPage = () => {

    const { currentCategory } = useKiosk()
    console.log(currentCategory, 'prod')

    return (
        <div className="">
            <h1 className='text-5xl mb-5 font-bold'>{currentCategory?.name}</h1>
            <Products />
        </div>
    )
}

export default ProductsPage