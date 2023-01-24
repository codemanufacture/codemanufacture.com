import * as React from 'react'
import Header from '../Header'
import { globalStyles } from 'twin.macro'
import Footer from '../Footer'
import MetaData from '../MetaData'
import { createGlobalStyle } from 'styled-components'
import Newsletter from '../Newsletter'

// https://github.com/ben-rogerson/twin.macro/issues/773
const filteredGlobalStyles = Object.fromEntries(
  Object.entries(globalStyles).filter(
    k => k[0] !== `button, [type='button'], [type='reset'], [type='submit']`
  )
)

// @ts-ignore
const GlobalStyles = createGlobalStyle(filteredGlobalStyles)

const Layout: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <MetaData />
      <GlobalStyles />
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </>
  )
}

export default Layout
