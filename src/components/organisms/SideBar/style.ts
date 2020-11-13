import styled, {keyframes} from 'styled-components'
import exit from '../../../assets/icons/exit.svg'
const SlideIn = keyframes`
  0% {
    -webkit-transform: translateX(300px);
            transform: translateX(300px);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
`
const SlideOut = keyframes`
  0% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(300px);
            transform: translateX(300px);
  }
`

export const SideBarWrapper = styled.div<{isSideBarOpen: boolean}>`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  background: ${({theme}) => theme.primmary};
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 850ms;
  animation: ${({isSideBarOpen}) => isSideBarOpen ? SlideIn : SlideOut } 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


`
export const ExitButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 35px;
  height: 35px;
  border: 0;
  background-image: url(${exit});
  background-color: ${({theme}) => theme.primmary};
`