import React from 'react'
import styled from 'styled-components'
import H1 from '../../atoms/H1'
import Student from '../../../assets/icons/StudentIcon'
import ChatIcon from '../../../assets/icons/ChatIcon'
import ArticleIcon from '../../../assets/icons/ArticleIcon'
import BulbIcon from '../../../assets/icons/BulbIcon'

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100vh;
  margin: 0 20px;
  
`

const Container = styled.div<{inverted?: boolean}>`
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: ${({inverted}) => inverted ? 'right' : 'left'};
  flex-direction:  ${({inverted}) => inverted ? 'row-reverse' : 'row'};
`
const TextContainer = styled.div`
  width: 70%;
  
`
const Section1 = () => {
  return (
    <SectionWrapper>
      <div>
        <h2>Zapewne masz problem...</h2>
        <p>Jako młody programista na codzień mierzysz sie z poniższymi problemami:</p>
      </div>
      <Container inverted>
        <Student />
        <TextContainer> 
          Jak skutecznie mam się rozwijać i które umiejętności są istotne? 
          </TextContainer>
      </Container>
      <Container >
        <ChatIcon />
        <TextContainer>
          Gdzie znajdę doświadczonego kolegę, który sprawdzi mój kod?
          </TextContainer>
      </Container>
      <Container inverted>
        <ArticleIcon />
        <TextContainer>
        Gdzie mogę znaleźć praktyczne zadania programistyczne, które stanowią wyzwanie i zapewnią rozwój?
          </TextContainer>
      </Container>
      <Container >
        <BulbIcon />
        <TextContainer>
          Gdzie znajdę doświadczonego kolegę, który sprawdzi mój kod?
          </TextContainer>
      </Container>
  </SectionWrapper>
  )
}

export default Section1
