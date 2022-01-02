import * as S from './styles'

function Footer() {
  return(
    <S.FooterContainer>
      <S.FooterInfo>TM &amp; &copy; Lucasfilm Ltd. All Rights Reserved</S.FooterInfo>
  
      <S.FooterInfo>
        <S.FooterLink href="https://www.starwars.com/" target="_blank">
          Star Wars Official Website
        </S.FooterLink>
      </S.FooterInfo>
    </S.FooterContainer>
  )
}

export default Footer
