import React from 'react'
import Svg from '../../../atoms/svg'
import { SectionWrapper, Container, TextContainer, CardsContainer} from './styles'
import {Section_2_DATA} from '../../../../StaticData/Data'
import H1 from '../../../atoms/H1'

const Section2 = () => {
  return (
    <SectionWrapper>
      <div>
        <H1>Zapewne masz problem...</H1>
        <p>Jako młody programista na codzień mierzysz sie z poniższymi problemami:</p>
      </div>
      <CardsContainer>
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
      </CardsContainer>
  </SectionWrapper>
  )
}

export default Section2
