import React from 'react'
import Svg from '../../../atoms/svg'
import { SectionWrapper, Container, TextContainer} from './styles'
import {Section_2_DATA} from '../../../../StaticData/Data'

const Section2 = () => {
  return (
    <SectionWrapper>
      <div>
        <h2>Zapewne masz problem...</h2>
        <p>Jako młody programista na codzień mierzysz sie z poniższymi problemami:</p>
      </div>

      {Section_2_DATA.map(e => {
        return (
        <Container inverted={e.inverted}> 
          <Svg icon={e.icon} alt={e.alt} circleBg/>
          <TextContainer> 
              <b>{e.Bold}</b>
              {e.description}
          </TextContainer>
        </Container>
        )
      })}
  </SectionWrapper>
  )
}

export default Section2
