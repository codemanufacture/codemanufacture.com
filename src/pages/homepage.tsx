import * as React from 'react'
import Layout from '../components/Layout'
import HomepageSection from '../components/HomepageSection'
import ServicesSection from '../components/ServicesSection'

const HomePage = () => (
  <Layout>
    <HomepageSection sectionId="home" />
    <HomepageSection sectionId="services">
      <ServicesSection />
    </HomepageSection>
  </Layout>
)

export default HomePage
