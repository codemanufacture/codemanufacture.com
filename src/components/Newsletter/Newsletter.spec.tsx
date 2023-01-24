import * as React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Newsletter from './Newsletter'

describe('Newsletter component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Newsletter />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
