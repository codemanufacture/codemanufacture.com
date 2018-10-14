import * as React from 'react'
import styled from 'styled-components'

interface HomepageSectionProps {
  children: object
  sectionId: string
}

const StyledHomepageSection = styled.section`
  height: 100vh;
  border-bottom: 1px solid #999;
`

const HomepageSection: React.SFC<HomepageSectionProps> = (
  { children },
  sectionId
) => <StyledHomepageSection id={sectionId}>{children}</StyledHomepageSection>

export default HomepageSection
