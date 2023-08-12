import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from 'styled-components'
import Icon from './images/chevron.svg'
import classNames from 'classnames'
import { throttle } from 'throttle-debounce'
import { colors, transitions, zIndexes } from '../../theme'

const StyledGoToTop = styled.a`
  display: flex;
  opacity: 0;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  position: fixed;
  z-index: ${zIndexes.goToTop};
  right: 30px;
  bottom: 30px;
  background: rgba(0, 0, 0, 0.3);
  transition:
    background ${transitions.basicTransition},
    opacity ${transitions.basicTransition};
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: initial;
  }

  &:hover {
    background: ${colors.brand};
  }

  img {
    margin: auto;
  }
`

const GoToTop: FunctionComponent = () => {
  const [buttonVisibility, setButtonVisibility] = useState(false)
  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault()
    window.scroll(0, 0)
  }

  const handler = throttle(100, () => {
    if (window.scrollY > 0 && !buttonVisibility) {
      setButtonVisibility(true)
    } else if (window.scrollY === 0) {
      setButtonVisibility(false)
    }
  })

  useEffect(() => {
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  })

  const buttonClassName = classNames({
    active: buttonVisibility,
  })

  return (
    <StyledGoToTop
      className={buttonClassName}
      title="Go to top"
      href="#go-to-top"
      onClick={e => handleClick(e)}
    >
      <img src={Icon} alt="Go to top" width={12} />
    </StyledGoToTop>
  )
}

export default GoToTop
