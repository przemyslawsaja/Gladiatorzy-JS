import styled from 'styled-components'

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100vh;  
`
export const Container = styled.div<{inverted?: boolean}>`
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: ${({inverted}) => inverted ? 'right' : 'left'};
  flex-direction:  ${({inverted}) => inverted ? 'row-reverse' : 'row'};
`
export const TextContainer = styled.div`
  width: 70%;
`