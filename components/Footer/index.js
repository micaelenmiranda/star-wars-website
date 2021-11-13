import Link from 'next/link'

import { 
  FooterContainer,
  FooterInfo,
  FooterLink
} from './styles'

function Footer() {
  return(
    <FooterContainer>
      <FooterInfo>TM &amp; &copy; Lucasfilm Ltd. All Rights Reserved</FooterInfo>
  
      <FooterInfo>
        <Link href="https://www.starwars.com/" passHref>
          <FooterLink>Star Wars Official Website</FooterLink>
        </Link>
      </FooterInfo>
    </FooterContainer>
  )
}

export default Footer
