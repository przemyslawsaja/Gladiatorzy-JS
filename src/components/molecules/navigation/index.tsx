import React from 'react'
import styled from 'styled-components'
import Hamburger from '../../../assets/icons/HamburgerIcon'
import Logo1 from '../../../assets/icons/logo1'

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
      <Logo1 />
      <Hamburger/>
    </NavigationWrapper>
  )
}

export default Navigation
