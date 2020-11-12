import React , {useState} from 'react'
import menu from '../../../assets/icons/menu.svg'
import logo from '../../../assets/icons/logo.svg'
import BodyLarge from '../../atoms/BodyLarge'
import Svg from '../../atoms/svg'
import SideBar from '../SideBar'
import { useLocation } from 'react-router-dom';
import { RoutePaths} from '../../../routes'
import NavigationLinks from '../../../StaticData/Navigation'
import {
  NavigationWrapper, 
  NavLinks, 
  Link,
  SpecialButton,
  Hamburger,

}  from './style'


const Navigation = () => {
  const [isSideBarOpen, setSideBar] = useState<boolean>(false);
  const { pathname } = useLocation();

  const ToggleSideBar = () => {
    setSideBar(!isSideBarOpen);
  }
  return (
    <NavigationWrapper>
      {isSideBarOpen && <SideBar 
        isSideBarOpen={isSideBarOpen} 
        ToggleSideBar={ToggleSideBar}
      />}

      <Link to={ RoutePaths.HOME }>
          <Svg scale={1.1} icon={logo} alt="GladiatorzyJS"/>
      </Link>
      
      <NavLinks>
        <Link to={ RoutePaths.HOME }>
          <SpecialButton>
            <BodyLarge>Zostań Gladiatorem JS!</BodyLarge>
          </SpecialButton>
        </Link>

        {NavigationLinks.map(e => {
          return <Link to={e.path} active={e.path === pathname}>
                <BodyLarge>{e.content}</BodyLarge>
          </Link>
        })}
      </NavLinks>
    
      <Hamburger onClick={() => ToggleSideBar() }>
          <Svg scale={1.5} icon={menu} alt="Menu"/>
      </Hamburger>
    </NavigationWrapper>
  )
}

export default Navigation
/*

*/