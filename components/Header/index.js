import Link from 'next/link'
import Image from 'next/image'
import headerLogo from '../../public/images/star-wars-logo.svg'

import { 
  HeaderContainer,
  HeaderLogo
} from './styles'

function Header() {
  return(
    <HeaderContainer>
      <Link href="/" passHref>
          <HeaderLogo>
            <Image 
              src={headerLogo}
              alt="Star Wars logo"
            />
          </HeaderLogo>
      </Link>
    </HeaderContainer>
  )
}

export default Header
