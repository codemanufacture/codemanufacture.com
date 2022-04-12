import * as React from 'react'
import LegacyHeader from '../LegacyHeader'
import Container from '../PageContainer'
import GlobalStyle from '../../theme/globalStyle'
import MetaData from '../MetaData'

interface LegacyLayoutProps {
  children?: React.ReactNode
}

const LegacyLayout: React.FunctionComponent<LegacyLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <MetaData />
      <GlobalStyle />
      <LegacyHeader />
      <Container>{children}</Container>
    </>
  )
}

export default LegacyLayout
