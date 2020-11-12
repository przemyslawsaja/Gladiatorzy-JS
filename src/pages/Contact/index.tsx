import React from 'react'
import { ContactWrapper } from './style'
import H1 from '../../components/atoms/H1'
import MainTemplate from '../../templates/MainTemplate'

const Contact = () => {
  return (
    <MainTemplate>
      <ContactWrapper>
          <H1>Contact Page</H1>   
      </ContactWrapper>
    </MainTemplate>
  )
}

export default Contact
