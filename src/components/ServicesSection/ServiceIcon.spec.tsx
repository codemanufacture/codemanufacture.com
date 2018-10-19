import * as React from 'react'
import renderer from 'react-test-renderer'
import ServiceIcon from './ServiceIcon'

describe('ServiceIcon component', () =>
  it('renders correctly', () => {
    const props = {
      service: {
        iconName: 'icon',
        id: 'daa4b027-255f-5eeb-98d3-cf0e572859f2',
        name: 'service',
      },
    }

    const tree = renderer.create(<ServiceIcon {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
