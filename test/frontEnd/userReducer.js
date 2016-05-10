import user      from '../../src/js/reducers/user'

import {expect} from 'chai'
let assert = require('chai').assert;

describe('user reducer',() => {
  it('default return previous state', () =>{
    const initState = []
    const data = [{
      id: 1,
      category: "street"
    }]
    expect(user(initState,{
      type:'LOAD_SOMERUM',
      user : data
    })).to.deep.equal(initState)
  })

  it('LOAD user FROM SERVER', () =>{
    const initState = []
    const data = {
      id: 1,
      name : 'Obama',
      link: 'http://cityweeken.com'
    }
    expect(user(initState,{
      type:'USER_LOGIN',
      user : data
    })).to.deep.equal(data)
  })
})
