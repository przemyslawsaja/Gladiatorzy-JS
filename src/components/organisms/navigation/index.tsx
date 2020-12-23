import React , {useState} from 'react'
import Svg from '../../atoms/svg'
import Icon from '../../atoms/Icon'
import logo from '../../../assets/icons/logo.svg'
import SideBar from '../SideBar'
import BodyLarge from '../../atoms/BodyLarge'
import NavigationLinks from '../../../StaticData/Navigation'

import { RoutePaths} from '../../../routes';
import { useLocation } from 'react-router-dom';
import {
  Link,
  NavLinks, 
  MobileButton,
  AllDevicesButton,
  NavigationWrapper, 
}  from './style'
import { ShoppingCartModal } from '../ShoppingCartModal'


const Navigation = () => {
  const [isSideBarOpen, setSideBar] = useState<boolean>(false);
  const [isShopingCartOpen, setShopingCartVisibility] = useState<boolean>(false);
  const { pathname } = useLocation();

  const ToggleSideBar = () => {
    setSideBar(!isSideBarOpen);
  }
  const ToogleCartModal = () => {
    setShopingCartVisibility(!isShopingCartOpen);
  }
  return (
    <>
    {isShopingCartOpen && <ShoppingCartModal ToogleCartModal={ToogleCartModal}/> }
    <NavigationWrapper >
      
      {isSideBarOpen && <SideBar 
        isSideBarOpen={isSideBarOpen} 
        ToggleSideBar={ToggleSideBar}
      />}

      <Link to={ RoutePaths.HOME }>
          <Svg scale={1.1} icon={logo} alt="GladiatorzyJS"/>
      </Link>
      
      <NavLinks>
        {NavigationLinks.map((e,idx) => {
          return <Link to={e.path} key={idx} active={e.path === pathname}>
                <BodyLarge>{e.content}</BodyLarge>
          </Link>
        })}         
      </NavLinks>

      <div>
        <AllDevicesButton onClick={() => console.log("Toggle Wish List")}>
          <Icon size={2} color="#000" className="far fa-heart" /> 
        </AllDevicesButton>
        <AllDevicesButton onClick={() => ToogleCartModal()}>
            <Icon size={2} color="#000" className="fas fa-shopping-cart" /> 
        </AllDevicesButton>
        <MobileButton onClick={() => ToggleSideBar()}>
          <Icon size={2} color="#000" className="fas fa-bars" /> 
        </MobileButton>
      </div>

    </NavigationWrapper>
    </>
    
  )
}

export default Navigation
