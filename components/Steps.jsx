
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const steps = [
    {step: 1, name: 'Menu', url: '/products'},
    {step: 2, name: 'Resume', url: '/resume'},
    {step: 3, name: 'Data and Total', url: '/total'},
]

const Steps = () => {

    const pathname = usePathname()

    const calculateProgress = () => {
        let valor = 5;
        if(pathname === '/resume') valor = 50
        if(pathname === '/total') valor = 100
        return valor
    }

  return (
    <>
        <div className="flex justify-between mb-5">
            {steps.map( (step) => <Link 
                key={step.step} 
                className="text-2xl font-bold"
                href={`${step.url}`}
            >{step.name}</Link> )}
        </div>
        <div className='bg-gray-100 mb-10'>
            <div className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center' 
                style={{ width: `${calculateProgress()}%`}}
            >

            </div>
        </div>
    </>
  )
}

export default Steps