import React from 'react'
import styled from 'styled-components'
import menu from '../../../assets/icons/menu.svg'
import logo from '../../../assets/icons/logo.svg'

const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80px;
  width: 100vw;
  background: #fff;
`
const Navigation = () => {
  return (
    <NavigationWrapper>
      <img src={logo} alt="GladiatorzyJS"/>
      <img src={menu} alt="menu"/>
    </NavigationWrapper>
  )
}

export default Navigation
