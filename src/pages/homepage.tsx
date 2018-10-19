import * as React from 'react'
import Layout from '../components/Layout'
import menuItems from '../enums/homepageSections'
import HomepageSection from '../components/HomepageSection'
import ServicesSection from '../components/ServicesSection'

const HomePageContentPlaceholder = () => <p>Lorem ipsum dolor sit amet</p>

const HomePage = () => (
  <Layout>
    {menuItems.map(item => (
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
