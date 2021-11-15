import Head from 'next/head'
import Image from 'next/image'
import imageError from './../public/images/deathstar.gif'

import GlobalStyles from './../styles/globalStyles'
import Header from './../components/Header/index'
import Footer from './../components/Footer/index'

import { 
  ErrorContainer,
  ErrorTitle
} from '../components/Error/styles'

function Custom404() {
  return(
    <>
      <Head>
        <title>404: Page Not Found</title>
        <meta name="description" content="404: Page Not Found" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <ErrorContainer> 
        <Image 
          src={imageError}
          alt="Death Star"
          layout="fill"
          objectFit="cover"
        />
        
        <ErrorTitle>404: Page Not Found</ErrorTitle>
      </ErrorContainer>

      <Footer />

      <GlobalStyles />
    </>
  )
}

export default Custom404
