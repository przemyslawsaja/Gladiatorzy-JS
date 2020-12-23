import React, {FC} from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button<{secondary?: boolean}>`
  padding: 20px 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  color: ${({secondary}) => secondary ? '#fff ': '#000' };
  background-color: ${({theme,secondary}) => secondary ? theme.grey2 : theme.primmary};
  -webkit-box-shadow: 0px 6px 19px 0px rgba(0,0,0,0.33);
  -moz-box-shadow: 0px 6px 19px 0px rgba(0,0,0,0.33);
  box-shadow: 0px 6px 19px 0px rgba(0,0,0,0.33);
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${({theme,secondary}) => secondary ? theme.grey3 : theme.secondary};
  }
`
interface ButtonProps {
  children: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  secondary?: boolean;
}
const Button:FC<ButtonProps> = ({secondary, children, type, onClick, ...props}) => {
  return (
    <ButtonWrapper onClick={onClick} type={type} {...props} secondary={secondary}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
