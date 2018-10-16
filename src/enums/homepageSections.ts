export interface HomepageSectionElement {
  name: string
  sectionId: string
}

const HOMEPAGE_SECTIONS: HomepageSectionElement[] = [
  {
    name: `Home`,
    sectionId: `home`,
  },
  {
    name: `About`,
    sectionId: `about`,
  },
  {
    name: `Services`,
    sectionId: `services`,
  },
  {
    name: `Contact`,
    sectionId: `contact`,
  },
]

export default HOMEPAGE_SECTIONS
