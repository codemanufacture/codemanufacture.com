import * as React from 'react'
import Header from '../Header'
import GlobalStyle from '../../theme/globalStyle'
import Footer from '../Footer'
import MetaData from '../MetaData'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MetaData />
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
