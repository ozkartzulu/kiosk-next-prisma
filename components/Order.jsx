
import Image from "next/image"
import { formatCurrent } from '../helpers'
import { toast } from 'react-toastify'

const Order = ({orderProd}) => {

    const { id, name, order, total} = orderProd

    const completeOrder = async () => {
        try {
            const orderUpdated = await fetch(`/api/orders/${id}`, {
                method: 'POST',
            }).then( res => res.json())
            // console.log(orderUpdated)
            toast.success('Order Ready!!!')
        } catch (error) {
            toast.error('There is a error!!!')
        }
    }

    return (
        <div>
            <div className="border p-10 space-y-5">
                <h3 className="text-2xl font-bold">Order: {id}</h3>
                <p className="text-lg my-10 font-bold">Client: {name}</p>
            </div>
            <div>
                {order.map( ord => (
                    <div key={ord.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                        <div className="w-32">
                            <Image 
                                width={400}
                                height={500}
                                src={`/assets/img/${ord.imagen}.jpg`}
                                alt={`Image of ${name}`}
                            />
                        </div>
                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">{ord.name}</h4>
                            <p className="text-lg font-bold ">Amount: {ord.amount}</p>
                        </div>
                    </div>
                ) )}
            </div>
            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">Total to Pay: {formatCurrent(total)}</p>
                <button
                    onClick={ completeOrder } 
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase rounded-md"
                >Complete Order</button>
            </div>
        </div>
    )
}

export default Order