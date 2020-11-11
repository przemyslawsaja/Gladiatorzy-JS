import React from 'react'
import Button from '../../../atoms/Button'
import BodyLarge from '../../../atoms/BodyLarge'
import H1 from '../../../atoms/H1'
import sitting from '../../../../assets/icons/sitting.svg'
import Svg from '../../../atoms/svg'
import {SectionContainer} from './styles'

const Section1 = () => {
  return (
    <SectionContainer>
    <div>
      <H1>Hej, programisto!</H1>
      <p>Tworzymy społeczność newbie i junior JS devów, którzy chcą wspólnie się uczyć, aby szybciej być gotowym na rynek.</p>
      <Button>
        <BodyLarge>Dołącz do Gladiatorów Javascriptu!</BodyLarge>
      </Button>
      <Svg icon={sitting} alt="sitting"/>
    </div>
    
  </SectionContainer>
  )
}

export default Section1
