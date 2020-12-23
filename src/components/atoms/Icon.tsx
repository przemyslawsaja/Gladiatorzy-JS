import React, {FC} from 'react';
import styled from 'styled-components'
import { IIcon } from '../../__types__/IIcon'

const StyledIcon = styled.i<{color: string, size?: number, rotate?: number}>`
  font-size:  ${({size}) => size ? size : 1.5}em;
  color: ${props => props.color};
  transform:  rotate(${props => props.rotate}deg); 
`
const Icon:FC<IIcon> = ({className, color, rotation, size, onClick}) => {
  return <StyledIcon className={className} color={color} rotate={rotation} size={size} onClick={onClick}/>
}

export default Icon;