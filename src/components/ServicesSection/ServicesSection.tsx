import * as React from 'react'
import styled from 'styled-components'
import services, { ServicesElement } from '../../enums/services'
import { displayDimensions } from '../../theme'
import ServiceIcon from './ServiceIcon'

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
      max-height: 60px;
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
  <StyledServicesSection>
    {services.map((service: ServicesElement) => (
      <ServiceIcon key={`service-icon-${service.iconName}`} service={service} />
    ))}
  </StyledServicesSection>
)

export default ServicesSection
