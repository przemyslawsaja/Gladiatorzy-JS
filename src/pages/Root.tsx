import React from 'react'
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/mainTheme'
import GlobalStyle  from '../theme/globalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '../routes';
import MainTemplate from '../templates/MainTemplate';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <MainTemplate>
          { routes.map((route, i) => <Route { ...route } key={ i } />) }
          </MainTemplate>
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Root
