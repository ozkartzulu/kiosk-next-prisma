
'use client'
import useKiosk from "@/hooks/useKiosk"
import ResumeProduct from "@/components/ResumeProduct"

const Resume = () => {

    const { order } = useKiosk()

    return (
        <div>
            <h1 className="text-4xl font-black">Resume</h1>
            <p className="text-2xl mt-6 mb-8">Review you Order</p>
            {order.length === 0 ? (
                <p className="text-center text-2xl">There is not elements in order</p>
            ) : (
                order.map(product => <ResumeProduct key={product.id} product={product} />)
            )}
        </div>
    )
}

export default Resume