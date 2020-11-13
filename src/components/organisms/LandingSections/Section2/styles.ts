import { device } from './../../../../devices/breakpoints';
import styled from 'styled-components'

export const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 200px;
  height: 100vh;  

  @media ${device.laptop}{
    height: 60vh;  
    margin-bottom: 0;
  }
`
export const CardsContainer = styled.div`
  @media ${device.tablet}{
  display: flex;
  width: 850px;
  flex-wrap: wrap;
  }
  
`
export const Container = styled.div<{inverted?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin: 5px 0;
  text-align: ${({inverted}) => inverted ? 'right' : 'left'};
  flex-direction:  ${({inverted}) => inverted ? 'row-reverse' : 'row'};
  @media ${device.mobileM} {
    margin: 20px 0;
  }
  @media ${device.tablet}{
    width: 400px;
    margin: 10px;
  }
`
export const TextContainer = styled.div`
  width: 70%;
`