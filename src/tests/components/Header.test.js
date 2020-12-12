import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'

test('should render Header correctlry',() =>{
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
   /*  const renderer = new ReactShallowRenders()
    renderer.render(<Header/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot() */
})