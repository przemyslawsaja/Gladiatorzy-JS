import React, {FC} from 'react'
import Navigation from '../components/organisms/navigation'
import Footer from '../components/organisms/footer'
import { IMainTemplate} from '../__types__/IMainTemplate'

const MainTemplate:FC<IMainTemplate> = ({children}) => {
  return (
    <>
      <Navigation/>
      {children}
      <Footer />
    </>
  )
}

export default MainTemplate
