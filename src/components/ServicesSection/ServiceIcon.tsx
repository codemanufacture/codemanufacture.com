import * as React from 'react'
import { ServicesElement } from '../../enums/services'

interface ServiceIconInterface {
  service: ServicesElement
}

const ServiceIcon: React.SFC<ServiceIconInterface> = ({ service }) => (
  <li>
    <figure>
      <img src={`/assets/${service.iconName}.svg`} alt={service.name} />
      <figcaption>{service.name}</figcaption>
    </figure>
  </li>
)

export default ServiceIcon
