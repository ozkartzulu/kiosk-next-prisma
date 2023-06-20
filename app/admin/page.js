
'use client'
import useSWR from "swr"
import Order from "@/components/Order"

const pageAdmin = () => {

    const fetcher = () => fetch('/api/orders').then(data => data.json())

    const { data, error, isLoading } = useSWR('/api/orders', fetcher, { refreshInterval: 100 })

    return (
        <div>
            <h1 className="text-4xl font-black">Administration Panel</h1>
            <p className="text-2xl my-10">Manage Orders</p>

            {data && data.length ? data.map(order => <Order key={order.id} orderProd={order} />) : <p>There is not orders still</p>}
        </div>
    )
}

export default pageAdmin