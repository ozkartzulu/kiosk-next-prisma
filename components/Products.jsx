
'use client'
import { useEffect, useState } from "react"
import useKiosk from "@/hooks/useKiosk"
import Product from "./Product"

const Products = () => {

    const { currentCategory } = useKiosk()
    const [products, setProducts] = useState([])

    useEffect( () => {
        const getProducts = () => {
           let idCat = currentCategory ? currentCategory.id : 1
          fetch(`/api/products?category=${idCat}`)
          .then( async (resp) => {
            setProducts(await resp.json())
          }).catch(error => console.log(error))
        }
        getProducts()
    }, [currentCategory] )

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {products?.map(product => <Product key={product.id} product={product} />)}
        </div>
    )
}

export default Products