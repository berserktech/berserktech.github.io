import React from 'react'
import {mount} from 'enzyme'
import Site from './Site'

describe('<Site /> mount', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(<Site members={[]} />)
    expect(wrapper).toMatchSnapshot();
  })
});