import * as React from 'react'
import styled from 'styled-components'
import { displayDimensions } from '../../theme'
import {
  EcommerceConsultancyIcon,
  ExternalIntegrationsIcon,
  MagentoBuildIcon,
  MagentoSupportIcon,
  PowerfulExtensionsIcon,
  ResponsiveDesignIcon,
} from '../ServiceIcon'

const StyledServicesSection = styled.ul`
  display: grid;
  width: 66%;
  margin: 0 auto;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-content: space-evenly;
  row-gap: 60px;
  list-style: none;

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (max-width: ${displayDimensions.tabletSize}) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }

  li {
    display: flex;
    padding: 20px;
    flex-direction: column;

    figure {
      display: flex;
      margin: auto;
      flex-direction: column;
    }

    img {
      max-height: 100px;
      margin: auto auto 30px auto;

      @media (max-width: ${displayDimensions.tabletSize}) {
        margin-bottom: 15px;
      }
    }

    figcaption {
      margin: auto;
      font-size: 15px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`

const ServicesSection = () => (
  <React.Fragment>
    <h2>Services</h2>
    <StyledServicesSection>
      <MagentoBuildIcon />
      <ResponsiveDesignIcon />
      <EcommerceConsultancyIcon />
      <PowerfulExtensionsIcon />
      <ExternalIntegrationsIcon />
      <MagentoSupportIcon />
    </StyledServicesSection>
  </React.Fragment>
)

export default ServicesSection
