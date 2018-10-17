import * as React from 'react'
import styled from 'styled-components'
import { sizes } from '../../theme'
import ServicesSection from '../ServicesSection'

interface HomepageSectionProps {
  children: object
  sectionId: string
}

const StyledHomepageSection = styled.section`
  height: 100vh;
  border-bottom: 1px solid #999;
  padding-top: ${sizes.headerHeight};
  text-align: center;
`

const HomepageSection: React.SFC<HomepageSectionProps> = ({
  children,
  sectionId,
}) => (
  <StyledHomepageSection id={sectionId}>
    {children}
    {sectionId}
    <ServicesSection />
  </StyledHomepageSection>
)

export default HomepageSection
