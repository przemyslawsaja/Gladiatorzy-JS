import React, {FC} from 'react'
import styled from 'styled-components'
import { theme } from '../theme/mainTheme'
import { ISignTemplate } from '../__types__/ISignTemplate'

const SignTemplateWrapper = styled.div`
  background: ${theme.primmary};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FormsContainer = styled.div`
  background: #fff;
  width: 90%;
  border-radius: 20px;
  webkit-box-shadow: 0px 6px 17px -3px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 6px 17px -3px rgba(0,0,0,0.75);
  box-shadow: 0px 6px 17px -3px rgba(0,0,0,0.75);
  padding: 30px;
`

const SignTemplate:FC<ISignTemplate> = ({children, type}) => {
  return (
    <SignTemplateWrapper>
      <FormsContainer>
      <h1>Witaj na platformie GladiatorzyJS!</h1>
        {type === 'sign-in' && <h3>Zaloguj się na swoje konto aby przejść dalej</h3>}
        {type === 'sign-up' && <h3>Tu stworzysz nowe konto</h3>}
      {children}
      </FormsContainer>
    </SignTemplateWrapper>
  )
}

export default SignTemplate
