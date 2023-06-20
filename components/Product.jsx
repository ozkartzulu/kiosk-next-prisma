
'use client'
import Image from "next/image"
import { formatCurrent } from '@/helpers'
import useKiosk from "@/hooks/useKiosk"

const Product = ({product}) => {

    const { handleSetProduct, handleSetModal } = useKiosk()

  return (
    <div className="border p-3">
        <Image 
            src={`/assets/img/${product.imagen}.jpg`} 
            alt={`Image ${product.name}`}
            width={400}
            height={500}
        />
        <div className="p-5">
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">{formatCurrent(product?.price)}</p>
            <button 
                className="bg-indigo-600 hover:bg-indigo-800 text-white p-3 mt-5 w-full uppercase font-bold"
                type="button"
                onClick={ () => {
                    handleSetProduct(product)
                    handleSetModal()
                } }
            >Add</button>
        </div>
    </div>
  )
}

export default Product