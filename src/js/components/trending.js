//import utils
import _ from 'lodash'
//import modules
import React,{ Component } from 'react'
import { connect } from 'react-redux'
// components
import Feed  from './feed'
//actions

class Trending extends Component {

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
