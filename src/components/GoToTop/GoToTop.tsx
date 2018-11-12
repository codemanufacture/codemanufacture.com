import * as React from 'react'
import styled from 'styled-components'
import * as Icon from './images/chevron.svg'
import classNames from 'classnames'
import throttle from 'lodash/throttle'
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
  transition: background ${transitions.basicTransition},
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

interface GoToTopState {
  isButtonVisible: boolean
}

class GoToTop extends React.PureComponent<{}, GoToTopState> {
  constructor(props: object) {
    super(props)
    this.state = {
      isButtonVisible: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 100))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const windowPosition = window.scrollY

    if (windowPosition > 0 && !this.state.isButtonVisible) {
      this.setState({ isButtonVisible: true })
    } else if (windowPosition === 0) {
      this.setState({ isButtonVisible: false })
    }
  }

  handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault()
    window.scroll(0, 0)
  }

  render() {
    const buttonClassName = classNames({
      active: this.state.isButtonVisible,
    })

    return (
      <StyledGoToTop
        className={buttonClassName}
        title="Go to top"
        href="#go-to-top"
        onClick={e => this.handleClick(e)}
      >
        <img src={Icon} alt="Go to top" width={12} />
      </StyledGoToTop>
    )
  }
}

export default GoToTop
