import React from 'react'
import styled from 'styled-components'
import Section1 from '../components/organisms/LandingSections/Section1'
import Section2 from '../components/organisms/LandingSections/Section2'

const LandingWrapper = styled.div`
  
  text-align: center;
  display: flex;
  flex-direction: column;
  
`

const Landing = () => {
  return (
    <LandingWrapper>
      <Section1 />
      <Section2 />
    </LandingWrapper>
  )
}

export default Landing
