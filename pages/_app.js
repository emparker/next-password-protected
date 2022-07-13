import App from 'next/app'
import Cookies from 'universal-cookie'
import consts from 'consts'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  const cookies = new Cookies(appContext.ctx.req.headers.cookie)
  const password = cookies.get(consts.SiteReadCookie) ?? ""
  console.log(cookies)
  console.log({password})


  if (password === "letmein") {
    appProps.pageProps.hasReadPermission = true
  }

  return { ...appProps }
}

export default MyApp






//// code came with /////

// import 'tailwindcss/tailwind.css';
// import Head from 'next/head';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;
