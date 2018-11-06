import * as React from 'react'
import renderer from 'react-test-renderer'
import MobileMenuTrigger from './MobileMenuTrigger'

describe('MobileMenuTrigger component', () =>
  it('renders correctly', () => {
    const props = {
      onClick: jest.fn(),
    }

    const tree = renderer.create(<MobileMenuTrigger {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
