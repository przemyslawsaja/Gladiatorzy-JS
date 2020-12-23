import React, {FC } from 'react'
import styled from 'styled-components'
import { IInput } from '../../__types__/IInput'

const StyledInput = styled.input`
  height: 50px;
  border-radius: 10px;
  outline: none;
  padding: 10px;
  
`
const ErrorMessage = styled.p`
  color: red;

`
const Input:FC<IInput> = ({register, error, label, id, type, ...props}) => {
  return <>
    <label htmlFor={id}>{label}</label>
    <StyledInput 
      id={id}
      name={id}
      placeholder={id}
      ref={register}
      type={type}
      {...props}
    />
    {error && <ErrorMessage>{error.message}</ErrorMessage>}
  </>
}

export default Input
