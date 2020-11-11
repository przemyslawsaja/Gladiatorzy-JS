import React, {FC} from 'react'
import styled from 'styled-components'
import Svg from '../../atoms/svg'
import {ILandingBoard} from '../../../__types__/ILandingBoard'

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const LandingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LandingBoard:FC<ILandingBoard> = ({header, description, BoardData}) => {
  return (
    <SectionWrapper>
      <h2>{header}</h2>
      <p>{description}</p>
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
