import React, {FC} from 'react'
import { Link } from '../navigation/style'
import { SideBarWrapper, ExitButton } from './style'
import BodyLarge from '../../atoms/BodyLarge'
import NavigationLinks from '../../../StaticData/Navigation'
import { useLocation } from 'react-router-dom';
import { ISideBar} from '../../../__types__/ISideBar'
const SideBar:FC<ISideBar> = ({ToggleSideBar,isSideBarOpen}) => {
  const { pathname } = useLocation();

  return (
    <SideBarWrapper isSideBarOpen={isSideBarOpen}>
      <ExitButton onClick={() => ToggleSideBar()} />

      {NavigationLinks.map(e => {
          return <Link to={e.path} active={e.path === pathname}>
                <BodyLarge>{e.content}</BodyLarge>
          </Link>
        })}
    </SideBarWrapper>
  )
}

export default SideBar;
