import * as React from 'react'
import LegacyLayout from '../components/LegacyLayout'

const Contact = () => (
  <LegacyLayout>
    <div>
      <h1>Contact</h1>
      <p>
        Email:
        {` `}
        <a href="mailto:contact@codemanufacture.com">
          contact@codemanufacture.com
        </a>
        <br />
        Call: +44 7951608683
      </p>
    </div>
  </LegacyLayout>
)

export default Contact
