//import utils
import _ from 'lodash'
//import modules
import React,{ Component } from 'react'
import { connect } from 'react-redux'
// components

class DrawerMenu extends Component{

  render(){
    return (
      <div className="drawer-underlay">
        <div className="drawer-menu">
          <ul>
            <li onClick={this.props.choose.bind(this, "location")}>Location</li>
            {this.props.user.name!=='visitor'?
              <li onClick={this.props.choose.bind(this, "followers")}>Followers</li> : ''}
            <li onClick={this.props.choose.bind(this, "trending")}>Trending</li>
            <li onClick={this.props.choose.bind(this, "categories")}>Categories</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(DrawerMenu)
export {
  DrawerMenu
}
