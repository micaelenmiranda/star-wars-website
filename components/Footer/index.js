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
        <FooterLink href="https://www.starwars.com/" target="_blank">
          Star Wars Official Website
        </FooterLink>
      </FooterInfo>
    </FooterContainer>
  )
}

export default Footer
