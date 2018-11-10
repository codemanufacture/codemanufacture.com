import * as React from 'react'
import renderer from 'react-test-renderer'
import MainMenu from './MainMenu'

describe('MainMenu component', () =>
  it('renders correctly', () => {
    const props = {
      isMobileMenuActive: false,
      onMenuClick: jest.fn(),
    }

    const tree = renderer.create(<MainMenu {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
