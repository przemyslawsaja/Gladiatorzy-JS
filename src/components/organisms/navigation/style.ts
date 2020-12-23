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
  flex-direction: row;
  z-index: 9999;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-between;
  width: 100%;
  background: #fff;
  padding: 20px;
  height: 80px;
  align-items: center;

  
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
export const MobileButton = styled.button`
  border: none;
  background: none;
  margin: 0 5px;

  @media ${device.laptop} { 
    display: none;
  }
`
export const AllDevicesButton = styled.button`
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 5px;
  &:hover {
    transform: scale(1.2);
  }

`