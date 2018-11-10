import * as React from 'react'
import { Link } from 'gatsby'

interface MenuItemProps {
  name: string
  pagePath: string
}

const MenuItem: React.SFC<MenuItemProps> = ({ pagePath, name }) => (
  <li>
    <Link to={pagePath} title={name}>
      {name}
    </Link>
  </li>
)

export default MenuItem
