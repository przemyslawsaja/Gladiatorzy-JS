import React from 'react'
import styled from 'styled-components'
import Section1 from '../components/organisms/LandingSections/Section1'
import Section2 from '../components/organisms/LandingSections/Section2'
import Section3 from '../components/organisms/LandingSections/Section3'
import LandingBoard from '../components/molecules/LandingBoard/LandingBoard'
import {LandingBoard_1} from '../StaticData/Data'

const LandingWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`

const Landing = () => {
  return (
    <LandingWrapper>
      <Section1 />
      <Section2 />
      <LandingBoard 
        header="..a ja rozwiązanie!"
        description="Każdy z tych problemów rozwiązuje inicjatywa, którą nazwałem Gladiatorzy Javascriptu. Można ją opisać w 3 głównych punktach:"
        BoardData={LandingBoard_1}
      />
      <Section3 />
      {/* 
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        ...
      */}
      <LandingBoard 
        header="Gladiatorzy to  "
        BoardData={LandingBoard_1}
      />
      
    </LandingWrapper>
  )
}

export default Landing
