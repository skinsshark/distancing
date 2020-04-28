import { useEffect } from 'react'
import sal from 'sal.js'

import '../global.css'

function App({ Component, pageProps }) {
  useEffect(() => {
    sal();
  })

  return <Component {...pageProps} />
}

export default App
