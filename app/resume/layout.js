import Aside from '@/components/Aside'
import Steps from '@/components/Steps'

export default function PageLayout({ children }) {
    return (
        <div className='md:flex items-start gap-6 container mx-auto px-3'>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 sticky top-0'>
                <Aside />
            </aside>
            <main className='md:w-8/12  xl:w-3/4 2xl:w-4/5 px-2'>
                <Steps />
                {children}
            </main>
        </div>
    )
}