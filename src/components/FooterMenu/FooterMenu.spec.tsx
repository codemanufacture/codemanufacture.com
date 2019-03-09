import * as React from 'react'
import renderer from 'react-test-renderer'
import FooterMenu from './FooterMenu'

describe('FooterMenu component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FooterMenu />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
