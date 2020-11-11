import React from 'react'
import Avatar from '../../../atoms/Avatar'
import {Avatars } from '../../../../StaticData/Data'
import { AvatarContainer } from './styles'

const Section3 = () => {
  return (
    <div>
      <h2>Poznaj swoich poprzedników!</h2>
      <p>Przewodzę tej społeczności i daję całą swoją 10 letnią 
      wiedzę i doświadczenie dla dobra nowych 
      pokoleń programistów JS</p>
      
      <AvatarContainer>
        {Avatars.map(e => {
          return <Avatar img={e.img} key={e.id}/>
        })}
      </AvatarContainer>

    </div>
  )
}

export default Section3;
