import * as React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Oops</h1>
    <p>
      You caught me! My Consultancy and Tech Blog focused on AWS, Serverless,
      React, Magento is almost ready.
    </p>
    <p>
      <a
        href="http://eepurl.com/dpY3Az"
        style={{
          background: '#208bc3',
          border: '1px #208bc3 solid',
          borderRadius: '3px',
          color: '#fff',
          display: 'block',
          fontSize: '16px',
          padding: '10px 10px',
          textAlign: 'center',
          textDecoration: 'none',
          width: '100%',
        }}
      >
        Notify me when the site is finished
      </a>
    </p>
    <h3>Contact</h3>
    <p>Need help in meantime or just want to say hello?</p>
    <p>
      Email:{` `}
      <a href="mailto:contact@codemanufacture.com">
        contact@codemanufacture.com
      </a>
      <br />Call: +44 7951608683
    </p>
    <p>
      <Link to="/privacy-policy/">Privacy policy</Link>
    </p>
  </div>
)

export default IndexPage
