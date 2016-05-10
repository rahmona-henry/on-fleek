import filter      from '../../src/js/reducers/filter'

import {expect} from 'chai'
let assert = require('chai').assert;

describe('filter reducer',() => {
  it('default return previous state', () =>{
    const initState = []
    const data = [{
      id: 1,
      category: "street"
    }]
    expect(filter(initState,{
      type:'LOAD_SOMERUM',
      possibleLocations : data
    })).to.deep.equal(initState)
  })

  it('LOAD possibleLocations FROM SERVER', () =>{
    const initState = []
    const data = {
      id: 1,
      city : 'beijing',
      link: 'http://cityweeken.com'
    }
    expect(filter(initState,{
      type:'FILTER_FEED_LOCATION',
      possibleLocations : data
    })).to.deep.equal(data)
  })
})
