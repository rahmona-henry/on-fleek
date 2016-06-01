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
import { _updatePossibleLocations, _setMatchingLocations, _updateSearchString, getPossibleLocations } from '../../actions/index'

class Filter extends Component{
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false,
      content: <Trending />,
      searchString: ""
    }
    this.props.dispatch(getPossibleLocations())
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
    this.setState({
      ...this.state,
      searchString: e.target.value
    })
  }

  chooseContent(itemCalledFrom) {
  //TODO refactor this function cause switch statements are ugggggly
    this.toggleDrawer()
    let selection = ""
    switch(itemCalledFrom){
      case "location":
        this.props.dispatch(_updateSearchString(""))
        selection = <Location />
        break
      case "followers":
        selection = <FollowerFeed />
        break
      case "trending":
        selection = <Trending />
        break
      case "categories":
        this.props.dispatch({type:'TOGGLE_SHOWCATEGORY_STATUS',value:true})
        selection = <Categories/>
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
          <div onClick={this.toggleDrawer.bind(this)}className="menu-toggle">
            <img src="images/three-burger.png" />
            {this.props.user.name === 'visitor'? '' : <a href='/users/logout'>log out</a> }
          </div>
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
