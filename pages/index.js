import Head from 'next/head'

import GlobalStyles from '../styles/globalStyles'
import Header from './../components/Header/index'
import Footer from './../components/Footer/index'

function IndexPage() {
  return (
    <>
      <GlobalStyles />
      
      <Head>
        <title>Star Wars franchise</title>
        <meta name="description" content="A website dedicated to the Star Wars franchise" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <Footer />
    </>
  )
}

export default IndexPage
