import {Feed} from '../../src/js/components/feed'

import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai'

describe('Feed component',()=>{
  const data ={
    link:'http://hello.com',
    id:1
  }
  it('it should render a div element with class feed',() =>{
    const wrapper = shallow(<Feed {...data}/>)
    expect(wrapper.is('.feed')).to.equal(true)
  })
  it('it should contains a image',() =>{
    const wrapper = shallow(<Feed {...data}/>)
    expect(wrapper.find('img').length).to.equal(1)
  })
})
