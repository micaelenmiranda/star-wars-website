import Link from 'next/link'
import Image from 'next/image'
import headerLogo from '../../public/images/star-wars-logo.svg'

import { HeaderContainer } from './styles'

function Header() {
  return(
    <HeaderContainer>
      <Link href="/">
        <a>
          <Image 
            src={headerLogo}
            alt="Star Wars logo"
            height={170} 
            width={170} 
          />
        </a>
      </Link>
    </HeaderContainer>
  )
}

export default Header
