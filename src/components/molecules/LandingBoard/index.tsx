import React, {FC} from 'react'
import Svg from '../../atoms/svg'
import H1 from '../../atoms/H1'
import ScrollAnimation from 'react-animate-on-scroll';
import {ILandingBoard} from '../../../__types__/ILandingBoard'
import { 
  SectionWrapper, 
  CardsWrapper, 
  LandingCard ,
  StyledDecription
} 
  from './style'

const LandingBoard:FC<ILandingBoard> = ({header, description, BoardData}) => {
  return (
    <SectionWrapper>
      <ScrollAnimation animateIn="animate__fadeInUp"> 
      <H1>{header}</H1>
      {description && <StyledDecription>{description}</StyledDecription>}
      </ScrollAnimation>
      <CardsWrapper>
        {BoardData.map(e => {
          return(
            <ScrollAnimation animateIn="animate__fadeInUp"> 
            <LandingCard>
              <Svg icon={e.icon} alt={e.alt} circleBg/>
              <p>
                {e.description}
              </p>
            </LandingCard>
            </ScrollAnimation>
          )
        })}
      </CardsWrapper>
    </SectionWrapper>
  )
}

export default LandingBoard;
