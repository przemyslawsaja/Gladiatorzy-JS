import { device } from './../../../../devices/breakpoints';
import styled from 'styled-components';
import Svg from '../../../atoms/svg'
export const SectionContainer = styled.section`

  display: flex;
  flex-direction: column;
  gap: 60px;
  height: 100vh;
  justify-content: center;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    text-align: left;
    gap: 200px;
  }
`
export const WelcomeMessage = styled.div`
  max-width: 400px;
`
export const StyledSvg = styled(Svg)`
  @media ${device.laptop} {
    transform: scale(1.3)
  }
  @media ${device.laptopL} {
    transform: scale(1.6)
  }
`