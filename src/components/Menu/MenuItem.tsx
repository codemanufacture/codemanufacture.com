import * as React from 'react'
import { Link } from 'gatsby'
import MenuItemInterface from '../Menu/MenuItemInterface'

interface MenuItemProps {
  item: MenuItemInterface
}

const MenuItem: React.SFC<MenuItemProps> = props => (
  <li>
    <Link to={`/homepage#${props.item.sectionId}`} title={props.item.name}>
      {props.item.name}
    </Link>
  </li>
)

export default MenuItem
