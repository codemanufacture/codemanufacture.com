import * as React from 'react'
import Layout from '../components/Layout'
import menuItems from '../enums/homepageSections'
import HomepageSection from '../components/HomepageSection'
import ServicesSection from '../components/ServicesSection'

const HomePageContentPlaceholder = () => <p>Lorem ipsum dolor sit amet</p>

const HomePage = () => (
  <Layout>
    <HomepageSection sectionId={menuItems[0].sectionId}>
      <HomePageContentPlaceholder />
    </HomepageSection>
    <HomepageSection sectionId={menuItems[1].sectionId}>
      <HomePageContentPlaceholder />
    </HomepageSection>
    <HomepageSection sectionId={menuItems[2].sectionId}>
      <ServicesSection />
    </HomepageSection>
    <HomepageSection sectionId={menuItems[3].sectionId}>
      <HomePageContentPlaceholder />
    </HomepageSection>
  </Layout>
)

export default HomePage
