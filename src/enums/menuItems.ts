export interface MenuItem {
  name: string
  targetElement: string
}

const MENU_ITEMS: MenuItem[] = [
  {
    name: `Home`,
    targetElement: `123`,
  },
  {
    name: `About`,
    targetElement: `123`,
  },
  {
    name: `Services`,
    targetElement: `321`,
  },
  {
    name: `Contact`,
    targetElement: `456`,
  },
]

export default MENU_ITEMS
