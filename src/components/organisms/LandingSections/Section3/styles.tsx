import styled from 'styled-components'
import { device } from '../../../../devices/breakpoints'

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;  

  @media ${device.laptop}{
  height: 60vh;  
}
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  max-height: 500px;
  overflow-y: hidden;

  @media ${device.laptop}{
    width: 650px;
  }
`

