import Head from 'next/head'
import { useRouter } from 'next/router'
import Login from 'components/Login'

export default function Protected({ hasReadPermission }) {
    const router = useRouter()
    console.log('in protected:', router.asPath)
    if (!hasReadPermission) {
        return <Login redirectPath='/protected' />
    }


    return (
        <div>
            <Head>
                <title>Protected Page</title>
            </Head>

            <main className="bg-yellow-300 text-2xl border-2 border-black p-11 m-40">
                <h2>I am a protected page!!</h2>
                <button 
                    className='mt-3 bg-black text-yellow-300 p-2 font-bold rounded hover:bg-gray-600'
                    onClick={(e) => {
                    e.preventDefault()
                    window.location.href = '/login'
                    }}
                >
                    Logout Page
                </button>
                <div>
                    <button 
                        className='mt-3 bg-black text-yellow-300 p-2 font-bold rounded hover:bg-gray-600'
                        onClick={(e) => {
                        e.preventDefault()
                        window.location.href = '/'
                        }}
                    >
                    Home
                    </button>
                </div>
            </main>
        </div>
    )
}