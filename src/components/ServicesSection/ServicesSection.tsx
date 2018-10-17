import * as React from 'react'
import styled from 'styled-components'
import services, { ServicesElement } from '../../enums/services'

const StyledServicesSection = styled.ul`
  display: grid;
  grid: auto-flow / 30% 30% 30%;
  row-gap: 60px;
  list-style: none;
  width: 66%;
  margin: 0 auto;

  li {
    display: flex;
    flex-direction: column;

    figure {
      display: flex;
      flex-direction: column;
      margin: auto;
    }

    img {
      width: 128px;
      max-height: 100px;
      margin: auto auto 30px auto;
    }

    figcaption {
      margin: auto;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`

interface ServiceIconInterface {
  service: ServicesElement
}

const ServiceIcon: React.SFC<ServiceIconInterface> = ({ service }) => {
  console.log(service)

  return (
    <li>
      <figure>
        <img src={`/assets/${service.iconName}.svg`} alt={service.name} />
        <figcaption>{service.name}</figcaption>
      </figure>
    </li>
  )
}

const ServicesSection = () => (
  <StyledServicesSection>
    {services.map((service: ServicesElement) => (
      <ServiceIcon key={`service-icon-${service.iconName}`} service={service} />
    ))}
  </StyledServicesSection>
)

export default ServicesSection
