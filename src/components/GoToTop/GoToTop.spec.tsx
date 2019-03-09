import * as React from 'react'
import renderer from 'react-test-renderer'
import GoToTop from './GoToTop'

describe('GoToTop component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GoToTop />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
