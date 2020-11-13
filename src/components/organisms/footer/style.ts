import { theme } from './../../../theme/mainTheme';
import { device } from './../../../devices/breakpoints';
import styled from 'styled-components'
import Svg from '../../atoms/svg'
import { Link } from 'react-router-dom'

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  left:0;
  height: 400px;
  width: 100%;
  background-color: ${({theme}) => theme.grey1};
  color: #fff;
`
export const Copyright = styled.div`
 position: absolute; 
 left: 50%;
 transform: translateX(-50%);
 bottom: 0;
 text-align: center;
 font-size: ${({theme}) => theme.fontSize.xs};
  margin: 10px;
  width: 80%;
`
export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  @media ${device.laptop}{
    gap: 100px;
  }
  
`
export const DestkopSocialMedia = styled.div`
  display: none;
  @media ${device.laptop}{
    display: flex;
    gap: 40px;
    margin-left: 200px;
  }
`
export const MobileSocialMedia = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media ${device.laptop}{
    display: none;
  }
`
export const DesktopLogo = styled(Svg)`
  display: none;
  @media ${device.laptop}{
    display: block;
  }
`
export const MobileLogo = styled(Svg)`
  @media ${device.laptop}{
    display: none;
  }
`
export const MobileIcons = styled.div`
  display: flex;
  gap:100px;
  justify-content: flex-start;
  width: 325px;
`
export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:active::visited{
    color: #fff;
  }
  &:hover {
    color: ${({theme}) => theme.primmary};
  }
`