import * as React from 'react'
import { Link } from 'gatsby'
import * as logo from './images/logo.svg'

interface LogoProps {
  alt?: string
  src?: string
}

const Logo: React.SFC<LogoProps> = ({ alt }) => (
  <div>
    <Link to="/" title="Back to homepage">
      <img src={logo} alt={alt} />
    </Link>
  </div>
)

export default Logo
