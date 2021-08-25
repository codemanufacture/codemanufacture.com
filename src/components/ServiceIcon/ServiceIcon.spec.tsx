import * as React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import ServiceIcon from './ServiceIcon'

describe('ServiceIcon component', () => {
  it('renders correctly', () => {
    const props = {
      icon: '/icon.svg',
      name: 'service',
    }

    const tree = renderer.create(<ServiceIcon {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
