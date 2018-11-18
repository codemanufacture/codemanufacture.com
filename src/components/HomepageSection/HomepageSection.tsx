import * as React from 'react'
import styled from 'styled-components'
import { sizes } from '../../theme'

interface HomepageSectionProps {
  children?: React.ReactNode
  sectionId: string
}

const StyledHomepageSection = styled.section`
  padding-top: ${sizes.headerHeight};
  padding-bottom: ${sizes.headerHeight};
  text-align: center;
`

const HomepageSection: React.SFC<HomepageSectionProps> = ({
  children,
  sectionId,
}) => <StyledHomepageSection id={sectionId}>{children}</StyledHomepageSection>

export default HomepageSection
