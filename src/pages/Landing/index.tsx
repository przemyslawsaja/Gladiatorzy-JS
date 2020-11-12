import React from 'react'
import Section1 from '../../components/organisms/LandingSections/Section1'
import Section2 from '../../components/organisms/LandingSections/Section2'
import Section3 from '../../components/organisms/LandingSections/Section3'
import LandingBoard from '../../components/molecules/LandingBoard'
import {LandingBoard_1} from '../../StaticData/Data'
import { LandingWrapper } from './style'
import MainTemplate from '../../templates/MainTemplate'

const Landing = () => {
  return (
    <MainTemplate>
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
    </MainTemplate>
  )
}

export default Landing
