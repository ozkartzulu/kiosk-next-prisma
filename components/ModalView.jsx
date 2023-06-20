'use client'
import { useState, useEffect } from 'react';
import Modal from 'react-modal'
import Image from 'next/image';
import useKiosk from '@/hooks/useKiosk';
import {formatCurrent} from '@/helpers'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#___next');

const ModalView = () => {

    const {modal, product, handleSetModal, handleSetOrder, order} = useKiosk()
    const [amount, setAmount] = useState(1)
    const [edited, setEdited] = useState(false)

    useEffect( () => {
        if(order.some( or => or.id === product.id )){
            const matchProduct = order.find( ord => ord.id === product.id )
            setEdited(true)
            setAmount(matchProduct.amount)
        }
        else {
            setAmount(1)
            setEdited(false)
        }
    },[product, order] )

    

    return (
        <>
        <ToastContainer />
         { modal && (
            <Modal key={product.id} isOpen={modal} style={customStyles} >
                <div className='md:flex gap-10'>
                    <div className='md:w-1/3'>
                        <Image 
                            width={300}
                            height={300}
                            src={`/assets/img/${product.imagen}.jpg`}
                            alt={`Image of ${product.name}`}
                        />
                    </div>
                    <div className='md:w-2/3'>
                        <div className='flex justify-end'>
                            <button onClick={handleSetModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <h1 className='text-3xl font-bold mt-5'>{product.name}</h1>
                        <p className='mt-5 font-black text-5xl text-amber-500'>{formatCurrent(product.price)}</p>
                        <div className='flex gap-3 mt-3 items-center'>
                            <button onClick={ () => {
                                if(amount <= 1) return
                                setAmount(amount - 1)
                            } }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            {<p className='font-bold'>{amount}</p>}
                            <button onClick={ () => {
                                if(amount >= 5) return
                                setAmount(amount + 1)
                            } }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                        <button 
                            className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-4 text-white font-bold uppercase rounded'
                            type='button'
                            onClick={ () => {
                                handleSetOrder({...product, amount})
                            } }
                        >
                            { edited ? 'Update Order': 'Add Order'}
                        </button>
                    </div>
                </div>
            </Modal>
        )}
        </>
        
    )
}

export default ModalView