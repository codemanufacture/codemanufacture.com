import * as React from 'react'
import { HomepageSectionElement } from '../../enums/homepageSections'

interface MenuItemProps {
  item: HomepageSectionElement
  onClick: () => void
}

const MenuItem: React.SFC<MenuItemProps> = props => (
  <li>
    <a
      href={`#${props.item.sectionId}`}
      title={`#${props.item.name}`}
      onClick={() => props.onClick()}
    >
      {props.item.name}
    </a>
  </li>
)

export default MenuItem
