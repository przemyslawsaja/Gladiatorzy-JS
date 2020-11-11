import React from 'react'
import { ThemeProvider } from 'styled-components';
import Navigation from '../components/organisms/navigation'
import { theme } from '../theme/mainTheme'
import GlobalStyle  from '../theme/globalStyles';
import Landing from './Landing';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Landing />
    </ThemeProvider>
  )
}

export default Root
