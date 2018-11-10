import * as React from 'react'
import Layout from '../components/Layout'
import HomepageSection from '../components/HomepageSection'
import ServicesSection from '../components/ServicesSection'

const HomePageContentPlaceholder = () => <p>Lorem ipsum dolor sit amet</p>

const HomePage = () => (
  <Layout>
    <HomepageSection sectionId="home">
      <HomePageContentPlaceholder />
    </HomepageSection>
    <HomepageSection sectionId="services">
      <ServicesSection />
    </HomepageSection>
  </Layout>
)

export default HomePage
