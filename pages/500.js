import Head from 'next/head'
import Image from 'next/image'
import imageError from './../public/images/deathstar.gif'

import * as S from '../components/Error/styles'

function Custom500() {
  return(
    <>
      <Head>
        <title>500: Internal Server Error</title>
        <meta name="description" content="500: Internal Server Error" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <S.ErrorContainer> 
        <Image 
          src={imageError}
          alt="Death Star"
          layout="fill"
          objectFit="cover"
        />
        
        <S.ErrorTitle>500: Internal Server Error</S.ErrorTitle>
      </S.ErrorContainer>
    </>
  )
}

export default Custom500
