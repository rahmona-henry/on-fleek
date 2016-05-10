import {Signin} from '../../src/js/components/signinForm'

import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai'

describe.only('Sign in form component',()=>{
  it('it should render a form element',() =>{
    const wrapper = shallow(<Signin />)
    expect(wrapper.find('form').length).to.equal(1)
  })
  it('it should contains 2 input elemnts',() =>{
    const wrapper = shallow(<Signin />)
    expect(wrapper.find('input').length).to.equal(2)
  })
  it('it should contain facebook login',()=>{
    const wrapper = shallow(<Signin />)
    expect(wrapper.find('[href="auth/facebook"]').contains('facebook')).to.equal(true)
  })
  it('it should contain instagram login',()=>{
    const wrapper = shallow(<Signin />)
    expect(wrapper.find('[href="auth/instagram"]').contains('instagram')).to.equal(true)
  })
})
