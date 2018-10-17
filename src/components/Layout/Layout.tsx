import * as React from 'react'
import Header from '../Header'
import GlobalStyle from '../../theme/globalStyle'

const Layout: React.SFC = ({ children }) => (
  <React.Fragment>
    <Header siteTitle="Code Manufacture" />
    <GlobalStyle />
    {children}
  </React.Fragment>
)

export default Layout
