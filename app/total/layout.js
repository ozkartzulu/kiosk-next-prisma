import Aside from '@/components/Aside'
import Steps from '@/components/Steps'

export default function PageLayout({ children }) {
    return (
        <div className='md:flex'>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                <Aside />
            </aside>
            <main className='md:w-8/12  xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                <Steps />
                {children}
            </main>
        </div>
    )
}