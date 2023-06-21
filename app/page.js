
'use client'
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export default async function Home() {

  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    router.push('/products')
  }, [])

  return (
    <div className="">
      <p></p>
    </div>
  )
}
