import React, {FC} from 'react'
import styled from 'styled-components'
import { ISvg } from '../../__types__/ISvg'

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.primmary};
  width: 100px;
  height:100px;
  border-radius: 50px;
  display:flex;
  align-items: center;
  justify-content: center;
`
const svg:FC<ISvg> = ({icon, alt, circleBg}) => {
  return (
    <>
      {circleBg 
      ? <Wrapper><img src={icon} alt={alt} /></Wrapper>
      : <img src={icon} alt={alt} /> }
    </>

  )
}

export default svg
