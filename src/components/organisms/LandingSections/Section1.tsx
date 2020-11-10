import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import BodyLarge from '../../atoms/BodyLarge'
import Sitting from '../../../assets/icons/SittingIcon'
import H1 from '../../atoms/H1'

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  height: 100vh;
  justify-content: center;
  
`
const Section1 = () => {
  return (
    <SectionWrapper>
    <div>
      <H1>Hej, programisto!</H1>
      <p>Tworzymy społeczność newbie i junior JS devów, którzy chcą wspólnie się uczyć, aby szybciej być gotowym na rynek.</p>
      <Button>
        <BodyLarge>Dołącz do Gladiatorów Javascriptu!</BodyLarge>
      </Button>
    </div>
    <Sitting />
  </SectionWrapper>
  )
}

export default Section1
