//import utils
import _ from 'lodash'
//import modules
import React,{Component} from 'react'
import { connect } from 'react-redux'
// components
import Location from './location'
import Searching from '../searching'
import DrawerMenu from '../drawerMenu'
import FollowerFeed from '../followerFeed'
import Trending from '../trending'
//actions
import { _updatePossibleLocations, _setMatchingLocations, _updateSearchString } from '../../actions/index'

class Settings extends Component{
  render(){
    return (
        <div className="settings-bar">
          <div onClick={this.toggleDrawer.bind(this)}className="menu-toggle"></div>
            <input
              onChange={this.handleInputChange.bind(this)}
              type="search"
              placeholder="Search..."
              className="searchbar"
              />
        </div>
    )
  }
}

export default connect(state => state)(Settings)
export {
  Settings
}
