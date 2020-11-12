import React from 'react'
import { ThemeProvider } from 'styled-components';
import Navigation from '../components/organisms/navigation'
import { theme } from '../theme/mainTheme'
import GlobalStyle  from '../theme/globalStyles';
import Landing from './Landing';
import Footer from '../components/organisms/footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '../routes';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Router>
        <Switch>
          { routes.map((route, i) => <Route { ...route } key={ i } />) }
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  )
}

export default Root
