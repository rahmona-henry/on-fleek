import {Nav} from '../../src/js/components/nav'

import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai'
let assert = require('chai').assert;
const data ={
  pathname:'/'
}
describe('Nav component',()=>{
  it('it should render a nav element',() =>{
    const wrapper = shallow(<Nav location={data}/>)
    expect(wrapper.is('nav')).to.equal(true)
  })
  it('it should render 5 a navigators',() =>{
    const wrapper = mount(<Nav location={data}/>)
    expect(wrapper.find('a').length).to.equal(5)
  })

  it('default anchor should be feeds',() =>{
    const wrapper = mount(<Nav location={data}/>)
    expect(wrapper.find({class:'active'}).text()).to.equal('feeds')
  })

  it('location is profile,the active anchor should be profile',() =>{
    const wrapper = mount(<Nav location={{pathname:'/profile'}}/>)
    expect(wrapper.find({class:'active'}).text()).to.equal('profile')
  })
})
