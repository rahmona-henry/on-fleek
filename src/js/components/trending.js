//import utils
import _ from 'lodash'
//import modules
import React,{ Component } from 'react'
import { connect } from 'react-redux'
// components
import Feed  from './feed'
import Searching from './searching'
import DrawerMenu from './drawerMenu'
//actions

class Trending extends Component {

  render(){

    return (
      <div>
        <div className="feed-container">
            <h1>Trending</h1>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    trending: state.trending
  }
}

export default connect(mapStateToProps) (Trending)
export {
 Trending
}
