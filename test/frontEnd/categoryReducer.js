import categories from '../../src/js/reducers/categories'

import {expect} from 'chai'
let assert = require('chai').assert;

describe('categories reducer',() => {
  it('INITIAL_CATEGORIES', () =>{
    const initState = []
    const data = [{
      id: 1,
      category: "street"
    },{
      id: 2,
      category: "high fashion"
    }]
    expect(categories(initState,{
      type:'LOAD_CATEGORIES',
      categories : data
    })).to.deep.equal(data)
  })

  it('default return previous state', () =>{
    const initState = []
    const data = [{
      id: 1,
      category: "street"
    },{
      id: 2,
      category: "high fashion"
    }]
    expect(categories(initState,{
      type:'LOAD_SOMETHINGELSE',
      categories : data
    })).to.deep.equal([])
  })
})
