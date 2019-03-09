import * as React from 'react'
import Header from '../Header'
import GlobalStyle from '../../theme/globalStyle'
import Footer from '../Footer'
import GoToTop from '../GoToTop'
import MetaData from '../MetaData'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <MetaData />
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
      <GoToTop />
    </>
  )
}

export default Layout
