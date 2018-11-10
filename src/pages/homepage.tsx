import * as React from 'react'
import Layout from '../components/Layout'
import HomepageSection from '../components/HomepageSection'
import ServicesSection from '../components/ServicesSection'
import MenuItemInterface from '../components/Menu/MenuItemInterface'

const HOMEPAGE_SECTIONS: MenuItemInterface[] = [
  {
    name: `Home`,
    sectionId: `home`,
  },
  {
    name: `Services`,
    sectionId: `services`,
  },
]

const HomePageContentPlaceholder = () => <p>Lorem ipsum dolor sit amet</p>

const HomePage = () => (
  <Layout>
    {HOMEPAGE_SECTIONS.map(item => (
      <HomepageSection sectionId={item.sectionId}>
        {item.sectionId === 'services' ? (
          <ServicesSection />
        ) : (
          <HomePageContentPlaceholder />
        )}
      </HomepageSection>
    ))}
  </Layout>
)

export default HomePage
