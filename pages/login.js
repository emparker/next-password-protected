import Head from 'next/head'
import Cookies from 'universal-cookie'
import Login from 'components/Login'
import consts from 'consts'

export default function LoginPage({ hasReadPermission }) {
    if (hasReadPermission) {
        return (
            <>
                <Head>
                    <title>Logout</title>
                </Head>
                <div className='bg-yellow-300 text-2xl border-2 border-black p-11 m-40'>
                    <h2>EMILY WAS HERE</h2>
                    <button 
                        className='mt-3 bg-black text-yellow-300 p-2 font-bold rounded hover:bg-gray-500'
                        onClick={(e) => {
                            e.preventDefault()
                            const cookies = new Cookies()
                            cookies.remove(consts.SiteReadCookie, {path: '/'})
                            window.location.href = '/login'
                        }}
                        >
                            Logout
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
                </div>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Login redirectPath='/' />
        </>
    )
}