import React, {FC} from 'react'
import Svg from '../../atoms/svg'
import H1 from '../../atoms/H1'
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
      <H1>{header}</H1>
      {description && <StyledDecription>{description}</StyledDecription>}
     
      <CardsWrapper>
        {BoardData.map(e => {
          return(
            <LandingCard>
              <Svg icon={e.icon} alt={e.alt} circleBg/>
              <p>
                {e.description}
              </p>
            </LandingCard>
          )
        })}
      </CardsWrapper>
    </SectionWrapper>
  )
}

export default LandingBoard;
