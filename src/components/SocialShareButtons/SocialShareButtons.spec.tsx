import * as React from 'react'
import renderer from 'react-test-renderer'
import SocialShareButtons from './SocialShareButtons'

describe('SocialShareButtons component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SocialShareButtons />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
