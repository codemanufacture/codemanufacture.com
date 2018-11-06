import * as React from 'react'
import * as Icon from './images/github.svg'
import SocialIcon from './SocialIcon'

const GithubIcon = () => (
  <SocialIcon
    backgroundColor="#24292e"
    icon={Icon}
    name="Github"
    url="https://github.com"
    width={20}
    height={20}
  />
)

export default GithubIcon
