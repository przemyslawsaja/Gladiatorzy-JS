import React from 'react'
import { FooterWrapper, Copyright, FooterContent, SocialMedia } from './style'
import logo2 from '../../../assets/icons/logo_2.svg'
import fb from '../../../assets/icons/fb.svg'
import git from '../../../assets/icons/git.svg'
import Svg from '../../atoms/svg'

const Footer = () => {
  return (
      <FooterWrapper>
        <FooterContent>
            <Svg icon={logo2} alt="GladiatorzyJS"/>
            <div>
            <p>Strona główna</p>
            <p>O mnie</p>
            <p>Kontakt</p>
            </div>
          
            <div>
              <p>Regulamin sklepu</p>
              <p>Regulamin zwrotówe</p>
              <p>Rodo</p>
              <p>Polityka prywatności</p>
            </div>
            <SocialMedia>
              <Svg icon={fb} alt="facebook"/>
              <Svg icon={git} alt="github"/>
            </SocialMedia>
        </FooterContent>
        <Copyright>© Copyright 2020 by Localhost Group sp.z.o.o</Copyright>
      </FooterWrapper>
  )
}

export default Footer
