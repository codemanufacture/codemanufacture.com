import * as React from 'react'
import { ServicesJson } from '../../graphql-types'

interface ServiceIconProps {
  service: ServicesJson
}

const ServiceIcon: React.SFC<ServiceIconProps> = ({ service }) => (
  <li>
    <figure>
      <img src={`/assets/${service.iconName}.svg`} alt={`${service.name}`} />
      <figcaption>{service.name}</figcaption>
    </figure>
  </li>
)

export default ServiceIcon
