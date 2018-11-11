import * as React from 'react'
import LegacyHeader from '../LegacyHeader'
import Container from '../PageContainer'
import GlobalStyle from '../../theme/globalStyle'
import MetaData from '../MetaData'

interface LegacyLayoutProps {
  children: React.ReactNode
}

const LegacyLayout: React.SFC<LegacyLayoutProps> = ({ children }) => {
  return (
    <>
      <MetaData />
      <GlobalStyle />
      <LegacyHeader siteTitle="Codemanufacture - AWS and Magento Consultancy" />
      <Container>{children}</Container>
    </>
  )
}

export default LegacyLayout
