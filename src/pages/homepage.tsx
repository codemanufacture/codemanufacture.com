import * as React from 'react'
import Layout from '../components/Layout'
import HomepageSection from '../components/HomepageSection'
import ServicesSection from '../components/ServicesSection'
import ContactForm from '../components/ContactForm'

const HomePage = () => (
  <Layout>
    <HomepageSection sectionId="home" />
    <HomepageSection sectionId="services">
      <ServicesSection />
    </HomepageSection>
    <HomepageSection sectionId="contact">
      <ContactForm />
    </HomepageSection>
  </Layout>
)

export default HomePage
