//import utils
import _ from 'lodash'
//import modules
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// components
import Feed  from './feed'
import Searching from './searching'
import DrawerMenu from './drawerMenu'
//actions

class Trending extends Component {
  constructor() {
    super()
    this.state = {
      content: "hey"
    }
  }
  change() {
    this.setState({content: "ho"})
  }
  render(){
    return (
      <div>
        <div className="feed-container">
          <ReactCSSTransitionGroup component="div" transitionAppear={true} transitionName="page-transition" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            <h1 onClick={this.change.bind(this)} key={'klk'}>{this.state.content}</h1>
          </ReactCSSTransitionGroup>
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
