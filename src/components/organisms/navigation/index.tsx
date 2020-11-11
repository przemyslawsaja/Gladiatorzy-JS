import React from 'react'
import {NavigationWrapper} from './style'
import menu from '../../../assets/icons/menu.svg'
import logo from '../../../assets/icons/logo.svg'


const Navigation = () => {
  return (
    <NavigationWrapper>
      <img src={logo} alt="GladiatorzyJS"/>
      <img src={menu} alt="menu"/>
    </NavigationWrapper>
  )
}

export default Navigation
