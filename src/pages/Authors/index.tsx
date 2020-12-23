import React from 'react'
import { AboutWrapper } from './style'
import H1 from '../../components/atoms/H1'
import MainTemplate from '../../templates/MainTemplate'

const About = (): JSX.Element => {
  return <MainTemplate>
      <AboutWrapper>
     
          <H1>Autorzy projektu</H1>   
          <p>Przemysław Saja</p>
          <p>Tomasz Sergiel</p>
          <h2>Motivation</h2>
          <p>Celem projektu jest stworzenie systemu ułatwiającego zdalną naukę użytkowników należących do tego systemu oraz możliwość tworzenia własnych materiałów do nauki przez tych właśnie użytkowników.</p>
          <h2>Opis projektu</h2>
          <ul>
            <li>Charakterystyka użytkowników obecnych w systemie.</li>
            <li>Określenie wymagań funkcjonalnych i niefunkcjonalnych systemu.</li>
            <li>Modelowanie diagramów przypadków użycia, klas, ERD, aktywności, sekwencji, stanów.</li>
          <li>Zaprojektowanie bazy danych</li>
          <li>	Stworzenie funkcjonalnej aplikacji, z intuicyjnym interfejsem użytkownika oraz sprawnie działającą częścią serwerową.</li>
          <li>Wykonanie dokumentacji projektu. </li>
  

          </ul>
      </AboutWrapper>
    </MainTemplate>

}

export default About
