import { device } from './../../../devices/breakpoints';
import styled from 'styled-components'

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 100vh;  

  @media ${device.laptop}{
    height: 60vh;  
  }
`
export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop}{
    flex-direction: row;
    gap: 100px;
  }
`
export const LandingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;

`
export const StyledDecription = styled.div`
  max-width: 350px;
  margin-bottom: 50px;

`