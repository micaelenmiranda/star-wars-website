import { AnimatePresence } from 'framer-motion'

import Header from './../components/Header/index'
import Footer from './../components/Footer/index'

import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/700.css"

import GlobalStyles from '../styles/globalStyles'

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />

      <AnimatePresence
        exitBeforeEnter
        initial={false}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
