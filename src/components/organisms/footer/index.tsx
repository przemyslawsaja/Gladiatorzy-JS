import React from 'react'
import logo2 from '../../../assets/icons/logo_2.svg'
import fb from '../../../assets/icons/fb.svg'
import git from '../../../assets/icons/git.svg'
import Svg from '../../atoms/svg'
import { RoutePaths } from '../../../routes'
import { 
  FooterWrapper, 
  Copyright, 
  FooterContent, 
  DestkopSocialMedia ,
  DesktopLogo,
  MobileLogo,
  MobileSocialMedia,
  MobileIcons,
  FooterLink,
  FooterLinksContainer
} from './style'

const Footer = () => {
  return (
      <FooterWrapper>
        <MobileIcons>
          <MobileLogo icon={logo2} alt="GladiatorzyJS"/>
          <MobileSocialMedia>
              <Svg icon={fb} alt="facebook"/>
              <Svg icon={git} alt="github"/>
            </MobileSocialMedia>
        </MobileIcons>
  
        <FooterContent>
            <DesktopLogo scale={2} icon={logo2} alt="GladiatorzyJS"/>
            <FooterLinksContainer>
              <FooterLink to={RoutePaths.HOME}>
                Strona główna
              </FooterLink>
              <FooterLink to={RoutePaths.ABOUT}>
                O mnie
              </FooterLink>
              <FooterLink to={RoutePaths.CONTACT}>
                Kontakt
              </FooterLink>
            </FooterLinksContainer>
          
            <div>
              <p>Regulamin sklepu</p>
              <p>Regulamin zwrotówe</p>
              <p>Rodo</p>
              <p>Polityka prywatności</p>
            </div>
            <DestkopSocialMedia>
              <Svg  icon={fb} alt="facebook"/>
              <Svg  icon={git} alt="github"/>
            </DestkopSocialMedia>
        </FooterContent>
        <Copyright>© Copyright 2020 by Localhost Group sp.z.o.o</Copyright>
      </FooterWrapper>
  )
}

export default Footer
