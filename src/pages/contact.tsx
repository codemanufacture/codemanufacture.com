import * as React from 'react'
import Layout from '../components/Layout'

const Contact = () => (
  <Layout>
    <div>
      <h1>Contact</h1>
      <p>
        Email:{` `}
        <a href="mailto:contact@codemanufacture.com">
          contact@codemanufacture.com
        </a>
        <br />Call: +44 7951608683
      </p>
    </div>
  </Layout>
)

export default Contact
