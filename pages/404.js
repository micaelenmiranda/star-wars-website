import Head from 'next/head'
import Image from 'next/image'
import imageError from './../public/images/deathstar.gif'

import * as S from '../components/Error/styles'

function Custom404() {
  return(
    <>
      <Head>
        <title>404: Page Not Found</title>
        <meta name="description" content="404: Page Not Found" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <S.ErrorContainer> 
        <Image 
          src={imageError}
          alt="Death Star"
          layout="fill"
          objectFit="cover"
        />
        
        <S.ErrorTitle>404: Page Not Found</S.ErrorTitle>
      </S.ErrorContainer>
    </>
  )
}

export default Custom404
