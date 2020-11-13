import React from 'react'
import Avatar from '../../../atoms/Avatar'
import {Avatars } from '../../../../StaticData/Data'
import { AvatarContainer } from './styles'
import H1 from '../../../atoms/H1'
import { SectionWrapper } from './styles'
import { StyledDecription } from '../../../molecules/LandingBoard/style'

const Section3 = () => {
  return (
    <SectionWrapper>
      <H1>Poznaj swoich poprzedników!</H1>
      <StyledDecription>
      Przewodzę tej społeczności i daję całą swoją 10 letnią 
      wiedzę i doświadczenie dla dobra nowych 
      pokoleń programistów JS
      </StyledDecription>
      
      <AvatarContainer>
        {Avatars.map(e => {
          return <Avatar img={e.img} key={e.id}/>
        })}
      </AvatarContainer>

    </SectionWrapper>
  )
}

export default Section3;
