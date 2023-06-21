
'use client'
import Image from "next/image"
import useKiosk from "@/hooks/useKiosk"
import Category from "./Category"

const Aside = () => {

  const {categories} = useKiosk()

  return (
    <>
        <Image src='assets/img/logo.svg' priority={true} 
          alt="Logo Image" width={300} height={100}
          className="mt-6 mb-6"
        />
        <nav>
          {categories.map( category => <Category key={category.id} category={category} /> )}
        </nav>
    </>
  )
}

export default Aside