import * as React from 'react'

export interface ServiceIconProps {
  icon: string
  name: string
}

const ServiceIcon: React.FunctionComponent<ServiceIconProps> = ({
  icon,
  name,
}) => (
  <li>
    <figure>
      <img src={icon} alt={`${name}`} />
      <figcaption>{name}</figcaption>
    </figure>
  </li>
)

export default ServiceIcon
