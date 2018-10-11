import * as React from 'react'
import Layout from '../Layout'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../../theme'
import Container from '../PageContainer'

const StyledComingSoon = styled.div`
  margin: 0 auto;
  width: 100%;

  /* stylelint-disable-next-line */
  ${Container} {
    max-width: 600px;
  }

  img {
    max-width: 100%;
  }

  a {
    color: ${colors.brand};
  }

  h1 {
    font-size: 2rem;
    text-rendering: optimizeLegibility;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 1.45rem;
  }

  p {
    padding: 0;
  }

  h1,
  h2,
  img,
  p {
    margin: 0 0 1.45rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 767px) and (min-height: 412px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const StyledButtonLink = styled.a`
  background: ${colors.brand};
  border: 1px ${colors.brand} solid;
  border-radius: 3px;
  color: ${colors.background} !important;
  display: block;
  font-size: 16px;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
`

const ComingSoon = () => (
  <StyledComingSoon>
    <Layout>
      <div>
        <h1>Oops</h1>
        <p>
          You caught me! My Consultancy and Tech Blog focused on AWS,
          Serverless, React, Magento is almost ready.
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
    </Layout>
  </StyledComingSoon>
)

export default ComingSoon
