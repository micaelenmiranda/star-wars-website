import Link from 'next/link'
import Image from 'next/image'
import headerLogo from '../../public/images/star-wars-logo.svg'

import * as S from './styles'

function Header() {
  return(
    <S.HeaderContainer>
      <Link href="/" passHref>
          <S.HeaderLogo>
            <Image 
              src={headerLogo}
              alt="Star Wars logo"
            />
          </S.HeaderLogo>
      </Link>
    </S.HeaderContainer>
  )
}

export default Header
