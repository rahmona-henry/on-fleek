import feeds      from '../../src/js/reducers/feeds'

import {expect} from 'chai'
let assert = require('chai').assert;

describe('feeds reducer',() => {
  it('default return previous state', () =>{
    const initState = []
    const data = [{
      id: 1,
      category: "street"
    }]
    expect(feeds(initState,{
      type:'LOAD_SOMERUM',
      feeds : data
    })).to.deep.equal(initState)
  })

  it('LOAD FEEDS FROM SERVER', () =>{
    const initState = []
    const data = [{
      id: 1,
      categoryId: 6,
      cityId : '1',
      link: 'http://cityweeken.com'
    }]
    expect(feeds(initState,{
      type:'LOAD_FEEDS',
      feeds : data
    })).to.deep.equal(data)
  })

  it('ADD NEW FEED TO STATE', () =>{
    const initState = [{
      id: 1,
      categoryId: 6,
      cityId : '1',
      link: 'http://cityweeken.com'
    }]
    const data = {
      id: 2,
      categoryId: 7,
      cityId : '1',
      link: 'http://cityweeken.com'
    }
    const expectData = [{
      id: 1,
      categoryId: 6,
      cityId : '1',
      link: 'http://cityweeken.com'
    },{
      id: 2,
      categoryId: 7,
      cityId : '1',
      link: 'http://cityweeken.com'
    }]
    expect(feeds(initState,{
      type:'ADD_NEW_FEED',
      feed : data
    })).to.deep.equal(expectData)
  })
})
