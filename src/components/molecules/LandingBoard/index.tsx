import React, {FC} from 'react'
import Svg from '../../atoms/svg'
import {ILandingBoard} from '../../../__types__/ILandingBoard'
import { SectionWrapper, CardsWrapper, LandingCard} from './style'

const LandingBoard:FC<ILandingBoard> = ({header, description, BoardData}) => {
  return (
    <SectionWrapper>
      <h2>{header}</h2>
      {description && <p>{description}</p>}
     
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
