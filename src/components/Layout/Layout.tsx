import * as React from 'react'
import Helmet from 'react-helmet'
import Header from '../Header'
import * as favicon from '../../images/favicon.ico'
import { StaticQuery, graphql } from 'gatsby'

const Layout: React.SFC = ({ children }) => (
  <React.Fragment>
    <Header siteTitle="Code Manufacture" />
    {children}
  </React.Fragment>
)

export default Layout
