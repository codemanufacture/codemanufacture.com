import * as React from 'react'
import Header from '../Header'

const Layout: React.SFC = ({ children }) => (
  <React.Fragment>
    <Header siteTitle="Code Manufacture" />
    {children}
  </React.Fragment>
)

export default Layout
