import * as React from 'react'
import LegacyLayout from '../LegacyLayout'
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

const ComingSoon = () => (
  <StyledComingSoon>
    <LegacyLayout>
      <div>
        <h2>Services</h2>
        <p>
          <ul>
            <li>Magento store development</li>
            <li>Magento extension development</li>
            <li>Code review</li>
            <li>Team augmentation</li>
          </ul>
        </p>
        <h3>Contact</h3>
        <p>
          Email:
          {` `}
          <a href="mailto:contact@codemanufacture.com">
            contact@codemanufacture.com
          </a>
          <br />
          Call: <a href="tel:+44 7951608683">+44 7951 608 683</a>
        </p>
        <p>
          <Link to="/privacy-policy/">Privacy policy</Link>
        </p>
      </div>
    </LegacyLayout>
  </StyledComingSoon>
)

export default ComingSoon
