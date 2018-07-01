import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { colors } from '../theme'

const StyledButtonLink = styled.a`
  background: ${colors.brand};
  border: 1px ${colors.brand} solid;
  border-radius: 3px;
  color: ${colors.background};
  display: block;
  font-size: 16px;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
`

const IndexPage = () => (
  <div>
    <h1>Oops</h1>
    <p>
      You caught me! My Consultancy and Tech Blog focused on AWS, Serverless,
      React, Magento is almost ready.
    </p>
    <p>
      <StyledButtonLink href="http://eepurl.com/dpY3Az">
        Notify me when the site is finished
      </StyledButtonLink>
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
