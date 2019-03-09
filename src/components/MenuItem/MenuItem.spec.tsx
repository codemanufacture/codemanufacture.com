import * as React from 'react'
import renderer from 'react-test-renderer'
import MenuItem from './MenuItem'

describe('MenuItem component', () => {
  it('renders correctly', () => {
    const props = {
      name: 'abc',
      pagePath: '/qwe',
    }

    const tree = renderer.create(<MenuItem {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
