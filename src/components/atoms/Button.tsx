import React, {FC} from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  width: 342px;
  height: 54px;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: ${({theme}) => theme.primmary};
`
interface ButtonProps {
  children: React.ReactNode
}
const Button:FC<ButtonProps> = ({children}) => {
  return (
    <ButtonWrapper>
      {children}
    </ButtonWrapper>
  )
}

export default Button
