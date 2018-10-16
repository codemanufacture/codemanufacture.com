import * as React from 'react'
import uniqid from 'uniqid'
import Layout from '../components/Layout'
import menuItems from '../enums/homepageSections'
import HomepageSection from '../components/HomepageSection'

const HomePageContentPlaceholder = () => <p>Lorem ipsum dolor sit amet</p>

const HomePage = () => (
  <Layout>
    {menuItems.map(item => (
      <HomepageSection sectionId={item.sectionId} key={uniqid()}>
        <HomePageContentPlaceholder />
      </HomepageSection>
    ))}
  </Layout>
)

export default HomePage
