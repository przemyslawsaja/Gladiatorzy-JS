import styled from 'styled-components'
import { device } from '../../../devices/breakpoints'
import { Link as LinkProto} from 'react-router-dom'

export const Link = styled(LinkProto)<{active?: boolean}>`
  text-decoration: ${({active})=> active ? 'underline' : 'none'};
  &:visited, &:link{
    color: #000;
  }
  &:hover {
  color: ${({theme})=> theme.primmary};
}
`
export const NavigationWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 9999;
  position: fixed;
  top: 0;
  flex-direction: row;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 20px;
  height: 80px;

  
  @media ${device.laptop} { 
    width: 1000px;
  }
`
export const NavLinks = styled.ul`
  display: none;

  @media ${device.laptop} { 
  align-items: center;
  gap: 20px;
  display: flex;
  flex-direction: row;
  }
`
export const SpecialButton = styled.button`
  background-color: ${({theme}) => theme.primmary};
  border: none;
  padding: 0 15px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  border-radius: 4px;

  &:hover {
    color: ${({theme})=> theme.primmary};
    background-color: ${({theme}) => theme.grey1};
}
`
export const Hamburger = styled.button`
  border: none;
  background: none;
  position: relative;

  @media ${device.laptop} { 
    display: none;
  }
`