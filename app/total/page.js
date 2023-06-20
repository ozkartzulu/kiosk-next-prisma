'use client'

import { useEffect, useCallback } from "react"
import useKiosk from "@/hooks/useKiosk"
import {formatCurrent} from '../../helpers'


const Total = () => {

    const { order, name, setName, putOrder, total } = useKiosk()

    const checkOrder = useCallback((e) => {
        return order.length === 0 || name === '' || name.length < 4
    }, [order, name])

    useEffect( () => {
        checkOrder()
    }, [order, checkOrder] )

    return (
        <div>
            <h1 className="text-4xl font-black">Data & Total</h1>
            <p className="text-2xl my-10">Confirm your order below</p>
            <form onSubmit={putOrder}>
                <div>
                    <label htmlFor="name" className="block uppercase text-slate-800 font-bold text-xl">Name</label>
                    <input type="text" id="name" 
                        className="bg-gray-200 w-full rounded-md p-2 mt-3 lg:w-1/3" 
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
                <div className="mt-5">
                    <p className="text-2xl">Total to Pay: <span className="font-bold">{formatCurrent(total)}</span></p>
                </div>
                <div className="mt-5">
                    <input
                        type="submit"
                        value='Confirm Order'
                        disabled={checkOrder()}
                        className={`${checkOrder() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-700'} w-full lg:w-1/3 px-5 py-2 rounded uppercase font-bold text-white text-center`}
                    />
                </div>
            </form>
        </div>
    )
}

export default Total