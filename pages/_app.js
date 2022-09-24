import { useEffect } from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
    require('../public/js/main.js')

  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
