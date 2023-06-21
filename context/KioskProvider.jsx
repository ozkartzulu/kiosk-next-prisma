'use client'

import {useState, useEffect, createContext } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
// import axios from 'axios'

const KioskContext = createContext()

function KioskProvider({children}) {

    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState(null)
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [name, setName] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()

    useEffect( () => {
        const getCategories =  () => {
            fetch('/api/categories')
            .then(async (res) => {
                setCategories(await res.json())
            })
            .catch( error => console.log(error))
        }
        getCategories()
    }, [] )

    useEffect( () => {
        setCurrentCategory(categories[0])
    }, [categories] )

    useEffect( () => {
        const totalOrder = order.reduce( (total, product) => (product.price * product.amount) + total, 0 )
        setTotal(totalOrder)
    }, [order] )

    const handleClickCategory = (id) => {
        const findCategory = categories.filter( category => category.id === id)
        setCurrentCategory(findCategory[0])
        router.push('/products')
    }

    const handleSetProduct = (prod) => {
        setProduct(prod)
    }

    const handleSetModal = () => {
        setModal(!modal)
    }

    const handleSetOrder = ({categoryId, ...product}) => {
        if( order.some( ord => ord.id === product.id ) ){
            const orderUpdated = order.map( or => or.id === product.id ? product : or )
            setOrder(orderUpdated)
            toast.success('You order was updated!')
        }else{
            setOrder([...order, product])
            toast.success('You order was saved!')
        }
        setModal(false) 
    }

    const handleEditProduct = (id) => {
        const currentProduct = order.filter( product => product.id === id )
        setProduct(currentProduct[0])
        setModal(!modal)
    }

    const handleDeleteProduct = (id) => {
        const updateOrders = order.filter( product => product.id !== id)
        setOrder(updateOrders)
    }

    const putOrder = async (e) => {
        e.preventDefault()
        // console.log('enter of putOrder')
        try {
            const resp = await fetch('/api/orders',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({order, name, total, date: Date.now().toString()})
            })

            // await axios.post(`/api/orders`, {order, name, total, date: Date.now().toString()})
            // console.log('enter of try after axios')
            // reset states of app
            setCurrentCategory(categories[0])
            setOrder([])
            setName('')
            setTotal(0)
            // console.log('enter of try after resets')

            toast.success('Order Sent Successfully!!')

            setTimeout( () => {
                router.push('/products')
            }, 3000 )
            
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
    <KioskContext.Provider 
        value={{
            categories, currentCategory, 
            handleClickCategory, 
            handleSetProduct, product,
            handleSetModal, modal,
            handleSetOrder, order,
            handleEditProduct, handleDeleteProduct,
            name, setName,
            putOrder,
            total
        }}
    >
        {children}
    </KioskContext.Provider>
    )
}

export {
    KioskProvider
}

export default KioskContext