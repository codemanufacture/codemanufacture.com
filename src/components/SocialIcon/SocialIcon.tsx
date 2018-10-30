import * as React from 'react'

export interface SocialIconProps {
  icon: string
  name: string
  url: string
}

const SocialIcon: React.SFC<SocialIconProps> = ({ icon, name, url }) => (
  <li>
    <figure>
      <a href={url} rel="noopener norefferer" target="_blank">
        <img src={icon} alt={`${name}`} />
      </a>
    </figure>
  </li>
)

export default SocialIcon
