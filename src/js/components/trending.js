//import utils
import _ from 'lodash'
//import modules
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// components
import Feed  from './feed'
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
            { this.props.trending.map((feed) => {
              return <Feed key={feed.id} {...feed}/>
            })}
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
