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
const StyledImg = styled.img<{scale?: number}>`
  transform: scale(${({scale}) => scale});
`
const svg:FC<ISvg> = ({scale, icon, alt, circleBg, className}) => {
  return (
    <div className={className}>
      {circleBg 
      ? <Wrapper><img src={icon} alt={alt} /></Wrapper>
      : <StyledImg src={icon} alt={alt} scale={scale}/> }
    </div>

  )
}

export default svg
