//import utils
import _ from 'lodash'
import request from 'superagent'
//import modules
import React,{Component} from 'react'
import { connect } from 'react-redux'
// components
import Feed  from '../feed'
import Searching from '../searching'
import Location from './location'
import DrawerMenu from '../drawerMenu'
import FollowerFeed from '../followerFeed'
import Trending from '../trending'
import Categories from '../categories'
//actions
import { _updatePossibleLocations, _setMatchingLocations, _updateSearchString } from '../../actions/index'

class Filter extends Component{
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
      content: <Trending />,
      searchString: ""
    }
  }

  toggleDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  generateDrawer() {
    return this.state.drawerOpen ? <div className="open-drawer">
    </div> :
    <div className="closed-drawer"></div>
  }

  handleInputChange(e) {
    console.log(this.state.searchString)
    this.setState({
      ...this.state,
      searchString: e.target.value
    })
  }

  chooseContent(itemCalledFrom) {
  //TODO refactor this function cause switch statements are ugggggly
    this.toggleDrawer()
    console.log('print out top')
    let selection = ""
    switch(itemCalledFrom){
      case "location":
        selection = <Location />
        break
      case "followers":
        selection = <FollowerFeed />
        break
      case "trending":
        selection = <Trending />
        break
      case "categories":
        selection = <Categories/>
        console.log('print out sleect')
        break
    default:
      selection = ""
    }
    this.setState({
      ...this.setState,
      content: selection
    })
  }

  render(){
    return (
      <div className="filter-page">
        <div className="settings-bar">
          <div onClick={this.toggleDrawer.bind(this)}className="menu-toggle"></div>
            <input
              onChange={this.handleInputChange.bind(this)}
              type="search"
              placeholder="Search..."
              className="searchbar"
              />
        </div>
        {this.state.content}
        {this.state.drawerOpen? <DrawerMenu choose={this.chooseContent.bind(this)} /> : ""}
      </div>
    )
  }
}

export default connect(state => state)(Filter)
export {
  Filter
}
